const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");
  const DataBase = require("../../Structures/Schemas/infractionsSchema");
  const ms = require("ms");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Perm Ban a member.")
      .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
      .setDMPermission(false)
      .addUserOption((options) =>
        options
          .setName("target")
          .setDescription("Select the target member.")
          .setRequired(true)
      )
      .addStringOption((options) =>
        options
          .setName("reason")
          .setDescription("Provide a reason for this ban.")
          .setMaxLength(512)
          .setRequired(true)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interactions
     */
    async execute(interaction, client) {
      const { options, guild, member } = interaction;
  
      const target = options.getMember("target");
      const reason = options.getString("reason");
  
      const errorsArray = [];
  
      const dmEmbed = new EmbedBuilder()
        .setAuthor({
          name: `Ban Issued`,
          iconURL: guild.iconURL(),
        })
        .setColor("DD0000")
        .setThumbnail(
          "https://media.discordapp.net/attachments/1059607121194393671/1059923413650640987/295678623038211.png?width=285&height=296"
        )
        .setDescription(
          [
            `You have been **Banned** in ${interaction.guild.name}`,
            `Issuer: ${member}`,
            `Total Infraction Points Have Been Wiped`,
            `\nReason: ${reason}`,
          ].join("\n")
        )
        .setFooter({
          iconURL: guild.iconURL(),
          text: `Server Bot | ${interaction.user.username}`,
        });
  
      const errorsEmbed = new EmbedBuilder()
        .setAuthor({
          name: "Could not ban member due to",
        })
        .setColor("Red");
  
      if (!target)
        return interaction.reply({
          embeds: [
            errorsEmbed.setDescription("Member has most likely left the guild."),
          ],
          ephermeral: true,
        });
  
      if (!target.manageable || !target.moderatable)
        errorsArray.push("Selected target is not moderatable by this bot.");
  
      if (member.roles.highest.postion < target.roles.highest.postion)
        errorsArray.push("Selected member has a higher postion than you.");
  
      if (errorsArray.length)
        return interaction.reply({
          embeds: [errorsEmbed.setDescription(errorsArray.join("\n"))],
          ephermeral: true,
        });
  
      target.send({ embeds: [dmEmbed] });
      target.ban({ reason: reason }).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              "Could not ban user due to a uncommon error."
            ),
          ],
        });
        return console.log("Error occured in Ban.js", err);
      });
  
      let userData = await DataBase.findOneAndDelete({
        Guild: guild.id,
        User: target.id,
      });
      if (!userData)
        interaction.reply({
          embeds: [successEmbed],
        });
  
      const successEmbed = new EmbedBuilder()
        .setAuthor({
          name: `Ban Issued`,
          iconURL: guild.iconURL(),
        })
        .setColor("DD0000")
        .setThumbnail(
          "https://media.discordapp.net/attachments/1059607121194393671/1059923413650640987/295678623038211.png?width=285&height=296"
        )
        .setDescription(
          [
            `Banned User: ${target}`,
            `Issuer: ${member}`,
            `Total Infraction Points Have Been Wiped`,
            `\nReason: ${reason}`,
          ].join("\n")
        )
        .setFooter({
          iconURL: guild.iconURL(),
          text: `Server Bot | ${interaction.user.username}`,
        });
      return interaction.reply({ embeds: [successEmbed] });
    },
  };
  