"use server";
import { cookies } from "next/headers";
import { logContactFormSubmission } from "@/lib/logger";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}
export async function sendContactRequest({
  name,
  email,
  message,
}: ContactRequest) {
  const contactExp = (await cookies()).get("contactRequestSent");
  let remaining = 0;
  if (contactExp) {
    const expires = new Date(contactExp?.value);
    remaining = expires.getTime() - Date.now();
  }
  const timestamp = new Date();

  if (remaining <= 0) {
    if (message && message.length <= 500) {
      const apiKey = process.env.BREVO_KEY;

      if (!apiKey) {
        console.error("BREVO_KEY environment variable is not configured");
        await logContactFormSubmission({
          name,
          email,
          message,
          timestamp,
          success: false,
        });
        return "EMAIL_CONFIGURATION_ERROR";
      }

      const apiUrl = "https://api.brevo.com/v3/smtp/email";

      const brevoData = {
        sender: {
          name: "Sycamore Hill",
          email: "michael@freno.me",
        },
        to: [
          {
            email: "bob@sycamorehillnj.com",
          },
        ],
        htmlContent: `<html><head></head><body><div>Request Name: ${name}</div><div>Request Email: ${email}</div><div>Request Message: ${message}</div></body></html>`,
        subject: `Sycamore Hill Contact Request`,
      };
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            accept: "application/json",
            "api-key": apiKey,
            "content-type": "application/json",
          },
          body: JSON.stringify(brevoData),
        });

        if (!response.ok) {
          const errorText = await response.text().catch(() => "Unknown error");
          console.error(
            `Brevo API error: ${response.status} ${response.statusText}`,
            errorText,
          );
          await logContactFormSubmission({
            name,
            email,
            message,
            timestamp,
            success: false,
          });
          return "SMTP server error: Sorry! You can reach us at bob@sycamorehillnj.com";
        }

        const exp = new Date(Date.now() + 1 * 60 * 1000);
        (await cookies()).set("contactRequestSent", exp.toUTCString());

        await logContactFormSubmission({
          name,
          email,
          message,
          timestamp,
          success: true,
        });

        return "email sent";
      } catch (e) {
        console.error("Failed to send contact request:", e);
        await logContactFormSubmission({
          name,
          email,
          message,
          timestamp,
          success: false,
        });
        return "SMTP server error: Sorry! You can reach us at bob@sycamorehillnj.com";
      }
    }
    return "message too long!";
  }
  return "countdown not expired";
}
