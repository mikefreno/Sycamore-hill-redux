import type { NextConfig } from "next";

const requiredEnvVars = ["BREVO_KEY"];

const nextConfig: NextConfig = {
  /* config options here */
};

if (process.env.NODE_ENV === "production") {
  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(", ")}`,
    );
  }
}

export default nextConfig;
