const fs = require("fs/promises");

module.exports = {
    data: {
        name: "deadlock",
        description: "Sends a random Deadlock voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["deadlock"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:Deadlock:1380773475349823499> ${voiceline.text}` });
    },
}