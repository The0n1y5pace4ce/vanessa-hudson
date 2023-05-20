const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("fictionalfleet")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed = {
          "type": "rich",
          "title": `QantasGroup Aeronautica <:roored:1109001636434686022> Fictional Fleet`,
          "description": "",
          "color": 0x3a3a3a,
          "fields": [
            {
              "name": `<:roored:1109001636434686022> Qantas Mainline`,
              "value": `- Aerospatiale/BAC Concorde\n- Airbus A330-900neo\n- Airbus A350-900ulr`
            }
          ],
          "image": {
            "url": `https://media.discordapp.net/attachments/1101067497316306974/1101083901205696595/Qantas-Logo.png?width=1446&height=910`,
            "height": 0,
            "width": 0
          },
          "author": {
            "name": `QantasGroup Aeronautica`,
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