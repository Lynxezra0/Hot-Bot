
// utils/contextManager.js
const NEWS_LETTER_JID = process.env.WA_CHANEL || null; // Replace with your real one
const BOT_NAME = process.env.BOT_NAME || "HOT BOT"; // Default bot name if not set
const thumbnails = [
                "https://files.catbox.moe/165qf7.jpg",
                "https://files.catbox.moe/24j10y.jpeg"
            ];

            // Select a random thumbnail
            const DEFAULT_THUMBNAIL = process.env.DEFAULT_THUMBNAIL || thumbnails[Math.floor(Math.random() * thumbnails.length)];

const createContext2 = (userJid, options = {}) => ({
    contextInfo: {
        mentionedJid: [userJid],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: NEWS_LETTER_JID,
            newsletterName: BOT_NAME,
            serverMessageId: Math.floor(100000 + Math.random() * 900000)
        },
        externalAdReply: {
            title: options.title || BOT_NAME,
            body: options.body || "Premium WhatsApp Bot Solution",
            thumbnailUrl: options.thumbnail || DEFAULT_THUMBNAIL,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true 
        }
    }
});

module.exports = {
    createContext2
};
