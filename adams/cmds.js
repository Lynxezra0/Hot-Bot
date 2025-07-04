const { adams } = require("../Ibrahim/adams");
const moment = require("moment-timezone");
const s = require(__dirname + "/../config");

// Register multiple command triggers
const commandTriggers = ["cmds", "cmd", "commands", "help", "list", "bot"];

commandTriggers.forEach(trigger => {
    adams({ 
        nomCom: trigger, 
        categorie: "General" 
    }, async (dest, zk, commandeOptions) => {
        const { ms, repondre, auteurMsg } = commandeOptions;
        const { cm } = require("../Ibrahim/adams");
        
        // Get user's push name or default
        const userName = commandeOptions?.ms?.pushName || "User";
        
        // Format time and date
        moment.tz.setDefault(s.TZ || "Africa/Nairobi");
        const time = moment().format("h:mm A");
        const date = moment().format("DD/MM/YYYY");
        
        // Organize commands by category with counts
        const categories = {};
        cm.forEach(cmd => {
            if (!categories[cmd.categorie]) {
                categories[cmd.categorie] = [];
            }
            categories[cmd.categorie].push(cmd.nomCom);
        });

        // Create category summary with counts
        let categorySummary = "";
        for (const [category, commands] of Object.entries(categories)) {
            categorySummary += `▢ ${category.toUpperCase()} (${commands.length})\n`;
        }

        // Create full numbered command list
        let fullCommandList = "";
        let commandCounter = 1;
        for (const [category, commands] of Object.entries(categories)) {
            fullCommandList += `\n*【 ${category.toUpperCase()} 】*\n`;
            commands.forEach(cmd => {
                fullCommandList += `${commandCounter++}. ${cmd}\n`;
            });
        }

        // Main menu message with your requested format
        const message = `
┌─❖ 𓆩 ⚡ 𓆪 ❖─┐
       𝐁𝐖𝐌 𝐗𝐌𝐃    
└─❖ 𓆩 ⚡ 𓆪 ❖─┘  

👤 ᴜsᴇʀ ɴᴀᴍᴇ: ${userName}
📅 ᴅᴀᴛᴇ: ${date}
⏰ ᴛɪᴍᴇ: ${time}

📊 *CATEGORIES (${Object.keys(categories).length})*
${categorySummary}

📜 *FULL COMMAND LIST (${cm.length})*
${fullCommandList}

┌─❖
│
└┬❖  
┌┤✑IRON wolf
│└────────────┈ ⳹        
│ > © Lynx
└─────────────────┈ ⳹
`.trim();

        // Send text message only
        await zk.sendMessage(dest, {
            text: message,
        });
    });
});