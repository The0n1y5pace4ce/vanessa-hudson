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
      .setName("kick")
      .setDescription("Remove a member from the server.")
      .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
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
          .setDescription("Provide a reason for this kick.")
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
  
      const dmEmbed = new EmbedBuilder()
        .setAuthor({
          name: `Kick Issued`,
          iconURL: guild.iconURL(),
        })
        .setColor("DD0000")
        .setDescription(
          [
            `You have been **Kicked** in ${interaction.guild.name}`,
            `Issuer: ${member}`,
            `\nReason: ${reason}`,
          ].join("\n")
        )
        .setFooter({
          iconURL: guild.iconURL(),
          text: `Server Bot | ${interaction.user.username}`,
        });
  
      const errorsEmbed = new EmbedBuilder()
        .setAuthor({
          name: "Could not kick member due to",
        })
        .setColor("Red");
  
      if (!target)
        return interaction.reply({
          embeds: [
            errorsEmbed.setDescription("Member has most likely left the guild."),
          ],
          ephermeral: true,
        });
  
      if (member.roles.highest.postion < target.roles.highest.postion)
        errorsArray.push("Selected member has a higher postion than you.");
  
      if (errorsArray.length)
        return interaction.reply({
          embeds: [errorsEmbed.setDescription(errorsArray.join("\n"))],
          ephermeral: true,
        });
  
      target.send({ embeds: [dmEmbed] });
      target.kick({ reason: reason }).catch((err) => {
        interaction.reply({
          embeds: [
            errorsEmbed.setDescription(
              "Could not kick user due to a uncommon error."
            ),
          ],
        });
        return console.log("Error occured in Kick.js", err);
      });
  
      const newInfractionsObject = {
        Type: "Kick",
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
          name: `Kick Issued`,
          iconURL: guild.iconURL(),
        })
        .setColor("DD0000")
        .setDescription(
          [
            `Kicked User: ${target}`,
            `Issuer: ${member}`,
            `Total Infraction Points: **${userData.Infractions.length}**`,
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
  