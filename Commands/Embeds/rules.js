const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");

  module.exports = {
    data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription('g')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute(interaction) {

    // const guild = client.guilds.cache.get(`1054618178019414096`);

      // const channel = guild.channels.cache.find('1054619819917447208')

      interaction.reply({ content: 'ok', ephemeral: true})

      const embed = {
        "type": "rich",
      "title": `Server Rules`,
      "description": `Rules exists to maintain order thought the server. It is expected that you do follow them. Failure to abide will result in punishment. The following is what we do not allow in this server.`,
      "color": 0xdd0000,
      "fields": [
        {
          "name": `<:roored:1109001636434686022> Rule 1 <:roored:1109001636434686022>`,
          "value": `Trolling - Disrupting the chat, making a nuisance out of yourself, deliberately making others uncomfortable, or otherwise attempting to start trouble.`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 2 <:roored:1109001636434686022>`,
          "value": `Serious Offenses - This category includes doxxing, sending viruses, DDosing and more. These will result in an instant ban without exception.`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 3 <:roored:1109001636434686022>`,
          "value": `Harassment - Targeting users and berating them nonstop is a punishable offense and taken seriously, please do not do this.`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 4 <:roored:1109001636434686022>`,
          "value": `Language - Cursing is allowed. Usage of excessive vulgar language is prohibited.`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 5 <:roored:1109001636434686022>`,
          "value": `Discord TOS - As highlighted in Discords Terms of Service, if any of these is broken it will almost certainly result in a ban if by any chance you have not read Discords Terms of Service, it includes (but is not limited to) being Underage (below 13) or evading bans.`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 6 <:roored:1109001636434686022>`,
          "value": `Unnecessary pings - This includes helpers, moderators, and admins. Doing so will result in a punishment. `
        },
        {
          "name": `<:roored:1109001636434686022> Rule 7 <:roored:1109001636434686022>`,
          "value": `Incitement - The encouragement the breaking of rules, inciting others to be blatantly rude and offensive, or otherwise promoting and/or encouraging conflicts between other members.`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 8 <:roored:1109001636434686022>`,
          "value": `Spam - Spamming chat with several redundent or repeated messages that disrupts the server is prohibited. This includes bot text and emoji spam. Please do not do this, nobody likes it.`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 9 <:roored:1109001636434686022>`,
          "value": `NSFW - Posting any directly NSFW content such as porn will result in an immediate ban. Mild instancces will result in the message being deleted a possible punishment. NSFW is not just limited to gifs or images, discussing overly explicit content is also considered NSFW`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 10 <:roored:1109001636434686022>`,
          "value": `Anyone who distributes server exclusive liveries **without** permission of the original creator of the liveries will be **immediately banned and reported to Aeronautica staff.**`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 11 <:roored:1109001636434686022>`,
          "value": `Please do not advertise anything, unless given permission by a higher up, you WILL be warned`
        },
        {
          "name": `<:roored:1109001636434686022> Rule 16 <:roored:1109001636434686022>`,
          "value": `Anyone who is found to be in violation of rule 16, will be warned on account of rule 16. These violations include:\nBreaking rule 16`
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
      },
      "footer": {
        "text": `We thank you for abiding by these rules, if you have any issues, please feel free to ask us!`,
        "proxy_icon_url": `https://media.discordapp.net/attachments/1095834535394017320/1108759679129108590/Kanga-02.png?width=910&height=910`
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