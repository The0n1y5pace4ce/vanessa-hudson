const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("salary")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed =  {
            "type": "rich",
            "title": `Qantas Group Aeronautica <:roored:1109001636434686022> Salary`,
            "description": "",
            "color": 0xdd0000,
            "fields": [
              {
                "name": `<:roored:1109001636434686022> Requirements`,
                "value": `- Users must be part of the in-game airline\n- Users must be flying in airline colours\n- Users must be flying a job\n- Users must have an in-game radiotag/callsign`
              },
              {
                "name": `<:roored:1109001636434686022> Crew Ranks`,
                "value": `- <@&1106813962600841286> - 1000 WP/h\n- <@&1102589146364661901> - 2000 WP/h\n- <@&1054619306232651796> - 3000 WP/h\n- <@&1054619225823641610> - 5000 WP/h\n- <@&1054619092092469349> - 7500 WP/h`
              },
              {
                "name": `<:roored:1109001636434686022> Requesting Your Salary`,
                "value": `- **Ask an Operations Staff in ⁠<#1109727958479937647>, if you don't get a quick response, then ping one in <#1109746827709923409> (only one of them)**`
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