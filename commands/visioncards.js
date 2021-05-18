module.exports = {
    name:'visioncards',
    description: 'this is a vision card commands!',
    execute(message, args){
        message.channel.send('- Vision card stats shares the same with units stats ')
        message.channel.send('- Each vision card will have 2 section when it comes to buff/debuff, Party Ability where it can be applied for all units within party and Bestowed Effects applies specifically for equippend unit only')
        message.channel.send('- Red words line on Party Ability on a vision card specify only a certain units in party benefit from the effect while white words effect will apply to all units within Party')
        message.channel.send('For example: Bahamut VC: Light Unit MAG UP X% will ONLY increase MAGs of light units')
        message.channel.send('- Bestowed Effects only apply for equipped unit and Limited Bestowed Effects only applies if equipped unit meets the conditions')
        message.channel.send('For instances: NiER:Automata VC: First limited bestowed effects applies for equipped unit that have wind element')
        message.channel.send('Second limited bestowed effects: The effect only activate if the holder is a "2B" unit')
        message.channel.send('Here is some explanation of some effects:')
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
        message.channel.send('+ Suteki Da Ne( Tidus )VC: DEF Piercing Rate Up: Increase penetration on DEF')
        message.channel.send('- Damage Limit Up: Increase maximum damage dealt')
        message.channel.send('Note: On default, maximum damage dealt is 9999, this effect will expand the limit')
        message.channel.send('Note: Usually in a party effect, it will display following this order')
        message.channel.send('[Units Benefit] - [Elements/Stats/Attack/Attack-type/Res/Piercing/Critical Hit Rate/Evasion/Max HP/Accuracy... + [RES]] - [UP/Down] - [Index]')
        message.channel.send('For example: + Golem VC: Earth Unit Lightning Attack Res Up 0: Earth Unit will increase RES on Lightning Attack')
        message.channel.send('+ Suteki Da Ne( Tidus )VC: Water Unit Slash Attack UP: Increase Slash Attack of Water units')
        message.channel.send('+ Suteki Da Ne( Tidus )VC: Water Unit Critical Hit Rate UP: Increase critical hit of Water unit')

    }
}