module.exports = async (client) => {
  let statuses = [
    "Music mwhahaha",
    "@ me for commands"
  ]

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "LISTENING",
    });
  }, 1000);

  console.log(`[API] Logged in as ${client.user.username}`);
};