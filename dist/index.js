"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Message, Client, Events, GatewayIntentBits, EmbedBuilder, BaseInteraction, Collection, } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const fs_1 = __importDefault(require("fs"));
const client = new Client({
    intents: Object.values(GatewayIntentBits).filter((v) => typeof v === "number"),
});
client.once(Events.ClientReady, (client) => {
    var _a;
    console.log(`Ready! Logged in as ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.tag}`);
});
client.on(Events.InteractionCreate, (interaction) => {
    client.commands = new Collection();
    const commandFiles = fs_1.default
        .readdirSync(`./commands`)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        try {
            client.commands.set(command.data.name, command);
            console.log(`${command.data.name} がロードされました。`);
        }
        catch (error) {
            console.log(`\u001b[31m${command.data.name} はエラーによりロードされませんでした。\nエラー内容\n ${error}\u001b[0m`);
        }
    }
});
client.login();
//# sourceMappingURL=index.js.map