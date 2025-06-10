const fs = require("fs/promises");

module.exports = {
    data: {
        name: "gekko",
        description: "Sends a random Gekko voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["gekko"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:Gekko:1380773495260188723> ${voiceline.text}` });
    },
}