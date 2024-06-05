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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233592125926";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_57_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExLFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpT0E3ZGVCQy9Qall3NUVTRWUvTHlZSkJPaVR4UHhNd3RSeloxaVUvYjE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBbTNla19yVFRqR2pEMnF2bTVld2dBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhNWU4OTZjLWI5MmItNGYxZS04NDQxLTU3NGUxZTBiNmE1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICA5NSxcbiAgICAgIDE2OCxcbiAgICAgIDE4NyxcbiAgICAgIDE1LFxuICAgICAgMjQ0LFxuICAgICAgMTAsXG4gICAgICAxODEsXG4gICAgICAxODgsXG4gICAgICAxNDMsXG4gICAgICAyMyxcbiAgICAgIDIzLFxuICAgICAgMTc4LFxuICAgICAgNjYsXG4gICAgICAyMTUsXG4gICAgICAyMTQsXG4gICAgICAyMDAsXG4gICAgICA1OSxcbiAgICAgIDIsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDUyLFxuICAgICAgMTc0LFxuICAgICAgMTc5LFxuICAgICAgODUsXG4gICAgICAxNixcbiAgICAgIDI4LFxuICAgICAgNDksXG4gICAgICAxMTEsXG4gICAgICAxMjEsXG4gICAgICA0NyxcbiAgICAgIDIwMSxcbiAgICAgIDI0NSxcbiAgICAgIDE3MCxcbiAgICAgIDE0MixcbiAgICAgIDE4NCxcbiAgICAgIDEzOCxcbiAgICAgIDExOSxcbiAgICAgIDI0MCxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkU1UkxCVkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU5MjEyNTkyNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc5ODM4OTA0MjI1ODY2OjE4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNyaXRpY2FsXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENQdFpjSUVQRFFnTE1HR0JnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFK25jOWJYUTYyU250NHQyankwOUd5bHQ0cDd5bnEzUjlydit2Y0l4VFVvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1FVkVnNFYrbGJrZndpVVQ3alBaSHIrMnJzQktOK0xPVGpsMFVkU0ovOGhFc0p6d3FPa01FVlJNY29sbGVBREUxMzVsakZ3T2syK3gwYU1HdVpGRGpBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFKUXphQ2hiL0dBaVViNDdlUHp5L3RCc1RZUURSVStPd0NYWDFnb0I1WlcwNGZoNU9aSk5Lb1V4UkovQkppOHF0NVpUeUpLN1VDMmg1WUErWDdmbGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU5MjEyNTkyNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzU3Nzg0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQWdBQUVwYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBZ0FBRXBiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRWFtaGVFUktiZjUvM0xXMlVNS24xOFVCSjAyaHdiMXM5TWFGemx5RTdzQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTk2NTg4NTI4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDkzMzQ2MzMwMjdcIn0iCn0=
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
