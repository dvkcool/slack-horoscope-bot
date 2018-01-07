# Building a Slack Horoscope Bot on Hasura

This tutorial consists of a quickstart slack bot which can be easily deployed and modified.

This bot gives your horoscope in plain text in various demands like as of today or of week or of year, just need to specify the keywords.

## Demo
 ![year](https://github.com/dvkcool/slack-horoscope-bot/blob/master/demo/year.gif?raw=true)

## API used

Horoscope API Of [Tapasweni Pathak](https://github.com/tapasweni-pathak/Horoscope-API)


## Pre-requisites

* [NodeJS](https://nodejs.org)

* [hasura CLI](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)

## Getting the bot running

### Create a new slack bot integration

* Navigate to https://my.slack.com/services/new/bot
* Choose a bot user name and click on **'+ Add bot integration’**.

![Bot creation](https://github.com/dvkcool/slack-tic-tac-toe-bot/blob/master/demo/bot-name.png?raw=true)

* Copy the API Token from the page, it will be used later.

![Bot API screen](https://github.com/dvkcool/slack-tic-tac-toe-bot/blob/master/demo/bot-api-key.png?raw=true)



### Getting the Hasura project

```sh
$ hasura quickstart dvk/slack-horroscope-bot
$ cd slack-horoscope-bot
# Add Slack API key to hasura secrets. 
hasura secrets update SLACK_BOT_TOKEN.key  <Your Bot API KEY>
# Deploy
$ git add . && git commit -m "Deployment commit"
$ git push hasura master
```

After the `git push` completes:

```sh
$ hasura microservice list
```

You will get an output like so:

```sh
USER MS NAME     STATUS      INTERNAL-URL       EXTERNAL-URL            
bot              Running     bot.default:80     http://bot.mispronounce16.hasura-app.io

HASURA MS NAME     STATUS      INTERNAL-URL                  EXTERNAL-URL 
sshd               Running                                   
auth               Running     auth.hasura:80                http://auth.mispronounce16.hasura-app.io
postgres           Running     postgres.hasura:5432          
platform-sync      Running                                   
filestore          Running     filestore.hasura:80           http://filestore.mispronounce16.hasura-app.io
gateway            Running                                   
notify             Running     notify.hasura:80              http://notify.mispronounce16.hasura-app.io
le-agent           Running                                   
session-redis      Running     session-redis.hasura:6379     
data               Running     data.hasura:80                http://data.mispronounce16.hasura-app.io



```


### Adding bot to your groups/DM
Just type @botname to invite the bot to the channel or DM,
Then type
```sh
#to get todays horoscope
@botname today zodiac-sign

#to get this week's horoscope
@botname week zodiac-sign

#to get this month's horoscope
@botname month zodiac-sign

#to get this year's horoscope
@botname year zodiac-sign

```


Just a demo of how to invite and get first horoscope
![invitation](https://github.com/dvkcool/slack-horoscope-bot/blob/master/demo/inviting.gif?raw=true)




Congratulations you have succesfully deployed the slack horoscope bot.


## Modifying the bot

Head over to microservices/bot/src/
And start editing server.js
Soon enough you will have your node js slack bot ready

Happy Developing :)
Divyanshu Kumar
## Support

If you happen to get stuck anywhere, feel free to mail me at divyanshukumarg@gmail.com. Also, if you find a bug or an issue, you can raise an issue [here](https://github.com/dvkcool/slack-horoscope-bot)
