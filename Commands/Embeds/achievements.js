const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("achievements")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed = {
            "type": "rich",
            "title": `QantasGroup Aeronautica <:roored:1109001636434686022> Achievements`,
            "description": "",
            "color": 0x3a3a3a,
            "fields": [
              {
                "name": `<:roored:1109001636434686022> Achievements`,
                "value": `- <@&1096639156555366551> - Log a valid flight from every Qantas hub!\n- <@&1096639290559180890> - Fly Norman-Anhedral with atleast 1 stopover.\n- <@&1096639428811817081> - Fly Norman-Anhedral or Norman-Clarence in the A350-1000, the chosen aircraft for Project Sunrise.\n- <@&1096639593161433088> - Fly Norman-Bilabadi in the Catalina, a recreation of the Double Sunrise flight undertaken during WWll between Australia and India.\n- <@&1096640271107764285> - Fly Norman-Tomfoolery and back in a 787-9, representing Qantas’s Antarctic Sightseeing flights which occur seasonally.\n- <@&1096640372307931257> - Fly Norman-Anhedral in the Super Constellation.\n- <@&1096640449483128955> - Fly the 707 on any route 75nm+ from Norman.\n- <@&1096640523579691069> - Fly the 747-200 from Norman to Al Tak.\n- <@&1096640604039020574> - Fly the 747SP from Norman to Meihua.\n- <@&1096640655301812244> - Own every aircraft in our fleet.`
              },
              {
                "name": `<:roored:1109001636434686022> To Request These Achievements, Request Them In <#1094838341842780250>`,
                "value": "\u200B"
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