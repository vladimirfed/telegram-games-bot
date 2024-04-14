export const menuOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "🎰 Games", callback_data: "/games" }],
      [{ text: "💵 Balance", callback_data: "/balance" }],
    ],
  }),
};

export const gamesOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "🎰 Slot", callback_data: "/slot" },
        { text: "🎲 Dice", callback_data: "/dice" },
      ],
    //   [
    //     { text: "🏀 Basketball", callback_data: "/basketball" },
    //     { text: "⚽ Footbal", callback_data: "/footbal" },
    //   ],
    //   [
    //     { text: "🎯 Darts", callback_data: "/darts" },
    //     { text: "🎳 Bowling", callback_data: "/bowling" },
    //   ],
      [{ text: "🔙 Menu", callback_data: "/menu" }],
    ],
  }),
};

export const diceBetOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "1", callback_data: "/dice1" },{ text: "2", callback_data: "/dice2" },{ text: "3", callback_data: "/dice3" }],
      [{ text: "4", callback_data: "/dice4" },{ text: "5", callback_data: "/dice5" },{ text: "6", callback_data: "/dice6" }],
      [{ text: "Odd", callback_data: "/diceOdd" },{ text: "Even", callback_data: "/diceEven" }],
      [{ text: "1 - 3", callback_data: "/dice13" },{ text: "4 - 6", callback_data: "/dice46" }],
      [{ text: "🔙 Games", callback_data: "/games" }],
    ],
  }),
};
