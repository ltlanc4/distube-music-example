const { Message, Client, EmbedBuilder } = require("discord.js");

module.exports = {
    name: "play",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        var d = new Date();

        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        var nd = new Date(utc + (3600000 * 7));
        var date = nd.toLocaleString("en-AU").toUpperCase();
        if (!args[0]) {
            const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setDescription("❌ Please input your music url")
                .setFooter({ text: date });
            return message.channel.send({ embeds: [embed] });
        }

        var urlSong = args.join("");
        if (urlSong.includes("youtube") === true || urlSong.includes("youtu.be") === true) {
            await client.distube.play(message.member.voice.channel, urlSong, { message, member: message.member});
        } else {
            const embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setDescription("❌ Please input youtube link music")
                .setFooter({ text: date });
            return message.channel.send({ embeds: [embed] });
        }
    },
};