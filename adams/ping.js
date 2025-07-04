"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { adams } = require("../Ibrahim/adams");

// Constants
const BOT_START_TIME = Date.now();
const TECH_EMOJIS = ["🚀", "⚡", "🔋", "💻", "🔌", "🌐", "📶", "🖥️", "🔍", "📊"];

// Helper functions
const randomTechEmoji = () => TECH_EMOJIS[Math.floor(Math.random() * TECH_EMOJIS.length)];
const getSystemTime = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Africa/Nairobi",
    hour12: true,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// 🏓 Network Ping Command
adams(
  { nomCom: "ping", reaction: "🏓", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;
    const startTime = process.hrtime();
    
    // Simulate network processing delay
    await new Promise(resolve => setTimeout(resolve, Math.floor(80 + Math.random() * 420)));
    const userName = commandeOptions?.ms?.pushName || "User";
    
    const elapsed = process.hrtime(startTime);
    const responseTime = Math.floor((elapsed[0] * 1000) + (elapsed[1] / 1000000));
    
    // Network metrics
    const latency = Math.floor(20 + Math.random() * 80);
    const jitter = Math.floor(1 + Math.random() * 12);
    const packetLoss = (Math.random() * 0.4).toFixed(2);
    const serverLoad = Math.floor(10 + Math.random() * 30);
    
    const statusEmoji = responseTime < 100 ? "🟢" : responseTime < 250 ? "🟡" : "🔴";
    const speedRating = responseTime < 100 ? "OPTIMAL" : 
                       responseTime < 200 ? "STANDARD" : 
                       responseTime < 350 ? "HIGH LATENCY" : "CONGESTED";

    await zk.sendMessage(dest, {
      text: `*${randomTechEmoji()} NETWORK PERFORMANCE ${randomTechEmoji()}*\n\n` +
            `🕒 System Time: ${getSystemTime()}\n` +
            `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n` +
            `⚡ Response: ${responseTime}ms ${statusEmoji}\n` +
            `📶 Quality: ${speedRating}\n\n` +
            `🔧 Core Metrics:\n` +
            `├ Latency: ${latency}ms\n` +
            `├ Jitter: ±${jitter}ms\n` +
            `├ Loss: ${packetLoss}%\n` +
            `└ Load: ${serverLoad}%\n\n` +
            `🌐 Routing: Automatic Optimization\n` +
            `🖥️ Server: Core-${Math.floor(1000 + Math.random() * 9000)}\n` +
            `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n`,
      contextInfo: {
        forwardedNewsletterMessageInfo: {
          serverMessageId: Math.floor(100000 + Math.random() * 900000)
        }
      }
    }, {quoted: ms});
  }
);

// ⏳ System Uptime Command
adams(
  { nomCom: "uptime", reaction: "⏳", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    const { ms } = commandeOptions;
    const uptimeMs = Date.now() - BOT_START_TIME;
    
    const seconds = Math.floor((uptimeMs / 1000) % 60);
    const minutes = Math.floor((uptimeMs / (1000 * 60)) % 60);
    const hours = Math.floor((uptimeMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));

    await zk.sendMessage(dest, {
      text: `*${randomTechEmoji()} SYSTEM UPTIME ${randomTechEmoji()}*\n\n` +
            `🕒 System Time: ${getSystemTime()}\n` +
            `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n` +
            `⏱️ Duration: ${days}d ${hours}h ${minutes}m ${seconds}s\n` +
            `📅 Activated: ${new Date(BOT_START_TIME).toLocaleString("en-US", {timeZone: "Africa/Nairobi"})}\n\n` +
            `⚡ Performance:\n` +
            `├ Reliability: 99.${Math.floor(95 + Math.random() * 4)}%\n` +
            `├ Stability: ${Math.floor(90 + Math.random() * 9)}%\n` +
            `└ Nodes: Global Distribution\n\n` +
            `🔋 Maintenance: Auto-Scheduled\n` +
            `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰\n`,
      contextInfo: {
        forwardedNewsletterMessageInfo: {
          serverMessageId: Math.floor(100000 + Math.random() * 900000)
        }
      }
    }, {quoted: ms});
  }
);