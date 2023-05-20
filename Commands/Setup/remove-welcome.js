const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction, Client } = require('discord.js');
const welcomeSchema = require('../../Structures/Schemas/welcomeSchema');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove-welcome')
        .setDescription('Remove welcome channel')
        .setDMPermission(false),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client
     */

    async execute(interaction, client) {
        welcomeSchema.findOne({GuildID: interaction.guildId}, async (err, data) => {
            if (!data || !data.ChannelID) return await interaction.reply({content: 'No welcome channel setup', ephemeral: true});
            else if (data) {
                await welcomeSchema.deleteMany();
                await interaction.reply({content: 'Welcome channel deleted', ephemeral: true});
            } 
            
        })
    }
}