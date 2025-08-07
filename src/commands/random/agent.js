const { EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "agent",
        description: "Get a random Valorant agent",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const agentsJsonData = await fs.readFile("data/agents.json", {encoding: "utf8"});
      const agentsMap = JSON.parse(agentsJsonData);
      const agents = agentsMap["agents"];
      const agent = agents[Math.floor(Math.random() * agents.length)];

      const embed = new EmbedBuilder()
      .setColor(`#ff4654`)
      .setTitle(`${agent.name}`)
      .setImage(`https://cdn.sylvee.xyz/valorantagent${agent.num}.png`)
      .setFooter({ text: `${agent.role}`, iconURL: `https://cdn.sylvee.xyz/valorant${agent.role}.png` });

      await interaction.reply({ embeds: [embed] });
    },
};