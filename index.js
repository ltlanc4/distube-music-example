const { Client, Collection } = require("discord.js");
const { DisTube } = require("distube");
const { YtDlpPlugin } = require("@distube/yt-dlp");

const client = new Client({
    intents: ["Guilds", "GuildMessages", "GuildMembers", "GuildVoiceStates", "MessageContent"],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
    },
    leaveOnEmpty: false,
    leaveOnFinish: false,
    plugins: [new YtDlpPlugin({ update: false })],
    emitAddSongWhenCreatingQueue: false,
});

// Initializing the project
require("./handler")(client);

client.login(client.config.token);
