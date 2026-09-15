/* Vehicle Spotter — dataset.
 * Images: Wikimedia Commons, served via Special:FilePath (resizes on demand).
 * Each entry: id, name (canonical), aliases[], category, era, imageUrl,
 * difficulty 1-3, credit, and an optional fact shown after the answer.
 *
 * Aliases carry the real-world naming mess: nicknames, foreign names, NATO
 * reporting names, designation-only forms and common misspellings. The matcher
 * generates further variants automatically, so aliases only need the ones a
 * human would actually type.
 *
 * Players can add their own aliases and flag bad entries while playing; those
 * corrections live in localStorage (see js/corrections.js) and can be exported
 * from the setup screen to be folded back in here.
 */
const VEHICLES = [
  /* ------------------------------------------------------------- TANKS */
  {
    id: "m4_sherman", name: "M4 Sherman", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["Sherman", "M4", "Sherman tank", "M4A3", "M4A1", "Medium Tank M4"],
    fact: "The most-produced Allied tank of WWII — around 49,000 were built.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M4_Sherman_tank_-_Flickr_-_Joost_J._Bakker_IJmuiden.jpg?width=1000",
    credit: "Joost J. Bakker / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "t34", name: "T-34", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["T34", "T-34-85", "T-34/85", "T 34"],
    fact: "Its sloped armour forced a complete rethink of German tank design.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tank_T-34.JPG?width=1000",
    credit: "Cezary Piwowarski / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "tiger_i", name: "Tiger I", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["Tiger", "Tiger 1", "Panzer VI", "Panzerkampfwagen VI", "PzKpfw VI", "Tiger tank"],
    fact: "So feared that Allied crews reported 'Tigers' far more often than existed.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29.2.jpg?width=1000",
    credit: "Scheck / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "tiger_ii", name: "Tiger II", category: "tank", era: "WW2", difficulty: 2,
    aliases: ["King Tiger", "Königstiger", "Konigstiger", "Tiger 2", "Royal Tiger", "Panzer VI Ausf B", "Königstiger tank"],
    fact: "At nearly 70 tonnes it broke bridges and drank fuel.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-721-0398-21A%2C_Frankreich%2C_Panzer_VI_%28Tiger_II%2C_K%C3%B6nigstiger%29.jpg?width=1000",
    credit: "Wagner / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "panther", name: "Panther", category: "tank", era: "WW2", difficulty: 2,
    aliases: ["Panther tank", "Panzer V", "Panzerkampfwagen V", "PzKpfw V", "Panther Ausf G"],
    fact: "Germany's answer to the T-34, rushed into service at Kursk.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-H26258%2C_Panzer_V_%22Panther%22.jpg?width=1000",
    credit: "Unknown authorUnknown author / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "panzer_iv", name: "Panzer IV", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 4", "Panzerkampfwagen IV", "PzKpfw IV", "Pz IV", "PanzerIV"],
    fact: "The only German tank in production for the entire war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzermuseum_Munster_2010_0128_b.jpg?width=1000",
    credit: "Banznerfahrer Georgfotoart / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "panzer_iii", name: "Panzer III", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 3", "Panzerkampfwagen III", "PzKpfw III", "Pz III"],
    fact: "The German mainstay early in the war, later outgunned.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/PzKpfwIIIF.Saumur.000a1y8q.jpg?width=1000",
    credit: "User:Fat yankey / Wikimedia Commons (CC BY-SA 2.5)"
  },
  {
    id: "panzer_ii", name: "Panzer II", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 2", "Panzerkampfwagen II", "PzKpfw II", "Pz II"],
    fact: "A light tank that carried the early blitzkrieg campaigns.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_II_Saumur.JPG?width=1000",
    credit: "Matthias Holländer / Wikimedia Commons (CC0)"
  },
  {
    id: "panzer38t", name: "Panzer 38(t)", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 38", "Pz 38(t)", "LT vz 38", "38t", "Panzerkampfwagen 38(t)"],
    fact: "A Czech design pressed into German service after 1939.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_38%28t%29_Ausf._S.jpg?width=1000",
    credit: "Werner Willmann / Wikimedia Commons (CC BY 2.5)"
  },
  {
    id: "stug3", name: "Sturmgeschütz III", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["StuG III", "StuG 3", "StuG", "Sturmgeschutz III", "Assault gun StuG"],
    fact: "A turretless assault gun that became Germany's most-produced armoured vehicle.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/SNC15697_%285853637442%29_b.jpg?width=1000",
    credit: "Roland Turner from Birmingham, Great Britain Georgfotoart / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "jagdpanther", name: "Jagdpanther", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Jagd Panther", "Panzerjäger V", "Sd Kfz 173"],
    fact: "A Panther hull carrying the famous 88 mm anti-tank gun.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdpanzer_V_Jagdpanther_1.jpg?width=1000",
    credit: "Darkone (talk · contribs) / Wikimedia Commons (CC BY-SA 2.5)"
  },
  {
    id: "hetzer", name: "Hetzer", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Jagdpanzer 38", "Jagdpanzer 38(t)", "Hetzer tank destroyer"],
    fact: "Small, cheap and low — hard to spot and harder to hit.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Le%C5%A1any_-_vojensk%C3%A9_muzeum%2C_Tankov%C3%BD_den_2024%2C_uk%C3%A1zky%2C_Hetzer%2C_obr01.jpg?width=1000",
    credit: "Roman Mifek / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "elefant", name: "Elefant", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Ferdinand", "Elephant", "Panzerjäger Tiger (P)"],
    fact: "Built on a rejected Tiger hull design by Porsche.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Elefant_USAOM-01.jpg?width=1000",
    credit: "Scott Dunham / Wikimedia Commons (CC BY 3.0)"
  },
  {
    id: "maus", name: "Panzer VIII Maus", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Maus", "Mouse", "Panzer 8 Maus"],
    fact: "At 188 tonnes the heaviest tank ever built; only two were made.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Maus_2025_b.jpg?width=1000",
    credit: "DokiDotto Georgfotoart / Wikimedia Commons (CC0)"
  },
  {
    id: "kv1", name: "KV-1", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["KV1", "Kliment Voroshilov", "KV"],
    fact: "Early German anti-tank guns simply bounced off it.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9A%D0%92-1_%D1%83_%D0%B4%D0%B8%D0%BE%D1%80%D0%B0%D0%BC%D1%8B_%C2%AB%D0%9F%D1%80%D0%BE%D1%80%D1%8B%D0%B2_%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D1%8B_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0%C2%BB._%D0%92%D0%B8%D0%B4_%D1%81%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B8-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.JPG?width=1000",
    credit: "WolfDW / Wikimedia Commons (Public domain)"
  },
  {
    id: "is2", name: "IS-2", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["IS2", "JS-2", "Josef Stalin tank", "Iosif Stalin"],
    fact: "Built to crack fortifications with a 122 mm gun.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Belarus-Minsk-Museum_of_GPW_Exhibition-5.jpg?width=1000",
    credit: "Hanna Zelenko / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "su100", name: "SU-100", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["SU100", "Su 100"],
    fact: "A T-34-based tank destroyer with a long 100 mm gun.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-100_-_TankBiathlon2013-07.jpg?width=1000",
    credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "churchill", name: "Churchill", category: "tank", era: "WW2", difficulty: 2,
    aliases: ["Churchill tank", "Churchill Mk VII", "Infantry Tank Mk IV"],
    fact: "Slow, but able to climb slopes other tanks could not.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tanks_and_Afvs_of_the_British_Army_1939-45_KID1265.jpg?width=1000",
    credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)"
  },
  {
    id: "cromwell", name: "Cromwell", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Cromwell tank", "Cruiser Mk VIII"],
    fact: "One of the fastest Allied tanks of the war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cromwell_%28A27M%29_front-right_2017_Bovington.jpg?width=1000",
    credit: "Morio / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "matilda2", name: "Matilda II", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Matilda", "Matilda 2", "Infantry Tank Mk II", "Queen of the Desert"],
    fact: "Nearly immune to Italian guns in the early desert war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A12_Matilda_II_%E2%80%98T10459%E2%80%99_%E2%80%9CTHE_PRINCESS_ROYAL%E2%80%9D_%2849909226038%29.jpg?width=1000",
    credit: "Alan Wilson from Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "valentine", name: "Valentine", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Valentine tank", "Infantry Tank Mk III"],
    fact: "Britain's most-produced tank design of the war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Valentine_II_%E2%80%985-40%E2%80%99_-_Patriot_Museum%2C_Kubinka_%2838390149682%29.jpg?width=1000",
    credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "crusader", name: "Crusader", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Crusader tank", "Cruiser Mk VI"],
    fact: "Fast across the desert, but mechanically fragile.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Crusader_MkIII_%E2%80%98T126272%E2%80%99_%2836590905746%29.jpg?width=1000",
    credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "firefly", name: "Sherman Firefly", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Firefly", "Sherman VC", "M4 Firefly"],
    fact: "A Sherman rearmed with a 17-pounder that could kill a Tiger.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Sherman_Firefly_Namur.jpg?width=1000",
    credit: "U.S. ARMY CENTER OF MILITARY HISTORY / Wikimedia Commons (Public domain)"
  },
  {
    id: "m3_lee", name: "M3 Lee", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Lee", "M3 Grant", "Grant", "General Lee"],
    fact: "Its main gun sat in a side sponson rather than the turret.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AlfredPalmerM3tank1942b_crop2.jpg?width=1000",
    credit: "Alfred T. Palmer / Wikimedia Commons (Public domain)"
  },
  {
    id: "m3_stuart", name: "M3 Stuart", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Stuart", "Honey", "Light Tank M3"],
    fact: "British crews nicknamed it the Honey for its smooth ride.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stuart_tankfest_2023.JPG?width=1000",
    credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "m18_hellcat", name: "M18 Hellcat", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["M18", "M18 GMC", "Hellcat tank destroyer"],
    fact: "The fastest tracked armoured vehicle of the war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M18_hellcat_side.jpg?width=1000",
    credit: "Benzene at English Wikipedia / Wikimedia Commons (CC BY 2.5)"
  },
  {
    id: "m10", name: "M10 Wolverine", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["M10", "Wolverine", "M10 tank destroyer", "M10 GMC"],
    fact: "An open-topped tank destroyer built on a Sherman chassis.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Aberdean_proving_grounds_036.JPG?width=1000",
    credit: "BonesBrigade at en.wikipedia / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "chiha", name: "Type 97 Chi-Ha", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Chi-Ha", "Type 97", "ChiHa"],
    fact: "Japan's main medium tank of the war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_97_Chi-Ha_in_the_Great_Patriotic_War_Museum_5-jun-2014.jpg?width=1000",
    credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "centurion", name: "Centurion", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["Centurion tank", "FV4007"],
    fact: "Arrived too late for WWII and served for decades after it.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Centurion_cfb_borden_1.JPG?width=1000",
    credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "t55", name: "T-54/55", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["T-55", "T-54", "T55", "T54"],
    fact: "The most-produced tank in history.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/T-55_4.jpg?width=1000",
    credit: "John Harwood / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "t62", name: "T-62", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T62"],
    fact: "The first tank in service with a smoothbore main gun.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ParkPatriot2015part10-12.jpg?width=1000",
    credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "t64", name: "T-64", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T64"],
    fact: "Introduced the autoloader that removed the fourth crewman.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/T-64BV_mod_2017%2C_Kyiv_2021%2C_16.jpg?width=1000",
    credit: "VoidWanderer / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "t72", name: "T-72", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["T72"],
    fact: "Exported so widely it has fought on both sides of many wars.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Alabino05042017-40.jpg?width=1000",
    credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "t80", name: "T-80", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T80"],
    fact: "A gas-turbine Soviet tank, fast and very thirsty.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/T-80BVM.jpg?width=1000",
    credit: "Ministry of Defence of the Russian Federation / Wikimedia Commons (CC BY 4.0)"
  },
  {
    id: "m47", name: "M47 Patton", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["M47"],
    fact: "A stopgap Patton rushed out during the Korean War.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M47.jpg?width=1000",
    credit: "Unknown / Wikimedia Commons (Public domain)"
  },
  {
    id: "m48", name: "M48 Patton", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["M48", "M48A3"],
    fact: "The American mainstay of the Vietnam War.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kampfpanzer_M_48_A2_C.JPG?width=1000",
    credit: "Huhu / Wikimedia Commons (Public domain)"
  },
  {
    id: "m60", name: "M60 Patton", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["M60", "M60A1", "M60A3"],
    fact: "America's main battle tank until the Abrams arrived.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M60_Patton_Tank_Fort_Lewis_Military_Museum.jpg?width=1000",
    credit: "Articseahorse / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "m103", name: "M103", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["M103 heavy tank"],
    fact: "A 120 mm heavy tank built to counter Soviet heavies.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M103_tankfest_2024.JPG?width=1000",
    credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "chieftain", name: "Chieftain", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Chieftain tank", "FV4201"],
    fact: "Heavily armoured and famously underpowered.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Chieftain_Tank_%289628802829%29.jpg?width=1000",
    credit: "Peter Trimming from Croydon, England / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "challenger1", name: "Challenger 1", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Challenger I", "Chally 1", "CR1"],
    fact: "Dominated the 1991 Gulf War tank battles.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger_1MBT_Mk_3_%287527916878%29.jpg?width=1000",
    credit: "Simon Q from United Kingdom / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "leopard1", name: "Leopard 1", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Leopard I", "Leo 1", "Leopard 1A5"],
    fact: "Chose speed and mobility over thick armour.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_1A5.jpg?width=1000",
    credit: "Rainer Lippert / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "amx30", name: "AMX-30", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["AMX30", "AMX 30"],
    fact: "France's Cold War main battle tank.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AMX-30B_U.S._Army_Armor_%26_Cavalry_Collection.jpg?width=1000",
    credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "sheridan", name: "M551 Sheridan", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Sheridan", "M551"],
    fact: "Light enough to be dropped by parachute.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Yuma_Proving_Ground%2C_Arizona_%2842188342504%29.jpg?width=1000",
    credit: "Mark Holloway from Anaconda, Montana / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "pt76", name: "PT-76", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["PT76"],
    fact: "An amphibious light tank that swims under its own power.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Verkhnyaya_Pyshma_Tank_Museum_2012_0181.jpg?width=1000",
    credit: "Владимир Саппинен / Wikimedia Commons (CC BY 3.0)"
  },
  {
    id: "m1_abrams", name: "M1 Abrams", category: "tank", era: "Modern", difficulty: 1,
    aliases: ["Abrams", "M1", "M1A1", "M1A2", "M1A2 SEP", "Abrams tank"],
    fact: "Powered by a gas turbine — it whines rather than rumbles.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M1A2_SEP_v3.jpg?width=1000",
    credit: "Spc. Kali Ecton / Wikimedia Commons (Public domain)"
  },
  {
    id: "challenger2", name: "Challenger 2", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Challenger II", "Challenger", "Chally 2", "CR2"],
    fact: "Holds the record for the longest confirmed tank-on-tank kill.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg?width=1000",
    credit: "Graeme Main / Wikimedia Commons (OGL v1.0)"
  },
  {
    id: "leopard2", name: "Leopard 2", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Leopard II", "Leopard", "Leo 2", "Leopard 2A6", "Leopard 2A7"],
    fact: "Germany's main battle tank, used by more than a dozen armies.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_2_A7V_313_Bad_Frankenhausen_2024.JPG?width=1000",
    credit: "Boevaya mashina / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "t90", name: "T-90", category: "tank", era: "Modern", difficulty: 2,
    aliases: ["T90", "T-90A", "T-90M"],
    fact: "A modernised descendant of the T-72 line.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/T-90M.jpg?width=1000",
    credit: "Ministry of Defence of the Russian Federation / Wikimedia Commons (CC BY 4.0)"
  },
  {
    id: "t14", name: "T-14 Armata", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Armata", "T14"],
    fact: "Unmanned turret, with the crew in an armoured capsule.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/VDayRehearsal05052016-28.jpg?width=1000",
    credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "merkava", name: "Merkava", category: "tank", era: "Modern", difficulty: 2,
    aliases: ["Merkava Mk4", "Merkava 4"],
    fact: "Engine mounted at the front to shield the crew.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Merkava-Mk4m-whiteback01.jpg?width=1000",
    credit: "Source: Israel Defense Forces Spokesperson UnitDerivative: User:MathKnight / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "leclerc", name: "Leclerc", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["AMX Leclerc", "AMX-56 Leclerc"],
    fact: "France's autoloaded main battle tank.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Leclerc-openphotonet_PICT6015.JPG?width=1000",
    credit: "Daniel Steger (Lausanne,Switzerland) / Wikimedia Commons (CC BY-SA 2.5)"
  },
  {
    id: "ariete", name: "C1 Ariete", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Ariete"],
    fact: "Italy's main battle tank, built by Iveco and Oto Melara.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Italian_Army_-_4th_Tank_Regiment_-_Ariete_tanks_during_an_exercise_at_Capo_Teulada_October_2022.jpg?width=1000",
    credit: "Italian Army / Wikimedia Commons (CC BY 2.5)"
  },
  {
    id: "k2_panther", name: "K2 Black Panther", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["K2", "Black Panther"],
    fact: "South Korean, with a suspension that lets it kneel and lean.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/U.S.%2C_ROK_forces_forge_interoperability_with_combined_arms_exercise_-_8_of_8.jpg?width=1000",
    credit: "Staff Sgt. Jason Cochran / Wikimedia Commons (Public domain)"
  },
  {
    id: "type10", name: "Type 10", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Type 10 tank", "TK-X"],
    fact: "A light, compact Japanese tank built for narrow roads.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Type10MBT.jpg?width=1000",
    credit: "T.Goto / Wikimedia Commons (Public domain)"
  },
  {
    id: "type99", name: "Type 99", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Type 99 tank", "ZTZ-99", "ZTZ99"],
    fact: "China's main battle tank.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ZTZ-99A_tank_front_20170902.jpg?width=1000",
    credit: "Tyg728 / Wikimedia Commons (CC BY-SA 4.0)"
  },

  /* ---------------------------------------- ARMOURED FIGHTING VEHICLES */
  {
    id: "bradley", name: "M2 Bradley", category: "afv", era: "Modern", difficulty: 2,
    aliases: ["Bradley", "M2A2 Bradley", "Bradley IFV", "M2"],
    fact: "Carries infantry and kills tanks with TOW missiles.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/US_M2A1_Bradley_deployed_to_Saudi_Arabia_during_Operation_Desert_Shield.jpg?width=1000",
    credit: "SGT. Brian Cumper / Wikimedia Commons (Public domain)"
  },
  {
    id: "bmp1", name: "BMP-1", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BMP1", "BMP"],
    fact: "The first true infantry fighting vehicle.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/BWP-1_Baltops_2016_0283.jpg?width=1000",
    credit: "Łukasz Golowanow, Konflikty.pl / Wikimedia Commons (Attribution)"
  },
  {
    id: "bmp2", name: "BMP-2", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BMP2"],
    fact: "A BMP-1 rebuilt around a 30 mm autocannon.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Army2016demo-007.jpg?width=1000",
    credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "btr80", name: "BTR-80", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BTR80", "BTR"],
    fact: "An eight-wheeled amphibious armoured personnel carrier.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2011_Moscow_Victory_Day_Parade_%28360-06%29_%28cropped%29.jpg?width=1000",
    credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "m113", name: "M113", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["M113 APC", "M-113"],
    fact: "An aluminium box on tracks, built in enormous numbers.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Allied_Spirit_I_150126-A-LO967-001.jpg?width=1000",
    credit: "Spc. Tyler Kingsbury / Wikimedia Commons (Public domain)"
  },
  {
    id: "stryker", name: "Stryker", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["M1126 Stryker", "Stryker ICV"],
    fact: "Eight wheels, air-transportable, built for rapid deployment.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Stryker_ICV_front_q.jpg?width=1000",
    credit: "U.S. Army / Wikimedia Commons (Public domain)"
  },
  {
    id: "warrior", name: "Warrior", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["FV510 Warrior", "Warrior IFV"],
    fact: "The British Army's tracked infantry fighting vehicle.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ARMOURED_VEHICLE_FLEET_SUPPORT_CONTRACT_ANNOUNCED_%2845149221%29.jpg?width=1000",
    credit: "Graeme Main / Wikimedia Commons (OGL 3)"
  },
  {
    id: "marder", name: "Marder", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Marder IFV", "Marder 1"],
    fact: "West Germany's IFV, in service for over fifty years.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/IL%C3%9C_der_Bundeswehr_am_24.09.2012_--_Marder_AT_%28cropped%29.jpg?width=1000",
    credit: "synaxonag / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "scorpion", name: "FV101 Scorpion", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Scorpion", "FV101"],
    fact: "So light it could be carried by transport aircraft in pairs.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Scorpion_CRVT_%284119399295%29.jpg?width=1000",
    credit: "Irish Defence Forces from Ireland / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "humvee", name: "Humvee", category: "afv", era: "Modern", difficulty: 1,
    aliases: ["HMMWV", "Hummer", "High Mobility Multipurpose Wheeled Vehicle"],
    fact: "The Jeep's replacement, and the basis for the civilian Hummer.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2015_MCAS_Beaufort_Air_Show_041215-M-CG676-161.jpg?width=1000",
    credit: "U.S. Marine Corps photo by Lance Cpl. Olivia G. Ortiz/Released / Wikimedia Commons (Public domain)"
  },

  /* ---------------------------------------------------------- AIRCRAFT */
  {
    id: "spitfire", name: "Supermarine Spitfire", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["Spitfire", "Spit", "Supermarine Spit", "Spitfire Mk IX"],
    fact: "Its elliptical wing was chosen for aerodynamics, not looks.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Spitfire_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg?width=1000",
    credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "hurricane", name: "Hawker Hurricane", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Hurricane", "Hurri"],
    fact: "Shot down more enemy aircraft in the Battle of Britain than the Spitfire.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawker_Hurricane_Mk2C%2C_UK_-_Air_Force_AN1711615.jpg?width=1000",
    credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "p51", name: "North American P-51 Mustang", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["P-51 Mustang", "P-51", "P51", "Mustang", "P-51D"],
    fact: "A British-requested Merlin engine turned it into a long-range escort.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/P-51-361.jpg?width=1000",
    credit: "USAAF/361st FG Association (via Al Richards) / Wikimedia Commons (Public domain)"
  },
  {
    id: "p47", name: "Republic P-47 Thunderbolt", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["P-47", "P47", "Thunderbolt", "Jug"],
    fact: "Pilots called it the Jug; it could absorb extraordinary damage.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/P47_Thunderbolt_-_Chino_2014_%28cropped%29.jpg?width=1000",
    credit: "Tim Felce / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "p38", name: "Lockheed P-38 Lightning", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["P-38", "P38", "P-38 Lightning", "Fork-tailed devil"],
    fact: "German pilots called it the fork-tailed devil.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/P38_Lightning.jpg?width=1000",
    credit: "CindyN / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "p40", name: "Curtiss P-40 Warhawk", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["P-40", "P40", "Warhawk", "Tomahawk", "Kittyhawk"],
    fact: "Wore the shark-mouth nose art of the Flying Tigers.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Curtiss_P-40M_Warhawk_%272104590_-_44%27_%28G-KITT%29_%2826830598751%29.jpg?width=1000",
    credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "corsair", name: "Vought F4U Corsair", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["F4U", "Corsair", "F4U Corsair", "Whistling Death"],
    fact: "Its inverted gull wing was needed to clear a huge propeller.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vought_F4U_Corsair_%28USMC%29.jpg?width=1000",
    credit: "Gerry Metzler / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "hellcat", name: "Grumman F6F Hellcat", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["F6F", "Hellcat", "F6F Hellcat"],
    fact: "Built specifically to beat the Zero, and it did.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hellcats_F6F-3%2C_May_1943.jpg?width=1000",
    credit: "USN; / Wikimedia Commons (Public domain)"
  },
  {
    id: "zero", name: "Mitsubishi A6M Zero", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["Zero", "A6M", "Zeke", "Mitsubishi Zero", "A6M Zero"],
    fact: "Extraordinary range and agility, bought by leaving armour off.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A6M3_Zero_N712Z_1.jpg?width=1000",
    credit: "Kogo / Wikimedia Commons (GFDL)"
  },
  {
    id: "bf109", name: "Messerschmitt Bf 109", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Bf 109", "Bf109", "Me 109", "Me109", "Messerschmitt 109", "109", "Messerschmidt Bf 109"],
    fact: "The most-produced fighter aircraft in history — nearly 34,000 built.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-662-6659-37%2C_Flugzeug_Messerschmitt_Me_109.jpg?width=1000",
    credit: "Hebenstreit / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "fw190", name: "Focke-Wulf Fw 190", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Fw 190", "FW190", "Focke Wulf 190", "Butcher Bird", "Würger"],
    fact: "Outclassed the Spitfire V on arrival and forced a redesign.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fw_190A-3_JG_2_in_Britain_1942.jpg?width=1000",
    credit: "RAF / Wikimedia Commons (Public domain)"
  },
  {
    id: "me262", name: "Messerschmitt Me 262", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Me 262", "Me262", "Schwalbe", "Sturmvogel"],
    fact: "The first operational jet fighter.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Messerschmitt_Me_262A_at_the_National_Museum_of_the_USAF_%28cropped%29.jpg?width=1000",
    credit: "USAF museum / Wikimedia Commons (Public domain)"
  },
  {
    id: "stuka", name: "Junkers Ju 87 Stuka", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["Stuka", "Ju 87", "Ju87", "Junkers Ju 87"],
    fact: "Its dive siren, the Jericho trumpet, existed purely to terrify.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Junkers_Ju_87Ds_in_flight_Oct_1943.jpg?width=1000",
    credit: "PK-Kriegsberichter Karnerth / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "he111", name: "Heinkel He 111", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["He 111", "He111", "Heinkel 111"],
    fact: "The glazed nose made the whole cockpit one glass dome.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-343-0694-21%2C_Belgien-Frankreich%2C_Flugzeug_Heinkel_He_111.jpg?width=1000",
    credit: "Schödl (e) / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "ju52", name: "Junkers Ju 52", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ju 52", "Ju52", "Tante Ju", "Iron Annie"],
    fact: "Corrugated metal skin and three engines.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ju-Air_Junkers_Ju-52_in_flight_over_Austria.jpg?width=1000",
    credit: "Bernd K / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "b17", name: "Boeing B-17 Flying Fortress", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["B-17", "B17", "Flying Fortress", "Fortress", "B-17G", "Boeing B-17"],
    fact: "Named by a reporter who counted the machine guns bristling from it.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/B17_-_Chino_Airshow_2014_%28framed%29.jpg?width=1000",
    credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "b24", name: "Consolidated B-24 Liberator", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["B-24", "B24", "Liberator"],
    fact: "Built in greater numbers than the B-17, if less celebrated.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Maxwell_B-24_%28cropped%29.jpg?width=1000",
    credit: "U.S. Air Force photos / Wikimedia Commons (Public domain)"
  },
  {
    id: "b25", name: "North American B-25 Mitchell", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["B-25", "B25", "Mitchell"],
    fact: "Flew the Doolittle Raid off a carrier deck.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/B25_Mitchell_-_Chino_Airshow_2014_%2814033501440%29.jpg?width=1000",
    credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "b29", name: "Boeing B-29 Superfortress", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["B-29", "B29", "Superfortress"],
    fact: "Pressurised and remote-controlled gun turrets — a generation ahead.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_TB-29-70-BW_Superfortress_%E2%80%98469972%E2%80%99_%E2%80%9CDoc%E2%80%9D_%28N69972%29_%2850871638276%29.jpg?width=1000",
    credit: "Alan Wilson from Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "lancaster", name: "Avro Lancaster", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Lancaster", "Lanc", "Avro Lanc"],
    fact: "The bomber of the Dambusters raid.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Britain_Memorial_flight_Avro_Lancaster_%28cropped%29.jpg?width=1000",
    credit: "Cpl Phil Major ABIPP / Wikimedia Commons (OGL v1.0)"
  },
  {
    id: "mosquito", name: "de Havilland Mosquito", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Mosquito", "Mossie", "DH.98 Mosquito", "Wooden Wonder"],
    fact: "Built largely of plywood, and fast enough to outrun fighters.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/De_Havilland_DH.98_Mosquito_B_Mk_IV_Series_2_%28restoration%29.jpg?width=1000",
    credit: "Fotoafdrukken Koninklijke Luchtmacht / Photo Prints, Royal Netherlands Air Force; restored by Chris Woodrich / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "wellington", name: "Vickers Wellington", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Wellington", "Wimpy"],
    fact: "A geodetic lattice airframe that survived remarkable damage.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vickers_Wellington.jpg?width=1000",
    credit: "Photographer not identified, so UK Copyright contended to have lapsed 50 years after publication. / Wikimedia Commons (Public domain)"
  },
  {
    id: "c47", name: "Douglas C-47 Skytrain", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["C-47", "C47", "Skytrain", "Gooney Bird"],
    fact: "Dropped the paratroopers on D-Day.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/C47_Skytrain_-_Duxford_D-Day_Show_2014_%28cropped%29.jpg?width=1000",
    credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "il2", name: "Ilyushin Il-2", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Il-2", "IL2", "Sturmovik", "Shturmovik", "Il-2 Sturmovik"],
    fact: "The most-produced military aircraft ever built.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Il2_sturmovik.jpg?width=1000",
    credit: "no info / Wikimedia Commons (Public domain)"
  },
  {
    id: "yak3", name: "Yakovlev Yak-3", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Yak-3", "Yak3"],
    fact: "Small and light, and deadly at low altitude.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Yakolev_Yak-3_%28115450123%29_%2825073819848%29.jpg?width=1000",
    credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "sbd", name: "Douglas SBD Dauntless", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["SBD", "Dauntless", "SBD Dauntless"],
    fact: "Sank four Japanese carriers at Midway.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/NX670AM_Douglas_SBD-5_Dauntless_Bu_No_28536_Planes_of_Fame_Air_Museum_%28centered%29.jpg?width=1000",
    credit: "Tomás Del Coro / Wikimedia Commons (CC BY-SA 2.5)"
  },
  {
    id: "spruce_goose", name: "Hughes H-4 Hercules", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Spruce Goose", "H-4 Hercules", "Hughes Flying Boat"],
    fact: "Flew once, for about a mile, in 1947.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/H-4_Hercules_2.jpg?width=1000",
    credit: "SDASM Archives / Wikimedia Commons (Public domain)"
  },
  {
    id: "f86", name: "F-86 Sabre", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-86", "F86", "Sabre", "Sabrejet"],
    fact: "Swept wings, and the MiG-15's opposite number over Korea.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/F-86_Sabre_hertiage_flight.jpg?width=1000",
    credit: "U.S. Air Force photo by J.M. Eddins Jr. / Wikimedia Commons (Public domain)"
  },
  {
    id: "mig15", name: "MiG-15", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["MiG15", "Mig 15", "Fagot"],
    fact: "Its arrival over Korea shocked Western air forces.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/MiG-15_%2852544074366%29.jpg?width=1000",
    credit: "slezo / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "mig21", name: "MiG-21", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["MiG21", "Fishbed"],
    fact: "The most-produced supersonic aircraft in history.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Croatian_MiG-21_%28cropped%29.jpg?width=1000",
    credit: "Gojanovic123456789 / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "mig25", name: "MiG-25", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["MiG25", "Foxbat"],
    fact: "Built of steel, not titanium, and terrifyingly fast in a straight line.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force_MiG-25.jpg?width=1000",
    credit: "Leonid Faerberg (transport-photo.com) / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "mig29", name: "MiG-29", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["MiG29", "Fulcrum"],
    fact: "Designed to match the F-16 and F/A-18.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/VVS_100th_IMG_0691_%287727464290%29_%28cropped%29.jpg?width=1000",
    credit: "Artem Katranzhi from Bakashikha, Russia / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "su27", name: "Su-27", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["Su27", "Sukhoi Su-27", "Flanker"],
    fact: "Large, long-ranged, and the basis for a whole family of jets.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg?width=1000",
    credit: "Dmitriy Pichugin / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "su25", name: "Su-25", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Su25", "Sukhoi Su-25", "Frogfoot", "Grach"],
    fact: "The Soviet answer to the A-10.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_%288683076150%29.jpg?width=1000",
    credit: "Fedor Leukhin / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "f4_phantom", name: "F-4 Phantom II", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-4", "F4 Phantom", "Phantom", "Phantom II", "McDonnell Douglas F-4"],
    fact: "Bent wings and a drooping nose; flown by three US services at once.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/QF-4_Holloman_AFB.jpg?width=1000",
    credit: "USAF / Wikimedia Commons (Public domain)"
  },
  {
    id: "f14", name: "Grumman F-14 Tomcat", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-14", "F14", "Tomcat", "F-14D"],
    fact: "Its wings sweep back automatically as it accelerates.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg?width=1000",
    credit: "U.S. Navy photo / Wikimedia Commons (Public domain)"
  },
  {
    id: "f15", name: "F-15 Eagle", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-15", "F15", "Eagle", "F-15C"],
    fact: "Has never been lost in air-to-air combat.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/F-15C_Eagle_from_the_44th_Fighter_Squadron_flies_during_a_routine_training_exercise_April_15%2C_2019.jpg?width=1000",
    credit: "Airman 1st Class Matthew Seefeldt / Wikimedia Commons (Public domain)"
  },
  {
    id: "f16", name: "General Dynamics F-16 Fighting Falcon", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-16", "F16", "Fighting Falcon", "Viper", "F-16 Falcon"],
    fact: "Pilots almost universally call it the Viper.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/F-16_June_2008.jpg?width=1000",
    credit: "Master Sgt. Andy Dunaway / Wikimedia Commons (Public domain)"
  },
  {
    id: "f18", name: "F/A-18 Hornet", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-18", "F18", "Hornet", "FA-18"],
    fact: "Twin tails canted outward; the Blue Angels' aircraft.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FA-18C_desert_refueling.jpg?width=1000",
    credit: "US Air Force / Wikimedia Commons (Public domain)"
  },
  {
    id: "a4", name: "A-4 Skyhawk", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["A-4", "A4", "Skyhawk", "Scooter"],
    fact: "So small it needed no wing-folding to fit carrier lifts.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_A-4E_Skyhawk_of_VA-164_in_flight_over_Vietnam_on_21_November_1967_%286430101%29.jpg?width=1000",
    credit: "Lt.JG Nelson, U.S. Navy / Wikimedia Commons (Public domain)"
  },
  {
    id: "a10", name: "Fairchild Republic A-10 Thunderbolt II", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["A-10", "A10", "Warthog", "A-10 Warthog", "Thunderbolt II", "Hog", "A-10C"],
    fact: "The airframe was essentially built around its 30 mm rotary cannon.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fairchild_Republic_A-10_Thunderbolt_II_-_32156159151.jpg?width=1000",
    credit: "Master Sgt. William Greer, U.S. Air Force / Wikimedia Commons (Public domain)"
  },
  {
    id: "f117", name: "F-117 Nighthawk", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-117", "F117", "Nighthawk", "Wobbly Goblin"],
    fact: "All those flat facets were what 1970s computers could model.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/F-117_Nighthawk_Front.jpg?width=1000",
    credit: "Staff Sgt. Aaron Allmon II / Wikimedia Commons (Public domain)"
  },
  {
    id: "sr71", name: "Lockheed SR-71 Blackbird", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["SR-71", "SR71", "Blackbird", "Habu"],
    fact: "It leaked fuel on the ground — the panels only sealed once hot.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_SR-71_Blackbird.jpg?width=1000",
    credit: "USAF / Judson Brohmer / Wikimedia Commons (Public domain)"
  },
  {
    id: "u2", name: "Lockheed U-2", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["U-2", "U2", "Dragon Lady"],
    fact: "Glider-like wings to loiter at 70,000 feet.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Usaf.u2.750pix.jpg?width=1000",
    credit: "United States Department of the Air Force / Wikimedia Commons (Public domain)"
  },
  {
    id: "b52", name: "B-52 Stratofortress", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["B-52", "B52", "Stratofortress", "BUFF"],
    fact: "In service since 1955, and planned to fly into the 2050s.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/B-52_Stratofortress_assigned_to_the_307th_Bomb_Wing_%28cropped%29.jpg?width=1000",
    credit: "Airman 1st Class Victor J. Caputo / Wikimedia Commons (Public domain)"
  },
  {
    id: "b1", name: "B-1 Lancer", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["B-1", "B1", "Lancer", "B-1B", "Bone"],
    fact: "Swing-wing supersonic bomber; crews call it the Bone.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/B-1B_air_refueling.jpg?width=1000",
    credit: "USAF / Wikimedia Commons (Public domain)"
  },
  {
    id: "vulcan", name: "Avro Vulcan", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["Vulcan", "Vulcan bomber"],
    fact: "A huge delta wing, and Britain's airborne nuclear deterrent.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/XH558_%28G-VLCN%29_Avro_Vulcan_-_Last_Flight_over_Farnborough_%28cropped%29.jpg?width=1000",
    credit: "Alastair Barbour / Wikimedia Commons (CC BY 2.5)"
  },
  {
    id: "harrier", name: "Harrier", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["Harrier jump jet", "Hawker Siddeley Harrier", "Sea Harrier", "AV-8B"],
    fact: "Vectored thrust lets it take off vertically.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Spanish_Hawker_Siddeley_AV-8S_Matador_in_flight_over_the_Mediterranean_Sea%2C_1_June_1988_%286430231%29.jpg?width=1000",
    credit: "Lieutenant Commander John R. Leenhouts, U.S. Navy; post-work FOX 52 / Wikimedia Commons (Public domain)"
  },
  {
    id: "tornado", name: "Panavia Tornado", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["Tornado", "Tornado GR4"],
    fact: "A three-nation swing-wing strike aircraft.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Tornado_GR4_MOD_45155233.jpg?width=1000",
    credit: "Corporal Mike Jones / Wikimedia Commons (OGL v1.0)"
  },
  {
    id: "ee_lightning", name: "English Electric Lightning", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["EE Lightning", "Lightning F6"],
    fact: "Two engines stacked vertically, and a ferocious climb rate.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/English_Electric_Lightning_F6%2C_UK_-_Air_Force_AN2260192.jpg?width=1000",
    credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "mirage2000", name: "Dassault Mirage 2000", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Mirage 2000", "Mirage"],
    fact: "A tailless delta, like the Mirage III before it.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mirage_2000C_in-flight_2_%28cropped%29.jpg?width=1000",
    credit: "SRA GREG L. DAVIS, USAF / Wikimedia Commons (Public domain)"
  },
  {
    id: "tu95", name: "Tupolev Tu-95", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Tu-95", "Tu95", "Bear"],
    fact: "Turboprop-driven and loud enough to be tracked by sound.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-95_over_Moscow_Kustov_%28cropped%29.jpg?width=1000",
    credit: "Sergey Kustov / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "c130", name: "C-130 Hercules", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["C-130", "C130", "Hercules", "Herc", "Lockheed C-130"],
    fact: "Still in production after seventy years.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_C-130_Hercules.jpg?width=1000",
    credit: "U.S. Air Force photo by Tech. Sgt. Howard Blair / Wikimedia Commons (Public domain)"
  },
  {
    id: "c5", name: "C-5 Galaxy", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["C-5", "C5", "Galaxy"],
    fact: "The nose hinges upward to swallow vehicles whole.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/USAF_C-5_Galaxy_in_flight.jpg?width=1000",
    credit: "U.S. Air Force photo by Brett Snow / Wikimedia Commons (Public domain)"
  },
  {
    id: "concorde", name: "Concorde", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["Aerospatiale/BAC Concorde", "BAC Concorde", "Concord", "Supersonic Concorde"],
    fact: "Cruised at Mach 2 — New York to London in under three hours.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Airways_Concorde_G-BOAC_03.jpg?width=1000",
    credit: "Eduard Marmet / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "b747", name: "Boeing 747", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["747", "Jumbo Jet", "Jumbo", "B747"],
    fact: "The hump is the upper deck behind the cockpit.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/B-747_Iberia.jpg?width=1000",
    credit: "Iberia Airlines / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "b2", name: "B-2 Spirit", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["B-2", "B2", "Spirit", "Stealth bomber"],
    fact: "A flying wing with no fuselage and no tail at all.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_F-35B_integration_flying_training_with_USAF_B-2_30092019_-_4.jpg?width=1000",
    credit: "Royal Air Force / Wikimedia Commons (OGL v1.0)"
  },
  {
    id: "f22", name: "F-22 Raptor", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["F-22", "F22", "Raptor"],
    fact: "Cruises supersonically without using afterburner.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/F-22_Raptor_edit1_%28cropped%29.jpg?width=1000",
    credit: "Master Sgt. Andy Dunaway / Wikimedia Commons (Public domain)"
  },
  {
    id: "f35", name: "F-35 Lightning II", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["F-35", "F35", "Lightning II", "JSF", "Joint Strike Fighter"],
    fact: "One airframe in three versions, including a vertical-landing variant.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/F-35A_flight_%28cropped%29.jpg?width=1000",
    credit: "U.S. Air Force photo by Master Sgt. Donald R. Allen / Wikimedia Commons (Public domain)"
  },
  {
    id: "typhoon", name: "Eurofighter Typhoon", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["Typhoon", "Eurofighter"],
    fact: "Canards ahead of the wing, built by four nations.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg?width=1000",
    credit: "Chris Lofting / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "rafale", name: "Dassault Rafale", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["Rafale"],
    fact: "France's carrier-capable multirole fighter.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rafale_-_RIAT_2009_%283751416421%29.jpg?width=1000",
    credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "gripen", name: "Saab JAS 39 Gripen", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Gripen", "JAS 39", "Saab Gripen"],
    fact: "Designed to operate from ordinary Swedish roads.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Saab_JAS_39_Gripen_at_Kaivopuisto_Air_Show%2C_June_2017_%28altered%29_copy.jpg?width=1000",
    credit: "Tuomo Salonen / SIMFinnish Aviation Museum / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "tu160", name: "Tupolev Tu-160", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Tu-160", "Tu160", "Blackjack", "White Swan"],
    fact: "The largest and heaviest combat aircraft ever built.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-160_RF-94109.jpg?width=1000",
    credit: "Alex Beltyukov / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "b737", name: "Boeing 737", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["737", "B737"],
    fact: "The best-selling jet airliner ever made.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/South_African_Airlink_Boeing_737-200_Advanced_Smith.jpg?width=1000",
    credit: "Montague Smith Altair78 / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "a380", name: "Airbus A380", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["A380", "Airbus 380"],
    fact: "A full-length double deck; the largest passenger airliner.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg?width=1000",
    credit: "Maarten Visser from Capelle aan den IJssel, Nederland / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "an225", name: "Antonov An-225 Mriya", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["An-225", "An225", "Mriya"],
    fact: "Six engines; the heaviest aircraft ever built.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonov_Design_Bureau_Antonov_An-225_Mriya_at_Leipzig_Halle_%28EDDP-LEJ%29.jpg?width=1000",
    credit: "Myroslav Kaplun / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "c172", name: "Cessna 172", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["Cessna 172 Skyhawk", "Cessna"],
    fact: "The most-produced aircraft in history.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cessna_172S_Skyhawk_SP%2C_Private_JP6817606.jpg?width=1000",
    credit: "Peter Bakema / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "dc3", name: "Douglas DC-3", category: "plane", era: "Pioneer", difficulty: 2,
    aliases: ["DC-3", "DC3", "Dakota"],
    fact: "The airliner that made air travel pay for itself.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_DC-3%2C_SE-CFP.jpg?width=1000",
    credit: "Towpilot / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "wright_flyer", name: "Wright Flyer", category: "plane", era: "Pioneer", difficulty: 1,
    aliases: ["Wright Flyer I", "Kitty Hawk Flyer", "Wright brothers plane"],
    fact: "Twelve seconds and 120 feet, in December 1903.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/First_flight2.jpg?width=1000",
    credit: "John T. Daniels / Wikimedia Commons (Public domain)"
  },

  /* ------------------------------------------------------- HELICOPTERS */
  {
    id: "huey", name: "Bell UH-1 Iroquois", category: "helicopter", era: "Cold War", difficulty: 1,
    aliases: ["Huey", "UH-1", "UH1", "UH-1 Huey", "Iroquois", "Bell UH-1", "Bell Huey"],
    fact: "Officially the Iroquois, but the 'HU-1' designation stuck as Huey.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/UH1_Huey_-_Fly_Navy_2017_%2826938005897%29.jpg?width=1000",
    credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "cobra", name: "AH-1 Cobra", category: "helicopter", era: "Cold War", difficulty: 2,
    aliases: ["AH-1", "Cobra", "Huey Cobra", "AH-1G", "Snake"],
    fact: "The first helicopter designed from scratch as a gunship.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Army_AH-1G_archived.jpg?width=1000",
    credit: "US Army / Wikimedia Commons (Public domain)"
  },
  {
    id: "bell47", name: "Bell 47", category: "helicopter", era: "Cold War", difficulty: 2,
    aliases: ["Bell 47G", "MASH helicopter", "Sioux"],
    fact: "The bubble canopy made famous by M*A*S*H.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_47G-5_Uni_Fly%2C_STA_Stauning%2C_Denmark_%28cropped%29.png?width=1000",
    credit: "Peter Bakema / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "bell206", name: "Bell 206", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Bell 206 JetRanger", "JetRanger", "Jet Ranger"],
    fact: "The workhorse of news, police and charter flying.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/LAPD_Bell_206_Jetranger.jpg?width=1000",
    credit: "Mfield - Matthew Field, http://www.photography.mattfield.com / Wikimedia Commons (CC BY 2.5)"
  },
  {
    id: "blackhawk", name: "UH-60 Black Hawk", category: "helicopter", era: "Modern", difficulty: 1,
    aliases: ["UH-60", "Black Hawk", "Blackhawk", "UH60"],
    fact: "Replaced the Huey as the US Army's utility helicopter.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/National-Guard-UH-60-Black-Hawk-operations-at-Fort-McCoy.jpg?width=1000",
    credit: "147th Aviation Regiment / Wikimedia Commons (Public domain)"
  },
  {
    id: "apache", name: "Boeing AH-64 Apache", category: "helicopter", era: "Modern", difficulty: 1,
    aliases: ["Apache", "AH-64", "AH64", "AH-64D", "Apache Longbow", "Longbow", "Hughes AH-64"],
    fact: "The mast-mounted radar dome lets it target from behind cover.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-64D_Apache_Longbow.jpg?width=1000",
    credit: "\"Photo Courtesy of U.S. Army\" - by Tech. Sgt. Andy Dunaway / Wikimedia Commons (Public domain)"
  },
  {
    id: "chinook", name: "Boeing CH-47 Chinook", category: "helicopter", era: "Modern", difficulty: 2,
    aliases: ["Chinook", "CH-47", "CH47", "Wokka", "Boeing Chinook", "Vertol CH-47"],
    fact: "Tandem rotors mean no tail rotor — and a lot of lift.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/CH-47_assigned_to_3rd_General_Support_Aviation_Battalion%2C_82nd_Combat_Aviation_Brigade.jpg?width=1000",
    credit: "Sgt. Steven Galimore / Wikimedia Commons (CC0)"
  },
  {
    id: "ch46", name: "CH-46 Sea Knight", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["CH-46", "Sea Knight", "Phrog"],
    fact: "The Chinook's smaller Marine Corps cousin.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/CH-46_Sea_Knight_Helicopter.jpg?width=1000",
    credit: "Andrew Schmidt / Wikimedia Commons (CC0)"
  },
  {
    id: "ch53", name: "CH-53E Super Stallion", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["CH-53", "Super Stallion", "Sea Stallion", "CH53"],
    fact: "The heaviest-lifting helicopter in Western service.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_CH-53E_Super_Stallion_with_the_22nd_Marine_Expeditionary_Unit.jpg?width=1000",
    credit: "Sgt. Seth Starr / Wikimedia Commons (Public domain)"
  },
  {
    id: "kiowa", name: "OH-58 Kiowa", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["OH-58", "Kiowa", "Kiowa Warrior"],
    fact: "A scout helicopter with a sensor ball above the rotor.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/OH-58D_1st_Squadron%2C_17th_Cavalry_Regiment_%28cropped%29.jpg?width=1000",
    credit: "U.S. Army / Wikimedia Commons (Public domain)"
  },
  {
    id: "little_bird", name: "MH-6 Little Bird", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Little Bird", "MH-6", "AH-6", "Killer Egg"],
    fact: "Special forces ride on external benches, outside the cabin.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/MH-6_Little_Bird.jpg?width=1000",
    credit: "Unknown / Wikimedia Commons (Public domain)"
  },
  {
    id: "osprey", name: "V-22 Osprey", category: "helicopter", era: "Modern", difficulty: 1,
    aliases: ["V-22", "Osprey", "MV-22", "Tiltrotor"],
    fact: "Rotors tilt forward so it can fly like a turboprop.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/MV-22_mcas_Miramar_2014.JPG?width=1000",
    credit: "FOX 52 / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "sea_king", name: "Sea King", category: "helicopter", era: "Cold War", difficulty: 2,
    aliases: ["SH-3 Sea King", "Westland Sea King", "Sikorsky SH-3"],
    fact: "A boat-shaped hull, for landing on water.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/SH3H_HS15_CVW15_1995_%28cropped%29.jpg?width=1000",
    credit: "US Navy / Wikimedia Commons (Public domain)"
  },
  {
    id: "lynx", name: "Westland Lynx", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Lynx", "Westland WG.13"],
    fact: "Held the helicopter world speed record for two decades.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Lynx_landing_on_Kearsarge.jpg?width=1000",
    credit: "Sgt. Christopher Q. Stone / Wikimedia Commons (Public domain)"
  },
  {
    id: "merlin", name: "AW101 Merlin", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Merlin", "AW101", "EH101", "AgustaWestland AW101"],
    fact: "Three engines, for flying long distances over water.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AgustaWestland_HH-101A_Caesar_%28cropped%29.jpg?width=1000",
    credit: "Gian Marco Anzellotti / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "puma", name: "SA 330 Puma", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Puma", "Aerospatiale Puma", "SA330"],
    fact: "A French transport helicopter used across Africa and Europe.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Puma_-_RIAT_2010_%28cropped%29.jpg?width=1000",
    credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "euro_tiger", name: "Eurocopter Tiger", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["EC665 Tiger", "Airbus Tiger", "Tiger attack helicopter"],
    fact: "A Franco-German attack helicopter built largely of composites.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/20170810034242%21Eurocopter_EC-665_Tiger_UHT%2C_Germany_-_Army_AN1547188_%282%29.jpg?width=1000",
    credit: "Alan Lebeda / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "nh90", name: "NH90", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["NHIndustries NH90", "NH-90"],
    fact: "Fly-by-wire, and a European joint project.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/French_Navy_NH90_lands_on_USS_Antietam_%28CG-54%29_in_the_Bay_of_Bengal_%28cropped%29.jpg?width=1000",
    credit: "U.S. Navy photo by Mass Communication Specialist 3rd Class David Flewellyn / Wikimedia Commons (Public domain)"
  },
  {
    id: "r44", name: "Robinson R44", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["R44", "Robinson"],
    fact: "The best-selling civil helicopter of the 2000s.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Robinson_R44_II_%28cropped%29.jpg?width=1000",
    credit: "D. Miller / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "mi8", name: "Mil Mi-8", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mi-8", "Mi8", "Hip", "Mi-17"],
    fact: "The most-produced helicopter in history.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mil_Mi-8P%2C_Baltic_Airlines_%28cropped%29.jpg?width=1000",
    credit: "Igor Dvurekov / Wikimedia Commons (CC BY 3.0)"
  },
  {
    id: "hind", name: "Mil Mi-24", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mi-24", "Mi24", "Hind", "Mil Mi-24 Hind", "Mi-24 Hind", "Krokodil"],
    fact: "A gunship that also carries troops — crews called it the Crocodile.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi24CP_%28modified%29_b.jpg?width=1000",
    credit: "Cezary Piwowarskimodified by FOX 52 Georgfotoart / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "mi26", name: "Mil Mi-26", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Mi-26", "Mi26", "Halo"],
    fact: "The largest helicopter ever to enter series production.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/MAKS_Airshow_2013_%28Ramenskoye_Airport%2C_Russia%29_%28cropped%29%29.jpg?width=1000",
    credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "mi28", name: "Mil Mi-28", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Mi-28", "Mi28", "Havoc", "Night Hunter"],
    fact: "Russia's dedicated attack helicopter.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force%2C_RF-13489%2C_Mil_Mi-28NM_%2849581609382%29.jpg?width=1000",
    credit: "Anna Zvereva from Tallinn, Estonia / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "ka50", name: "Kamov Ka-50", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Ka-50", "Ka50", "Black Shark", "Hokum"],
    fact: "Coaxial rotors, no tail rotor, and an ejection seat.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force_Kamov_Ka-50.jpg?width=1000",
    credit: "Dmitriy Pichugin / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "ka52", name: "Kamov Ka-52", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Ka-52", "Ka52", "Alligator"],
    fact: "A two-seat Ka-50 with the crew sitting side by side.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force_Kamov_Ka-50.jpg?width=1000",
    credit: "Dmitriy Pichugin / Wikimedia Commons (GFDL 1.2)"
  },
  {
    id: "huey_cobra_z", name: "AH-1Z Viper", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["AH-1Z", "Zulu Cobra"],
    fact: "The Cobra line's final four-bladed descendant.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-1Z_attack_helicopter_with_Marine_Light_Attack_Helicopter_Squadron_775_Group_41%2C_execute_pre-flight_checks_and_procedures_%28cropped%29.jpg?width=1000",
    credit: "Cpl. Jonathan L. Gonzalez / Wikimedia Commons (Public domain)"
  },

  /* ---------------------------------------------------- CARS AND SHIPS */
  {
    id: "model_t", name: "Ford Model T", category: "car", era: "Pioneer", difficulty: 1,
    aliases: ["Model T", "Tin Lizzie", "T-Ford", "Ford T", "ModelT"],
    fact: "15 million built — the car that put the world on wheels.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1925_Ford_Model_T_touring.jpg?width=1000",
    credit: "ModelTMitch / Wikimedia Commons (Public domain)"
  },
  {
    id: "beetle", name: "Volkswagen Beetle", category: "car", era: "Cold War", difficulty: 1,
    aliases: ["VW Beetle", "Beetle", "Bug", "VW Bug", "Käfer", "Kafer", "Volkswagen Type 1", "Type 1", "VW Kafer"],
    fact: "Production ran for 65 years, ending in Mexico in 2003.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/VW_K%C3%A4fer_Baujahr_1966.jpg?width=1000",
    credit: "Vwexport1300 / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "mustang_car", name: "Ford Mustang", category: "car", era: "Cold War", difficulty: 1,
    aliases: ["Mustang", "Mustang 1965", "1965 Mustang", "Ford Mustang GT"],
    fact: "Created the 'pony car' class; 400,000 sold in its first year.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1965_Ford_Mustang_2D_Hardtop_Front.jpg?width=1000",
    credit: "Kroelleboelle / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "countach", name: "Lamborghini Countach", category: "car", era: "Cold War", difficulty: 2,
    aliases: ["Countach", "Lambo Countach", "Lamborghini Contach", "Countach LP400"],
    fact: "Its name is a Piedmontese exclamation roughly meaning 'wow'.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Countach_-_Flickr_-_exfordy_%282%29_%28cropped-2%29.jpg?width=1000",
    credit: "Brian Snelson from Hockley, Essex, England / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "2cv", name: "Citroën 2CV", category: "car", era: "Cold War", difficulty: 2,
    aliases: ["2CV", "Citroen 2CV", "Deux Chevaux", "2 CV", "Duck", "Ente", "Tin Snail"],
    fact: "Designed to carry a farmer and eggs across a ploughed field unbroken.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Citroen_2CV_1X7A7979.jpg?width=1000",
    credit: "Alexander Migl / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "mini", name: "Mini", category: "car", era: "Cold War", difficulty: 3,
    aliases: ["Classic Mini", "Morris Mini-Minor", "Mini Minor", "Austin Seven", "Mini Cooper", "BMC Mini", "Morris Mini"],
    fact: "Its transverse engine layout became the template for small cars.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Morris_Mini-Minor_1959_%28621_AOK%29.jpg?width=1000",
    credit: "DeFacto / Wikimedia Commons (CC BY-SA 2.5)"
  },
  {
    id: "willys_jeep", name: "Willys MB Jeep", category: "car", era: "WW2", difficulty: 1,
    aliases: ["Jeep", "Willys Jeep", "Willys MB", "Willys", "MB Jeep", "Army jeep"],
    fact: "Eisenhower named it one of the decisive weapons of the war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Covered_Willy%27s_jeep_Wings_Over_Wine_Country_2007.JPG?width=1000",
    credit: "BrokenSphere / Wikimedia Commons (CC BY 3.0)"
  },
  {
    id: "uss_missouri", name: "USS Missouri", category: "ship", era: "WW2", difficulty: 2,
    aliases: ["Missouri", "BB-63", "Mighty Mo", "USS Missouri BB-63", "Big Mo", "Iowa class battleship"],
    fact: "Japan's formal surrender was signed on her deck in Tokyo Bay, 1945.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Missouri_post_refit.JPG?width=1000",
    credit: "Unknown / Wikimedia Commons (Public domain)"
  },
  {
    id: "hms_victory", name: "HMS Victory", category: "ship", era: "Age of Sail", difficulty: 2,
    aliases: ["Victory", "Nelson's flagship", "HMS Victory 1765"],
    fact: "Nelson's flagship at Trafalgar — still a commissioned warship today.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/HMSVictoryPortsmouthEngland_%28version_2%29.jpg?width=1000",
    credit: "User:Cimosteve (modified by MARC912374) / Wikimedia Commons (CC0)"
  },
  {
    id: "titanic", name: "RMS Titanic", category: "ship", era: "Pioneer", difficulty: 1,
    aliases: ["Titanic", "SS Titanic", "RMS Titanic 1912"],
    fact: "Her sister ships Olympic and Britannic looked near-identical.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/RMS_Titanic_3_%28cropped_to_ship%29.jpg?width=1000",
    credit: "Francis Godolphin Osbourne Stuart / Wikimedia Commons (Public domain)"
  },
  {
    id: "nimitz", name: "USS Nimitz", category: "ship", era: "Modern", difficulty: 3,
    aliases: ["Nimitz", "CVN-68", "USS Nimitz CVN-68", "Nimitz class carrier", "Nimitz-class aircraft carrier"],
    fact: "Two reactors let her steam for over 20 years without refuelling.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Nimitz_%28CVN-68%29.jpg?width=1000",
    credit: "United States Navy / Wikimedia Commons (Public domain)"
  },
];

const CATEGORIES = ["tank", "afv", "plane", "helicopter", "car", "ship"];
const ERAS = ["Age of Sail", "Pioneer", "WW2", "Cold War", "Modern"];

/* Display names for categories whose id does not capitalise nicely. */
const CATEGORY_LABELS = {
  tank: "Tanks",
  afv: "AFVs",
  plane: "Aircraft",
  helicopter: "Helicopters",
  car: "Cars",
  ship: "Ships"
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VEHICLES, CATEGORIES, ERAS, CATEGORY_LABELS };
}
