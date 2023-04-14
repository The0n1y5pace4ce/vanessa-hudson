const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");
  const DataBase = require("../../Structures/Schemas/infractionsSchema");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("warn")
      .setDescription("Warn a member.")
      .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
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
          .setDescription("Provide a reason for this warning.")
          .setMaxLength(512)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interactions
     */
    async execute(interaction, client) {
      const { options, guild, member } = interaction;
  
      const target = options.getMember("target");
      const reason = options.getString("reason") || "None specified.";
  
      const errorsArray = [];
  
      const errorsEmbed = new EmbedBuilder()
        .setAuthor({
          name: "Could not warn member due to",
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
  
      const newInfractionsObject = {
        Type: "Warning",
        IssuerID: member.id,
        IssuerTag: member.user.tag,
        Reason: reason,
        Date: Date.now(),
      };
  
      let userData = await DataBase.findOne({ Guild: guild.id, User: target.id });
      if (!userData)
        userData = await DataBase.create({
          Guild: guild.id,
          User: target.id,
          Infractions: [newInfractionsObject],
        });
      else
        userData.Infractions.push(newInfractionsObject) &&
          (await userData.save());
  
      const successEmbed = new EmbedBuilder()
        .setAuthor({
          name: `Warning Issued`,
          iconURL: guild.iconURL(),
        })
        .setColor("DD0000")
        .setDescription(
          [
            `Warned User: ${target}`,
            `Issuer: ${member}`,
            `Total Infraction Points: **${userData.Infractions.length}**`,
            `\nReason: ${reason}`,
          ].join("\n")
        )
        .setFooter({
          iconURL: guild.iconURL(),
          text: `Server Bot | ${interaction.user.username}`,
        });
  
      const dmEmbed = new EmbedBuilder()
        .setAuthor({
          name: `Warning Issued`,
          iconURL: guild.iconURL(),
        })
        .setColor("DD0000")
        .setDescription(
          [
            `You have been **Warned** in ${interaction.guild.name}`,
            `Issuer: ${member}`,
            `Total Infraction Points: **${userData.Infractions.length}**`,
            `\nReason: ${reason}`,
          ].join("\n")
        )
        .setFooter({
          iconURL: guild.iconURL(),
          text: `Server Bot | ${interaction.user.username}`,
        });
  
      target.send({ embeds: [dmEmbed] });
      return interaction.reply({ embeds: [successEmbed] });
    },
  };
  