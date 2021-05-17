const Discord = require('discord.js');
const client = new Discord.Client ();
const token = 'ODQzNjc4MTUwOTUyODc4MDgw.YKHWgQ.BnUmbvAaKx6qCkzRM_2VNA4ZWuI';
client.login(token);

const prefix = '-';
const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('RHelpers is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'units'){
        message.channel.send('Which kind of information on units you want to know ?')
        message.channel.send('1. stats')
        message.channel.send('2. jobs')
        message.channel.send('3. abilities')
        message.channel.send('Information in these categories are based on many websites, you can type -link to permit bot to send the links')
    }
    else if(command === 'help'){
        message.channel.send('Seems like you need my help, I can help you in these categories, just type -(name you want to search on lowercase and no space) to access my database')
        message.channel.send('1. units')
        message.channel.send('2. vision cards')
        message.channel.send('3. equipment')
        message.channel.send('4. espers')
        message.channel.send('5. summons')
        message.channel.send('6. guilds')
        message.channel.send('7. shop')
        message.channel.send('8. multi')
        message.channel.send('9. raids')
        message.channel.send('10. combat')
        message.channel.send('Note: The information within these categories is subject to change, if you have any suggestion/correction please DM me sadwibu#8308 or masters tag')
    }
    else if(command === 'link'){
        message.channel.send('https://brave-exvius.com/threads/wotv-stat-info-formulas.52931/')
        message.channel.send('http://wotvffbe.gamea.co/c/vbozq9uk')
        message.channel.send('http://wotvffbe.gamea.co/c/550aw3eb')
        message.channel.send('https://gacha.altarofgaming.com/wotv-ffbe/jobs/')
    }
    else if(command === 'stats'){
        client.commands.get('stats').execute(message, args);
    }
    else if(command === 'jobs'){
        client.commands.get('jobs').execute(message, args);
    }
    else if(command === 'abilities'){
        client.commands.get('abilities').execute(message, args);
    }
    else if(command === 'status'){
        client.commands.get('status').execute(message, args);
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'exjob'){
    message.channel.send('EX Job: EX job is an upgrade system that will increase the level cap of your units main job, acquiring new skill boards that will give stats, upgrade old skills, and get new abilities')
    message.channel.send('Once your character has reached level 99, level 15 for all 3 of their jobs, and get the required materials for the EX Job upgrade, you can perform an EX Job awakening. This will increase the cap of the units max level from 99 to 120, and their main job level from 15 to 25.')
    message.channel.send('However, not all units can be EX upgraded since this works similarly to when developers release new characters. Characters that receive an EX job update are released periodically. The materials required to level EX jobs are quite rare, so its recommended to choose carefully before doing so')
    message.channel.send('You can only look at their EX job nodes once you have unlocked it. A later update will enable players to look at the nodes even without upgrading like JP')
    message.channel.send('List of EXable units are included here: http://wotvffbe.gamea.co/c/550aw3eb')
    message.channel.send('Mindsphere: Getting more shards of a unit thats enough to fully limit break them (past 600 shards) will automatically get converted to Soul Medals and Mindspheres. You need 400 Mindspheres to reach EX Job level 25. Below the page is a useful chart made by a JP user that shows how many you need at certain job levels.')
    message.channel.send('Broadstone: Broadstones have many rarities, just like vision spheres or fragment of thoughts. You only need 1 for a unit, and its to unlock a units EX from level 15 to 16')
    message.channel.send('Blossom of Paradise: Another one of the items you need as you level up the units job level, mostly obtainable from events, or shops. You need a total of 5 Blossom of Paradise to reach level 25 and it can be obtained as item drop from lvl 6 alcryst chambers of any element, but they share the same limit of 1 per month.')
    message.channel.send('Weapon Scorchmark Stone: Branded Tablets are obtainable from a new training chamber dungeon. Super High Difficulty Training Chamber is added and you can get Scorchmark Stone of each weapon as item drop')
    message.channel.send('Lastly, theres Alcryst Statues. You get these from the Alcryst Chambers. Alcryst Chamber Lv.6 is added to each elemental Alcryst Chamber. You can get the item from the quest drop')
    message.channel.send('Source: http://wotvffbe.gamea.co/c/550aw3eb')
    }
    else if(command === 'joblist'){
        message.channel.send('You can preview a list of non-limited and limited units jobs in this link https://gacha.altarofgaming.com/wotv-ffbe/jobs/. Be aware that this link has not been updated.')
    }
});
