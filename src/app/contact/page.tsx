"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { sendContactRequest } from "../actions";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function ContactPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [sendRes, setSendRes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [countDown, setCountDown] = useState<number>(0);
  const timerIdRef = useRef<number | NodeJS.Timeout | null>(null);

  // Calculate remaining time from cookie
  const calcRemainder = (timer: string) => {
    const expires = new Date(timer);
    const remaining = expires.getTime() - Date.now();
    const remainingInSeconds = remaining / 1000;

    if (remainingInSeconds <= 0) {
      setCountDown(0);
      if (timerIdRef.current !== null) {
        clearInterval(timerIdRef.current);
      }
    } else {
      setCountDown(remainingInSeconds);
    }
  };

  // Check for existing cookie on component mount
  useEffect(() => {
    const timer = Cookies.get("contactRequestSent");
    if (timer) {
      timerIdRef.current = setInterval(() => calcRemainder(timer), 1000);
      return () => {
        if (timerIdRef.current !== null) {
          clearInterval(timerIdRef.current);
        }
      };
    }
  }, []);

  // Form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (countDown > 0) {
      setSendRes(
        `Please wait ${Math.ceil(
          countDown,
        )} seconds before sending another message.`,
      );
      setIsSuccess(false);
      return;
    }

    if (nameRef.current && emailRef.current && messageRef.current) {
      setIsSubmitting(true);
      setSendRes("");

      try {
        const result = await sendContactRequest({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        });

        if (result === "email sent") {
          setIsSuccess(true);
          setSendRes(
            "Message sent successfully! We'll get back to you as soon as possible.",
          );
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";

          // Set up countdown timer
          const timer = Cookies.get("contactRequestSent");
          if (timer) {
            if (timerIdRef.current !== null) {
              clearInterval(timerIdRef.current);
            }
            timerIdRef.current = setInterval(() => calcRemainder(timer), 1000);
          }
        } else {
          setIsSuccess(false);
          setSendRes(
            result || "Failed to send message. Please try again later.",
          );
        }
      } catch (error) {
        setIsSuccess(false);
        setSendRes("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Render countdown timer
  const renderTime = () => {
    return (
      <div className="timer">
        <div className="value">{Math.ceil(countDown)}</div>
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-white to-lime-50 mt-16">
      <div className="container mx-auto max-w-4xl px-4 mt-[10%]">
        <div className="relative mb-12 text-center">
          <h1 className="text-4xl font-bold text-lime-800 mb-3">Contact Us</h1>
          <p className="text-lime-700 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you're interested in our grapes,
            have questions about our vineyard, or want to schedule a visit,
            please reach out.
          </p>
          <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-lime-100 opacity-50 blur-3xl"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-48 md:h-auto">
              <Image
                src="/photos/landscape/1.JPG"
                alt="Vineyard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-lime-900/40 flex flex-col justify-end p-6 text-white">
                <h2 className="text-2xl font-semibold mb-2">
                  Sycamore Hill Vineyard
                </h2>
                <p className="text-sm opacity-90 mb-1">
                  Woolwich Township, New Jersey
                </p>
                <p className="text-sm opacity-90">
                  info@sycamorehillvineyard.com
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-lime-800 mb-1"
                    >
                      Name
                    </label>
                    <input
                      ref={nameRef}
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-lime-200 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all outline-none"
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-lime-800 mb-1"
                    >
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-lime-200 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all outline-none"
                      required
                      placeholder="your_email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-lime-800 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      ref={messageRef}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-lime-200 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all outline-none"
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  {countDown > 0 ? (
                    <div className="flex items-center">
                      <span className="text-lime-700 mr-3">Please wait:</span>
                      <CountdownCircleTimer
                        isPlaying
                        duration={60}
                        initialRemainingTime={countDown}
                        size={48}
                        strokeWidth={6}
                        colors="#65a30d"
                        colorsTime={undefined}
                        onComplete={() => ({ shouldRepeat: false })}
                      >
                        {renderTime}
                      </CountdownCircleTimer>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`py-3 px-6 rounded-lg font-medium text-white transition-all ${
                        isSubmitting
                          ? "bg-lime-400 cursor-wait"
                          : "bg-lime-700 hover:bg-lime-800 active:bg-lime-900"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  )}
                </div>

                {sendRes && (
                  <div
                    className={`text-center p-3 rounded-lg ${
                      isSuccess
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {sendRes}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-lime-700">
          <p>
            You can also reach us by phone at{" "}
            <span className="font-semibold">(555) 123-4567</span>
            <br />
            Or by email at{" "}
            <span className="font-semibold">bob@sycamorehillnj.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
