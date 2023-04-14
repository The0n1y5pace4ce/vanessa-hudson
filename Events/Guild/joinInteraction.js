const chalk = require("chalk");
const {
  Client,
  CommandInteraction,
  ChatInputCommandInteraction,
  EmbedBuilder,
  Attachment,
  GuildMember,
  AttachmentBuilder
} = require("discord.js");

const { Welcomer } = require('canvacord')

module.exports = {
  name: "guildMemberAdd",

  /**
   * @param {Client} client
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client, member) {
    
      client.channels.cache.get("1095633006183583835").send({
        embeds: [
          new EmbedBuilder()
            .setTitle(`New Member Join!`)
            .setDescription(`Welcome <@${interaction.user.id}> to ${interaction.guild.name}! We hope you enjoy your stay!`)
            .addFields(
              {
                name: "Account Created",
                value: `<t:${parseInt(interaction.user.createdTimestamp / 1000)}:R>`,
                inline: true,
              },
              {
                name: "Member Count",
                value: `${interaction.guild.memberCount} members`,
                inline: true,
              }
            )
            .setColor("#DD0000")
            
            .setTimestamp()
        ],
      }).catch((err) => {
        console.log(err);
      });
  },
};