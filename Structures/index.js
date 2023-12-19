const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const { Guilds, GuildMembers, GuildMessages, GuildVoiceStates, MessageContent, GuildPresences, GuildMessageReactions } = GatewayIntentBits
const { User, Message, GuildMember, ThreadMember, Channel} = Partials
const  { token } = require('./config.json')
// const { Connectors } = require("shoukaku");
// const { Kazagumo } = require("kazagumo");
// const Spotify = require("kazagumo-spotify");

const { loadEvents } = require('./Handlers/eventHandler')
const { loadButtons } = require('./Handlers/buttonHandler')
const { antiCrash } = require('./Handlers/AntiCrash.js')
const { loadModals } = require("./Handlers/modalHandler");
// const { loadShoukakuNodes } = require("./Handlers/shoukakuNodes");
// const { loadShoukakuPlayer } = require("./handlers/shoukakuPlayer.js");

const client = new Client({ intents: [Guilds, GuildMembers, GuildMessages, GuildVoiceStates, MessageContent, GuildPresences, GuildMessageReactions], partials: [User, Message, GuildMember, ThreadMember, Channel] });

// const { GiveawaysManager } = require('discord-giveaways');
// client.giveawaysManager = new GiveawaysManager(client, {
//     storage: "./giveaways.json",
//     default: {
//         botsCanWin: false,
//         embedColor: "#FF0000",
//         reaction: "🎉",
//         lastChance: {
//             enabled: true,
//             content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
//             threshold: 10000,
//             embedColor: '#FF0000'
//         }
//     }
// });

// client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
//     console.log(`${member.user.tag} entered giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
// });

// client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
//     console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
// });

// client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
//     console.log(`Giveaway #${giveaway.messageId} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
// });

const { GiveawaysManager } = require('givify');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        reaction: '🎉',
        lastChance: {
            enabled: true,
            content: '⚠️ **LAST CHANCE TO ENTER !** ⚠️',
            threshold: 10000,
            embedColor: '#FF0000'
        }
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on('giveawayReactionAdded', (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
});

client.giveawaysManager.on('giveawayReactionRemoved', (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageId} (${reaction.emoji.name})`);
});

client.giveawaysManager.on('giveawayEnded', (giveaway, winners) => {
    console.log(
        `Giveaway #${giveaway.messageId} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`
    );
});
client.giveawaysManager.on('giveawayMemberJoined', (giveaway, member, interaction) => {
    interaction.reply({
        content: `${member.user.username} joined the giveaway!`, ephemeral: true
    });
    giveaway.entrantIds.push(interaction.member.id);
});
client.giveawaysManager.on('giveawayMemberTryLeft', (giveaway, member, interaction) => {
    interaction.reply({
        content: `giveawayMemberTryLeft`
    });
});
client.giveawaysManager.on('giveawayMemberAlreadyJoined', async (giveaway, member, interaction) => {
    // send a ephemral reply asking him he wants to leave the giveaway
    const question = await interaction.reply({
        content: 'You have already joined this giveaway. Do you want to leave it?',
        ephemeral: true,
        components: [
            new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder().setCustomId('leave').setLabel('Leave').setStyle(Discord.ButtonStyle.Danger)
            )
        ]
    });
    const filter = (i) => i.user.id === member.user.id;
    const collecter = await question.createMessageComponentCollector({ filter, time: 30000 });
    collecter.on('collect', async (i) => {
         // remove the member from the entrantIds
    const index = giveaway.entrantIds.indexOf(member.id);
    if (index !== -1) {
        giveaway.entrantIds.splice(index, 1);
    }
    //tell him we have removed him
    await i.reply({
        content: 'You have left the giveaway.'
    })
    })
    collecter.on('end', async (collected, reason) => {
        if (reason === 'time') {
            await question.delete();
        }
    });
});


const starboardChannelId = '1023913671702888518';
client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.emoji.name === '⭐' && reaction.count >= 3) {
    const message = reaction.message;
    const channel = message.guild.channels.cache.get(starboardChannelId);

    const starboardMessages = await channel.messages.fetch({ limit: 100 });
    const existingStarboardMessage = starboardMessages.find(m => m.embeds.length > 0 && m.embeds[0].footer.text.endsWith(`• ${message.id}`));

    if (existingStarboardMessage) {
      const oldEmbed = existingStarboardMessage.embeds[0];
      const oldStars = parseInt(oldEmbed.footer.text.split(' ')[1]);
      const newStars = reaction.count;

      const embed = new EmbedBuilder(oldEmbed)
        .setFooter({text: `⭐ ${newStars} • ${message.id}`});
      await existingStarboardMessage.edit({ embeds: [embed] });
    } else {
      const embed = new EmbedBuilder()
        .setColor('#FFAC33')
        .setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL()})
        .setFooter({text: `⭐ ${reaction.count} • ${message.id}`})
        .setTimestamp();

        const attachment = message.attachments.first();
  if(message.content > '') {
    embed.setDescription(message.content);
  } else { 
  if (message.content === '' && message.attachments.size > 0) 
   embed.setImage(attachment.url);
   } 
   
   if(message.content > '' && message.attachments.size > 0) {
    embed.setImage(attachment.url);
    embed.setDescription(message.content);
    
   }
      await channel.send({ embeds: [embed] });
 
      
    } 
   
  }
});

client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.emoji.name === '⭐' && reaction.count >= 2) {
    const message = reaction.message;
    const channel = message.guild.channels.cache.get(starboardChannelId);

    const starboardMessages = await channel.messages.fetch({ limit: 100 });
    const existingStarboardMessage = starboardMessages.find(m => m.embeds.length > 0 && m.embeds[0].footer.text.endsWith(`• ${message.id}`));


        if (existingStarboardMessage) {
          const oldEmbed = existingStarboardMessage.embeds[0];
          const oldStars = parseInt(oldEmbed.footer.text.split(' ')[1]);
          const newStars = reaction.count;

          if (newStars >= 2) {
            const embed = new EmbedBuilder(oldEmbed)
            await existingStarboardMessage.delete({ embeds: [embed] });
      }}}});

client.config = require("./config.json");
client.buttons = new Collection();
client.commands = new Collection();
client.events = new Collection();
client.tools = require('./Utils/Tools');
client.modals = new Collection();

loadEvents(client);
loadButtons(client);
antiCrash(client);
loadModals(client);
// loadShoukakuNodes(client);
// loadShoukakuPlayer(client);

// const kazagumoClient = new Kazagumo(
//     {
//       plugins: [
//         new Spotify({
//           clientId: client.config.spotifyClientID,
//           clientSecret: client.config.spotifySecret,
//         }),
//       ],
//       defaultSearchEngine: "youtube",
//       send: (id, payload) => {
//         let guild = client.guilds.cache.get(id);
//         if (guild) guild.shard.send(payload);
//       },
//     },
//     new Connectors.DiscordJS(client),
//     client.config.nodes,
//     {
//       moveOnDisconnect: false,
//       resume: true,
//       reconnectTries: 5,
//       restTimeout: 10000,
//     }
//   );
  
//   client.manager = kazagumoClient;

module.exports = client;

client
    .login(token)
    .catch((err) => console.log(err))

    