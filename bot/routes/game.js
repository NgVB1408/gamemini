const express = require('express');
const router = express.Router();
const axios = require('axios');
const TELEGRAM_BOT_TOKEN = '8008339604:AAG3O3Q1C6_5yzl21uvrX_vvXRhdS5v0oeI';

router.post('/', (req, res) => {
    const { name, score, chat_id } = req.body;

    if (!name || !score || !chat_id) {
        return res.status(400).json({ message: 'Dữ liệu không hợp lệ!' });
    }

    // Gửi điểm về Telegram BOT
    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: chat_id,
        text: `🎉 ${name} vừa đạt được ${score} điểm trong trò chơi!`,
    });

    res.json({ message: 'Điểm số đã được gửi tới BOT!' });
});

module.exports = router;
