const { EmbedBuilder, GuildMember, AttachmentBuilder } = require('discord.js');
const welcomeSchema = require("../../Structures/Schemas/welcomeSchema");
const { profileImage } = require('discord-arts');

module.exports = {
    name: 'guildMemberAdd',

    /**
     * 
     * @param {GuildMember} member 
     */

    async execute(member) {
        const image = await profileImage(member.id)
        const imageattach = new AttachmentBuilder(image, {name: 'welcome.png'})
        welcomeSchema.findOne({GuildID: member.guild.id}, async (err, data) => {
            if (!data || !data.ChannelID) return;
            const welcomeChannel = member.guild.channels.cache.get(data.ChannelID);

            const embed = new EmbedBuilder()
                .setColor('dd0000')
                .setDescription(`${member} welcome to ${member.guild.name} <:roored:1109001636434686022>`)
                .setTimestamp()
                .setImage('attachment://welcome.png')
            
            welcomeChannel.send({embeds: [embed], files: [imageattach]})
        })
    }
}