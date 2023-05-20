const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    Client,
    PermissionFlagsBits,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    developers: false, //true
    data: new SlashCommandBuilder()
      .setName("user-info")
      .setDescription("Displays information about a user.")
      .setDMPermission(false)
      .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
      .addUserOption((op) =>
        op
          .setName("user")
          .setDescription("Select a User to get information.")
          .setRequired(true)
      ),
    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
      // Command to fetch information about a user
      const User = interaction.options.getUser("user");
  
      // Fetch the member information of the user in the server
      const TargetedUser = await interaction.guild.members.fetch(
        User.id || interaction.member.id
      );
      await TargetedUser.user.fetch();
  
      // Function to add suffix to the join position of the user
      function joinedSuff(number) {
        if (number % 100 >= 11 && number % 100 <= 13) return number + "th";
  
        switch (number % 10) {
          case 1:
            return number + "st";
          case 2:
            return number + "nd";
          case 3:
            return number + "th";
        }
        return number + "th";
      }
  
      // Fetch all the members in the server and sort them by join date
      const fetchMembers = await interaction.guild.members.fetch();
      const JoinPos =
        Array.from(
          fetchMembers
            .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
            .keys()
        ).indexOf(TargetedUser.id) + 1;
  
      // Get the accent color of the user, or set it to "Random" if it's not defined
      const Accent = TargetedUser.user.accentColor
        ? TargetedUser.user.accentColor
        : "Random";
  
      // Check the permissions of the user and set the appropriate role
      let index = 1;
      let Perm;
      if (TargetedUser.id === interaction.guild.ownerId) {
        Perm = ":crown: Server Owner";
      } else if (
        TargetedUser.permissions.has(PermissionFlagsBits.Administrator)
      ) {
        Perm = ":crown: Administrator";
      } else
        Perm = TargetedUser.permissions
          .toArray()
          .map((P) => `${index++}. ${P}.`)
          .join("\n");
  
      // Get the top 3 roles of the user
      const roles = TargetedUser.roles.cache
        .filter((role) => role.name !== "@everyone")
        .sort((a, b) => b.position - a.position)
        .map((role) => `• ${role.name}`)
        .slice(0, 3);
  
      // Create an embed message with the user's information
      const embed = new EmbedBuilder()
        .setAuthor({
          name: `${TargetedUser.user.username}`,
          iconURL:
            "https://cdn.discordapp.com/attachments/1064929361213530122/1066648072211410964/6879-member.png",
        })
        .setThumbnail(TargetedUser.user.avatarURL({ dynamic: true, size: 1024 }))
        .setColor(Accent)
        .setDescription(
          `**User information:** ${TargetedUser.user}
          
          **${TargetedUser.user.tag}** Joined as the **${joinedSuff(
            JoinPos
          )}** member 
          of this Guild(\`${interaction.guild.name}\`).
          `
        )
        .addFields(
          {
            name: `Joined Discord`,
            value: `<t:${parseInt(TargetedUser.user.createdTimestamp / 1000)}:R>`,
            inline: true,
          },
          {
            name: `Joined Server`,
            value: `<t:${parseInt(TargetedUser.joinedTimestamp / 1000)}:R>`,
            inline: true,
          },
          {
            name: `Nickname`,
            value: `\`\`\`${TargetedUser.nickname || "None"} \`\`\``,
          },
          {
            name: `ID`,
            value: `\`\`\` ${TargetedUser.id} \`\`\``,
            inline: true,
          },
          {
            name: `Color`,
            value: `\`\`\`${
              TargetedUser.user.accentColor
                ? `#${TargetedUser.user.accentColor.toString(16)}`
                : "None"
            }\`\`\``,
            inline: true,
          },
          {
            name: `Is a Bot`,
            value: `\`\`\`${TargetedUser.user.bot ? "Yes" : "No"} \`\`\``,
            inline: true,
          },
          {
            name: `Permissions`,
            value: `\`\`\`${Perm}\`\`\``,
          },
          {
            name: `Top (3)Roles`,
            value: `\`\`\`ansi\n${roles.join("\n")}\`\`\``,
          }
        );
  
      await interaction.reply({ embeds: [embed] });
    },
  };
  
  //Dev(https://discord.gg/PcnmhmNySC)
  