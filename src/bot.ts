import { Client } from "discord.js";
import { envConfig } from "../envConfig";
import { ready } from "./listeners/ready";
import { interactionCreate } from "./listeners/interactionCreate";

console.info("Bot is starting...");

const client = new Client({
	intents: [],
});

client.login(envConfig.DISCORD_BOT_SECRET);

ready(client);
interactionCreate(client);

console.info(client);
