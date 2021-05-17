module.exports = {
    name: 'stats',
    description: "this is a stats command from units!",
    execute(message, args){
            message.channel.send('This will take awhile to process all so be patient!')
            message.channel.send('HP (Hit Points): If this value reaches 0, the unit will be KOd, reducing bravery to nearby allies units')
            message.channel.send('TP (Technical Points): Consumed to perform skills that dont deal damage such as Cure, Protect,...')
            message.channel.send('AP (Ability Points): Consumed when using LB(Limit Burst) and abilities that dealing damage(DMG) such as Blizzard, Shuriken... This value can be regained on these following methods:')
            message.channel.send('- 50% of used TP costs')
            message.channel.send('- When basic attack on unit')
            message.channel.send('- Specific Buffs/Skills such as Revitalize (Xiza TMR)')
            message.channel.send('ATK (Attack): Value that defines physical damage of an unit and many skills based on this value to dealing damage')
            message.channel.send('MAG (Magic): Value that defines magical damage of an unit and many skills base on this value to dealing damage ')
            message.channel.send('DEF (Defense): Resist a portion of incoming physical damage')
            message.channel.send('SPR: Resist a portion of incoming magical damage')
            message.channel.send('AGI (Agility): Mainly affects the units evasion rate and how quickly its CT accumulates. For each Cycle, the game takes 10% of AGI stat of each characters in the battle and add it to their CT. Decrease the hit rate by about 0.5% per AGI points that target has.')
            message.channel.send('Note: For more information, please visit https://www.reddit.com/r/wotv_ffbe/comments/fqmkef/a_brief_guide_to_ct_agi_and_cast_time/')
            message.channel.send('DEX (Dexterity): Mainly affects a units accuracy and critical hit rate. Increaes the hit rate by about 0.25% ~ 0.33% per DEX point. ALSO takes part in the damage scaling for most Jobs of regular attack and skills')
            message.channel.send('Luck: Takes part in the damage scaling for most Jobs. 2.5 luck = 1% dodge, 1% hit')
            message.channel.send('CT(Charge Time): https://www.reddit.com/r/wotv_ffbe/comments/fqmkef/a_brief_guide_to_ct_agi_and_cast_time/')
            message.channel.send('Bravery: Affects the activation rate of physical reactions and the physical damage dealt. If a Unit has 9 or less Bravery they will be turned into a Chicken which greatly reduced the base stats and makes the character unable to be controlled.')
            message.channel.send('Faith: Affects the Activation rate of magical reactions and the magical damage dealt and taken, affects the amount of healing done and taken. Affects the activation rate of debuffs/status inflictions and the rate of taking those (higher faith = higher chance of landing and recieving those status/debuffs)')
            message.channel.send('Move: Dictates how many tiles a unit can move')
            message.channel.send('Jump: Dictates how far a unit can go up or down')
            message.channel.send('Critical: Mainly affects the units ability to deal and evade Critical Hits')
            message.channel.send('You can check some links down below for further information about stats:')
            message.channel.send('https://brave-exvius.com/threads/wotv-stat-info-formulas.52931/')
            message.channel.send('http://wotvffbe.gamea.co/c/vbozq9uk')
    }
}