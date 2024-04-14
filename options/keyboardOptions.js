
export const showKeyboardMenu = (chatId, bot) => {
  bot.telegram.sendMessage(chatId, 'Options',{
    reply_markup: {
      keyboard: [
        [{ text: "🎰 Games" }],
        [{ text: "💵 Balance" }],
      ],
      resize_keyboard: true,
    }
  })
}

export const hideKeyboardMenu = (chatId, bot) => {
  bot.telegram.sendMessage(chatId, 'Close',{
    reply_markup: {
      remove_keyboard: true
    }
  })
}
