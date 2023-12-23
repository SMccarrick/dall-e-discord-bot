import * as z from "zod";

const EnvSchema = z.object({
	DISCORD_SECRET: z.string(),
	DISCORD_APPLICATION_ID: z.string(),
	DISCORD_PUBLIC_KEY: z.string(),
	OPEN_AI_API_SECRET: z.string(),
});

type EnvType = z.infer<typeof EnvSchema>;

export const envConfig: EnvType = {
	DISCORD_SECRET: process.env.DISCORD_SECRET || "",
	DISCORD_APPLICATION_ID: process.env.DISCORD_APPLICATION_ID || "",
	DISCORD_PUBLIC_KEY: process.env.DISCORD_PUBLIC_KEY || "",
	OPEN_AI_API_SECRET: process.env.OPEN_AI_API_SECRET || "",
};

EnvSchema.parse(envConfig);
