const client = require("../index");
const { EmbedBuilder } = require("discord.js");

client.distube.on("playSong", (queue, song) => {
    var d = new Date();

    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    var nd = new Date(utc + (3600000 * 7));
    var date = nd.toLocaleString("en-AU").toUpperCase();
    const embed = new EmbedBuilder()
        .setColor("Blue")
        .setThumbnail(`${song.thumbnail}`)
        .setDescription(`Playing [${song.name}](${song.url})`)
        .setFooter({ text: date });
    queue.textChannel.send({ embeds: [embed] });
});