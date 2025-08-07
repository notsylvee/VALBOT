const fs = require("fs/promises");

module.exports = {
    data: {
        name: "brimstone",
        description: "Sends a random Brimstone voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["brimstone"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:Brimstone:1380773433780080793> ${voiceline.text}` });
    },
}