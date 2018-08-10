const express = require('express');
const router = express.Router();
const discord = require('discord.js');
const client = new discord.Client();
const config = require('../secrets/config.json');

let messageObj = [];

client.login(config.token);

client.on("ready", (channel) => {
  const channelTesting = client.channels.get(config.channel);
  console.log("I am ready!");
  channelTesting.fetchMessages()
    .then(messages => {
      messages.forEach(msg => {
        messageObj.push({
          id: msg.id,
          content: msg.content,
          timestamp: msg.createdTimestamp,
          username: msg.member.user.username
        })
      })
    })
  .catch(console.error);
});

client.on("message", (message) => {
  if (message.content) {
    messageObj.content = message.content;
    messageObj.push({
      id: message.id,
      content: message.content,
      timestamp: message.createdTimestamp,
      username: message.member.user.username
    });
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(messageObj);
});

module.exports = router;
