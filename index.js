import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { menuOptions, gamesOptions } from "./options/options.js";
import { onSlot } from "./games/slot.js";
import { onDice, onDiceBet } from "./games/dice.js";
import { balance } from "./balance.js";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

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
      onDice(ctx, bot);
      break;
    case "/dice1":
      onDiceBet(ctx, '1');
      break;
    case "/dice2":
      onDiceBet(ctx, '2');
      break;
    case "/dice3":
      onDiceBet(ctx, '3');
      break;
    case "/dice4":
      onDiceBet(ctx, '4');
      break;
    case "/dice5":
      onDiceBet(ctx, '5');
      break;
    case "/dice6":
      onDiceBet(ctx, '6');
      break;
    case "/diceOdd":
      onDiceBet(ctx, 'Odd');
      break;
    case "/diceEven":
      onDiceBet(ctx, 'Even');;
      break;
    case "/dice13":
      onDiceBet(ctx, '1-3');
      break;
    case "/dice46":
      onDiceBet(ctx, '4-6');
      break;
    default:
      break;
  }
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
