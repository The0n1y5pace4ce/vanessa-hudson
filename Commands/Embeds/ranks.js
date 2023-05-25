const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("ranks")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed =  {
          "type": "rich",
          "title": `Qantas Group Aeronautica <:roored:1109001636434686022> Ranks`,
          "description": "",
          "color": 0xdd0000,
          "fields": [
            {
              "name": `<:roored:1109001636434686022> Training/Trainer Ranks`,
              "value": `- <@&1054619429540999220> <#1110584589140889641>\n- <@&1106814351039541248> - 20h`
            },
            {
              "name": `<:roored:1109001636434686022> Crew Ranks`,
              "value": `- <@&1106813962600841286> - 2h\n- <@&1102589146364661901> - 5h\n- <@&1054619306232651796> - 10h\n- <@&1054619225823641610> - 15h\n- <@&1054619092092469349> - 25h`
            },
            {
              "name": `<:roored:1109001636434686022> Meet The Requirements?`,
              "value": `- **If you've logged the hours in your <#1107995356765110272> then apply here: <#1094838341842780250>**`
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