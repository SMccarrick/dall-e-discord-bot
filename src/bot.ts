import { Client, GatewayIntentBits, IntentsBitField } from "discord.js";
import { envConfig } from "../envConfig";
import { ready } from "./listeners/ready";
import { interactionCreate } from "./listeners/interactionCreate";

console.info("Bot is starting...");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login(envConfig.DISCORD_BOT_SECRET);

ready(client);
interactionCreate(client);

console.info(client);
