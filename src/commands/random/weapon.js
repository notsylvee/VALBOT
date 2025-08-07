const { EmbedBuilder } = require("discord.js");
const fs = require("fs/promises");

module.exports = {
    data: {
        name: "weapon",
        description: "Get a random Valorant weapon",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

      const weaponsJsonData = await fs.readFile("data/weapons.json", {encoding: "utf8"});
      const weaponsMap = JSON.parse(weaponsJsonData);
      const weapons = weaponsMap["weapons"];
      const weapon = weapons[Math.floor(Math.random() * weapons.length)];

      const embed = new EmbedBuilder()
      .setColor(`#ff4654`)
      .setTitle(`# ${weapon.name}`)
      .setImage(`https://cdn.sylvee.xyz/valorantweapon${weapon.num}.png`)
      .setFooter({ text: `${weapon.price}`, iconURL: `https://cdn.sylvee.xyz/valorantcredit.png` });

      await interaction.reply({ embeds: [embed] });
    },
};