const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsBitField
  } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pause-giveaway')
    .setDescription('Pause a giveaway')
    .addStringOption((option) =>
    option
        .setName('giveaway')
        .setDescription('The giveaway to pause (message ID or giveaway prize)')
        .setRequired(true)),

    async execute(interaction, client) {
        // If the member doesn't have enough permissions
        if(!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){
            return interaction.reply({
                content: ':x: You need to have the manage messages permissions to pause giveaways.',
                ephemeral: true
            });
        }

        const query = interaction.options.getString('giveaway');

        // try to found the giveaway with prize then with ID
        const giveaway = 
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);

        // If no giveaway was found
        if (!giveaway) {
            return interaction.reply({
                content: 'Unable to find a giveaway for `'+ query + '`.',
                ephemeral: true
            });
        }

        if (giveaway.pauseOptions.isPaused) {
            return interaction.reply({
                content: 'This giveaway is already paused.',
                ephemeral: true
            });
        }

        // Edit the giveaway
        client.giveawaysManager.pause(giveaway.messageId)
        // Success message
        .then(() => {
            // Success message
            interaction.reply('Giveaway paused!');
        })
        .catch((e) => {
            interaction.reply({
                content: e,
                ephemeral: true
            });
        });
    }
}