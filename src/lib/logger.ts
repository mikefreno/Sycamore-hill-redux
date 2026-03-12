import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
});

export async function logContactFormSubmission({
  name,
  email,
  message,
  timestamp,
  success,
}: {
  name: string;
  email: string;
  message: string;
  timestamp: Date;
  success: boolean;
}) {
  const logEntry = {
    timestamp: timestamp.toISOString(),
    name,
    email,
    message,
    success,
  };

  const key = `contact-form/${timestamp.toISOString()}.json`;

  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: "sycamore-hill-logging",
        Key: key,
        Body: JSON.stringify(logEntry),
        ContentType: "application/json",
      })
    );
  } catch (error) {
    console.error("Failed to write log to S3:", error);
  }
}
