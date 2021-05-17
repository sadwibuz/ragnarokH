const { PartialGroupDMChannel } = require("discord.js")

module.exports = {
    name:'abilities',
    description: 'this is a abilities command from units!',
    execute(message, args){
        message.channel.send('Each jobs will have its own distinctive abilities that other jobs dont have and by enhancing its level using JP, it will allows you to increase damage dealt, increase ability effects such as cheers or boost rates at which you can inflict status ailments on enemies.')
        message.channel.send('More abilities will become available after meeting certain conditions such as limit break or awakening units')
        message.channel.send('AP/TP cost and number of times can be used is displayed when tapping "Details" button of the ability')
        message.channel.send('By using "Ability Set" and hold the cursor(hand) on the job names panel, you can toggle on/off abilities on specific runs or changing different jobs')
        message.channel.send('Abilities can be divided into these types below:')
        message.channel.send('1. Main Commands are commands that are fixed. Abilities listed in your Main Commands can be used during battle')
        message.channel.send('2. Sub Commands are commands that can be freely set. Abilities included in the Sub Commands listed on your units jobs can be used during battle')
        message.channel.send('3. Support Abilities (can be used normally to boost stats or provide special effects) You can set up to two types of Support Abilities')
        message.channel.send('4. Reaction Abilities (activate automatically when a unit has been attacked by an opponent)')
        message.channel.send('Note:')
        message.channel.send('- Tapping and holding on a job will allow you to view and confirm which abilities can be used with it')
        message.channel.send('- Some effects only apply to specific jobs or abilities. For example, the "Range +1" effect of the ability Ranger Lore only applies to Missile-type jobs and abilities')
        message.channel.send('- Limit Bursts: Especially powerful abilities that only certain units possess')
        message.channel.send('- Master Abilities: Unique abilities that can be obtained by clearing Character Quests (open at lvl40). Some units get a second MA like Gilga and Xmacherie and Xramada at lv 80')
    }

}