const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("faq")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

      // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

        interaction.reply({ content: 'ok', ephemeral: true})

        const embed =  {
            "type": "rich",
            "title": `QantasGroup Aeronautica <:roored:1109001636434686022> FAQ`,
            "description": "",
            "color": 0x3a3a3a,
            "fields": [
            {
                "name": `<:roored:1109001636434686022> How do I get recruited to the in-game airline?`,
                "value": `Ping one of our <@&1054619234971422750> (Only one please)`
            },
            {
                "name": `<:roored:1109001636434686022> Why don't I have a chat callsign?`,
                "value": `It's probably beacuse you haven't fullfilled the below requirements:\n- Be in the in-game Airline\n- Flight plane is wearing the Airline colors (you can paint it in maintenance and selecting the airline colors option)\n- Flying an airliner job\n- Enabled radio tag in settings\n*Note, if you rejoin mid-flight you ll lose the callsign of that job*`
            },
            {
                "name": `<:roored:1109001636434686022>  How do I log flights?`,
                "value": `Follow the instructions in ⁠<#1107995356765110272>\nNote, only ranked members (cadet and above) can log flights`
            },
            {
                "name": `<:roored:1109001636434686022> How do I get promoted?`,
                "value": `If you fullfil the requirements in ⁠<#1102586927867252797> then apply in ⁠<#1094838341842780250> \n*Same applies for the requirements in ⁠achievements*`
            },
            {
                "name": `<:roored:1109001636434686022> How do I get my salary?`,
                "value": `Follow instructions in ⁠<#1109012312641241118>!`
            },
            {
                "name": `<:roored:1109001636434686022> I want to become a livery maker / recruiter, how?`,
                "value": `Great to hear it! Apply here for a livery maker <#1101115007187570708>, and here ⁠<#1101091435555606634>for a recruiting position!`
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
        }

        interaction.channel.send({ embeds: [embed]})

      //   channel.messages.fetch(`1054619819917447208-1105696919398920263`).then(message => {
      //     message.edit({ embeds: [embed]});
      // }).catch(err => {
      //     console.error(err);
      //});
    }
}