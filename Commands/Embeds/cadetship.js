const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("cadetship")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

    // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

      interaction.reply({ content: 'ok', ephemeral: true})

      const embed = {
        "type": "rich",
      "title": `Qantas Group Aeronautica <:roored:1109001636434686022> Cadetship Program`,
      "color": 0xdd0000,
      "fields": [
        {
          "name": `<:roored:1109001636434686022> Information`,
          "value": `QantasGroup Aeronautica offers a Cadetship Program for brand new Aeronautica members.`
        },
        {
          "name": `<:roored:1109001636434686022> Program Outline`,
          "value": `The QantasGroup Aeronautica | Cadetship Program comprises 2 career Paths.`
        },
        {
          "name": `<:roored:1109001636434686022> Path 1, Standard Cadetship`,
          "value": `1. Cadet applicant achieves single engine license.\n2. QantasGroup accepts applicant into program\n3. QantasGroup gives Cadet a KAI KC-100 in Qantas Cadet Livery to aid with achieving the WP needed for multi license.\n4. Cadet achieves multi license\n5. QantasGroup gives Cadet a Saab-340 in Qantas Cadet Livery to aid with achieving the WP needed for a jet license.\n6. Cadet achieves jet license.\n7. Cadet graduates from Cadetship and is accepted into the airline as a Third Officer.\n(Cadet can keep all planes given in the program)`
        },
        {
          "name": `<:roored:1109001636434686022> Path 2, Expedited Flight Training`,
          "value": `- Like the Standard Cadetship QantasGroup will give planes for assuring the time.\n- However, in Expedited, QantasGroup will also give all WP required for licenses.\n(Cadet can keep all planes given)`
        },
        {
          "name": `<:roored:1109001636434686022> Other Info`,
          "value": `- Cadet applicants may choose either Path.\n- Cadet applicants may join partway through the program.\n- A220`
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