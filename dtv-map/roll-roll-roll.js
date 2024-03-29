//TO USE THIS ROLLER
//1. Download the CSV of the Excel data (you only need the "DMA", "Station Call Letters", and "Network" columns)
//2. Batch edit the data so that it looks like an object with a name and channels
//EX:
//{
//   "name":"Albany-Schenectady-Troy, NY",
//   "channels":"CBS: WRGB"
// }
//3. Replace the 'news' array with this new array of objects
//4. Replace the 'pins' array with the most up-to-date pins array from the 'usa.js' file
//5. Replace the 'paths' array with the most up-to-date paths array from the 'usa.js' file
//6. Uncomment the textarea and script tags on the 'index.html' file
//7. Load the page
//8. Copy the json from each text area to a json pretty engine and then copy that to the appropriate pin/path array on the 'usa.js' file
//9. Recomment the textarea and script tags

let news = [
  {
    "name":"Albany-Schenectady-Troy, NY",
    "channels":"CBS: WRGB"
  },
  {
    "name":"Albany-Schenectady-Troy, NY",
    "channels":"NBC: WNYT"
  },
  {
    "name":"Albuquerque-Santa Fe, NM",
    "channels":"ABC: KOAT"
  },
  {
    "name":"Albuquerque-Santa Fe, NM",
    "channels":"FOX: KRQE-DT"
  },
  {
    "name":"Albuquerque-Santa Fe, NM",
    "channels":"NBC: KOB"
  },
  {
    "name":"Anchorage, AK",
    "channels":"FOX: KTBY"
  },
  {
    "name":"Atlanta, GA",
    "channels":"ABC: WSB"
  },
  {
    "name":"Atlanta, GA",
    "channels":"CBS: WGCL"
  },
  {
    "name":"Atlanta, GA",
    "channels":"CW: WUPA"
  },
  {
    "name":"Atlanta, GA",
    "channels":"FOX: WAGA-TV"
  },
  {
    "name":"Atlanta, GA",
    "channels":"NBC: WXIA"
  },
  {
    "name":"Atlanta, GA",
    "channels":"Univision: WUVG"
  },
  {
    "name":"Austin, TX",
    "channels":"ABC: KVUE"
  },
  {
    "name":"Austin, TX",
    "channels":"CBS: KEYE"
  },
  {
    "name":"Austin, TX",
    "channels":"FOX: KTBC"
  },
  {
    "name":"Austin, TX",
    "channels":"Univision: KAKW"
  },
  {
    "name":"Baltimore, MD",
    "channels":"ABC: WMAR"
  },
  {
    "name":"Baltimore, MD",
    "channels":"CBS: WJZ"
  },
  {
    "name":"Baltimore, MD",
    "channels":"FOX: WBFF"
  },
  {
    "name":"Baltimore, MD",
    "channels":"NBC: WBAL"
  },
  {
    "name":"Bangor, ME",
    "channels":"FOX: WFVX-LP"
  },
  {
    "name":"Baton Rouge, LA",
    "channels":"CBS: WAFB"
  },
  {
    "name":"Baton Rouge, LA",
    "channels":"FOX: WGMB"
  },
  {
    "name":"Bend, OR",
    "channels":"FOX: KFXO-LP"
  },
  {
    "name":"Biloxi-Gulfport, MS",
    "channels":"FOX: WXXV"
  },
  {
    "name":"Birmingham, AL",
    "channels":"ABC: WABM-DT"
  },
  {
    "name":"Birmingham, AL",
    "channels":"FOX: WBRC"
  },
  {
    "name":"Birmingham, AL",
    "channels":"NBC: WVTM"
  },
  {
    "name":"Boston, MA",
    "channels":"ABC: WCVB"
  },
  {
    "name":"Boston, MA",
    "channels":"ABC: WMUR"
  },
  {
    "name":"Boston, MA",
    "channels":"CBS: WBZ"
  },
  {
    "name":"Boston, MA",
    "channels":"FOX: WFXT"
  },
  {
    "name":"Boston, MA",
    "channels":"My38: WSBK"
  },
  {
    "name":"Boston, MA",
    "channels":"NBC: WBTS"
  },
  {
    "name":"Boston, MA",
    "channels":"Telemundo: WNEU"
  },
  {
    "name":"Buffalo, NY",
    "channels":"ABC: WKBW"
  },
  {
    "name":"Buffalo, NY",
    "channels":"FOX: WUTV"
  },
  {
    "name":"Buffalo, NY",
    "channels":"NBC: WGRZ"
  },
  {
    "name":"Burlington, VT",
    "channels":"CBS: WCAX"
  },
  {
    "name":"Burlington, VT",
    "channels":"FOX: WFFF"
  },
  {
    "name":"Burlington, VT",
    "channels":"NBC: WPTZ"
  },
  {
    "name":"Butte-Bozeman, MT",
    "channels":"FOX: KWYB-DT"
  },
  {
    "name":"Cedar Rapids, IA",
    "channels":"FOX: KFXA"
  },
  {
    "name":"Champaign, IL",
    "channels":"FOX: WRSP"
  },
  {
    "name":"Charleston, SC",
    "channels":"CBS: WCSC"
  },
  {
    "name":"Charleston, SC",
    "channels":"FOX: WTAT"
  },
  {
    "name":"Charleston-Huntington, WV",
    "channels":"ABC: WCHS"
  },
  {
    "name":"Charleston-Huntington, WV",
    "channels":"FOX: WVAH"
  },
  {
    "name":"Charleston-Huntington, WV",
    "channels":"NBC: WSAZ"
  },
  {
    "name":"Charlotte, NC",
    "channels":"ABC: WSOC"
  },
  {
    "name":"Charlotte, NC",
    "channels":"CBS: WBTV"
  },
  {
    "name":"Charlotte, NC",
    "channels":"FOX: WJZY"
  },
  {
    "name":"Charlotte, NC",
    "channels":"MyTV12: WMYT-TV"
  },
  {
    "name":"Charlotte, NC",
    "channels":"NBC: WCNC"
  },
  {
    "name":"Chattanooga, TN",
    "channels":"CBS: WDEF"
  },
  {
    "name":"Chattanooga, TN",
    "channels":"NBC: WRCB"
  },
  {
    "name":"Chicago, IL",
    "channels":"ABC: WLS-TV"
  },
  {
    "name":"Chicago, IL",
    "channels":"CBS: WBBM"
  },
  {
    "name":"Chicago, IL",
    "channels":"FOX: WFLD"
  },
  {
    "name":"Chicago, IL",
    "channels":"My50: WPWR-TV"
  },
  {
    "name":"Chicago, IL",
    "channels":"NBC: WMAQ"
  },
  {
    "name":"Chicago, IL",
    "channels":"Telemundo: WSNS"
  },
  {
    "name":"Chicago, IL",
    "channels":"Univision: WGBO"
  },
  {
    "name":"Cincinnati, OH",
    "channels":"ABC: WCPO"
  },
  {
    "name":"Cincinnati, OH",
    "channels":"CBS: WKRC"
  },
  {
    "name":"Cincinnati, OH",
    "channels":"FOX: WXIX"
  },
  {
    "name":"Cincinnati, OH",
    "channels":"NBC: WLWT"
  },
  {
    "name":"Cleveland, OH",
    "channels":"ABC: WEWS"
  },
  {
    "name":"Cleveland, OH",
    "channels":"CBS: WOIO"
  },
  {
    "name":"Cleveland, OH",
    "channels":"FOX: WJW"
  },
  {
    "name":"Cleveland, OH",
    "channels":"NBC: WKYC"
  },
  {
    "name":"Colorado Springs-Pueblo, CO",
    "channels":"CBS: KKTV"
  },
  {
    "name":"Colorado Springs-Pueblo, CO",
    "channels":"FOX: KXRM"
  },
  {
    "name":"Colorado Springs-Pueblo, CO",
    "channels":"NBC: KOAA"
  },
  {
    "name":"Columbia-Jefferson City, MO",
    "channels":"FOX: KQFX-LP"
  },
  {
    "name":"Columbia, SC",
    "channels":"CBS: WLTX"
  },
  {
    "name":"Columbia, SC",
    "channels":"NBC: WIS"
  },
  {
    "name":"Columbus, OH",
    "channels":"ABC: WSYX"
  },
  {
    "name":"Columbus, OH",
    "channels":"CBS: WBNS"
  },
  {
    "name":"Columbus, OH",
    "channels":"FOX: WTTE"
  },
  {
    "name":"Columbus-Tupelo, MS",
    "channels":"FOX: WLOV"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"ABC: WFAA"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"CBS: KTVT"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"FOX: KDFW-TV"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"KTXA: KTXA"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"My27: KDFI"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"NBC: KXAS"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"Telemundo: KXTX"
  },
  {
    "name":"Dallas-Ft. Worth, TX",
    "channels":"Univision: KUVN"
  },
  {
    "name":"Dayton, OH",
    "channels":"ABC: WKEF"
  },
  {
    "name":"Dayton, OH",
    "channels":"CBS: WHIO"
  },
  {
    "name":"Dayton, OH",
    "channels":"FOX: WRGT"
  },
  {
    "name":"Denver, CO",
    "channels":"ABC: KMGH"
  },
  {
    "name":"Denver, CO",
    "channels":"CBS: KCNC"
  },
  {
    "name":"Denver, CO",
    "channels":"FOX: KDVR"
  },
  {
    "name":"Denver, CO",
    "channels":"NBC: KUSA"
  },
  {
    "name":"Denver, CO",
    "channels":"Telemundo: KDEN"
  },
  {
    "name":"Des Moines-Ames, IA",
    "channels":"CBS: KCCI"
  },
  {
    "name":"Des Moines-Ames, IA",
    "channels":"FOX: KDSM"
  },
  {
    "name":"Detroit, MI",
    "channels":"ABC: WXYZ"
  },
  {
    "name":"Detroit, MI",
    "channels":"CBS: WWJ"
  },
  {
    "name":"Detroit, MI",
    "channels":"CW: WKBD"
  },
  {
    "name":"Detroit, MI",
    "channels":"FOX: WJBK"
  },
  {
    "name":"Detroit, MI",
    "channels":"NBC: WDIV"
  },
  {
    "name":"El Paso, TX",
    "channels":"CBS: KDBC"
  },
  {
    "name":"El Paso, TX",
    "channels":"FOX: KFOX"
  },
  {
    "name":"El Paso, TX",
    "channels":"Telemundo: KTDO"
  },
  {
    "name":"Eugene, OR",
    "channels":"FOX: KLSR"
  },
  {
    "name":"Evansville, IN",
    "channels":"FOX: WEVV-DT"
  },
  {
    "name":"Flint-Saginaw-Bay City, MI",
    "channels":"CBS: WNEM"
  },
  {
    "name":"Flint-Saginaw-Bay City, MI",
    "channels":"FOX: WSMH"
  },
  {
    "name":"Fort Myers-Naples, FL",
    "channels":"ABC: WZVN"
  },
  {
    "name":"Fort Myers-Naples, FL",
    "channels":"CBS: WINK"
  },
  {
    "name":"Fort Myers-Naples, FL",
    "channels":"FOX: WFTX"
  },
  {
    "name":"Fort Myers-Naples, FL",
    "channels":"NBC: WBBH"
  },
  {
    "name":"Fort Smith, AR",
    "channels":"FOX: KFTA"
  },
  {
    "name":"Fresno-Visalia, CA",
    "channels":"ABC: KFSN-TV"
  },
  {
    "name":"Fresno-Visalia, CA",
    "channels":"FOX: KMPH"
  },
  {
    "name":"Fresno-Visalia, CA",
    "channels":"Telemundo: KNSO"
  },
  {
    "name":"Fresno-Visalia, CA",
    "channels":"Univision: KFTV"
  },
  {
    "name":"Gainesville, FL",
    "channels":"FOX: WOGX"
  },
  {
    "name":"Grand Rapids-Kalamazoo, MI",
    "channels":"ABC: WZZM"
  },
  {
    "name":"Grand Rapids-Kalamazoo, MI",
    "channels":"CBS: WWMT"
  },
  {
    "name":"Grand Rapids-Kalamazoo, MI",
    "channels":"FOX: WXMI"
  },
  {
    "name":"Great Falls, MT",
    "channels":"FOX: KFBB-DT"
  },
  {
    "name":"Green Bay, WI",
    "channels":"ABC: WBAY"
  },
  {
    "name":"Green Bay, WI",
    "channels":"FOX: WLUK"
  },
  {
    "name":"Green Bay, WI",
    "channels":"NBC: WGBA"
  },
  {
    "name":"Greensboro-Winston-Salem, NC",
    "channels":"ABC: WXLV"
  },
  {
    "name":"Greensboro-Winston-Salem, NC",
    "channels":"CBS: WFMY"
  },
  {
    "name":"Greensboro-Winston-Salem, NC",
    "channels":"FOX: WGHP"
  },
  {
    "name":"Greensboro-Winston-Salem, NC",
    "channels":"NBC: WXII"
  },
  {
    "name":"Greenville-New Bern, NC",
    "channels":"FOX: WYDO"
  },
  {
    "name":"Greenville-Spartanburg, SC-Asheville, NC",
    "channels":"ABC: WLOS"
  },
  {
    "name":"Greenville-Spartanburg, SC-Asheville, NC",
    "channels":"NBC: WYFF"
  },
  {
    "name":"Greenville-New Bern, NC",
    "channels":"NBC: WITN"
  },
  {
    "name":"Harlingen-Brownsville, TX",
    "channels":"CBS: KGBT"
  },
  {
    "name":"Harlingen-Brownsville, TX",
    "channels":"Telemundo: KTLM"
  },
  {
    "name":"Harrisburg-Lancaster, PA",
    "channels":"CBS: WHP"
  },
  {
    "name":"Harrisburg-Lancaster, PA",
    "channels":"FOX: WPMT"
  },
  {
    "name":"Harrisburg-Lancaster, PA",
    "channels":"NBC: WGAL"
  },
  {
    "name":"Hartford-New Haven, CT",
    "channels":"CBS: WFSB"
  },
  {
    "name":"Hartford-New Haven, CT",
    "channels":"FOX: WTIC"
  },
  {
    "name":"Hartford-New Haven, CT",
    "channels":"NBC: WVIT"
  },
  {
    "name":"Honolulu, HI",
    "channels":"ABC: KITV"
  },
  {
    "name":"Honolulu, HI",
    "channels":"CBS: KGMB"
  },
  {
    "name":"Honolulu, HI",
    "channels":"FOX: KHON"
  },
  {
    "name":"Honolulu, HI",
    "channels":"NBC: KHNL"
  },
  {
    "name":"Houston, TX",
    "channels":"ABC: KTRK-TV"
  },
  {
    "name":"Houston, TX",
    "channels":"CBS: KHOU"
  },
  {
    "name":"Houston, TX",
    "channels":"FOX: KRIV"
  },
  {
    "name":"Houston, TX",
    "channels":"my20: KTXH"
  },
  {
    "name":"Houston, TX",
    "channels":"NBC: KPRC"
  },
  {
    "name":"Houston, TX",
    "channels":"Telemundo: KTMD"
  },
  {
    "name":"Houston, TX",
    "channels":"Univision: KXLN"
  },
  {
    "name":"Huntsville-Decatur, AL",
    "channels":"FOX: WZDX"
  },
  {
    "name":"Huntsville-Decatur, AL",
    "channels":"NBC: WAFF"
  },
  {
    "name":"Indianapolis, IN",
    "channels":"ABC: WRTV"
  },
  {
    "name":"Indianapolis, IN",
    "channels":"FOX: WXIN"
  },
  {
    "name":"Indianapolis, IN",
    "channels":"NBC: WTHR"
  },
  {
    "name":"Jackson, MS",
    "channels":"NBC: WLBT"
  },
  {
    "name":"Jacksonville, FL-Brunswick, GA",
    "channels":"ABC: WJXX"
  },
  {
    "name":"Jacksonville, FL-Brunswick, GA",
    "channels":"CBS: WJAX"
  },
  {
    "name":"Jacksonville, FL-Brunswick, GA",
    "channels":"FOX: WFOX"
  },
  {
    "name":"Jacksonville, FL-Brunswick, GA",
    "channels":"NBC: WTLV"
  },
  {
    "name":"Joplin-Pittsburg, KS",
    "channels":"FOX: KFJX"
  },
  {
    "name":"Juneau, AK",
    "channels":"FOX: KJUD-DT"
  },
  {
    "name":"Kansas City, MO",
    "channels":"ABC: KMBC"
  },
  {
    "name":"Kansas City, MO",
    "channels":"CBS: KCTV"
  },
  {
    "name":"Kansas City, MO",
    "channels":"FOX: WDAF"
  },
  {
    "name":"Kansas City, MO",
    "channels":"NBC: KSHB"
  },
  {
    "name":"Knoxville, TN",
    "channels":"CBS: WVLT"
  },
  {
    "name":"Knoxville, TN",
    "channels":"FOX: WTNZ"
  },
  {
    "name":"Knoxville, TN",
    "channels":"NBC: WBIR"
  },
  {
    "name":"Lafayette, LA",
    "channels":"FOX: KADN"
  },
  {
    "name":"Las Vegas, NV",
    "channels":"ABC: KTNV"
  },
  {
    "name":"Las Vegas, NV",
    "channels":"NBC: KSNV"
  },
  {
    "name":"Las Vegas, NV",
    "channels":"Telemundo: KBLR"
  },
  {
    "name":"Lexington, KY",
    "channels":"ABC: WTVQ"
  },
  {
    "name":"Lexington, KY",
    "channels":"CBS: WKYT"
  },
  {
    "name":"Lexington, KY",
    "channels":"FOX: WDKY"
  },
  {
    "name":"Lexington, KY",
    "channels":"NBC: WLEX"
  },
  {
    "name":"Lima, OH",
    "channels":"FOX: WLIO-DT"
  },
  {
    "name":"Little Rock-Pine Bluff, AR",
    "channels":"ABC: KATV"
  },
  {
    "name":"Little Rock-Pine Bluff, AR",
    "channels":"CBS: KTHV"
  },
  {
    "name":"Little Rock-Pine Bluff, AR",
    "channels":"FOX: KLRT"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"ABC: KABC-TV"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"CBS: KCBS"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"FOX: KTTV"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"KCAL: KCAL"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"KCOP My13: KCOP-TV"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"NBC: KNBC"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"Telemundo: KVEA"
  },
  {
    "name":"Los Angeles, CA",
    "channels":"Univision: KMEX"
  },
  {
    "name":"Louisville, KY",
    "channels":"ABC: WHAS"
  },
  {
    "name":"Louisville, KY",
    "channels":"CBS: WLKY"
  },
  {
    "name":"Louisville, KY",
    "channels":"FOX: WDRB"
  },
  {
    "name":"Louisville, KY",
    "channels":"NBC: WAVE"
  },
  {
    "name":"Madison, WI",
    "channels":"CBS: WISC"
  },
  {
    "name":"Memphis, TN",
    "channels":"FOX: WHBQ"
  },
  {
    "name":"Memphis, TN",
    "channels":"NBC: WMC"
  },
  {
    "name":"Miami-Ft. Lauderdale, FL",
    "channels":"ABC: WPLG"
  },
  {
    "name":"Miami-Ft. Lauderdale, FL",
    "channels":"CBS: WFOR"
  },
  {
    "name":"Miami-Ft. Lauderdale, FL",
    "channels":"FOX: WSVN"
  },
  {
    "name":"Miami-Ft. Lauderdale, FL",
    "channels":"My33: WBFS"
  },
  {
    "name":"Miami-Ft. Lauderdale, FL",
    "channels":"NBC: WTVJ"
  },
  {
    "name":"Miami-Ft. Lauderdale, FL",
    "channels":"Telemundo: WSCV"
  },
  {
    "name":"Miami-Ft. Lauderdale, FL",
    "channels":"Univision: WLTV"
  },
  {
    "name":"Milwaukee, WI",
    "channels":"ABC: WISN"
  },
  {
    "name":"Milwaukee, WI",
    "channels":"FOX: WITI"
  },
  {
    "name":"Milwaukee, WI",
    "channels":"NBC: WTMJ"
  },
  {
    "name":"Minneapolis-St. Paul, MN",
    "channels":"ABC: KSTP"
  },
  {
    "name":"Minneapolis-St. Paul, MN",
    "channels":"CBS: WCCO"
  },
  {
    "name":"Minneapolis-St. Paul, MN",
    "channels":"FOX: KMSP-TV"
  },
  {
    "name":"Minneapolis-St. Paul, MN",
    "channels":"My29: WFTC"
  },
  {
    "name":"Minneapolis-St. Paul, MN",
    "channels":"NBC: KARE"
  },
  {
    "name":"Missoula, MT",
    "channels":"FOX: KTMF-DT"
  },
  {
    "name":"Mobile, AL-Pensacola, FL",
    "channels":"ABC: WEAR"
  },
  {
    "name":"Mobile, AL-Pensacola, FL",
    "channels":"NBC: WPMI"
  },
  {
    "name":"Myrtle Beach-Florence, SC",
    "channels":"FOX: WFXB"
  },
  {
    "name":"Nashville, TN",
    "channels":"CBS: WTVF"
  },
  {
    "name":"Nashville, TN",
    "channels":"FOX: WZTV"
  },
  {
    "name":"Nashville, TN",
    "channels":"NBC: WSMV"
  },
  {
    "name":"New Orleans, LA",
    "channels":"CBS: WWL"
  },
  {
    "name":"New Orleans, LA",
    "channels":"FOX: WVUE"
  },
  {
    "name":"New Orleans, LA",
    "channels":"NBC: WDSU"
  },
  {
    "name":"New York, NY",
    "channels":"ABC: WABC-TV"
  },
  {
    "name":"New York, NY",
    "channels":"CBS: WCBS"
  },
  {
    "name":"New York, NY",
    "channels":"FOX: WNYW"
  },
  {
    "name":"New York, NY",
    "channels":"My9: WWOR-TV"
  },
  {
    "name":"New York, NY",
    "channels":"NBC: WNBC"
  },
  {
    "name":"New York, NY",
    "channels":"Telemundo: WNJU"
  },
  {
    "name":"New York, NY",
    "channels":"Univision: WXTV"
  },
  {
    "name":"New York, NY",
    "channels":"WLNY: WLNY"
  },
  {
    "name":"Norfolk-Newport News, VA",
    "channels":"ABC: WVEC"
  },
  {
    "name":"Norfolk-Newport News, VA",
    "channels":"FOX: WVBT"
  },
  {
    "name":"Oklahoma City, OK",
    "channels":"ABC: KOCO"
  },
  {
    "name":"Oklahoma City, OK",
    "channels":"CBS: KWTV"
  },
  {
    "name":"Oklahoma City, OK",
    "channels":"FOX: KOKH"
  },
  {
    "name":"Omaha, NE",
    "channels":"CBS: KMTV"
  },
  {
    "name":"Orlando-Daytona, FL",
    "channels":"ABC: WFTV"
  },
  {
    "name":"Orlando-Daytona, FL",
    "channels":"FOX: WOFL"
  },
  {
    "name":"Orlando-Daytona, FL",
    "channels":"my65-WRBW: WRBW"
  },
  {
    "name":"Orlando-Daytona, FL",
    "channels":"NBC: WESH"
  },
  {
    "name":"Paducah, KY-Cape Girardeau, MO",
    "channels":"CBS: KFVS"
  },
  {
    "name":"Paducah, KY-Cape Girardeau, MO",
    "channels":"FOX: KBSI"
  },
  {
    "name":"Paducah, KY-Cape Girardeau, MO",
    "channels":"NBC: WPSD"
  },
  {
    "name":"Palm Springs, CA",
    "channels":"FOX: KDFX-CA"
  },
  {
    "name":"Philadelphia, PA",
    "channels":"ABC: WPVI-TV"
  },
  {
    "name":"Philadelphia, PA",
    "channels":"CBS: KYW"
  },
  {
    "name":"Philadelphia, PA",
    "channels":"CW: WPSG"
  },
  {
    "name":"Philadelphia, PA",
    "channels":"FOX: WTXF-TV"
  },
  {
    "name":"Philadelphia, PA",
    "channels":"NBC: WCAU"
  },
  {
    "name":"Philadelphia, PA",
    "channels":"Telemundo: WWSI"
  },
  {
    "name":"Philadelphia, PA",
    "channels":"Univision: WUVP"
  },
  {
    "name":"Phoenix, AZ",
    "channels":"ABC: KNXV"
  },
  {
    "name":"Phoenix, AZ",
    "channels":"CBS: KPHO"
  },
  {
    "name":"Phoenix, AZ",
    "channels":"FOX: KSAZ-TV"
  },
  {
    "name":"Phoenix, AZ",
    "channels":"My45: KUTP"
  },
  {
    "name":"Phoenix, AZ",
    "channels":"NBC: KPNX"
  },
  {
    "name":"Phoenix, AZ",
    "channels":"Telemundo: KTAZ"
  },
  {
    "name":"Phoenix, AZ",
    "channels":"Univision: KTVW"
  },
  {
    "name":"Pittsburgh, PA",
    "channels":"ABC: WTAE"
  },
  {
    "name":"Pittsburgh, PA",
    "channels":"CBS: KDKA"
  },
  {
    "name":"Pittsburgh, PA",
    "channels":"CW: WPCW"
  },
  {
    "name":"Pittsburgh, PA",
    "channels":"FOX: WPGH"
  },
  {
    "name":"Pittsburgh, PA",
    "channels":"NBC: WPXI"
  },
  {
    "name":"Portland-Auburn, ME",
    "channels":"CBS: WGME"
  },
  {
    "name":"Portland-Auburn, ME",
    "channels":"FOX: WPFO"
  },
  {
    "name":"Portland-Auburn, ME",
    "channels":"NBC: WCSH"
  },
  {
    "name":"Portland, OR",
    "channels":"ABC: KATU"
  },
  {
    "name":"Portland, OR",
    "channels":"NBC: KGW"
  },
  {
    "name":"Providence, RI-New Bedford, MA",
    "channels":"ABC: WLNE"
  },
  {
    "name":"Providence, RI-New Bedford, MA",
    "channels":"NBC: WJAR"
  },
  {
    "name":"Raleigh-Durham, NC",
    "channels":"ABC: WTVD-TV"
  },
  {
    "name":"Raleigh-Durham, NC",
    "channels":"FOX: WRAZ"
  },
  {
    "name":"Raleigh-Durham, NC",
    "channels":"NBC: WRAL"
  },
  {
    "name":"Richmond-Petersburg, VA",
    "channels":"FOX: WRLH"
  },
  {
    "name":"Richmond-Petersburg, VA",
    "channels":"NBC: WWBT"
  },
  {
    "name":"Roanoke, VA",
    "channels":"ABC: WSET"
  },
  {
    "name":"Roanoke, VA",
    "channels":"CBS: WDBJ"
  },
  {
    "name":"Roanoke, VA",
    "channels":"FOX: WFXR"
  },
  {
    "name":"Roanoke, VA",
    "channels":"NBC: WSLS"
  },
  {
    "name":"Rochester, NY",
    "channels":"FOX: WUHF"
  },
  {
    "name":"Sacramento-Stockton-Modesto, CA",
    "channels":"ABC: KXTV"
  },
  {
    "name":"Sacramento-Stockton-Modesto, CA",
    "channels":"CBS: KOVR"
  },
  {
    "name":"Sacramento-Stockton-Modesto, CA",
    "channels":"CW: KMAX"
  },
  {
    "name":"Sacramento-Stockton-Modesto, CA",
    "channels":"FOX: KTXL"
  },
  {
    "name":"Sacramento-Stockton-Modesto, CA",
    "channels":"NBC: KCRA"
  },
  {
    "name":"Sacramento-Stockton-Modesto, CA",
    "channels":"Univision: KUVS"
  },
  {
    "name":"Salt Lake City, UT",
    "channels":"CBS: KUTV"
  },
  {
    "name":"Salt Lake City, UT",
    "channels":"FOX: KSTU"
  },
  {
    "name":"Salt Lake City, UT",
    "channels":"NBC: KSL"
  },
  {
    "name":"San Antonio, TX",
    "channels":"ABC: KSAT"
  },
  {
    "name":"San Antonio, TX",
    "channels":"CBS: KENS"
  },
  {
    "name":"San Antonio, TX",
    "channels":"FOX: KABB"
  },
  {
    "name":"San Antonio, TX",
    "channels":"NBC: WOAI"
  },
  {
    "name":"San Antonio, TX",
    "channels":"Telemundo: KVDA"
  },
  {
    "name":"San Antonio, TX",
    "channels":"Univision: KWEX"
  },
  {
    "name":"San Diego, CA",
    "channels":"ABC: KGTV"
  },
  {
    "name":"San Diego, CA",
    "channels":"FOX: KSWB"
  },
  {
    "name":"San Diego, CA",
    "channels":"NBC: KNSD"
  },
  {
    "name":"San Diego, CA",
    "channels":"Telemundo: KUAN"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"ABC: KGO-TV"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"CBS: KPIX"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"CW: KBCW"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"FOX: KTVU"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"KTVU Plus: KICU-TV"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"NBC: KNTV"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"Telemundo: KSTS"
  },
  {
    "name":"San Francisco-Oakland-San Jose, CA",
    "channels":"Univision: KDTV"
  },
  {
    "name":"Santa Barbara-San Luis Obispo, CA",
    "channels":"FOX: KKFX-CA"
  },
  {
    "name":"Savannah, GA",
    "channels":"CBS: WTOC"
  },
  {
    "name":"Seattle-Tacoma, WA",
    "channels":"ABC: KOMO"
  },
  {
    "name":"Seattle-Tacoma, WA",
    "channels":"CBS: KIRO"
  },
  {
    "name":"Seattle-Tacoma, WA",
    "channels":"CW: KSTW"
  },
  {
    "name":"Seattle-Tacoma, WA",
    "channels":"FOX: KCPQ"
  },
  {
    "name":"Seattle-Tacoma, WA",
    "channels":"NBC: KING"
  },
  {
    "name":"Shreveport, LA",
    "channels":"CBS: KSLA"
  },
  {
    "name":"Spokane, WA",
    "channels":"CBS: KREM"
  },
  {
    "name":"Spokane, WA",
    "channels":"NBC: KHQ"
  },
  {
    "name":"Springfield, MO",
    "channels":"ABC: KSPR"
  },
  {
    "name":"Springfield, MO",
    "channels":"FOX: KRBK"
  },
  {
    "name":"St. Joseph, MO",
    "channels":"FOX: KNPN-LD"
  },
  {
    "name":"St. Louis, MO",
    "channels":"ABC: KDNL"
  },
  {
    "name":"St. Louis, MO",
    "channels":"CBS: KMOV"
  },
  {
    "name":"St. Louis, MO",
    "channels":"FOX: KTVI"
  },
  {
    "name":"St. Louis, MO",
    "channels":"NBC: KSDK"
  },
  {
    "name":"Syracuse, NY",
    "channels":"NBC: WSTM"
  },
  {
    "name":"Tampa-St. Petersburg, FL",
    "channels":"ABC: WFTS"
  },
  {
    "name":"Tampa-St. Petersburg, FL",
    "channels":"ABC: WWSB"
  },
  {
    "name":"Tampa-St. Petersburg, FL",
    "channels":"CBS: WTSP"
  },
  {
    "name":"Tampa-St. Petersburg, FL",
    "channels":"CW: WTOG"
  },
  {
    "name":"Tampa-St. Petersburg, FL",
    "channels":"FOX: WTVT"
  },
  {
    "name":"Toledo, OH",
    "channels":"CBS: WTOL"
  },
  {
    "name":"Toledo, OH",
    "channels":"NBC: WNWO"
  },
  {
    "name":"Tri-Cities, TN-VA",
    "channels":"FOX: WEMT"
  },
  {
    "name":"Tri-Cities, TN-VA",
    "channels":"NBC: WCYB"
  },
  {
    "name":"Tucson, AZ",
    "channels":"CBS: KOLD"
  },
  {
    "name":"Tucson, AZ",
    "channels":"FOX: KMSB"
  },
  {
    "name":"Tucson, AZ",
    "channels":"NBC: KVOA"
  },
  {
    "name":"Tucson, AZ",
    "channels":"Telemundo: KHRR"
  },
  {
    "name":"Tucson, AZ",
    "channels":"Univision: KTDO"
  },
  {
    "name":"Tulsa, OK",
    "channels":"ABC: KTUL"
  },
  {
    "name":"Tulsa, OK",
    "channels":"CBS: KOTV"
  },
  {
    "name":"Tulsa, OK",
    "channels":"FOX: KOKI"
  },
  {
    "name":"Tulsa, OK",
    "channels":"NBC: KJRH"
  },
  {
    "name":"Waco-Temple-Bryan, TX",
    "channels":"CBS: KBTX"
  },
  {
    "name":"Waco-Temple-Bryan, TX",
    "channels":"CBS: KWTX"
  },
  {
    "name":"Waco-Temple-Bryan, TX",
    "channels":"FOX: KWKT"
  },
  {
    "name":"Waco-Temple-Bryan, TX",
    "channels":"NBC: KAGS-LP"
  },
  {
    "name":"Waco-Temple-Bryan, TX",
    "channels":"NBC: KCEN"
  },
  {
    "name":"Washington DC-Hagerstown, MD",
    "channels":"ABC: WJLA"
  },
  {
    "name":"Washington DC-Hagerstown, MD",
    "channels":"CBS: WUSA"
  },
  {
    "name":"Washington DC-Hagerstown, MD",
    "channels":"FOX: WTTG"
  },
  {
    "name":"Washington DC-Hagerstown, MD",
    "channels":"my20dc: WDCA"
  },
  {
    "name":"Washington DC-Hagerstown, MD",
    "channels":"NBC: WRC"
  },
  {
    "name":"West Palm Beach-Ft. Pierce, FL",
    "channels":"ABC: WPBF"
  },
  {
    "name":"West Palm Beach-Ft. Pierce, FL",
    "channels":"CBS: WPEC"
  },
  {
    "name":"West Palm Beach-Ft. Pierce, FL",
    "channels":"FOX: WFLX"
  },
  {
    "name":"West Palm Beach-Ft. Pierce, FL",
    "channels":"NBC: WPTV"
  },
  {
    "name":"Wichita-Hutchinson, KS",
    "channels":"ABC: KAKE"
  },
  {
    "name":"Wichita-Hutchinson, KS",
    "channels":"CBS: KWCH"
  },
  {
    "name":"Wichita-Hutchinson, KS",
    "channels":"FOX: KSAS"
  },
  {
    "name":"Wilkes Barre-Scranton, PA",
    "channels":"FOX: WOLF"
  },
  {
    "name":"Yuma, AZ-El Centro, CA",
    "channels":"FOX: KECY"
  },
  {
    "name": "Tampa-St. Petersburg, FL",
    "channels": "NBC: WFLA"
  },
  {
    "name": "Raleigh-Durham, NC",
    "channels": "CBS: WNCN"
  },
  {
    "name": "Portland, OR",
    "channels": "CBS: KOIN"
  },
  {
    "name": "San Diego, CA",
    "channels": "CBS: KFMB"
  },
  {
    "name": "Nashville, TN",
    "channels": "ABC: WKRN"
  },
  {
    "name": "Hartford-New Haven, CT",
    "channels": "ABC: WTNH"
  },
  {
    "name": "Columbus, OH",
    "channels": "NBC: WCMH"
  },
  {
    "name": "Salt Lake City, UT",
    "channels": "ABC: KTVX"
  },
  {
    "name": "Greenville-Spartanburg, SC-Asheville, NC",
    "channels": "CBS: WSPA"
  },
  {
    "name": "Austin, TX",
    "channels": "NBC: KXAN"
  },
  {
    "name": "Las Vegas, NV",
    "channels": "CBS: KLAS"
  },
  {
    "name": "Norfolk-Newport News, VA",
    "channels": "NBC: WAVY"
  },
  {
    "name": "Harrisburg-Lancaster, PA",
    "channels": "ABC: WHTM"
  },
  {
    "name": "Grand Rapids-Kalamazoo, MI",
    "channels": "ABC: WOTV"
  },
  {
    "name": "Grand Rapids-Kalamazoo, MI",
    "channels": "NBC: WOOD"
  },
  {
    "name": "Birmingham, AL",
    "channels": "CBS: WIAT"
  },
  {
    "name": "Albuquerque-Santa Fe, NM",
    "channels": "CBS: KRQE"
  },
  {
    "name": "Memphis, TN",
    "channels": "ABC: WATN"
  },
  {
    "name": "Providence, RI-New Bedford, MA",
    "channels": "CBS: WPRI"
  },
  {
    "name": "Buffalo, NY",
    "channels": "CBS: WIVB"
  },
  {
    "name": "Fresno-Visalia, CA",
    "channels": "NBC: KSEE"
  },
  {
    "name": "Fresno-Visalia, CA",
    "channels": "CBS: KGPE"
  },
  {
    "name": "Richmond-Petersburg, VA",
    "channels": "ABC: WRIC"
  },
  {
    "name": "Wilkes Barre-Scranton, PA",
    "channels": "NBC: WBRE"
  },
  {
    "name": "Little Rock-Pine Bluff, AR",
    "channels": "NBC: KARK"
  },
  {
    "name": "Albany-Schenectady-Troy, NY",
    "channels": "ABC: WTEN"
  },
  {
    "name": "Mobile, AL-Pensacola, FL",
    "channels": "CBS: WKRG"
  },
  {
    "name": "Knoxville, TN",
    "channels": "ABC: WATE"
  },
  {
    "name": "Dayton, OH",
    "channels": "NBC: WDTN"
  },
  {
    "name": "Green Bay, WI",
    "channels": "CBS: WFRV"
  },
  {
    "name": "Des Moines-Ames, IA",
    "channels": "ABC: WOI"
  },
  {
    "name": "Charleston-Huntington, WV",
    "channels": "CBS: WOWK"
  },
  {
    "name": "Omaha, NE",
    "channels": "FOX: KPTM"
  },
  {
    "name": "Madison, WI",
    "channels": "FOX: WMSN"
  }
];

let pins = [
  {
    "enable": true,
    "name": "Albany-Schenectady-Troy, NY",
    "state": "NY",
    "xPos": 833,
    "yPos": 163,
    "color": "#FFFFFF",
    "textPosX": 0,
    "textPosY": 0,
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 130,
    "textPosY": 440,
    "text": "<h1 class='underlined'>Albany-Schenectady-Troy, NY<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WRGB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WNYT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Albuquerque-Santa Fe, NM",
    "state": "NM",
    "xPos": 296,
    "yPos": 358,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 30,
    "textPosY": 70,
    "text": "<h1 class='underlined'>Albuquerque-Santa Fe, NM<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KOAT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KRQE-DT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KOB<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Anchorage, AK",
    "state": "AK",
    "xPos": 118,
    "yPos": 528,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Anchorage, AK<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KTBY<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Atlanta, GA",
    "state": "GA",
    "xPos": 695,
    "yPos": 377,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 50,
    "textPosY": 350,
    "text": "<h1 class='underlined'>Atlanta, GA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSB<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WGCL<\/li><li>CW: WUPA<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WAGA-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WXIA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WUVG<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Austin, TX",
    "state": "TX",
    "xPos": 451,
    "yPos": 473,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 120,
    "textPosY": 170,
    "text": "<h1 class='underlined'>Austin, TX<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KVUE<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KEYE<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTBC<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KAKW<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Baltimore, MD",
    "state": "MD",
    "xPos": 813,
    "yPos": 236,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 180,
    "textPosY": 430,
    "text": "<h1 class='underlined'>Baltimore, MD<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WMAR<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WJZ<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WBFF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBAL<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Bangor, ME",
    "state": "ME",
    "xPos": 898,
    "yPos": 91,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 80,
    "textPosY": 460,
    "text": "<h1 class='underlined'>Bangor, ME<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WFVX-LP<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Baton Rouge, LA",
    "state": "LA",
    "xPos": 584,
    "yPos": 460,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 110,
    "textPosY": 260,
    "text": "<h1 class='underlined'>Baton Rouge, LA<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WAFB<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WGMB<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Bend, OR",
    "state": "OR",
    "xPos": 85,
    "yPos": 120,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 110,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Bend, OR<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFXO-LP<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Biloxi-Gulfport, MS",
    "state": "MS",
    "xPos": 620,
    "yPos": 456,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 110,
    "textPosY": 280,
    "text": "<h1 class='underlined'>Biloxi-Gulfport, MS<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WXXV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Birmingham, AL",
    "state": "AL",
    "xPos": 653,
    "yPos": 389,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 60,
    "textPosY": 310,
    "text": "<h1 class='underlined'>Birmingham, AL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WABM-DT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WBRC<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WVTM<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Boston, MA",
    "state": "MA",
    "xPos": 879,
    "yPos": 153,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 60,
    "textPosY": 450,
    "text": "<h1 class='underlined'>Boston, MA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WCVB<\/li><li><img class='abcLogo' src='./images/ABC.png' /> WMUR<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBZ<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFXT<\/li><li>My38: WSBK<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBTS<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WNEU<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Buffalo, NY",
    "state": "NY",
    "xPos": 757,
    "yPos": 169,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 140,
    "textPosY": 380,
    "text": "<h1 class='underlined'>Buffalo, NY<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WKBW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WUTV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WGRZ<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Burlington, VT",
    "state": "VT",
    "xPos": 837,
    "yPos": 113,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 90,
    "textPosY": 450,
    "text": "<h1 class='underlined'>Burlington, VT<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WCAX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFFF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPTZ<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Butte-Bozeman, MT",
    "state": "MT",
    "xPos": 256,
    "yPos": 108,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 100,
    "textPosY": 50,
    "text": "<h1 class='underlined'>Butte-Bozeman, MT<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KWYB-DT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Cedar Rapids, IA",
    "state": "IA",
    "xPos": 548,
    "yPos": 204,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 240,
    "text": "<h1 class='underlined'>Cedar Rapids, IA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFXA<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Champaign, IL",
    "state": "IL",
    "xPos": 609,
    "yPos": 247,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 190,
    "textPosY": 250,
    "text": "<h1 class='underlined'>Champaign, IL<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WRSP<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Charleston, SC",
    "state": "SC",
    "xPos": 776,
    "yPos": 388,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 350,
    "text": "<h1 class='underlined'>Charleston, SC<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WCSC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTAT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Charleston-Huntington, WV",
    "state": "WV",
    "xPos": 718,
    "yPos": 275,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 210,
    "textPosY": 320,
    "text": "<h1 class='underlined'>Charleston-Huntington, WV<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WCHS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WVAH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WSAZ<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Charlotte, NC",
    "state": "NC",
    "xPos": 756,
    "yPos": 333,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 60,
    "textPosY": 400,
    "text": "<h1 class='underlined'>Charlotte, NC<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSOC<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WJZY<\/li><li>MyTV12: WMYT-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCNC<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Chattanooga, TN",
    "state": "TN",
    "xPos": 681,
    "yPos": 347,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 30,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Chattanooga, TN<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WDEF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WRCB<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Chicago, IL",
    "state": "IL",
    "xPos": 617,
    "yPos": 213,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 270,
    "text": "<h1 class='underlined'>Chicago, IL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WLS-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBBM<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFLD<\/li><li>My50: WPWR-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WMAQ<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WSNS<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WGBO<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Cincinnati, OH",
    "state": "OH",
    "xPos": 675,
    "yPos": 262,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 210,
    "textPosY": 320,
    "text": "<h1 class='underlined'>Cincinnati, OH<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WCPO<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WKRC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WXIX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WLWT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Cleveland, OH",
    "state": "OH",
    "xPos": 719,
    "yPos": 208,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Cleveland, OH<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WEWS<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WOIO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WJW<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WKYC<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Colorado Springs-Pueblo, CO",
    "state": "CO",
    "xPos": 344,
    "yPos": 278,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 250,
    "textPosY": 100,
    "text": "<h1 class='underlined'>Colorado Springs-Pueblo, CO<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KKTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KXRM<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KOAA<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Columbia-Jefferson City, MO",
    "state": "MO",
    "xPos": 539,
    "yPos": 278,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 90,
    "textPosY": 70,
    "text": "<h1 class='underlined'>Columbia-Jefferson City, MO<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KQFX-LP<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Columbia, SC",
    "state": "SC",
    "xPos": 758,
    "yPos": 360,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 140,
    "textPosY": 380,
    "text": "<h1 class='underlined'>Columbia, SC<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WLTX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WIS<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Columbus, OH",
    "state": "OH",
    "xPos": 700,
    "yPos": 239,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 180,
    "textPosY": 300,
    "text": "<h1 class='underlined'>Columbus, OH<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSYX<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBNS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTTE<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Columbus-Tupelo, MS",
    "state": "MS",
    "xPos": 618,
    "yPos": 380,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 60,
    "textPosY": 270,
    "text": "<h1 class='underlined'>Columbus-Tupelo, MS<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WLOV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Dallas-Ft. Worth, TX",
    "state": "TX",
    "xPos": 467,
    "yPos": 431,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 80,
    "textPosY": 170,
    "text": "<h1 class='underlined'>Dallas-Ft. Worth, TX<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WFAA<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KTVT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KDFW-TV<\/li><li>KTXA: KTXA<\/li><li>My27: KDFI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KXAS<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KXTX<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KUVN<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Dayton, OH",
    "state": "OH",
    "xPos": 682,
    "yPos": 245,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 190,
    "textPosY": 320,
    "text": "<h1 class='underlined'>Dayton, OH<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WKEF<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WHIO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WRGT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Denver, CO",
    "state": "CO",
    "xPos": 345,
    "yPos": 255,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 200,
    "textPosY": 50,
    "text": "<h1 class='underlined'>Denver, CO<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KMGH<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KCNC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KDVR<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KUSA<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KDEN<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Des Moines-Ames, IA",
    "state": "IA",
    "xPos": 525,
    "yPos": 220,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 190,
    "textPosY": 210,
    "text": "<h1 class='underlined'>Des Moines-Ames, IA<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KCCI<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KDSM<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Detroit, MI",
    "state": "MI",
    "xPos": 688,
    "yPos": 187,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Detroit, MI<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WXYZ<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WWJ<\/li><li>CW: WKBD<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WJBK<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WDIV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "El Paso, TX",
    "state": "TX",
    "xPos": 290,
    "yPos": 423,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 80,
    "textPosY": 60,
    "text": "<h1 class='underlined'>El Paso, TX<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KDBC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KFOX<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTDO<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Eugene, OR",
    "state": "OR",
    "xPos": 61,
    "yPos": 113,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 100,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Eugene, OR<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KLSR<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Evansville, IN",
    "state": "IN",
    "xPos": 627,
    "yPos": 293,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 140,
    "textPosY": 270,
    "text": "<h1 class='underlined'>Evansville, IN<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WEVV-DT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Flint-Saginaw-Bay City, MI",
    "state": "MI",
    "xPos": 674,
    "yPos": 175,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 140,
    "textPosY": 270,
    "text": "<h1 class='underlined'>Flint-Saginaw-Bay City, MI<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WNEM<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WSMH<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Fort Myers-Naples, FL",
    "state": "FL",
    "xPos": 768,
    "yPos": 532,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 210,
    "textPosY": 400,
    "text": "<h1 class='underlined'>Fort Myers-Naples, FL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WZVN<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WINK<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFTX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBBH<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Fort Smith, AR",
    "state": "AR",
    "xPos": 515,
    "yPos": 353,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 30,
    "textPosY": 220,
    "text": "<h1 class='underlined'>Fort Smith, AR<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFTA<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Fresno-Visalia, CA",
    "state": "CA",
    "xPos": 76,
    "yPos": 296,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 0,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Fresno-Visalia, CA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KFSN-TV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KMPH<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KNSO<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KFTV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Gainesville, FL",
    "state": "FL",
    "xPos": 745,
    "yPos": 458,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 150,
    "textPosY": 390,
    "text": "<h1 class='underlined'>Gainesville, FL<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WOGX<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Grand Rapids-Kalamazoo, MI",
    "state": "MI",
    "xPos": 649,
    "yPos": 196,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 150,
    "textPosY": 290,
    "text": "<h1 class='underlined'>Grand Rapids-Kalamazoo, MI<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WZZM<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WWMT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WXMI<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Great Falls, MT",
    "state": "MT",
    "xPos": 262,
    "yPos": 70,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 70,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Great Falls, MT<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFBB-DT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Green Bay, WI",
    "state": "WI",
    "xPos": 605,
    "yPos": 151,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 120,
    "textPosY": 270,
    "text": "<h1 class='underlined'>Green Bay, WI<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WBAY<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WLUK<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WGBA<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Greensboro-Winston-Salem, NC",
    "state": "NC",
    "xPos": 770,
    "yPos": 316,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 40,
    "textPosY": 430,
    "text": "<h1 class='underlined'>Greensboro-Winston-Salem, NC<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WXLV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WFMY<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WGHP<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WXII<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Greenville-New Bern, NC",
    "state": "NC",
    "xPos": 826,
    "yPos": 327,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 50,
    "textPosY": 450,
    "text": "<h1 class='underlined'>Greenville-New Bern, NC<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WYDO<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WITN<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Greenville-Spartanburg, SC-Asheville, NC",
    "state": "NC",
    "xPos": 740,
    "yPos": 345,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 70,
    "textPosY": 380,
    "text": "<h1 class='underlined'>Greenville-Spartanburg, SC-Asheville, NC<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WLOS<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WYFF<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Harlingen-Brownsville, TX",
    "state": "TX",
    "xPos": 454,
    "yPos": 554,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 130,
    "text": "<h1 class='underlined'>Harlingen-Brownsville, TX<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KGBT<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTLM<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Harrisburg-Lancaster, PA",
    "state": "PA",
    "xPos": 800,
    "yPos": 218,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 420,
    "text": "<h1 class='underlined'>Harrisburg-Lancaster, PA<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WHP<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WPMT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WGAL<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Hartford-New Haven, CT",
    "state": "CT",
    "xPos": 859,
    "yPos": 179,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 140,
    "textPosY": 440,
    "text": "<h1 class='underlined'>Hartford-New Haven, CT<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WFSB<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTIC<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WVIT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Honolulu, HI",
    "state": "HI",
    "xPos": 283,
    "yPos": 528,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 70,
    "text": "<h1 class='underlined'>Honolulu, HI<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KITV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KGMB<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KHON<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KHNL<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Houston, TX",
    "state": "TX",
    "xPos": 505,
    "yPos": 485,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 120,
    "textPosY": 200,
    "text": "<h1 class='underlined'>Houston, TX<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KTRK-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KHOU<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KRIV<\/li><li>my20: KTXH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KPRC<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTMD<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KXLN<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Huntsville-Decatur, AL",
    "state": "AL",
    "xPos": 650,
    "yPos": 363,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 50,
    "textPosY": 310,
    "text": "<h1 class='underlined'>Huntsville-Decatur, AL<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WZDX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WAFF<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Indianapolis, IN",
    "state": "IN",
    "xPos": 645,
    "yPos": 251,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 190,
    "textPosY": 300,
    "text": "<h1 class='underlined'>Indianapolis, IN<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WRTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WXIN<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTHR<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Jackson, MS",
    "state": "MS",
    "xPos": 588,
    "yPos": 420,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 80,
    "textPosY": 260,
    "text": "<h1 class='underlined'>Jackson, MS<\/h1><ul><li><img class='nbcLogo' src='./images/NBC.png' /> WLBT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Jacksonville, FL-Brunswick, GA",
    "state": "GA",
    "xPos": 758,
    "yPos": 441,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 200,
    "textPosY": 370,
    "text": "<h1 class='underlined'>Jacksonville, FL-Brunswick, GA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WJXX<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WJAX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFOX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTLV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Joplin-Pittsburg, KS",
    "state": "KS",
    "xPos": 505,
    "yPos": 309,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 200,
    "textPosY": 160,
    "text": "<h1 class='underlined'>Joplin-Pittsburg, KS<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFJX<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Juneau, AK",
    "state": "AK",
    "xPos": 190,
    "yPos": 555,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 180,
    "textPosY": 90,
    "text": "<h1 class='underlined'>Juneau, AK<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KJUD-DT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Kansas City, MO",
    "state": "MO",
    "xPos": 509,
    "yPos": 278,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 210,
    "textPosY": 180,
    "text": "<h1 class='underlined'>Kansas City, MO<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KMBC<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KCTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WDAF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSHB<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Knoxville, TN",
    "state": "TN",
    "xPos": 695,
    "yPos": 328,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 20,
    "textPosY": 320,
    "text": "<h1 class='underlined'>Knoxville, TN<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WVLT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTNZ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBIR<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Lafayette, LA",
    "state": "LA",
    "xPos": 562,
    "yPos": 462,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 110,
    "textPosY": 240,
    "text": "<h1 class='underlined'>Lafayette, LA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KADN<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Las Vegas, NV",
    "state": "NV",
    "xPos": 152,
    "yPos": 307,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 0,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Las Vegas, NV<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KTNV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSNV<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KBLR<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Lexington, KY",
    "state": "KY",
    "xPos": 678,
    "yPos": 288,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 0,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Lexington, KY<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WTVQ<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WKYT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WDKY<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WLEX<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Lima, OH",
    "state": "OH",
    "xPos": 683,
    "yPos": 223,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Lima, OH<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WLIO-DT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Little Rock-Pine Bluff, AR",
    "state": "AR",
    "xPos": 549,
    "yPos": 375,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 50,
    "textPosY": 240,
    "text": "<h1 class='underlined'>Little Rock-Pine Bluff, AR<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KATV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KTHV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KLRT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Los Angeles, CA",
    "state": "CA",
    "xPos": 88,
    "yPos": 341,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 30,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Los Angeles, CA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KABC-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KCBS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTTV<\/li><li>KCAL: KCAL<\/li><li>KCOP My13: KCOP-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KNBC<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KVEA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KMEX<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Louisville, KY",
    "state": "KY",
    "xPos": 657,
    "yPos": 287,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 220,
    "textPosY": 310,
    "text": "<h1 class='underlined'>Louisville, KY<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WHAS<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WLKY<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WDRB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WAVE<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Madison, WI",
    "state": "WI",
    "xPos": 587,
    "yPos": 178,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 280,
    "text": "<h1 class='underlined'>Madison, WI<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WISC<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Memphis, TN",
    "state": "TN",
    "xPos": 589,
    "yPos": 356,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 40,
    "textPosY": 280,
    "text": "<h1 class='underlined'>Memphis, TN<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WHBQ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WMC<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Miami-Ft. Lauderdale, FL",
    "state": "FL",
    "xPos": 799,
    "yPos": 537,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 220,
    "textPosY": 420,
    "text": "<h1 class='underlined'>Miami-Ft. Lauderdale, FL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WPLG<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WFOR<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WSVN<\/li><li>My33: WBFS<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTVJ<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WSCV<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WLTV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Milwaukee, WI",
    "state": "WI",
    "xPos": 609,
    "yPos": 182,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 290,
    "text": "<h1 class='underlined'>Milwaukee, WI<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WISN<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WITI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTMJ<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Minneapolis-St. Paul, MN",
    "state": "MN",
    "xPos": 529,
    "yPos": 145,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 140,
    "textPosY": 220,
    "text": "<h1 class='underlined'>Minneapolis-St. Paul, MN<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KSTP<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WCCO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KMSP-TV<\/li><li>My29: WFTC<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KARE<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Missoula, MT",
    "state": "MT",
    "xPos": 220,
    "yPos": 77,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 70,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Missoula, MT<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KTMF-DT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Mobile, AL-Pensacola, FL",
    "state": "FL",
    "xPos": 647,
    "yPos": 455,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 110,
    "textPosY": 310,
    "text": "<h1 class='underlined'>Mobile, AL-Pensacola, FL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WEAR<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPMI<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Myrtle Beach-Florence, SC",
    "state": "SC",
    "xPos": 788,
    "yPos": 369,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 50,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Myrtle Beach-Florence, SC<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WFXB<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Nashville, TN",
    "state": "TN",
    "xPos": 647,
    "yPos": 330,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 20,
    "textPosY": 310,
    "text": "<h1 class='underlined'>Nashville, TN<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WTVF<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WZTV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WSMV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "New Orleans, LA",
    "state": "LA",
    "xPos": 605,
    "yPos": 472,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 120,
    "textPosY": 280,
    "text": "<h1 class='underlined'>New Orleans, LA<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WWL<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WVUE<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WDSU<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "New York, NY",
    "state": "NY",
    "xPos": 847,
    "yPos": 196,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 150,
    "textPosY": 440,
    // "text": "<h1 class='underlined'>New York, NY<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> <span class='leftie'>WABC-TV<\/span><\/li><li><img class='cbsLogo' src='./images/CBS.png' /> <span class='leftie'>WCBS<\/span><\/li><li><img class='foxLogo' src='./images/FOX.png' /> <span class='leftie'>WNYW<\/span><\/li><li><img class='myNetworkLogo' src='./images/MyNetwork.png' /> <span class='leftie'>WWOR-TV<\/span><\/li><li><img class='nbcLogo' src='./images/NBC.png' /> <span class='leftie'>WNBC<\/span><\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> <span class='leftie'>WNJU<\/span><\/li><li><img class='uniLogo' src='./images/Univision.png' /> <span class='leftie'>WXTV<\/span><\/li><li>WLNY: <span class='leftie'>WLNY<\/span><\/li><\/ul>"
    "text": "<h1 class='underlined'>New York, NY<\/h1><table cellpadding='0' cellspacing='0'><tbody><tr><td><img class='abcLogo' src='./images/ABC.png' \/><\/td> <td>WABC-TV<\/td><\/tr><tr><td><img class='cbsLogo' src='./images/CBS.png' \/><\/td><td>WCBS<\/td><\/tr><tr><td><img class='foxLogo' src='./images/FOX.png' \/> <\/td><td>WNYW<\/td><\/tr><tr><td><img class='myNetworkLogo' src='./images/MyNetwork.png' \/><\/td><td>WWOR-TV<\/td><\/tr><tr><td><img class='nbcLogo' src='./images/NBC.png' \/><\/td><td>WNBC<\/td><\/tr><tr><td><img class='teleLogo' src='./images/Telemundo.png' \/><\/td><td>WNJU<\/td><\/tr><tr><td><img class='uniLogo' src='./images/Univision.png' \/><\/td><td>WXTV<\/td><\/tr><tr><td>WLNY:<\/td><td>WLNY<\/td><\/tr><\/tbody><\/table>"
  },
  {
    "enable": true,
    "name": "Norfolk-Newport News, VA",
    "state": "VA",
    "xPos": 825,
    "yPos": 291,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 220,
    "textPosY": 400,
    "text": "<h1 class='underlined'>Norfolk-Newport News, VA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WVEC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WVBT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Oklahoma City, OK",
    "state": "OK",
    "xPos": 459,
    "yPos": 355,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 40,
    "textPosY": 170,
    "text": "<h1 class='underlined'>Oklahoma City, OK<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KOCO<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KWTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KOKH<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Omaha, NE",
    "state": "NE",
    "xPos": 482,
    "yPos": 229,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 180,
    "text": "<h1 class='underlined'>Omaha, NE<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KMTV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Orlando-Daytona, FL",
    "state": "FL",
    "xPos": 770,
    "yPos": 490,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 430,
    "text": "<h1 class='underlined'>Orlando-Daytona, FL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WFTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WOFL<\/li><li>my65-WRBW: WRBW<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WESH<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Paducah, KY-Cape Girardeau, MO",
    "state": "MO",
    "xPos": 593,
    "yPos": 319,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 240,
    "textPosY": 250,
    "text": "<h1 class='underlined'>Paducah, KY-Cape Girardeau, MO<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KFVS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KBSI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPSD<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Palm Springs, CA",
    "state": "CA",
    "xPos": 114,
    "yPos": 354,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 40,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Palm Springs, CA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KDFX-CA<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Philadelphia, PA",
    "state": "PA",
    "xPos": 827,
    "yPos": 218,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 310,
    "text": "<h1 class='underlined'>Philadelphia, PA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WPVI-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KYW<\/li><li>CW: WPSG<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTXF-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCAU<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WWSI<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WUVP<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Phoenix, AZ",
    "state": "AZ",
    "xPos": 196,
    "yPos": 377,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 60,
    "textPosY": 20,
    "text": "<h1 class='underlined'>Phoenix, AZ<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KNXV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KPHO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSAZ-TV<\/li><li>My45: KUTP<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KPNX<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTAZ<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KTVW<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Pittsburgh, PA",
    "state": "PA",
    "xPos": 747,
    "yPos": 220,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 170,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Pittsburgh, PA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WTAE<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KDKA<\/li><li>CW: WPCW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WPGH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPXI<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Portland-Auburn, ME",
    "state": "ME",
    "xPos": 882,
    "yPos": 117,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 90,
    "textPosY": 450,
    "text": "<h1 class='underlined'>Portland-Auburn, ME<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WGME<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WPFO<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCSH<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Portland, OR",
    "state": "OR",
    "xPos": 80,
    "yPos": 80,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 70,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Portland, OR<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KATU<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KGW<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Providence, RI-New Bedford, MA",
    "state": "MA",
    "xPos": 881,
    "yPos": 168,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 130,
    "textPosY": 450,
    "text": "<h1 class='underlined'>Providence, RI-New Bedford, MA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WLNE<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WJAR<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Raleigh-Durham, NC",
    "state": "NC",
    "xPos": 790,
    "yPos": 320,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 40,
    "textPosY": 430,
    "text": "<h1 class='underlined'>Raleigh-Durham, NC<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WTVD-TV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WRAZ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WRAL<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Richmond-Petersburg, VA",
    "state": "VA",
    "xPos": 803,
    "yPos": 276,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 210,
    "textPosY": 400,
    "text": "<h1 class='underlined'>Richmond-Petersburg, VA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WRLH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WWBT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Roanoke, VA",
    "state": "VA",
    "xPos": 766,
    "yPos": 289,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 220,
    "textPosY": 380,
    "text": "<h1 class='underlined'>Roanoke, VA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSET<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WDBJ<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFXR<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WSLS<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Rochester, NY",
    "state": "NY",
    "xPos": 776,
    "yPos": 159,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 120,
    "textPosY": 400,
    "text": "<h1 class='underlined'>Rochester, NY<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WUHF<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Sacramento-Stockton-Modesto, CA",
    "state": "CA",
    "xPos": 44,
    "yPos": 224,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 0,
    "textPosY": 50,
    "text": "<h1 class='underlined'>Sacramento-Stockton-Modesto, CA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KXTV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KOVR<\/li><li>CW: KMAX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTXL<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KCRA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KUVS<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Salt Lake City, UT",
    "state": "UT",
    "xPos": 222,
    "yPos": 221,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 210,
    "textPosY": 10,
    "text": "<h1 class='underlined'>Salt Lake City, UT<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KUTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSTU<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSL<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "San Antonio, TX",
    "state": "TX",
    "xPos": 439,
    "yPos": 491,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 140,
    "textPosY": 140,
    "text": "<h1 class='underlined'>San Antonio, TX<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KSAT<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KENS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KABB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WOAI<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KVDA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KWEX<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "San Diego, CA",
    "state": "CA",
    "xPos": 101,
    "yPos": 372,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 60,
    "textPosY": 0,
    "text": "<h1 class='underlined'>San Diego, CA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KGTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSWB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KNSD<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KUAN<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "San Francisco-Oakland-San Jose, CA",
    "state": "CA",
    "xPos": 37,
    "yPos": 248,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 80,
    "textPosY": 40,
    "text": "<h1 class='underlined'>San Francisco-Oakland-San Jose, CA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KGO-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KPIX<\/li><li>CW: KBCW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTVU<\/li><li>KTVU Plus: KICU-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KNTV<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KSTS<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KDTV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Santa Barbara-San Luis Obispo, CA",
    "state": "CA",
    "xPos": 62,
    "yPos": 327,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 20,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Santa Barbara-San Luis Obispo, CA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KKFX-CA<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Savannah, GA",
    "state": "GA",
    "xPos": 759,
    "yPos": 411,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 120,
    "textPosY": 380,
    "text": "<h1 class='underlined'>Savannah, GA<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WTOC<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Seattle-Tacoma, WA",
    "state": "WA",
    "xPos": 100,
    "yPos": 31,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 40,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Seattle-Tacoma, WA<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KOMO<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KIRO<\/li><li>CW: KSTW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KCPQ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KING<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Shreveport, LA",
    "state": "LA",
    "xPos": 527,
    "yPos": 419,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 80,
    "textPosY": 230,
    "text": "<h1 class='underlined'>Shreveport, LA<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KSLA<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Spokane, WA",
    "state": "WA",
    "xPos": 171,
    "yPos": 52,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 50,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Spokane, WA<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KREM<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KHQ<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Springfield, MO",
    "state": "MO",
    "xPos": 537,
    "yPos": 307,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 230,
    "textPosY": 210,
    "text": "<h1 class='underlined'>Springfield, MO<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KSPR<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KRBK<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "St. Joseph, MO",
    "state": "MO",
    "xPos": 502,
    "yPos": 258,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 200,
    "textPosY": 180,
    "text": "<h1 class='underlined'>St. Joseph, MO<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KNPN-LD<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "St. Louis, MO",
    "state": "MO",
    "xPos": 580,
    "yPos": 284,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 210,
    "textPosY": 260,
    "text": "<h1 class='underlined'>St. Louis, MO<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KDNL<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KMOV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTVI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSDK<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Syracuse, NY",
    "state": "NY",
    "xPos": 799,
    "yPos": 156,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 120,
    "textPosY": 400,
    "text": "<h1 class='underlined'>Syracuse, NY<\/h1><ul><li><img class='nbcLogo' src='./images/NBC.png' /> WSTM<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Tampa-St. Petersburg, FL",
    "state": "FL",
    "xPos": 748,
    "yPos": 499,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 190,
    "textPosY": 390,
    "text": "<h1 class='underlined'>Tampa-St. Petersburg, FL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WFTS<\/li><li><img class='abcLogo' src='./images/ABC.png' /> WWSB<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WTSP<\/li><li>CW: WTOG<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTVT<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Toledo, OH",
    "state": "OH",
    "xPos": 686,
    "yPos": 207,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 160,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Toledo, OH<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WTOL<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WNWO<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Tri-Cities, TN-VA",
    "state": "VA",
    "xPos": 714,
    "yPos": 316,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 10,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Tri-Cities, TN-VA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WEMT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCYB<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Tucson, AZ",
    "state": "AZ",
    "xPos": 208,
    "yPos": 407,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 70,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Tucson, AZ<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KOLD<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KMSB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KVOA<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KHRR<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KTDO<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Tulsa, OK",
    "state": "OK",
    "xPos": 485,
    "yPos": 338,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 30,
    "textPosY": 190,
    "text": "<h1 class='underlined'>Tulsa, OK<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KTUL<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KOTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KOKI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KJRH<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Waco-Temple-Bryan, TX",
    "state": "TX",
    "xPos": 461,
    "yPos": 447,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 110,
    "textPosY": 180,
    "text": "<h1 class='underlined'>Waco-Temple-Bryan, TX<\/h1><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KBTX<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KWTX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KWKT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KAGS-LP<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KCEN<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Washington DC-Hagerstown, MD",
    "state": "DC",
    "xPos": 805,
    "yPos": 247,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 190,
    "textPosY": 330,
    "text": "<h1 class='underlined'>Washington DC-Hagerstown, MD<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WJLA<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WUSA<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTTG<\/li><li>my20dc: WDCA<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WRC<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "West Palm Beach-Ft. Pierce, FL",
    "state": "FL",
    "xPos": 795,
    "yPos": 513,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 190,
    "textPosY": 440,
    "text": "<h1 class='underlined'>West Palm Beach-Ft. Pierce, FL<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> WPBF<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WPEC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFLX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPTV<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Wichita-Hutchinson, KS",
    "state": "KS",
    "xPos": 460,
    "yPos": 297,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 230,
    "textPosY": 140,
    "text": "<h1 class='underlined'>Wichita-Hutchinson, KS<\/h1><ul><li><img class='abcLogo' src='./images/ABC.png' /> KAKE<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KWCH<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSAS<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Wilkes Barre-Scranton, PA",
    "state": "PA",
    "xPos": 805,
    "yPos": 191,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 150,
    "textPosY": 400,
    "text": "<h1 class='underlined'>Wilkes Barre-Scranton, PA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> WOLF<\/li><\/ul>"
  },
  {
    "enable": true,
    "name": "Yuma, AZ-El Centro, CA",
    "state": "CA",
    "xPos": 145,
    "yPos": 385,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "url": "https:\/\/directv.com",
    "textPosX": 50,
    "textPosY": 0,
    "text": "<h1 class='underlined'>Yuma, AZ-El Centro, CA<\/h1><ul><li><img class='foxLogo' src='./images/FOX.png' /> KECY<\/li><\/ul>"
  }
];

let paths = [
  {
    "enable": true,
    "name": "Alabama",
    "abbreviation": "AL",
    "textX": 657,
    "textY": 405,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 40,
    "textPosY": 310,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Alabama<\/h2><ul><li><h3 class='underlined'>Birmingham, AL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WABM-DT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WBRC<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WVTM<\/li><\/ul><\/li><li><h3 class='underlined'>Huntsville-Decatur, AL<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WZDX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WAFF<\/li><\/ul><\/li><\/ul>",
    "path": "M 631.30647,460.41572 L 629.81587,446.09422 L 627.06763,427.34158 L 627.22929,413.27709 L 628.03759,382.23824 L 627.87593,365.58718 L 628.04102,359.16812 L 672.5255,355.54867 L 672.3777,357.73109 L 672.53936,359.83269 L 673.18601,363.22756 L 676.58089,371.14893 L 679.00579,381.01024 L 680.46074,387.15335 L 682.07734,392.00317 L 683.5323,398.95458 L 685.63388,405.25934 L 688.22045,408.65423 L 688.70543,412.04909 L 690.64537,412.8574 L 690.80703,414.95899 L 689.02875,419.80881 L 688.54377,423.04203 L 688.38211,424.98195 L 689.99873,429.3468 L 690.32205,434.68159 L 689.51373,437.10651 L 690.16039,437.91481 L 691.61533,438.72311 L 691.94347,441.61193 L 686.34581,441.25838 L 679.55606,441.90503 L 654.01366,444.81491 L 643.6021,446.22168 L 643.38072,449.09908 L 645.15899,450.87735 L 647.74556,452.81727 L 648.32642,460.75271 L 642.78436,463.32561 L 640.03614,463.00229 L 642.78436,461.06236 L 642.78436,460.0924 L 639.71282,454.11096 L 637.44957,453.46432 L 635.99462,457.82915 L 634.70134,460.57738 L 634.0547,460.41572 L 631.30647,460.41572 z",
    "channels": [
      {
        "name": "Birmingham, AL",
        "channels": [
          "ABC: WABM-DT",
          "FOX: WBRC",
          "NBC: WVTM"
        ]
      },
      {
        "name": "Huntsville-Decatur, AL",
        "channels": [
          "FOX: WZDX",
          "NBC: WAFF"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Alaska",
    "abbreviation": "AK",
    "textX": 115,
    "textY": 490,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 90,
    "textPosY": 0,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Alaska<\/h2><ul><li><h3 class='underlined'>Anchorage, AK<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KTBY<\/li><\/ul><\/li><li><h3 class='underlined'>Juneau, AK<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KJUD-DT<\/li><\/ul><\/li><\/ul>",
    "path": "M 158.07671,453.67502 L 157.75339,539.03215 L 159.36999,540.00211 L 162.44156,540.16377 L 163.8965,539.03215 L 166.48308,539.03215 L 166.64475,541.94205 L 173.59618,548.73182 L 174.08117,551.3184 L 177.47605,549.37846 L 178.1227,549.2168 L 178.44602,546.14524 L 179.90096,544.52863 L 181.0326,544.36697 L 182.97253,542.91201 L 186.04409,545.01361 L 186.69074,547.92352 L 188.63067,549.05514 L 189.7623,551.48006 L 193.64218,553.25833 L 197.03706,559.2398 L 199.78529,563.11966 L 202.04855,565.86791 L 203.50351,569.58611 L 208.515,571.36439 L 213.68817,573.46598 L 214.65813,577.83084 L 215.14311,580.9024 L 214.17315,584.29729 L 212.39487,586.56054 L 210.77826,585.75224 L 209.32331,582.68067 L 206.57507,581.22573 L 204.7968,580.09409 L 203.98849,580.9024 L 205.44344,583.65065 L 205.6051,587.36885 L 204.47347,587.85383 L 202.53354,585.9139 L 200.43195,584.62061 L 200.91693,586.23722 L 202.21021,588.0155 L 201.40191,588.8238 C 201.40191,588.8238 200.59361,588.50048 200.10863,587.85383 C 199.62363,587.20719 198.00703,584.45895 198.00703,584.45895 L 197.03706,582.19569 C 197.03706,582.19569 196.71374,583.48898 196.06709,583.16565 C 195.42044,582.84233 194.7738,581.71071 194.7738,581.71071 L 196.55207,579.77077 L 195.09712,578.31582 L 195.09712,573.30432 L 194.28882,573.30432 L 193.48052,576.6992 L 192.34888,577.1842 L 191.37892,573.46598 L 190.73227,569.74777 L 189.92396,569.26279 L 190.24729,574.92094 L 190.24729,576.05256 L 188.79233,574.75928 L 185.23579,568.77781 L 183.13419,568.29283 L 182.48755,564.57462 L 180.87094,561.66472 L 179.25432,560.53308 L 179.25432,558.26983 L 181.35592,556.97654 L 180.87094,556.65322 L 178.28436,557.29986 L 174.88947,554.87495 L 172.30289,551.96504 L 167.45306,549.37846 L 163.41152,546.79188 L 164.70482,543.55866 L 164.70482,541.94205 L 162.92654,543.55866 L 160.01664,544.69029 L 156.29843,543.55866 L 150.64028,541.13375 L 145.14381,541.13375 L 144.49717,541.61873 L 138.03072,537.73885 L 135.92912,537.41553 L 133.18088,531.59573 L 129.62433,531.91905 L 126.06778,533.374 L 126.55277,537.90052 L 127.68439,534.99062 L 128.65437,535.31394 L 127.19941,539.67879 L 130.43263,536.93055 L 131.07928,538.54716 L 127.19941,542.91201 L 125.90612,542.58869 L 125.42114,540.64875 L 124.12785,539.84045 L 122.83456,540.97208 L 120.08632,539.19381 L 117.01475,541.29541 L 115.23649,543.397 L 111.8416,545.4986 L 107.15342,545.33693 L 106.66844,543.23534 L 110.38664,542.58869 L 110.38664,541.29541 L 108.12338,540.64875 L 109.09336,538.22384 L 111.35661,534.34397 L 111.35661,532.5657 L 111.51827,531.75739 L 115.88313,529.49413 L 116.85309,530.78742 L 119.60134,530.78742 L 118.30805,528.20085 L 114.58983,527.87752 L 109.57834,530.62576 L 107.15342,534.02064 L 105.37515,536.60723 L 104.24352,538.87049 L 100.04033,540.32543 L 96.96876,542.91201 L 96.645439,544.52863 L 98.908696,545.4986 L 99.717009,547.60018 L 96.96876,550.83341 L 90.502321,555.03661 L 82.742574,559.2398 L 80.640977,560.37142 L 75.306159,561.50306 L 69.971333,563.76631 L 71.749608,565.0596 L 70.294654,566.51455 L 69.809672,567.64618 L 67.061434,566.67621 L 63.828214,566.83787 L 63.019902,569.10113 L 62.049939,569.10113 L 62.37326,566.67621 L 58.816709,567.96951 L 55.90681,568.93947 L 52.511924,567.64618 L 49.602023,569.58611 L 46.368799,569.58611 L 44.267202,570.87941 L 42.65059,571.68771 L 40.548995,571.36439 L 37.962415,570.23276 L 35.699158,570.87941 L 34.729191,571.84937 L 33.112578,570.71775 L 33.112578,568.77781 L 36.184142,567.48452 L 42.488929,568.13117 L 46.853782,566.51455 L 48.955378,564.41296 L 51.86528,563.76631 L 53.643553,562.958 L 56.391794,563.11966 L 58.008406,564.41296 L 58.978369,564.08964 L 61.241626,561.3414 L 64.313196,560.37142 L 67.708076,559.72478 L 69.00137,559.40146 L 69.648012,559.88644 L 70.456324,559.88644 L 71.749608,556.16823 L 75.791141,554.71329 L 77.731077,550.99508 L 79.994336,546.46856 L 81.610951,545.01361 L 81.934272,542.42703 L 80.317657,543.72032 L 76.922764,544.36697 L 76.276122,541.94205 L 74.982838,541.61873 L 74.012865,542.58869 L 73.851205,545.4986 L 72.39625,545.33693 L 70.941306,539.51713 L 69.648012,540.81041 L 68.516388,540.32543 L 68.193068,538.3855 L 64.151535,538.54716 L 62.049939,539.67879 L 59.463361,539.35547 L 60.918305,537.90052 L 61.403286,535.31394 L 60.756645,533.374 L 62.211599,532.40404 L 63.504883,532.24238 L 62.858241,530.4641 L 62.858241,526.09925 L 61.888278,525.12928 L 61.079966,526.58423 L 54.936843,526.58423 L 53.481892,525.29094 L 52.835247,521.41108 L 50.733651,517.85452 L 50.733651,516.88456 L 52.835247,516.07625 L 52.996908,513.97465 L 54.128536,512.84303 L 53.320231,512.35805 L 52.026941,512.84303 L 50.895313,510.09479 L 51.86528,505.08328 L 56.391794,501.85007 L 58.978369,500.23345 L 60.918305,496.51525 L 63.666554,495.22195 L 66.253132,496.35359 L 66.576453,498.77851 L 69.00137,498.45517 L 72.23459,496.03026 L 73.851205,496.67691 L 74.821167,497.32355 L 76.437782,497.32355 L 78.701041,496.03026 L 79.509354,491.6654 C 79.509354,491.6654 79.832675,488.75551 80.479317,488.27052 C 81.125959,487.78554 81.44928,487.30056 81.44928,487.30056 L 80.317657,485.36062 L 77.731077,486.16893 L 74.497847,486.97723 L 72.557911,486.49225 L 69.00137,484.71397 L 63.989875,484.55231 L 60.433324,480.83411 L 60.918305,476.95424 L 61.564957,474.52932 L 59.463361,472.75105 L 57.523423,469.03283 L 58.008406,468.22453 L 64.798177,467.73955 L 66.899773,467.73955 L 67.869736,468.70951 L 68.516388,468.70951 L 68.354728,467.0929 L 72.23459,466.44626 L 74.821167,466.76958 L 76.276122,467.90121 L 74.821167,470.00281 L 74.336186,471.45775 L 77.084435,473.07437 L 82.095932,474.85264 L 83.874208,473.88268 L 81.610951,469.51783 L 80.640977,466.2846 L 81.610951,465.47629 L 78.21606,463.53636 L 77.731077,462.40472 L 78.21606,460.78812 L 77.407756,456.90825 L 74.497847,452.22007 L 72.072929,448.01688 L 74.982838,446.07694 L 78.21606,446.07694 L 79.994336,446.72359 L 84.197528,446.56193 L 87.915733,443.00539 L 89.047366,439.93382 L 92.765578,437.5089 L 94.382182,438.47887 L 97.130421,437.83222 L 100.84863,435.73062 L 101.98027,435.56896 L 102.95023,436.37728 L 107.47674,436.21561 L 110.22498,433.14405 L 111.35661,433.14405 L 114.91316,435.56896 L 116.85309,437.67056 L 116.36811,438.80219 L 117.01475,439.93382 L 118.63137,438.31721 L 122.51124,438.64053 L 122.83456,442.35873 L 124.7745,443.81369 L 131.88759,444.46033 L 138.19238,448.66352 L 139.64732,447.69356 L 144.82049,450.28014 L 146.92208,449.6335 L 148.86202,448.82518 L 153.71185,450.76512 L 158.07671,453.67502 z M 42.973913,482.61238 L 45.075509,487.9472 L 44.913847,488.91717 L 42.003945,488.59384 L 40.225672,484.55231 L 38.447399,483.09737 L 36.02248,483.09737 L 35.86082,480.51078 L 37.639093,478.08586 L 38.770722,480.51078 L 40.225672,481.96573 L 42.973913,482.61238 z M 40.387333,516.07625 L 44.105542,516.88456 L 47.823749,517.85452 L 48.632056,518.8245 L 47.015444,522.5427 L 43.94388,522.38104 L 40.548995,518.8245 L 40.387333,516.07625 z M 19.694697,502.01173 L 20.826327,504.5983 L 21.957955,506.21492 L 20.826327,507.02322 L 18.72473,503.95166 L 18.72473,502.01173 L 19.694697,502.01173 z M 5.9534943,575.0826 L 9.3483796,572.81934 L 12.743265,571.84937 L 15.329845,572.17269 L 15.814828,573.7893 L 17.754763,574.27429 L 19.694697,572.33436 L 19.371375,570.71775 L 22.119616,570.0711 L 25.029518,572.65768 L 23.897889,574.43595 L 19.533037,575.56758 L 16.784795,575.0826 L 13.066588,573.95097 L 8.7017347,575.40592 L 7.0851227,575.72924 L 5.9534943,575.0826 z M 54.936843,570.55609 L 56.553455,572.49602 L 58.655048,570.87941 L 57.2001,569.58611 L 54.936843,570.55609 z M 57.846745,573.62764 L 58.978369,571.36439 L 61.079966,571.68771 L 60.271663,573.62764 L 57.846745,573.62764 z M 81.44928,571.68771 L 82.904234,573.46598 L 83.874208,572.33436 L 83.065895,570.39442 L 81.44928,571.68771 z M 90.17899,559.2398 L 91.310623,565.0596 L 94.220522,565.86791 L 99.232017,562.958 L 103.59687,560.37142 L 101.98027,557.94651 L 102.46525,555.52159 L 100.36365,556.81488 L 97.453752,556.00657 L 99.070357,554.87495 L 101.01029,555.68325 L 104.89016,553.90497 L 105.37515,552.45003 L 102.95023,551.64172 L 103.75853,549.70178 L 101.01029,551.64172 L 96.322118,555.19827 L 91.472284,558.10817 L 90.17899,559.2398 z M 132.53423,539.35547 L 134.95915,537.90052 L 133.98918,536.12224 L 132.21091,537.09221 L 132.53423,539.35547 z",
    "channels": [
      {
        "name": "Anchorage, AK",
        "channels": [
          "FOX: KTBY"
        ]
      },
      {
        "name": "Juneau, AK",
        "channels": [
          "FOX: KJUD-DT"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Arizona",
    "abbreviation": "AZ",
    "textX": 205,
    "textY": 355,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 0,
    "textPosY": 0,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Arizona<\/h2><ul><li><h3 class='underlined'>Phoenix, AZ<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KNXV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KPHO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSAZ-TV<\/li><li>My45: KUTP<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KPNX<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTAZ<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KTVW<\/li><\/ul><\/li><li><h3 class='underlined'>Tucson, AZ<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KOLD<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KMSB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KVOA<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KHRR<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KTDO<\/li><\/ul><\/li><\/ul>",
    "path": "M 144.9112,382.62909 L 142.28419,384.78742 L 141.96087,386.24237 L 142.44585,387.21233 L 161.36012,397.88192 L 173.48466,405.47996 L 188.19576,414.04797 L 205.00845,424.07092 L 217.29465,426.49583 L 242.24581,429.20074 L 259.50142,310.07367 L 175.76579,298.15642 L 172.6734,314.56888 L 171.06711,314.58419 L 169.35244,317.21335 L 166.83759,317.09903 L 165.58017,314.35556 L 162.8367,314.01263 L 161.9222,312.86952 L 161.00772,312.86952 L 160.09322,313.44108 L 158.14993,314.46988 L 158.03563,321.44286 L 157.80699,323.15753 L 157.23545,335.73177 L 155.7494,337.90368 L 155.17784,341.21871 L 157.92131,346.1341 L 159.17873,351.96398 L 159.97892,352.99278 L 161.00772,353.56434 L 160.8934,355.85056 L 159.29305,357.22229 L 155.86371,358.93696 L 153.92042,360.88026 L 152.43437,364.53821 L 151.86281,369.4536 L 149.00503,372.19707 L 146.94743,372.88294 L 147.08312,373.71282 L 146.62587,375.42749 L 147.08312,376.22767 L 150.74108,376.79921 L 150.16952,379.54269 L 148.68347,381.7146 L 144.9112,382.62909 z",
    "channels": [
      {
        "name": "Phoenix, AZ",
        "channels": [
          "ABC: KNXV",
          "CBS: KPHO",
          "FOX: KSAZ-TV",
          "My45: KUTP",
          "NBC: KPNX",
          "Telemundo: KTAZ",
          "Univision: KTVW"
        ]
      },
      {
        "name": "Tucson, AZ",
        "channels": [
          "CBS: KOLD",
          "FOX: KMSB",
          "NBC: KVOA",
          "Telemundo: KHRR",
          "Univision: KTDO"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Arkansas",
    "abbreviation": "AR",
    "textX": 547,
    // "textY": 367,
    "textY": 360,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 30,
    "textPosY": 230,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Arkansas<\/h2><ul><li><h3 class='underlined'>Fort Smith, AR<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFTA<\/li><\/ul><\/li><li><h3 class='underlined'>Little Rock-Pine Bluff, AR<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KATV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KTHV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KLRT<\/li><\/ul><\/li><\/ul>",
    "path": "M 593.82477,343.05296 L 589.84489,343.76966 L 584.73274,343.13563 L 585.15344,341.53356 L 588.13319,338.96687 L 589.07657,335.31062 L 587.24759,332.33852 L 508.83002,334.85337 L 510.43038,341.71206 L 510.43037,349.94248 L 511.80212,360.91647 L 512.03074,398.7534 L 514.31697,400.69669 L 517.28906,399.32496 L 520.03254,400.46807 L 520.71288,407.04137 L 576.33414,405.90077 L 577.47977,403.8104 L 577.19315,400.26089 L 575.36752,397.28879 L 576.96621,395.80358 L 575.36752,393.29208 L 576.05172,390.78225 L 577.42011,385.17682 L 579.9383,383.11419 L 579.25243,380.82963 L 582.9104,375.45784 L 585.65387,374.08945 L 585.54039,372.59587 L 585.19495,370.77023 L 588.0519,365.1715 L 590.45494,363.91491 L 590.83907,360.48728 L 592.60974,359.24558 L 589.46622,358.76131 L 588.12476,354.75087 L 590.92884,352.37416 L 591.4791,350.35496 L 592.75858,346.30835 L 593.82477,343.05296 z",
    "channels": [
      {
        "name": "Fort Smith, AR",
        "channels": [
          "FOX: KFTA"
        ]
      },
      {
        "name": "Little Rock-Pine Bluff, AR",
        "channels": [
          "ABC: KATV",
          "CBS: KTHV",
          "FOX: KLRT"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "California",
    "abbreviation": "CA",
    "textX": 70,
    "textY": 260,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 10,
    "textPosY": 100,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>California<\/h2><ul><li><h3 class='underlined'>Fresno-Visalia, CA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KFSN-TV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KMPH<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KNSO<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KFTV<\/li><\/ul><\/li><li><h3 class='underlined'>Los Angeles, CA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KABC-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KCBS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTTV<\/li><li>KCAL: KCAL<\/li><li>KCOP My13: KCOP-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KNBC<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KVEA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KMEX<\/li><\/ul><\/li><li><h3 class='underlined'>Palm Springs, CA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KDFX-CA<\/li><\/ul><\/li><li><h3 class='underlined'>Sacramento-Stockton-Modesto, CA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KXTV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KOVR<\/li><li>CW: KMAX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTXL<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KCRA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KUVS<\/li><\/ul><\/li><li><h3 class='underlined'>San Diego, CA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KGTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSWB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KNSD<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KUAN<\/li><\/ul><\/li><li><h3 class='underlined'>San Francisco-Oakland-San Jose, CA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KGO-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KPIX<\/li><li>CW: KBCW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTVU<\/li><li>KTVU Plus: KICU-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KNTV<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KSTS<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KDTV<\/li><\/ul><\/li><li><h3 class='underlined'>Santa Barbara-San Luis Obispo, CA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KKFX-CA<\/li><\/ul><\/li><li><h3 class='underlined'>Yuma, AZ-El Centro, CA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KECY<\/li><\/ul><\/li><\/ul>",
    "path": "M 144.69443,382.19813 L 148.63451,381.70951 L 150.12055,379.69807 L 150.66509,376.75698 L 147.11357,376.16686 L 146.5994,375.49864 L 147.0769,373.46633 L 146.91762,372.87666 L 148.84019,372.25707 L 151.88297,369.42439 L 152.46453,364.42929 L 153.84443,361.02718 L 155.78772,358.86092 L 159.30659,357.27125 L 160.96098,355.66642 L 161.02971,353.55758 L 160.03638,352.97757 L 159.01323,351.90484 L 157.85801,346.05639 L 155.17281,341.2263 L 155.73862,337.7213 L 153.31904,336.69199 L 84.257718,232.51359 L 103.15983,164.9121 L 36.079967,149.21414 L 34.573071,153.94738 L 34.41141,161.38376 L 29.238275,173.18497 L 26.166727,175.77154 L 25.843406,176.90316 L 24.06514,177.71147 L 22.610196,181.91464 L 21.801894,185.14785 L 24.550122,189.35102 L 26.166727,193.55419 L 27.29835,197.11072 L 26.975029,203.57714 L 25.196764,206.64869 L 24.550122,212.46847 L 23.580159,216.18666 L 25.358424,220.06651 L 28.106652,224.593 L 30.369899,229.44282 L 31.663182,233.48433 L 31.339862,236.71754 L 31.016541,237.20252 L 31.016541,239.3041 L 36.674657,245.60886 L 36.189676,248.03377 L 35.543034,250.29702 L 34.896392,252.23694 L 35.058052,260.48163 L 37.159638,264.19982 L 39.099564,266.78638 L 41.847792,267.27137 L 42.817755,270.01959 L 41.686132,273.57612 L 39.584545,275.19273 L 38.452922,275.19273 L 37.64462,279.07258 L 38.129601,281.98247 L 41.362811,286.3473 L 42.979415,291.6821 L 44.434359,296.37025 L 45.727643,299.4418 L 49.122513,305.26158 L 50.577457,307.84814 L 51.062439,310.75803 L 52.679043,311.72799 L 52.679043,314.1529 L 51.870741,316.09283 L 50.092476,323.20589 L 49.607494,325.14581 L 52.032402,327.89404 L 56.235574,328.37902 L 60.762067,330.15729 L 64.641918,332.25887 L 67.551807,332.25887 L 70.461695,335.33042 L 73.048262,340.18024 L 74.179886,342.44348 L 78.059737,344.54507 L 82.909551,345.35337 L 84.364495,347.45496 L 85.011137,350.68817 L 83.556193,351.33481 L 83.879514,352.30477 L 87.112725,353.11307 L 89.860953,353.27474 L 93.020842,351.58789 L 96.900696,355.79106 L 97.708998,358.05431 L 100.29557,362.25748 L 100.61889,365.49069 L 100.61889,374.867 L 101.10387,376.64526 L 111.12682,378.10021 L 130.84939,380.84843 L 144.69443,382.19813 z M 56.559218,338.48145 L 57.852506,340.01723 L 57.690846,341.31052 L 54.457625,341.22969 L 53.891811,340.01723 L 53.245167,338.56228 L 56.559218,338.48145 z M 58.49915,338.48145 L 59.711608,337.83481 L 63.268151,339.9364 L 66.339711,341.14885 L 65.450575,341.79551 L 60.924066,341.55301 L 59.307456,339.9364 L 58.49915,338.48145 z M 79.191764,358.28493 L 80.970029,360.62901 L 81.778342,361.59898 L 83.314121,362.16479 L 83.879928,360.70984 L 82.909965,358.93157 L 80.242562,356.91081 L 79.191764,357.07247 L 79.191764,358.28493 z M 77.736809,366.93379 L 79.515085,370.08618 L 80.727543,372.02612 L 79.272589,372.2686 L 77.979305,371.05615 C 77.979305,371.05615 77.251828,369.6012 77.251828,369.19704 C 77.251828,368.7929 77.251828,367.01462 77.251828,367.01462 L 77.736809,366.93379 z",
    "channels": [
      {
        "name": "Fresno-Visalia, CA",
        "channels": [
          "ABC: KFSN-TV",
          "FOX: KMPH",
          "Telemundo: KNSO",
          "Univision: KFTV"
        ]
      },
      {
        "name": "Los Angeles, CA",
        "channels": [
          "ABC: KABC-TV",
          "CBS: KCBS",
          "FOX: KTTV",
          "KCAL: KCAL",
          "KCOP My13: KCOP-TV",
          "NBC: KNBC",
          "Telemundo: KVEA",
          "Univision: KMEX"
        ]
      },
      {
        "name": "Palm Springs, CA",
        "channels": [
          "FOX: KDFX-CA"
        ]
      },
      {
        "name": "Sacramento-Stockton-Modesto, CA",
        "channels": [
          "ABC: KXTV",
          "CBS: KOVR",
          "CW: KMAX",
          "FOX: KTXL",
          "NBC: KCRA",
          "Univision: KUVS"
        ]
      },
      {
        "name": "San Diego, CA",
        "channels": [
          "ABC: KGTV",
          "FOX: KSWB",
          "NBC: KNSD",
          "Telemundo: KUAN"
        ]
      },
      {
        "name": "San Francisco-Oakland-San Jose, CA",
        "channels": [
          "ABC: KGO-TV",
          "CBS: KPIX",
          "CW: KBCW",
          "FOX: KTVU",
          "KTVU Plus: KICU-TV",
          "NBC: KNTV",
          "Telemundo: KSTS",
          "Univision: KDTV"
        ]
      },
      {
        "name": "Santa Barbara-San Luis Obispo, CA",
        "channels": [
          "FOX: KKFX-CA"
        ]
      },
      {
        "name": "Yuma, AZ-El Centro, CA",
        "channels": [
          "FOX: KECY"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Colorado",
    "abbreviation": "CO",
    "textX": 322,
    "textY": 273,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 100,
    "textPosY": 290,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Colorado<\/h2><ul><li><h3 class='underlined'>Colorado Springs-Pueblo, CO<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KKTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KXRM<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KOAA<\/li><\/ul><\/li><li><h3 class='underlined'>Denver, CO<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KMGH<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KCNC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KDVR<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KUSA<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KDEN<\/li><\/ul><\/li><\/ul>",
    "path": "M 380.03242,320.96457 L 384.93566,234.63961 L 271.5471,221.99565 L 259.33328,309.93481 L 380.03242,320.96457 z",
    "channels": [
      {
        "name": "Colorado Springs-Pueblo, CO",
        "channels": [
          "CBS: KKTV",
          "FOX: KXRM",
          "NBC: KOAA"
        ]
      },
      {
        "name": "Denver, CO",
        "channels": [
          "ABC: KMGH",
          "CBS: KCNC",
          "FOX: KDVR",
          "NBC: KUSA",
          "Telemundo: KDEN"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Connecticut",
    "abbreviation": "CT",
    "textX": 913,
    "textY": 220,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 140,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Connecticut<\/h2><ul><li><h3 class='underlined'>Hartford-New Haven, CT<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WFSB<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTIC<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WVIT<\/li><\/ul><\/li><\/ul>",
    "path": "M 874.06831,178.86288 L 870.39088,163.98407 L 865.67206,164.90438 L 844.44328,169.64747 L 845.44347,172.87314 L 846.89842,180.14788 L 847.0752,189.1148 L 845.85518,191.28967 L 847.77597,193.22201 L 852.0475,189.31637 L 855.60403,186.08316 L 857.54395,183.98157 L 858.35226,184.62821 L 861.10048,183.17327 L 866.27362,182.04165 L 874.06831,178.86288 z M 899,210 L 929,210 L 929,230 L 899,230 z",
    "linePath": "M 899,215 L 863,183 z",
    "channels": [
      {
        "name": "Hartford-New Haven, CT",
        "channels": [
          "CBS: WFSB",
          "FOX: WTIC",
          "NBC: WVIT"
        ]
      }
    ]
  },
  {
    "enable": false,
    "name": "Delaware",
    "abbreviation": "DE",
    "textX": 913,
    "textY": 270,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 200,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Delaware<\/h2>",
    "path": "M 825.6261,228.2791 L 825.99441,226.13221 L 826.36948,224.44116 L 824.74648,224.83892 L 823.13102,225.30648 L 820.92476,227.07078 L 822.64488,232.11366 L 824.90814,237.77178 L 827.00972,247.47143 L 828.62634,253.77621 L 833.63782,253.61455 L 839.77994,252.43387 L 837.51571,245.0476 L 836.54574,245.53258 L 832.98921,243.10768 L 831.21095,238.41952 L 829.27102,234.86299 L 826.1239,231.99268 L 825.25974,229.89456 L 825.6261,228.2791 z M 899,260 L 929,260 L 929,280 L 899,280 z",
    "linePath": "M 899,267 L 835,245 z"
  },
  {
    "enable": true,
    "name": "Washington, D.C.",
    "abbreviation": "DC",
    "textX": 913,
    "textY": 320,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 190,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Washington, D.C.<\/h2>",
    "path": "M 805.81945,250.84384 L 803.96117,249.01967 L 802.72854,248.33338 L 804.17155,246.31091 L 807.06064,248.25941 L 805.81945,250.84384 z  M 899,310 L 929,310 L 929,330 L 899,330 z",
    "linePath": "M 899,319 L 810,249 z",
    "channels": [
      {
        "name": "Washington DC-Hagerstown, MD",
        "channels": [
          "ABC: WJLA",
          "CBS: WUSA",
          "FOX: WTTG",
          "my20dc: WDCA",
          "NBC: WRC"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Florida",
    "abbreviation": "FL",
    "textX": 770,
    "textY": 500,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 100,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Florida<\/h2><ul><li><h3 class='underlined'>Fort Myers-Naples, FL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WZVN<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WINK<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFTX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBBH<\/li><\/ul><\/li><li><h3 class='underlined'>Gainesville, FL<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WOGX<\/li><\/ul><\/li><li><h3 class='underlined'>Miami-Ft. Lauderdale, FL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WPLG<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WFOR<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WSVN<\/li><li>My33: WBFS<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTVJ<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WSCV<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WLTV<\/li><\/ul><\/li><li><h3 class='underlined'>Mobile, AL-Pensacola, FL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WEAR<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPMI<\/li><\/ul><\/li><li><h3 class='underlined'>Orlando-Daytona, FL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WFTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WOFL<\/li><li>my65-WRBW: WRBW<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WESH<\/li><\/ul><\/li><li><h3 class='underlined'>Tampa-St. Petersburg, FL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WFTS<\/li><li><img class='abcLogo' src='./images/ABC.png' /> WWSB<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WTSP<\/li><li>CW: WTOG<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTVT<\/li><\/ul><\/li><li><h3 class='underlined'>West Palm Beach-Ft. Pierce, FL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WPBF<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WPEC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFLX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPTV<\/li><\/ul><\/li><\/ul>",
    "path": "M 759.8167,439.1428 L 762.08236,446.4614 L 765.81206,456.20366 L 771.14685,465.57996 L 774.86504,471.88472 L 779.71486,477.38118 L 783.75637,481.09937 L 785.37297,484.00926 L 784.24135,485.30254 L 783.43305,486.59582 L 786.34293,494.03221 L 789.25282,496.94209 L 791.83939,502.27689 L 795.39592,508.09667 L 799.92241,516.34135 L 801.2157,523.93939 L 801.70068,535.90227 L 802.34732,537.68053 L 802.024,541.0754 L 799.59909,542.36869 L 799.92241,544.30861 L 799.27577,546.24854 L 799.59909,548.67344 L 800.08407,550.61337 L 797.33585,553.84658 L 794.2643,555.30152 L 790.38445,555.46318 L 788.9295,557.07979 L 786.5046,558.04975 L 785.21131,557.56477 L 784.07969,556.59481 L 783.75637,553.68492 L 782.94806,550.29005 L 779.55319,545.11691 L 775.99666,542.85367 L 772.11681,542.53035 L 771.30851,543.82363 L 768.23696,539.4588 L 767.59032,535.90227 L 765.00375,531.86076 L 763.22549,530.72913 L 761.60888,532.83072 L 759.83062,532.5074 L 757.72903,527.49592 L 754.81914,523.61607 L 751.90925,518.28128 L 749.32269,515.20973 L 745.76616,511.49154 L 747.86774,509.06663 L 751.10095,503.57017 L 750.93929,501.95357 L 746.4128,500.98361 L 744.79619,501.63025 L 745.11952,502.27689 L 747.70608,503.24685 L 746.25114,507.77335 L 745.44284,508.25833 L 743.66457,504.21682 L 742.37129,499.367 L 742.04797,496.61877 L 743.50291,491.93062 L 743.50291,482.39265 L 740.43136,478.67446 L 739.13808,475.60291 L 733.96494,474.30963 L 732.02502,473.66299 L 730.40841,471.07642 L 727.01354,469.45981 L 725.88192,466.06494 L 723.13369,465.09498 L 720.70878,461.37679 L 716.50561,459.92185 L 713.59572,458.4669 L 711.00916,458.4669 L 706.96764,459.27521 L 706.80598,461.21513 L 707.61429,462.18509 L 707.1293,463.31672 L 704.05776,463.15506 L 700.33957,466.71159 L 696.78303,468.65151 L 692.90318,468.65151 L 689.66997,469.9448 L 689.34665,467.19657 L 687.73005,465.25664 L 684.82016,464.12502 L 683.20356,462.67007 L 675.12053,458.79022 L 667.52249,457.01196 L 663.15766,457.6586 L 657.17622,458.14358 L 651.19478,460.24517 L 647.71554,460.85813 L 647.47762,452.80838 L 644.89105,450.86846 L 643.11278,449.09019 L 643.4361,446.01863 L 653.62072,444.72535 L 679.16312,441.81546 L 685.95287,441.16882 L 691.38887,441.44909 L 693.97544,445.32895 L 695.43038,446.78389 L 703.52854,447.29911 L 714.34829,446.65247 L 735.86068,445.35918 L 741.3064,444.68481 L 746.41398,444.88932 L 746.84081,447.79921 L 749.07381,448.60751 L 749.30875,443.97751 L 747.78053,439.80456 L 749.08893,438.36473 L 754.64356,438.81948 L 759.8167,439.1428 z M 772.36211,571.54788 L 774.78703,570.90124 L 776.08031,570.65875 L 777.53527,568.31466 L 779.87935,566.69805 L 781.17264,567.18304 L 782.87008,567.50636 L 783.27423,568.55715 L 779.79853,569.76961 L 775.59533,571.22456 L 773.25125,572.43702 L 772.36211,571.54788 z M 785.86081,566.53639 L 787.07327,567.58719 L 789.82151,565.4856 L 795.15632,561.28241 L 798.87452,557.40254 L 801.38027,550.77444 L 802.35024,549.077 L 802.5119,545.68212 L 801.78442,546.1671 L 800.81446,548.99617 L 799.3595,553.6035 L 796.12628,558.8575 L 791.76144,563.06068 L 788.36656,565.00061 L 785.86081,566.53639 z",
    "channels": [
      {
        "name": "Fort Myers-Naples, FL",
        "channels": [
          "ABC: WZVN",
          "CBS: WINK",
          "FOX: WFTX",
          "NBC: WBBH"
        ]
      },
      {
        "name": "Gainesville, FL",
        "channels": [
          "FOX: WOGX"
        ]
      },
      {
        "name": "Miami-Ft. Lauderdale, FL",
        "channels": [
          "ABC: WPLG",
          "CBS: WFOR",
          "FOX: WSVN",
          "My33: WBFS",
          "NBC: WTVJ",
          "Telemundo: WSCV",
          "Univision: WLTV"
        ]
      },
      {
        "name": "Mobile, AL-Pensacola, FL",
        "channels": [
          "ABC: WEAR",
          "NBC: WPMI"
        ]
      },
      {
        "name": "Orlando-Daytona, FL",
        "channels": [
          "ABC: WFTV",
          "FOX: WOFL",
          "my65-WRBW: WRBW",
          "NBC: WESH"
        ]
      },
      {
        "name": "Tampa-St. Petersburg, FL",
        "channels": [
          "ABC: WFTS",
          "ABC: WWSB",
          "CBS: WTSP",
          "CW: WTOG",
          "FOX: WTVT"
        ]
      },
      {
        "name": "West Palm Beach-Ft. Pierce, FL",
        "channels": [
          "ABC: WPBF",
          "CBS: WPEC",
          "FOX: WFLX",
          "NBC: WPTV"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Georgia",
    "abbreviation": "GA",
    "textX": 715,
    "textY": 400,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 40,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Georgia<\/h2><ul><li><h3 class='underlined'>Atlanta, GA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSB<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WGCL<\/li><li>CW: WUPA<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WAGA-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WXIA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WUVG<\/li><\/ul><\/li><li><h3 class='underlined'>Jacksonville, FL-Brunswick, GA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WJXX<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WJAX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFOX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTLV<\/li><\/ul><\/li><li><h3 class='underlined'>Savannah, GA<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WTOC<\/li><\/ul><\/li><\/ul>",
    "path": "M 672.29229,355.5518 L 672.29229,357.73422 L 672.45395,359.83582 L 673.10059,363.23069 L 676.49547,371.15206 L 678.92038,381.01337 L 680.37532,387.15648 L 681.99193,392.00629 L 683.44688,398.9577 L 685.54847,405.26247 L 688.13504,408.65735 L 688.62002,412.05222 L 690.55995,412.86052 L 690.72161,414.96212 L 688.94334,419.81193 L 688.45836,423.04515 L 688.2967,424.98508 L 689.91331,429.34992 L 690.23663,434.68472 L 689.42832,437.10963 L 690.07497,437.91794 L 691.52992,438.72624 L 691.73462,441.94433 L 693.96763,445.29386 L 696.21807,447.45591 L 704.13945,447.61757 L 714.9592,446.97093 L 736.47159,445.67765 L 741.91731,445.00328 L 746.49456,445.03101 L 746.65622,447.9409 L 749.24279,448.7492 L 749.56611,444.38436 L 747.9495,439.85786 L 749.08113,438.24126 L 754.90091,439.04956 L 759.87832,439.36734 L 759.1029,433.06855 L 761.36614,423.0456 L 762.82109,418.84242 L 762.3361,416.25586 L 765.67051,410.01156 L 765.16021,408.65988 L 763.2468,409.36446 L 760.66024,408.07116 L 760.01359,405.96957 L 758.72031,402.41304 L 756.45705,400.31145 L 753.87049,399.66481 L 752.25388,394.81499 L 749.32887,388.47999 L 745.1257,386.54006 L 743.0241,384.60013 L 741.73081,382.01356 L 739.62923,380.07363 L 737.36598,378.78034 L 735.10273,375.87045 L 732.03118,373.60721 L 727.50467,371.82893 L 727.01969,370.37399 L 724.59478,367.4641 L 724.1098,366.00915 L 720.71492,361.03867 L 717.19505,361.13784 L 713.44014,358.7817 L 712.02186,357.48842 L 711.69854,355.71015 L 712.56934,353.77023 L 714.79598,352.66009 L 714.16204,350.56287 L 672.29229,355.5518 z",
    "channels": [
      {
        "name": "Atlanta, GA",
        "channels": [
          "ABC: WSB",
          "CBS: WGCL",
          "CW: WUPA",
          "FOX: WAGA-TV",
          "NBC: WXIA",
          "Univision: WUVG"
        ]
      },
      {
        "name": "Jacksonville, FL-Brunswick, GA",
        "channels": [
          "ABC: WJXX",
          "CBS: WJAX",
          "FOX: WFOX",
          "NBC: WTLV"
        ]
      },
      {
        "name": "Savannah, GA",
        "channels": [
          "CBS: WTOC"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Hawaii",
    "abbreviation": "HI",
    "textX": 374,
    "textY": 571,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 150,
    "textPosY": 60,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Hawaii<\/h2><ul><li><h3 class='underlined'>Honolulu, HI<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KITV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KGMB<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KHON<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KHNL<\/li><\/ul><\/li><\/ul>",
    "path": "M 233.08751,519.30948 L 235.02744,515.75293 L 237.2907,515.42961 L 237.61402,516.23791 L 235.51242,519.30948 L 233.08751,519.30948 z M 243.27217,515.59127 L 249.4153,518.17784 L 251.51689,517.85452 L 253.1335,513.97465 L 252.48686,510.57977 L 248.28366,510.09479 L 244.24213,511.87306 L 243.27217,515.59127 z M 273.9878,525.61427 L 277.706,531.11074 L 280.13092,530.78742 L 281.26255,530.30244 L 282.7175,531.59573 L 286.43571,531.43407 L 287.40568,529.97912 L 284.49577,528.20085 L 282.55584,524.48263 L 280.45424,520.92609 L 274.63444,523.83599 L 273.9878,525.61427 z M 294.19545,534.50564 L 295.48874,532.5657 L 300.17691,533.53566 L 300.82356,533.05068 L 306.96668,533.69732 L 306.64336,534.99062 L 304.05678,536.44556 L 299.69193,536.12224 L 294.19545,534.50564 z M 299.53027,539.67879 L 301.47021,543.55866 L 304.54176,542.42703 L 304.86509,540.81041 L 303.24848,538.70882 L 299.53027,538.3855 L 299.53027,539.67879 z M 306.4817,538.54716 L 308.74496,535.63726 L 313.43313,538.06218 L 317.79798,539.19381 L 322.16284,541.94205 L 322.16284,543.88198 L 318.6063,545.66026 L 313.75645,546.63022 L 311.33154,545.17527 L 306.4817,538.54716 z M 323.13281,554.06663 L 324.74942,552.77335 L 328.14431,554.38997 L 335.74238,557.94651 L 339.13727,560.0481 L 340.75387,562.47302 L 342.69381,566.83787 L 346.73534,569.42445 L 346.41202,570.71775 L 342.53215,573.95097 L 338.32896,575.40592 L 336.87401,574.75928 L 333.80244,576.53754 L 331.37753,579.77077 L 329.11427,582.68067 L 327.33599,582.51901 L 323.77945,579.93243 L 323.45613,575.40592 L 324.10277,572.981 L 322.48616,567.32286 L 320.38456,565.54458 L 320.2229,562.958 L 322.48616,561.98804 L 324.58776,558.91648 L 325.07274,557.94651 L 323.45613,556.16823 L 323.13281,554.06663 z M 360,560 L 390,560 L 390,580 L 360,580 z",
    "channels": [
      {
        "name": "Honolulu, HI",
        "channels": [
          "ABC: KITV",
          "CBS: KGMB",
          "FOX: KHON",
          "NBC: KHNL"
        ]
      }
    ]
  },
  {
    "enable": false,
    "name": "Idaho",
    "abbreviation": "ID",
    "textX": 195,
    "textY": 145,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 0,
    "textPosY": 200,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Idaho<\/h2>",
    "path": "M 148.47881,176.48395 L 157.24968,141.26323 L 158.62142,137.03371 L 161.13626,131.08953 L 159.87884,128.8033 L 157.36398,128.91761 L 156.56381,127.88881 L 157.02106,126.7457 L 157.36398,123.65929 L 161.82213,118.17234 L 163.65111,117.7151 L 164.79422,116.57199 L 165.36578,113.37127 L 166.28026,112.68541 L 170.16685,106.85553 L 174.05344,102.5117 L 174.28206,98.739432 L 170.85272,96.110269 L 169.31717,91.709286 L 182.94208,28.367595 L 196.45967,30.895706 L 192.05159,52.278719 L 195.61194,59.764071 L 194.03083,64.424911 L 196.00068,69.066144 L 199.1389,70.321335 L 202.97424,79.877923 L 206.48693,84.315077 L 206.99418,85.458195 L 210.33513,86.601313 L 210.70398,88.698388 L 203.73297,106.07448 L 203.56779,108.64041 L 206.19891,111.96211 L 207.10399,111.91321 L 212.01528,108.88761 L 212.6927,107.79264 L 214.25501,108.4515 L 213.97657,113.80522 L 216.71582,126.38793 L 220.63365,129.56584 L 222.31483,131.73129 L 221.59822,135.81515 L 222.66444,138.62256 L 223.72607,139.71384 L 226.20536,137.36242 L 229.05352,137.41131 L 231.97277,138.74651 L 234.75279,138.06458 L 238.54705,137.9041 L 242.52595,139.50446 L 245.26943,139.2077 L 245.76617,136.17039 L 248.69876,135.40556 L 249.95893,136.92147 L 250.39986,139.86643 L 251.8242,141.07964 L 243.4382,194.6883 C 243.4382,194.6883 155.47221,177.98769 148.47881,176.48395 z"
  },
  {
    "enable": true,
    "name": "Illinois",
    "abbreviation": "IL",
    "textX": 598,
    "textY": 253,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 80,
    "textPosY": 90,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Illinois<\/h2><ul><li><h3 class='underlined'>Champaign, IL<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WRSP<\/li><\/ul><\/li><li><h3 class='underlined'>Chicago, IL<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WLS-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBBM<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFLD<\/li><li>My50: WPWR-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WMAQ<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WSNS<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WGBO<\/li><\/ul><\/li><\/ul>",
    "path": "M 619.54145,300.34244 L 619.5727,297.11273 L 620.14009,292.46677 L 622.47262,289.55091 L 624.33927,285.47515 L 626.57229,281.47982 L 626.20079,276.22742 L 624.19558,272.68485 L 624.0992,269.33817 L 624.79403,264.06866 L 623.96862,256.89029 L 622.90228,241.11284 L 621.609,226.0955 L 620.68672,214.4563 L 620.41421,213.53491 L 619.60591,210.94834 L 618.31263,207.23015 L 616.69602,205.45188 L 615.24108,202.86532 L 615.00751,197.37636 L 569.21108,199.97461 L 569.4397,202.34656 L 571.72593,203.03243 L 572.64041,204.17554 L 573.09766,206.00452 L 576.98424,209.43386 L 577.67012,211.72009 L 576.98424,215.14943 L 575.15526,218.80739 L 574.4694,221.32223 L 572.18317,223.15122 L 570.35419,223.83709 L 565.09587,225.20882 L 564.41,227.0378 L 563.72413,229.09541 L 564.41,230.46715 L 566.23898,232.06751 L 566.01036,236.18271 L 564.18137,237.78307 L 563.49551,239.38343 L 563.49551,242.1269 L 561.66653,242.58414 L 560.06617,243.72726 L 559.83755,245.099 L 560.06617,247.1566 L 558.3515,248.47117 L 557.3227,251.27181 L 557.77994,254.92976 L 560.06617,262.24569 L 567.3821,269.79024 L 572.86903,273.4482 L 572.64041,277.79203 L 573.55491,279.16377 L 579.95634,279.62101 L 582.69981,280.99275 L 582.01395,284.65071 L 579.72772,290.5949 L 579.04185,293.79562 L 581.32807,297.6822 L 587.72951,302.94052 L 592.30197,303.62639 L 594.35956,308.65609 L 596.41717,311.8568 L 595.50268,314.82889 L 597.10304,318.9441 L 598.93202,321.00171 L 600.34605,320.12102 L 601.25371,318.04623 L 603.46679,316.29903 L 605.59826,315.68463 L 608.20079,316.86443 L 611.82778,318.24013 L 613.01673,317.9419 L 613.2166,315.68345 L 611.9293,313.27166 L 612.23352,310.89494 L 614.07192,309.54749 L 617.09446,308.7372 L 618.35536,308.27868 L 617.74275,306.8918 L 616.95138,304.53743 L 618.38398,303.55647 L 619.54145,300.34244 z",
    "channels": [
      {
        "name": "Champaign, IL",
        "channels": [
          "FOX: WRSP"
        ]
      },
      {
        "name": "Chicago, IL",
        "channels": [
          "ABC: WLS-TV",
          "CBS: WBBM",
          "FOX: WFLD",
          "My50: WPWR-TV",
          "NBC: WMAQ",
          "Telemundo: WSNS",
          "Univision: WGBO"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Indiana",
    "abbreviation": "IN",
    "textX": 645,
    // "textY": 253,
    "textY": 240,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 80,
    "textPosY": 130,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Indiana<\/h2><ul><li><h3 class='underlined'>Evansville, IN<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WEVV-DT<\/li><\/ul><\/li><li><h3 class='underlined'>Indianapolis, IN<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WRTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WXIN<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTHR<\/li><\/ul><\/li><\/ul>",
    "path": "M 619.56954,299.97132 L 619.63482,297.11274 L 620.11981,292.58623 L 622.38305,289.67635 L 624.16133,285.79648 L 626.74789,281.59331 L 626.26291,275.77352 L 624.48465,273.02529 L 624.16133,269.79208 L 624.96963,264.29561 L 624.48465,257.3442 L 623.19135,241.33979 L 621.89807,225.98203 L 620.9276,214.26201 L 623.99866,215.15152 L 625.45361,216.12148 L 626.58523,215.79816 L 628.68682,213.85824 L 631.51639,212.24125 L 636.60919,212.07921 L 658.59506,209.81595 L 664.17079,209.28279 L 665.67393,225.239 L 669.92528,262.08055 L 670.52374,267.85215 L 670.15224,270.1154 L 671.38022,271.91077 L 671.47661,273.28332 L 668.95532,274.88283 L 665.41589,276.43414 L 662.21376,276.98442 L 661.6153,281.85135 L 657.04061,285.16382 L 654.24419,289.17426 L 654.56751,291.55099 L 653.98617,293.08519 L 650.6597,293.08519 L 649.07417,291.46859 L 646.58086,292.73079 L 643.8979,294.23393 L 644.05957,297.28838 L 642.86578,297.54641 L 642.3979,296.52827 L 640.23102,295.02513 L 636.9807,296.36661 L 635.42939,299.37286 L 633.99155,298.56456 L 632.5366,296.96505 L 628.07226,297.45004 L 622.47943,298.42 L 619.56954,299.97132 z",
    "channels": [
      {
        "name": "Evansville, IN",
        "channels": [
          "FOX: WEVV-DT"
        ]
      },
      {
        "name": "Indianapolis, IN",
        "channels": [
          "ABC: WRTV",
          "FOX: WXIN",
          "NBC: WTHR"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Iowa",
    "abbreviation": "IA",
    "textX": 525,
    // "textY": 213,
    "textY": 205,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 40,
    "textPosY": 30,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Iowa<\/h2><ul><li><h3 class='underlined'>Cedar Rapids, IA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFXA<\/li><\/ul><\/li><li><h3 class='underlined'>Des Moines-Ames, IA<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KCCI<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KDSM<\/li><\/ul><\/li><\/ul>",
    "path": "M 569.19154,199.5843 L 569.45592,202.3705 L 571.67964,202.94776 L 572.63358,204.17309 L 573.13359,206.02845 L 576.92643,209.3871 L 577.6123,211.7786 L 576.93796,215.20307 L 575.35565,218.43505 L 574.55631,221.17684 L 572.38356,222.77888 L 570.66805,223.35128 L 565.08903,225.21148 L 563.69757,229.06017 L 564.42621,230.43191 L 566.26672,232.1145 L 565.98379,236.15079 L 564.22064,237.68865 L 563.44923,239.33179 L 563.57645,242.10811 L 561.69014,242.56535 L 560.06469,243.67026 L 559.7859,245.02289 L 560.06469,247.13781 L 558.51367,248.25388 L 556.04314,245.1206 L 554.78057,242.67073 L 489.04475,245.18558 L 488.12672,245.35102 L 486.07432,240.83506 L 485.8457,234.20499 L 484.24534,230.08978 L 483.55948,224.83147 L 481.27325,221.1735 L 480.35877,216.37243 L 477.61529,208.82788 L 476.47218,203.45524 L 475.10044,201.28333 L 473.50008,198.53987 L 475.45406,193.69604 L 476.8258,187.98047 L 474.08233,185.92286 L 473.62508,183.17939 L 474.53958,180.66454 L 476.25425,180.66454 L 558.90825,179.39506 L 559.74251,183.57818 L 561.99469,185.13915 L 562.2514,186.56224 L 560.22186,189.95155 L 560.41227,193.15707 L 562.92713,196.95527 L 565.45392,198.24889 L 568.5332,198.75194 L 569.19154,199.5843 z",
    "channels": [
      {
        "name": "Cedar Rapids, IA",
        "channels": [
          "FOX: KFXA"
        ]
      },
      {
        "name": "Des Moines-Ames, IA",
        "channels": [
          "CBS: KCCI",
          "FOX: KDSM"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Kansas",
    "abbreviation": "KS",
    "textX": 445,
    "textY": 290,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 240,
    "textPosY": 170,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Kansas<\/h2><ul><li><h3 class='underlined'>Joplin-Pittsburg, KS<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFJX<\/li><\/ul><\/li><li><h3 class='underlined'>Wichita-Hutchinson, KS<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KAKE<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KWCH<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSAS<\/li><\/ul><\/li><\/ul>",
    "path": "M 507.88059,324.38028 L 495.26233,324.58471 L 449.17324,324.12748 L 404.61576,322.06985 L 379.98602,320.81244 L 383.87981,256.21747 L 405.96327,256.89264 L 446.2524,257.73404 L 490.55364,258.72162 L 495.64927,258.72162 L 497.83367,260.88402 L 499.85133,260.86264 L 501.49163,261.87511 L 501.42913,264.88434 L 499.60015,266.60971 L 499.2679,268.84188 L 501.11098,272.24421 L 504.06334,275.43927 L 506.39069,277.05373 L 507.69146,288.29455 L 507.88059,324.38028 z",
    "channels": [
      {
        "name": "Joplin-Pittsburg, KS",
        "channels": [
          "FOX: KFJX"
        ]
      },
      {
        "name": "Wichita-Hutchinson, KS",
        "channels": [
          "ABC: KAKE",
          "CBS: KWCH",
          "FOX: KSAS"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Kentucky",
    "abbreviation": "KY",
    "textX": 675,
    "textY": 300,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 240,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Kentucky<\/h2><ul><li><h3 class='underlined'>Lexington, KY<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WTVQ<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WKYT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WDKY<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WLEX<\/li><\/ul><\/li><li><h3 class='underlined'>Louisville, KY<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WHAS<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WLKY<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WDRB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WAVE<\/li><\/ul><\/li><\/ul>",
    "path": "M 725.9944,295.2707 L 723.70108,297.67238 L 720.12289,301.66642 L 715.19834,307.13109 L 713.98257,308.84686 L 713.92007,310.94844 L 709.54021,313.11253 L 703.88209,316.50741 L 696.65022,318.30626 L 644.78233,323.20512 L 629.02277,324.98338 L 624.40157,325.49609 L 620.53322,325.46837 L 620.30627,329.68865 L 612.12686,329.83321 L 605.17545,330.47985 L 597.18797,330.41963 L 598.39575,329.09955 L 600.89529,327.5587 L 601.12392,324.35797 L 602.03841,322.52899 L 600.43159,319.99009 L 601.23342,318.08328 L 603.49668,316.30502 L 605.59826,315.65837 L 608.34649,316.95166 L 611.90303,318.24494 L 613.03466,317.92162 L 613.19632,315.65837 L 611.90303,313.23346 L 612.22635,310.97021 L 614.16628,309.51527 L 616.75286,308.86862 L 618.36946,308.22198 L 617.56116,306.44371 L 616.91452,304.50378 L 618.42114,303.50798 C 618.42442,303.47086 619.6751,299.98569 619.65943,299.85017 L 622.71265,298.37149 L 628.03244,297.40153 L 632.52648,296.91655 L 633.91892,298.54398 L 635.44719,299.41478 L 637.03796,296.30657 L 640.22504,295.02395 L 642.43013,296.50798 L 642.84069,297.50702 L 644.01421,297.24301 L 643.85254,294.29008 L 646.98341,292.54089 L 649.1315,291.46741 L 650.66086,293.12822 L 653.97901,293.08402 L 654.56634,291.51277 L 654.19883,289.24953 L 656.79936,285.25103 L 661.57591,281.81313 L 662.28186,276.97727 L 665.20688,276.52136 L 668.99834,274.87568 L 671.44166,273.16744 L 671.24333,271.60251 L 670.10088,270.14757 L 670.6667,267.15266 L 674.85155,267.03516 L 677.15146,266.28936 L 680.49885,267.71846 L 682.55296,272.0833 L 687.68525,272.09412 L 689.73626,274.30231 L 691.35171,274.15461 L 693.9534,272.87644 L 699.19046,273.44981 L 701.76538,273.66732 L 703.45296,271.61108 L 706.07091,270.1852 L 707.95269,269.4781 L 708.59933,272.31473 L 710.64276,273.37307 L 713.28552,275.45556 L 713.40299,281.1288 L 714.21129,282.70121 L 716.80101,284.25749 L 717.57265,286.552 L 721.73254,289.98894 L 723.53785,293.61218 L 725.9944,295.2707 z",
    "channels": [
      {
        "name": "Lexington, KY",
        "channels": [
          "ABC: WTVQ",
          "CBS: WKYT",
          "FOX: WDKY",
          "NBC: WLEX"
        ]
      },
      {
        "name": "Louisville, KY",
        "channels": [
          "ABC: WHAS",
          "CBS: WLKY",
          "FOX: WDRB",
          "NBC: WAVE"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Louisiana",
    "abbreviation": "LA",
    "textX": 549,
    "textY": 447,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 80,
    "textPosY": 240,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Louisiana<\/h2><ul><li><h3 class='underlined'>Baton Rouge, LA<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WAFB<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WGMB<\/li><\/ul><\/li><li><h3 class='underlined'>Lafayette, LA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KADN<\/li><\/ul><\/li><li><h3 class='underlined'>New Orleans, LA<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WWL<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WVUE<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WDSU<\/li><\/ul><\/li><li><h3 class='underlined'>Shreveport, LA<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KSLA<\/li><\/ul><\/li><\/ul>",
    "path": "M 607.96706,459.16125 L 604.68245,455.99511 L 605.69236,450.49488 L 605.03101,449.6018 L 595.76934,450.60836 L 570.74102,451.06728 L 570.05683,448.6726 L 570.96964,440.2169 L 574.28552,434.27105 L 579.31688,425.58003 L 578.74281,423.18201 L 579.9994,422.50116 L 580.45833,420.54867 L 578.17209,418.49274 L 578.0603,416.55029 L 576.22964,412.20478 L 576.08259,405.86618 L 520.6088,406.79015 L 520.63737,416.36372 L 521.32324,425.73725 L 522.00911,429.62383 L 524.52396,433.73904 L 525.43845,438.76875 L 529.78228,444.25568 L 530.0109,447.4564 L 530.69677,448.14227 L 530.0109,456.60131 L 527.03881,461.631 L 528.63917,463.68861 L 527.95329,466.20345 L 527.26743,473.51938 L 525.89569,476.72009 L 526.01815,480.33654 L 530.70463,478.81639 L 542.81798,479.0234 L 553.16425,482.57993 L 559.63067,483.71156 L 563.34886,482.25661 L 566.58207,483.38824 L 569.81528,484.3582 L 570.62358,482.25661 L 567.39037,481.12499 L 564.8038,481.60997 L 562.05557,479.99337 C 562.05557,479.99337 562.21724,478.70008 562.86388,478.53842 C 563.51052,478.37676 565.93543,477.56846 565.93543,477.56846 L 567.71369,479.0234 L 569.49196,478.05344 L 572.72517,478.70008 L 574.18011,481.12499 L 574.50343,483.38824 L 579.02992,483.71156 L 580.80819,485.48982 L 579.99989,487.10643 L 578.7066,487.91473 L 580.32321,489.53133 L 588.72955,493.08786 L 592.28608,491.79458 L 593.25605,489.36967 L 595.84261,488.72303 L 597.62088,487.26809 L 598.91416,488.23805 L 599.72246,491.14794 L 597.45922,491.95624 L 598.10586,492.60288 L 601.50073,491.3096 L 603.76398,487.91473 L 604.57228,487.42975 L 602.47069,487.10643 L 603.27899,485.48982 L 603.11733,484.03488 L 605.21892,483.5499 L 606.35054,482.25661 L 606.99718,483.06491 C 606.99718,483.06491 606.83552,486.13646 607.64383,486.13646 C 608.45213,486.13646 611.847,486.78311 611.847,486.78311 L 615.88851,488.72303 L 616.85847,490.17798 L 619.76836,490.17798 L 620.89999,491.14794 L 623.16323,488.07639 L 623.16323,486.62144 L 621.86995,486.62144 L 618.47508,483.87322 L 612.6553,483.06491 L 609.42209,480.80167 L 610.55372,478.05344 L 612.81696,478.37676 L 612.97862,477.73012 L 611.20036,476.76016 L 611.20036,476.27517 L 614.43357,476.27517 L 616.21183,473.20363 L 614.91855,471.2637 L 614.59523,468.51547 L 613.14028,468.67713 L 611.20036,470.77872 L 610.55372,473.36529 L 607.48217,472.71864 L 606.5122,470.94038 L 608.29047,469.00045 L 610.1938,465.55485 L 609.1327,463.14258 L 607.96706,459.16125 z",
    "channels": [
      {
        "name": "Baton Rouge, LA",
        "channels": [
          "CBS: WAFB",
          "FOX: WGMB"
        ]
      },
      {
        "name": "Lafayette, LA",
        "channels": [
          "FOX: KADN"
        ]
      },
      {
        "name": "New Orleans, LA",
        "channels": [
          "CBS: WWL",
          "FOX: WVUE",
          "NBC: WDSU"
        ]
      },
      {
        "name": "Shreveport, LA",
        "channels": [
          "CBS: KSLA"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Maine",
    "abbreviation": "ME",
    "textX": 892,
    "textY": 80,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 50,
    "textPosY": 310,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Maine<\/h2><ul><li><h3 class='underlined'>Bangor, ME<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WFVX-LP<\/li><\/ul><\/li><li><h3 class='underlined'>Portland-Auburn, ME<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WGME<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WPFO<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCSH<\/li><\/ul><\/li><\/ul>",
    "path": "M 922.83976,78.830719 L 924.77969,80.932305 L 927.04294,84.650496 L 927.04294,86.590422 L 924.94135,91.278575 L 923.00142,91.925217 L 919.60655,94.996766 L 914.75674,100.49322 C 914.75674,100.49322 914.1101,100.49322 913.46346,100.49322 C 912.81682,100.49322 912.49349,98.391636 912.49349,98.391636 L 910.71523,98.553296 L 909.74527,100.00824 L 907.32036,101.46319 L 906.3504,102.91813 L 907.967,104.37307 L 907.48202,105.01972 L 906.99704,107.76794 L 905.05711,107.60628 L 905.05711,105.98968 L 904.73379,104.69639 L 903.27885,105.01972 L 901.50058,101.78651 L 899.399,103.07979 L 900.69228,104.53473 L 901.0156,105.66636 L 900.2073,106.95964 L 900.53062,110.03119 L 900.69228,111.64779 L 899.07568,114.23436 L 896.16579,114.71934 L 895.84247,117.62923 L 890.50767,120.70078 L 889.21439,121.18576 L 887.59778,119.73082 L 884.52623,123.28735 L 885.4962,126.52056 L 884.04125,127.81384 L 883.87959,132.17867 L 882.75631,138.43803 L 880.29406,137.28208 L 879.80907,134.21052 L 875.92922,133.07889 L 875.6059,130.33065 L 868.33115,106.88983 L 863.63257,92.250088 L 865.05311,92.131923 L 866.5669,92.541822 L 866.5669,89.955254 L 867.8752,85.458798 L 870.46177,80.770645 L 871.91672,76.729133 L 869.97679,74.304226 L 869.97679,68.322789 L 870.78509,67.352826 L 871.5934,64.604598 L 871.43174,63.149654 L 871.27007,58.29984 L 873.04834,53.450026 L 875.95823,44.5587 L 878.05981,40.355528 L 879.3531,40.355528 L 880.64638,40.517188 L 880.64638,41.648811 L 881.93967,43.912058 L 884.68789,44.5587 L 885.4962,43.750397 L 885.4962,42.780435 L 889.53771,39.870546 L 891.31597,38.092281 L 892.77092,38.253942 L 898.75235,40.678849 L 900.69228,41.648811 L 909.74527,71.555998 L 915.7267,71.555998 L 916.53501,73.495924 L 916.69667,78.345738 L 919.60655,80.608984 L 920.41486,80.608984 L 920.57652,80.124003 L 920.09154,78.99238 L 922.83976,78.830719 z M 901.90801,108.97825 L 903.44379,107.44247 L 904.81791,108.49327 L 905.38372,110.91819 L 903.68628,111.80732 L 901.90801,108.97825 z M 908.61694,103.07763 L 910.39521,104.93673 C 910.39521,104.93673 911.6885,105.01755 911.6885,104.69423 C 911.6885,104.37091 911.93099,102.67347 911.93099,102.67347 L 912.82013,101.86517 L 912.01182,100.08689 L 909.99106,100.81437 L 908.61694,103.07763 z",
    "channels": [
      {
        "name": "Bangor, ME",
        "channels": [
          "FOX: WFVX-LP"
        ]
      },
      {
        "name": "Portland-Auburn, ME",
        "channels": [
          "CBS: WGME",
          "FOX: WPFO",
          "NBC: WCSH"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Maryland",
    "abbreviation": "MD",
    "textX": 913,
    "textY": 295,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 190,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Maryland<\/h2><ul><li><h3 class='underlined'>Baltimore, MD<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WMAR<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WJZ<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WBFF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBAL<\/li><\/ul><\/li><li><h3 class='underlined'>Washington DC-Hagerstown, MD<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WJLA<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WUSA<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTTG<\/li><li>my20dc: WDCA<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WRC<\/li><\/ul><\/li><\/ul>",
    "path": "M 839.79175,252.41476 L 833.7832,253.6186 L 828.6403,253.73606 L 826.79674,246.81373 L 824.87193,237.64441 L 822.29931,231.45596 L 821.01093,227.05763 L 813.50491,228.67999 L 798.6287,231.50331 L 761.17727,239.05421 L 762.30857,244.06587 L 763.27853,249.72398 L 763.60185,249.40066 L 765.70345,246.97576 L 767.96669,244.3581 L 770.3916,243.74254 L 771.84656,242.28759 L 773.62482,239.70102 L 774.9181,240.34767 L 777.82799,240.02434 L 780.41457,237.92276 L 782.42146,236.46949 L 784.26669,235.98451 L 785.91104,237.11446 L 788.82093,238.5694 L 790.76085,240.34767 L 791.97331,241.88345 L 796.09566,243.58088 L 796.09566,246.49077 L 801.59212,247.78406 L 802.73656,248.32604 L 804.14846,246.29772 L 807.03043,248.26788 L 805.75226,250.74981 L 804.98699,254.73547 L 803.20873,257.32204 L 803.20873,259.42363 L 803.85537,261.2019 L 808.91932,262.55759 L 813.23042,262.49587 L 816.30196,263.46584 L 818.40355,263.78916 L 819.37351,261.68757 L 817.91857,259.58599 L 817.91857,257.80772 L 815.49366,255.70613 L 813.39208,250.20968 L 814.68536,244.87488 L 814.5237,242.7733 L 813.23042,241.48001 C 813.23042,241.48001 814.68536,239.86341 814.68536,239.21677 C 814.68536,238.57012 815.17034,237.11518 815.17034,237.11518 L 817.11027,235.8219 L 819.05019,234.20529 L 819.53517,235.17526 L 818.08023,236.79186 L 816.78695,240.51005 L 817.11027,241.64167 L 818.88853,241.96499 L 819.37351,247.46145 L 817.27193,248.43141 L 817.59525,251.98794 L 818.08023,251.82628 L 819.21185,249.88636 L 820.82846,251.66462 L 819.21185,252.95791 L 818.88853,256.35278 L 821.4751,259.74765 L 825.35495,260.23263 L 826.97156,259.42433 L 830.20811,263.60726 L 831.56646,264.14356 L 838.22013,261.34661 L 840.22771,257.32274 L 839.79175,252.41476 z M 823.82217,261.44348 L 824.95379,263.94923 L 825.11545,265.7275 L 826.24708,267.5866 C 826.24708,267.5866 827.13622,266.69746 827.13622,266.37414 C 827.13622,266.05082 826.40875,263.30258 826.40875,263.30258 L 825.68127,260.95849 L 823.82217,261.44348 z M 899,285 L 929,285 L 929,305 L 899,305 z",
    "linePath": "M 899,294 L 818,240 z",
    "channels": [
      {
        "name": "Baltimore, MD",
        "channels": [
          "ABC: WMAR",
          "CBS: WJZ",
          "FOX: WBFF",
          "NBC: WBAL"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Massachusetts",
    "abbreviation": "MA",
    "textX": 913,
    "textY": 139,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 30,
    "textPosY": 290,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Massachusetts<\/h2><ul><li><h3 class='underlined'>Boston, MA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WCVB<\/li><li><img class='abcLogo' src='./images/ABC.png' /> WMUR<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBZ<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFXT<\/li><li>My38: WSBK<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBTS<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WNEU<\/li><\/ul><\/li><li><h3 class='underlined'>Providence, RI-New Bedford, MA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WLNE<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WJAR<\/li><\/ul><\/li><\/ul>",
    "path": "M 899.62349,173.25394 L 901.79541,172.56806 L 902.25267,170.85339 L 903.28147,170.9677 L 904.31027,173.25394 L 903.05285,173.71118 L 899.16625,173.8255 L 899.62349,173.25394 z M 890.24995,174.05412 L 892.53617,171.42495 L 894.13654,171.42495 L 895.96553,172.911 L 893.56499,173.9398 L 891.39307,174.9686 L 890.24995,174.05412 z M 855.45082,152.06593 L 873.09769,147.42525 L 875.36095,146.77861 L 877.27503,143.9829 L 881.0118,142.31959 L 883.90104,146.73243 L 881.47613,151.90557 L 881.15281,153.36051 L 883.09274,155.94708 L 884.22436,155.13878 L 886.00263,155.13878 L 888.26587,157.72534 L 892.14573,163.70678 L 895.70226,164.19176 L 897.9655,163.2218 L 899.74377,161.44353 L 898.93546,158.69531 L 896.83388,157.0787 L 895.37893,157.887 L 894.40897,156.59372 L 894.89395,156.10874 L 896.99554,155.94708 L 898.7738,156.75538 L 900.71373,159.18029 L 901.68369,162.09018 L 902.00701,164.51508 L 897.80384,165.97003 L 893.92399,167.90995 L 890.04414,172.43645 L 888.10421,173.89139 L 888.10421,172.92143 L 890.52912,171.46648 L 891.0141,169.68822 L 890.2058,166.61667 L 887.29591,168.07161 L 886.48761,169.52656 L 886.97259,171.7898 L 884.90626,172.79023 L 882.15906,168.2631 L 878.76418,163.89826 L 876.69368,162.08579 L 870.16041,163.96199 L 865.06808,165.01278 L 844.39292,169.60499 L 843.72516,164.83714 L 844.3718,154.24837 L 848.66107,153.35923 L 855.45082,152.06593 z M 899,128 L 929,128 L 929,148 L 899,148 z",
    "linePath": "M 899,136 L 885,150 z",
    "channels": [
      {
        "name": "Boston, MA",
        "channels": [
          "ABC: WCVB",
          "ABC: WMUR",
          "CBS: WBZ",
          "FOX: WFXT",
          "My38: WSBK",
          "NBC: WBTS",
          "Telemundo: WNEU"
        ]
      },
      {
        "name": "Providence, RI-New Bedford, MA",
        "channels": [
          "ABC: WLNE",
          "NBC: WJAR"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Michigan",
    "abbreviation": "MI",
    "textX": 658,
    "textY": 174,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 160,
    "textPosY": 300,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Michigan<\/h2><ul><li><h3 class='underlined'>Detroit, MI<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WXYZ<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WWJ<\/li><li>CW: WKBD<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WJBK<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WDIV<\/li><\/ul><\/li><li><h3 class='underlined'>Flint-Saginaw-Bay City, MI<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WNEM<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WSMH<\/li><\/ul><\/li><li><h3 class='underlined'>Grand Rapids-Kalamazoo, MI<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WZZM<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WWMT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WXMI<\/li><\/ul><\/li><\/ul>",
    "path": "M 697.86007,177.23689 L 694.62686,168.9922 L 692.36361,159.93922 L 689.93871,156.70601 L 687.35214,154.92774 L 685.73554,156.05937 L 681.85568,157.83763 L 679.91576,162.84911 L 677.16753,166.5673 L 676.03591,167.21394 L 674.58096,166.5673 C 674.58096,166.5673 671.9944,165.11235 672.15606,164.46571 C 672.31772,163.81907 672.64104,159.45424 672.64104,159.45424 L 676.03591,158.16095 L 676.84421,154.76608 L 677.49085,152.17952 L 679.91576,150.56291 L 679.59244,140.53996 L 677.97583,138.27672 L 676.68255,137.46841 L 675.87425,135.36683 L 676.68255,134.55853 L 678.29915,134.88185 L 678.46081,133.26524 L 676.03591,131.00199 L 674.74262,128.41543 L 672.15606,128.41543 L 667.62956,126.96048 L 662.13311,123.56561 L 659.38488,123.56561 L 658.73824,124.21226 L 657.76827,123.72727 L 654.69673,121.46403 L 651.78684,123.24229 L 648.87695,125.50554 L 649.20027,129.06207 L 650.17023,129.38539 L 652.27182,129.87037 L 652.7568,130.67867 L 650.17023,131.48698 L 647.58367,131.8103 L 646.12872,133.58856 L 645.8054,135.69015 L 646.12872,137.30675 L 646.45204,142.80321 L 642.89551,144.9048 L 642.24887,144.74313 L 642.24887,140.53996 L 643.54215,138.11506 L 644.1888,135.69015 L 643.38049,134.88185 L 641.44057,135.69015 L 640.4706,139.89332 L 637.72238,141.02494 L 635.94411,142.96487 L 635.78245,143.93483 L 636.42909,144.74313 L 635.78245,147.3297 L 633.5192,147.81468 L 633.5192,148.94631 L 634.32751,151.37121 L 633.19588,157.51431 L 631.57928,161.55582 L 632.22592,166.24398 L 632.7109,167.3756 L 631.9026,169.80051 L 631.57928,170.60881 L 631.25596,173.35704 L 634.81249,179.33847 L 637.72238,185.80489 L 639.17732,190.65471 L 638.36902,195.34286 L 637.39906,201.3243 L 634.97415,206.49743 L 634.65083,209.24566 L 631.39196,212.33081 L 635.80057,212.16876 L 657.21906,209.90551 L 664.4969,208.91845 L 664.59327,210.5848 L 671.44521,209.37234 L 681.74329,207.86921 L 685.59749,207.4083 L 685.73554,206.82075 L 685.8972,205.36581 L 687.99878,201.64762 L 689.99934,199.90977 L 689.77705,194.85788 L 691.37404,193.26089 L 692.46466,192.91795 L 692.68694,189.36142 L 694.22271,186.3303 L 695.2735,186.93652 L 695.43516,187.58316 L 696.24347,187.74482 L 698.18339,186.77486 L 697.86007,177.23689 z M 581.61931,82.059006 L 583.4483,80.001402 L 585.62022,79.201221 L 590.99286,75.314624 L 593.27908,74.743065 L 593.73634,75.200319 L 588.59232,80.344339 L 585.27728,82.287628 L 583.21967,83.202124 L 581.61931,82.059006 z M 667.79369,114.18719 L 668.44033,116.69293 L 671.67355,116.85459 L 672.96684,115.64213 C 672.96684,115.64213 672.88601,114.18719 672.56269,114.02552 C 672.23936,113.86386 670.94608,112.16642 670.94608,112.16642 L 668.76366,112.40891 L 667.14704,112.57057 L 666.82372,113.7022 L 667.79369,114.18719 z M 567.49209,111.21318 L 568.20837,110.63278 L 570.9566,109.82447 L 574.51313,107.56123 L 574.51313,106.59126 L 575.15978,105.94462 L 581.14121,104.97466 L 583.56612,103.03473 L 587.93095,100.93315 L 588.09261,99.639864 L 590.03254,96.729975 L 591.8108,95.921673 L 593.10409,94.143408 L 595.36733,91.880161 L 599.73217,89.455254 L 604.42032,88.970273 L 605.55194,90.101896 L 605.22862,91.071859 L 601.51043,92.041822 L 600.05549,95.113371 L 597.79224,95.921673 L 597.30726,98.34658 L 594.88235,101.57979 L 594.55903,104.16636 L 595.36733,104.65134 L 596.3373,103.51972 L 599.89383,100.60983 L 601.18711,101.90311 L 603.45036,101.90311 L 606.68357,102.87307 L 608.13851,104.0047 L 609.59345,107.07625 L 612.34168,109.82447 L 616.22153,109.66281 L 617.67648,108.69285 L 619.29308,109.98613 L 620.90969,110.47112 L 622.20297,109.66281 L 623.33459,109.66281 L 624.9512,108.69285 L 628.99271,105.13632 L 632.38758,104.0047 L 639.01566,103.68138 L 643.54215,101.74145 L 646.12872,100.44817 L 647.58367,100.60983 L 647.58367,106.26794 L 648.06865,106.59126 L 650.97853,107.39957 L 652.91846,106.91458 L 659.06156,105.29798 L 660.19318,104.16636 L 661.64813,104.65134 L 661.64813,111.60274 L 664.88134,114.67429 L 666.17462,115.32093 L 667.4679,116.29089 L 666.17462,116.61421 L 665.36632,116.29089 L 661.64813,115.80591 L 659.54654,116.45255 L 657.28329,116.29089 L 654.05008,117.74584 L 652.27182,117.74584 L 646.45204,116.45255 L 641.27891,116.61421 L 639.33898,119.20078 L 632.38758,119.84742 L 629.96267,120.65572 L 628.83105,123.72727 L 627.53777,124.8589 L 627.05279,124.69724 L 625.59784,123.08063 L 621.07135,125.50554 L 620.42471,125.50554 L 619.29308,123.88893 L 618.48478,124.05059 L 616.54486,128.41543 L 615.57489,132.45694 L 612.39377,139.45774 L 611.21701,138.42347 L 609.84527,137.39215 L 607.90449,127.10413 L 604.36001,125.73408 L 602.30743,123.44785 L 590.18707,120.70437 L 587.3318,119.67473 L 579.10138,117.50199 L 571.21139,116.35887 L 567.49209,111.21318 z",
    "channels": [
      {
        "name": "Detroit, MI",
        "channels": [
          "ABC: WXYZ",
          "CBS: WWJ",
          "CW: WKBD",
          "FOX: WJBK",
          "NBC: WDIV"
        ]
      },
      {
        "name": "Flint-Saginaw-Bay City, MI",
        "channels": [
          "CBS: WNEM",
          "FOX: WSMH"
        ]
      },
      {
        "name": "Grand Rapids-Kalamazoo, MI",
        "channels": [
          "ABC: WZZM",
          "CBS: WWMT",
          "FOX: WXMI"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Minnesota",
    "abbreviation": "MN",
    "textX": 505,
    "textY": 127,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 140,
    "textPosY": 220,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Minnesota<\/h2><ul><li><h3 class='underlined'>Minneapolis-St. Paul, MN<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KSTP<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WCCO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KMSP-TV<\/li><li>My29: WFTC<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KARE<\/li><\/ul><\/li><\/ul>",
    "path": "M 475.23781,128.82439 L 474.78056,120.36535 L 472.95158,113.04943 L 471.1226,99.560705 L 470.66535,89.729927 L 468.83637,86.300584 L 467.23601,81.270889 L 467.23601,70.982869 L 467.92187,67.096282 L 466.10094,61.644615 L 496.23336,61.679886 L 496.55668,53.435202 L 497.20332,53.273541 L 499.46657,53.758523 L 501.40649,54.566825 L 502.21479,60.063281 L 503.66974,66.206379 L 505.28634,67.822984 L 510.13616,67.822984 L 510.45948,69.277928 L 516.76424,69.601249 L 516.76424,71.702835 L 521.61405,71.702835 L 521.93737,70.409551 L 523.06899,69.277928 L 525.33224,68.631286 L 526.62552,69.601249 L 529.53541,69.601249 L 533.41526,72.187816 L 538.75006,74.612723 L 541.17497,75.097705 L 541.65995,74.127742 L 543.11489,73.64276 L 543.59987,76.552649 L 546.18644,77.845933 L 546.67142,77.360951 L 547.96471,77.522612 L 547.96471,79.624198 L 550.55127,80.594161 L 553.62282,80.594161 L 555.23943,79.785858 L 558.47264,76.552649 L 561.0592,76.067668 L 561.86751,77.845933 L 562.35249,79.139216 L 563.32245,79.139216 L 564.29241,78.330914 L 573.18374,78.007593 L 574.962,81.079142 L 575.60865,81.079142 L 576.32226,79.994863 L 580.76217,79.624198 L 580.15007,81.903657 L 576.21135,83.740782 L 566.96557,87.80191 L 562.19083,89.808807 L 559.11928,92.395375 L 556.69437,95.951905 L 554.43113,99.831756 L 552.65286,100.64006 L 548.12637,105.65153 L 546.83308,105.81319 L 542.5053,108.57031 L 540.04242,111.77542 L 539.8138,114.96681 L 539.90816,123.01016 L 538.53212,124.69891 L 533.45058,128.45888 L 531.2205,134.44129 L 534.09225,136.675 L 534.77214,139.90198 L 532.9169,143.14091 L 533.08769,146.88893 L 533.45655,153.61933 L 536.4848,156.62132 L 539.8138,156.62132 L 541.70491,159.75392 L 545.08408,160.25719 L 548.94324,165.92866 L 556.03053,170.04541 L 558.17368,172.92053 L 558.84483,179.36004 L 477.63333,180.50483 L 477.29541,144.82798 L 476.83817,141.85589 L 472.72296,138.42655 L 471.57984,136.59757 L 471.57984,134.9972 L 473.63744,133.39685 L 475.00918,132.02511 L 475.23781,128.82439 z",
    "channels": [
      {
        "name": "Minneapolis-St. Paul, MN",
        "channels": [
          "ABC: KSTP",
          "CBS: WCCO",
          "FOX: KMSP-TV",
          "My29: WFTC",
          "NBC: KARE"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Mississippi",
    "abbreviation": "MS",
    "textX": 603,
    "textY": 410,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 50,
    "textPosY": 280,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Mississippi<\/h2><ul><li><h3 class='underlined'>Biloxi-Gulfport, MS<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WXXV<\/li><\/ul><\/li><li><h3 class='underlined'>Columbus-Tupelo, MS<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WLOV<\/li><\/ul><\/li><li><h3 class='underlined'>Jackson, MS<\/h3><\/li><li><ul><li><img class='nbcLogo' src='./images/NBC.png' /> WLBT<\/li><\/ul><\/li><\/ul>",
    "path": "M 631.55882,459.34458 L 631.30456,460.60073 L 626.13142,460.60073 L 624.67648,459.79243 L 622.57489,459.46911 L 615.78515,461.40903 L 614.00689,460.60073 L 611.42032,464.8039 L 610.31778,465.58192 L 609.19395,463.09394 L 608.05083,459.20735 L 604.6215,456.00664 L 605.7646,450.46209 L 605.07874,449.5476 L 603.24976,449.77622 L 595.33184,450.64959 L 570.78534,451.02296 L 570.0156,448.7976 L 570.88897,440.4208 L 574.00581,434.74799 L 579.23288,425.60309 L 578.78714,423.17049 L 580.024,422.51424 L 580.45987,420.59477 L 578.14239,418.51579 L 578.02727,416.37431 L 576.19155,412.25322 L 576.08255,406.29045 L 577.41008,403.80948 L 577.18678,400.39373 L 575.41729,397.31114 L 576.94371,395.82893 L 575.3731,393.32939 L 575.83035,391.67718 L 577.40775,385.15081 L 579.8937,383.11446 L 579.25203,380.74749 L 582.91,375.44496 L 585.74186,374.08854 L 585.52089,372.41338 L 585.23276,370.73228 L 588.10882,365.16461 L 590.45454,363.9331 L 590.60617,363.04009 L 627.94965,359.15892 L 628.13451,365.44225 L 628.29617,382.09331 L 627.48787,413.13216 L 627.32621,427.19665 L 630.07445,445.94929 L 631.55882,459.34458 z",
    "channels": [
      {
        "name": "Biloxi-Gulfport, MS",
        "channels": [
          "FOX: WXXV"
        ]
      },
      {
        "name": "Columbus-Tupelo, MS",
        "channels": [
          "FOX: WLOV"
        ]
      },
      {
        "name": "Jackson, MS",
        "channels": [
          "NBC: WLBT"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Missouri",
    "abbreviation": "MO",
    "textX": 540,
    "textY": 288,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 110,
    "textPosY": 40,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Missouri<\/h2><ul><li><h3 class='underlined'>Columbia-Jefferson City, MO<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KQFX-LP<\/li><\/ul><\/li><li><h3 class='underlined'>Kansas City, MO<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KMBC<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KCTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WDAF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSHB<\/li><\/ul><\/li><li><h3 class='underlined'>Paducah, KY-Cape Girardeau, MO<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KFVS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KBSI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPSD<\/li><\/ul><\/li><li><h3 class='underlined'>Springfield, MO<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KSPR<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KRBK<\/li><\/ul><\/li><li><h3 class='underlined'>St. Joseph, MO<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KNPN-LD<\/li><\/ul><\/li><li><h3 class='underlined'>St. Louis, MO<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KDNL<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KMOV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTVI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSDK<\/li><\/ul><\/li><\/ul>",
    "path": "M 558.44022,248.11316 L 555.92035,245.02591 L 554.77723,242.73968 L 490.42,245.14022 L 488.13374,245.25453 L 489.39117,247.76938 L 489.16255,250.0556 L 491.67739,253.94219 L 494.76379,258.0574 L 497.8502,260.80087 L 500.01143,261.02949 L 501.50816,261.94399 L 501.50816,264.91608 L 499.67919,266.51644 L 499.22193,268.80266 L 501.27954,272.23201 L 503.7944,275.2041 L 506.30924,277.03308 L 507.68097,288.69283 L 507.99511,324.76504 L 508.22373,329.45179 L 508.68097,334.8353 L 531.11396,333.96848 L 554.31999,333.28261 L 575.12465,332.4816 L 586.77939,332.2513 L 588.94879,335.6773 L 588.2646,338.9848 L 585.17735,341.38784 L 584.60496,343.22518 L 589.98345,343.68244 L 593.87841,342.99656 L 595.59559,337.50293 L 596.24701,331.64614 L 598.34504,329.09098 L 600.94107,327.60409 L 600.9925,324.55385 L 602.00852,322.61737 L 600.31429,320.0736 L 598.98336,321.05786 L 596.99074,318.83062 L 595.70571,314.07162 L 596.50672,311.55342 L 594.56259,308.12576 L 592.73195,303.54996 L 587.93254,302.75062 L 580.96374,297.15187 L 579.24488,293.03834 L 580.04423,289.83762 L 582.1035,283.77995 L 582.56242,280.91632 L 580.61328,279.88501 L 573.75794,279.08734 L 572.72997,277.37518 L 572.61817,273.14482 L 567.13123,269.71381 L 560.15572,261.94231 L 557.8695,254.62638 L 557.63921,250.40106 L 558.44022,248.11316 z",
    "channels": [
      {
        "name": "Columbia-Jefferson City, MO",
        "channels": [
          "FOX: KQFX-LP"
        ]
      },
      {
        "name": "Kansas City, MO",
        "channels": [
          "ABC: KMBC",
          "CBS: KCTV",
          "FOX: WDAF",
          "NBC: KSHB"
        ]
      },
      {
        "name": "Paducah, KY-Cape Girardeau, MO",
        "channels": [
          "CBS: KFVS",
          "FOX: KBSI",
          "NBC: WPSD"
        ]
      },
      {
        "name": "Springfield, MO",
        "channels": [
          "ABC: KSPR",
          "FOX: KRBK"
        ]
      },
      {
        "name": "St. Joseph, MO",
        "channels": [
          "FOX: KNPN-LD"
        ]
      },
      {
        "name": "St. Louis, MO",
        "channels": [
          "ABC: KDNL",
          "CBS: KMOV",
          "FOX: KTVI",
          "NBC: KSDK"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Montana",
    "abbreviation": "MT",
    "textX": 287,
    "textY": 90,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 110,
    "textPosY": 40,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Montana<\/h2><ul><li><h3 class='underlined'>Butte-Bozeman, MT<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KWYB-DT<\/li><\/ul><\/li><li><h3 class='underlined'>Great Falls, MT<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFBB-DT<\/li><\/ul><\/li><li><h3 class='underlined'>Missoula, MT<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KTMF-DT<\/li><\/ul><\/li><\/ul>",
    "path": "M 369.20952,56.969133 L 338.5352,54.1613 L 309.27465,50.60477 L 280.01411,46.563258 L 247.68201,41.228463 L 229.25272,37.833593 L 196.52907,30.900857 L 192.05005,52.248389 L 195.47939,59.79293 L 194.10765,64.365382 L 195.93663,68.937833 L 199.13736,70.309572 L 203.75818,81.079025 L 206.45328,84.255548 L 206.91052,85.398666 L 210.33986,86.541784 L 210.79711,88.599377 L 203.70981,106.20333 L 203.70981,108.71818 L 206.22466,111.91889 L 207.13914,111.91889 L 211.94021,108.9468 L 212.62609,107.80368 L 214.22645,108.48955 L 213.99782,113.74787 L 216.7413,126.32212 L 219.71339,128.83696 L 220.62787,129.52283 L 222.45686,131.80905 L 221.99961,135.2384 L 222.68548,138.66773 L 223.8286,139.58223 L 226.11482,137.296 L 228.85829,137.296 L 232.05901,138.89636 L 234.57386,137.98187 L 238.68907,137.98187 L 242.34702,139.58223 L 245.0905,139.12498 L 245.54774,136.15288 L 248.51983,135.46702 L 249.89157,136.83876 L 250.34882,140.03947 L 251.77469,140.87411 L 253.66164,129.83937 L 360.40731,143.26829 L 369.20952,56.969133 z",
    "channels": [
      {
        "name": "Butte-Bozeman, MT",
        "channels": [
          "FOX: KWYB-DT"
        ]
      },
      {
        "name": "Great Falls, MT",
        "channels": [
          "FOX: KFBB-DT"
        ]
      },
      {
        "name": "Missoula, MT",
        "channels": [
          "FOX: KTMF-DT"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Nebraska",
    "abbreviation": "NE",
    "textX": 424,
    "textY": 226,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 200,
    "textPosY": 160,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Nebraska<\/h2><ul><li><h3 class='underlined'>Omaha, NE<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KMTV<\/li><\/ul><\/li><\/ul>",
    "path": "M 486.09787,240.70058 L 489.32848,247.72049 L 489.19985,250.02301 L 492.65907,255.51689 L 495.37836,258.66923 L 490.32888,258.66923 L 446.84632,257.73055 L 406.05946,256.84025 L 383.80724,256.05638 L 384.88001,234.72853 L 352.56177,231.80828 L 356.9056,187.79842 L 372.45193,188.82723 L 392.57072,189.97033 L 410.40329,191.11345 L 434.18005,192.25656 L 444.92531,191.79932 L 446.98291,194.08554 L 451.78399,197.05764 L 452.9271,197.97213 L 457.27093,196.60039 L 461.15752,196.14315 L 463.90099,195.91452 L 465.72997,197.28626 L 469.7874,198.88662 L 472.75949,200.48698 L 473.21674,202.08734 L 474.13123,204.14494 L 475.96021,204.14494 L 476.75819,204.19111 L 477.65242,208.87293 L 480.57268,217.34085 L 481.14521,221.09756 L 483.6687,224.87181 L 484.23829,229.98595 L 485.84553,234.22632 L 486.09787,240.70058 z",
    "channels": [
      {
        "name": "Omaha, NE",
        "channels": [
          "CBS: KMTV"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Nevada",
    "abbreviation": "NV",
    "textX": 140,
    "textY": 235,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 90,
    "textPosY": 140,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Nevada<\/h2><ul><li><h3 class='underlined'>Las Vegas, NV<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KTNV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSNV<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KBLR<\/li><\/ul><\/li><\/ul>",
    "path": "M 196.39273,185.57552 L 172.75382,314.39827 L 170.92158,314.74742 L 169.34882,317.1536 L 166.97588,317.16429 L 165.50393,314.42082 L 162.88546,314.0424 L 162.11454,312.93477 L 161.07671,312.88073 L 158.29834,314.52502 L 157.98808,321.3105 L 157.62599,327.08767 L 157.27742,335.68048 L 155.83032,337.76964 L 153.3914,336.69561 L 84.311514,232.49442 L 103.30063,164.90951 L 196.39273,185.57552 z",
    "channels": [
      {
        "name": "Las Vegas, NV",
        "channels": [
          "ABC: KTNV",
          "NBC: KSNV",
          "Telemundo: KBLR"
        ]
      }
    ]
  },
  {
    "enable": false,
    "name": "New Hampshire",
    "abbreviation": "NH",
    "textX": 845,
    "textY": 70,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 0,
    "textPosY": 300,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>New Hampshire<\/h2>",
    "path": "M 880.79902,142.42476 L 881.66802,141.34826 L 882.75824,138.05724 L 880.21516,137.14377 L 879.73017,134.07221 L 875.85032,132.94059 L 875.527,130.19235 L 868.25225,106.75153 L 863.65083,92.208542 L 862.75375,92.203482 L 862.10711,93.820087 L 861.46047,93.335106 L 860.4905,92.365143 L 859.03556,94.305068 L 858.98709,99.337122 L 859.29874,105.00434 L 861.23866,107.75258 L 861.23866,111.7941 L 857.52046,116.85688 L 854.93389,117.98852 L 854.93389,119.12014 L 856.06552,120.89841 L 856.06552,129.46643 L 855.25721,138.6811 L 855.09555,143.53092 L 856.06552,144.82422 L 855.90386,149.35071 L 855.41887,151.12899 L 856.38768,151.83821 L 873.17535,147.41366 L 875.35022,146.81121 L 877.19379,144.03788 L 880.79902,142.42476 z M 830,60 L 860,60 L 860,80 L 830,80 z",
    "linePath": "M 840,80 L 861,94 z"
  },
  {
    "enable": false,
    "name": "New Jersey",
    "abbreviation": "NJ",
    "textX": 913,
    "textY": 246,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 60,
    "textPosY": 280,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>New Jersey<\/h2>",
    "path": "M 829.67942,188.46016 L 827.35687,191.19443 L 827.35687,194.26599 L 825.41693,197.33754 L 825.25527,198.95416 L 826.54857,200.24744 L 826.38691,202.67236 L 824.12365,203.80398 L 824.93195,206.55221 L 825.09361,207.68384 L 827.84185,208.00716 L 828.81181,210.59373 L 832.36835,213.01865 L 834.79326,214.63525 L 834.79326,215.44356 L 831.81005,218.14012 L 830.19344,220.40336 L 828.73849,223.1516 L 826.47524,224.44488 L 826.01279,226.04736 L 825.77029,227.25982 L 825.16106,229.86656 L 826.25333,232.11075 L 829.48654,235.02064 L 834.33635,237.28389 L 838.37786,237.93053 L 838.53952,239.38547 L 837.73122,240.35543 L 838.05454,243.10366 L 838.86284,243.10366 L 840.96443,240.67876 L 841.77273,235.82894 L 844.52096,231.78743 L 847.59251,225.32101 L 848.72413,219.82456 L 848.07749,218.69293 L 847.91583,209.31662 L 846.29922,205.92176 L 845.1676,206.73006 L 842.41937,207.05338 L 841.93439,206.5684 L 843.06602,205.59843 L 845.1676,203.65851 L 845.23066,202.56468 L 844.84627,199.13084 L 845.41964,196.3826 L 845.30217,194.41359 L 842.49463,192.66324 L 837.40249,191.48748 L 833.26505,190.10585 L 829.67942,188.46016 z M 899,235 L 929,235 L 929,255 L 899,255 z",
    "linePath": "M 899,242 L 849,218 z"
  },
  {
    "enable": true,
    "name": "New Mexico",
    "abbreviation": "NM",
    "textX": 304,
    "textY": 369,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 10,
    "textPosY": 60,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>New Mexico<\/h2><ul><li><h3 class='underlined'>Albuquerque-Santa Fe, NM<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KOAT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KRQE-DT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KOB<\/li><\/ul><\/li><\/ul>",
    "path": "M 288.15255,424.01315 L 287.37714,419.26505 L 296.02092,419.79045 L 326.19268,422.73635 L 353.46084,424.42624 L 355.67611,405.71877 L 359.53347,349.8428 L 361.27115,330.45357 L 362.84285,330.58213 L 363.66825,319.41874 L 259.6638,308.78279 L 242.16645,429.2176 L 257.62712,431.20675 L 258.9204,421.1838 L 288.15255,424.01315 z",
    "channels": [
      {
        "name": "Albuquerque-Santa Fe, NM",
        "channels": [
          "ABC: KOAT",
          "FOX: KRQE-DT",
          "NBC: KOB"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "New York",
    "abbreviation": "NY",
    "textX": 816,
    "textY": 151,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 30,
    "textPosY": 220,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>New York<\/h2><ul><li><h3 class='underlined'>Albany-Schenectady-Troy, NY<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WRGB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WNYT<\/li><\/ul><\/li><li><h3 class='underlined'>Buffalo, NY<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WKBW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WUTV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WGRZ<\/li><\/ul><\/li><li><h3 class='underlined'>New York, NY<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WABC-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WCBS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WNYW<\/li><li><img class='myNetworkLogo' src='./images/MyNetwork.png' /> WWOR-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WNBC<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WNJU<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WXTV<\/li><li>WLNY: WLNY<\/li><\/ul><\/li><li><h3 class='underlined'>Rochester, NY<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WUHF<\/li><\/ul><\/li><li><h3 class='underlined'>Syracuse, NY<\/h3><\/li><li><ul><li><img class='nbcLogo' src='./images/NBC.png' /> WSTM<\/li><\/ul><\/li><\/ul>",
    "path": "M 830.37944,188.7456 L 829.24781,187.77564 L 826.66123,187.61398 L 824.39799,185.67406 L 822.76738,179.54493 L 819.30892,179.63547 L 816.86521,176.92727 L 797.47989,181.30921 L 754.47811,190.0389 L 746.94846,191.26689 L 746.2103,184.79855 L 747.6384,183.67317 L 748.93168,182.54155 L 749.90165,180.92494 L 751.67991,179.79332 L 753.61984,178.01505 L 754.10482,176.39845 L 756.2064,173.65022 L 757.33803,172.68026 L 757.17637,171.71029 L 755.88308,168.63875 L 754.10482,168.47709 L 752.16489,162.33399 L 755.07478,160.55572 L 759.43961,159.10078 L 763.48113,157.80749 L 766.71434,157.32251 L 773.01909,157.16085 L 774.95902,158.45414 L 776.57562,158.6158 L 778.67721,157.32251 L 781.26378,156.19089 L 786.43691,155.70591 L 788.5385,153.92764 L 790.31676,150.69443 L 791.93337,148.75451 L 794.03495,148.75451 L 795.97488,147.62288 L 796.13654,145.35964 L 794.6816,143.25805 L 794.35828,141.80311 L 795.4899,139.70152 L 795.4899,138.24658 L 793.71163,138.24658 L 791.93337,137.43828 L 791.12507,136.30665 L 790.96341,133.72008 L 796.78318,128.22363 L 797.42982,127.41533 L 798.88477,124.50544 L 801.79466,119.97894 L 804.54289,116.26075 L 806.64447,113.83585 L 809.05957,112.01024 L 812.14093,110.7643 L 817.63738,109.47101 L 820.87059,109.63267 L 825.39709,108.17773 L 832.96228,106.10656 L 833.48207,111.08623 L 835.90699,117.55267 L 836.71529,122.72582 L 835.74533,126.60568 L 838.3319,131.13218 L 839.1402,133.23377 L 838.3319,136.14367 L 841.2418,137.43695 L 841.88844,137.76027 L 844.96,148.75321 L 844.42371,153.81288 L 843.93873,164.64415 L 844.74703,170.14062 L 845.55533,173.69716 L 847.01028,180.9719 L 847.01028,189.05494 L 845.87865,191.31819 L 847.71798,193.31098 L 848.51453,194.9894 L 846.57461,196.76767 L 846.89793,198.06095 L 848.19121,197.73763 L 849.64616,196.44435 L 851.9094,193.85778 L 853.04103,193.21114 L 854.65763,193.85778 L 856.92088,194.01944 L 864.84224,190.13959 L 867.75213,187.39136 L 869.04541,185.93642 L 873.24858,187.55302 L 869.85371,191.10955 L 865.97386,194.01944 L 858.8608,199.35423 L 856.27424,200.3242 L 850.45446,202.26412 L 846.41295,203.39575 L 845.23821,202.86282 L 844.99419,199.17429 L 845.47917,196.42605 L 845.31751,194.32447 L 842.504,192.62547 L 837.9775,191.6555 L 834.09764,190.52388 L 830.37944,188.7456 z",
    "channels": [
      {
        "name": "Albany-Schenectady-Troy, NY",
        "channels": [
          "CBS: WRGB",
          "NBC: WNYT"
        ]
      },
      {
        "name": "Buffalo, NY",
        "channels": [
          "ABC: WKBW",
          "FOX: WUTV",
          "NBC: WGRZ"
        ]
      },
      {
        "name": "New York, NY",
        "channels": [
          "ABC: WABC-TV",
          "CBS: WCBS",
          "FOX: WNYW",
          "My9: WWOR-TV",
          "NBC: WNBC",
          "Telemundo: WNJU",
          "Univision: WXTV",
          "WLNY: WLNY"
        ]
      },
      {
        "name": "Rochester, NY",
        "channels": [
          "FOX: WUHF"
        ]
      },
      {
        "name": "Syracuse, NY",
        "channels": [
          "NBC: WSTM"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "North Carolina",
    "abbreviation": "NC",
    "textX": 787,
    "textY": 333,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 140,
    "textPosY": 190,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>North Carolina<\/h2><ul><li><h3 class='underlined'>Charlotte, NC<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSOC<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WJZY<\/li><li>MyTV12: WMYT-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCNC<\/li><\/ul><\/li><li><h3 class='underlined'>Greensboro-Winston-Salem, NC<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WXLV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WFMY<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WGHP<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WXII<\/li><\/ul><\/li><li><h3 class='underlined'>Greenville-New Bern, NC<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WYDO<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WITN<\/li><\/ul><\/li><li><h3 class='underlined'>Greenville-Spartanburg, SC-Asheville, NC<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WLOS<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WYFF<\/li><\/ul><\/li><li><h3 class='underlined'>Raleigh-Durham, NC<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WTVD-TV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WRAZ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WRAL<\/li><\/ul><\/li><\/ul>",
    "path": "M 834.98153,294.31554 L 837.06653,299.23289 L 840.62306,305.69931 L 843.04796,308.12422 L 843.6946,310.38747 L 841.2697,310.54913 L 842.078,311.19577 L 841.75468,315.39894 L 839.16811,316.69222 L 838.52147,318.79381 L 837.22819,321.7037 L 833.50999,323.3203 L 831.08509,322.99698 L 829.63014,322.83532 L 828.01354,321.54204 L 828.33686,322.83532 L 828.33686,323.80529 L 830.27679,323.80529 L 831.08509,325.09857 L 829.14516,331.40333 L 833.34833,331.40333 L 833.99498,333.01993 L 836.25822,330.75669 L 837.55151,330.2717 L 835.61158,333.82823 L 832.54003,338.67805 L 831.24675,338.67805 L 830.11512,338.19307 L 827.3669,338.83971 L 822.19376,341.26462 L 815.72734,346.59941 L 812.33247,351.28756 L 810.39255,357.75398 L 809.90757,360.17889 L 805.21941,360.66387 L 799.76628,362.00053 L 789.81987,353.798 L 777.21033,346.19995 L 774.30044,345.39164 L 761.69091,346.84659 L 757.41445,347.59674 L 755.79785,344.36352 L 752.82749,342.24682 L 736.3381,342.7318 L 729.06336,343.5401 L 720.01037,348.06661 L 713.86726,350.65317 L 692.68971,353.23975 L 693.1898,349.18542 L 694.96807,347.73048 L 697.71631,347.08383 L 698.36295,343.36563 L 702.56613,340.61741 L 706.44598,339.16245 L 710.64917,335.60592 L 715.014,333.50433 L 715.66064,330.43277 L 719.5405,326.55292 L 720.18714,326.39126 C 720.18714,326.39126 720.18714,327.52289 720.99545,327.52289 C 721.80375,327.52289 722.93538,327.84621 722.93538,327.84621 L 725.19863,324.28967 L 727.30022,323.64302 L 729.56346,323.96635 L 731.18008,320.40982 L 734.08997,317.82324 L 734.57495,315.72165 L 734.76245,312.07346 L 739.03895,312.05094 L 746.23754,311.19515 L 761.99477,308.94272 L 777.13081,306.85615 L 798.77129,302.1368 L 818.75461,297.87823 L 829.93155,295.47242 L 834.98153,294.31554 z M 839.25199,327.52211 L 841.83857,325.01636 L 844.99095,322.42978 L 846.52673,321.78314 L 846.68839,319.76238 L 846.04175,313.61926 L 844.5868,311.27518 L 843.94015,309.41608 L 844.66763,309.17358 L 847.41587,314.67006 L 847.82002,319.11573 L 847.65836,322.51062 L 844.26348,324.04639 L 841.43441,326.47131 L 840.30279,327.68377 L 839.25199,327.52211 z",
    "channels": [
      {
        "name": "Charlotte, NC",
        "channels": [
          "ABC: WSOC",
          "CBS: WBTV",
          "FOX: WJZY",
          "MyTV12: WMYT-TV",
          "NBC: WCNC"
        ]
      },
      {
        "name": "Greensboro-Winston-Salem, NC",
        "channels": [
          "ABC: WXLV",
          "CBS: WFMY",
          "FOX: WGHP",
          "NBC: WXII"
        ]
      },
      {
        "name": "Greenville-New Bern, NC",
        "channels": [
          "FOX: WYDO",
          "NBC: WITN"
        ]
      },
      {
        "name": "Greenville-Spartanburg, SC-Asheville, NC",
        "channels": [
          "ABC: WLOS",
          "NBC: WYFF"
        ]
      },
      {
        "name": "Raleigh-Durham, NC",
        "channels": [
          "ABC: WTVD-TV",
          "FOX: WRAZ",
          "NBC: WRAL"
        ]
      }
    ]
  },
  {
    "enable": false,
    "name": "North Dakota",
    "abbreviation": "ND",
    "textX": 420,
    "textY": 97,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 100,
    "textPosY": 150,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>North Dakota<\/h2>",
    "path": "M 475.30528,128.91846 L 474.69037,120.48479 L 473.01342,113.66887 L 471.12193,100.64465 L 470.66469,89.657624 L 468.92523,86.580482 L 467.16862,81.386086 L 467.19987,70.941816 L 467.82323,67.117729 L 465.98913,61.649968 L 437.34688,61.085941 L 418.75593,60.439299 L 392.24361,59.146015 L 369.29727,57.012146 L 362.30403,124.18898 L 417.23627,127.53263 L 475.30528,128.91846 z"
  },
  {
    "enable": true,
    "name": "Ohio",
    "abbreviation": "OH",
    "textX": 700,
    // "textY": 240,
    "textY": 250,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 80,
    "textPosY": 160,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Ohio<\/h2><ul><li><h3 class='underlined'>Cincinnati, OH<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WCPO<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WKRC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WXIX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WLWT<\/li><\/ul><\/li><li><h3 class='underlined'>Cleveland, OH<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WEWS<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WOIO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WJW<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WKYC<\/li><\/ul><\/li><li><h3 class='underlined'>Columbus, OH<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSYX<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WBNS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTTE<\/li><\/ul><\/li><li><h3 class='underlined'>Dayton, OH<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WKEF<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WHIO<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WRGT<\/li><\/ul><\/li><li><h3 class='underlined'>Lima, OH<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WLIO-DT<\/li><\/ul><\/li><li><h3 class='underlined'>Toledo, OH<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WTOL<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WNWO<\/li><\/ul><\/li><\/ul>",
    "path": "M 735.32497,193.32832 L 729.23143,197.38167 L 725.35158,199.64492 L 721.95671,203.36311 L 717.9152,207.24296 L 714.68199,208.05126 L 711.7721,208.53624 L 706.27564,211.12281 L 704.17406,211.28447 L 700.77919,208.21292 L 695.60605,208.85957 L 693.01949,207.40462 L 690.63842,206.05379 L 685.74585,206.7572 L 675.56123,208.37381 L 664.35436,210.55854 L 665.64765,225.18882 L 667.42592,238.92999 L 670.01248,262.37079 L 670.5783,267.20196 L 674.70065,267.07294 L 677.12556,266.26463 L 680.48936,267.76777 L 682.55985,272.1326 L 687.69879,272.1155 L 689.59053,274.2342 L 691.3517,274.1689 L 693.89009,272.82744 L 696.39426,273.19894 L 701.81554,273.68162 L 703.54251,271.54894 L 705.88816,270.25566 L 707.95865,269.57481 L 708.60529,272.32305 L 710.38357,273.29301 L 713.85926,275.63708 L 716.04168,275.55626 L 717.3748,275.06378 L 717.55951,272.30225 L 719.14487,270.84729 L 719.24403,266.05457 C 719.24403,266.05457 720.26799,261.94551 720.26799,261.94551 L 721.56726,261.34423 L 722.88861,262.49197 L 723.42676,264.18899 L 725.14589,263.15157 L 725.58487,261.69082 L 724.46818,259.78776 L 724.53447,257.47333 L 725.28347,256.40102 L 727.43623,253.09454 L 728.48645,251.5512 L 730.58804,252.03618 L 732.85129,250.41957 L 735.92284,247.0247 L 738.69433,242.94597 L 739.01466,237.89046 L 739.49964,232.87897 L 739.32286,227.57209 L 738.36802,224.67731 L 738.71926,223.48753 L 740.52365,221.73742 L 738.23486,212.69009 L 735.32497,193.32832 z",
    "channels": [
      {
        "name": "Cincinnati, OH",
        "channels": [
          "ABC: WCPO",
          "CBS: WKRC",
          "FOX: WXIX",
          "NBC: WLWT"
        ]
      },
      {
        "name": "Cleveland, OH",
        "channels": [
          "ABC: WEWS",
          "CBS: WOIO",
          "FOX: WJW",
          "NBC: WKYC"
        ]
      },
      {
        "name": "Columbus, OH",
        "channels": [
          "ABC: WSYX",
          "CBS: WBNS",
          "FOX: WTTE"
        ]
      },
      {
        "name": "Dayton, OH",
        "channels": [
          "ABC: WKEF",
          "CBS: WHIO",
          "FOX: WRGT"
        ]
      },
      {
        "name": "Lima, OH",
        "channels": [
          "FOX: WLIO-DT"
        ]
      },
      {
        "name": "Toledo, OH",
        "channels": [
          "CBS: WTOL",
          "NBC: WNWO"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Oklahoma",
    "abbreviation": "OK",
    // "textX": 460,
    "textX": 475,
    "textY": 358,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 20,
    "textPosY": 150,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Oklahoma<\/h2><ul><li><h3 class='underlined'>Oklahoma City, OK<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KOCO<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KWTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KOKH<\/li><\/ul><\/li><li><h3 class='underlined'>Tulsa, OK<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KTUL<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KOTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KOKI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KJRH<\/li><\/ul><\/li><\/ul>",
    "path": "M 380.34313,320.82146 L 363.65895,319.54815 L 362.77873,330.50058 L 383.24411,331.65746 L 415.29966,332.96106 L 412.96506,357.37971 L 412.50781,375.21228 L 412.73644,376.81264 L 417.08027,380.4706 L 419.13787,381.61371 L 419.82374,381.38509 L 420.50961,379.32748 L 421.88135,381.15647 L 423.93895,381.15647 L 423.93895,379.78473 L 426.68242,381.15647 L 426.22518,385.04305 L 430.34039,385.27167 L 432.85523,386.41479 L 436.97044,387.10066 L 439.48529,388.92964 L 441.77152,386.87204 L 445.20086,387.5579 L 447.71571,390.98724 L 448.63019,390.98724 L 448.63019,393.27347 L 450.91642,393.95933 L 453.20264,391.67311 L 455.03163,392.35897 L 457.54647,392.35897 L 458.46097,394.87383 L 464.76204,396.9528 L 466.13378,396.26694 L 467.96276,392.15173 L 469.10587,392.15173 L 470.24899,394.20933 L 474.3642,394.8952 L 478.02215,396.26694 L 480.99425,397.18143 L 482.82324,396.26694 L 483.5091,393.75209 L 487.85293,393.75209 L 489.91053,394.66658 L 492.654,392.60897 L 493.79712,392.60897 L 494.48299,394.20933 L 498.59819,394.20933 L 500.19855,392.15173 L 502.02754,392.60897 L 504.08514,395.12383 L 507.28585,396.9528 L 510.48658,397.8673 L 512.42766,398.98623 L 512.03856,361.76922 L 510.66681,350.79524 L 510.50635,341.9229 L 509.06646,335.38517 L 508.28826,328.20553 L 508.22012,324.38931 L 496.08328,324.70805 L 449.67324,324.25081 L 404.63433,322.19319 L 380.34313,320.82146 z",
    "channels": [
      {
        "name": "Oklahoma City, OK",
        "channels": [
          "ABC: KOCO",
          "CBS: KWTV",
          "FOX: KOKH"
        ]
      },
      {
        "name": "Tulsa, OK",
        "channels": [
          "ABC: KTUL",
          "CBS: KOTV",
          "FOX: KOKI",
          "NBC: KJRH"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Oregon",
    "abbreviation": "OR",
    "textX": 103,
    "textY": 123,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 0,
    "textPosY": 130,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Oregon<\/h2><ul><li><h3 class='underlined'>Bend, OR<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KFXO-LP<\/li><\/ul><\/li><li><h3 class='underlined'>Eugene, OR<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> KLSR<\/li><\/ul><\/li><li><h3 class='underlined'>Portland, OR<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KATU<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KGW<\/li><\/ul><\/li><\/ul>",
    "path": "M 148.72184,175.53153 L 157.57154,140.73002 L 158.62233,136.5005 L 160.9767,130.87727 L 160.36119,129.71439 L 157.84633,129.66821 L 156.56473,127.99751 L 157.02197,126.53344 L 157.52538,123.28656 L 161.98353,117.79961 L 163.81251,116.70046 L 164.95562,115.55735 L 166.44166,111.99172 L 170.48872,106.32232 L 174.05435,102.45992 L 174.28297,99.008606 L 171.01411,96.539924 L 169.2307,91.897299 L 156.56693,88.285329 L 141.47784,84.741679 L 126.04582,84.855985 L 125.58858,83.484256 L 120.10163,85.54186 L 115.64349,84.970301 L 113.24295,83.36994 L 111.98553,84.055815 L 107.29877,83.827183 L 105.5841,82.455454 L 100.32578,80.39785 L 99.525598,80.512166 L 95.181768,79.02611 L 93.238477,80.855093 L 87.065665,80.512166 L 81.121482,76.396957 L 81.807347,75.596777 L 82.035968,67.823604 L 79.749743,63.937027 L 75.634535,63.365468 L 74.94867,60.850621 L 72.594738,60.384056 L 66.796213,62.44284 L 64.532966,68.909258 L 61.299757,78.932207 L 58.066547,85.398626 L 53.055073,99.463087 L 46.588654,113.04256 L 38.505631,125.65208 L 36.565705,128.56197 L 35.757403,137.12997 L 36.143498,149.2102 L 148.72184,175.53153 z",
    "channels": [
      {
        "name": "Bend, OR",
        "channels": [
          "FOX: KFXO-LP"
        ]
      },
      {
        "name": "Eugene, OR",
        "channels": [
          "FOX: KLSR"
        ]
      },
      {
        "name": "Portland, OR",
        "channels": [
          "ABC: KATU",
          "NBC: KGW"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Pennsylvania",
    "abbreviation": "PA",
    "textX": 783,
    "textY": 210,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 180,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Pennsylvania<\/h2><ul><li><h3 class='underlined'>Harrisburg-Lancaster, PA<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WHP<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WPMT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WGAL<\/li><\/ul><\/li><li><h3 class='underlined'>Philadelphia, PA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WPVI-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KYW<\/li><li>CW: WPSG<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTXF-TV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCAU<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> WWSI<\/li><li><img class='uniLogo' src='./images/Univision.png' /> WUVP<\/li><\/ul><\/li><li><h3 class='underlined'>Pittsburgh, PA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WTAE<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KDKA<\/li><li>CW: WPCW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WPGH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPXI<\/li><\/ul><\/li><li><h3 class='underlined'>Wilkes Barre-Scranton, PA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WOLF<\/li><\/ul><\/li><\/ul>",
    "path": "M 825.1237,224.69205 L 826.43212,224.42105 L 828.76165,223.1678 L 829.97353,220.68473 L 831.59014,218.42148 L 834.82335,215.34992 L 834.82335,214.54162 L 832.39844,212.92502 L 828.8419,210.5001 L 827.87194,207.91353 L 825.1237,207.59021 L 824.96204,206.45858 L 824.15374,203.71035 L 826.417,202.57873 L 826.57866,200.15381 L 825.28536,198.86052 L 825.44702,197.24391 L 827.38696,194.17236 L 827.38696,191.1008 L 830.08459,188.45492 L 829.16431,187.77994 L 826.64023,187.58703 L 824.34574,185.64711 L 822.79582,179.53105 L 819.29124,179.63157 L 816.83601,176.92824 L 798.74502,181.12601 L 755.74324,189.8557 L 746.85189,191.31064 L 746.23122,184.78925 L 740.86869,189.8569 L 739.5754,190.34188 L 735.37311,193.35077 L 738.28387,212.48822 L 740.76553,222.21758 L 744.33733,241.47907 L 747.60664,240.84139 L 759.55022,239.33892 L 797.47685,231.67372 L 812.35306,228.8504 L 820.65341,227.22804 L 820.92052,226.98951 L 823.02212,225.37289 L 825.1237,224.69205 z",
    "channels": [
      {
        "name": "Harrisburg-Lancaster, PA",
        "channels": [
          "CBS: WHP",
          "FOX: WPMT",
          "NBC: WGAL"
        ]
      },
      {
        "name": "Philadelphia, PA",
        "channels": [
          "ABC: WPVI-TV",
          "CBS: KYW",
          "CW: WPSG",
          "FOX: WTXF-TV",
          "NBC: WCAU",
          "Telemundo: WWSI",
          "Univision: WUVP"
        ]
      },
      {
        "name": "Pittsburgh, PA",
        "channels": [
          "ABC: WTAE",
          "CBS: KDKA",
          "CW: WPCW",
          "FOX: WPGH",
          "NBC: WPXI"
        ]
      },
      {
        "name": "Wilkes Barre-Scranton, PA",
        "channels": [
          "FOX: WOLF"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Rhode Island",
    "abbreviation": "RI",
    "textX": 913,
    "textY": 196,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 140,
    "textPosY": 330,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Rhode Island<\/h2><ul><li><h3 class='underlined'>Providence, RI-New Bedford, MA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WLNE<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WJAR<\/li><\/ul><\/li><\/ul>",
    "path": "M 874.07001,178.89536 L 870.37422,163.93937 L 876.6435,162.09423 L 878.83463,164.02135 L 882.14112,168.342 L 884.82902,172.74409 L 881.82968,174.36888 L 880.5364,174.20722 L 879.40478,175.98549 L 876.97987,177.92541 L 874.07001,178.89536 z M 899,185 L 929,185 L 929,205 L 899,205 z",
    "linePath": "M 899,190 L 883,173 z",
    "channels": [
      {
        "name": "Providence, RI",
        "channels": [
          "ABC: WLNE",
          "NBC: WJAR"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "South Carolina",
    "abbreviation": "SC",
    "textX": 761,
    "textY": 373,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 160,
    "textPosY": 200,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>South Carolina<\/h2><ul><li><h3 class='underlined'>Charleston, SC<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WCSC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTAT<\/li><\/ul><\/li><li><h3 class='underlined'>Columbia, SC<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WLTX<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WIS<\/li><\/ul><\/li><li><h3 class='underlined'>Myrtle Beach-Florence, SC<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WFXB<\/li><\/ul><\/li><\/ul>",
    "path": "M 764.94328,408.16488 L 763.16622,409.13438 L 760.57965,407.84109 L 759.93301,405.7395 L 758.63973,402.18297 L 756.37647,400.08137 L 753.7899,399.43473 L 752.1733,394.58492 L 749.42506,388.60347 L 745.22189,386.66353 L 743.12029,384.72361 L 741.82701,382.13704 L 739.72542,380.1971 L 737.46217,378.90382 L 735.19892,375.99393 L 732.12737,373.73069 L 727.60086,371.95241 L 727.11588,370.49747 L 724.69098,367.58758 L 724.20599,366.13262 L 720.81111,360.95949 L 717.41624,361.12115 L 713.37472,358.69623 L 712.08144,357.40295 L 711.75812,355.62468 L 712.56642,353.68476 L 714.82967,352.71478 L 714.31885,350.4257 L 720.08695,348.08913 L 729.20245,343.50013 L 736.97718,342.69182 L 753.09158,342.26934 L 755.72983,344.14677 L 757.40893,347.50499 L 761.71128,346.89501 L 774.32081,345.44005 L 777.2307,346.24836 L 789.84024,353.84642 L 799.94832,361.9681 L 794.52715,367.42644 L 791.94058,373.56954 L 791.4556,379.8743 L 789.839,380.6826 L 788.70737,383.43083 L 786.28247,384.07747 L 784.18088,387.634 L 781.43265,390.38223 L 779.16941,393.7771 L 777.5528,394.5854 L 773.99627,397.98027 L 771.08638,398.14193 L 772.05635,401.37514 L 767.04487,406.8716 L 764.94328,408.16488 z",
    "channels": [
      {
        "name": "Charleston, SC",
        "channels": [
          "CBS: WCSC",
          "FOX: WTAT"
        ]
      },
      {
        "name": "Columbia, SC",
        "channels": [
          "CBS: WLTX",
          "NBC: WIS"
        ]
      },
      {
        "name": "Myrtle Beach-Florence, SC",
        "channels": [
          "FOX: WFXB"
        ]
      }
    ]
  },
  {
    "enable": false,
    "name": "South Dakota",
    "abbreviation": "SD",
    "textX": 420,
    "textY": 161,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 150,
    "textPosY": 150,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>South Dakota<\/h2>",
    "path": "M 476.44687,204.02465 L 476.39942,203.44378 L 473.50371,198.59834 L 475.36394,193.88623 L 476.85667,187.99969 L 474.0748,185.91998 L 473.68964,183.17652 L 474.48204,180.62217 L 477.67055,180.63738 L 477.54747,175.63124 L 477.21417,145.45699 L 476.59644,141.68941 L 472.52412,138.35848 L 471.54149,136.68152 L 471.47899,135.0727 L 473.50111,133.5433 L 475.03333,131.87763 L 475.27829,129.22084 L 417.0212,127.62049 L 362.22199,124.1714 L 356.89672,187.86259 L 371.48699,188.76639 L 391.43684,189.972 L 409.17989,190.90059 L 432.95665,192.20417 L 444.93935,191.77953 L 446.90565,194.02471 L 452.10029,197.27806 L 452.86418,198.00081 L 457.40562,196.548 L 463.94616,195.93309 L 465.62146,197.26936 L 469.82597,198.86549 L 472.77103,200.50132 L 473.17001,201.98513 L 474.2095,204.22601 L 476.44687,204.02465 z"
  },
  {
    "enable": true,
    "name": "Tennessee",
    "abbreviation": "TN",
    "textX": 656,
    // "textY": 339,
    "textY": 342,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 10,
    "textPosY": 310,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Tennessee<\/h2><ul><li><h3 class='underlined'>Chattanooga, TN<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WDEF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WRCB<\/li><\/ul><\/li><li><h3 class='underlined'>Knoxville, TN<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WVLT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WTNZ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WBIR<\/li><\/ul><\/li><li><h3 class='underlined'>Memphis, TN<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WHBQ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WMC<\/li><\/ul><\/li><li><h3 class='underlined'>Nashville, TN<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WTVF<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WZTV<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WSMV<\/li><\/ul><\/li><\/ul>",
    "path": "M 696.67788,318.25411 L 644.78479,323.2656 L 629.02523,325.04386 L 624.40403,325.55657 L 620.53568,325.52885 L 620.31471,329.62968 L 612.12933,329.89369 L 605.17792,330.54033 L 597.08709,330.41647 L 595.67331,337.48933 L 593.97708,342.96938 L 590.68391,345.72022 L 589.33517,350.10128 L 589.01185,352.68785 L 584.97033,354.95109 L 586.42527,358.50763 L 585.45531,362.87247 L 584.48693,363.66212 L 692.64548,353.25457 L 693.04875,349.29963 L 694.85948,347.80924 L 697.69363,347.05979 L 698.36556,343.34281 L 702.46416,340.63785 L 706.51109,339.14382 L 710.59467,335.57349 L 715.03076,333.54803 L 715.55202,330.48068 L 719.61662,326.49569 L 720.16742,326.38152 C 720.16742,326.38152 720.19867,327.51314 721.00697,327.51314 C 721.81527,327.51314 722.9469,327.86771 722.9469,327.86771 L 725.21015,324.27992 L 727.28049,323.63328 L 729.5556,323.92849 L 731.15391,320.39563 L 734.10916,317.75172 L 734.53084,315.81261 L 734.8398,312.10146 L 732.69325,311.90169 L 730.09157,313.93002 L 723.09826,313.95909 L 704.73897,316.34591 L 696.67788,318.25411 z",
    "channels": [
      {
        "name": "Chattanooga, TN",
        "channels": [
          "CBS: WDEF",
          "NBC: WRCB"
        ]
      },
      {
        "name": "Knoxville, TN",
        "channels": [
          "CBS: WVLT",
          "FOX: WTNZ",
          "NBC: WBIR"
        ]
      },
      {
        "name": "Memphis, TN",
        "channels": [
          "FOX: WHBQ",
          "NBC: WMC"
        ]
      },
      {
        "name": "Nashville, TN",
        "channels": [
          "CBS: WTVF",
          "FOX: WZTV",
          "NBC: WSMV"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Texas",
    "abbreviation": "TX",
    "textX": 429,
    "textY": 450,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 30,
    "textPosY": 150,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Texas<\/h2><ul><li><h3 class='underlined'>Austin, TX<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KVUE<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KEYE<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KTBC<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KAKW<\/li><\/ul><\/li><li><h3 class='underlined'>Dallas-Ft. Worth, TX<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WFAA<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KTVT<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KDFW-TV<\/li><li>KTXA: KTXA<\/li><li>My27: KDFI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KXAS<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KXTX<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KUVN<\/li><\/ul><\/li><li><h3 class='underlined'>El Paso, TX<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KDBC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KFOX<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTDO<\/li><\/ul><\/li><li><h3 class='underlined'>Harlingen-Brownsville, TX<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KGBT<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTLM<\/li><\/ul><\/li><li><h3 class='underlined'>Houston, TX<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KTRK-TV<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KHOU<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KRIV<\/li><li>my20: KTXH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KPRC<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KTMD<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KXLN<\/li><\/ul><\/li><li><h3 class='underlined'>San Antonio, TX<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KSAT<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KENS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KABB<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WOAI<\/li><li><img class='teleLogo' src='./images/Telemundo.png' /> KVDA<\/li><li><img class='uniLogo' src='./images/Univision.png' /> KWEX<\/li><\/ul><\/li><li><h3 class='underlined'>Waco-Temple-Bryan, TX<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KBTX<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KWTX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KWKT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KAGS-LP<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KCEN<\/li><\/ul><\/li><\/ul>",
    "path": "M 361.46423,330.57358 L 384.15502,331.65952 L 415.24771,332.80264 L 412.9131,356.25844 L 412.61634,374.41196 L 412.68448,376.49375 L 417.02831,380.31218 L 419.01496,381.75934 L 420.19917,381.19965 L 420.57254,379.38193 L 421.71286,381.18555 L 423.8245,381.22948 L 423.82183,379.78239 L 425.49177,380.74966 L 426.63047,381.15853 L 426.2712,385.12618 L 430.35939,385.21969 L 433.28471,386.41686 L 437.23945,386.94224 L 439.62083,389.02122 L 441.74493,386.94505 L 445.46987,387.55996 L 447.69078,390.7849 L 448.76574,391.10586 L 448.60527,393.07113 L 450.81888,393.86342 L 453.14903,391.80862 L 455.28205,392.42354 L 457.51143,392.45902 L 458.4445,394.89446 L 464.77259,397.00891 L 466.36564,396.24198 L 467.85511,392.06427 L 468.19583,392.06427 L 469.10232,392.14591 L 470.33137,394.21454 L 474.26125,394.87982 L 477.59825,396.0027 L 481.02388,397.19867 L 482.86446,396.22367 L 483.57822,393.70883 L 488.03144,393.75303 L 489.84018,394.68381 L 492.63943,392.5773 L 493.74307,392.6215 L 494.59411,394.22657 L 498.64883,394.22657 L 500.1677,392.19795 L 502.03507,392.60519 L 503.9811,395.00847 L 507.50167,397.05262 L 510.36043,397.86243 L 511.87405,398.66227 L 514.32075,400.65959 L 517.36379,399.3318 L 520.05488,400.47068 L 520.61869,406.57662 L 520.57893,416.27879 L 521.26479,425.8128 L 521.96697,429.41791 L 524.6423,433.83777 L 525.54048,438.7885 L 529.75643,444.32652 L 529.95245,447.47146 L 530.69882,448.2573 L 529.96875,456.63737 L 527.09665,461.64387 L 528.62962,463.79674 L 527.99954,466.13482 L 527.32997,473.53914 L 525.82565,476.87714 L 526.12053,480.37949 L 520.45565,481.96467 L 510.59436,486.49117 L 509.6244,488.43109 L 507.03783,490.37102 L 504.93625,491.82596 L 503.64296,492.63426 L 497.98485,497.96906 L 495.23662,500.07065 L 489.90182,503.30385 L 484.24371,505.72876 L 477.93895,509.12363 L 476.16069,510.57858 L 470.34091,514.13511 L 466.94604,514.78175 L 463.06619,520.2782 L 459.02468,520.60153 L 458.05471,522.54145 L 460.31796,524.48138 L 458.86301,529.97783 L 457.56973,534.50433 L 456.43811,538.38418 L 455.62981,542.91067 L 456.43811,545.33558 L 458.21637,552.28698 L 459.18634,558.43007 L 460.9646,561.1783 L 459.99464,562.63325 L 456.92309,564.57317 L 451.26497,560.69332 L 445.76852,559.5617 L 444.47523,560.04668 L 441.24202,559.40004 L 437.03885,556.32849 L 431.86572,555.19687 L 424.26767,551.802 L 422.16609,547.92214 L 420.8728,541.45573 L 417.6396,539.5158 L 416.99295,537.25255 L 417.6396,536.60591 L 417.96292,533.21104 L 416.66963,532.5644 L 416.02299,531.59444 L 417.31627,527.2296 L 415.69967,524.96636 L 412.46646,523.67307 L 409.07159,519.30824 L 405.51506,512.68016 L 401.31189,510.09359 L 401.47355,508.15367 L 396.13875,495.86747 L 395.33045,491.6643 L 393.55219,489.72438 L 393.39053,488.26943 L 387.40909,482.93464 L 384.82252,479.86309 L 384.82252,478.73146 L 382.23595,476.62988 L 375.44621,475.49825 L 368.00983,474.85161 L 364.93828,472.58837 L 360.41179,474.36663 L 356.85526,475.82158 L 354.59201,479.05478 L 353.62205,482.77298 L 349.25722,488.91607 L 346.83231,491.34098 L 344.24574,490.37102 L 342.46748,489.23939 L 340.52755,488.59275 L 336.6477,486.32951 L 336.6477,485.68286 L 334.86944,483.74294 L 329.6963,481.64135 L 322.25992,473.88165 L 319.99667,469.1935 L 319.99667,461.11047 L 316.76346,454.64405 L 316.27848,451.89583 L 314.66188,450.92586 L 313.53025,448.82428 L 308.51878,446.72269 L 307.2255,445.10609 L 300.11243,437.18472 L 298.81915,433.95151 L 294.13099,431.68826 L 292.67604,427.32339 L 290.08945,424.41352 L 288.14954,423.92856 L 287.50031,419.25092 L 295.50218,419.93681 L 324.53717,422.68026 L 353.57225,424.28062 L 355.80578,404.8188 L 359.69233,349.26378 L 361.29272,330.51646 L 362.66446,330.54504 M 461.69381,560.20778 L 461.128,553.0947 L 458.37976,545.90078 L 457.81394,538.86853 L 459.34972,530.62382 L 462.66378,523.75323 L 466.13948,518.33758 L 469.29188,514.78103 L 469.93852,515.02353 L 465.16952,521.65163 L 460.80468,528.19891 L 458.78391,534.827 L 458.46059,540.00016 L 459.34972,546.14328 L 461.9363,553.3372 L 462.42128,558.51034 L 462.58294,559.9653 L 461.69381,560.20778 z",
    "channels": [
      {
        "name": "Austin, TX",
        "channels": [
          "ABC: KVUE",
          "CBS: KEYE",
          "FOX: KTBC",
          "Univision: KAKW"
        ]
      },
      {
        "name": "Dallas-Ft. Worth, TX",
        "channels": [
          "ABC: WFAA",
          "CBS: KTVT",
          "FOX: KDFW-TV",
          "KTXA: KTXA",
          "My27: KDFI",
          "NBC: KXAS",
          "Telemundo: KXTX",
          "Univision: KUVN"
        ]
      },
      {
        "name": "El Paso, TX",
        "channels": [
          "CBS: KDBC",
          "FOX: KFOX",
          "Telemundo: KTDO"
        ]
      },
      {
        "name": "Harlingen-Brownsville, TX",
        "channels": [
          "CBS: KGBT",
          "Telemundo: KTLM"
        ]
      },
      {
        "name": "Houston, TX",
        "channels": [
          "ABC: KTRK-TV",
          "CBS: KHOU",
          "FOX: KRIV",
          "my20: KTXH",
          "NBC: KPRC",
          "Telemundo: KTMD",
          "Univision: KXLN"
        ]
      },
      {
        "name": "San Antonio, TX",
        "channels": [
          "ABC: KSAT",
          "CBS: KENS",
          "FOX: KABB",
          "NBC: WOAI",
          "Telemundo: KVDA",
          "Univision: KWEX"
        ]
      },
      {
        "name": "Waco-Temple-Bryan, TX",
        "channels": [
          "CBS: KBTX",
          "CBS: KWTX",
          "FOX: KWKT",
          "NBC: KAGS-LP",
          "NBC: KCEN"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Utah",
    "abbreviation": "UT",
    "textX": 224,
    "textY": 254,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 80,
    "textPosY": 200,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Utah<\/h2><ul><li><h3 class='underlined'>Salt Lake City, UT<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KUTV<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KSTU<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KSL<\/li><\/ul><\/li><\/ul>",
    "path": "M 259.49836,310.10509 L 175.74933,298.23284 L 196.33694,185.69149 L 243.11725,194.43663 L 241.63245,205.06705 L 239.32083,218.23971 L 247.12852,219.16808 L 263.53504,220.97287 L 271.74601,221.82851 L 259.49836,310.10509 z",
    "channels": [
      {
        "name": "Salt Lake City, UT",
        "channels": [
          "CBS: KUTV",
          "FOX: KSTU",
          "NBC: KSL"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Vermont",
    "abbreviation": "VT",
    "textX": 810,
    "textY": 86,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 50,
    "textPosY": 300,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Vermont<\/h2><ul><li><h3 class='underlined'>Burlington, VT<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WCAX<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFFF<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WPTZ<\/li><\/ul><\/li><\/ul>",
    "path": "M 844.48416,154.05791 L 844.80086,148.71228 L 841.91015,137.92811 L 841.26351,137.60479 L 838.35361,136.3115 L 839.16191,133.40161 L 838.35361,131.30002 L 835.65356,126.66004 L 836.62353,122.78018 L 835.81522,117.60703 L 833.39031,111.14059 L 832.58474,106.21808 L 859.0041,99.48626 L 859.3128,105.00847 L 861.22906,107.7507 L 861.22906,111.79222 L 857.52191,116.85021 L 854.93534,117.99288 L 854.92429,119.11345 L 856.23426,120.63257 L 855.92333,128.73054 L 855.3139,137.9894 L 855.08595,143.54634 L 856.05591,144.83963 L 855.89425,149.41032 L 855.40927,151.10021 L 856.42345,151.82737 L 848.9859,153.33408 L 844.48416,154.05791 z M 795,75 L 825,75 L 825,95 L 795,95 z",
    "linePath": "M 815,94 L 832,107 z",
    "channels": [
      {
        "name": "Burlington, VT",
        "channels": [
          "CBS: WCAX",
          "FOX: WFFF",
          "NBC: WPTZ"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Virginia",
    "abbreviation": "VA",
    "textX": 788,
    "textY": 282,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 110,
    "textPosY": 200,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Virginia<\/h2><ul><li><h3 class='underlined'>Norfolk-Newport News, VA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WVEC<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WVBT<\/li><\/ul><\/li><li><h3 class='underlined'>Richmond-Petersburg, VA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WRLH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WWBT<\/li><\/ul><\/li><li><h3 class='underlined'>Roanoke, VA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WSET<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> WDBJ<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WFXR<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WSLS<\/li><\/ul><\/li><li><h3 class='underlined'>Tri-Cities, TN-VA<\/h3><\/li><li><ul><li><img class='foxLogo' src='./images/FOX.png' /> WEMT<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WCYB<\/li><\/ul><\/li><\/ul>",
    "path": "M 831.63885,266.06892 L 831.49494,264.12189 L 837.94837,261.57201 L 837.17796,264.78985 L 834.25801,268.56896 L 833.83992,273.15478 L 834.30167,276.54522 L 832.4737,281.52338 L 830.30943,283.43952 L 828.83909,278.79871 L 829.28498,273.3496 L 830.87198,269.16653 L 831.63885,266.06892 z M 834.97904,294.37028 L 776.80486,306.94571 L 739.37789,312.22478 L 732.69956,311.8496 L 730.11431,313.77598 L 722.77518,313.99667 L 714.39307,314.97434 L 703.47811,316.58896 L 713.94754,310.97776 L 713.93442,308.90283 L 715.45447,306.7567 L 726.00825,295.25527 L 729.95497,299.73273 L 733.73798,300.69671 L 736.28144,299.55639 L 738.51866,298.24523 L 741.05527,299.58875 L 744.96944,298.16099 L 746.84617,293.60465 L 749.44709,294.14467 L 752.30233,292.01342 L 754.1016,292.50702 L 756.92881,288.83045 L 757.27706,286.74734 L 756.3134,285.47177 L 757.31617,283.60514 L 762.59044,271.32799 L 763.20721,265.59291 L 764.4361,265.06937 L 766.61463,267.51224 L 770.55049,267.21107 L 772.4797,259.63744 L 775.27369,259.07658 L 776.32344,256.33551 L 778.90326,253.98863 L 781.67509,248.29344 L 781.76002,243.22589 L 791.58153,247.04871 C 792.26238,247.38913 792.41441,241.99956 792.41441,241.99956 L 796.06697,243.59789 L 796.1353,246.53605 L 801.91955,247.83554 L 804.0525,249.01174 L 805.71242,251.06743 L 805.05787,254.7161 L 803.11043,257.30708 L 803.22028,259.36615 L 803.80924,261.21906 L 808.78799,262.48749 L 813.23926,262.52737 L 816.30809,263.48601 L 818.2516,263.79531 L 818.96641,266.88377 L 822.15685,267.2863 L 823.02492,268.48632 L 822.58543,273.1764 L 823.96016,274.27895 L 823.48121,276.20934 L 824.71062,276.99911 L 824.48882,278.38371 L 821.79483,278.28877 L 821.88379,279.90429 L 824.16478,281.44716 L 824.28632,282.85906 L 826.05943,284.64444 L 826.55122,287.16857 L 823.99818,288.54988 L 825.5704,290.04418 L 831.37142,288.35835 L 834.97904,294.37028 z",
    "channels": [
      {
        "name": "Norfolk-Newport News, VA",
        "channels": [
          "ABC: WVEC",
          "FOX: WVBT"
        ]
      },
      {
        "name": "Richmond-Petersburg, VA",
        "channels": [
          "FOX: WRLH",
          "NBC: WWBT"
        ]
      },
      {
        "name": "Roanoke, VA",
        "channels": [
          "ABC: WSET",
          "CBS: WDBJ",
          "FOX: WFXR",
          "NBC: WSLS"
        ]
      },
      {
        "name": "Tri-Cities, TN-VA",
        "channels": [
          "FOX: WEMT",
          "NBC: WCYB"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Washington",
    "abbreviation": "WA",
    "textX": 125,
    "textY": 50,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 80,
    "textPosY": 80,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Washington<\/h2><ul><li><h3 class='underlined'>Seattle-Tacoma, WA<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> KOMO<\/li><li><img class='cbsLogo' src='./images/CBS.png' /> KIRO<\/li><li>CW: KSTW<\/li><li><img class='foxLogo' src='./images/FOX.png' /> KCPQ<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KING<\/li><\/ul><\/li><li><h3 class='underlined'>Spokane, WA<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> KREM<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> KHQ<\/li><\/ul><\/li><\/ul>",
    "path": "M 102.07324,7.6117734 L 106.43807,9.0667177 L 116.1377,11.814946 L 124.7057,13.754871 L 144.7516,19.412988 L 167.70739,25.071104 L 182.93051,28.278277 L 169.29815,91.864088 L 156.85315,88.33877 L 141.34514,84.768091 L 126.11585,84.801329 L 125.66028,83.45663 L 120.06106,85.635923 L 115.46563,84.899179 L 113.31866,83.315125 L 112.00545,83.973101 L 107.26979,83.832858 L 105.57143,82.483225 L 100.30839,80.370922 L 99.573419,80.51784 L 95.184297,78.993392 L 93.290999,80.810771 L 87.025093,80.512038 L 81.099395,76.386336 L 81.878352,75.453573 L 81.999575,67.776121 L 79.717576,63.93642 L 75.602368,63.32938 L 74.924958,60.818764 L 72.649446,60.361832 L 69.094498,61.592408 L 66.831251,58.373161 L 67.154572,55.463272 L 69.9028,55.139951 L 71.519405,51.09844 L 68.932837,49.966816 L 69.094498,46.248625 L 73.459331,45.601984 L 70.711103,42.853756 L 69.256158,35.740695 L 69.9028,32.830807 L 69.9028,24.909444 L 68.124535,21.676234 L 70.387782,12.299927 L 72.489368,12.784908 L 74.914275,15.694797 L 77.662503,18.281364 L 80.895712,20.22129 L 85.422205,22.322876 L 88.493756,22.969518 L 91.403645,24.424462 L 94.798518,25.394425 L 97.061764,25.232765 L 97.061764,22.807857 L 98.355048,21.676234 L 100.45663,20.38295 L 100.77996,21.514574 L 101.10328,23.292839 L 98.840029,23.77782 L 98.516708,25.879406 L 100.29497,27.334351 L 101.4266,29.759258 L 102.07324,31.699183 L 103.52818,31.537523 L 103.68984,30.244239 L 102.71988,28.950955 L 102.2349,25.717746 L 103.0432,23.939481 L 102.39656,22.484537 L 102.39656,20.22129 L 104.17483,16.66476 L 103.0432,14.078192 L 100.61829,9.2283781 L 100.94162,8.4200758 L 102.07324,7.6117734 z M 92.616548,13.590738 L 94.637312,13.429078 L 95.122294,14.803197 L 96.658073,13.186582 L 99.002155,13.186582 L 99.810458,14.722361 L 98.274678,16.419801 L 98.92133,17.228114 L 98.193853,19.248875 L 96.819734,19.653021 C 96.819734,19.653021 95.930596,19.733857 95.930596,19.410536 C 95.930596,19.087215 97.385551,16.823958 97.385551,16.823958 L 95.688111,16.258141 L 95.36479,17.713095 L 94.637312,18.359737 L 93.10153,16.09648 L 92.616548,13.590738 z",
    "channels": [
      {
        "name": "Seattle-Tacoma, WA",
        "channels": [
          "ABC: KOMO",
          "CBS: KIRO",
          "CW: KSTW",
          "FOX: KCPQ",
          "NBC: KING"
        ]
      },
      {
        "name": "Spokane, WA",
        "channels": [
          "CBS: KREM",
          "NBC: KHQ"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "West Virginia",
    "abbreviation": "WV",
    "textX": 742,
    "textY": 269,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 90,
    "textPosY": 200,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>West Virginia<\/h2><ul><li><h3 class='underlined'>Charleston-Huntington, WV<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WCHS<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WVAH<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WSAZ<\/li><\/ul><\/li><\/ul>",
    "path": "M 761.18551,238.96731 L 762.29752,243.91184 L 763.38096,249.94317 L 765.51125,247.36283 L 767.77449,244.29127 L 770.31287,243.67572 L 771.76782,242.22078 L 773.54609,239.63421 L 774.99107,240.28085 L 777.90096,239.95753 L 780.48754,237.85594 L 782.49443,236.40268 L 784.33966,235.91769 L 785.64358,236.93416 L 789.28683,238.75579 L 791.22676,240.53406 L 792.60088,241.82734 L 791.83916,247.38228 L 786.00425,244.84106 L 781.759,243.21904 L 781.65786,248.39747 L 778.91022,253.9342 L 776.38019,256.36086 L 775.1881,259.11025 L 772.54452,259.61035 L 771.64668,263.21223 L 770.60345,267.1619 L 766.63521,267.50264 L 764.31148,265.06376 L 763.24033,265.62317 L 762.60765,271.09287 L 761.25736,274.62737 L 756.29896,285.58234 L 757.19565,286.74304 L 756.98979,288.65158 L 754.1811,292.53605 L 752.3726,291.99176 L 749.40455,294.1515 L 746.86217,293.57929 L 744.86294,298.13486 C 744.86294,298.13486 741.60363,299.56508 740.94003,299.50258 C 740.77952,299.48746 738.47093,298.25348 738.47093,298.25348 L 736.13441,299.63285 L 733.72461,300.67725 L 729.97992,299.78813 L 728.85852,298.61985 L 726.6663,295.59649 L 723.52371,293.60837 L 721.81214,289.98513 L 717.52726,286.51694 L 716.88061,284.25369 L 714.29404,282.79874 L 713.48573,281.18214 L 713.24324,275.92816 L 715.42566,275.84733 L 717.3656,275.03903 L 717.52726,272.2908 L 719.14386,270.83585 L 719.30552,265.82437 L 720.27548,261.94451 L 721.56877,261.29787 L 722.86205,262.42949 L 723.34704,264.20776 L 725.12531,263.23779 L 725.61029,261.62119 L 724.47867,259.84292 L 724.47867,257.41801 L 725.44863,256.12472 L 727.71188,252.72985 L 729.00516,251.27491 L 731.10676,251.75989 L 733.37,250.14327 L 736.44155,246.7484 L 738.70481,242.86854 L 739.02813,237.21043 L 739.51311,232.19894 L 739.51311,227.51078 L 738.38149,224.43923 L 739.35145,222.98427 L 740.63493,221.69099 L 744.12618,241.51811 L 748.75719,240.76696 L 761.18551,238.96731 z",
    "channels": [
      {
        "name": "Charleston-Huntington, WV",
        "channels": [
          "ABC: WCHS",
          "FOX: WVAH",
          "NBC: WSAZ"
        ]
      }
    ]
  },
  {
    "enable": true,
    "name": "Wisconsin",
    "abbreviation": "WI",
    "textX": 578,
    "textY": 156,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 20,
    "textPosY": 70,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Wisconsin<\/h2><ul><li><h3 class='underlined'>Green Bay, WI<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WBAY<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WLUK<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WGBA<\/li><\/ul><\/li><li><h3 class='underlined'>Madison, WI<\/h3><\/li><li><ul><li><img class='cbsLogo' src='./images/CBS.png' /> WISC<\/li><\/ul><\/li><li><h3 class='underlined'>Milwaukee, WI<\/h3><\/li><li><ul><li><img class='abcLogo' src='./images/ABC.png' /> WISN<\/li><li><img class='foxLogo' src='./images/FOX.png' /> WITI<\/li><li><img class='nbcLogo' src='./images/NBC.png' /> WTMJ<\/li><\/ul><\/li><\/ul>",
    "path": "M 615.06589,197.36866 L 614.99915,194.21124 L 613.82004,189.68474 L 613.1734,183.54165 L 612.04178,181.11674 L 613.01174,178.04519 L 613.82004,175.1353 L 615.27499,172.54874 L 614.62834,169.15387 L 613.9817,165.59734 L 614.46668,163.81907 L 616.40661,161.39416 L 616.56827,158.64593 L 615.75997,157.35265 L 616.40661,154.76608 L 615.95409,150.59537 L 618.70232,144.93726 L 621.61221,138.14752 L 621.77387,135.88427 L 621.45055,134.91431 L 620.64224,135.39929 L 616.43907,141.70405 L 613.69084,145.74556 L 611.75092,147.52383 L 610.94262,149.78707 L 608.98767,150.59537 L 607.85605,152.5353 L 606.4011,152.21198 L 606.23944,150.43371 L 607.53273,148.00881 L 609.63431,143.32065 L 611.41258,141.70405 L 612.40341,139.3462 L 609.84296,137.44486 L 607.86814,127.07787 L 604.32067,125.73589 L 602.37441,123.42756 L 590.2447,120.70592 L 587.36881,119.69387 L 579.15569,117.52658 L 571.23777,116.36783 L 567.47261,111.23716 L 566.72221,111.79117 L 565.5243,111.62951 L 564.87765,110.49789 L 563.54364,110.79444 L 562.41201,110.9561 L 560.63375,111.92606 L 559.66378,111.27942 L 560.31043,109.33949 L 562.25035,106.26794 L 563.38197,105.13632 L 561.44205,103.68138 L 559.34046,104.48968 L 556.43057,106.4296 L 548.99419,109.66281 L 546.0843,110.30945 L 543.17442,109.82447 L 542.19269,108.94622 L 540.07599,111.7814 L 539.84737,114.52487 L 539.84737,122.9839 L 538.70425,124.58427 L 533.44593,128.47084 L 531.15971,134.41503 L 531.61695,134.64365 L 534.1318,136.70126 L 534.81766,139.90198 L 532.98868,143.10269 L 532.98868,146.98928 L 533.44593,153.61933 L 536.41802,156.59143 L 539.84737,156.59143 L 541.67635,159.79215 L 545.10568,160.24939 L 548.99227,165.96496 L 556.07957,170.08017 L 558.13717,172.82364 L 559.05167,180.25388 L 559.73753,183.5689 L 562.02376,185.16926 L 562.25238,186.541 L 560.19478,189.97033 L 560.4234,193.17106 L 562.93825,197.05764 L 565.4531,198.20075 L 568.42519,198.65799 L 569.76753,200.03811 L 615.06589,197.36866 z",
    "channels": [
      {
        "name": "Green Bay, WI",
        "channels": [
          "ABC: WBAY",
          "FOX: WLUK",
          "NBC: WGBA"
        ]
      },
      {
        "name": "Madison, WI",
        "channels": [
          "CBS: WISC"
        ]
      },
      {
        "name": "Milwaukee, WI",
        "channels": [
          "ABC: WISN",
          "FOX: WITI",
          "NBC: WTMJ"
        ]
      }
    ]
  },
  {
    "enable": false,
    "name": "Wyoming",
    "abbreviation": "WY",
    "textX": 300,
    "textY": 183,
    "color": "#008CF6",
    "hoverColor": "#FFFFFF",
    "textPosX": 60,
    "textPosY": 260,
    "selectedColor": "#FFFFFF",
    "url": "http:\/\/jsmaps.io",
    "text": "<h2 class='stateText'>Wyoming<\/h2>",
    "path": "M 360.37668,143.27587 L 253.63408,129.81881 L 239.5506,218.27684 L 352.81521,231.86233 L 360.37668,143.27587 z"
  }
];

let city_names = [];

let middle_pins = [];

let new_pins = [];

//create new array with all of the names of the cities only once
for (let i = 0; i < news.length; i++) {
  if (!city_names.includes(news[i].name)) {
    city_names.push(news[i].name);
  }
}

//loop through all city names
for (let k = 0; k < city_names.length; k++){
  //grab abbreviation from city name
  // console.log(city_names[k]);
  let abbr = city_names[k].slice(-2);

  //create new pin for each city; set coords to 0:0
  let new_pin = {
    "enable": true,
    "name": city_names[k],
    "state": abbr,
    "xPos": 0,
    "yPos": 0,
    "color": "#FFFFFF",
    "stateHoverColor": "#FFFFFF",
    "hoverColor": "#008CF6",
    "selectedColor": "#000000",
    "textPosX": 0,
    "textPosY": 0,
    "url": "https://directv.com",
    "channels": [],
    "text": ""
  }

  //loop through new list of cities
  for (let j = 0; j < news.length; j++) {
    //attach channels to pin if it matches
    if (city_names[k] === news[j].name) {
      new_pin.channels.push(news[j].channels)
    }
  }

  //create text
  // new_pin.text = "<h1 class='underlined'>" + new_pin.name + "</h1><ul>";
  new_pin.text = "<h1 class='underlined'>" + new_pin.name + "</h1><table cellpadding='0' cellspacing='0'><tbody>";

  //looper for creating a list
  //loop through channels on pin and concatenate onto text
  // for (var channel in new_pin.channels) {
  //   new_pin.text = new_pin.text + "<li>" + new_pin.channels[channel] + "</li>";
  // }

  //looper for creating a table on the pin
  for (var channel in new_pin.channels) {
    //set the default variables and split the channel into an array
    let new_channel = new_pin.channels[channel].split(': ');
    let logo = '';
    let className = '';
    let sourceName = '';
    let network = '';

    //switch statement to give the variables data
    switch (new_channel[0]) {
      case 'ABC':
        className = 'abcLogo'
        sourceName = 'ABC.png'
        break;
      case 'NBC':
        className = 'nbcLogo'
        sourceName = 'NBC.png'
        break;
      case 'CBS':
        className = 'cbsLogo'
        sourceName = 'CBS.png'
        break;
      case 'FOX':
        className = 'foxLogo'
        sourceName = 'FOX.png'
        break;
      case 'Univision':
        className = 'uniLogo'
        sourceName = 'Univision.png'
        break;
      case 'Telemundo':
        className = 'teleLogo'
        sourceName = 'Telemundo.png'
        break;
      default:
        network = new_channel[0];
    }

    //use a logo if the network has one
    if (sourceName) {
      network = "<img class='" + className + "' src='./images/" + sourceName + "' />"
    }

    new_pin.text = new_pin.text + "<tr><td>" + network + "</td><td>" + new_channel[1] + "</td></tr>";
  }

  // new_pin.text += "</ul>";
  new_pin.text += "</tbody></table>";

  //push pin to final city pin array
  middle_pins.push(new_pin);
}

//loop through all final city pins
for (let b = 0; b < middle_pins.length; b++) {
  //loop through all old pins
  for (let v = 0; v < pins.length; v++) {
    //give final city pin the old pin's coords if the name matches; leave at 0:0 if it doesn't
    if (middle_pins[b].name === pins[v].name) {
      middle_pins[b].xPos = pins[v].xPos;
      middle_pins[b].yPos = pins[v].yPos;
      middle_pins[b].textPosX = pins[v].textPosX;
      middle_pins[b].textPosY = pins[v].textPosY;
    }
  }

  //create list of all of the pins added to the list
  if (middle_pins[b].xPos === 0 && middle_pins[b].yPos === 0) {
    new_pins.push(middle_pins[b].name);
  }
}

//loop through all of the paths (states)
for (let h = 0; h < paths.length; h++) {
  //create empty array of cities that will be in that state
  let new_cities = [];

  //loop through final city pins
  for (let g = 0; g < middle_pins.length; g++) {
    //grab abbreviation of city's state and check against path's abbreviation
    let abv = middle_pins[g].name.slice(-2);
    if (paths[h].abbreviation === abv) {
      //create new city for the state
      let city = {
        "name": middle_pins[g].name,
        "channels": middle_pins[g].channels
      }

      new_cities.push(city)
    }
  }

  //update text on the path
  paths[h].text = "<h2 class='stateText'>" + paths[h].name + "</h2>";

  if (new_cities.length > 0) {
    paths[h].text += "<ul>";
    //loop through all of the cities in that state
    paths[h].channels = [];
    for (let w = 0; w < new_cities.length; w++) {
      console.log(new_cities[w]);
      paths[h].channels.push(new_cities[w]);
      paths[h].text += "<li><h3 class='underlined'>" + new_cities[w].name + "</h3><table cellpadding='0' cellspacing='0'><tbody>";

      for (let r = 0; r < new_cities[w].channels.length; r++) {
        let new_channel = new_cities[w].channels[r].split(': ');
        let logo = '';
        let className = '';
        let sourceName = '';
        let network = '';

        switch (new_channel[0]) {
          case 'ABC':
            className = 'abcLogo'
            sourceName = 'ABC.png'
            break;
          case 'NBC':
            className = 'nbcLogo'
            sourceName = 'NBC.png'
            break;
          case 'CBS':
            className = 'cbsLogo'
            sourceName = 'CBS.png'
            break;
          case 'FOX':
            className = 'foxLogo'
            sourceName = 'FOX.png'
            break;
          case 'Univision':
            className = 'uniLogo'
            sourceName = 'Univision.png'
            break;
          case 'Telemundo':
            className = 'teleLogo'
            sourceName = 'Telemundo.png'
            break;
          default:
            network = new_channel[0];
        }

        if (sourceName) {
          network = "<img class='" + className + "' src='./images/" + sourceName + "' />"
        }

        paths[h].text += "<tr><td>" + network + "</td><td>" + new_channel[1] + "</td></tr>";;
      }

      paths[h].text += "</tbody></table></li>";
    }

    paths[h].text += "</ul>";
  }
}

//send JSON to textarea for prettying
paths = JSON.stringify(paths)
document.getElementById('states').innerHTML = paths;
middle_pins = JSON.stringify(middle_pins)
document.getElementById('cities').innerHTML = middle_pins;
console.log(new_pins);
