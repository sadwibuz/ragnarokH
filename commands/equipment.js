module.exports = {
    name: 'equipment',
    description: 'this is equipment command!',
    execute(message, args){
        message.channel.send('1. What is equipment?') 
        message.channel.send('- Equipment is divided into 3 categories: weapons, armor, and accessories. A unit that equips them gains additional stats, effects, and abilities. Weapons, armor, and accessories can be enhanced by leveling, awakening, and crafting to add "+"')  
        message.channel.send('2. Stats:')
        message.channel.send('- There are 13 stats which is the same for units stats for weapons, armor, and accessories. A unit can increase his/her stats by equipping them')  
        message.channel.send('- Increased stats cant be duplicated and only the higher one is applied. If a unit equipping an weapon that increases HP by 30 and an accessory that increases HP by 15, that unit gains additional 30 HP and not 45 HP')  
        message.channel.send('3. Effect:')  
        message.channel.send('- Some pieces of equipment have their own effects at start or with "+", and effects are strengthened by leveling or increasing "+ (+1~5)" ')  
        message.channel.send('4. Ability:')  
        message.channel.send('Some pieces of equipment have their own abilities. A unit with a piece of equipment with an ability can use that ability. Equipment abilities are Just like abilities units acquire and it can be strengthened by spneding Ampot')  
        message.channel.send('5. Equip slots:')  
        message.channel.send('Each unit has 3 equip slots. The 2nd and 3rd ones are unlocked by the 2nd and 4th limit breaks and 3rd equip slot is only for trust master reward equips')  
        message.channel.send('A unit cant equip 2 weapons simultaneously, the same for armor')  
        message.channel.send('6. TMR (Trust master reward)')
        message.channel.send('- TMR also known as (Trust master reward) is equipment that you get by performing 5 awakenings and 5 limit breaks on a unit, each unit has its own TMR')

    }
}