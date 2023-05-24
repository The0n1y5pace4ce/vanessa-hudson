module.exports = {
    name: 'guildMemberAdd',

    execute(client) {
            const guild = client.guild
            const channel = guild.channels.cache.get('1110869107869483049')
            channel.setName(`Member Count: ${guild.memberCount}`)
    }
}