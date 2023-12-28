import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../../command";

export const User: Command = {
    name: "user",
    description: "Provides information about the user.",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.reply({
            content: `This command was run by ${interaction.user.username}`
        });
    }
};
