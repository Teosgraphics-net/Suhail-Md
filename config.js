const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348075978303";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_30_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzLFxuICAgICAgICA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICA0OCxcbiAgICAgICAgNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNyeEQzSGJ4YUxIYTAvdGxKRzUxWDBCdmhkbHZ1N3IvemczL3h5YTh5ZUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NTk3ODMwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEEyNzY0RjRBNDU4QkY1Q0M5NzUwQTM0MTM3RTQ4NENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjM1ODE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3NTk3ODMwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTVBQTBBQjk0QjdFQUVFOTYxOUI4RDY4NTJGMjBDRDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjM1ODE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZmZ0ZCb2FSUkhTOUg5Nm1ZNHh4SVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGZkMTlhZTUtNDc4Yi00N2M5LWJkMGUtZWY5YmFhODViZThhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDUxLFxuICAgICAgMjIzLFxuICAgICAgMTQwLFxuICAgICAgNyxcbiAgICAgIDI1MyxcbiAgICAgIDgzLFxuICAgICAgNTgsXG4gICAgICAyNDQsXG4gICAgICAyMTEsXG4gICAgICAyMzksXG4gICAgICAxNDEsXG4gICAgICAxMDIsXG4gICAgICAyNDcsXG4gICAgICAxMDQsXG4gICAgICAxMTAsXG4gICAgICAyMzgsXG4gICAgICAxMDgsXG4gICAgICAxMTcsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICA5NSxcbiAgICAgIDIyMCxcbiAgICAgIDE1MixcbiAgICAgIDQsXG4gICAgICAxLFxuICAgICAgOTAsXG4gICAgICAxMTgsXG4gICAgICA5NCxcbiAgICAgIDIzNixcbiAgICAgIDE5OSxcbiAgICAgIDQsXG4gICAgICAxNjcsXG4gICAgICAxOTMsXG4gICAgICAxMzYsXG4gICAgICAxODIsXG4gICAgICAxMixcbiAgICAgIDE5MCxcbiAgICAgIDExNCxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFaVzVTRTVCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc1OTc4MzAzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MDM5MzMyNDU0NDg1OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT3lldG9ybyBUb2x1d2FcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdlI1RTBRNU9ubHN3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhFOGs4SCtUaU03SXUyOW9hRWo3T21JVU0wZDl3VjFrQ09nNjg0UG5yanc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV2gzd0cvS281TklBU0N0ekdWWkJ1VVYyL21rdjBuWm90MFBvU3I2S3RselZKMEJERnd6Nzh0eU5oeU5UZExENHlBbXFEZ3VuYWVsZ0szb2k2c0RjRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwianQ4WFhvWUlmc2RaWXlqUkllTVA0SlFQS3U2Z1JteXVqYTZxNHk0cjF1RnpLL09IQlg0dGVzNkpiYVZzM3lyb2pVUVd2MnQzTFMvblViSUVobkh3RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NTk3ODMwMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyMzU4MTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJS2hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlLaC5qc29uIjogIntcImtleURhdGFcIjpcImk4ZnAwWHh4T2JQc2oxNWdrSmx6VHdpVkpWMmNQQVBkbk51UDhHRVV6Y0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzMTI5NTE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyMjY0OTYxMDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
