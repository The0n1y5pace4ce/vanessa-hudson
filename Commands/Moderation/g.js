const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("g")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {
        interaction.reply({ content: 'ok', ephemeral: true})

        const embed = {
          "type": "rich",
        "title": `Aeronautica Qantas Airways Fleet\\n`,
        "description": "",
        "color": 0xDD00,
        "fields": [
          {
            "name": `Qantas Mainline:`,
            "value": `Historic: \nA220-300\nA321neo\nA330-200\nA330-300\nA350-900ULR\nA350-1000\nA380-800\n737-800\n\nFictional: \nAérospatiale/BAC Concorde\nAirbus A330-900neo`
          },
          {
            "name": `Qantaslink`,
            "value": `A220-300\nA320-200\nBAe-146-300\nDash 8 Q400\nEmbraer E190-100\nFokker 100\n717-200`
          },
          {
            "name": `Jetstar`,
            "value": `A320-200\nA321neo\nA330-200\n717-200\n787-9\n`
          },
          {
            "name": `Australia Asia Airways`,
            "value": `747SP\n767-300`
          },
          {
            "name": `Air Australia`,
            "value": `A320-200\nA330-200`
          },
          {
            "name": `Australian Airlines`,
            "value": `767-300ER`
          }
        ],
        "image": {
          "url": `https://media.discordapp.net/attachments/1090204614881710150/1101473674776821910/image.png?width=1677&height=910`,
          "height": 0,
          "width": 0
        }
        }

        interaction.channel.send({ embeds: [embed]})
    }
  }