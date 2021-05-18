module.exports = {
    name: 'vceffects',
    description: "this is a effects command from visioncards!",
    execute(message, args){
        message.channel.send('- Each vision card will have 2 section when it comes to buff/debuff, Party Ability where it can be applied for all units within party and Bestowed Effects applies specifically for equippend unit only')
        message.channel.send('- White party abilites apply to all Units in the party, while red are limited and only apply to Units of a specific Element')
        message.channel.send('For example: Bahamut VC: Light Unit MAG UP X% will ONLY increase MAGs of light units')
        message.channel.send('- Bestowed Effects only apply for equipped unit and Limited Bestowed Effects only applies if equipped unit meets the conditions')
        message.channel.send('For instances: Blossoms in the Dark: First limited bestowed effects applies not specify any elements or specific units but it does have jobs condition which units that doesnt have one or more jobs related to the list are not benefited by the effect')
        message.channel.send('Second limited bestowed effects only activate if the holder is "Skahal" ')
        message.channel.send('Third limited bestowed effects only activate if the holder is "Loreila" ')
    }
}