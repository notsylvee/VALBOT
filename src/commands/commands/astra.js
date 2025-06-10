const fs = require("fs/promises");

module.exports = {
    data: {
        name: "astra",
        description: "Sends a random Astra voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["astra"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:Astra:1380773405015412736> ${voiceline.text}` });
    },
}