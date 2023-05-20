const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction, ChannelType } = require('discord.js');
const welcomeSchema = require('../../Structures/Schemas/welcomeSchema');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-welcome')
        .setDescription('Setup your welcome channel')
        .setDMPermission(false)
        .addChannelOption(option => option.setName('channel').setDescription('Select a channel').addChannelTypes(ChannelType.GuildText).setRequired(false)),

        /**
         * 
         * @param {ChatInputCommandInteraction} interaction 
         */
    async execute(interaction) {
        let channel = interaction.options.getChannel('channel') || interaction.channel;

        const em = new EmbedBuilder();

        welcomeSchema.findOneAndDelete({GuildID: interaction.guildId}, async (err, data) => {
            if (!data) {
                await welcomeSchema.create({
                    GuildID: interaction.guildId,
                    ChannelID: channel.id
                })

                em.setDescription('Welcome channel has been set')
            } else if (data) {
                await welcomeSchema.deleteOne({GuildID: interaction.guildId})
                await welcomeSchema.create({
                    GuildID: interaction.guildId,
                    ChannelID: channel.id
                })

                em.setDescription('Welcome channel has been reset')
            }

            if (err) {
                em.setDescription('Something went wrong')
            }

            await interaction.reply({embeds: [em], ephemeral: true})
        })
    }
}