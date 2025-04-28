import { z } from "zod";

const createEnv = () => {
  const EnvSchema = z.object({
    API_URL: z.string(),
    API_HOSTNAME: z.string(),
    APP_URL: z.string().optional().default("http://localhost:3000"),
    CUSTOM_API: z.string(),
    WOOCOMMERCE_API: z.string(),
    WOOCOMMERCE_STORE_API: z.string(),
    WOOCOMMERCE_USERNAME: z.string(),
    WOOCOMMERCE_PASSWORD: z.string(),
  });

  const envVars = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    APP_URL: process.env.NEXT_PUBLIC_URL,
    API_HOSTNAME: process.env.NEXT_PUBLIC_API_HOSTNAME,
    CUSTOM_API: process.env.NEXT_PUBLIC_CUSTOM_API,
    WOOCOMMERCE_API: process.env.NEXT_PUBLIC_WOOCOMMERCE_API,
    WOOCOMMERCE_STORE_API: process.env.NEXT_PUBLIC_WOOCOMMERCE_STORE_API,
    WOOCOMMERCE_USERNAME: process.env.NEXT_PUBLIC_WOOCOMMERCE_USERNAME,
    WOOCOMMERCE_PASSWORD: process.env.NEXT_PUBLIC_WOOCOMMERCE_PASSWORD,
  };

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Переданы неправильные env-переменные:
  ${Object.entries(parsedEnv.error.flatten().fieldErrors)
    .map(([k, v]) => `- ${k}: ${v}`)
    .join("\n")}
  `
    );
  }

  return parsedEnv.data ?? {};
};

export const env = createEnv();
