const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsBitField,
    ButtonBuilder
  } = require("discord.js");

const ms = require('ms')
const messages = require('../../Structures/Utils/messages')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('start-giveaway')
    .setDescription('Start a giveaway')
    .addStringOption((option) => 
    option
        .setName('duration')
        .setDescription('How long the giveaway should last for. Example values: 1m, 1h, 1d')
        .setRequired(true)
    )
    .addIntegerOption((option) =>
    option
        .setName('winners')
        .setDescription('How many winners the giveaway should have')
        .setRequired(true)
    )
    .addStringOption((option) =>
    option
        .setName('prize')
        .setDescription('What the prize of the giveaway should be')
        .setRequired(true)
    )
    .addChannelOption((option) =>
    option
        .setName('channel')
        .setDescription('The channel to start the giveaway in')
        .setRequired(true)
    ),

    async execute(interaction, client) {

        // If the member doesn't have enough permissions
        if(!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){
            return interaction.reply({
                content: ':x: You need to have the manage messages permissions to start giveaways.',
                ephemeral: true
            });
        }
    
        const giveawayChannel = interaction.options.getChannel('channel');
        const giveawayDuration = interaction.options.getString('duration');
        const giveawayWinnerCount = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');
        
        if(!giveawayChannel.isTextBased()) {
            return interaction.reply({
                content: ':x: Selected channel is not text-based.',
                ephemeral: true
            });
        }
    
        // Start the giveaway
        client.giveawaysManager.start(giveawayChannel, {
            // The giveaway duration
            duration: ms(giveawayDuration),
            // The giveaway prize
            prize: giveawayPrize,
            // The giveaway winner count
            winnerCount: giveawayWinnerCount,
            // Who hosts this giveaway
            hostedBy: client.config.hostedBy ? interaction.user : null,
            // Messages
            messages,
            buttons: {
                join: new ButtonBuilder()
                    .setLabel('Join')
                    .setStyle("Primary")
                    .setCustomId('join'),
                leave: new ButtonBuilder() // Optional as mentioned
                    .setLabel('Leave')
                    .setStyle("Secondary")
                    .setCustomId('leave')
            }
        });
    
        interaction.reply({content: `Giveaway started in ${giveawayChannel}!`, ephemeral: true});
    }
}