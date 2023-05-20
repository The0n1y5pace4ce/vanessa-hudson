const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("realfleet")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed = {
          "type": "rich",
      "title": `QantasGroup Aeronautica <:roored:1109001636434686022> Fleet`,
      "description": "",
      "color": 0x3a3a3a,
      "fields": [
        {
          "name": `<:roored:1109001636434686022> Qantas Mainline`,
          "value": `- Airbus A300-600R\n- Airbus A321neo\n- Airbus A330-200 & -300\n- Airbus A350-1000\n- Airbus A380-800\n- Boeing 707-320B\n- Boeing 737-300 & -800\n- Boeing 747-200B & -400ER & SP\n- Boeing 767-200ER & -300ER\n- Boeing 787-9 Dreamliner\n- Consolidated PBY-5 Catalina\n- DeHavilland DHC-84 Dragon Raptide\n- Douglas DC-3 Dakota\n- Douglas DC-4\n- Douglas DC-6B\n- Lockheed L-1049 Super Constellation`
        },
        {
          "name": `<:roored:1109001636434686022> Qantaslink`,
          "value": `- Airbus A220-300\n- Airbus A320-200\n- BAe 146-100 & 146-300\n- Bombardier Dash 8 Q-100 & Q-400\n- Embraer Erj-190-100\n- Fokker F100\n- Boeing 717-200`
        },
        {
          "name": `<:roored:1109001636434686022> Qantas Freight`,
          "value": `- Airbus A330-200F\n- Boeing 737-300F\n- Boeing 747-400F & -8f\n- Boeing 767-200F & -300F\n- BAe 146-300F`
        },
        {
          "name": `<:roored:1109001636434686022> Jetstar`,
          "value": `- Airbus A320-200\n- Airbus A321neo\n- Airbus A330-200\n- Boeing 717-200\n- Boeing 787-9 Dreamliner`
        },
        {
          "name": `<:roored:1109001636434686022> Australia Asia Airlines`,
          "value": `- Boeing 747SP\n- Boeing 767-300`
        },
        {
          "name": `<:roored:1109001636434686022> Air Australia`,
          "value": `- Airbus A320-200\n- Airbus A330-200`
        },
        {
          "name": `<:roored:1109001636434686022> Australian Airlines`,
          "value": `- Boeing 767-300ER`
        },
        {
          "name": `<:roored:1109001636434686022> Trans Australian Airlines`,
          "value": `- Airbus A300-600R\n- Boeing 727-200\n- Boeing 737-300\n- Convair PBY-5 Catalina\n- Douglas DC-3 Dakota\n- Douglas DC-4\n- Douglas DC-6B\n- Douglas DC-9-10\n- Fokker Friendship F27-100`
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