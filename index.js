const mineflayer= require('mineflayer')
const pathfinder = require('mineflayer-pathfinder').pathfinder

let config = require('./config.json')

bot = mineflayer.createBot({
    "username": config.username,
    "password": config.password,
    "host": config.host,
    "port": config.port,
    "version": config.version,
    "auth":config.auth
})
bot.loadPlugin(pathfinder)
require("fs").readdirSync("./events/").forEach(function(file) {
    let currentFile = require("./events/" + file);
    currentFile.onEvent(bot)
})