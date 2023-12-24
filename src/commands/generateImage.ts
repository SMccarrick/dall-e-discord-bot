import {
	Client,
	ApplicationCommandType,
	CommandInteraction,
	ApplicationCommandOptionType,
} from "discord.js";
import { Command } from "./interfaces";
import openAI from "../services/open-ai";

export const GenerateImage: Command = {
	name: "gen",
	description: "Generate image based on prompt",
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: "prompt",
			description: "Enter a prompt to generate an image",
			type: ApplicationCommandOptionType.String,
			required: true,
		},
	],
	run: async (client: Client, interaction: CommandInteraction) => {
		try {
			const response = await openAI.images.generate({
				model: "dall-e-3",
				prompt: String(interaction.options.data[0].value),
				n: 1,
				size: "1024x1024",
			});

			const imageUrl = response.data[0].url;

			if (imageUrl) {
				await interaction.followUp({
					ephemeral: true,
					content: imageUrl,
				});
			}
		} catch (error) {
			console.error(`Error generating an image ${error}`);
		}
	},
};
