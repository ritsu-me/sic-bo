const { REST, Routes } = require("discord.js");
const fs = require("node:fs");
require("dotenv").config(); //環境変数:Replitの方はこの行を消してください

const commands = [];
const commandFiles = fs.readdirSync("./commands").filter((file: any) => {
  console.info(typeof file);
  file.endsWith(".js");
});

for (const file of commandFiles) {
  //GlobalCommandをJSON化
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log(`${commands.length}個のコマンドを読み込み中`);
    const data = await rest.put(
      //GlobalCommandを読み込み
      Routes.applicationCommands("1157183694335901756"),
      { body: commands }
    );
    console.log(`[GlobalCommand]${data.length}個のコマンドを読み込み完了`);
  } catch (error) {
    console.error(error); //エラーの場合はエラーログを出力
  }
})();
