const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
    PermissionsBitField
  } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('end-giveaway')
    .setDescription('End a giveaway')
    .addStringOption((option) => 
    option
        .setName('giveaway')
        .setDescription('The giveaway to end (message ID or giveaway prize)')
        .setRequired(true)
    ),

    async execute(interaction, client) {
         // If the member doesn't have enough permissions
         if(!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){
            return interaction.reply({
                content: ':x: You need to have the manage messages permissions to end giveaways.',
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

        if (giveaway.ended) {
            return interaction.reply({
                content: 'This giveaway is already ended.',
                ephemeral: true
            });
        }

        // Edit the giveaway
        client.giveawaysManager.end(giveaway.messageId)
        // Success message
        .then(() => {
            // Success message
            interaction.reply('Giveaway ended!');
        })
        .catch((e) => {
            interaction.reply({
                content: e,
                ephemeral: true
            });
        });
    }
}