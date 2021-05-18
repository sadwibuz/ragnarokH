const Discord = require('discord.js');
const client = new Discord.Client ();
const token = 'ODQzNjc4MTUwOTUyODc4MDgw.YKHWgQ.AlVsJ5Oo5ySouNeGHjiCdOrruD0';
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
    }
    else if(command === 'help'){
        message.channel.send('Seems like you need my help, I can help you in these categories, just type -(name you want to search on lowercase and no space) to access my database)')
        message.channel.send('For example: Units: ustats')
        message.channel.send('1. units')
        message.channel.send('- ustats | -ujobs | -uabilities')
        message.channel.send('2. vision cards')
        message.channel.send('- vcstats | vceffects | -vcenhance | -vcawaken')
        message.channel.send('3. equipment')
        message.channel.send('4. espers')
        message.channel.send('5. summons')
        message.channel.send('6. guilds')
        message.channel.send('7. shop')
        message.channel.send('8. multi')
        message.channel.send('9. raids')
        message.channel.send('10. combat')
        message.channel.send('Note: The information within these categories is subject to change, if you have any suggestion/correction please DM me sadwibu#8308 or masters tag')
        message.channel.send('Information in these categories are based on many websites, you can type -link to permit bot to send the links')
    }
    else if(command === 'link'){
        message.channel.send('https://brave-exvius.com/threads/wotv-stat-info-formulas.52931/')
        message.channel.send('http://wotvffbe.gamea.co/c/vbozq9uk')
        message.channel.send('http://wotvffbe.gamea.co/c/550aw3eb')
        message.channel.send('https://gacha.altarofgaming.com/wotv-ffbe/jobs/')
        message.channel.send('http://wotvffbe.gamea.co/c/dtdr2pjv')

    }
    else if(command === 'ustats'){
        client.commands.get('ustats').execute(message, args);
    }
    else if(command === 'ujobs'){
        client.commands.get('ujobs').execute(message, args);
    }
    else if(command === 'uabilities'){
        client.commands.get('uabilities').execute(message, args);
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
    message.channel.send('- EX Job: EX job is an upgrade system that will increase the level cap of your units main job, acquiring new skill boards that will give stats, upgrade old skills, and get new abilities')
    message.channel.send('- Once your character has reached level 99, level 15 for all 3 of their jobs, and get the required materials for the EX Job upgrade, you can perform an EX Job awakening. This will increase the cap of the units max level from 99 to 120, and their main job level from 15 to 25.')
    message.channel.send('- However, not all units can be EX upgraded since this works similarly to when developers release new characters. Characters that receive an EX job update are released periodically. The materials required to level EX jobs are quite rare, so its recommended to choose carefully before doing so')
    message.channel.send('- You can only look at their EX job nodes once you have unlocked it. A later update will enable players to look at the nodes even without upgrading like JP')
    message.channel.send('- List of EXable units are included here: http://wotvffbe.gamea.co/c/550aw3eb')
    message.channel.send('- Mindsphere: Getting more shards of a unit thats enough to fully limit break them (past 600 shards) will automatically get converted to Soul Medals and Mindspheres. You need 400 Mindspheres to reach EX Job level 25. Below the page is a useful chart made by a JP user that shows how many you need at certain job levels.')
    message.channel.send('- Broadstone: Broadstones have many rarities, just like vision spheres or fragment of thoughts. You only need 1 for a unit, and its to unlock a units EX from level 15 to 16')
    message.channel.send('- Blossom of Paradise: Another one of the items you need as you level up the units job level, mostly obtainable from events, or shops. You need a total of 5 Blossom of Paradise to reach level 25 and it can be obtained as item drop from lvl 6 alcryst chambers of any element, but they share the same limit of 1 per month.')
    message.channel.send('- Weapon Scorchmark Stone: Branded Tablets are obtainable from a new training chamber dungeon. Super High Difficulty Training Chamber is added and you can get Scorchmark Stone of each weapon as item drop')
    message.channel.send('- Lastly, theres Alcryst Statues. You get these from the Alcryst Chambers. Alcryst Chamber Lv.6 is added to each elemental Alcryst Chamber. You can get the item from the quest drop')
    message.channel.send('Source: http://wotvffbe.gamea.co/c/550aw3eb')
    }
    else if(command === 'joblist'){
        message.channel.send('You can preview a list of non-limited and limited units jobs in this link https://gacha.altarofgaming.com/wotv-ffbe/jobs/. Be aware that this link has not been updated.')
    }
    else if(command === 'jobdetails'){
        message.channel.send('Limited jobs are not included here')
        message.channel.send('- Black Mage: Black mages use powerful magic in their element to inflict heavy damage. Those with BM as their main job can have access to Flare and Toad. As a sub job, it gives access to Drain and Osmose. Example: Mediena')
        message.channel.send('- Cleric: They are healers who specialize in removing debuffs and ailments. Those with it as the main job has access to Calamity Guard for immunity to ailments for the team. Example: Macherie')
        message.channel.send('- Dragoons: They rely on jumping up in the air to land on enemies to inflict casualties with their piercing weapons. They also can increase their MOVE and JUMP and also can boost their chances of decreasing BRV on enemies. However, they can miss if the enemy moves out of the way. Example: Viktora')
        message.channel.send('- Dual Gunner: Two guns can be better than one. They shoot harder and those with this as the main job has Firing Stance to boost their AGI and pierce DEF easily. However, their range is not in a straight line, so they need proper positioning to hit someone. Also, if one is not careful, they can end up hitting their allies like their Gunner counterpart and they cannot fight from above ground like the archers. Example: Lucia')
        message.channel.send('- Green Mage: This job relies on spells to buff their teammates and debuff the enemy. What is different from other mages is that they rely on TP for their spells more than they do AP. Example: Helena')
        message.channel.send('- Gunner: Gunners take advantage of missile attacks to dish damage. However, they can end up hitting someone if not careful as their skills do not allow them to attack straight and they cannot attack from above ground like an archer. Example: Frederika')
        message.channel.send('- Knights: Knights are your breakers. They are there to lower stats and can hinder foes through disable and a small regen of their own. Example: Whisper')
        message.channel.send('- Lancer: The main pierce class who can rip through DEF and also capable of increasing their crit rate. Example: Aileen')
        message.channel.send('- Monk: Your main strikers. Some can use Chakra to regain HP and TP and some can have ranged striking moves while others. No difference for those with it as the main job. Example: Etre')
        message.channel.send('- Ninja: Quick on the battlefield, they can easily make themselves have an easy chance not to be targeted and also can increase their evasion, accuracy, and crit rate. Example: Shadowlynx')
        message.channel.send('- Paladin: Pretty much what defines a tank. They can boost their own DEF and SPR, provoke, their own heal, and also can stun. Example: Engelbert')
        message.channel.send('- Ranger: Your archers. Missile attackers who can not only immobilize but also have the advantage of fighting from higher grounds. Example: Khury')
        message.channel.send('- Red Mage: The jack-of-trades. They are capable of taking a lil bit from white, green, time, and black mages and knights. Example: Adelard')
        message.channel.send('- Samurai: Slashing DDs who can instantly move to other spots, permanently AoE increase BRV, and some can use Kongou to have more damage against machine and stone monsters. Some samurai can also increase their evasion and crit rate. Example: Oelde')
        message.channel.send('- Soldier: Powerful slashers who give up HP to deal more damage. They can also absorb HP and TP as well and can give up HP to significantly boost their ATK. Example: Sterne')
        message.channel.send('- Spellblade: Magical warriors who can destroy their opposing element. Spellblades have the power to decrease BRV, inflict silence, and also can boost their magic resistances and reduce damage, meaning they have the power to act as magic tanks, destroying mages as well as Spellblades act as LED light while the mages are the flies. Example: Fryevia and Leela')
        message.channel.send('- Thief: Your Swipers. They move quickly on the battlefield to swipe gil, swipe items, and increase their CT and AGI to have faster turns and boosting their evasion in addition to them charming enemies and inflicting confusion. Example: Vistraille')
        message.channel.send('- Time Mage: Powerful as they can speed up allies turns, slowing down enemies, and can swap places and give Float to avoid any earth or melee attacks. They also can use Comet and Meteor for damage. Example: Margritte')
        message.channel.send('- Viking: Your slashers who can boost their ATK and DEF in exchange for evasion, absorb an insane amount of HP, and also carry human killers. Example: Yerma')
        message.channel.send('- White Mage: Your healers with the best curing of HP and reviving. They also can use Holy and carry Protect and Shell for ST boost in DEF or SPR. Example: Naiah')
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'equipment'){
        client.commands.get('equipment').execute(message, args);
    }
    else if(command === 'vcenhance'){
        message.channel.send('- Enhancing vision cards will increase stats/party ability/bestowed and limited bestowed effects that the VC provided and there is a chance when enhancing, a success will occur and increase efficency of exp')
        message.channel.send('- Last effect line of Party Ability will be unlock when the cards reached its max LVL ')
        message.channel.send('- Some vision card will have its unique vision ability')
        message.channel.send('- For example: Clairvoyant Astrologer VC: Armor Piercer')
    }
    else if(command === 'vcawaken'){
        message.channel.send('- Awakening vision cards will increase LVL limit of the card, fully awaken will increase to 99')
        message.channel.send('- 275 vision card shards is needed to fully awaken (25-50-75-125)')
    }
    else if(command === 'vcstats'){
        message.channel.send('- Vision Cards base stats will be applied to the Unit its equipped to')
        message.channel.send('Here is some explanation of some stats effects:')
        message.channel.send('- RES(Resistance): Resist a portion of damage')
        message.channel.send('For example: Solidus VC: Slash Attack Res Up: Decrease incoming Slash DMG ')
        message.channel.send('Unit Attack Res Up: Increase RES of incoming single-target ability')
        message.channel.send('For example: Bahamut VC: Unit Attack Res Up: Increase RES of single-target ability')
        message.channel.send('- Element Attack Up: Increase damage to ALL abilities that shares the same element including physical and magical abilities')
        message.channel.send('For example: Ifrit VC: Fire attack up (Bestowed Effects) will increase equipped unit all fire ability damage')
        message.channel.send('- Element Attack RES Up: Increase RES of ALL abilities that shares the same element including physical and magical abilities ')
        message.channel.send('For example: Downtime VC: Ice Attack Res Up: Increase RES of Ice element abilities')
        message.channel.send('- Area Attack Res Up: Increase RES of ALL Area Attack')
        message.channel.send('- Piercing Rate UP: Increase penetration on certain RES/DEF')
        message.channel.send('For example: + Flash of Insight VC: Slash Attack Res Piercing Rate Up: Increase penetration of Slash ATK on Slash Res')
        message.channel.send('- Damage Limit Up: Increase maximum damage dealt')
        message.channel.send('Note: On default, maximum damage dealt is 9999, this effect will expand the limit')
        message.channel.send('Note: Usually in a party effect, it will display following this order')
        message.channel.send('[Units Benefit] - [Elements/Stats/Attack/Attack-type/Res/Piercing/Critical Hit Rate/Evasion/Max HP/Accuracy... + [RES]] - [UP/Down] - [Index]')
        message.channel.send('For example: + Golem VC: Earth Unit Lightning Attack Res Up 0: Earth Unit will increase RES on Lightning Attack')
        message.channel.send('+ Echoing Screams VC: Slash Attack Up 16: Increase Slash ATK')
    }
});
