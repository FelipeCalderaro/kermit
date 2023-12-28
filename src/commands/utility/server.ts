import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../../command";

export const Server: Command = {
    name: "server",
    description: "Provides information about the server.",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.reply({
            content: `This server is ${interaction.guild?.name} and has ${interaction.guild?.memberCount} members.`
        });
    }
};
