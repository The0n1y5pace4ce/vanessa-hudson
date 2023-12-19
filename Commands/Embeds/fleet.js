const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChatInputCommandInteraction,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("fleet")
  .setDescription('g')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  execute(interaction) {

    // const guild = client.guilds.cache.get(`1054618178019414096`);

    // const channel = guild.channels.cache.find('1054619819917447208')

      interaction.reply({ content: 'ok', ephemeral: true})

      const realf = new EmbedBuilder()
      .setAuthor({
        name: "QantasGroup Aeronautica",
        iconURL: "https://media.discordapp.net/attachments/1090102923331113011/1159085611316154368/qantas-logo.png?ex=651e9a18&is=651d4898&hm=b26567d887ce942e91d1546bf01941acf12c02ea006be05e0f264a854269788c&=",
      })
      .setTitle("QantasGroup Aeronautica <:roored:1109001636434686022> Fleet")
      .addFields(
        {
          name: "<:roored:1109001636434686022> Qantas Mainline",
          value: "- Airbus A300-600R\n- Airbus A321neo\n- Airbus A330-200 & -300\n- Airbus A350-1000\n- Airbus A380-800\n- Boeing 707-320B\n- Boeing 737-300 & -800\n- Boeing 747-200B & -400ER & SP\n- Boeing 767-200ER & -300ER\n- Boeing 787-9 Dreamliner\n- Boeing 787-10 Dreamliner\n- Consolidated PBY-5 Catalina\n- DeHavilland Australia DHA-3 Drover\n- DeHavilland DHC-84 Dragon Raptide\n- Douglas DC-3 Dakota\n- Douglas DC-4\n- Douglas DC-6B\n- Lockheed L-1049 Super Constellation",
          inline: false
        },
        {
          name: "<:roored:1109001636434686022> QantasLink",
          value: "- Airbus A220-300\n- Airbus A320-200\n- BAe 146-100 & 146-300\n- Bombardier Dash 8 Q-100 & Q-400\n- Embraer Erj-190-100\n- Fokker F100\n- Boeing 717-200",
          inline: false
        },
        {
          name: "<:roored:1109001636434686022> Qantas Freight",
          value: "- Airbus A330-200F\n- Boeing 737-300F\n- Boeing 747-400F & -8f\n- Boeing 767-200F & -300F\n- BAe 146-300F",
          inline: false
        },
        {
          name: "<:roored:1109001636434686022> Jetstar",
          value: "- Airbus A320-200\n- Airbus A321neo\n- Airbus A330-200\n- Boeing 717-200\n- Boeing 787-9 Dreamliner",
          inline: false
        },
        {
          name: "<:roored:1109001636434686022> Australia Asia Airlines",
          value: "- Boeing 747SP\n- Boeing 767-300",
          inline: false
        },
        {
          name: "<:roored:1109001636434686022> Australian Airlines",
          value: "- Boeing 767-300ER",
          inline: false
        },
        {
          name: "<:roored:1109001636434686022> Trans Australian Airlines",
          value: "- Airbus A300-600R\n- Boeing 727-200\n- Boeing 737-300\n- Convair PBY-5 Catalina\n- Douglas DC-3 Dakota\n- Douglas DC-4\n- Douglas DC-6B\n- Douglas DC-9-10\n- Fokker Friendship F27-100",
          inline: false
        },
      )
      .setImage("https://media.discordapp.net/attachments/1054618180229795922/1159083670339063869/image.png?ex=651e9849&is=651d46c9&hm=53b51f2d21cab668623b83f6f003ebe374e41c3daf091675da92c48034b5f8cd&=&width=1920&height=96")
      .setColor("#f50000")
      // .setFooter({
      //   iconURL: "https://media.discordapp.net/attachments/1054618180229795922/1159088738467577976/White_Kanga_Bulletpoint.png.png?ex=651e9d02&is=651d4b82&hm=9d67ef9e009fce0d936971aa72527a9ebffcf06c517c30513394ab5818a5f6ab&=",
      // })

      const fictfleet = new EmbedBuilder()
.setAuthor({
  name: "QantasGroup Aeronautica",
  iconURL: "https://media.discordapp.net/attachments/1090102923331113011/1159085611316154368/qantas-logo.png?ex=651e9a18&is=651d4898&hm=b26567d887ce942e91d1546bf01941acf12c02ea006be05e0f264a854269788c&=",
})
.setTitle("QantasGroup Aeronautica <:roored:1109001636434686022> Fictional Fleet")
.addFields(
  {
    name: "<:roored:1109001636434686022> Qantas Mainline",
    value: "- Aerospatiale/BAC Concorde\n- Airbus A330-900neo\n- Airbus A350-900ulr\n- Hypermach Sonicstar",
    inline: false
  },
)
.setImage("https://media.discordapp.net/attachments/1054618180229795922/1159083670339063869/image.png?ex=651e9849&is=651d46c9&hm=53b51f2d21cab668623b83f6f003ebe374e41c3daf091675da92c48034b5f8cd&=&width=1920&height=96")
.setColor("#ff0000")
// .setFooter({
//   iconURL: "https://media.discordapp.net/attachments/1054618180229795922/1159088738467577976/White_Kanga_Bulletpoint.png.png?ex=651e9d02&is=651d4b82&hm=9d67ef9e009fce0d936971aa72527a9ebffcf06c517c30513394ab5818a5f6ab&=",
// });

      interaction.channel.send({ attachment: 'https://media.discordapp.net/attachments/1054618180229795922/1159089127128576000/image.png?ex=651e9d5e&is=651d4bde&hm=578431f49db8add21cc5134eea4d9b66de1564d6fe8a05c8b1b28ff2085d3829&=&width=1920&height=385', embeds: [realf, fictfleet]})

    //   channel.messages.fetch(`1109091559535804508-1109277752927997963`).then(message => {
    //     message.edit({ embeds: [realf, fictf, ansett]});
    // }).catch(err => {
    //     console.error(err);
    // });
  }
}