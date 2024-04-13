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
