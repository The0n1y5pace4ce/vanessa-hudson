const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("crewlogs")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed =  {
            "type": "rich",
      "title": `Qantas Group Aeronautica <:roored:1109001636434686022> Crew Logs`,
      "description": "",
      "color": 0xdd0000,
      "fields": [
        {
          "name": `<:roored:1109001636434686022> Flight Logs`,
          "value": `- Make your flight log entries here: https://docs.google.com/forms/d/e/1FAIpQLSd7cXqwi4Gf0g36fW_cNZA7PLYdBndvzGLpeFuIjv69nHyXPw/viewform?usp=sf_link\n- View your flight logs here: https://docs.google.com/spreadsheets/d/18dPMXevfgUlg9x931YkkCuCeHIhdPboDyc1yBXy0bV4/edit?usp=sharing\n- Tips for sorting out your entries:\n   i. Create a filter view in the top right of the menu bar.\n   ii. Mouse over each column to see the total number.\n- What do the colours mean?\n  - Red indicates an error in the form, or an Operations Staff may ping you for it\n  - Green indicates payed salary\n  - Gray indicates Cadet or Unrakned, either of which can not earn salary`
        },
        {
          "name": `<:roored:1109001636434686022> Incident Reports`,
          "value": `**- Under Construction**`
        },
        {
          "name": `<:roored:1109001636434686022> Concerns?`,
          "value": `- If you have any questions or\n- If you are unsure about anything or\n- If you have made an error in your entries then ping a member of crew team in ⁠<#1109746827709923409>`
        }
      ],
      "image": {
        "url": `https://media.discordapp.net/attachments/1101067497316306974/1101083901205696595/Qantas-Logo.png`,
        "height": 0,
        "width": 0
      },
      "author": {
        "name": `Qantas Group Aeronautica`,
        "icon_url": `https://media.discordapp.net/attachments/1095834535394017320/1108759679129108590/Kanga-02.png?width=910&height=910`
      }
        }

        interaction.channel.send({ embeds: [embed]})

      //   channel.messages.fetch(`1054619819917447208-1105696919398920263`).then(message => {
      //     message.edit({ embeds: [embed]});
      // }).catch(err => {
      //     console.error(err);
      //});
    }
}