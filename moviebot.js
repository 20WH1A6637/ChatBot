const request = require('request');

const TelegramBot = require('node-telegram-bot-api');

const token = '5936157249:AAHOsxqN-_JyLRW4v60jrAf__r3AA1YE6do';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(mg){
    request('http://www.omdbapi.com/?t='+mg.text+'&apikey=b787c522', function (error, response, body) {
    if(JSON.parse(body).Response=="True"){
        bot.sendMessage(mg.chat.id, "Title "+JSON.parse(body).Title)
        bot.sendMessage(mg.chat.id, "Release Date "+JSON.parse(body).Released)
        bot.sendMessage(mg.chat.id, "Actors "+JSON.parse(body).Actors)
        bot.sendMessage(mg.chat.id, "Rating "+JSON.parse(body).Ratings[0].Value)
    }
    else{
        bot.sendMessage(mg.chat.id, "Movie not found")
    }
    });
})