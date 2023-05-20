const { model, Schema } = require('mongoose');

let welcomeSchema = new Schema({
    GuildID: String,
    ChannelID: String
})

module.exports = model('welcomeSchema', welcomeSchema);