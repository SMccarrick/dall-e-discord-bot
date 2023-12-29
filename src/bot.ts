import { Client, GatewayIntentBits, IntentsBitField } from "discord.js";
import { envConfig } from "../envConfig";
import { ready } from "./listeners/ready";
import { interactionCreate } from "./listeners/interactionCreate";

console.info("Bot is starting...");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  failIfNotExists: true,
});

client.on("error", (error) => {
  console.error("A client error occurred:", error);
});

client
  .login(envConfig.DISCORD_BOT_SECRET)
  .then(() => {
    ready(client);
    interactionCreate(client);
  })
  .catch((error) => {
    console.error(
      "Failed to log in, please make sure you provide a valid discord bot secret:",
      error,
    );
  });
