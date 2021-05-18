module.exports = {
    name: 'status',
    description: "this is a status command from combat!",
    execute(message, args){
        message.channel.send('- Positive:')
        message.channel.send('+ Haste: The unit gains CT increments at an increased rate (1.5x accumulation rate, or +50%). Removes Slow')
        message.channel.send('+ Quicken: Increased the CT of a unit by 100% (basically gives them a turn instantly) if a different unit is already at 100 ct when quicken is cast the unit with higher agi will take a turn')
        message.channel.send('+ Fast Cast: Reduces targets ability Activation Time (or Spell Casting Time) needed. Does not affect abilities without Cast Speed (aka Instant Cast)')
        message.channel.send('+ Float: The unit levitates 1 height value above ground and will not be affected by certain abilities, e.g. Terra Slash (Monk)')
        message.channel.send('+ Regen: Recovers X% of Max HP per turn. (Lv1 = 5%, Lv20 = 10%)')
        message.channel.send('+ Protect: Decreases physical damage taken. (Lv20 = 25%)')
        message.channel.send('+ Shell: Decreases magical damage taken. (Lv20 = 25%)')
        message.channel.send('- Negative:')
        message.channel.send('+ Poison: Gradually decreases units HP per at the end of the units turn')
        message.channel.send('+ Blind: It decreases the accuracy and chance to hit')
        message.channel.send('+ Sleep: Units turn is skipped, damage taken +50%. Can be removed by taking damage. Breaks any current damage chains when sleeping through turns')
        message.channel.send('+ Paralysis: Chance per turn for a unit to get Immobilize/Disable effect')
        message.channel.send('+ Silence: Unable to cast spells')
        message.channel.send('+ Immobilize: Unable to move at all; can still cast skills and spells')
        message.channel.send('+ Confuse: Unit will attack randomly')
        message.channel.send('+ Petrify: Completely turns a unit to stone. Cannot move or act')
        message.channel.send('+ Toad: Unit turns into a frog, unable to use abilities, damage dealt -50% and damage taken +50%. Can be removed by casting Toad or Esuna on afflicted unit')
        message.channel.send('+ Charm: Forces unit to attack allied teammates; curable by Erase')
        message.channel.send('+ Stop: Cannot move or take an action. Curable by Erase')
        message.channel.send('+ Slow: The unit gains CT increments at a decreased rate (0.5x accumulation rate, or -50%). Removes Haste')
        message.channel.send('+ Doom: Puts a curse and gives the unit a certain number of turn count until they are immediately KOd')
    }
}