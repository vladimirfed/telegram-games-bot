import dotenv from 'dotenv';  // Import the dotenv module
dotenv.config(); 
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { menuOptions, gamesOptions } from "./options.js";
import { onSlot } from "./games/slot.js";
import { onDice } from "./games/dice.js";
import { balance } from "./balance.js";

const bot = new Telegraf(process.env.BOT_TOKEN); 

// const bot = new Telegraf("6958125370:AAFGqHewBU7pckcq62ex9uT_BrIoNVP39Pk");
bot.start((ctx) => onStart(ctx));
bot.help((ctx) => ctx.reply("You can contact administrator for help"));
bot.command("games", (ctx) => ctx.reply("Games", gamesOptions));
bot.on(message(), (ctx) => {
  ctx.reply("I'm sorry, I didn't understand that command. Please try again.");
});

bot.telegram.setMyCommands([
  { command: "start", description: "Start bot" },
  { command: "help", description: "Get help" },
  { command: "games", description: "Pick a game to play" },
]);

const onStart = async (ctx) => {
  await ctx.reply("Welcome to the bot!", menuOptions);
};

const onMenu = async (ctx) => {
  await ctx.editMessageText("Welcome to the bot!", menuOptions);
};

const onGames = async (ctx) => {
  await ctx.editMessageText("Games", gamesOptions);
};

bot.on("callback_query", (ctx) => {
  const data = ctx.update.callback_query.data;
  switch (data) {
    case "/games":
      onGames(ctx);
      break;
    case "/balance":
      ctx.reply("Your current balance is: " + balance);
      break;
    case "/menu":
      onMenu(ctx);
      break;
    case "/slot":
      onSlot(ctx);
      break;
    case "/dice":
      onDice(ctx);
      break;
    default:
      break;
  }
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
