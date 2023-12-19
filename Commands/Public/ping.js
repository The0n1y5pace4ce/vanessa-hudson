const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!"),
    execute(interaction, xnv) {
        const embed = new EmbedBuilder()
        .setTitle("Pong!")
        .setDescription(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(xnv.ws.ping)}ms`)
        .setColor(0x2C2F33)
        interaction.reply({ embeds: [embed] });
    }
};