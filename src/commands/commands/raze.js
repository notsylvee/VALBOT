const fs = require("fs/promises");

module.exports = {
    data: {
        name: "raze",
        description: "Sends a random Raze voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {
        const voicelinesJsonData = await fs.readFile("data/voicelines.json", {encoding: "utf8"});
        const voicelinesMap = JSON.parse(voicelinesJsonData);
        const voicelines = voicelinesMap["raze"];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
            
        await interaction.reply({ content: `<:Raze:1380773589204074536> ${voiceline.text}` });
    },
}