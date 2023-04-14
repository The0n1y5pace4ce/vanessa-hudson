const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  const DataBase = require("../../Structures/Schemas/infractionsSchema");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("infractions")
      .setDescription("Will show the infractions of any member.")
      .addUserOption((options) =>
        options
          .setName("target")
          .setDescription("Select the member you would like to check.")
          .setRequired(true)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
      const { options, guild, member } = interaction;
  
      const target = options.getMember("target");
  
      const Infractions2 = new EmbedBuilder()
        .setAuthor({
          name: `Infractions`,
          iconURL: guild.iconURL(),
        })
        .setColor("DD0000")
        .setDescription(
          [`Member: ${target}`, `Total Infraction Points: **0**`].join("\n")
        )
        .setFooter({
          iconURL: guild.iconURL(),
          text: `Server Bot | ${interaction.user.username}`,
        });
  
      let userData = await DataBase.findOne({
        Guild: guild.id,
        User: target.id,
      });
  
      if (userData) {
        const Infractions1 = new EmbedBuilder()
          .setAuthor({
            name: `Infractions`,
            iconURL: guild.iconURL(),
          })
          .setColor("DD0000")
          .setDescription(
            [
              `Member: ${target}`,
              `Total Infraction Points: **${userData.Infractions.length}**`,
            ].join("\n")
          )
          .setFooter({
            iconURL: guild.iconURL(),
            text: `Server Bot | ${interaction.user.username}`,
          });
  
        return interaction.reply({ embeds: [Infractions1] });
      } else interaction.reply({ embeds: [Infractions2] });
    },
  };
  