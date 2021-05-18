module.exports = {
    name: 'ujobs',
    description: "this is a jobs command from units!",
    execute(message, args){
        message.channel.send('- JP (Job Points): A value used to learn stats/abilities nodes on abilities panel of every units')
        message.channel.send('- JP can be gained via completing stages or quests')
        message.channel.send('- Further information about jobs can be found here on this list:')
        message.channel.send('1. exjob')
        message.channel.send('2. joblist')
        message.channel.send('3. jobdetails')

    }
}

