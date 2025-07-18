const NEWS_LETTER_JID = process.env.WA_CHANEL || null; // Replace with your real one
const BOT_NAME = process.env.BOT_NAME || "HOT BOT"; // Default bot name if not set
const DEFAULT_THUMBNAIL = process.env.DEFAULT_THUMBNAIL || null;

const createContext = (userJid, options = {}) => ({
    contextInfo: {
        mentionedJid: [userJid], // Tag user if needed
        forwardingScore: 999,
        isForwarded: true,
        businessMessageForwardInfo: {
            businessOwnerJid: process.env.WA_CHANEL, // Helps add verified feel
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: NEWS_LETTER_JID,
            newsletterName: options.newsletterName || BOT_NAME,
            serverMessageId: Math.floor(100000 + Math.random() * 900000)
        },
        externalAdReply: {
            title: options.title || BOT_NAME,
            body: options.body || "Premium WhatsApp Bot Solution",
            thumbnailUrl: options.thumbnail || DEFAULT_THUMBNAIL,
            mediaType: 1,
            mediaUrl: options.mediaUrl || undefined,
            sourceUrl: options.sourceUrl || "https://wa.me/254728782591", // link to bot or business
            showAdAttribution: true,
            renderLargerThumbnail: false 
        }
    }
});

module.exports = {
    createContext
};
