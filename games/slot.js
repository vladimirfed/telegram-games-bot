import { balance, setBalance } from "../balance.js";
import { gamesOptions } from "../options.js";

const winningCombinations = [22, 43, 53, 64]; 

export const onSlot = async (ctx) => {
  const emoji = await ctx.editMessageText('🎰 Spin the slot...');
  const diceResult = await ctx.replyWithDice({ emoji: '🎰' });
  handleSlotResult(ctx, diceResult.dice.value);
  ctx.reply("Play again", gamesOptions);
};

const handleSlotResult = async (ctx, value) => {
  switch (value) {
    case 22 || 43:
      setBalance(balance + 7);
      ctx.reply("You win! now your balance is - " + balance);
      break;
    case 32:
      setBalance(balance + 5);
      ctx.reply("You win! now your balance is - " + balance);
      break;
    case 64:
      setBalance(balance + 10);
      ctx.reply("You win! now your balance is - " + balance);
      break;
    default:
      setBalance(balance - 1);
      ctx.reply("You lose! now your balance is - " + balance);
  }
}
