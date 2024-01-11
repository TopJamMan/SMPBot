const mineflayer = require('mineflayer')

let login = require('config.json');

const bot= mineflayer.createBot({
    "username": login.username,
    "password": login.password,
    "host": login.host,
    "port": login.port,
    "version": login.version,
    "auth":login.auth
})

