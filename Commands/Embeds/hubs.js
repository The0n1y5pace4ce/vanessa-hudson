const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("hubs")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed =  {
            "type": "rich",
            "title": `QantasGroup Aeronautica <:roored:1109001636434686022> Hubs`,
            "description": "",
            "color": 0x3a3a3a,
            "fields": [
              {
                "name": `<:roored:1109001636434686022> Norman`,
                "value": `- All Qantas Group airlines/aircraft operate out of Norman`
              },
              {
                "name": `<:roored:1109001636434686022> Eagle Island Estate`,
                "value": `- All QantasLink\n- All Qantas Freight (excluding 767 and A330F)\n- Qantas Mainline (737s, 707s and A321Neo only)\n- All Jetstar (excluding 787)\n- All narrowbody aircraft from other group airlines`
              },
              {
                "name": `<:roored:1109001636434686022> Kauwela Resort`,
                "value": `- All QantasLink\n-  QantasFreight (BAe 146F only)\n- Qantas Mainline (737 only)\n- All Jetstar (excluding A330 and 787)\n- All narrowbody aircraft from other group airlines`
              },
              {
                "name": `<:roored:1109001636434686022> Suli`,
                "value": `- Qantas Freight (767F and A330F only )\n- All Jetstar`
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
            },
            "footer": {
              "text": `Please note, these hubs are temporary until the Australian continent releases`,
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