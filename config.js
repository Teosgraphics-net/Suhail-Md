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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_55_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiemRlUm1ZNWpFRi9jZjUvQndza2lCdThIS3hXV3RkcFZ3SDFtaEl3eGpPcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc1OTc4MzAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERDBCMTVDMERGREY1NzhCMzhDNTlFOEU0MUQyQTNERlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyMjY0OTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc1OTc4MzAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2OUY2Mjk5QjMzQTZDMDQxRDdBOTE1RjlCNTI2RTRBMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyMjY0OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDc1OTc4MzAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNUM4MDMxRUU3MUQyOTM4QTMzMTVDMURFQzZCMTI2QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyMjY1MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZXRJM2hyVXVTSWFyVUMxYWh2aGhDZ1wiLFxuICBcInBob25lSWRcIjogXCJiN2MxMWFmYy05M2RlLTRmYzctYTdmNi05YmJlZGU1YjhlZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMzcsXG4gICAgICA1OSxcbiAgICAgIDE1NSxcbiAgICAgIDEwMSxcbiAgICAgIDk4LFxuICAgICAgMTcsXG4gICAgICAxNjIsXG4gICAgICAxMTQsXG4gICAgICA2MCxcbiAgICAgIDIsXG4gICAgICA4NCxcbiAgICAgIDUzLFxuICAgICAgMTg1LFxuICAgICAgMjIyLFxuICAgICAgMTIxLFxuICAgICAgMTMwLFxuICAgICAgMTEwLFxuICAgICAgNzEsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDYsXG4gICAgICAxNzksXG4gICAgICAxNzUsXG4gICAgICAyOCxcbiAgICAgIDE0OSxcbiAgICAgIDEyMSxcbiAgICAgIDU1LFxuICAgICAgNjUsXG4gICAgICAxMTcsXG4gICAgICA5MyxcbiAgICAgIDIwMyxcbiAgICAgIDY5LFxuICAgICAgNzIsXG4gICAgICA0MSxcbiAgICAgIDE2OCxcbiAgICAgIDE4NSxcbiAgICAgIDIwMixcbiAgICAgIDY1LFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkZLNEVOVDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzU5NzgzMDM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgwMzkzMzI0NTQ0ODU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJPeWV0b3JvIFRvbHV3YVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t2UjVFMFErYURsc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieEU4azhIK1RpTTdJdTI5b2FFajdPbUlVTTBkOXdWMWtDT2c2ODRQbnJqdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFNUFweGhSMVBPMWNYa084QzJ3R2ExbjVacW1RY3ovc0M2VWQ4V1FNMHgycUQyd2tqd3FLaGpRSmtNUDMrM0tvTmNGQ0JmdHZIdnpYdlVKRTB1bktDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1QVVoTlBrRGtoNTg3MmJBWWtqTW9wMEdzbVpOTFVJUVVlb3BXTUNsYVJlUWR6dDY1Mkc5b2E0dERSczBKREQ2MGp0cjF1Z1pHeEw2MHl4SHZ6M3BnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc1OTc4MzAzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTIyNjQ5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlLaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUtoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaThmcDBYeHhPYlBzajE1Z2tKbHpUd2lWSlYyY1BBUGRuTnVQOEdFVXpjRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjMxMjk1MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTIyNjQ5NjEwMlwifSIKfQ=="  // PUT your SESSION_ID 


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
