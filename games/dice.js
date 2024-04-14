import { balance, setBalance } from "../balance.js";
import { diceBetOptions } from "../options/options.js";


export const onDice = async (ctx) => {
  await ctx.editMessageText("Place your bet:", diceBetOptions);
}

export const onDiceBet = async (ctx, bet) => {
  const emoji = await ctx.editMessageText('🎲 Roll the dice...');
  const diceResult = await ctx.replyWithDice({ emoji: '🎲' });
  handleDiceResult(ctx, diceResult.dice.value, bet);
  ctx.reply("Play again", diceBetOptions);
}

const handleDiceResult = async (ctx, result, bet) => {

  let winAmount = 0;
  switch (bet) {
    case "1":
      winAmount = result === 1 ? 10 : -2;
      break;
    case "2":
      winAmount = result === 2 ? 10 : -2;
      break;
    case "3":
      winAmount = result === 3 ? 10 : -2;
      break;
    case "4":
      winAmount = result === 4 ? 10 : -2;
      break;
    case "5":
      winAmount = result === 5 ? 10 : -2;
      break;
    case "6":
      winAmount = result === 6 ? 10 : -2;
      break;
    case "Odd":
      winAmount = result % 2 !== 0 ? 5 : -5;
      break;
    case "Even":
      winAmount = result % 2 === 0 ? 5 : -5;
      break;
    case "1-3":
      winAmount =  result <= 3 ? 5 : -5;
      break;
    case "4-6":
      winAmount = result >= 4 ? 5 : -5;
      break;
    default:
      break;
  }
  setBalance(balance + winAmount);
  ctx.reply(`You ${winAmount > 0 ? 'win' : 'lose'}! Your new balance is ${balance}`);
}
