module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    const updates = await client.channels.fetch("1344570100589662268");
    updates.send("I am now online/have been updated!");
  },
};