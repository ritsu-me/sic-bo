const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sicbo_start")
    .setDescription("Start the SicBo game."),

  async execute(interaction, client) {
    interaction.reply({
      content: "You hosted a game.",
      ephemeral: true
    });
    interaction.reply({
      embeds:[
        new EmbedBuilder()
        .setTitle("")
        .setDescription(`# 🎲SicBo\nThe game has hosted by ${interaction.user.displayName}.\nLet's start the bet!`)
        .addFields()
      ]
    })
  },
};
