import { balance, setBalance } from "../balance.js";
import { gamesOptions } from "../options.js";

export const onDice = async (ctx) => {
  const emoji = await ctx.editMessageText('🎲 Roll the dice...');
  const diceResult = await ctx.replyWithDice({ emoji: '🎲' });
  handleDiceResult(ctx, diceResult.dice.value);
  ctx.reply("Play again", gamesOptions);
};

const handleDiceResult = async (ctx, value) => {
  if (value > 3) {
    setBalance(balance + 5);
    ctx.reply("You win! now your balance is - " + balance);
  } else {
    setBalance(balance - 5);
    ctx.reply("You lose! now your balance is - " + balance);
  }
}