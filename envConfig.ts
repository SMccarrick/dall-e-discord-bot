import * as z from "zod";

const EnvSchema = z.object({
	DISCORD_BOT_SECRET: z.string(),
	OPEN_AI_API_SECRET: z.string(),
});

type EnvType = z.infer<typeof EnvSchema>;

export const envConfig: EnvType = {
	DISCORD_BOT_SECRET: process.env.DISCORD_BOT_SECRET || "",
	OPEN_AI_API_SECRET: process.env.OPEN_AI_API_SECRET || "",
};

EnvSchema.parse(envConfig);
