# Node Discord Chat

<!-- TOC START min:1 max:3 link:true update:true -->
- [Node Discord Chat](#node-discord-chat)
  - [1 | Description](#1--description)
  - [2 | Getting Started](#2--getting-started)
    - [2.1 Installing](#21-installing)
    - [2.2 Running](#22-running)

<!-- TOC END -->

## 1 | Description

A simple discord bot that returns all message objects from a channel. Every time a message is posted to the channel specified by the channel ID, the message object, containing the message, user, and timestamp, is uploaded to an API running on an Express server, which can be pushed to a frontend to create a copy of that channel on a new user interface.

## 2 | Getting Started

### 2.1 Installing

In the directory `./server` run:

```
npm install || yarn
```

Create a file inside a new directory `./secrets/` called `config.json`. In that file, add your bot token and channel ID for the channel you want to push data from.

```
{
  "token": "paste token here",
  "channel": "paste channel id here"
}
```

The bot you are using must be in the channel you are attempting to get data from. In that server, you can acquire the channel ID, in your Discord client, go to User Settings > Appearance, and activate Developer Mode.

### 2.2 Running

In the directory `./server` run:

```
npm run start || yarn start
```
