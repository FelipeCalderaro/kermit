import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../../command";

export const Ping: Command = {
    name: "ping",
    description: "Returns a pong message to the user",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: `Pong! I'm up by ${client.uptime}ms`
        });
    }
};