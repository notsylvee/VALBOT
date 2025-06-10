const fs = require("fs/promises");

module.exports = {
    data: {
        name: "killjoy",
        description: "Sends a random Killjoy voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["killjoy"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:Killjoy:1380773550595637289> ${voiceline.text}` });
    },
}