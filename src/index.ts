const {
  Message,
  Client,
  Events,
  GatewayIntentBits,
  EmbedBuilder,
  BaseInteraction,
  Collection,
} = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
import fs from "fs";

const client: typeof Client = new Client({
  intents: Object.values(GatewayIntentBits).filter(
    (v): v is number => typeof v === "number"
  ),
});

client.once(Events.ClientReady, (client: typeof Client) => {
  console.log(`Ready! Logged in as ${client.user?.tag}`);
});

client.on(Events.InteractionCreate, (interaction: typeof BaseInteraction) => {
  client.commands = new Collection();
  const commandFiles = fs
    .readdirSync(`./commands`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    try {
      client.commands.set(command.data.name, command);
      console.log(`${command.data.name} がロードされました。`);
    } catch (error) {
      console.log(
        `\u001b[31m${command.data.name} はエラーによりロードされませんでした。\nエラー内容\n ${error}\u001b[0m`
      );
    }
  }
});
