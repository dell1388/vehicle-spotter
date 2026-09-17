/* Vehicle Spotter — dataset.
 * Images: Wikimedia Commons, served via Special:FilePath (resizes on demand).
 *
 * Each entry: id, name (canonical), aliases[], category, era, difficulty 1-3,
 * an optional fact shown after the answer, and images[] — up to three photos,
 * each with its own credit. A round shows one of them at random, so a vehicle
 * cannot be answered by recognising one particular picture.
 *
 * Aliases carry the real-world naming mess: nicknames, foreign names, NATO
 * reporting names, designation-only forms and common misspellings. The matcher
 * generates further variants automatically, so aliases only need the ones a
 * human would actually type.
 *
 * Players can rename entries, add or remove aliases, drop a bad photo and flag
 * broken entries while playing; those corrections live in localStorage (see
 * js/corrections.js) and can be exported from the setup screen.
 */
const VEHICLES = [
  /* --------------------------------------------------------- TANKS */
  {
    id: "m4_sherman", name: "M4 Sherman", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["Sherman", "M4", "Sherman tank", "M4A3", "M4A1", "Medium Tank M4"],
    fact: "The most-produced Allied tank of WWII — around 49,000 were built.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M4_Sherman_tank_-_Flickr_-_Joost_J._Bakker_IJmuiden.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M4A3E2_Sherman_Jumbo_75mm_gun.jpg?width=1000", credit: "http://en.wikipedia.org/wiki/User:Megapixie / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M4_Sherman_%27Grizzly%27.jpg?width=1000", credit: "Austin Ring / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "t34", name: "T-34", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["T34", "T-34-85", "T-34/85", "T 34"],
    fact: "Its sloped armour forced a complete rethink of German tank design.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tank_T-34.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_T-34_at_the_U.S._Army_Armor_%26_Cavalry_Collection.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/215%E8%99%9FT-34%E5%9D%A6%E5%85%8B.jpg?width=1000", credit: "中國軍方攝影師 / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Char_T-34.jpg?width=1000", credit: "Antonov14 / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "tiger_i", name: "Tiger I", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["Tiger", "Tiger 1", "Panzer VI", "Panzerkampfwagen VI", "PzKpfw VI", "Tiger tank"],
    fact: "So feared that Allied crews reported 'Tigers' far more often than existed.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29.2.jpg?width=1000", credit: "Scheck / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/TigerI_Saumur.jpg?width=1000", credit: "Rickard Ångman / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/TigerITankTunis.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "tiger_ii", name: "Tiger II", category: "tank", era: "WW2", difficulty: 2,
    aliases: ["King Tiger", "Königstiger", "Konigstiger", "Tiger 2", "Royal Tiger", "Panzer VI Ausf B", "Königstiger tank"],
    fact: "At nearly 70 tonnes it broke bridges and drank fuel.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-721-0398-21A%2C_Frankreich%2C_Panzer_VI_%28Tiger_II%2C_K%C3%B6nigstiger%29.jpg?width=1000", credit: "Wagner / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tiger_II_mg_7802.jpg?width=1000", credit: "Rama / Wikimedia Commons (CC BY-SA 2.0 fr)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tiger_II_La_Gleize2008.jpg?width=1000", credit: "LesMeloures / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "panther", name: "Panther", category: "tank", era: "WW2", difficulty: 2,
    aliases: ["Panther tank", "Panzer V", "Panzerkampfwagen V", "PzKpfw V", "Panther Ausf G"],
    fact: "Germany's answer to the T-34, rushed into service at Kursk.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-H26258%2C_Panzer_V_%22Panther%22.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panther_II_US_Army_Armor_%26_Cavalry_Collection.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FF_Panther.jpg?width=1000", credit: "Aplett / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "panzer_iv", name: "Panzer IV", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 4", "Panzerkampfwagen IV", "PzKpfw IV", "Pz IV", "PanzerIV"],
    fact: "The only German tank in production for the entire war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzermuseum_Munster_2010_0128_b.jpg?width=1000", credit: "Banznerfahrer Georgfotoart / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Duitse_Panzerkampfwagen_IV%2C_Ausf%C3%BChrung_D%2C_van_9._Panzerdivision_tijdens_de_opmars_in_mei_1940_2000-336-001.jpg?width=1000", credit: "Losse Fotografische Objecten / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_IV_1.jpg?width=1000", credit: "Mark Pellegrini / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "panzer_iii", name: "Panzer III", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 3", "Panzerkampfwagen III", "PzKpfw III", "Pz III"],
    fact: "The German mainstay early in the war, later outgunned.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PzKpfwIIIF.Saumur.000a1y8q.jpg?width=1000", credit: "User:Fat yankey / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_III_tankfest_2023B.JPG?width=1000", credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_III_Ausf._F_U.S._Army_Armor_%26_Cavalry_Collection.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "panzer_ii", name: "Panzer II", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 2", "Panzerkampfwagen II", "PzKpfw II", "Pz II"],
    fact: "A light tank that carried the early blitzkrieg campaigns.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_II_Saumur.JPG?width=1000", credit: "Matthias Holländer / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PanzerIISaumur.jpg?width=1000", credit: "MWAK / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Een_Flammpanzer_II_Flamingo_van_Panzer_Abteilung_%28F%29_100_in_de_Axelsestraat_AC005973.jpg?width=1000", credit: "Fotoafdrukken Koninklijke Landmacht / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "panzer38t", name: "Panzer 38(t)", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 38", "Pz 38(t)", "LT vz 38", "Panzerkampfwagen 38(t)"],
    fact: "A Czech design pressed into German service after 1939.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_38%28t%29_Ausf._S.jpg?width=1000", credit: "Werner Willmann / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzerkampfwagen_38_3.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-769-0229-26%2C_Frankreich%2C_Panzersoldat%2C_Panzer_38%28t%29.jpg?width=1000", credit: "Borchert, Erich (Eric) / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "stug3", name: "Sturmgeschütz III", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["StuG III", "StuG 3", "StuG", "Sturmgeschutz III", "Assault gun StuG"],
    fact: "A turretless assault gun that became Germany's most-produced armoured vehicle.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SNC15697_%285853637442%29_b.jpg?width=1000", credit: "Roland Turner from Birmingham, Great Britain Georgfotoart / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_B_145_Bild-F016202-23A%2C_Russland%2C_Sturmgesch%C3%BCtz_III_vor_Ortschaft.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/StuG_III_Ausf._G.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "jagdpanther", name: "Jagdpanther", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Jagd Panther", "Panzerjäger V", "Sd Kfz 173"],
    fact: "A Panther hull carrying the famous 88 mm anti-tank gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdpanzer_V_Jagdpanther_1.jpg?width=1000", credit: "Darkone (talk · contribs) / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdpanther_IWM_Duxford.JPG?width=1000", credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdpanther_IWM.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "hetzer", name: "Hetzer", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Jagdpanzer 38", "Jagdpanzer 38(t)", "Hetzer tank destroyer"],
    fact: "Small, cheap and low — hard to spot and harder to hit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Le%C5%A1any_-_vojensk%C3%A9_muzeum%2C_Tankov%C3%BD_den_2024%2C_uk%C3%A1zky%2C_Hetzer%2C_obr01.jpg?width=1000", credit: "Roman Mifek / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdpanzer_38%28t%29_Hetzer_in_the_Texas_Military_Forces_Museum.jpg?width=1000", credit: "Articseahorse / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-715-0213A-25%2C_Ungarn%2C_Jagdpanzer_%22Hetzer%22.jpg?width=1000", credit: "Kreutzer, Wilhelm / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "elefant", name: "Elefant", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Ferdinand", "Elephant", "Panzerjäger Tiger (P)"],
    fact: "Built on a rejected Tiger hull design by Porsche.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Elefant_USAOM-01.jpg?width=1000", credit: "Scott Dunham / Wikimedia Commons (CC BY 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-313-1004-25%2C_Italien%2C_Panzer_%22Elefant%22.jpg?width=1000", credit: "Vack / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "maus", name: "Panzer VIII Maus", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Maus", "Mouse", "Panzer 8 Maus"],
    fact: "At 188 tonnes the heaviest tank ever built; only two were made.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Maus_2025_b.jpg?width=1000", credit: "DokiDotto Georgfotoart / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Maus_rear_2025_b.jpg?width=1000", credit: "DokiDotto Georgfotoart / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/0637_-_Moskau_2015_-_Panzermuseum_Kubinka_%2825795638654%29.jpg?width=1000", credit: "Uwe Brodrecht / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "kv1", name: "KV-1", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["KV1", "Kliment Voroshilov", "KV", "kv1s"],
    fact: "Early German anti-tank guns simply bounced off it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9A%D0%92-1_%D1%83_%D0%B4%D0%B8%D0%BE%D1%80%D0%B0%D0%BC%D1%8B_%C2%AB%D0%9F%D1%80%D0%BE%D1%80%D1%8B%D0%B2_%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D1%8B_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0%C2%BB._%D0%92%D0%B8%D0%B4_%D1%81%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B8-%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B0.JPG?width=1000", credit: "WolfDW / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/KV-1S_in_the_Great_Patriotic_War_Museum_5-jun-2014_Front.jpg?width=1000", credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/KV1B_Heavy_Tank_at_the_Tank_Museum%2C_Bovington.jpg?width=1000", credit: "Mightyhansa / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "is2", name: "IS-2", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["IS2", "JS-2", "Josef Stalin tank", "Iosif Stalin"],
    fact: "Built to crack fortifications with a 122 mm gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Belarus-Minsk-Museum_of_GPW_Exhibition-5.jpg?width=1000", credit: "Hanna Zelenko / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IS-2_tank_Krakow.jpg?width=1000", credit: "V8powerage / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IS-2_Cubinka_1.jpg?width=1000", credit: "No machine-readable author provided. Saiga20K assumed (based on copyright claims). / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "su100", name: "SU-100", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["SU100", "Su 100"],
    fact: "A T-34-based tank destroyer with a long 100 mm gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-100_-_TankBiathlon2013-07.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SU-100%2C_Artillery_museum%2C_Saint-Petersburg_pic1.JPG?width=1000", credit: "Alf van Beem / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-100_spatg.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "churchill", name: "Churchill", category: "tank", era: "WW2", difficulty: 2,
    aliases: ["Churchill tank", "Churchill Mk VII", "Infantry Tank Mk IV"],
    fact: "Slow, but able to climb slopes other tanks could not.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Churchill_IV_%287527957742%29.jpg?width=1000", credit: "Simon Q from United Kingdom / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Churchill_tanks_of_9th_Royal_Tank_Regiment_during_an_exercise_at_Tilshead_on_Salisbury_Plain%2C_31_January_1942._H16962.jpg?width=1000", credit: "Malindine E G (Lt), Spender H (Lt), War Office official photographer / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Churchill_Mk_VI_tank_KID4709.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "cromwell", name: "Cromwell", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Cromwell tank", "Cruiser Mk VIII"],
    fact: "One of the fastest Allied tanks of the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cromwell_%28A27M%29_front-right_2017_Bovington.jpg?width=1000", credit: "Morio / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Puckapunyal-Cromwell-2.jpg?width=1000", credit: "User:Bukvoed / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "matilda2", name: "Matilda II", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Matilda", "Matilda 2", "Infantry Tank Mk II", "Queen of the Desert"],
    fact: "Nearly immune to Italian guns in the early desert war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A12_Matilda_II_%E2%80%98T10459%E2%80%99_%E2%80%9CTHE_PRINCESS_ROYAL%E2%80%9D_%2849909226038%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "valentine", name: "Valentine", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Valentine tank", "Infantry Tank Mk III"],
    fact: "Britain's most-produced tank design of the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Valentine_II_%E2%80%985-40%E2%80%99_-_Patriot_Museum%2C_Kubinka_%2838390149682%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Valentine_VI_Base_Borden_Military_Museum_2.jpg?width=1000", credit: "JustSomePics / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Valentine_Tank_Mk_VIIA_no_838.jpg?width=1000", credit: "Mzajac / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "crusader", name: "Crusader", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Crusader tank", "Cruiser Mk VI"],
    fact: "Fast across the desert, but mechanically fragile.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Crusader_MkIII_%E2%80%98T126272%E2%80%99_%2836590905746%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "firefly", name: "Sherman Firefly", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Firefly", "Sherman VC", "M4 Firefly"],
    fact: "A Sherman rearmed with a 17-pounder that could kill a Tiger.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Sherman_Firefly_Namur.jpg?width=1000", credit: "U.S. ARMY CENTER OF MILITARY HISTORY / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sherman_Firefly_9-08-2008_15-05-43.JPG?width=1000", credit: "Paul Hermans / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loading_17_pounder_rounds_into_Sherman_Firefly_1944_IWM_B_8793.jpg?width=1000", credit: "No 5 Army Film & Photographic Unit : Wilkes (Sgt) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m3_lee", name: "M3 Lee", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Lee", "M3 Grant", "Grant", "General Lee", "m3"],
    fact: "Its main gun sat in a side sponson rather than the turret.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AlfredPalmerM3tank1942b_crop2.jpg?width=1000", credit: "Alfred T. Palmer / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M3-lee-camp-polk.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M3-lee-chrysler-arsenal-2.jpg?width=1000", credit: "Alfred T. Palmer / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m3_stuart", name: "M3 Stuart", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Stuart", "Honey", "Light Tank M3", "m3"],
    fact: "British crews nicknamed it the Honey for its smooth ride.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stuart_tankfest_2023.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "m18_hellcat", name: "M18 Hellcat", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["M18", "M18 GMC", "Hellcat tank destroyer"],
    fact: "The fastest tracked armoured vehicle of the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M18_hellcat_side.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "m10", name: "M10 Wolverine", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["M10", "Wolverine", "M10 tank destroyer", "M10 GMC"],
    fact: "An open-topped tank destroyer built on a Sherman chassis.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M10_tank_destroyer_italy_1945_sm.jpg?width=1000", credit: "U.S. Army / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M10_Disembarks_Normandy.jpg?width=1000", credit: "Conseil Régional de Basse-Normandie / National Archives USA / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M10-Achilles-latrun-1.jpg?width=1000", credit: "No machine-readable author provided. Bukvoed assumed (based on copyright claims). / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "chiha", name: "Type 97 Chi-Ha", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Chi-Ha", "Type 97", "ChiHa"],
    fact: "Japan's main medium tank of the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_97_Chi-Ha_in_the_Great_Patriotic_War_Museum_5-jun-2014.jpg?width=1000", credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_97_Chi-Ha_in_museums.jpg?width=1000", credit: "Kakidai / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chi-Ha_tank_on_Shumshu_island.jpg?width=1000", credit: "Ministry of Defence of the Russian Federation / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "centurion", name: "Centurion", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["Centurion tank", "FV4007"],
    fact: "Arrived too late for WWII and served for decades after it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Centurion_cfb_borden_1.JPG?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Centurion_Tank_AWM.jpg?width=1000", credit: "CommanderOzEvolved / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Centurion_Tank_outside_the_Redoubt_Fortress.jpg?width=1000", credit: "en:User:Ksimisk / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "t55", name: "T-54/55", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["T-55", "T-54", "T55", "T54", "type 59"],
    fact: "The most-produced tank in history.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-55_4.jpg?width=1000", credit: "John Harwood / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-54_tank_in_Vietnam_Military_History_Museum.jpg?width=1000", credit: "Z3144228 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "t62", name: "T-62", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T62"],
    fact: "The first tank in service with a smoothbore main gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ParkPatriot2015part10-12.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-62_withdraws_from_Afghanistan.JPEG?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Syrian_T-62_Tank_Destroyed_in_Lebanon_by_the_IDF%2C_1982.jpg?width=1000", credit: "Israel Press and Photo Agency (I.P.P.A.) photographer / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "t64", name: "T-64", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T64"],
    fact: "Introduced the autoloader that removed the fourth crewman.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-64BV_mod_2017%2C_Kyiv_2021%2C_16.jpg?width=1000", credit: "VoidWanderer / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Object_430_%28T-64_prototype%29.jpg?width=1000", credit: "Serguei S. Dukachev / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-64BV_tank%2C_Kyiv%2C_2018_29.jpg?width=1000", credit: "VoidWanderer / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "t72", name: "T-72", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["T72"],
    fact: "Exported so widely it has fought on both sides of many wars.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alabino05042017-40.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Georgian_T-72Sim1_01.jpg?width=1000", credit: "SGT Kalie Jones / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-72M1_%E2%80%983243%E2%80%99_%E2%80%93_Tankfest_2017_%2844456377695%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "t80", name: "T-80", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T80"],
    fact: "A gas-turbine Soviet tank, fast and very thirsty.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-80BVM.jpg?width=1000", credit: "Ministry of Defence of the Russian Federation / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-80_during_maneuvers.JPEG?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-80U_ROKA_%EC%A0%9C3%EA%B8%B0%EA%B0%91%EC%97%AC%EB%8B%A8.jpg?width=1000", credit: "박종훈 / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "m47", name: "M47 Patton", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["M47"],
    fact: "A stopgap Patton rushed out during the Korean War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M47.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M47_Patton_Fort_Meade.jpg?width=1000", credit: "Wilson44691 / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M47_Patton_II_-_Dresden.jpg?width=1000", credit: "Pudelek (Marcin Szala) / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "m48", name: "M48 Patton", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["M48", "M48A3"],
    fact: "The American mainstay of the Vietnam War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kampfpanzer_M_48_A2_C.JPG?width=1000", credit: "Huhu / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M48_Medium_Tank_Patton_at_Fort_Greely_Alaska%2C_14th_April_1955.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M48_Patton_with_E202_Ensure.jpg?width=1000", credit: "Lieutenant General John H. Hay, Jr. DEPARTMENT OF THE ARMY. / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m60", name: "M60 Patton", category: "tank", era: "Cold War", difficulty: 2,
    aliases: ["M60", "M60A1", "M60A3"],
    fact: "America's main battle tank until the Abrams arrived.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M60_Patton_Tank_Fort_Lewis_Military_Museum.jpg?width=1000", credit: "Articseahorse / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Left_side_view_of_M60A3_tank_during_Reforger_82.jpg?width=1000", credit: "Bob Simons / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M-60A3_near_Giessen_in_Germany_1985.JPEG?width=1000", credit: "Tech. Sgt. Boyd Belcher / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m103", name: "M103", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["M103 heavy tank"],
    fact: "A 120 mm heavy tank built to counter Soviet heavies.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M103_tankfest_2024.JPG?width=1000", credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Camp_Roberts_M103.jpg?width=1000", credit: "Big Juju / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M103_Heavy_tank_at_Ft_Lewis_Military_Museum.JPG?width=1000", credit: "Bachcell at English Wikipedia / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "chieftain", name: "Chieftain", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Chieftain tank", "FV4201"],
    fact: "Heavily armoured and famously underpowered.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chieftain_Tank_%289628802829%29.jpg?width=1000", credit: "Peter Trimming from Croydon, England / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Chieftain_Tanks_at_Canadian_Army_Trophy_Competition_in_1979.jpg?width=1000", credit: "Frank G. Poster / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chieftain_Tank_on_Heavy_Vehicle_Trailer.jpg?width=1000", credit: "Vehicles Branch REME / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "challenger1", name: "Challenger 1", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Challenger I", "Chally 1", "CR1"],
    fact: "Dominated the 1991 Gulf War tank battles.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger_1MBT_Mk_3_%287527916878%29.jpg?width=1000", credit: "Simon Q from United Kingdom / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger1MBT.JPEG?width=1000", credit: "SGT. Brian Gavin, USA / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger_tank_%28537575112%29.jpg?width=1000", credit: "allen watkin from London, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "leopard1", name: "Leopard 1", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Leopard I", "Leo 1", "Leopard 1A5"],
    fact: "Chose speed and mobility over thick armour.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_1A5.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "amx30", name: "AMX-30", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["AMX30", "AMX 30"],
    fact: "France's Cold War main battle tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AMX-30B_U.S._Army_Armor_%26_Cavalry_Collection.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AMX-30_Roland_img_2306.jpg?width=1000", credit: "Rama / Wikimedia Commons (CC BY-SA 2.0 fr)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AMX-30_img_2330.jpg?width=1000", credit: "Rama / Wikimedia Commons (CC BY-SA 2.0 fr)" },
    ]
  },
  {
    id: "sheridan", name: "M551 Sheridan", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Sheridan", "M551"],
    fact: "Light enough to be dropped by parachute.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M551_Sheridan_%22Origin_of_Sin%22_of_25th_Infantry_Division_in_Thick_Jungle_Vietnam_1969_%28CC-059822%29.jpg?width=1000", credit: "SP5 Burt W. Peterson / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M551_Sheridan_Armor_%26_Cavalry_Collection_2023.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M551_Sheridan_3slash4th_Cavalry_December_1969_%28color%29.jpg?width=1000", credit: "United States Army / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "pt76", name: "PT-76", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["PT76"],
    fact: "An amphibious light tank that swims under its own power.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Verkhnyaya_Pyshma_Tank_Museum_2012_0181.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FAPLA_PT-76.JPG?width=1000", credit: "User:Katangais / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Destroyed_PT76_tank_at_Ben_Het.jpg?width=1000", credit: "Starry, Donn A Mounted combat in Vietnam. DEPARTMENT OF THE ARMY. Post-Work: User:W.wolny / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m1_abrams", name: "M1 Abrams", category: "tank", era: "Modern", difficulty: 1,
    aliases: ["Abrams", "M1", "M1A1", "M1A2", "M1A2 SEP", "Abrams tank"],
    fact: "Powered by a gas turbine — it whines rather than rumbles.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M1A2_SEP_v3.jpg?width=1000", credit: "Spc. Kali Ecton / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M1A1_Abrams_with_Integrated_Management_System_new_Tank_Urban_Survivability_Kit_Dec._2007.jpg?width=1000", credit: "Staff Sergeant Jason T. Bailey (U.S. Air Force) / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M1A1_Abrams_arrives_in_Germany_for_Ukraine-1.jpg?width=1000", credit: "Spc. Christian Carrillo / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "challenger2", name: "Challenger 2", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Challenger II", "Challenger", "Chally 2", "CR2"],
    fact: "Holds the record for the longest confirmed tank-on-tank kill.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg?width=1000", credit: "Graeme Main / Wikimedia Commons (OGL v1.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger2-Bergen-Hohne-Training-Area-2.jpg?width=1000", credit: "Fiorellino / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/QRH_Challenger_2s_in_Estonia_MOD_45167094.jpg?width=1000", credit: "Cpl Rigg / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "leopard2", name: "Leopard 2", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Leopard II", "Leopard", "Leo 2", "Leopard 2A6", "Leopard 2A7"],
    fact: "Germany's main battle tank, used by more than a dozen armies.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_2_A7V_313_Bad_Frankenhausen_2024.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Early_Leopard_2_Tank_Prototype_at_Yuma_Proving_Ground%2C_1975.jpg?width=1000", credit: "M. V. Nelson / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/LEOPARD_2A9.jpg?width=1000", credit: "Meumeu03 / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "t90", name: "T-90", category: "tank", era: "Modern", difficulty: 2,
    aliases: ["T90", "T-90A", "T-90M"],
    fact: "A modernised descendant of the T-72 line.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-90SM_-_RAE2013-04.jpg?width=1000", credit: "Aleksey Kitaev / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Firing_T-90A_main_battle_tank.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "t14", name: "T-14 Armata", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Armata", "T14"],
    fact: "Unmanned turret, with the crew in an armoured capsule.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/VDayRehearsal05052016-28.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-14_Armata_%2841072263955%29.jpg?width=1000", credit: "Dmitriy Fomin from Moscow, Russia / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "merkava", name: "Merkava", category: "tank", era: "Modern", difficulty: 2,
    aliases: ["Merkava Mk4", "Merkava 4", "merkava mk 4m"],
    fact: "Engine mounted at the front to shield the crew.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Merkava-Mk4m-whiteback01.jpg?width=1000", credit: "Source: Israel Defense Forces Spokesperson UnitDerivative: User:MathKnight / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Merkava4m-Windbreaker-0036a.jpg?width=1000", credit: "IDF Spokesperson Unit, modification by User:MathKnight / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Merkava4-atzmaut1.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "leclerc", name: "Leclerc", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["AMX Leclerc", "AMX-56 Leclerc"],
    fact: "France's autoloaded main battle tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Leclerc-openphotonet_PICT6015.JPG?width=1000", credit: "Daniel Steger (Lausanne,Switzerland) / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/French_Leclerc_main_battle_tank_during_Strong_Europe_Tank_Challenge_exercise%2C_2017.jpg?width=1000", credit: "Staff Sgt. Kathleen Polanco; 7th Army Training Command / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Leclerc-IMG_1708.jpg?width=1000", credit: "Rama / Wikimedia Commons (CC BY-SA 2.0 fr)" },
    ]
  },
  {
    id: "ariete", name: "C1 Ariete", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Ariete"],
    fact: "Italy's main battle tank, built by Iveco and Oto Melara.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Italian_Army_-_4th_Tank_Regiment_-_Ariete_tanks_during_an_exercise_at_Capo_Teulada_October_2022.jpg?width=1000", credit: "Italian Army / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Italian_Army_-_Ariete_C2_main_battle_tank_during_acceptance_trials_01.jpg?width=1000", credit: "Italian Army / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "k2_panther", name: "K2 Black Panther", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["K2", "Black Panther"],
    fact: "South Korean, with a suspension that lets it kneel and lean.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/K2_Tank_Joins_the_Fight_with_eFP_Battle_Group_Poland_-_2.jpg?width=1000", credit: "Staff Sgt. Matthew Foster / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%EC%9C%A1%EA%B5%B0_K2%EC%A0%84%EC%B0%A8_%287445555272%29.jpg?width=1000", credit: "대한민국 국군 Republic of Korea Armed Forces / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polish_Army_K2_at_Radom-2023.jpg?width=1000", credit: "Boevaya mashina / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "type10", name: "Type 10", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Type 10 tank", "TK-X"],
    fact: "A light, compact Japanese tank built for narrow roads.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Type10_and_Type74_Tanks.JPG?width=1000", credit: "STRONGlk7 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/JGSDF_Type10_tank_20120527-11.JPG?width=1000", credit: "Los688 / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/JGSDF_Type10_tank_20120527-12.JPG?width=1000", credit: "Los688 / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "type99", name: "Type 99", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Type 99 tank", "ZTZ-99", "ZTZ99"],
    fact: "China's main battle tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ZTZ-99A_tank_front_20170902.jpg?width=1000", credit: "Tyg728 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },

  /* ------------------------------------ ARMOURED FIGHTING VEHICLES */
  {
    id: "bradley", name: "M2 Bradley", category: "afv", era: "Modern", difficulty: 2,
    aliases: ["Bradley", "M2A2 Bradley", "Bradley IFV", "M2"],
    fact: "Carries infantry and kills tanks with TOW missiles.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/US_M2A1_Bradley_deployed_to_Saudi_Arabia_during_Operation_Desert_Shield.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "bmp1", name: "BMP-1", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BMP1", "BMP"],
    fact: "The first true infantry fighting vehicle.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BWP-1_Baltops_2016_0283.jpg?width=1000", credit: "Łukasz Golowanow, Konflikty.pl / Wikimedia Commons (Attribution)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BMP-1%2C_troop_compartment.jpg?width=1000", credit: "Ville Miettinen from Helsinki, Finland / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BMP-1_in_Lebyazhye_rear.jpg?width=1000", credit: "One half 3544 / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "bmp2", name: "BMP-2", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BMP2"],
    fact: "A BMP-1 rebuilt around a 30 mm autocannon.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BMP-2_parade_ukraine.jpg?width=1000", credit: "self / Wikimedia Commons (CC BY-SA 1.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Damaged_Iraqi_BMP-2.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Army_BMP-2.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "btr80", name: "BTR-80", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BTR80", "BTR"],
    fact: "An eight-wheeled amphibious armoured personnel carrier.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2011_Moscow_Victory_Day_Parade_%28360-06%29_%28cropped%29.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BTR-80_swimming.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m113", name: "M113", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["M113 APC", "M-113"],
    fact: "An aluminium box on tracks, built in enormous numbers.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Allied_Spirit_I_150126-A-LO967-001.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "stryker", name: "Stryker", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["M1126 Stryker", "Stryker ICV"],
    fact: "Eight wheels, air-transportable, built for rapid deployment.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M-SHORAD_Stryker.jpg?width=1000", credit: "Christopher Kaufmann / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stryker_vehicle_during_a_situational_training_exercise_at_the_7th_Army_Training_Command%27s_Grafenw%C3%B6hr_Training_Area%2C_May_5%2C_2022_%287178338%29.jpg?width=1000", credit: "U.S. Army photo by Markus Rauchenberger / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IVAS_in_Stryker.jpg?width=1000", credit: "U.S. Army / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "warrior", name: "Warrior", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["FV510 Warrior", "Warrior IFV"],
    fact: "The British Army's tracked infantry fighting vehicle.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuwaiti_Desert_Warrior_IFV_Joint_Exercise_2014.jpg?width=1000", credit: "Sgt. Marcus Fichtl; 2nd Brigade Combat Team, 4th Infantry Division Public Affairs / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FV515_Warrior_Battery_Command_Vehicle.jpg?width=1000", credit: "Pierre-Olivier B / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Warrior_on_Salisbury_Plain_during_Exercise_Lion_Strike._MOD_45157693.jpg?width=1000", credit: "Cpl Si Longworth RLC (Phot) / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "marder", name: "Marder", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Marder IFV", "Marder 1"],
    fact: "West Germany's IFV, in service for over fifty years.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IL%C3%9C_der_Bundeswehr_am_24.09.2012_--_Marder_AT_%28cropped%29.jpg?width=1000", credit: "synaxonag / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marder_2_%28Frontansicht%29.jpg?width=1000", credit: "Suit / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BundeswehrMarderA5.jpg?width=1000", credit: "KrisfromGermany / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "scorpion", name: "FV101 Scorpion", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Scorpion", "FV101"],
    fact: "So light it could be carried by transport aircraft in pairs.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scorpion_CRVT_%284119399295%29.jpg?width=1000", credit: "Irish Defence Forces from Ireland / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brunei_FV101_Scorpion.jpg?width=1000", credit: "Chin Yu Chu / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FV101_Scorpion_Iraq_1991.jpg?width=1000", credit: "PHC HOLMES / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "humvee", name: "Humvee", category: "afv", era: "Modern", difficulty: 1,
    aliases: ["HMMWV", "Hummer", "High Mobility Multipurpose Wheeled Vehicle"],
    fact: "The Jeep's replacement, and the basis for the civilian Hummer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Crows-M153CommonRemotelyOperatedWeaponStationOnHumvee.jpg?width=1000", credit: "(U.S. Army photo by Staff Sgt. Armando R. Limon) / Wikimedia Commons (Public domain)" },
    ]
  },

  /* ------------------------------------------------------ AIRCRAFT */
  {
    id: "spitfire", name: "Supermarine Spitfire", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["Spitfire", "Spit", "Supermarine Spit", "Spitfire Mk IX"],
    fact: "Its elliptical wing was chosen for aerodynamics, not looks.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Britain%27s_New_Spitfire_44-pf-116-2016-001-ac.jpg?width=1000", credit: "Office for Emergency Management. Office of War Information. Domestic Operations Branch. Bureau of Special Serv / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spitfire_AR614_Paul_Allen_Collection.jpg?width=1000", credit: "LynnGarrison9281 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spitfire_%28At_Wright-Patterson%29.jpg?width=1000", credit: "Fritzmann2002 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "hurricane", name: "Hawker Hurricane", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Hurricane", "Hurri"],
    fact: "Shot down more enemy aircraft in the Battle of Britain than the Spitfire.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawker_Hurricane_Mk2C%2C_UK_-_Air_Force_AN1711615.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "p51", name: "North American P-51 Mustang", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["P-51 Mustang", "P-51", "P51", "Mustang", "P-51D"],
    fact: "A British-requested Merlin engine turned it into a long-range escort.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P-51-361.jpg?width=1000", credit: "USAAF/361st FG Association (via Al Richards) / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/North_American_P-51_Mustang_%287177600325%29.jpg?width=1000", credit: "happy days photos and art / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cavalier_Mustang.jpg?width=1000", credit: "Bzuk at English Wikipedia / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "p47", name: "Republic P-47 Thunderbolt", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["P-47", "P47", "Thunderbolt", "Jug"],
    fact: "Pilots called it the Jug; it could absorb extraordinary damage.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Republic_P-47D-22-RE_Thunderbolt_%28sn_42-25969%29.jpg?width=1000", credit: "US Air Force photo / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Republic_P-_47D_Thunderbolt_ExCC.jpg?width=1000", credit: "RAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P-47_Thunderbolt_42-25068_2012_%287977124689%29.jpg?width=1000", credit: "John5199 / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "p38", name: "Lockheed P-38 Lightning", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["P-38", "P38", "P-38 Lightning", "Fork-tailed devil"],
    fact: "German pilots called it the fork-tailed devil.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P38_Lightning.jpg?width=1000", credit: "CindyN / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_P-38G-1-LO_Lightning_LOC_fsa.8d22581.jpg?width=1000", credit: "FSA/OWI Collection / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/4_Lockheed_P-38_Lightnings_in_formation.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "p40", name: "Curtiss P-40 Warhawk", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["P-40", "P40", "Warhawk", "Tomahawk", "Kittyhawk"],
    fact: "Wore the shark-mouth nose art of the Flying Tigers.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Curtiss_P-40M_Warhawk_%272104590_-_44%27_%28G-KITT%29_%2826830598751%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Curtiss_P-40N-5-CU_Warhawk.jpg?width=1000", credit: "Geographer / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "corsair", name: "Vought F4U Corsair", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["F4U", "Corsair", "F4U Corsair", "Whistling Death"],
    fact: "Its inverted gull wing was needed to clear a huge propeller.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chance_vought_corsair_f4u-5n_FAH-609.jpg?width=1000", credit: "User:Bernardo Moncada / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vought_F4U-1_Corsairs_of_VF-17_in_flight%2C_1943.jpg?width=1000", credit: "USN / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vought_F4U_Corsair_%28USMC%29.jpg?width=1000", credit: "Gerry Metzler / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "hellcat", name: "Grumman F6F Hellcat", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["F6F", "Hellcat", "F6F Hellcat"],
    fact: "Built specifically to beat the Zero, and it did.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hellcats_F6F-3%2C_May_1943.jpg?width=1000", credit: "USN; / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grumman_F6F-3_Hellcat_of_VF-1_in_flight_over_California_%28USA%29%2C_in_1943_%2880-G-K-605%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grumman_F6F_Hellcat%2C_Chino%2C_California.jpg?width=1000", credit: "Greg Goebel / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "zero", name: "Mitsubishi A6M Zero", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["Zero", "A6M", "Zeke", "Mitsubishi Zero", "A6M Zero"],
    fact: "Extraordinary range and agility, bought by leaving armour off.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A6M3_Zero_N712Z_1.jpg?width=1000", credit: "Kogo / Wikimedia Commons (GFDL)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi-A6M-Zero-Peleliu-2016-Luka-Peternel.jpg?width=1000", credit: "Luka Peternel / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2017RedBullAirRaceChibaMitsubishiA6MZero.jpg?width=1000", credit: "海人 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "bf109", name: "Messerschmitt Bf 109", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Bf 109", "Bf109", "Me 109", "Me109", "Messerschmitt 109", "109", "Messerschmidt Bf 109"],
    fact: "The most-produced fighter aircraft in history — nearly 34,000 built.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-662-6659-37%2C_Flugzeug_Messerschmitt_Me_109.jpg?width=1000", credit: "Hebenstreit / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Messerschmitt_Bf_109_V1_3-seiten_neu.jpg?width=1000", credit: "Original uploader was B. Huber at de.wikipedia / Wikimedia Commons (CC BY-SA 2.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Messerschmitt_Bf_109_G-5_3-seiten_neu.jpg?width=1000", credit: "Original uploader was B. Huber at de.wikipedia / Wikimedia Commons (CC BY-SA 2.0 de)" },
    ]
  },
  {
    id: "fw190", name: "Focke-Wulf Fw 190", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Fw 190", "FW190", "Focke Wulf 190", "Butcher Bird", "Würger"],
    fact: "Outclassed the Spitfire V on arrival and forced a redesign.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fw_190A-3_JG_2_in_Britain_1942.jpg?width=1000", credit: "RAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Captured_Focke-Wulf_Fw_190_in_flight_near_NAS_Patuxent_River_in_1944.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Focke-Wulf_Fw_190_F-8_%28SA-kuva_155390%29.jpg?width=1000", credit: "Sot.virk. Eino Nurmi / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "me262", name: "Messerschmitt Me 262", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Me 262", "Me262", "Schwalbe", "Sturmvogel"],
    fact: "The first operational jet fighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Messerschmitt_Me_262A_at_the_National_Museum_of_the_USAF_%28cropped%29.jpg?width=1000", credit: "USAF museum / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Messerschmitt_Me_262A_Schwalbe_%2827789624790%29.jpg?width=1000", credit: "Clemens Vasters from Viersen, Germany, Germany / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "stuka", name: "Junkers Ju 87 Stuka", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["Stuka", "Ju 87", "Ju87", "Junkers Ju 87"],
    fact: "Its dive siren, the Jericho trumpet, existed purely to terrify.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Junkers_Ju_87Ds_in_flight_Oct_1943.jpg?width=1000", credit: "PK-Kriegsberichter Karnerth / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Een_met_bommen_beladen_Junkers_Ju_87_Stuka_op_een_gecamoufleerde_opstelplaats_op_Fliegerhorst_Schiphol_%282189-01-25-002%29.jpg?width=1000", credit: "Vliegvelden in oorlogstijd / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Het_prototype_van_de_Junkers_Ju_87_V4_%27Stuka%27_bij_de_fabrikek_in_1936_2157_001-053.jpg?width=1000", credit: "Fotoafdrukken Koninklijke Luchtmacht / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "he111", name: "Heinkel He 111", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["He 111", "He111", "Heinkel 111"],
    fact: "The glazed nose made the whole cockpit one glass dome.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-343-0694-21%2C_Belgien-Frankreich%2C_Flugzeug_Heinkel_He_111.jpg?width=1000", credit: "Schödl (e) / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Heinkel_He_111_P-2_%28Wk_Nr_1526%29_%286956565308%29_%284%29.jpg?width=1000", credit: "Clemens Vasters from Viersen, Germany / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Heinkel_He_111C_of_Deutsche_Luft_Hansa_on_the_ground_in_D%C3%BCbendorf_%28LBS_SR01-00070%29.jpg?width=1000", credit: "Swissair ETH-Bibliothek Zürich, Bildarchiv/Stiftung Luftbild Schweiz / Fotograf: Swissair / LBS_SR01-00070 / C / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "ju52", name: "Junkers Ju 52", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ju 52", "Ju52", "Tante Ju", "Iron Annie"],
    fact: "Corrugated metal skin and three engines.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ju-Air_Junkers_Ju-52_in_flight_over_Austria.jpg?width=1000", credit: "Bernd K / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/D-Anoy_JU-52_Junkers_52_Rudolf_von_Thuena%2C_Parque_de_visitantes%2C_Aeropuerto_de_M%C3%BAnich%2C_Alemania%2C_2012-05-27%2C_DD_01.JPG?width=1000", credit: "Diego Delso / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CASA_352_%28AKA_Junkers_Ju_52-3m%29_at_RAF_Museum_Cosford.jpg?width=1000", credit: "Rept0n1x / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "b17", name: "Boeing B-17 Flying Fortress", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["B-17", "B17", "Flying Fortress", "Fortress", "B-17G", "Boeing B-17"],
    fact: "Named by a reporter who counted the machine guns bristling from it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B17_-_Chino_Airshow_2014_%28framed%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "b24", name: "Consolidated B-24 Liberator", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["B-24", "B24", "Liberator"],
    fact: "Built in greater numbers than the B-17, if less celebrated.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Maxwell_B-24_%28cropped%29.jpg?width=1000", credit: "U.S. Air Force photos / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Consolidated_B-24J_Liberators_under_construction_at_the_Consolidated-Vultee_plant_in_San_Diego%2C_CA%2C_1944.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Consolidated_B-24D_Liberators_of_the_93rd_Bomb_Group_flying_in_formation%2C_circa_in_1943_%286365079%29.jpg?width=1000", credit: "U.S. Army Air Forces / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "b25", name: "North American B-25 Mitchell", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["B-25", "B25", "Mitchell"],
    fact: "Flew the Doolittle Raid off a carrier deck.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B25_Mitchell_-_Chino_Airshow_2014_%2814033501440%29.jpg?width=1000", credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Een_formatie_North_American_B-25_J_Mitchell_middelzware_bommenwerpers_van_het_in_1946_geformeerde_16_Squadron_van_de_ML-KNIL.jpg?width=1000", credit: "Fotoafdrukken Koninklijke Marine / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/North_American_B-25_Mitchell.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "b29", name: "Boeing B-29 Superfortress", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["B-29", "B29", "Superfortress"],
    fact: "Pressurised and remote-controlled gun turrets — a generation ahead.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_TB-29-70-BW_Superfortress_%E2%80%98469972%E2%80%99_%E2%80%9CDoc%E2%80%9D_%28N69972%29_%2850871638276%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_B-29_Superfortress_at_Davis-Monthan_AFB.jpg?width=1000", credit: "USAAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_B-29%2C_FIFI_%2831%29.jpg?width=1000", credit: "Bubba73 / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "lancaster", name: "Avro Lancaster", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Lancaster", "Lanc", "Avro Lanc"],
    fact: "The bomber of the Dambusters raid.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Britain_Memorial_flight_Avro_Lancaster_%28cropped%29.jpg?width=1000", credit: "Cpl Phil Major ABIPP / Wikimedia Commons (OGL v1.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Avro_Lancasters_flying_in_loose_formation.jpg?width=1000", credit: "Royal Air Force official photographer / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Avro_Lancaster_-_Shuttleworth_Military_Pageant_2013_%2816379209394%29.jpg?width=1000", credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "mosquito", name: "de Havilland Mosquito", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Mosquito", "Mossie", "DH.98 Mosquito", "Wooden Wonder"],
    fact: "Built largely of plywood, and fast enough to outrun fighters.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/De_Havilland_DH.98_Mosquito_B_Mk_IV_Series_2_%28restoration%29.jpg?width=1000", credit: "Fotoafdrukken Koninklijke Luchtmacht / Photo Prints, Royal Netherlands Air Force; restored by Chris Woodrich / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/De_Havilland_Mosquito_11.JPG?width=1000", credit: "Rudolph89 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DeHavilland_Mosquito_NACA_1945.jpg?width=1000", credit: "NACA Langley Research Center / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "wellington", name: "Vickers Wellington", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Wellington", "Wimpy"],
    fact: "A geodetic lattice airframe that survived remarkable damage.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vickers_Wellington.jpg?width=1000", credit: "Photographer not identified, so UK Copyright contended to have lapsed 50 years after publication. / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vickers_wellington_MF628.jpg?width=1000", credit: "Kroidkrensen / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/De_Vickers_Wellington_met_het_serienummer_L7788_en_de_rompcode_KX-E_2189-01-21-005.jpg?width=1000", credit: "Vliegvelden in oorlogstijd / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "c47", name: "Douglas C-47 Skytrain", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["C-47", "C47", "Skytrain", "Gooney Bird"],
    fact: "Dropped the paratroopers on D-Day.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/C47_Skytrain_-_Duxford_D-Day_Show_2014_%28cropped%29.jpg?width=1000", credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Douglas_C-47_Skytrain_%28Dakota%29_of_the_Indian_Air_Force.jpg?width=1000", credit: "Naman Vishwajeet / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DOUGLAS_C-47A_-_SKYTRAIN.jpg?width=1000", credit: "Carlos E. Perez S.L / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "il2", name: "Ilyushin Il-2", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Il-2", "IL2", "Sturmovik", "Shturmovik", "Il-2 Sturmovik"],
    fact: "The most-produced military aircraft ever built.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Il2_sturmovik.jpg?width=1000", credit: "no info / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ilyushin_Il-2M3_of_Flying_Heritage_Collection.jpg?width=1000", credit: "Articseahorse / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ilyushin_IL-2m3_Shturmovik_%2721%27_%2811057532965%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "yak3", name: "Yakovlev Yak-3", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Yak-3", "Yak3"],
    fact: "Small and light, and deadly at low altitude.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yakolev_Yak-3_%28115450123%29_%2825073819848%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CF15_Yak-3_ZK-YYY_040415_03.jpg?width=1000", credit: "Oren Rozen / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "sbd", name: "Douglas SBD Dauntless", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["SBD", "Dauntless", "SBD Dauntless"],
    fact: "Sank four Japanese carriers at Midway.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/NX670AM_Douglas_SBD-5_Dauntless_Bu_No_28536_Planes_of_Fame_Air_Museum_%28centered%29.jpg?width=1000", credit: "Tomás Del Coro / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_SBD_Dauntless_balanced_on_nose_cph.3a45218.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_SBD-3_Dauntless_of_VB-6_after_landing_aboard_USS_Yorktown_%28CV-5%29%2C_4_June_1942_%28NH_100740%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "spruce_goose", name: "Hughes H-4 Hercules", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Spruce Goose", "H-4 Hercules", "Hughes Flying Boat"],
    fact: "Flew once, for about a mile, in 1947.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/H-4_Hercules_2.jpg?width=1000", credit: "SDASM Archives / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hughes_H-4_Hercules_%28%22Spruce_Goose%22%29.jpg?width=1000", credit: "Steven Fine / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "f86", name: "F-86 Sabre", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-86", "F86", "Sabre", "Sabrejet"],
    fact: "Swept wings, and the MiG-15's opposite number over Korea.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-86_Sabre_hertiage_flight.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "mig15", name: "MiG-15", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["MiG15", "Mig 15", "Fagot"],
    fact: "Its arrival over Korea shocked Western air forces.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MiG-15_%2852544074366%29.jpg?width=1000", credit: "slezo / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aero-CS-102-UTI-MiG-15-UTI.jpg?width=1000", credit: "Museum Pusat TNI AU Dirgantara Mandala, Yogyakarta, Indonesia / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Letadlo_MiG-15bis_SB_%283255%29.jpg?width=1000", credit: "Martin Salajka / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mig21", name: "MiG-21", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["MiG21", "Fishbed"],
    fact: "The most-produced supersonic aircraft in history.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Croatian_MiG-21_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "mig25", name: "MiG-25", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["MiG25", "Foxbat"],
    fact: "Built of steel, not titanium, and terrifyingly fast in a straight line.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force_MiG-25.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "mig29", name: "MiG-29", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["MiG29", "Fulcrum"],
    fact: "Designed to match the F-16 and F/A-18.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/VVS_100th_IMG_0691_%287727464290%29_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "su27", name: "Su-27", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["Su27", "Sukhoi Su-27", "Flanker"],
    fact: "Large, long-ranged, and the basis for a whole family of jets.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Su-27SKM_at_MAKS-2005_airshow.jpg?width=1000", credit: "Dmitriy Pichugin / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-27SM3_flight%2C_Celebration_of_the_100th_anniversary_of_Russian_Air_Force.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ukrainian_Su-27s_during_a_Bomber_Task_Force_Europe_mission.jpg?width=1000", credit: "Senior Airman Xavier Navarro / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "su25", name: "Su-25", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Su25", "Sukhoi Su-25", "Frogfoot", "Grach", "rook"],
    fact: "The Soviet answer to the A-10.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Su-25_of_the_Russian_Air_Force_landing_at_Vladivostok_%288683076150%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "f4_phantom", name: "F-4 Phantom II", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-4", "F4 Phantom", "Phantom", "Phantom II", "McDonnell Douglas F-4"],
    fact: "Bent wings and a drooping nose; flown by three US services at once.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/QF-4_Holloman_AFB.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "f14", name: "Grumman F-14 Tomcat", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-14", "F14", "Tomcat", "F-14D"],
    fact: "Its wings sweep back automatically as it accelerates.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg?width=1000", credit: "U.S. Navy photo / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grumman_F-14_Tomcat_23.jpg?width=1000", credit: "Ad Meskens, zie ook:vliegtuigen / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grumman_F-14_Tomcat_2.JPG?width=1000", credit: "Ad Meskens / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "f15", name: "F-15 Eagle", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-15", "F15", "Eagle", "F-15C"],
    fact: "Has never been lost in air-to-air combat.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-15C_Eagle_from_the_44th_Fighter_Squadron_flies_during_a_routine_training_exercise_April_15%2C_2019.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "f16", name: "General Dynamics F-16 Fighting Falcon", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-16", "F16", "Fighting Falcon", "Viper", "F-16 Falcon"],
    fact: "Pilots almost universally call it the Viper.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-16_June_2008.jpg?width=1000", credit: "Master Sgt. Andy Dunaway / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/84606_General_Dynamics_F-16BM_11%28MR%29_39W_Pakistan_Air_Force_Konya_AFB_30.6.22_%2852233200683%29.jpg?width=1000", credit: "Colin Cooke Photo / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-16_CJ_Fighting_Falcon.jpg?width=1000", credit: "Staff Sergeant Jason Gamble / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f18", name: "F/A-18 Hornet", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-18", "F18", "Hornet", "FA-18"],
    fact: "Twin tails canted outward; the Blue Angels' aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FA-18C_desert_refueling.jpg?width=1000", credit: "US Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FA-18_Hornet_Pax_River_Museum-1.jpg?width=1000", credit: "Balon Greyjoy / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Three_RAAF_FA-18_Hornets_in_formation_after_refueling.jpg?width=1000", credit: "U.S. Air Force photo by Senior Airman Matthew Bruch / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "a4", name: "A-4 Skyhawk", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["A-4", "A4", "Skyhawk", "Scooter"],
    fact: "So small it needed no wing-folding to fit carrier lifts.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_A-4E_Skyhawk_of_VA-164_in_flight_over_Vietnam_on_21_November_1967_%286430101%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "a10", name: "Fairchild Republic A-10 Thunderbolt II", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["A-10", "A10", "Warthog", "A-10 Warthog", "Thunderbolt II", "Hog", "A-10C"],
    fact: "The airframe was essentially built around its 30 mm rotary cannon.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fairchild_Republic_A-10_Thunderbolt_II_-_32156159151.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "f117", name: "F-117 Nighthawk", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["F-117", "F117", "Nighthawk", "Wobbly Goblin"],
    fact: "All those flat facets were what 1970s computers could model.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-117_Nighthawk_Front.jpg?width=1000", credit: "Staff Sgt. Aaron Allmon II / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "sr71", name: "Lockheed SR-71 Blackbird", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["SR-71", "SR71", "Blackbird", "Habu"],
    fact: "It leaked fuel on the ground — the panels only sealed once hot.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_SR-71_Blackbird.jpg?width=1000", credit: "USAF / Judson Brohmer / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "u2", name: "Lockheed U-2", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["U-2", "U2", "Dragon Lady"],
    fact: "Glider-like wings to loiter at 70,000 feet.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Usaf.u2.750pix.jpg?width=1000", credit: "United States Department of the Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/United_States_Air_Force_Lockheed_U-2S_Dragon_Lady_80-1094_Royal_International_Air_Tattoo_2025_01.jpg?width=1000", credit: "Julian Herzog (Website) / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_ER-2_809_in_flight.jpg?width=1000", credit: "NASA/Lori Losey / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "b52", name: "B-52 Stratofortress", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["B-52", "B52", "Stratofortress", "BUFF"],
    fact: "In service since 1955, and planned to fly into the 2050s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-52_Stratofortress_assigned_to_the_307th_Bomb_Wing_%28cropped%29.jpg?width=1000", credit: "Airman 1st Class Victor J. Caputo / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "b1", name: "B-1 Lancer", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["B-1", "B1", "Lancer", "B-1B", "Bone"],
    fact: "Swing-wing supersonic bomber; crews call it the Bone.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-1B_air_refueling.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "vulcan", name: "Avro Vulcan", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["Vulcan", "Vulcan bomber"],
    fact: "A huge delta wing, and Britain's airborne nuclear deterrent.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/XH558_%28G-VLCN%29_Avro_Vulcan_-_Last_Flight_over_Farnborough_%28cropped%29.jpg?width=1000", credit: "Alastair Barbour / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "harrier", name: "Harrier", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["Harrier jump jet", "Hawker Siddeley Harrier", "Sea Harrier", "AV-8B"],
    fact: "Vectored thrust lets it take off vertically.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brooklands_Museum_Harrier.jpg?width=1000", credit: "jabberwock / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Harrier_AV-8S_Matador%2C_Armada_Espa%C3%B1ola%2C_May_1%2C_1977.jpg?width=1000", credit: "PH2 James Bishop / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Harrier-XV798-0524.jpg?width=1000", credit: "MilborneOne / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "tornado", name: "Panavia Tornado", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["Tornado", "Tornado GR4"],
    fact: "A three-nation swing-wing strike aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Tornado_GR4_MOD_45155233.jpg?width=1000", credit: "Corporal Mike Jones / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "ee_lightning", name: "English Electric Lightning", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["EE Lightning", "Lightning F6"],
    fact: "Two engines stacked vertically, and a ferocious climb rate.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/English_Electric_Lightning_F6%2C_UK_-_Air_Force_AN2260192.jpg?width=1000", credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "mirage2000", name: "Dassault Mirage 2000", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Mirage 2000", "Mirage"],
    fact: "A tailless delta, like the Mirage III before it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mirage_2000C_in-flight_2_%28cropped%29.jpg?width=1000", credit: "SRA GREG L. DAVIS, USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "tu95", name: "Tupolev Tu-95", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Tu-95", "Tu95", "Bear"],
    fact: "Turboprop-driven and loud enough to be tracked by sound.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-95_over_Moscow_Kustov_%28cropped%29.jpg?width=1000", credit: "Sergey Kustov / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "c130", name: "C-130 Hercules", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["C-130", "C130", "Hercules", "Herc", "Lockheed C-130"],
    fact: "Still in production after seventy years.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_C-130_Hercules.jpg?width=1000", credit: "U.S. Air Force photo by Tech. Sgt. Howard Blair / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "c5", name: "C-5 Galaxy", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["C-5", "C5", "Galaxy"],
    fact: "The nose hinges upward to swallow vehicles whole.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/USAF_C-5_Galaxy_in_flight.jpg?width=1000", credit: "U.S. Air Force photo by Brett Snow / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "concorde", name: "Concorde", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["Aerospatiale/BAC Concorde", "BAC Concorde", "Concord", "Supersonic Concorde"],
    fact: "Cruised at Mach 2 — New York to London in under three hours.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Airways_Concorde_G-BOAC_03.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "b747", name: "Boeing 747", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["747", "Jumbo Jet", "Jumbo", "B747"],
    fact: "The hump is the upper deck behind the cockpit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-747_Iberia.jpg?width=1000", credit: "Iberia Airlines / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "b2", name: "B-2 Spirit", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["B-2", "B2", "Spirit", "Stealth bomber"],
    fact: "A flying wing with no fuselage and no tail at all.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_F-35B_integration_flying_training_with_USAF_B-2_30092019_-_4.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "f22", name: "F-22 Raptor", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["F-22", "F22", "Raptor"],
    fact: "Cruises supersonically without using afterburner.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-22_Raptor_edit1_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "f35", name: "F-35 Lightning II", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["F-35", "F35", "Lightning II", "JSF", "Joint Strike Fighter", "fat amy"],
    fact: "One airframe in three versions, including a vertical-landing variant.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-35A_flight_%28cropped%29.jpg?width=1000", credit: "U.S. Air Force photo by Master Sgt. Donald R. Allen / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "typhoon", name: "Eurofighter Typhoon", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["Typhoon", "Eurofighter"],
    fact: "Canards ahead of the wing, built by four nations.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Eurofighter_EF-2000_Typhoon_F2_Lofting-1.jpg?width=1000", credit: "Chris Lofting / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "rafale", name: "Dassault Rafale", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["Rafale"],
    fact: "France's carrier-capable multirole fighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/QA217_-_Dassault_Rafale_-_Qatar_Air_Force_%2847734694781%29.jpg?width=1000", credit: "Dylan Agbagni (CC0) from Bordeaux, France / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dassault_Rafale_DSC04183.JPG?width=1000", credit: "David Monniaux / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dassault_Rafale_weaponry_DSC04186.JPG?width=1000", credit: "David Monniaux / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "gripen", name: "Saab JAS 39 Gripen", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Gripen", "JAS 39", "Saab Gripen"],
    fact: "Designed to operate from ordinary Swedish roads.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saab_JAS-39_Gripen_%2853079484003%29.jpg?width=1000", credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saab_JAS_39_Gripen_at_Kaivopuisto_Air_Show%2C_June_2017_%28altered%29_copy.jpg?width=1000", credit: "Tuomo Salonen / SIMFinnish Aviation Museum / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "tu160", name: "Tupolev Tu-160", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Tu-160", "Tu160", "Blackjack", "White Swan"],
    fact: "The largest and heaviest combat aircraft ever built.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Air-to-air_with_a_Tupolev_Tu-160.jpg?width=1000", credit: "Ministry of Defence/Vadim Savitsky / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-160%2C_Ukraine_-_Air_Force_AN1402163.jpg?width=1000", credit: "Oleg V. Belyakov - AirTeamImages / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-160_%22Valeriy_Chkalov%22.jpg?width=1000", credit: "Alexander Beltyukov / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "b737", name: "Boeing 737", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["737", "B737"],
    fact: "The best-selling jet airliner ever made.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Boeing_737-800_N886NN_planform.jpg?width=1000", credit: "4300streetcar / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_B737-2X9%28200%29_Surveiller.jpg?width=1000", credit: "Yosafat.bagus / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_737-500_%28Southwest_Airlines%29_%282389306174%29.jpg?width=1000", credit: "Eddie Maloney from North Las Vegas, USA / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "a380", name: "Airbus A380", category: "plane", era: "Modern", difficulty: 1,
    aliases: ["A380", "Airbus 380"],
    fact: "A full-length double deck; the largest passenger airliner.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Qatar_Airways_Airbus_A380-800_at_Heathrow_Airport_Terminal_4_before_Flying_to_Doha%2C_6_Jan_2015.jpg?width=1000", credit: "Mohammed Tawsif Salam / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A380_9H-MIP%2C_HiFly%2C_at_Paris_Airshow%2C_June_2019_%286%29.jpg?width=1000", credit: "Ibex73 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "an225", name: "Antonov An-225 Mriya", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["An-225", "An225", "Mriya"],
    fact: "Six engines; the heaviest aircraft ever built.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonov_An-225_Mriya_%2814226410137%29.jpg?width=1000", credit: "Helmuts Rudzītis from Rīga, Latvia / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonov_Design_Bureau_Antonov_An-225_Mriya_at_Leipzig_Halle_%28EDDP-LEJ%29.jpg?width=1000", credit: "Myroslav Kaplun / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonov_Airport_after_Russian_invasion_of_Ukraine_and_Mriya.jpg?width=1000", credit: "Oleksandr Ratushniak / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "c172", name: "Cessna 172", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["Cessna 172 Skyhawk", "Cessna"],
    fact: "The most-produced aircraft in history.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cessna172I.jpg?width=1000", credit: "FlugKerl2 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cessna172Skyhawk1957model01.jpg?width=1000", credit: "Ahunt / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/208_Cessna_FR.172H_Skyhawk_2_Wing_204_Sqdn%3B_Irish_Air_Corps%2C_Baldonnell_%283236388203%29.jpg?width=1000", credit: "Jerry Gunner from Lincoln, UK / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "dc3", name: "Douglas DC-3", category: "plane", era: "Pioneer", difficulty: 2,
    aliases: ["DC-3", "DC3", "Dakota"],
    fact: "The airliner that made air travel pay for itself.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_DC_3_from_1942_at_Santa_Monica_Airport_California_Photo_by_Steve_Shelokhonov_July_2024_IMG_3845_2.jpg?width=1000", credit: "Steveshelokhonov / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2022-06-09_Douglas_DC-3_of_McDonald%27s_at_Taupo.jpg?width=1000", credit: "Maksym Kozlenko / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_DC-3C_cold_start.jpg?width=1000", credit: "Bubba73 (Jud McCranie) / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "wright_flyer", name: "Wright Flyer", category: "plane", era: "Pioneer", difficulty: 1,
    aliases: ["Wright Flyer I", "Kitty Hawk Flyer", "Wright brothers plane"],
    fact: "Twelve seconds and 120 feet, in December 1903.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/WrightFlyerSmithsonianMay1982.jpg?width=1000", credit: "Self Rcbutcher / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/15_23_1065_wright_flyer_replica.jpg?width=1000", credit: "Dsdugan / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Orville_Wright%26flyer1909.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
    ]
  },

  /* --------------------------------------------------- HELICOPTERS */
  {
    id: "huey", name: "Bell UH-1 Iroquois", category: "helicopter", era: "Cold War", difficulty: 1,
    aliases: ["Huey", "UH-1", "UH1", "UH-1 Huey", "Iroquois", "Bell UH-1", "Bell Huey"],
    fact: "Officially the Iroquois, but the 'HU-1' designation stuck as Huey.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_UH-1C_Iroquois_at_the_Fleet_Air_Arm_Museum_February_2015.jpg?width=1000", credit: "Nick-D / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_UH-1A_Iroquois_in_flight.jpg?width=1000", credit: "U.S. Army. The original uploader was Signaleer at English Wikipedia. (13 November 2008 (original upload date)) / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/TH-1L_Iroquois_PRNAM-1.jpg?width=1000", credit: "Balon Greyjoy / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "cobra", name: "AH-1 Cobra", category: "helicopter", era: "Cold War", difficulty: 2,
    aliases: ["AH-1", "Cobra", "Huey Cobra", "AH-1G", "Snake"],
    fact: "The first helicopter designed from scratch as a gunship.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-1S_Cobra.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-1G_Cobra_Vietnam.jpg?width=1000", credit: "United States Army Heritage and Education Center / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Air-to-air_left_front_view_of_an_AH-1S_Cobra_helicopter_on_a_mission_during_Exercise_Gallant_Eagle_%2786_-_DPLA_-_044ed75d7dc4b11e3c24813506230f48.jpeg?width=1000", credit: "Department of Defense. American Forces Information Service. Defense Visual Information Center. 1994 / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "bell47", name: "Bell 47", category: "helicopter", era: "Cold War", difficulty: 2,
    aliases: ["Bell 47G", "MASH helicopter", "Sioux"],
    fact: "The bubble canopy made famous by M*A*S*H.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell47G.jpg?width=1000", credit: "The original uploader was Meggar at English Wikipedia. / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell47J.JPG?width=1000", credit: "The original uploader was Meggar at English Wikipedia. / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_47_%2852253543908%29.jpg?width=1000", credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "bell206", name: "Bell 206", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Bell 206 JetRanger", "JetRanger", "Jet Ranger"],
    fact: "The workhorse of news, police and charter flying.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/LAPD_Bell_206_Jetranger.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_206_BRZOL_SV%2C_september_13%2C_2009.jpg?width=1000", credit: "Srđan Popović / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_206B_%28Hkp-6%29_06054_54_%28SE-HGX%29_%288353213254%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "blackhawk", name: "UH-60 Black Hawk", category: "helicopter", era: "Modern", difficulty: 1,
    aliases: ["UH-60", "Black Hawk", "Blackhawk", "UH60"],
    fact: "Replaced the Huey as the US Army's utility helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/National-Guard-UH-60-Black-Hawk-operations-at-Fort-McCoy.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "apache", name: "Boeing AH-64 Apache", category: "helicopter", era: "Modern", difficulty: 1,
    aliases: ["Apache", "AH-64", "AH64", "AH-64D", "Apache Longbow", "Longbow", "Hughes AH-64"],
    fact: "The mast-mounted radar dome lets it target from behind cover.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-64D_Apache_Longbow.jpg?width=1000", credit: "\"Photo Courtesy of U.S. Army\" - by Tech. Sgt. Andy Dunaway / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_%28Fuji%29_AH-64DJP_Apache_Longbow%2C_Japan_-_Army_AN2227712.jpg?width=1000", credit: "Toshi Aoki - JP Spotters / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-64_Apache_4.jpg?width=1000", credit: "CW2 Cameron Roxberry / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "chinook", name: "Boeing CH-47 Chinook", category: "helicopter", era: "Modern", difficulty: 2,
    aliases: ["Chinook", "CH-47", "CH47", "Wokka", "Boeing Chinook", "Vertol CH-47"],
    fact: "Tandem rotors mean no tail rotor — and a lot of lift.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CH-47_assigned_to_3rd_General_Support_Aviation_Battalion%2C_82nd_Combat_Aviation_Brigade.jpg?width=1000", credit: "Sgt. Steven Galimore / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "ch46", name: "CH-46 Sea Knight", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["CH-46", "Sea Knight", "Phrog"],
    fact: "The Chinook's smaller Marine Corps cousin.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CH-46_Sea_Knight_Helicopter.jpg?width=1000", credit: "Andrew Schmidt / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CH-46_Sea_Knight%3B_Flares.jpg?width=1000", credit: "Cpl. Jason W. Fudge, U.S. Marine Corps / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HMX-1_-_Sea_Knights_-_CH-46.jpg?width=1000", credit: "Andy Rusch / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "ch53", name: "CH-53E Super Stallion", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["CH-53", "Super Stallion", "Sea Stallion", "CH53"],
    fact: "The heaviest-lifting helicopter in Western service.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_CH-53E_Super_Stallion_with_the_22nd_Marine_Expeditionary_Unit.jpg?width=1000", credit: "Sgt. Seth Starr / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_CH-53E_Super_Stallion_USMC_165503_FDK_MD5.jpg?width=1000", credit: "Acroterion / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_CH-53E_Super_Stallion_%2838234322382%29.jpg?width=1000", credit: "Chris Hunkeler from Carlsbad, California, USA / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "kiowa", name: "OH-58 Kiowa", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["OH-58", "Kiowa", "Kiowa Warrior"],
    fact: "A scout helicopter with a sensor ball above the rotor.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/OH-58D_1st_Squadron%2C_17th_Cavalry_Regiment_%28cropped%29.jpg?width=1000", credit: "U.S. Army / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/OH-58_D_Kiowa_Warrior_pokraj_pulske_Arene.jpg?width=1000", credit: "MORH / M. Čobanović / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/U.S_Army_OH-58D_Kiowa_Warrior_Armed_Reconnaissance_Helicopter_at_Kandahar_Airfield_MOD_45162023.jpg?width=1000", credit: "SAC Tim Laurence / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "little_bird", name: "MH-6 Little Bird", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Little Bird", "MH-6", "AH-6", "Killer Egg"],
    fact: "Special forces ride on external benches, outside the cabin.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MH-6_Little_Bird.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MH-6_Little_Bird_deck_landing.jpg?width=1000", credit: "USASOC / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MH-6_little-bird_arch._1994.jpg?width=1000", credit: "US Army / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "osprey", name: "V-22 Osprey", category: "helicopter", era: "Modern", difficulty: 1,
    aliases: ["V-22", "Osprey", "MV-22", "Tiltrotor"],
    fact: "Rotors tilt forward so it can fly like a turboprop.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MV-22_mcas_Miramar_2014.JPG?width=1000", credit: "FOX 52 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/V22-Osprey.jpg?width=1000", credit: "Peter Gronemann / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell-Boeing_CMV-22B_Osprey_of_VRM-30_in_flight_over_the_Pacific_Ocean_on_17_August_2023_%28230817-N-TD381-2097%29.jpg?width=1000", credit: "U.S. Navy photo by Mass CommunicationSpecialist 3rd Class Isaiah B. Goessl / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "sea_king", name: "Sea King", category: "helicopter", era: "Cold War", difficulty: 2,
    aliases: ["SH-3 Sea King", "Westland Sea King", "Sikorsky SH-3"],
    fact: "A boat-shaped hull, for landing on water.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SH3H_HS15_CVW15_1995_%28cropped%29.jpg?width=1000", credit: "US Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SeaKing_AEW_849Sqn_CVN-73_1998.JPEG?width=1000", credit: "PHAN Joseph Strevel, USN / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1980_Seaking_FGS_Deutschland.jpg?width=1000", credit: "Jimmykreislauf / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "lynx", name: "Westland Lynx", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Lynx", "Westland WG.13"],
    fact: "Held the helicopter world speed record for two decades.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Lynx_landing_on_Kearsarge.jpg?width=1000", credit: "Sgt. Christopher Q. Stone / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Westland_WG-13_Super_Lynx_Mk88a_%28code_83%2B25%29_of_the_German_Navy_at_RIAT_Fairford_17July2017_arp.jpg?width=1000", credit: "Myself (Adrian Pingstone). / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Westland_WG-13_Lynx_AN1979896.jpg?width=1000", credit: "Steve Fitzgerald / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "merlin", name: "AW101 Merlin", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Merlin", "AW101", "EH101", "AgustaWestland AW101"],
    fact: "Three engines, for flying long distances over water.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AgustaWestland_HH-101A_Caesar_%28cropped%29.jpg?width=1000", credit: "Gian Marco Anzellotti / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Navy_Merlin_HM2_Crowsnest_ASaC.jpg?width=1000", credit: "UK Ministry of Defence / Wikimedia Commons (OGL v1.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Merlin_Helicopter_Carrying_105mm_Light_Gun_MOD_45155696.jpg?width=1000", credit: "Sergeant Mitch Moore. / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "puma", name: "SA 330 Puma", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Puma", "Aerospatiale Puma", "SA330"],
    fact: "A French transport helicopter used across Africa and Europe.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Puma_-_RIAT_2010_%28cropped%29.jpg?width=1000", credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SA330BPuma2004.jpg?width=1000", credit: "U.S. Navy photo by Photographer's Mate 1st Class Brien Aho / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerospatiale_SA-330J_Puma_-_SPaF_-_Pedro_Arag%C3%A3o.jpg?width=1000", credit: "Pedro Aragão / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "euro_tiger", name: "Eurocopter Tiger", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["EC665 Tiger", "Airbus Tiger", "Tiger attack helicopter", "tiger"],
    fact: "A Franco-German attack helicopter built largely of composites.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/20170810034242%21Eurocopter_EC-665_Tiger_UHT%2C_Germany_-_Army_AN1547188_%282%29.jpg?width=1000", credit: "Alan Lebeda / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Eurocopter_Tiger_HAC_DN-ST-92-01620.jpg?width=1000", credit: "JO2 Pete Hatzakos / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Eurocopter_EC-665_Tiger_UHT_%28crooped%29.jpg?width=1000", credit: "Gunnar Ries / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "nh90", name: "NH90", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["NHIndustries NH90", "NH-90"],
    fact: "Fly-by-wire, and a European joint project.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/French_Navy_NH90_lands_on_USS_Antietam_%28CG-54%29_in_the_Bay_of_Bengal_%28cropped%29.jpg?width=1000", credit: "U.S. Navy photo by Mass Communication Specialist 3rd Class David Flewellyn / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/NH90_medium_utility_helicopter_%2851033728696%29.jpg?width=1000", credit: "Geoff McKay from Palmerston North, New Zealand / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EBBE_-_NH_Industries_NH90-TTH_-_Belgian_Air_Component_-_RN-06_%2840927070873%29.jpg?width=1000", credit: "Steve Lynes / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "r44", name: "Robinson R44", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["R44", "Robinson"],
    fact: "The best-selling civil helicopter of the 2000s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Robinson_R44_II_%28cropped%29.jpg?width=1000", credit: "D. Miller / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Helicopter_Robinson_R44.jpg?width=1000", credit: "Tomas62 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Heli_Air_Robinson_R44_Raven_II_arrives_RIAT_Fairford_10thJuly2014_arp.jpg?width=1000", credit: "Myself (Adrian Pingstone) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "mi8", name: "Mil Mi-8", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mi-8", "Mi8", "Hip", "Mi-17"],
    fact: "The most-produced helicopter in history.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mil_Mi-8P%2C_Baltic_Airlines_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "hind", name: "Mil Mi-24", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mi-24", "Mi24", "Hind", "Mil Mi-24 Hind", "Mi-24 Hind", "Krokodil"],
    fact: "A gunship that also carries troops — crews called it the Crocodile.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi24CP_%28modified%29_b.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "mi26", name: "Mil Mi-26", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Mi-26", "Mi26", "Halo"],
    fact: "The largest helicopter ever to enter series production.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MAKS_Airshow_2013_%28Ramenskoye_Airport%2C_Russia%29_%28cropped%29%29.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mil_Mi-26TC.jpg?width=1000", credit: "Badseed / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cambodian_Air_Force_Mil_Mi-26T_Nathalie.jpg?width=1000", credit: "Gilles de Maximy / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "mi28", name: "Mil Mi-28", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Mi-28", "Mi28", "Havoc", "Night Hunter"],
    fact: "Russia's dedicated attack helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force%2C_RF-13489%2C_Mil_Mi-28NM_%2849581609382%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "ka50", name: "Kamov Ka-50", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Ka-50", "Ka50", "Black Shark", "Hokum"],
    fact: "Coaxial rotors, no tail rotor, and an ejection seat.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force_Kamov_Ka-50.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "ka52", name: "Kamov Ka-52", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Ka-52", "Ka52", "Alligator"],
    fact: "A two-seat Ka-50 with the crew sitting side by side.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kamov_Ka-52%2C_Russia_-_Air_Force_AN1676203.jpg?width=1000", credit: "Oleg V. Belyakov - AirTeamImages / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kamov_Ka-52.jpg?width=1000", credit: "Alex Beltyukov / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "huey_cobra_z", name: "AH-1Z Viper", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["AH-1Z", "Zulu Cobra"],
    fact: "The Cobra line's final four-bladed descendant.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-1Z_attack_helicopter_with_Marine_Light_Attack_Helicopter_Squadron_775_Group_41%2C_execute_pre-flight_checks_and_procedures_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },

  /* ------------------------------------------------ CARS AND SHIPS */
  {
    id: "model_t", name: "Ford Model T", category: "car", era: "Pioneer", difficulty: 1,
    aliases: ["Model T", "Tin Lizzie", "T-Ford", "Ford T", "ModelT"],
    fact: "15 million built — the car that put the world on wheels.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1925_Ford_Model_T_touring.jpg?width=1000", credit: "ModelTMitch / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1912_Ford_T_Open_Touring_4_cylinder_24hp_pic1.JPG?width=1000", credit: "Alf van Beem / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1924-1925_Ford_-_T_Roadster%2C_Coimbatore_%282%29.jpg?width=1000", credit: "SnapMeUp / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "beetle", name: "Volkswagen Beetle", category: "car", era: "Cold War", difficulty: 1,
    aliases: ["VW Beetle", "Beetle", "Bug", "VW Bug", "Käfer", "Kafer", "Volkswagen Type 1", "Type 1", "VW Kafer"],
    fact: "Production ran for 65 years, ending in Mexico in 2003.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/VW_K%C3%A4fer_Baujahr_1966.jpg?width=1000", credit: "Vwexport1300 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Beetle_%28ca_1961%29_rear_three_quarters.JPG?width=1000", credit: "Charles01 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen_Beetle_.jpg?width=1000", credit: "IFCAR / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "mustang_car", name: "Ford Mustang", category: "car", era: "Cold War", difficulty: 1,
    aliases: ["Mustang", "Mustang 1965", "1965 Mustang", "Ford Mustang GT"],
    fact: "Created the 'pony car' class; 400,000 sold in its first year.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1965_Ford_Mustang_2D_Hardtop_Front.jpg?width=1000", credit: "Kroelleboelle / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1968_Ford_Mustang_%22Bullitt%22_display_--_2018_North_American_International_Auto_Show_%2826382929837%29.jpg?width=1000", credit: "Joe Ross from Lansing, Michigan / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1968_Ford_Mustang_Convertible_in_Maroon%2C_front_left.jpg?width=1000", credit: "Mr.choppers / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "countach", name: "Lamborghini Countach", category: "car", era: "Cold War", difficulty: 2,
    aliases: ["Countach", "Lambo Countach", "Lamborghini Contach", "Countach LP400"],
    fact: "Its name is a Piedmontese exclamation roughly meaning 'wow'.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Countach_-_Flickr_-_exfordy_%282%29_%28cropped-2%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "2cv", name: "Citroën 2CV", category: "car", era: "Cold War", difficulty: 2,
    aliases: ["2CV", "Citroen 2CV", "Deux Chevaux", "2 CV", "Duck", "Ente", "Tin Snail"],
    fact: "Designed to carry a farmer and eggs across a ploughed field unbroken.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Citroen_2CV_1X7A7979.jpg?width=1000", credit: "Alexander Migl / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mini", name: "Mini", category: "car", era: "Cold War", difficulty: 3,
    aliases: ["Classic Mini", "Morris Mini-Minor", "Mini Minor", "Austin Seven", "Mini Cooper", "BMC Mini", "Morris Mini"],
    fact: "Its transverse engine layout became the template for small cars.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Morris_Mini-Minor_1959_%28621_AOK%29.jpg?width=1000", credit: "DeFacto / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1994_Rover_Mini_1300i_Cabriolet%2C_front_left.jpg?width=1000", credit: "Mr.choppers / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1972_Morris_Mini_Clubman_GT_Saloon_%2846832902592%29.jpg?width=1000", credit: "Sicnag / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "willys_jeep", name: "Willys MB Jeep", category: "car", era: "WW2", difficulty: 1,
    aliases: ["Jeep", "Willys Jeep", "Willys MB", "Willys", "MB Jeep", "Army jeep"],
    fact: "Eisenhower named it one of the decisive weapons of the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Covered_Willy%27s_jeep_Wings_Over_Wine_Country_2007.JPG?width=1000", credit: "BrokenSphere / Wikimedia Commons (CC BY 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1944_Willys_MB_Jeep_%2818106088301%29.jpg?width=1000", credit: "Greg Gjerdingen from Willmar, USA / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/All_3_WW_II_%27Jeeps%27_%E2%80%93_%C2%BC-ton_Willys_MA%2C_%C2%BD-ton_and_%C2%BE-ton_Dodge_WC_series_%281941%29_%28cropped%29.jpg?width=1000", credit: "U.S. Army (by unnamed) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "uss_missouri", name: "USS Missouri", category: "ship", era: "WW2", difficulty: 2,
    aliases: ["Missouri", "BB-63", "Mighty Mo", "USS Missouri BB-63", "Big Mo", "Iowa class battleship"],
    fact: "Japan's formal surrender was signed on her deck in Tokyo Bay, 1945.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Missouri_post_refit.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Missouri_%28BB-63%29%2C_USS_Power_%28DD-839%29_and_TCG_Yavuz_%28B-70%29_off_Istanbul_on_5_April_1946.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Missouri_%28BB-63%29_underway_in_August_1944.jpg?width=1000", credit: "USN / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "hms_victory", name: "HMS Victory", category: "ship", era: "Age of Sail", difficulty: 2,
    aliases: ["Victory", "Nelson's flagship", "HMS Victory 1765"],
    fact: "Nelson's flagship at Trafalgar — still a commissioned warship today.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HMSVictoryPortsmouthEngland_%28version_2%29.jpg?width=1000", credit: "User:Cimosteve (modified by MARC912374) / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HMSVictory.jpg?width=1000", credit: "Ballista / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rudder_of_the_HMS_Victory.jpg?width=1000", credit: "AugusteBlanqui / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "titanic", name: "RMS Titanic", category: "ship", era: "Pioneer", difficulty: 1,
    aliases: ["Titanic", "SS Titanic", "RMS Titanic 1912"],
    fact: "Her sister ships Olympic and Britannic looked near-identical.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RMS_Titanic_3_%28cropped_to_ship%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "nimitz", name: "USS Nimitz", category: "ship", era: "Modern", difficulty: 3,
    aliases: ["Nimitz", "CVN-68", "USS Nimitz CVN-68", "Nimitz class carrier", "Nimitz-class aircraft carrier"],
    fact: "Two reactors let her steam for over 20 years without refuelling.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Nimitz_%28CVN-68%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },

  /* -------------------------- MISSILES, ARTILLERY AND EARLY ARMOUR */
  {
    id: "v2", name: "V-2 rocket", category: "missile", era: "WW2", difficulty: 2,
    aliases: ["V2", "A4 rocket", "Vergeltungswaffe 2", "V-2"],
    fact: "The first man-made object to reach the edge of space.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fus%C3%A9e_V2_%28cropped%29.jpg?width=1000", credit: "AElfwine / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/V-2_rocket_at_the_AWM_Treloar_Centre_Annex_b.jpg?width=1000", credit: "Bidgee Georgfotoart / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "v1", name: "V-1 flying bomb", category: "missile", era: "WW2", difficulty: 2,
    aliases: ["V1", "Buzz bomb", "Doodlebug", "Fieseler Fi 103"],
    fact: "Londoners learned that when the buzzing stopped, it was falling.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_146-1975-117-26%2C_Marschflugk%C3%B6rper_V1_vor_Start.jpg?width=1000", credit: "Lysiak / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/V-1_flying_bomb_on_display_at_Imperial_War_Museum.jpg?width=1000", credit: "Peter Trimming / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "katyusha", name: "Katyusha", category: "missile", era: "WW2", difficulty: 2,
    aliases: ["BM-13", "Katyusha rocket launcher", "Stalin's organ"],
    fact: "German troops named its shriek the Stalin organ.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Katyusha_Rocket_Launcher_-_Artillery_Museum_-_St._Petersburg_-_Russia.jpg?width=1000", credit: "Adam Jones, Ph.D. / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RIAN_archive_303890_A_battery_of_Katyusha_during_the_1941-1945_Great_Patriotic_War.jpg?width=1000", credit: "Zelma / Георгий Зельма / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "panzerfaust", name: "Panzerfaust", category: "missile", era: "WW2", difficulty: 2,
    aliases: ["Panzerfaust 60", "Panzer faust"],
    fact: "A disposable tube that let one infantryman kill a tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzerfaust6.jpg?width=1000", credit: "Sot.virk. T.V.Wuorela / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzerfaust_helsinki.jpg?width=1000", credit: "User:Balcer / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "bazooka", name: "Bazooka", category: "missile", era: "WW2", difficulty: 1,
    aliases: ["M1 Bazooka", "M9 Bazooka", "Rocket launcher M1"],
    fact: "Named after a comedian's home-made musical instrument.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Soldier_with_Bazooka_M1.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "rpg7", name: "RPG-7", category: "missile", era: "Cold War", difficulty: 1,
    aliases: ["RPG", "RPG7", "Rocket propelled grenade"],
    fact: "Produced in the millions and still in use everywhere.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RPG-7_detached.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ANA_soldier_with_RPG-7_in_2013-cropped.jpg?width=1000", credit: "Staff Sgt. Ezekiel Kitandwe / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "scud", name: "Scud", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["R-11", "R-17", "Scud-B", "SS-1 Scud"],
    fact: "A Soviet ballistic missile better known from the 1991 Gulf War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scud-launcher-England1.jpg?width=1000", credit: "Wo st 01 (There are 682 Pictures in my Category) See also Toolserver / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scud_downed_by_Patriot_missiles.JPEG?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SCUD_2.JPG?width=1000", credit: "Davric, the uploader / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "sidewinder", name: "AIM-9 Sidewinder", category: "missile", era: "Cold War", difficulty: 2,
    aliases: ["AIM-9", "Sidewinder"],
    fact: "Heat-seeking, and named after the snake that hunts by warmth.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AIM_9L_Sidewinder_%28modified%29_copy.jpg?width=1000", credit: "David Monniaux modified by FOX 52 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_Lockheed_F-104G_Starfighter_from_the_323rd_Squadron_with_AIM-9J_Sidewinder_missiles%2C_1979.jpg?width=1000", credit: "Blouw / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AIM-9L_DF-ST-82-10199.jpg?width=1000", credit: "Sr. Airman Theodore J. Koniares / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "tow", name: "BGM-71 TOW", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["TOW", "BGM-71", "TOW missile"],
    fact: "Steered down a pair of wires trailing behind it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hires_090509-A-4842R-001a.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BGM-71_TOW%2C_Iran-Iraq_War.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (GFDL)" },
    ]
  },
  {
    id: "minuteman", name: "LGM-30 Minuteman", category: "missile", era: "Cold War", difficulty: 2,
    aliases: ["Minuteman", "LGM-30", "Minuteman III"],
    fact: "Sits in a silo on alert, and has done since 1962.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/LGM-30-Minuteman-II.jpg?width=1000", credit: "US Air Force / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "polaris", name: "UGM-27 Polaris", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["Polaris", "UGM-27"],
    fact: "The first ballistic missile fired from beneath the sea.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polaris_A3_%28A3X-01%29_on_pad_LC-29A_at_CCSFS_-_1962-08-07.jpg?width=1000", credit: "U.S. Department of Defense / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polaris_A3_ballistic_missile_upper_stages.jpg?width=1000", credit: "Kevin King / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polaris_missile_launch_from_HMS_Revenge_%28S27%29_1986.JPEG?width=1000", credit: "USN / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "exocet", name: "Exocet", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["AM39 Exocet", "MM38 Exocet"],
    fact: "Sea-skimming, and infamous from the Falklands War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Exocet_AM39_P1220892-detoured.jpg?width=1000", credit: "No machine-readable author provided. Rama assumed (based on copyright claims). / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ExocetNerz.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Exocet_AM39_P1220892.jpg?width=1000", credit: "David Monniaux / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "s300", name: "S-300", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["S-300 missile system", "SA-10", "S300"],
    fact: "A long-range Soviet surface-to-air system.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/S-300_-_2009_Moscow_Victory_Day_Parade_%282%29.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ukrainian_S-300P_SAMs_2014_IMG_7672_03.JPG?width=1000", credit: "Nickispeaki / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ukrainian_S-300P_SAMs_2014_IMG_7672_04.JPG?width=1000", credit: "Nickispeaki / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "harpoon", name: "AGM-84 Harpoon", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["Harpoon", "AGM-84", "Harpoon missile"],
    fact: "An anti-ship missile that flies low to stay under radar.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Harpoon_asm_bowfin_museum.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "patriot", name: "MIM-104 Patriot", category: "missile", era: "Modern", difficulty: 2,
    aliases: ["Patriot", "MIM-104", "Patriot missile"],
    fact: "Built for aircraft, now best known for shooting down missiles.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/U-s-service-members-stand-by-a-patriot-missile-battery-in-gaziantep-turkey.jpg?width=1000", credit: "DoD Photo By Glenn Fawcett / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/JASDF_MIM-104_Patriot_PAC-2_Electric_Power_Plant%28Nissan_Diesel_Big_Thumb%2C_49-0182%29_left_rear_view_at_Kasuga_Air_Base_November_25%2C_2017.jpg?width=1000", credit: "Hunini / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yahalom-MIM-104D-Patriot--Independence-Day-2017-Tel-Nof-IZE-026.jpg?width=1000", credit: "MathKnight and Zachi Evenor / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "stinger", name: "FIM-92 Stinger", category: "missile", era: "Modern", difficulty: 2,
    aliases: ["Stinger", "FIM-92"],
    fact: "Shoulder-launched, and heavy enough to be a two-hand job.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voorzijde_van_een_Stinger_lanceerbuis_met_richt-afvuurapparatuur_%282086-065-004%29.jpg?width=1000", credit: "Audiovisuele Dienst Koninklijke Landmacht (AVDKL) / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Launched_FIM-92A_Stinger_missile.jpg?width=1000", credit: "Christopher O'Quin, U.S. Marine Corps / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Avenger_Stinger_Missile.JPEG?width=1000", credit: "Lance Corporal Brandon Gwathney, United States Marine Corps / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "javelin", name: "FGM-148 Javelin", category: "missile", era: "Modern", difficulty: 2,
    aliases: ["Javelin", "FGM-148"],
    fact: "Climbs then dives onto the thin armour on top of a tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Javelin_with_checkout_equipment.jpg?width=1000", credit: "U.S. Army Missile Command, Redstone Arsenal / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FGM-148_Javelin_missile_launch.jpg?width=1000", credit: "Lance Cpl. Jonathan Willcox / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "tomahawk", name: "Tomahawk", category: "missile", era: "Modern", difficulty: 1,
    aliases: ["BGM-109", "Tomahawk cruise missile", "TLAM"],
    fact: "Navigates by comparing the ground below with a stored map.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomahawk_Block_IV_cruise_missile_-crop.jpg?width=1000", credit: "U.S. Navy The High Fin Sperm Whale / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HNLMS_De_Ruyter_launches_Tomahawk_missile_%28March_11%2C_2025%29.jpg?width=1000", credit: "Ministerie van Defensie / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Missouri_missile_BGM-109_Tomahawk.JPG?width=1000", credit: "PH3 Brad Dillon uploaded to en.wikipedia by TomStar81 / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "hellfire", name: "AGM-114 Hellfire", category: "missile", era: "Modern", difficulty: 2,
    aliases: ["Hellfire", "AGM-114"],
    fact: "The Apache's tank-killer, guided by laser.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_Martin_Longbow_Hellfire.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AGM-114HellfireHMMWV.jpg?width=1000", credit: "US Army / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AGM-114L_Longbow_missile_launch_from_USS_Montgomery_%28LCS-8%29.jpg?width=1000", credit: "U.S. Navy photo by Lt. j.g. Samuel Hardgrove / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "amraam", name: "AIM-120 AMRAAM", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["AIM-120", "AMRAAM", "Slammer"],
    fact: "Carries its own radar, so the launching jet can turn away.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/20180328_AIM-120_Udvar-Hazy.jpg?width=1000", credit: "Balon Greyjoy / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "trident", name: "Trident", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["Trident II", "UGM-133", "D5 missile"],
    fact: "Submarine-launched, and the core of two nations' deterrents.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Trident_I_C4_%28C4X-1%29_launch_and_maiden_flight_-_pad_LC-25C_CCSFS_-_1977-01-18.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "kornet", name: "9M133 Kornet", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["Kornet", "AT-14", "9M133"],
    fact: "A laser-guided Russian anti-tank missile.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9A%D0%BE%D1%80%D0%BD%D0%B5%D1%82_-_%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%BA%D1%83%D1%80%D1%81%D0%B0%D0%BD%D1%82%D0%BE%D0%B2_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0_%D0%B1%D0%BE%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F_%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D1%85_%D0%B2%D0%BE%D0%B9%D1%81%D0%BA_%D0%B8_%D0%B0%D1%80%D1%82%D0%B8%D0%BB%D0%BB%D0%B5%D1%80%D0%B8%D0%B8_05.jpg?width=1000", credit: "Ольги Балашовой, Вадима Савицкого / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kornet-EM_at_Engineering_Technologies_2012_Missile_Launcher.jpg?width=1000", credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "nlaw", name: "NLAW", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["MBT LAW", "Main Battle Tank and Light Anti-tank Weapon"],
    fact: "Fired from the shoulder and flies just over the target.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/NLAW_Kokonaisturvallisuus_2015_01_%28cropped%29.JPG?width=1000", credit: "MKFI / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/NLAW_Live_Firing_2nd_Battalion%2C_The_Parachute_Regiment_2021.jpg?width=1000", credit: "Cpl Danny Houghton / Wikimedia Commons (OGL 3)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Taistelun%C3%A4yt%C3%B6s_NLAW_2_Kokonaisturvallisuus_2015.JPG?width=1000", credit: "MKFI / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "stormshadow", name: "Storm Shadow", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["SCALP EG", "Storm Shadow missile"],
    fact: "An air-launched cruise missile that burrows before exploding.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Museum%2C_Colindale%2C_London_-_DSC06025.JPG?width=1000", credit: "Rept0n1x / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/StormShadow-Hendon_1.jpg?width=1000", credit: "Corrado Baldassi / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stormshadowcrop.JPG?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "irondome", name: "Iron Dome", category: "missile", era: "Modern", difficulty: 2,
    aliases: ["Iron Dome system", "Tamir"],
    fact: "Works out where a rocket will land, and ignores it if it will miss.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IDF_Iron_Dome_2021.jpg?width=1000", credit: "IDF Spokesperson's Unit photographer / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "flak88", name: "8.8 cm Flak", category: "artillery", era: "WW2", difficulty: 2,
    aliases: ["Flak 88", "Acht-acht", "Eighty-eight", "88mm Flak", "Flak 36"],
    fact: "An anti-aircraft gun that turned out to be a superb tank killer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flak18-36%28cropped%29.png?width=1000", credit: "Rickard Ångman / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/8.8_cm_Flak_36_U.S._Army_Armor_%26_Cavalry_Collection.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/8.8_cm_Flak_in_Spain.jpg?width=1000", credit: "Z3144228 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "gustav", name: "Schwerer Gustav", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["Gustav", "Dora", "80 cm gun"],
    fact: "An 80 cm railway gun; the largest calibre ever used in combat.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gesch%C3%BCtzDora2.JPG?width=1000", credit: "Scargill / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "karl", name: "Karl-Gerät", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["Karl Gerat", "Morser Karl", "Thor"],
    fact: "A 60 cm self-propelled mortar built to crack fortresses.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl6.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-695-0424-17A%2C_Warschauer_Aufstand%2C_M%C3%B6rser_Karl.jpg?width=1000", credit: "Leher / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "m101", name: "M101 howitzer", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["M101", "M2A1 howitzer", "105mm howitzer"],
    fact: "The standard American field gun of the Second World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M101-105mm-howitzer-camp-pendleton-20050326.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/105mm_howitzer_in_Greenup%2C_KY%2C_US.jpg?width=1000", credit: "Jud McCranie / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/21-24-151-howitzer.jpg?width=1000", credit: "Dsdugan / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "bofors", name: "Bofors 40 mm gun", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["Bofors 40mm", "Bofors gun", "Bofors"],
    fact: "The anti-aircraft gun of choice on both sides' warships.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/40MM_Bofors_Anti-Aircraft_Gun%2C_Patriots_Point.jpg?width=1000", credit: "Michael Rivera / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bofors_guns_on_Spectre_gunship.jpg?width=1000", credit: "Greg Goebel / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "parisgun", name: "Paris Gun", category: "artillery", era: "WW1", difficulty: 3,
    aliases: ["Paris-Geschütz", "Kaiser Wilhelm Geschütz"],
    fact: "Shelled Paris from 120 km away, its shells reaching the stratosphere.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Photograph_Q65801A.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pariser_Ferngesch%C3%BCtz.jpg?width=1000", credit: "powidl / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "d30", name: "D-30 howitzer", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["D-30", "2A18"],
    fact: "Its three-legged carriage lets it traverse a full circle.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ANA_Artillery_Demonstration_%285050655391%29.jpg?width=1000", credit: "NATO Training Mission-Afghanistan Senior Airman Zachary Wolf / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/D-30-T-34-batey-haosef-4.jpg?width=1000", credit: "Bukvoed / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "grad", name: "BM-21 Grad", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["BM-21", "Grad"],
    fact: "Forty rockets off a truck bed in twenty seconds.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_BM-21_Grad_in_Saint_Petersburg.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BelGrad_BM-21A.JPG?width=1000", credit: "Boevaya mashina / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "m109", name: "M109 howitzer", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["M109", "Paladin", "M109A6"],
    fact: "The West's standard self-propelled howitzer for sixty years.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kings_of_battle_keep_the_fire%3B_1-9_FA_fires_its_last_rounds_140910-A-CW513-046.jpg?width=1000", credit: "Staff Sgt. Richard Wrigley / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_M109_155_mm_Self-propelled_Howitzer_Right_Side.jpg?width=1000", credit: "Leger Film- en Fotodienst (LFFD) / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Egyptian_M109_self-propelled_howitzer_being_decontaminated_during_Operation_Desert_Shield.JPEG?width=1000", credit: "Tech. Sgt. H. H. Deffner / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "mlrs", name: "M270 MLRS", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["M270", "MLRS"],
    fact: "Tracked, armoured, and carrying twelve guided rockets.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M270A1_Multiple_Launch_Rocket_System_South_Dakota_ANG.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M270_MLRS_-_190911-A-HE359-0085.jpg?width=1000", credit: "Gertrud Zach / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IDF-M270-MLRS-Israel-60.jpg?width=1000", credit: "MathKnight and Zachi Evenor / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "m777", name: "M777 howitzer", category: "artillery", era: "Modern", difficulty: 2,
    aliases: ["M777"],
    fact: "Built largely of titanium so a helicopter can lift it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M777_howitzer_rear.jpg?width=1000", credit: "Sgt. Jose E. Guillen / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M777_Howitzer_Helmand_April2007.JPEG?width=1000", credit: "Spc. Keith D. Henning, U.S. Army / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M777_Light_Towed_Howitzer_1.jpg?width=1000", credit: "Jonathan Mallard / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "himars", name: "M142 HIMARS", category: "artillery", era: "Modern", difficulty: 2,
    aliases: ["HIMARS", "M142"],
    fact: "The MLRS on wheels — lighter, and it can fly in a C-130.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HIMARS_-_missile_launched.jpg?width=1000", credit: "U.S. Army photo / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Romanian_HIMARS_loaded_into_an_RAF_A400M_airplane.jpg?width=1000", credit: "Sgt. Isabelle Dickey-Kappenman / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ukrainian_HIMARS_in_Zaporizhya_oblast%2C_early_June_2022_%283%29.jpg?width=1000", credit: "General Staff of the Armed Forces of Ukraine - Генеральний штаб ЗСУ / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "pzh2000", name: "Panzerhaubitze 2000", category: "artillery", era: "Modern", difficulty: 3,
    aliases: ["PzH 2000", "Panzerhaubitze"],
    fact: "Can put three shells in the air before the first one lands.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lithuanian_PzH_2000_%282%29.jpg?width=1000", credit: "Lithuanian MoD / Wikimedia Commons (GFDL)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzerhaubitze_2000_-_Bundeswehr_Military_History_Museum%2C_Dresden.jpg?width=1000", credit: "Stephencdickson / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzerhaubitze_2000_im_scharfen_Schuss_%28Seil%29.jpg?width=1000", credit: "Bundeswehr-Fotos / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "caesar", name: "CAESAR howitzer", category: "artillery", era: "Modern", difficulty: 3,
    aliases: ["CAESAR", "Caesar gun"],
    fact: "A 155 mm gun bolted onto an ordinary truck chassis.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/French_Caesar_self-propelled_howitzer_in_Iraq.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "msta", name: "2S19 Msta", category: "artillery", era: "Modern", difficulty: 3,
    aliases: ["2S19", "Msta-S"],
    fact: "Russia's tracked 152 mm self-propelled howitzer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AlabinoTraining0904-34.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2S19_Msta-S_PM_MWB_09.jpg?width=1000", credit: "Zala / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Msta-S_-_TankBiathlon2013-26.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "markiv", name: "Mark IV tank", category: "tank", era: "WW1", difficulty: 2,
    aliases: ["Mark IV", "Mk IV tank", "British Mark IV", "mk 4"],
    fact: "The rhomboid shape was designed to cross wide trenches.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MarkIVTankWithUnditchingBeam1917.jpg?width=1000", credit: "Unidentified British Government photographer. / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "renaultft", name: "Renault FT", category: "tank", era: "WW1", difficulty: 2,
    aliases: ["Renault FT-17", "FT-17", "FT17"],
    fact: "The first tank with a turret that turned all the way round.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Renault_FT-17_at_Overloon_War_Museum.jpg?width=1000", credit: "Kand3ugeifan / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/0_Char_Renault_FT_-_Mus%C3%A9e_de_l%27arm%C3%A9e_%C3%A0_Paris_1.JPG?width=1000", credit: "Jean-Pol GRANDMONT / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "a7v", name: "A7V", category: "tank", era: "WW1", difficulty: 3,
    aliases: ["Sturmpanzerwagen A7V"],
    fact: "Germany's only tank of the war; about twenty were built.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mephisto_A7V_in_AWM_front_view.jpg?width=1000", credit: "Skyring / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mephisto_A7V_showing_name_and_gun.jpg?width=1000", credit: "Skyring / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A7V_%283666190490%29.jpg?width=1000", credit: "Simon Q from United Kingdom / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "whippet", name: "Medium Mark A Whippet", category: "tank", era: "WW1", difficulty: 3,
    aliases: ["Whippet", "Medium Mark A", "medium a"],
    fact: "Built for speed, which meant all of eight miles an hour.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Whippet_tank_Base_Borden_Military_Museum_3.jpg?width=1000", credit: "JustSomePics / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mark_A_Whippet_1.jpg?width=1000", credit: "User:Raul654 / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "stchamond", name: "Saint-Chamond", category: "tank", era: "WW1", difficulty: 3,
    aliases: ["Saint Chamond", "St Chamond"],
    fact: "Its hull overhung the tracks so far it bellied on every trench.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/St._Chamond.jpg?width=1000", credit: "The original uploader was Ericd at English Wikipedia. Later versions were uploaded by RJHall at en.wikipedia. / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Chamond_%E2%80%9862770%E2%80%99_%E2%80%9CFleur_D%E2%80%99_Amour%E2%80%9D_%2845320726511%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint-Chamond.Saumur.0004fq2z.jpg?width=1000", credit: "User:Fat yankey / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "schneider", name: "Schneider CA1", category: "tank", era: "WW1", difficulty: 3,
    aliases: ["Schneider CA", "CA1"],
    fact: "France's first tank, with a nose like a ship's bow.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Schneider_CA1_%28M16%29_tank.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Zerst%C3%B6rter_Schneider_CA1_Panzer_in_Frankreich.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1916_Schneider_CA_16%2C_Tanks_in_the_Mus%C3%A9e_des_Blind%C3%A9s%2C_France%2C_pic-2.JPG?width=1000", credit: "Alf van Beem / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "camel", name: "Sopwith Camel", category: "plane", era: "WW1", difficulty: 1,
    aliases: ["Camel", "Sopwith F.1 Camel"],
    fact: "Shot down more enemy aircraft than any other Allied fighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sopwith_Camel_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg?width=1000", credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Replica_Sopwith_Camel_%28G-BZSC%29_%2812243203404%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1917_Sopwith_F.1_Camel.jpg?width=1000", credit: "Sanjay Acharya / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "fokkerdr1", name: "Fokker Dr.I", category: "plane", era: "WW1", difficulty: 1,
    aliases: ["Fokker Dr1", "Dr.I", "Fokker triplane", "Red Baron triplane"],
    fact: "The Red Baron's triplane, though he scored most of his kills in others.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fokker_Dr.I_driedekker_2161_026221.jpg?width=1000", credit: "Collectie Van Beek / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fokker_DR1_at_Airpower11_18.jpg?width=1000", credit: "User:MatthiasKabel / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fokker_Dr.I_driedekkers_van_Jasta_12_%282161_026224%29.jpg?width=1000", credit: "Collectie Van Beek / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "spad13", name: "SPAD S.XIII", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["SPAD XIII", "Spad 13", "SPAD"],
    fact: "Fast and strong in a dive, and flown by most Allied aces.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SPAD_XIII_040510-F-1234P-019.jpg?width=1000", credit: "U.S. Air Force photo / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Phoenix-Frank_Luke_Jr._SPAD_XIII-Sky_Harbor_Airport-1.JPG?width=1000", credit: "Tony the Marine (talk) / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SPAD_S.XIII_Front.jpg?width=1000", credit: "Air Service, United States Army / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "fokkerdvii", name: "Fokker D.VII", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Fokker DVII", "D.VII"],
    fact: "The Armistice named it specifically among equipment to be handed over.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fokker_DVII.jpg?width=1000", credit: "Oxyman / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fokker_D_VII_SE-XVO_OTT_2013_04.jpg?width=1000", credit: "Julian Herzog (Website) / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fokker_V.11%2C_voorloper_van_de_Fokker_D.VII_%282161_026109%29.jpg?width=1000", credit: "Collectie Van Beek / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "albatros", name: "Albatros D.III", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Albatros DIII", "D.III", "Albatros"],
    fact: "Its plywood fuselage gave it a sleek, shark-like body.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Albad3.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "se5a", name: "S.E.5", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["SE5a", "S.E.5a", "SE.5"],
    fact: "Steadier than the Camel, and far less likely to kill its own pilot.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_SE5a_F904_%28G-EBIA%29_%286736738219%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shuttleworth_SE5A02.jpg?width=1000", credit: "TSRL / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "bristolf2", name: "Bristol F.2 Fighter", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Bristol Fighter", "F.2B", "Brisfit"],
    fact: "A two-seater that could dogfight like a single-seat scout.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bristol_F2b_Fighter_%E2%80%98D8096_D%E2%80%99_%28G-AEPH%29_%2830273241577%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bristol_F2_Fighter_REJS.jpg?width=1000", credit: "Ian Dunster / Wikimedia Commons (CC BY-SA 2.0 uk)" },
    ]
  },
  {
    id: "nieuport17", name: "Nieuport 17", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Nieuport 17 C.1", "Nieuport"],
    fact: "Its narrow lower wing made it nimble, and fragile in a dive.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nieuport_23_C.1.jpg?width=1000", credit: "Nieuport / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nieuport_23.C1_%E2%80%98N5024%E2%80%99_%2834791742286%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Replica_Nieuport_17_%288577911133%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },

  /* ---------------------------------------------- FURTHER VEHICLES */
  {
    id: "m26_pershing", name: "M26 Pershing", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Pershing", "M26", "t26e5"],
    fact: "Arrived in 1945, at last a match for a Panther.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flickr_-_davehighbury_-_Bovington_Tank_Museum_246_M26.jpg?width=1000", credit: "DAVID HOLT from London, England / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M26-Pershing-Korea-19500904.JPG?width=1000", credit: "SGT. FRANK C. KERR / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M26_pershing_hull.JPG?width=1000", credit: "Neodarkshadow / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "m24_chaffee", name: "M24 Chaffee", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Chaffee", "M24"],
    fact: "A light tank with a 75 mm gun taken from a bomber.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M24_Chaffee_tankfest_2023.JPG?width=1000", credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/R.O.C_Marine_Corps_M24_Chaffee_front_view.jpg?width=1000", credit: "RGZ95 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/R.O.C_Marine_Corps_M24_Chaffee_rear_view.jpg?width=1000", credit: "RGZ95 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "m22", name: "M22 Locust", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Locust", "M22"],
    fact: "Small enough to be carried into battle by glider.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M22_Locust_light_tank_at_Bovington.jpg?width=1000", credit: "Max Smith / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M22locustincombat.jpg?width=1000", credit: "Unknown, possibly official War Office photographer or Allied soldier / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M22_Locust_U.S._Army_Armor_%26_Cavalry_Collection.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "kv2", name: "KV-2", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["KV2"],
    fact: "A gun howitzer in a turret the size of a small room.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9A%D0%B2-2_3.jpg?width=1000", credit: "Gandvik / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "su152", name: "SU-152", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["SU152", "Zveroboy"],
    fact: "Crews called it the beast killer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/11-Heavy_self_propelled_gun_su_152-LMW.jpg?width=1000", credit: "Maciek Godlewski / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ML-20S_152mm_howitzer-gun_M1937_for_SU-152.jpg?width=1000", credit: "Nucl0id / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A1%D0%90%D0%A3_%D0%A1%D0%A3-152_1452-%D0%B3%D0%BE_%D1%81%D0%B0%D0%BC%D0%BE%D1%85%D0%BE%D0%B4%D0%BD%D0%BE-%D0%B0%D1%80%D1%82%D0%B8%D0%BB%D0%BB%D0%B5%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BF%D0%BE%D0%BB%D0%BA%D0%B0_%D0%A0%D0%93%D0%9A_2-%D0%B9_%D0%B3%D0%B2%D0%B0%D1%80%D0%B4%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%B0%D1%80%D0%BC%D0%B8%D0%B8_4-%D0%B3%D0%BE_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B0_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D1%80%D0%B0%D0%B7%D1%80%D1%83%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F_%D1%88%D0%B2%D0%B5.jpg?width=1000", credit: "Фотохроника ТАСС, фото Е. А. Халдея / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "isu152", name: "ISU-152", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["ISU152"],
    fact: "A 152 mm gun on an IS hull, for knocking down buildings.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ISU-152%40Kubinka.jpg?width=1000", credit: "Ieee5392 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ISU-152_Kiev_2018_G2.jpg?width=1000", credit: "George Chernilevsky / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ISU-152_M1943_2017-12-24.jpg?width=1000", credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "jagdtiger", name: "Jagdtiger", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Jagd Tiger", "Sd Kfz 186"],
    fact: "The heaviest armoured vehicle to see service in the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdtiger_at_Aberdeen_proving_grounds_2008.jpg?width=1000", credit: "Raymond Douglas Veydt, aka BonesBrigade at en.wikipedia / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdtiger_%28s-n_305083%29_%E2%80%93_Patriot_Museum%2C_Kubinka_%2838294634781%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagdtiger_front-right_2017_Bovington.jpg?width=1000", credit: "Morio / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "sturmtiger", name: "Sturmtiger", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Sturmmörser Tiger", "Sturmmorser"],
    fact: "Fired 380 mm rocket shells meant for sinking submarines.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sturmtiger_%E2%80%9919_red%E2%80%99_%28s-n_205543%29_%E2%80%93_Patriot_Museum%2C_Kubinka_%2838240137396%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sturmtiger_abandoned_and_blown.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sturmtiger_frontal.jpg?width=1000", credit: "Werner Willmann / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "nashorn", name: "Nashorn", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Hornisse"],
    fact: "A thin-skinned platform for a very big anti-tank gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nashorn_%E2%80%98131_red%E2%80%99_%E2%80%93_Patriot_Museum%2C_Kubinka_%2826518901069%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-279-0950-09%2C_Russland%2C_Jagdpanzer_Nashorn-Hornisse.jpg?width=1000", credit: "Johannes Bergmann / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-313-1004-10A%2C_Italien%2C_Panzer_VI_%28Tiger_I%29%2C_Panzerj%C3%A4ger_Nashorn-Hornisse.jpg?width=1000", credit: "Vack / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "marder3", name: "Marder III", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Marder 3"],
    fact: "A captured Czech chassis with a Soviet gun bolted on top.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marder_III_tank_destroyer.jpg?width=1000", credit: "Kurth / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marder_III_in_North_Africa_%28NARA_204945138%29.jpg?width=1000", credit: "U.S. Army Air Forces photo 342-FH-3A28601-23290AC / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marder-III-Aberdeen.0004sryz.1.jpg?width=1000", credit: "User:Fat yankey / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "wespe", name: "Wespe", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Sd Kfz 124"],
    fact: "A Panzer II turned into a mobile 105 mm howitzer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SdKfz124.jpg?width=1000", credit: "baku13 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-023-3497-18A%2C_Russland%2C_S%C3%BCd%2C_Rum%C3%A4nien%2C_Panzerhaubitze_Wespe.jpg?width=1000", credit: "Wolff, Paul Dr. / Wikimedia Commons (CC BY-SA 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-219-0553A-15%2C_Russland%2C_bei_Pokrowka%2C_Panzerhaubitze_%27Wespe%27.jpg?width=1000", credit: "Lutz Koch / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "brummbar", name: "Brummbär", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Sturmpanzer IV", "Brummbar"],
    fact: "A Panzer IV rebuilt to demolish buildings at close range.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sturmpanzer.Saumur.0008gkp7.jpg?width=1000", credit: "User:Fat yankey / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ci%C4%99%C5%BCkie_dzia%C5%82o_szturmowe_Brummbar_na_froncie_pod_Nettuno_-_Anzio_%282-2176%29.jpg?width=1000", credit: "Vack / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "charb1", name: "Char B1", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Char B1 bis", "B1 bis", "b1"],
    fact: "Heavily armoured, with a hull gun aimed by steering the tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Renault_B1_bis%2CTanks_in_the_Mus%C3%A9e_des_Blind%C3%A9s%2C_France%2C_pic-9.jpg?width=1000", credit: "Alf van Beem / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CharB1Maquette.jpg?width=1000", credit: "niet toegeschreven. / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Disabled_Char_B1_1940.jpg?width=1000", credit: "Conseil Régional de Basse-Normandie / National Archives USA / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "somua", name: "SOMUA S35", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["S35", "Somua"],
    fact: "Arguably the best tank in France in 1940, and poorly used.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Char_1935_S_Somua_1.jpg?width=1000", credit: "Mark Pellegrini / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bovington_102_Somua_S35_1.jpg?width=1000", credit: "Hohum / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SOMUA-S35-2.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 2.0 fr)" },
    ]
  },
  {
    id: "panzer_i", name: "Panzer I", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 1", "PzKpfw I", "Pz I"],
    fact: "Built as a training tank, then sent to war anyway.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SdKfz101.jpg?width=1000", credit: "baku13 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_I_Ausf._A_at_El_Golos.jpg?width=1000", credit: "JonCatalan (talk) / Wikimedia Commons (CC BY 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_I_Replica_0097.jpg?width=1000", credit: "Ashley Pomeroy / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "t26", name: "T-26", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["T26"],
    fact: "The most numerous tank in the world in the late 1930s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-26_in_Kirovsk.JPG?width=1000", credit: "WolfDW / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T26_right_side.jpg?width=1000", credit: "JonCatalan (talk) / Wikimedia Commons (CC BY 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T26_parola_1.jpg?width=1000", credit: "Balcer~commonswiki / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "bt7", name: "BT-7", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["BT7"],
    fact: "Could shed its tracks and run on road wheels alone.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BT_7_Pyshma.jpg?width=1000", credit: "Tygydymhorse / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "hago", name: "Type 95 Ha-Go", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Ha-Go", "Type 95"],
    fact: "Light and thinly armoured, like most Japanese tanks.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ha-Go_Moscow_%28cropped%29.jpg?width=1000", credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "semovente", name: "Semovente da 75/18", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Semovente", "75/18 semovente"],
    fact: "Italy's best armoured vehicle of the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Semovente_M42.Saumur.0008fefh.jpg?width=1000", credit: "User:Fat yankey / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "m1340", name: "Fiat M13/40", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["M13/40"],
    fact: "Riveted armour that shattered when hit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Museum_at_El_Alamein_-_Flickr_-_heatheronhertravels_%289%29_%28cropped%29.jpg?width=1000", credit: "Heather Cowper from Bristol, UK / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-783-0104-38%2C_Nordafrika%2C_italienische_Panzer_M13-40.jpg?width=1000", credit: "Moosmüller / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "vickers6ton", name: "Vickers 6-Ton", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Vickers Mark E", "Vickers 6 Ton"],
    fact: "Never bought by Britain, but copied around the world.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vickers6ton_front.JPG?width=1000", credit: "Balcer~commonswiki / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vickers_6-Ton%2C_Parola%2C_Finland.jpg?width=1000", credit: "Juskevich / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vickers_Mark_E_Type_B_in_Chinese_service.jpg?width=1000", credit: "Unknown authorUnknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "is3", name: "IS-3", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["IS3", "JS-3"],
    fact: "Its pike nose shocked Western observers in 1945.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IS3.jpg?width=1000", credit: "Paul Hermans / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IS-3_frontal_view.JPG?width=1000", credit: "Eddie Germino. / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IS-3-latrun-2.jpg?width=1000", credit: "Bukvoed / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "t10", name: "T-10", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T10"],
    fact: "The last Soviet heavy tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-10_tank.jpg?width=1000", credit: "ChrisO / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "m41", name: "M41 Walker Bulldog", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Walker Bulldog", "M41", "bulldog"],
    fact: "A fast light tank named after a general killed in Korea.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M41_Bulldog_Fort_Meade.jpg?width=1000", credit: "Wilson44691 / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ARVN_M41_Walker_Bulldog.jpg?width=1000", credit: "Starry, Donn A. Mounted combat in Vietnam. DEPARTMENT OF THE ARMY / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M41WalkerBulldog_Assembly1.JPG?width=1000", credit: "Robert Cameron, US Army Training and Doctrine Command / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "conqueror", name: "Conqueror", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["FV214 Conqueror"],
    fact: "Built to out-range the IS-3, and hardly ever used.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Conqueror_front-left_2017_Bovington.jpg?width=1000", credit: "Morio / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Conqueror_cupola%2C_Bovington_Tank_Museum.jpg?width=1000", credit: "DAVID HOLT / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Conqueror_ARV2_%28FV222%29_Tank.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "strv103", name: "Stridsvagn 103", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["S-tank", "Strv 103"],
    fact: "No turret at all — the whole tank aims the gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/STRV-103_demonstrating_at_P7_Revingehed%2C_24th_April_2022.jpg?width=1000", credit: "VHMQ Photography / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stridsvagn_103_outside_the_Swedish_Army_Museum_in_September_2015.jpg?width=1000", credit: "Nick-D / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stridsvagn_103_Revinge_2013-2.jpg?width=1000", credit: "Jorchr / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "type59", name: "Type 59", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["Type 59 tank", "WZ-120", "t55"],
    fact: "China's copy of the T-54, built in the tens of thousands.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_59_tank_in_Military_Museum_of_the_Chinese_People%27s_Revolution_20180219.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "type96", name: "Type 96", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Type 96 tank", "ZTZ-96"],
    fact: "China's most numerous modern tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/TankBiathlon2017Individual-02.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "arjun", name: "Arjun", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Arjun MBT"],
    fact: "India's home-built main battle tank, decades in the making.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arjun_ARRV.jpg?width=1000", credit: "DRDO / Wikimedia Commons (EdictGov-India)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arjun_MK1A_field_trials.jpg?width=1000", credit: "w:Defence Research and Development Organisation / Wikimedia Commons (GODL-India)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arjun_Mk_II_turrent_front%281%29.jpg?width=1000", credit: "Anirvan Shukla / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "pt91", name: "PT-91 Twardy", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["PT-91", "Twardy"],
    fact: "A Polish rebuild of the T-72 with reactive armour.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PT91_MSPO15_DSC02773.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "sdkfz251", name: "Sd.Kfz. 251", category: "afv", era: "WW2", difficulty: 2,
    aliases: ["Hanomag", "SdKfz 251", "251 halftrack"],
    fact: "The half-track that carried German infantry alongside the tanks.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-801-0664-37%2C_Berlin%2C_Unter_den_Linden%2C_Sch%C3%BCtzenpanzer.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "m3_halftrack", name: "M3 Half-track", category: "afv", era: "WW2", difficulty: 3,
    aliases: ["M3 halftrack", "White half-track"],
    fact: "Wheels at the front, tracks at the back, armour all over.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Halftrack-fort-knox-1.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "lvt", name: "LVT", category: "afv", era: "WW2", difficulty: 3,
    aliases: ["Amtrac", "Landing Vehicle Tracked", "Alligator"],
    fact: "Tracks shaped like paddles, so it swims ashore then drives.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/LVT-4_1.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "fv432", name: "FV432", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["FV 432", "Trojan"],
    fact: "Britain's answer to the M113.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FV_432_APC_of_the_7th_Brigade_Royal_Scots.JPEG?width=1000", credit: "PHC HOLMES / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FV432_%287527891020%29.jpg?width=1000", credit: "Simon Q from United Kingdom / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/20050626-006-FV-432.jpg?width=1000", credit: "Gary Houston / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "bmd1", name: "BMD-1", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BMD1"],
    fact: "An IFV light enough to be parachuted with its crew inside.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vdvcompetition11.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "boxer", name: "Boxer", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["GTK Boxer", "Boxer AFV"],
    fact: "A drive module with swappable mission modules bolted on.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DSCN7330-crop_-_Copy.jpg?width=1000", credit: "SurfaceAgentX2Zero / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/GTK_Boxer_Prototyp_2_%2824769196857%29.jpg?width=1000", credit: "Clemens Vasters from Viersen, Germany, Germany / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boxer_DVD.jpg?width=1000", credit: "Wolpat / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "puma_ifv", name: "Puma", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["Schützenpanzer Puma", "Puma IFV"],
    fact: "Armour that can be added or removed to suit the airlift.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IFV_Puma_2015_%2819727694195%29.jpg?width=1000", credit: "Katzennase / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Puma_IFV_with_MJH.jpg?width=1000", credit: "Boevaya mashina / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "typhoon_hawker", name: "Hawker Typhoon", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Tiffy", "Hawker Tiffy", "typhoon"],
    fact: "A troubled fighter that became a superb ground attacker.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Royal_Air_Force_in_Britain%2C_May_1943_TR1091.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "tempest", name: "Hawker Tempest", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Tempest"],
    fact: "Fast enough at low level to catch V-1 flying bombs.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawker_Tempest_V_in_flight_Nov_1944.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "beaufighter", name: "Bristol Beaufighter", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Beaufighter", "Beau", "Whispering Death"],
    fact: "Quiet enough on the approach to earn the name Whispering Death.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bristol_Beaufighter_Mk.IC_1944.jpg?width=1000", credit: "Umeyou / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Een_Bristol_Beaufighter_Mk._VI%2C_uitgerust_met_een_torpedo%2C_in_de_start_%282157-066-001%29.jpg?width=1000", credit: "Fotoafdrukken Koninklijke Luchtmacht / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bristol_156_Beaufighter_TT.10_SR911_34_Sqn_Teversham_06.51_edited-2.jpg?width=1000", credit: "RuthAS / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "halifax", name: "Handley Page Halifax", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Halifax"],
    fact: "The Lancaster's less celebrated four-engined stablemate.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Halifax-mk3.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "stirling", name: "Short Stirling", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Stirling"],
    fact: "Its wings were shortened to fit existing hangars.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Bomber_Command_HU107752.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "havoc", name: "Douglas A-20 Havoc", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["A-20", "Havoc", "Boston"],
    fact: "A fast light bomber flown by half a dozen air forces.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_A-20G_Havoc.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "marauder", name: "Martin B-26 Marauder", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["B-26", "Marauder", "Widowmaker"],
    fact: "Landed so fast that crews called it the Widowmaker.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B_26.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "airacobra", name: "Bell P-39 Airacobra", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["P-39", "Airacobra"],
    fact: "Engine behind the pilot, and a cannon firing through the propeller hub.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P-39N_Airacobra_of_the_357th_Fighter_Group_at_Hamilton_Field_in_July_1943.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "blackwidow", name: "Northrop P-61 Black Widow", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["P-61", "Black Widow"],
    fact: "The first American aircraft designed from the start as a night fighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Northrop_P-61_green_airborne.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "avenger", name: "Grumman TBF Avenger", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["TBF", "TBM Avenger", "Avenger"],
    fact: "George H. W. Bush was shot down flying one.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/TBM3_Avenger_-_Chino_Airshow_2014_%2814344070442%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "wildcat", name: "Grumman F4F Wildcat", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["F4F", "Wildcat"],
    fact: "Outclassed by the Zero, and flown in tactics that beat it anyway.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F4F-3_new_pitot_tube_of_later_model.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "helldiver", name: "Curtiss SB2C Helldiver", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["SB2C", "Helldiver"],
    fact: "Crews read the SB2C as 'son of a bitch, second class'.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Curtiss_SB2C-5_Helldiver_warbird_in_flight.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "swordfish", name: "Fairey Swordfish", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Swordfish", "Stringbag"],
    fact: "An obsolete biplane that crippled the Bismarck.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shoreham_Airshow_2013_%289700275620%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "catalina", name: "Consolidated PBY Catalina", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["PBY", "Catalina"],
    fact: "A flying boat that spotted the Bismarck and rescued downed crews.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Consolidated_PBY-3_Catalina_lands_c1942.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Consolidated_PBY-5A_Catalina_-_50815667677.jpg?width=1000", credit: "Eric Friedebach / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Consolidated_PBY-5A_Catalina_-_50815667612.jpg?width=1000", credit: "Eric Friedebach / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "betty", name: "Mitsubishi G4M", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["G4M", "Betty"],
    fact: "Long-ranged and so prone to fire it was called the flying lighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi_G4M_burning_on_ground.jpg?width=1000", credit: "U.S. Office of War Information / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Betty_bomber.jpg?width=1000", credit: "Motoki Kurabayashi / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "oscar", name: "Nakajima Ki-43", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ki-43", "Oscar", "Hayabusa"],
    fact: "Often mistaken for the Zero, and even lighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nakajima_Ki_43_Hayabusha_%28Oscar%29.jpg?width=1000", credit: "Museum Pusat TNI AU Dirgantara Mandala, Yogyakarta, Indonesia / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki-43_Hayabuya_Kagoshima_Japan.jpg?width=1000", credit: "Z3144228 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E4%B8%80%E5%BC%8F%E6%88%A6%E9%97%98%E6%A9%9F%E4%BA%8C%E5%9E%8B_%E6%B2%B3%E5%8F%A3%E6%B9%96%E8%87%AA%E5%8B%95%E8%BB%8A%E5%8D%9A%E7%89%A9%E9%A4%A888E9915D-353F-4142-B86C-08A13DDA30CD.jpg?width=1000", credit: "飛燕前向き型 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "la5", name: "Lavochkin La-5", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["La-5", "La5"],
    fact: "A wooden airframe that finally matched the Fw 190 low down.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9_%D0%B8%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%9B%D0%B0-5%D0%A4_%D0%92._%D0%A0%D0%B0%D1%81%D1%82%D0%BE%D1%80%D0%B3%D1%83%D0%B5%D0%B2%D0%B0_%D0%B2_%D0%BF%D0%BE%D0%BB%D0%B5%D1%82%D0%B5.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "pe2", name: "Petlyakov Pe-2", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Pe-2", "Pe2"],
    fact: "Designed in a prison bureau, and fast enough to outrun fighters.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Unmarked_Petlyakov_Pe.2FT_%287985693559%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "do17", name: "Dornier Do 17", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Do 17", "Flying Pencil"],
    fact: "So slim it was nicknamed the Flying Pencil.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dornier_Do_17_Z_%281942%29.jpg?width=1000", credit: "SA-kuva is a photograph archive site storing solely photographs from the 20th-century wartimes in Finland. As / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "fw200", name: "Focke-Wulf Fw 200 Condor", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Fw 200", "Condor"],
    fact: "An airliner turned maritime raider Churchill called the scourge of the Atlantic.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Focke-Wulf_Fw_200_C_%28SA-kuva_157694%29.jpg?width=1000", credit: "Sot.virk. Eino Nurmi / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FW-200_milit%C3%A4r.JPG?width=1000", credit: "Alf van Beem / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DDL%2C_Focke_Wulf_Condor_FW_200_Diana.jpg?width=1000", credit: "SAS Scandinavian Airlines / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "me163", name: "Messerschmitt Me 163 Komet", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Me 163", "Komet"],
    fact: "Rocket-powered, with about eight minutes of fuel.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Messerschmitt_Me_163B_USAF.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "ar234", name: "Arado Ar 234", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ar 234", "Blitz"],
    fact: "The first jet bomber to fly an operational mission.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arado_Ar_234_in_the_Steven_F._Udvar-Hazy_Center.jpg?width=1000", credit: "HawkeyeUK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arado_Ar_234_-_Steven_F._Udvar-Hazy_Center.jpg?width=1000", credit: "HawkeyeUK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "he162", name: "Heinkel He 162", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["He 162", "Volksjäger", "Salamander"],
    fact: "Designed and flown within about three months.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Heinkel%2C_He_162%2C_Spatz_Volksjager_%287585406720%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "ho229", name: "Horten Ho 229", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ho 229", "Horten flying wing"],
    fact: "A flying wing thirty years before the B-2.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Horten_Ho229_V3_%E2%80%98T2-490%E2%80%99_-_51175415164.jpg?width=1000", credit: "HawkeyeUK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Horten_Ho229_V3_%E2%80%98T2-490%E2%80%99.jpg?width=1000", credit: "HawkeyeUK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Horten_Ho229_V3_%E2%80%98T2-490%E2%80%99_-_51174624411.jpg?width=1000", credit: "HawkeyeUK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "meteor", name: "Gloster Meteor", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Meteor"],
    fact: "The only Allied jet to fly combat missions in the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gloster_Meteor_%2852577102516%29.jpg?width=1000", credit: "Clemens Vasters from Viersen, Germany, Germany / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gloster_Armstrong_Whitworth_Meteor_NF14_%2850115647246%29.jpg?width=1000", credit: "Hugh Llewelyn from Keynsham, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gloster_Meteor_prototype_%E2%80%98DG202-G%E2%80%99_%2817222803406%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "constellation", name: "Lockheed Constellation", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Connie", "Super Constellation", "L-1049"],
    fact: "Three tail fins, so it fitted in existing hangars.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_L-1049_G_Super_Constellation_%28D-ALEM%29.JPG?width=1000", credit: "High Contrast / Wikimedia Commons (CC BY 3.0 de)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_VC-121E_Super_Constellation.jpg?width=1000", credit: "USAF Museum / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_Constellation_N749NL_Aviodrome.JPG?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "piper_cub", name: "Piper J-3 Cub", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Piper Cub", "J-3 Cub"],
    fact: "Bright yellow, and the aircraft most pilots first flew.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/L-4J-Piper-Cub.jpg?width=1000", credit: "Museum Pusat TNI AU Dirgantara Mandala, Yogyakarta, Indonesia / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piper_J-3C-65_Cubimg_0505.jpg?width=1000", credit: "Rama / Wikimedia Commons (CC BY-SA 2.0 fr)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piper_J3C_Cub_04.jpg?width=1000", credit: "Huhu Uet / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "f100", name: "F-100 Super Sabre", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-100", "Super Sabre", "Hun"],
    fact: "The first American fighter to go supersonic in level flight.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/20180328_F-100_Super_Sabre_Udvar-Hazy.jpg?width=1000", credit: "Balon Greyjoy / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-100D_Super_Sabre_Wings_Over_the_Rockies.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/North_American_F-100_Super_SabreCAM.jpg?width=1000", credit: "Nehrams2020 / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "f104", name: "F-104 Starfighter", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-104", "Starfighter"],
    fact: "Wings so short and sharp they were covered on the ground.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-104_Starfighter_Republic_of_China_Air_Force_342-C-KE-40094.jpg?width=1000", credit: "Unknown authorUnknown author or not provided / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_F-104G_Starfighter_D-8053.jpg?width=1000", credit: "Netherlands Institute for Military History / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_F-104G_Starfighter_D-8114_%289179542542%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "f105", name: "F-105 Thunderchief", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-105", "Thunderchief", "Thud"],
    fact: "Crews called it the Thud; it carried more bombs than a B-17.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-105_Thunderchiefs_refuel.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-105_Thunderchiefs_Mt_Fuji.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Republic_F-105_Thunderchief_-_Vietnam_War_1966.jpg?width=1000", credit: "United States Air Force / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f111", name: "F-111 Aardvark", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-111", "Aardvark"],
    fact: "Swing wings, side-by-side seats, and an escape capsule.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/16_19_189_F111.jpg?width=1000", credit: "Dsdugan / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-111E_Escape_Pod.JPG?width=1000", credit: "Expatscot / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/General_Dynamics_F-111_at_the_Wings_Over_the_Rockies_Air_and_Space_Museum_%284283375990%29.jpg?width=1000", credit: "Ryan Frost from Omaha, NE, USA / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "a6", name: "A-6 Intruder", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["A-6", "Intruder"],
    fact: "Could find a target at night in bad weather, which was rare then.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/20180328_A-6_Intruder_Udvar-Hazy_2.jpg?width=1000", credit: "Balon Greyjoy / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A-6E_Intruder_Pax_River_Museum.jpg?width=1000", credit: "Balon Greyjoy / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Grumman_A-6E_Intruder_of_VA-65_on_flight_on_1_August_1983_%286392725%29.jpg?width=1000", credit: "PH2 Parlsey, U.S. Navy / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "a7", name: "A-7 Corsair II", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["A-7", "Corsair II", "SLUF"],
    fact: "Subsonic and unglamorous, and very accurate.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A-7E_Corsair_II_of_VA-146_in_flight_on_16_November_1974_%28NNAM.1996.253.7100.039%29.jpg?width=1000", credit: "Robert L. Lawson, U.S. Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Greek_Air_Force_LTV_TA-7G_Corsair_II_departs_RIAT_Fairford_14thJuly2014_arp.jpg?width=1000", credit: "Myself (Adrian Pingstone). / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/LTV_A-7E_Corsair_II_of_VA-15_and_VA-87_on_the_flight_deck_of_USS_Independence_%28CV-62%29%2C_7_December_1983_%286381816%29.jpg?width=1000", credit: "U.S. Navy photo 330-CFD-DN-SN-84-05241 / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "a1", name: "A-1 Skyraider", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["A-1", "Skyraider", "Sandy"],
    fact: "A piston-engined attacker that outlasted early jets in Vietnam.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_A-1_Skyraider_%28AD-4NA%2C_126965%29_%287911148090%29.jpg?width=1000", credit: "Clemens Vasters from Viersen, Germany / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_A-1H_Skyraider_of_the_1st_SOS_in_flight%2C_circa_in_1972_%28221110-F-IO108-040%29.JPG?width=1000", credit: "U.S. Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_A-1H_Skyraider_of_VA-115_in_flight_over_the_Gulf_of_Tonkin%2C_circa_in_1965.jpg?width=1000", credit: "U.S. Air Force / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "b47", name: "B-47 Stratojet", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["B-47", "Stratojet"],
    fact: "Swept wings and podded engines set the pattern for every jet airliner.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/NNSA-NSO-990.jpg?width=1000", credit: "National Nuclear Security Administration / Nevada Site Office / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Strategic_Air_Command_B-47_Stratojets_-_020903-o-9999r-001.jpg?width=1000", credit: "US Air Force photo / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/WB_47E_55_BW_Stratojet_HAFB.jpg?width=1000", credit: "Wilson44691 / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "b58", name: "B-58 Hustler", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["B-58", "Hustler"],
    fact: "A delta-winged bomber that cruised at twice the speed of sound.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-58_%28modified%29.jpg?width=1000", credit: "US Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Convair_B-58_Hustler_%27Greased_Lightning_-_61-2059.jpg?width=1000", credit: "Aaron headly / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-58_Hustler.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "kc135", name: "KC-135 Stratotanker", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["KC-135", "Stratotanker"],
    fact: "The flying petrol station that makes long-range air power work.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-15C_Eagle_from_the_67th_Fighter_Squadron_at_Kadena_AB_is_refueled_by_a_KC-135R_Stratotanker_from_the_909th_Air_Refueling_Squadron_.jpg?width=1000", credit: "U.S. Air Force photo/Tech. Sgt. Angelique Perez / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/KC-135R_Stratotanker_%2862-3567%29_of_the_Turkish_Air_Force_arrives_2016_RIAT_7Jul2016_arp.jpg?width=1000", credit: "Myself (Adrian Pingstone). / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/KC-135_Stratotanker_Elephant_Walk.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f5", name: "F-5 Tiger II", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-5", "Tiger II", "Freedom Fighter"],
    fact: "Small, cheap, and still flown as an aggressor trainer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/J-3005.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-5E_Tiger_III_Plus.jpg?width=1000", credit: "TheReaper2033 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-5E-F-Tiger-II.jpg?width=1000", credit: "Museum Pusat TNI AU Dirgantara Mandala, Yogyakarta, Indonesia / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "t38", name: "T-38 Talon", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["T-38", "Talon"],
    fact: "Where most American fast-jet pilots learn the job.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-38_Talon_over_Edwards_AFB.jpg?width=1000", credit: "U.S. Department of Defense / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/N999NA_Northrop_T-38_Talon.jpg?width=1000", credit: "Naomi Persephone Amethyst / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-38_Talon_Kennedy_Space_Center_2019.jpg?width=1000", credit: "ZappaOMatic / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "ov10", name: "OV-10 Bronco", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["OV-10", "Bronco"],
    fact: "Twin booms and a greenhouse canopy, built for spotting.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/NASA_OV-10.jpg?width=1000", credit: "NASA / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rockwell_OV-10A_Bronco_of_VAL-4_attacks_a_target_in_the_Mekong_Delta%2C_Vietnam%2C_with_a_Zuni_rocket%2C_in_June_1969_%28USN_1139900%29.jpg?width=1000", credit: "Chief Photographer's Mate A.R. Hill, U.S. Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/NMUSAF_040524_Rockwell_OV-10A_Bronco.jpg?width=1000", credit: "Oren Rozen / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mig19", name: "MiG-19", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["MiG19", "Farmer"],
    fact: "The Soviet Union's first supersonic production fighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mikoyan-Gurevich_MiG-19S_Farmer_USAF.jpg?width=1000", credit: "U.S. Air Force photo / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MiG-19_Farmer.jpg?width=1000", credit: "The original uploader was Victor12 at English Wikipedia., 2006-07-06 (original upload date) / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mikoyan-Gurevich_MiG-19S_at_the_National_Museum_of_the_United_States_Air_Force.JPG?width=1000", credit: "U.S. Air Force photo / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "mig23", name: "MiG-23", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["MiG23", "Flogger"],
    fact: "Swing wings, built in enormous numbers and widely exported.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mig-23-DNST8908431_JPG.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-4J_of_VF-74_with_Libyan_MiG-23_over_Gulf_of_Sidra_1981.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "su24", name: "Su-24", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Su24", "Fencer"],
    fact: "The Soviet answer to the F-111.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Su-24_inflight_Mishin-2.jpg?width=1000", credit: "Alexander Mishin / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Russian_Sukhoi_Su-24_attack_aircraft_flies_over_USS_Donald_Cook._%2826426606725%29.jpg?width=1000", credit: "Official U.S. Navy Page from United States of America U.S. Navy photo/U.S. Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-24_Fencer_Right_side_gear_down.jpg?width=1000", credit: "Service Depicted: Other Service / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "tu16", name: "Tu-16", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Tu16", "Badger"],
    fact: "Still flying in Chinese service as the H-6.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-16_flies_over_USS_Hewitt_%28DD-966%29_c1978.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev-TU-16-B-KS.jpg?width=1000", credit: "Museum Pusat TNI AU Dirgantara Mandala, Yogyakarta, Indonesia / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tu-16_in_Smolensk_-_9.jpg?width=1000", credit: "Mikra72 / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "tu22m", name: "Tu-22M", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Tu22M", "Backfire", "Tu-22"],
    fact: "A swing-wing bomber built to hunt carrier groups.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-22M3M_GEFEST_%2819230388334%29.jpg?width=1000", credit: "Dmitry Terekhov from Odintsovo, Russian Federation / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu22M3_bn48_2021.jpg?width=1000", credit: "Andrei Shmatko / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-22M1%2C_Riga_Aviation_Museum.jpg?width=1000", credit: "Photographer: Mosbatho / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "il76", name: "Il-76", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Il76", "Candid"],
    fact: "The Soviet heavy airlifter, glazed nose and all.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Il-76MD-90A_RF-78653.jpg?width=1000", credit: "Ministry of Defence (Russia) / Wikimedia Commons (CC BY 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AIR_KORYO_IL76%2CS_P912_AND_P914_AT_PYONGYANG_SUNAN_AIRPORT_DPRK_NORTH_KOREA_OCT_2012_%288656695412%29.jpg?width=1000", credit: "calflier001 / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Il-76_Iraq.jpg?width=1000", credit: "Sgt. Sabrina Johnson (U.S. Air Force photo by Tech. Sgt. Sabrina Johnson/Released) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "mirage3", name: "Mirage III", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Dassault Mirage III", "Mirage 3"],
    fact: "The delta that made Dassault's name.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Two_Mirage_III_of_the_Royal_Australian_Air_Force_1.JPEG?width=1000", credit: "TSGT CURT EDDINGS / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mirage_III-R_MG_1468.jpg?width=1000", credit: "Rama / Wikimedia Commons (CC BY-SA 2.0 fr)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SAAF_Mirage_IIIBZ.jpg?width=1000", credit: "DanieB52 / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "jaguar", name: "SEPECAT Jaguar", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Jaguar"],
    fact: "An Anglo-French strike jet that flew very low and very fast.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/French_Jaguar_A_of_EC_1-7_Provence_in_flight_over_the_Adriatic_Sea%2C_8_April_2003_%28DF-SD-05-05511%29.jpg?width=1000", credit: "TSGT Mike Buytas, USAF photo DF-SD-05-05511 / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/E40_%28Sepecat_JaguarE%29.jpg?width=1000", credit: "TRTPUWU / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Air_Force_Sepecat_Jaguar_with_Harpoon_Anti-ship_missile.jpg?width=1000", credit: "Indian Air Force / Wikimedia Commons (GODL-India)" },
    ]
  },
  {
    id: "buccaneer", name: "Blackburn Buccaneer", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Buccaneer", "Brick"],
    fact: "Built to fly under radar at wave-top height.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawker_Siddeley_Buccaneer_S2B%2C_UK_-_Air_Force_AN0334965.jpg?width=1000", credit: "Pedro Aragão / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blackburn_Buccaneer_S.2B%2C_United_Kingdom_-_Royal_Air_Force_%28RAF%29_JP5994926.jpg?width=1000", credit: "Pedro Aragão / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blackburn_Buccaneer_Blcackburn_Buccaneer_%2816525773894%29.jpg?width=1000", credit: "San Diego Air & Space Museum Archives / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "canberra", name: "English Electric Canberra", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Canberra"],
    fact: "So good the Americans built it under licence as the B-57.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Canberra_T_4_MOD_45144929_%28cropped%29.jpg?width=1000", credit: "SAC A K Benson / Wikimedia Commons (OGL v1.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/English_Electric_Canberra_TT.18.jpg?width=1000", credit: "Travelling Nomad / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/English_Electric_Canberra_B-57_Prototype_061025-F-1234P-002.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "vampire", name: "de Havilland Vampire", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Vampire"],
    fact: "Twin booms and a plywood nose.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/De_Havilland_DH115_Vampire_banking_with_the_sun_reflecting_off_its_silver_wings_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "hunter", name: "Hawker Hunter", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Hunter"],
    fact: "Widely held to be one of the most beautiful jets ever built.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hunter_-_Shuttleworth_Military_Pageant_June_2013_%289187713516%29.jpg?width=1000", credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawker_Hunter_T7_Shoreham_Airshow_2014.jpg?width=1000", credit: "John5199 / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawker_Hunter.jpg?width=1000", credit: "Abhinav619 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "victor", name: "Handley Page Victor", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Victor"],
    fact: "The crescent-winged member of Britain's V-force.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Handley_Page_HP-80_Victor_K2%2C_UK_-_Air_Force_AN1926561.jpg?width=1000", credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Avro_Vulcan_%26_Handley_Page_Victor_nuclear_bombers_at_the_1964_Richmond_Air_Show%2C_NSW.jpg?width=1000", credit: "aussiejeff / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Handley_Page_HP-80_Victor_K2_AN1103895.jpg?width=1000", credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "hawk", name: "BAE Hawk", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Hawk", "Hawk trainer"],
    fact: "The Red Arrows' aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawk_-_RIAT_2011_%286122004254%29.jpg?width=1000", credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bae_Hawk_Indonesian_Air_Force_at_Dirgantara_Mandala_Museum.jpg?width=1000", credit: "Museum Pusat TNI AU Dirgantara Mandala, Yogyakarta, Indonesia / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Swiss_Air_Force_BAe_Hawk_trainer_U-1263.jpg?width=1000", credit: "karaya69 / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "x1", name: "Bell X-1", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["X-1", "Glamorous Glennis"],
    fact: "First through the sound barrier, in 1947.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_X-1_46-062_%28in_flight%29.jpg?width=1000", credit: "NASA / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BellX1.jpg?width=1000", credit: "Ad Meskens / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bell_X-1-3_being_mated_with_the_motherplane.jpg?width=1000", credit: "The NASA source page credits the image to NASA, but that can't be correct since NASA was not created until 195 / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "x15", name: "North American X-15", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["X-15"],
    fact: "Reached Mach 6.7 and the edge of space, on a rocket motor.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/X-15_flying.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "tu144", name: "Tu-144", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Tu144", "Concordski"],
    fact: "Beat Concorde into the air by two months.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_TU-144_%286060104119%29.jpg?width=1000", credit: "clipperarctic / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Technik_Museum_Sinsheim%2C_Tu-144.jpg?width=1000", credit: "Dr. Thomas Liptak / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-144_at_the_MAKS-2013_%2805%29.jpg?width=1000", credit: "Doomych / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "b707", name: "Boeing 707", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["707"],
    fact: "The aircraft that made the jet age ordinary.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_707-321B_Pan_Am_Freer.jpg?width=1000", credit: "Mike Freer / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Air_France_Boeing_707-328_%28cropped%29.jpg?width=1000", credit: "clipperarctic / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_707-120_without_%E2%80%9Ceyebrow_windows%E2%80%9D.jpg?width=1000", credit: "JQ OFFICIAL / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "dc10", name: "DC-10", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["McDonnell Douglas DC-10", "DC10"],
    fact: "Three engines, one of them in the tail fin.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Continental_Airlines_DC-10.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "l1011", name: "Lockheed TriStar", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["L-1011", "TriStar"],
    fact: "Technically superb, and outsold by the DC-10 anyway.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_L-1011-385-1-15_TriStar_250%2C_Hewa_Bora_Airways_AN0302242.jpg?width=1000", credit: "Árpád Gordos / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EGVN_-_Lockheed_L-1011_Tristar_K1_-_Royal_Air_Force_-_ZD948_%2840205452283%29.jpg?width=1000", credit: "Steve Lynes from Sandshurst, United Kingdom / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_TriStar_back.jpg?width=1000", credit: "Ahmed Abdulbasit (Pakistan) / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "comet", name: "de Havilland Comet", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Comet"],
    fact: "The first jet airliner, grounded after metal fatigue crashes.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BEA_de_Havilland_DH-106_Comet_4B_Berlin.jpg?width=1000", credit: "Ralf Manteufel Altair78 (talk) / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/De_Havilland_Comet_RAF_Museum_Cosford.jpg?width=1000", credit: "Tony Hisgett from Birmingham, UK / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DeHavillandCometCockpit.jpg?width=1000", credit: "Vinsomnia / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "an2", name: "Antonov An-2", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["An-2", "Colt"],
    fact: "A biplane still in production sixty years after its first flight.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Feldbach-Nostalgiewelt_Posch-Antonov_AN-2-21ESD.jpg?width=1000", credit: "Rikki Mitterer / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Feldbach-Nostalgiewelt_Posch-Antonov_AN-2-02ESD.jpg?width=1000", credit: "Rikki Mitterer / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Feldbach-Nostalgiewelt_Posch-Antonov_AN-2-34MSA.jpg?width=1000", credit: "Margit Schäfer / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mig31", name: "MiG-31", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["MiG31", "Foxhound"],
    fact: "Built to catch cruise missiles over the Arctic.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force_Mikoyan-Gurevich_MiG-31P.jpg?width=1000", credit: "Dmitriy Pichugin / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mikoyan-Gurevich_MiG-31E_landing_at_Sormovo_%282007%29.jpg?width=1000", credit: "Godot13 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mikoyan_MiG-31_Foxhound_formation_-_Zhukovsky_2012_%288710851439%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "su34", name: "Su-34", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Su34", "Fullback"],
    fact: "Side-by-side seats, and a galley and toilet for long sorties.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MAKS2015part1-10_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "su57", name: "Su-57", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Su57", "Felon"],
    fact: "Russia's stealth fighter programme.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Design_Bureau%2C_054%2C_Sukhoi_T-50_%28Su-57_prototype%29_%2849581303977%29.jpg?width=1000", credit: "Anna Zvereva from Tallinn, Estonia / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-57E_at_Aero_India_2025.jpg?width=1000", credit: "Bssasidhar / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-57D_and_Su-57.jpg?width=1000", credit: "Luis4516 / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "c17", name: "C-17 Globemaster III", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["C-17", "Globemaster"],
    fact: "Can land a full load on a short dirt strip.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/C-17_test_sortie.jpg?width=1000", credit: "U.S. Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_C-17A_Globemaster_III_%E2%80%98CB-8010%E2%80%99.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_C-17A_Globemaster_III_Qatar_Emiri_Air_Force_A7-MAE_-_MSN_F252_QA4_%2810101360223%29.jpg?width=1000", credit: "Laurent ERRERA from L'Union, France / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "an124", name: "An-124", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["An124", "Ruslan"],
    fact: "The An-225's smaller and far more numerous sibling.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%D0%BE%D0%B2_%D0%90%D0%BD-124_9773054055093%2C_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_-_%D0%94%D0%BE%D0%BC%D0%BE%D0%B4%D0%B5%D0%B4%D0%BE%D0%B2%D0%BE_RP2297.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "j20", name: "Chengdu J-20", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["J-20", "Mighty Dragon"],
    fact: "China's first stealth fighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/J-20_at_CCAS2022_%2820220827103424%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "j10", name: "Chengdu J-10", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["J-10", "Vigorous Dragon"],
    fact: "A delta-canard single-engine Chinese fighter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/J-10B_with_PL-10_and_PL-12.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "b777", name: "Boeing 777", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["777", "Triple Seven"],
    fact: "The largest twinjet, with the biggest engines ever flown.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cathay_Pacific_Boeing_777-200%3B_B-HNL%40HKG.jpg?width=1000", credit: "Aero Icarus from Zürich, Switzerland / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-HNL_Boeing_777_Cathay_Pacific_forward.jpg?width=1000", credit: "kitmasterbloke / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/20251024_Boeing_777-36NER%28SF%29_of_Kalitta_Air_%28N778CK%29_on_final_approach_at_HKG.jpg?width=1000", credit: "Windmemories / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "b787", name: "Boeing 787 Dreamliner", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["787", "Dreamliner"],
    fact: "Mostly carbon fibre, which lets the cabin sit at a lower altitude.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_787_N1015B_ANA_Airlines_%2827611880663%29_%28cropped%29.jpg?width=1000", credit: "pjs2005 from Hampshire, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/N1015X_Air_Tahiti_Nui_Boeing_787-9_Dreamliner_33.jpg?width=1000", credit: "New York-air / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeing_787-8_Dreamliner_-_Prototype_N787BA_preserved_in_Nagoya_%28Flight_of_Dreams%29.jpg?width=1000", credit: "Samson Ng . D201@EAL / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "a320", name: "Airbus A320", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["A320"],
    fact: "The first airliner with fly-by-wire and a sidestick.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A320-214%2C_Airbus_Industrie_JP7617615.jpg?width=1000", credit: "Pedro Aragão / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spirit_Airbus_A320_N652NK_BWI_MD1.jpg?width=1000", credit: "Acroterion / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A320-100_Air_France_%28AFR%29_F-GFKQ_-_MSN_002_%2810655931213%29.jpg?width=1000", credit: "Laurent ERRERA from L'Union, France / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "a350", name: "Airbus A350", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["A350"],
    fact: "Recognisable by the curved black mask around the cockpit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EGLF_-_Airbus_A350-941_-_F-WZNW.jpg?width=1000", credit: "Steve Lynes / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_Industrie_F-WULR_Airbus_A350-1041_Melbourne_International_Airport_%28MEL_YMML%29_%2855483824952%29.jpg?width=1000", credit: "Mitchul Hope / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A350-941_%E2%80%98VN-A886%E2%80%99_Vietnam_Airlines.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "spiritstlouis", name: "Spirit of St. Louis", category: "plane", era: "Pioneer", difficulty: 2,
    aliases: ["Ryan NYP"],
    fact: "No forward windscreen — Lindbergh used a periscope.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spirit_Of_St_Louis2.jpg?width=1000", credit: "Ad Meskens, zie ook:vliegtuigen / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spirit_of_St_Louis_at_EAA_Museum.JPG?width=1000", credit: "Bzuk (talk) / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Spirit_of_St._Louis_Nose_Cone_1.jpg?width=1000", credit: "Toytoy at English Wikipedia / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "mi6", name: "Mil Mi-6", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mi-6", "Hook"],
    fact: "Had stub wings to offload the rotor in cruise.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi-6_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "ka27", name: "Kamov Ka-27", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Ka-27", "Helix"],
    fact: "Coaxial rotors keep it compact enough for a ship's deck.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Russian_Helix_KA-27_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "h21", name: "Piasecki H-21", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["H-21", "Flying Banana", "Shawnee"],
    fact: "Bent in the middle, hence the Flying Banana.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piasecki_H-21_%28modified%29.jpg?width=1000", credit: "US Army / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piasecki_H-21_-_inside.jpg?width=1000", credit: "Stahlkocher / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Piasecki_H-21_-_left.jpg?width=1000", credit: "Stahlkocher / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "h19", name: "Sikorsky H-19 Chickasaw", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["H-19", "Chickasaw"],
    fact: "Engine in the nose, crew above it.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_UH-19B_Chickasaw_USAF.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_HRS-3_%28CH-19E%29_Chickasaw_US_Marines_130252_HR1_%287402551900%29.jpg?width=1000", credit: "Curimedia / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Front_three-quarter_view_of_the_Sikorsky_H-19_Chickasaw_at_the_National_Museum_of_the_Air_Force_near_Dayton_Ohio.jpg?width=1000", credit: "Aaron headly / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "oh6", name: "OH-6 Cayuse", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["OH-6", "Cayuse", "Loach"],
    fact: "The egg-shaped scout that became the Little Bird.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2019_Royal_International_Air_Tattoo_EGVA_-_Hughes_OH-6A_Cayuse_-_G-OHGA_69-16011_%2848372649516%29.jpg?width=1000", credit: "Steve Lynes from Sandshurst, United Kingdom / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kawasaki-Hughes_OH-6J_Cayuse_%E2%80%9831058_JG-1058_SD%E2%80%99_%2848183441612%29.jpg?width=1000", credit: "Alan Wilson from Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hughes_OH-6A_Cayuse_506_%2867-16506%29_%286819193438%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "ch54", name: "CH-54 Tarhe", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["CH-54", "Tarhe", "Skycrane"],
    fact: "A flying spine with a cab, built to carry slung loads.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_CH-54A_Tarhe_%28Skycrane%29_%2840434472933%29.jpg?width=1000", credit: "Mike LaChance from Crowley, Tx, USA / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_CH-54A_Tarhe_%28S-64A%29%2C_USA_-_Army_AN1532342.jpg?width=1000", credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_Skycrane_CH-54B_c.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "gazelle", name: "Aérospatiale Gazelle", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Gazelle", "SA 341"],
    fact: "Its shrouded fantail tail rotor made it unusually quiet.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerospatiale_SA341G_Gazelle_-_HA-LFM_%2849553499093%29.jpg?width=1000", credit: "Steve Lynes from Sandshurst, United Kingdom / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A%C3%A9rospatiale_SA342M_Gazelle_%E2%80%983862_-_GAL%E2%80%99_%2831301083172%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerospatiale_Gazelle_AH1_Royal_Marines_in_Iraq_2002.JPEG?width=1000", credit: "TSgt. Marvin Preston, USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "alouette3", name: "Alouette III", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Alouette 3", "SE 3160"],
    fact: "A glass-nosed utility helicopter flown by dozens of air forces.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerospatiale_SA-319B_Alouette_III%2C_France_-_Navy_AN0330160.jpg?width=1000", credit: "Christian Hanuise / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Argentine_Navy_Alouette_III_3-H-102_onboard_corvette_ARA_Rosales._%288102977405%29.jpg?width=1000", credit: "Bob Adams from George, South Africa / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Armed_Forces_of_Malta_Air_Wing_Aerospatiale_SA-316B_Alouette_III_Zammit-1.jpg?width=1000", credit: "Gordon Zammit / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "wessex", name: "Westland Wessex", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Wessex"],
    fact: "A licence-built Sea King forerunner with turbine engines.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Westland_Wessex_HCC.4_%E2%80%98XV732%E2%80%99_%2832468890384%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Westland_Wessex_at_the_Fleet_Air_Arm_Museum_February_2015.jpg?width=1000", credit: "Nick-D / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Westland_Wessex_at_RAF_Manston_History_Museum_1.jpg?width=1000", credit: "Nilfanion / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "superpuma", name: "AS332 Super Puma", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Super Puma", "AS332"],
    fact: "The offshore oil industry's workhorse.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Eurocopter_AS332M-1_Super_Puma_%E2%80%98T-319%E2%80%99.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerospatiale_AS-332B1_Super_Puma_-_Lofting.jpg?width=1000", credit: "Chris Lofting / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerospatiale_AS-332M1_Super_Puma%2C_France_-_Army_AN0185496.jpg?width=1000", credit: "Elisabeth Klimesch / Wikimedia Commons (GFDL)" },
    ]
  },
  {
    id: "s92", name: "Sikorsky S-92", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["S-92"],
    fact: "Flies heads of state and offshore crews alike.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/S92_G-IACF_IMG_7005_%28cropped%29.jpg?width=1000", credit: "Ronnie Robertson / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Canada_-_Air_Force_Sikorsky_Helibus_847.jpg?width=1000", credit: "Gillfoto / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_S-92_Helibus%2C_Gulf_Helicopters_JP6485481.jpg?width=1000", credit: "Peter Bakema / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "ec135", name: "Eurocopter EC135", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["EC135", "H135"],
    fact: "The air ambulance you have probably seen overhead.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EC-135_-_RIAT_2011_%286199185182%29.jpg?width=1000", credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Eurocopter_EC135P1_of_Western_Power_Distribution_%28G-WPDD%29_leaves_Bristol_Airport%2C_England_15Aug2016_arp.jpg?width=1000", credit: "Myself (Adrian Pingstone). / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Eurocopter_EC_135_Polic%C3%ADa_EC-KXE_02.jpg?width=1000", credit: "Bene Riobó / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "a129", name: "A129 Mangusta", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["A129", "Mangusta"],
    fact: "Europe's first purpose-built attack helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/20150506052017%21Agusta_A129A_Mangusta%2C_Italy_-_Army_%28cropped%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Unknown)" },
    ]
  },
  {
    id: "rooivalk", name: "Denel Rooivalk", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Rooivalk"],
    fact: "South African, and built around Puma parts.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rooivalk_in_flight_%28cropped%29.jpg?width=1000", credit: "Vaughan Leiberum / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Denel_XH-2_Rooivalk_AN1370262.jpg?width=1000", credit: "Anthony Noble / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rooivalk_attack_helicopters_escorting_a_UN_delegation_in_the_DRC.jpg?width=1000", credit: "MONUSCO/Clara Padovan / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "z10", name: "CAIC Z-10", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Z-10"],
    fact: "China's dedicated attack helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PLAAF_Changhe_WZ-10_-_Jordan.jpg?width=1000", credit: "3GO*CHN-405/mjordan_6 / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "dhruv", name: "HAL Dhruv", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Dhruv"],
    fact: "India's home-grown utility helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_air_force_dhruv_helicopter_j4042_arp.jpg?width=1000", credit: "Arpingstone / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HAL_Dhruv_ALH.jpg?width=1000", credit: "Shanze1 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HAL_Dhruv_IA-1133_AB.JPG?width=1000", credit: "Adambro / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },

  /* ------------------------------------------ BUILT FROM WIKIPEDIA */
  {
    id: "a3", name: "Douglas A-3 Skywarrior", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["EA-3B", "TA-3B", "KA-3B", "RA-3B", "ERA-3B", "Skywarrior", "Skywarrier", "Sky warrior"],
    fact: "The Douglas A-3 Skywarrior is a jet-powered strategic bomber that was developed and produced by the Douglas Aircraft Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EA-3B_VQ-1_in_flight_South_China_Sea_1974.jpeg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A3D-2_nose_wheel_collapse_USS_Saratoga.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A-3B_VAH-4_dropping_Mk_83_bomb_Vietnam_1965.jpeg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "a321", name: "Airbus A321", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["A321", "A-321", "A321ceo", "A321-200", "A321-111", "A321-112", "A321-131", "A321-211"],
    fact: "The Airbus A321 is a member of the Airbus A320 family of short to medium range, narrow-body, commercial passenger twin engine jet airliners; it carries 185 to 239 passengers.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airbus_A321-231%28w%29_%E2%80%98N915US%E2%80%99_American_Airlines_%2828442733186%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "a37", name: "Cessna A-37 Dragonfly", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["AT-37", "OA-37", "A-37B", "Cessna A-37", "A-37 Dragonfly", "OA-37 Dragonfly", "A-37B Dragonfly", "A-37A Dragonfly"],
    fact: "The Cessna A-37 Dragonfly, or Super Tweet, is a jet-powered, light attack aircraft that was designed and produced by American aircraft manufacturer Cessna.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/OA-37B-1_%28centered%29.jpg?width=1000", credit: "TSGT KEN HAMMOND / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "a400m", name: "Airbus A400M Atlas", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["A400M", "A-400M", "Atlas C1", "Airbus A400", "A400M Atlas", "Airbus A400m", "Airbus Atlas", "Future Large Aircraft"],
    fact: "The Airbus A400M Atlas is a European four-engine turboprop military transport aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Air_Force_Airbus_A400M_%28out_cropped%29.jpg?width=1000", credit: "Peng Chen / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "a5", name: "North American A-5 Vigilante", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["RA-5", "RA5C", "RA-5C", "NR-349", "A5 Vigilante", "A3J Vigilante", "A-5 Vigilante", "A-5A Vigilante"],
    fact: "The North American A-5 Vigilante is an American carrier-based supersonic bomber and reconnaissance aircraft designed and built by North American Aviation (NAA) for the United States Navy.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A-5_Vigilante_ECN-231.jpg?width=1000", credit: "NASA Dryden Flight Research Center / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A3J-1s_VAH-7_CVAN-65_NAN11-62.jpg?width=1000", credit: "USN / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RA-5C_RVAH-12_off_Vietnam_1967.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "aav7", name: "Assault Amphibious Vehicle", category: "afv", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The Assault Amphibious Vehicle ( AAV )—official designation AAV7 ( Assault Amphibious Vehicle, Model 7 ), formerly known as LVT7 ( Landing Vehicle, Tracked, Model 7 )—is a fully tr",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/170606-N-PF515-398_%2834973155842%29.jpg?width=1000", credit: "Commander, U.S. Naval Forces Europe-Africa/U.S. 6th Fleet / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AAV-australia.jpg?width=1000", credit: "Petty Officer 1st Class Daniel E. Smith, U.S. Navy / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AAV_Survivability_Upgrade_%28SU%29.jpg?width=1000", credit: "Sgt. Eric Keenan / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "ab41", name: "Autoblindo Fiat-Ansaldo", category: "afv", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Autoblindo 40, 41 and 43 (abbreviated AB 40, 41 and 43 ) were Italian armoured cars produced by Fiat - Ansaldo and which saw service mainly during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Autoblinda-AB-41-haugh-1.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "achilles", name: "Archer", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Valentine Archer"],
    fact: "The self-propelled 17-pdr, Valentine, Mk I, Archer was a British tank destroyer of the Second World War based on the Valentine infantry tank chassis fitted with an Ordnance QF 17 pounder gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Archer_SP_17_pdr_Tank_Destroyer.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "achzarit", name: "Achzarit", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["Achzariot", "IDF Achzarit", "IDF Achzarith"],
    fact: "The Achzarit ( אכזרית in Hebrew: \"cruel\", feminine inflection ) is a heavily armoured personnel carrier manufactured by the Israeli Defence Forces Corps of Ordnance.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Achzarit.jpg?width=1000", credit: "gkirok / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "ah1w", name: "Bell AH-1 SuperCobra", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["AH-1W", "AH-1J", "AH-1T", "SeaCobra", "AH-1 Viper", "AH-1 SeaCobra", "IAIO Toofan I", "AH-1 Sea Cobra"],
    fact: "The Bell AH-1 SuperCobra is a twin-engined attack helicopter that was developed on behalf of, and primarily operated by, the United States Marine Corps (USMC).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-1W_Super_Cobra_assigned_to_HMLA_167.jpg?width=1000", credit: "Communication Specialist Seaman Mark Hays / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "akatsiya", name: "2S3 Akatsiya", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["2S3", "2C3", "M1973", "M-1973", "SO-152", "CO-152", "Akatsiya", "2S3 Akatsia"],
    fact: "The SO-152 (Russian: СО-152), usually known by its GRAU designation 2S3 ( Russian: 2С3 ), is a Soviet 152.4 mm self-propelled gun developed in 1968, as a response to the American 155 mm M109 howitzer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2S3_Akatsiya_3261.jpg?width=1000", credit: "Zimin.V.G. / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ParkPatriot2015part6-08.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "al_khalid", name: "Al-Khalid tank", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["MBT-2000", "MBT 2000", "Al Khalid", "Al-Khalid", "VT1A tank", "Type 90-IIM", "Al Khalid II", "Al-Khalid MBT"],
    fact: "The Al-Khalid/VT-1A ( Urdu: الخالد ٹینک — Al-Xālid Ṫaiŋk, pronounced [ əlˈxaːlɪd̪ ʈɛːŋk ], literal translation</span>\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"Lit\",\"href\":\"./Templ",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Al-Khalid_IDEAS_2012.jpg?width=1000", credit: "Photo by Guy Martin / Pakistan and China to jointly market Al Khalid tank / Wikimedia Commons (CC BY 1.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_90-IIM_MBT.JPG?width=1000", credit: "NATIONAL WAR COLLEGE MILITARY IMAGE COLLECTION / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "alpha_jet", name: "Dassault/Dornier Alpha Jet", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Alphajet", "Alpha jet", "Alphajets", "Alpha-Jet", "Alpha Jets", "Dornier Alpha", "Dornier Alpha Jet", "Dassault Alpha Jet"],
    fact: "The Dassault/Dornier Alpha Jet is a light attack jet and advanced jet trainer co-manufactured by Dassault Aviation of France and Dornier Flugzeugwerke of Germany.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alpha_Jet_-_RIAT_2007_%282544737153%29.jpg?width=1000", credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alfa.jpg?width=1000", credit: "SoAres / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "altay", name: "Altay", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Altay MBT", "MITUP Altay", "MİTÜP Altay", "Altay main battle tank", "MİTÜP Altay main battle tank", "Mitup Turkish National Tank Project", "MİTÜP Turkish National Tank Project", "Altay MİTÜP Turkish National Tank Project"],
    fact: "Altay ( Turkish for Red foal/colt ) is a Turkish fourth generation main battle tank designed by Otokar, based on the South Korean K2 Black Panther.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Altay_Tank.jpg?width=1000", credit: "Emir GEÇİR / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "amx10rc", name: "AMX-10 RC", category: "afv", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The AMX-10 RC is a French armoured fighting vehicle manufactured by Nexter Systems for armoured reconnaissance purposes.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AMX-10_RC%2C_nouvelles_couleurs_Arm%C3%A9e_de_terre_%2814_juillet_2021%29_%282%29.jpg?width=1000", credit: "Kevin.B / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "amx13", name: "AMX-13", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["AMX-13P", "AMX-13 DCA", "SOFAM howitzer"],
    fact: "The AMX-13 is a French light tank produced from 1952 to 1987.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Amx-13_tankfest_2023.JPG?width=1000", credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "an12", name: "Antonov An-12", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["An12", "AN-12", "An-12BP", "An-12 Cub", "Antonov 12", "Antonov 12V", "Antonov An-42", "Antonov AN-12V"],
    fact: "The Antonov An-12 ( Russian: Антонов Ан-12; NATO reporting name: Cub ) is a four-engined turboprop cargo/military transport aircraft designed in the Soviet Union.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonov_An-12BK%2C_Russia_-_Air_Force_AN1879625.jpg?width=1000", credit: "Igor Dvurekov / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "an22", name: "Antonov An-22", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["An-22", "Antonov 22", "Antonov An-22 Antheus"],
    fact: "The Antonov An-22 \"Antei\" ( Russian: Ан-22 Антей, romanized: An-22 Antey; literal translation</span>\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"lit\",\"href\":\"./Template:Lit\"},\"params",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Antonov_An-22A_Antei%2C_Russia_-_Air_Force_AN2203462.jpg?width=1000", credit: "Toshi Aoki - JP Spotters / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/An-22._Bottom_view.jpg?width=1000", credit: "Ministry of Defense of Russia / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "an26", name: "Antonov An-26", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["An-26", "An-26B", "Antonov 26", "Antonov-26", "Antonov An-26B", "Antonov 26 plane", "Antonov An-26-100", "Utair Flight 9706"],
    fact: "The Antonov An-26 ( NATO reporting name: Curl, nicknamed Nastia in the USSR) is a twin-engined turboprop regional airliner and military transport aircraft, designed and produced in",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/An-26_Ni%C2%B5_Nishava_Serbien_Marko_Stojkovic_IMG_2634-1-2.jpg?width=1000", credit: "Marko Stojkovic / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "ar196", name: "Arado Ar 196", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["AR 196", "Ar-196", "Arado 196", "Arado Ar 196 V4"],
    fact: "The Arado Ar 196 is a shipboard reconnaissance low-wing monoplane aircraft designed and produced by the German aircraft manufacturer Arado.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arado_Ar_196A-2_taxiing_1940.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "at4", name: "AT4", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["AT8", "M136", "ILAW", "AT4 CS", "AT4-HS", "AT4-CS", "AT-4CS", "M136AT4"],
    fact: "The AT4 is a Swedish 84 mm (3.31 in) unguided, man-portable, disposable, shoulder-fired recoilless anti-tank weapon manufactured by Saab Bofors Dynamics.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AT4_2.jpg?width=1000", credit: "KASP / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "b21", name: "Northrop Grumman B-21 Raider", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["B-21", "B-3 bomber", "B21 bomber", "B-21 Bomber", "B-21 Raider", "Northrop B-3", "Strike Bomber", "Northrop Grumman B-3"],
    fact: "The Northrop Grumman B-21 Raider is an American nuclear-capable subsonic stealth strategic bomber in development for the United States Air Force (USAF) by Northrop Grumman.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-21-in-flight.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "b5n", name: "Nakajima B5N", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["B5N", "B5N1", "B5N2", "B5N Kate", "Nakajima K", "Nakajima Kate", "Nakajima B5N2", "Nakajima B5N1-K"],
    fact: "The Nakajima B5N ( Allied reporting name \" Kate \") was a carrier-based torpedo bomber designed and produced by the Nakajima Aircraft Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nakajima_B5N.jpg?width=1000", credit: "SDASM / Wikimedia Commons (No known restrictions)" },
    ]
  },
  {
    id: "b727", name: "Boeing 727", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["B727", "B722", "C-22B", "B-727", "B 727", "727-200", "727-230", "727-100"],
    fact: "The Boeing 727 is an American narrow-body trijet that was developed and produced by Boeing Commercial Airplanes.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/B-727_Iberia_%28cropped%29.jpg?width=1000", credit: "Iberia Airlines / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "b737max", name: "Boeing 737 MAX", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["7M7", "7M8", "7M9", "B37M", "B38M", "B39M", "B3JM", "B3XM"],
    fact: "The Boeing 737 MAX is a series of narrow-body aircraft developed by Boeing Commercial Airplanes as the fourth generation of the Boeing 737.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alaska_737_Max_9.jpg?width=1000", credit: "KirkXWB / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "b757", name: "Boeing 757", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["B757", "B752", "B753", "B-757", "B 757", "B752SF", "757-200", "757-300"],
    fact: "The Boeing 757 is an American narrow-body airliner designed and built by Boeing Commercial Airplanes.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Delta_757-200_N713TW_on_final_approach_to_Boston_Dec_2024_2.jpg?width=1000", credit: "4300streetcar / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "b767", name: "Boeing 767", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["76W", "B767", "B763", "B764", "B762", "B761", "B-767", "B 767"],
    fact: "The Boeing 767 is an American wide-body airliner developed and manufactured by Boeing Commercial Airplanes.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Delta_Air_Lines_B767-332_N130DL.jpg?width=1000", credit: "Richard Snyder from San Jose, CA, United States of America derivative wo / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "ba10", name: "BA-10", category: "afv", era: "WW2", difficulty: 3,
    aliases: ["BA-10N"],
    fact: "The BA-10 ( Russian: Броневой автомобиль 10 модель (БА-10), romanized: Bronevoy avtomobil' 10 model', lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ba10_parola_1.jpg?width=1000", credit: "User:Balcer . / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SovietArmouredVehicle.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-013-0068-18A%2C_Polen%2C_Treffen_deutscher_und_sowjetischer_Soldaten.jpg?width=1000", credit: "Höllenthal / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "beaufort", name: "Bristol Beaufort", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["DAP Beaufort", "Beaufort bomber", "Bristol Type 156 Beaufort", "Bristol Type 152 Beaufort"],
    fact: "The Bristol Beaufort (manufacturer designation Type 152 ) is a British twin-engined torpedo bomber designed by the Bristol Aeroplane Company, and developed from experience gained d",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bristol_Beauforts_217_Squadron_in_flight.jpg?width=1000", credit: "RAF official. The original uploader was Minorhistorian at English Wikipedia . 2 April 2008, (1 April 2008 (ori / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "bell412", name: "Bell 412", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["B412", "AB-412", "Bell 412EP", "Bell 412SP", "Griffin HT1", "Bell Griffin", "Griffin HAR2", "Bell 412 EPI"],
    fact: "The Bell 412 is a utility helicopter of the Huey family manufactured by Bell Helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%281%29Police_Helicopter_039.jpg?width=1000", credit: "Sardaka / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "bf110", name: "Messerschmitt Bf 110", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Me110", "Bf110", "Bf 110", "Me 110", "Bf-110", "Me-110", "Dackelbauch", "Bf-110 Zerstorer"],
    fact: "The Messerschmitt Bf 110, often known unofficially as the Me 110, is a twin-engined Zerstörer (destroyer, heavy fighter ), fighter-bomber ( Jagdbomber or Jabo ), and night fighter",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-377-2801-013%2C_Flugzeug_Messerschmitt_Me_110.jpg?width=1000", credit: "Jakobsen [Jacobsen] / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "big_bertha", name: "Big Bertha", category: "artillery", era: "WW1", difficulty: 3,
    aliases: ["M-Gerät", "Gamma-Gerat", "Dicke Berta", "Krupp 420-mm", "Krupp 420 mm", "Gamma-Geraet", "Dicke Bertha", "Krupp 420-mm howitzer"],
    fact: "The 42 centimeter kurze Marinekanone 14 L/12 (short naval cannon), or Minenwerfer -Gerät ( M-Gerät ), popularly known by the name of Big Bertha, was a German siege howitzer built b",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Musee-de-lArmee-IMG_0984.jpg?width=1000", credit: "Rama . / Wikimedia Commons (CC BY-SA 2.0 fr)" },
    ]
  },
  {
    id: "bird_dog", name: "Cessna O-1 Bird Dog", category: "plane", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The Cessna O-1 Bird Dog is a liaison and observation aircraft that first flew on December 14, 1949, and entered service in 1950 as the L-19 in the Korean War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cessna_O-1A_Bird_Dog_US_Army_in_flight.jpg?width=1000", credit: "U.S. Army / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army_L-19_FAC_1968.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "bishop", name: "Bishop", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["Bishop artillery"],
    fact: "The Bishop, formal designation Ordnance QF 25-pdr on Carrier Valentine 25-pdr Mk 1, was a British self-propelled gun vehicle based on the Valentine tank and armed with the QF 25-po",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IWM-E-17430-Bishop-SP-gun-19420925.jpg?width=1000", credit: "No 1 Army Film & Photographic Unit : James (Sgt) / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_Italy_1943_NA7710.jpg?width=1000", credit: "Gade (Lt), No 2 Army Film & Photographic Unit / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "black_prince", name: "Black Prince", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "Tank, Infantry, Black Prince (A43) is the name that was assigned to an experimental development of the Churchill tank with a larger, wider hull and a QF 17-pounder (76.2 mm) gun.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Black_Prince_tank_side_view.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "blenheim", name: "Bristol Blenheim", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Blenheim 1", "Bristol Bisley", "Blenheim bomber", "Bristol Type 142", "Bristol Blenheim I", "Bristol Blenheim V", "Bristol Blenheim IV", "Bristol Blenheim Mk.I"],
    fact: "The Bristol Blenheim is a British light bomber designed and built by the Bristol Aeroplane Company, which was used extensively in the first two years of the Second World War, with",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Blenheim_-_RIAT_2015_%2819998104414%29.jpg?width=1000", credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "bloodhound", name: "Bloodhound", category: "missile", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The Bristol Bloodhound is a British ramjet powered surface-to-air missile developed during the 1950s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bloodhound_SAM_at_the_RAF_Museum.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "bmd2", name: "BMD-2", category: "afv", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The BMD-2 is a Soviet airborne infantry fighting vehicle, introduced in 1985.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BMD-2_airborne_combat_vehicle.jpg?width=1000", credit: "Rockybrown / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/106th_Guards_Airborne_Division_%28394-1%29.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SlavicBrotherhood2020-09.jpg?width=1000", credit: "Ministry of Defence of the Russian Federation / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "bmp3", name: "BMP-3", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["2s38", "2S18", "BVP-3", "BMP-3F", "BREM-L", "Osteogenin", "BMP-3 Dragoon"],
    fact: "The BMP-3 is a Soviet and Russian infantry fighting vehicle, successor to the BMP-1 and BMP-2.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army2016demo-011.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "brdm2", name: "BRDM-2", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["9P148", "9P122", "BTR-40PB", "BTR-40P-2", "GAZ 41-08", "BRDM-2M-96", "GAZ 41-08.", "BRDM-2M-96i"],
    fact: "The BRDM-2 ( Russian: Боевая Разведывательная Дозорная Машина; Boyevaya Razvedyvatelnaya Dozornaya Mashina, literally \"Combat Reconnaissance/Patrol Vehicle\") is an amphibious armou",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BRDM-2_%281964%29_owned_by_James_Stewart_pic1.JPG?width=1000", credit: "AlfvanBeem / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SPW-40P2_%28Ch%29%2C_12._Internationales_Maritimes-Fahrzeugtreffen%2C_Ribnitz-Damgarten_%28P1060695%29.jpg?width=1000", credit: "Matti Blume / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Konotop_18.jpg?width=1000", credit: "ZomBear / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "brimstone", name: "Brimstone", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["SPEAR2", "SPEAR 2", "Sea Spear", "Brimstone ATGM", "MBDA Brimstone", "Brimstone missile", "Brimstone missiles"],
    fact: "Brimstone is a ground or air-launched ground attack missile developed by MBDA UK for the UK's Royal Air Force.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Missile_MBDA_Brimstone.jpg?width=1000", credit: "Duch.seb / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "btr60", name: "BTR-60", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["BTR-60s", "R-145BM", "BTR-60P", "BTR-60PB", "BTR-60PA", "BTR-60PZ", "BTR-60PBK", "BTR-60PUM"],
    fact: "The BTR-60 is the first vehicle in a series of Soviet eight-wheeled armoured personnel carriers (APCs).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BTR-60PB_NVA.JPG?width=1000", credit: "Billyhill / Wikimedia Commons (CC BY 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ZiL-153_in_Kubinka.JPG?width=1000", credit: "Rave ( talk ) / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Military_Vehicles_Moscow_1964.jpg?width=1000", credit: "Thomas Taylor Hammond (1920-1993) / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "buffalo", name: "Brewster F2A Buffalo", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["B239", "F2A Buffalo", "Brewster F2A", "F2A Brewster", "Brewster B239", "Brewster B-239", "Brewster B-339", "Brewster B-439"],
    fact: "The Brewster F2A Buffalo is an American fighter aircraft which saw service early in World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Brewster_F2A-3_Buffalo_in_flight_near_NAS_Miami%2C_Florida_%28USA%29%2C_on_2_August_1942_%28NH_97540%29.jpg?width=1000", credit: "Unknown / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "buk", name: "Buk missile system", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["9K37", "Sa11", "Sa17", "9М38", "9M38", "Sa-11", "SA-17", "9M317"],
    fact: "The Buk ( Russian: Бук, lit. ' beech ', / b ʊ k / BOOK ) is a family of self-propelled, medium-range surface-to-air missile systems developed by the Soviet Union and its successor",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Buk-M1-2_air_defence_system_in_2010.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "c119", name: "Fairchild C-119 Flying Boxcar", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["R4Q", "C119", "C-119", "Fairchild R4Q", "Flying Boxcar", "Fairchild C-119", "Fairchild C-119G", "R4Q Flying Boxcar"],
    fact: "The Fairchild C-119 Flying Boxcar (Navy and Marine Corps designation R4Q ) is an American military transport aircraft developed from the World War II -era Fairchild C-82 Packet, de",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fairchild_C-119B_of_the_314th_Troop_Carrier_Group_in_flight%2C_1952_%28021001-O-9999G-016%29.jpg?width=1000", credit: "U.S. Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/R4Q-1_USMC_NAN8-50.jpg?width=1000", credit: "USN / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "c141", name: "Lockheed C-141 Starlifter", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["C141", "C-141", "CC-141", "C-141C", "C-141B", "Starlifter", "Lockheed L-300", "C-141 StarLifter"],
    fact: "The Lockheed C-141 Starlifter is a retired four-engine military strategic airlifter that served with the Military Air Transport Service (MATS), its successor organization the Milit",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/C-141_Starlifter_58-4561.jpg?width=1000", credit: "U.S. Air Force / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "c46", name: "Curtiss C-46 Commando", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["R5C", "C-46", "Curtiss C-46", "R5C Commando", "C-55 Commando", "C-46 Commando", "Curtiss C-46F", "Curtiss C-46A"],
    fact: "The Curtiss C-46 Commando is a low-wing, twin-engine aircraft derived from the Curtiss CW-20 pressurized high-altitude airliner design.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/C-46_Commando.jpg?width=1000", credit: "usaf / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/C-46F_Quicktrans_Busanda_%286287464059%29.jpg?width=1000", credit: "Bill Larkins / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "centauro", name: "Centauro", category: "afv", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The Centauro is a family of Italian military vehicles originating from a wheeled tank destroyer for light to medium territorial defense and tactical reconnaissance.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Centauro01.JPEG?width=1000", credit: "PH2 Jeffery Russell / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "cf105", name: "Avro Canada CF-105 Arrow", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Cf105", "CF-105", "Avro Aero", "Avro arrow", "Cf-105 Arrow", "Avro CF-105 Arrow", "Avro Canada Arrow", "Avro Canada CF-105"],
    fact: "The Avro Canada CF-105 Arrow was an interceptor aircraft designed and built by Avro Canada.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Unveiling_of_CF-105_D%C3%A9voilement_de_l%E2%80%99a%C3%A9ronef_CF-105_%2849553834541%29.jpg?width=1000", credit: "Robert Lansdale. Federal News Photos. Library and Archives Canada / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "challenger3", name: "Challenger 3", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Challenger III"],
    fact: "Challenger 3 ( CR3 ) is a British fourth-generation main battle tank in development for the British Army.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger_3_ATD.jpg?width=1000", credit: "Sergeant Ben Beale / Wikimedia Commons (OGL 3)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DES_2024_100_0104.jpg?width=1000", credit: "Ministry of Defence / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "char2c", name: "Char 2C", category: "tank", era: "WW1", difficulty: 3,
    aliases: ["FCM 2C"],
    fact: "The Char 2C, also known as the FCM 2C, was a French post WWI heavy tank landship, later considered a super-heavy tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Berry_in_1928_%28moar_contrast_%2B_cropped%29.jpg?width=1000", credit: "Toyota Corolla E140 , After Agence Rol Description French English: photo agency Français : Agence de photograp / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "chi_nu", name: "Type 3 Chi-Nu medium tank", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "Type 3 medium tank Chi-Nu ( 三式中戦車 チヌ, San-shiki chū-sensha Chi-nu; \"Imperial Year 2603 Medium tank Model 10\") was a medium tank of the Imperial Japanese Army in World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Type_3_Chi-Nu_tank_1.jpg?width=1000", credit: "User:Megapixie / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "chi_to", name: "Type 4 Chi-To medium tank", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Type 4 medium tank Chi-To ( 四式中戦車 チト, Yonshiki chūsensha Chi-To ) (\"Imperial Year 2604 Medium Tank Model 7\") was one of several medium tanks developed by the Imperial Japanese",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chi-To.JPG?width=1000", credit: "Unknown / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "comet_tank", name: "Comet", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["A-34 Comet", "Comet tank", "Comet Tanks", "Cruiser Tank Comet"],
    fact: "The Comet tank or Tank, Cruiser, Comet I (A34) was a British cruiser tank that first saw use near the end of the Second World War, during the Western Allied invasion of Germany.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Comet_tank_tankfest_2023.JPG?width=1000", credit: "Geni / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "cr42", name: "Fiat CR.42 Falco", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Fiat CR.42 Falco (Falcon, plural: Falchi ) is a single-seat sesquiplane fighter developed and produced by Italian aircraft manufacturer Fiat Aviazione.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fiat_CR.42_-_Aegean_Islands.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CR-42_82a_Squadriglia.jpg?width=1000", credit: "Martin Čížek / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "cv90", name: "Combat Vehicle 90", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["CV90", "CV 90", "CV-90", "CV9030", "CV9040", "Strf 90", "CV90120", "CV90105"],
    fact: "The Combat Vehicle 90 ( CV90 ) ( Swedish: stridsfordon 90, strf 90 or Stridsfordon 90) is a family of Swedish tracked armoured combat vehicles designed by the Swedish Defence Mater",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Stridsfordon_90_Revinge_2012-2.jpg?width=1000", credit: "Jorchr / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CV_90_Mk_IV_SIAF-2022.jpg?width=1000", credit: "Boevaya mashina / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CV90120%2C_MSPO_2007%2C_photo_2.JPG?width=1000", credit: "Łukasz Golowanow & Maciek Hypś, Konflikty.pl / Wikimedia Commons (Attribution)" },
    ]
  },
  {
    id: "d3a", name: "Aichi D3A", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["D3A", "D3A1", "D3A Val", "Val bomber", "Aichi D3A1", "Aichi D3A-1", "Aichi AM-17", "Aichi D3A2-K"],
    fact: "The Aichi D3A (Navy full designation \" Type 99 Carrier Bomber \"; Allied reporting name \"Val\" ) is a carrier-borne dive bomber designed and produced by Aichi Kokuki KK.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/D3A1_Akagi.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "d4y", name: "Yokosuka D4Y Suisei", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Yokosuka D4Y Suisei ( 彗星, comet ) is a twin-seat carrier-based dive bomber developed by the Japanese defence manufacturer Yokosuka Naval Air Technical Arsenal.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yokosuka_D4Y3_in_the_field.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "dc8", name: "Douglas DC-8", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["DC8", "DC-8", "DC 8", "EC-24A", "DC-8-73", "DC-8-62", "DC-8-70", "DC-8-60"],
    fact: "The Douglas DC-8 (sometimes McDonnell Douglas DC-8 ) is an early long-range narrow-body jetliner designed and produced by the American Douglas Aircraft Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DC-8_Airborne_Laboratory_in_flight_over_snow-capped_Sierra_Nevada_mountain_range.jpg?width=1000", credit: "NASA Photo by: Jim Ross / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/USN_DC-8_C-24_EC-24_%288435059326%29.jpg?width=1000", credit: "clipperarctic / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "defiant", name: "Boulton Paul Defiant", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["BP Defiant", "Defiant Mk.I", "Defiant Mk.II", "Bolton-Paul Defiant", "Boulton Paul P.82 Defiant", "Boulton Paul Defiant Mk.II"],
    fact: "The Boulton Paul Defiant is a British interceptor aircraft that served with the Royal Air Force (RAF) during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mk1_Defiant.jpg?width=1000", credit: "RAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "devastator", name: "Douglas TBD Devastator", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["TBD-1", "Douglas TBD", "TBD Devastator", "Douglas Devastator", "Douglas TBD-1 Devastator"],
    fact: "The Douglas TBD Devastator was an American torpedo bomber of the United States Navy.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Douglas_TBD-1_VT-6_in_flight_c1938.jpeg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "dh2", name: "Airco DH.2", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["D.H.2", "De Havilland DH.2"],
    fact: "The Airco DH.2 was a single-seat pusher biplane fighter aircraft which operated during the First World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airco_D.H.2_ExCC.jpg?width=1000", credit: "British official photographer / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "do217", name: "Dornier Do 217", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Do 217", "Do-217", "Dornier 217", "Dornier Do 217R", "Dornier Do 217J"],
    fact: "The Dornier Do 217 was a bomber used by the German Luftwaffe during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Do_217E-2_NAN15Jul43.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "draken", name: "Saab 35 Draken", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["J35A", "Sk 35C", "Saab35", "Saab 35", "Saab J35", "Saab 35A", "Saab 35B", "Saab 35C"],
    fact: "The Saab 35 Draken ( IPA: [ ²drɑːkɛn ]; The Kite, ambiguous with The Dragon ) is a Swedish fighter-interceptor developed and manufactured by Svenska Aeroplan Aktiebolaget ( SAAB )",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/J_35F_1972_%28cropped%2C_removal_of_damage_and_dirt_using_clone_tool%29.jpg?width=1000", credit: "Blockhaj / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A-sample-of-the-new-Swedish-fighter-plane-Dragon-391772991791.jpg?width=1000", credit: "Unknown photographer / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FVMF.002888_%28cropped%29.jpg?width=1000", credit: "Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "dukw", name: "DUKW", category: "afv", era: "WW2", difficulty: 2,
    aliases: ["Duck boat", "Duck boats", "DUKW amphibious truck", "Duplex Universal Karrier, Wheeled"],
    fact: "The DUKW (GMC type nomenclature, colloquially known as Duck ) is a six-wheel-drive amphibious modification of the GMC CCKW \"deuce-and-a-half\" 2½-ton trucks used by the US military",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/DUKW.image2.army.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "e2", name: "Grumman E-2 Hawkeye", category: "plane", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The Northrop Grumman E-2 Hawkeye is an American all-weather, carrier-capable, tactical airborne early warning (AEW) aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/E-2D_Advanced_Hawkeye_aircraft_conduct_a_test_flight.jpg?width=1000", credit: "US Navy / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Theodore_Roosevelt_%28CVN_71%29_conducts_flight_operations._%2849122248696%29.jpg?width=1000", credit: "Official U.S. Navy Page from United States of America MC2 Pyoung Yi/U.S. Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "e3", name: "Boeing E-3 Sentry", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["E-3A", "E-3C", "E-3B", "E-3D", "E-3F", "E-3G", "Awacs", "E-3 AWACS"],
    fact: "The Boeing E-3 Sentry is an American airborne early warning and control (AEW&C) aircraft developed by Boeing.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/E-3_Sentry_Airborne_Warning_and_Control_System_%28AWACS%29_conducts_a_mission.jpg?width=1000", credit: "Senior Airman Roslyn Ward / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "e7", name: "Boeing E-7 Wedgetail", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["E-7A", "E-7A Wedgetail", "Boeing wedgtail", "Wedgetail AWACS", "Boeing Wedgetail", "Boeing 737 AEW&C", "Project Wedgetail", "Boeing Peace Eagle"],
    fact: "The Boeing E-7 Wedgetail, also marketed as the Boeing 737 AEW&C, is a twin-engine airborne early warning and control aircraft originally designed for the Royal Australian Air Force (RAAF).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/A30-001_in_flight_over_the_United_States_in_April_2025_%28cropped%29.jpg?width=1000", credit: "US Air Force photo by Richard Gonzales / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "ea6b", name: "Grumman EA-6B Prowler", category: "plane", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The Northrop Grumman (formerly Grumman ) EA-6B Prowler is a twin-engined, four-seat, mid-wing electronic-warfare aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Prowler_Final_Flight_division_flight_%28cropped%29.jpg?width=1000", credit: "Cpl. Neysa Huertas Quinones / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EA-6A_and_EA-6B_of_VMAQ-2_in_flight_c1977.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EA-6B_AIP.jpg?width=1000", credit: "US Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "ebr", name: "Panhard EBR", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["EBR ETT"],
    fact: "The Panhard EBR ( French: Engin Blindé de Reconnaissance, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panhard_EBR_150808_01.jpg?width=1000", credit: "Vassil / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "eindecker", name: "Fokker Eindecker fighters", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Eindecker", "Fokker Eindekker", "Fokker Eindecker"],
    fact: "The Fokker Eindecker fighters were a series of German World War I monoplane single-seat fighter aircraft designed by Dutch engineer Anthony Fokker.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fokker_EIII_210-16.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "f101", name: "McDonnell F-101 Voodoo", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-101", "RF-101", "RF-101C", "F-101 VooDoo", "RF-101 Voodoo", "F-101B Voodoo", "RF-101C Voodo", "F-101A Voodoo"],
    fact: "The McDonnell F-101 Voodoo is a supersonic jet fighter designed and produced by the American McDonnell Aircraft Corporation.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-101B_New_York_ANG_in_flight_1978.jpeg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f102", name: "Convair F-102 Delta Dagger", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F102", "F-102", "F-102A", "PQM-102", "Delta Dagger", "Convair F-102", "Convair Model 8", "Convair PQM-102"],
    fact: "The Convair F-102 Delta Dagger is an interceptor aircraft designed and produced by the American aircraft manufacturer Convair.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Convair_YF-102_FC-782.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f106", name: "Convair F-106 Delta Dart", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-106", "F-106A", "Delta Dart", "Convair F-106", "F106 Delta Dart", "F-106 Delta Dart", "F-106 Delta Darts", "F-106A Delta Dart"],
    fact: "The Convair F-106 Delta Dart is an all-weather interceptor aircraft designed and produced by the American aircraft manufacturer Convair, a division of General Dynamics.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-106A_Chase_Dart.JPEG?width=1000", credit: "Staff Sgt. John K. McDowell / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mercury_Seven_astronauts_with_aircraft.jpg?width=1000", credit: "NASA / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f15e", name: "McDonnell Douglas F-15E Strike Eagle", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["F15E", "F-15E", "F-15I", "F-15T", "F-15K", "F-15S", "F-15SG", "F-15QA"],
    fact: "The McDonnell Douglas (now Boeing ) F-15E Strike Eagle is an American all-weather multirole strike fighter derived from the McDonnell Douglas F-15 Eagle.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-15E_takes_on_fuel_from_KC-10.jpg?width=1000", credit: "Staff Sgt. Sean Carnes / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f2_jap", name: "Mitsubishi F-2", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["FS-X", "F-2A", "JF-2A", "Viper Zero", "Mitsubishi F2A", "Mitsubishi F2B", "Mitsubishi F-2A", "Mitsubishi F-2B"],
    fact: "The Mitsubishi F-2 is a multirole fighter that was derived from the General Dynamics F-16 Fighting Falcon, and manufactured by Mitsubishi Heavy Industries and Lockheed Martin for t",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi_F-2.jpg?width=1000", credit: "航空自衛隊 / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "f84", name: "Republic F-84 Thunderjet", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["F-84", "F-84G", "Thunderjet", "Republic F-84", "Republic XP-84", "P-84 Thunderjet", "F-84 Thunderjet", "F-84E Thuderjet"],
    fact: "The Republic F-84 Thunderjet is an American turbojet fighter-bomber aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-84E_of_9th_Fighter-Bomber_Squadron_in_Korea.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-84g-51-1231-48fbg-chm-0853.jpg?width=1000", credit: "Original uploader was Bwmoll3 at en.wikipedia / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/14fw-f-84-1948.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "f89", name: "Northrop F-89 Scorpion", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["P-89", "XF-89", "F-89J", "XP-89", "Northrop F-89", "F-89 Scorpion", "Northrop N-24", "Northrop N-35"],
    fact: "The Northrop F-89 Scorpion is an all-weather, twin-engined interceptor aircraft designed and produced by the American aircraft manufacturer Northrop Corporation.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/59fis-f-89-goosebay.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-89J_Hampton_Air_Power_Park_VA_2007.jpg?width=1000", credit: "William Grimes at English Wikipedia . Later version(s) were uploaded by Ian Dunster at en.wikipedia .9 January / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "ferret", name: "Ferret armoured car", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Daimler Ferret", "Ferret scout car", "Ferret armored car", "Ferret Army Vehicle", "Ferret armoured scout car"],
    fact: "The Ferret armoured car, also commonly called the Ferret scout car, is a British armoured fighting vehicle designed and built for reconnaissance purposes.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aldham_Old_Time_Rally_2015_-_18081932993.jpg?width=1000", credit: "kitmasterbloke / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "fh70", name: "FH70", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["FH70 howitzer"],
    fact: "The FH70 (field howitzer for the 1970s) is a towed 155 mm howitzer used by several nations.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FH_70_155mm_gun_%286065127314%29.jpg?width=1000", credit: "Hugh Llewelyn Description British photographer / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "g55", name: "Fiat G.55 Centauro", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Fiat G.55 Centauro ( Italian: \" Centaur \") is a single-engine single-seat monoplane fighter aircraft designed and produced by the Italian aircraft manufacturer Fiat Aviazione.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FIAT_G-55_Centauro_%281%29.jpg?width=1000", credit: "Lorenzo Tomasi / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "g91", name: "Fiat G.91", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["G91", "G.91", "Fiat G91Y", "Alenia G.91", "Fiat G.91PAN", "Aeritalia G91R", "Aeritalia G91Y", "Aeritalia G91T"],
    fact: "The Fiat G.91 is a jet fighter aircraft designed and built by the Italian aircraft manufacturer Fiat Aviazione, which later merged into Aeritalia.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Luftwaffe_Museum_Fiat_G91_2007.jpg?width=1000", credit: "Pajx / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/G-91_at_Malignani.JPG?width=1000", credit: "Endeavour88 at English Wikipedia / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "gepard", name: "Flakpanzer Gepard", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["PRTL", "Gepard Flakpanzer", "Gepard anti-aircraft system", "Flugabwehrkanonenpanzer Gepard"],
    fact: "The Flugabwehrkanonenpanzer Gepard (\"anti-aircraft-gun tank 'Cheetah ' \", also known as Flakpanzer Gepard ) is an all-weather-capable West German self-propelled anti-aircraft gun (",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/010_FZD_030.jpg?width=1000", credit: "Maverikkk / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "gladiator", name: "Gloster Gladiator", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["J8A", "Gloster J8A", "Sea Gladiator", "Gloster Galdiator", "Gloster Gladiators", "Gloster Gladiator I", "Gloster Gladiator II", "Gloucester Gladiator"],
    fact: "The Gloster Gladiator is a biplane fighter aircraft designed and produced by the British aviation firm Gloster Aircraft Company, Ltd..",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gloster_Gladiator_7985K.jpg?width=1000", credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "global_hawk", name: "Northrop Grumman RQ-4 Global Hawk", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["RQ4", "RQ-4", "EQ-4B", "RQ-4A", "RQ-4B", "FORTE10", "FORTE11", "Tier II+"],
    fact: "The Northrop Grumman RQ-4 Global Hawk is a high-altitude, remotely-piloted surveillance aircraft introduced in 2001.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Global_Hawk_1.jpg?width=1000", credit: "U.S. Air Force photo by Bobbi Zapka / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "gnat", name: "Folland Gnat", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["HS Gnat", "Gnat T.1", "Sabre slayer", "Folland Gnats", "Folland FO-141", "Folland Gnat T.1", "Folland Gnat F.1", "Folland Gnat Mk.1"],
    fact: "The Folland Gnat is a British compact, swept-wing, subsonic, fighter aircraft that was developed and produced by Folland Aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gnat_%28cropped%29.jpg?width=1000", credit: "Tim Felce / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "gotha", name: "Gotha G.V", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Gotha G Vb", "Gother bomber", "Gotha bombers"],
    fact: "The Gotha G.V was a heavy bomber used by the Luftstreitkräfte (Imperial German Air Service) during World War I.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/GothaG5.jpg?width=1000", credit: "Unknown / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "growler", name: "Boeing EA-18G Growler", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["EA-18", "EA-18G", "Ef-18G", "F-18 Growler", "F-18G Growler", "EA-18 Growler", "Boeing EA-18G", "EA-18G Growler"],
    fact: "The Boeing EA-18G Growler is an American carrier-based electronic warfare aircraft, a specialized version of the two-seat Boeing F/A-18F Super Hornet.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/U.S._Navy_EA-18G_Growler_breaks_away_from_a_U.S._Air_Force_KC-135_%28altered%29.jpg?width=1000", credit: "Senior Airman John Linzmeier / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "gvozdika", name: "2S1 Gvozdika", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["2S1", "2S34", "M1974", "M1971", "M-1974", "SAU-122", "Gvozdika", "2S1 122mm"],
    fact: "The 2S1 Gvozdika ( Russian: 2С1 «Гвоздика», \" Carnation \") is a Soviet self-propelled howitzer introduced in 1972 and is in service in Russia and other countries as of 2026.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/6742_-_Moscow_-_Poklonnaya_Hill_-_Tank.JPG?width=1000", credit: "Andrew Bossi / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A3_%D0%9A%D0%B8%D1%94%D0%B2%D1%96_%D0%BD%D0%B0_%D0%A5%D1%80%D0%B5%D1%89%D0%B0%D1%82%D0%B8%D0%BA%D1%83_%D0%BF%D1%80%D0%BE%D0%B9%D1%88%D0%BE%D0%B2_%D0%B2%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D0%BF%D0%B0%D1%80%D0%B0%D0%B4_%D0%B7_%D0%BD%D0%B0%D0%B3%D0%BE%D0%B4%D0%B8_27-%D1%97_%D1%80%D1%96%D1%87%D0%BD%D0%B8%D1%86%D1%96_%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%96_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8_%2829384512417%29.jpg?width=1000", credit: "Ministry of Defense of Ukraine / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M1974-sp-howitzer-19910304.jpg?width=1000", credit: "SSGT Robert Reeve / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "h8k", name: "Kawanishi H8K", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["H8K", "Kawanishi G9K", "Kawanishi H8K2-L", "H8K Emily Flying Boat", "Kawanishi Navy Type 2 Flying Boat", "Kawanishi Navy Type 2 Flying-Boat", "Kawanishi Navy Transport Flying Boat Seiku", "Kawanishi Navy Transport Flying-Boat Seiku"],
    fact: "The Kawanishi H8K was a large four- engined flying boat designed and produced by the Japanese aviation manufacturer Kawanishi.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kawanishi_H8K2_%28Emily%29_flying_boat.jpg?width=1000", credit: "Max Smith / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "hampden", name: "Handley Page Hampden", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["HP.52", "Hp hampden", "Hampden bomber", "Flying Suitcase", "Handley Page Hereford", "Handley-Page Hereford", "Handley Page HP.52 Hampden", "Handley Page H.P.52 Hampden"],
    fact: "The Handley Page HP.52 Hampden was a British twin-engine medium bomber that was operated by the Royal Air Force (RAF).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Handley_Page_Hampden_in_the_air.jpg?width=1000", credit: "Royal Air Force official photographer; The original uploader was Bzuk at English Wikipedia ., 28 May 2007 (ori / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "he177", name: "Heinkel He 177 Greif", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Heinkel He 177 Greif ( Griffin ) was a long-range heavy bomber flown by the Luftwaffe during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Heinkel_He_177A-02_in_flight_1942.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "hh60", name: "Sikorsky HH-60 Pave Hawk", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["HH60", "HH-60", "MH-60G", "HH-60G", "HH-60W", "Pave Hawk", "HH-60 Pavehawk", "HH-60G Pavehawk"],
    fact: "The Sikorsky MH-60/HH-60 Pave Hawk and HH-60W Jolly Green II are a four-blade, twin-engine, medium-lift utility military helicopter manufactured by Sikorsky Aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HH-60G_Pave_Hawk_helicopter_operated_by_the_56th_Rescue_Squadron.jpg?width=1000", credit: "Airman Thomas S. Keisler IV / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "hotchkiss_h35", name: "Hotchkiss H35", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Char H35", "Hotchkiss H38", "Hotchkiss H39", "PzKpfw 38H735", "Hotchkiss H-39", "Hotchkiss tanks"],
    fact: "The Hotchkiss H35 or Char léger modèle 1935 H was a French cavalry tank developed prior to World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hotchkiss-H-39-latrun-2.jpg?width=1000", credit: "No machine-readable author provided. Bukvoed assumed (based on copyright claims). / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/H_1935.jpg?width=1000", credit: "US War Department / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_Frankreich_1940_%28RaBoe%29.jpg?width=1000", credit: "Der Großvater von Ra Boe / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "hs129", name: "Henschel Hs 129", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Hs 129", "Hs-129", "Henschel Hs 129B"],
    fact: "The Henschel Hs 129 was a ground-attack aircraft designed and produced by the German aircraft manufacturer Henschel Flugzeugwerke AG.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Henschel_Hs_129B.jpg?width=1000", credit: "USAAF; original uploader to en.wikipedia was en:user:Maury Markowitz / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "hudson", name: "Lockheed Hudson", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["PBO Hudson", "A-29 Hudson", "A-28 Hudson", "C-63 Hudson", "AT-18 Hudson", "Lockheed 414", "Lockheed PBO", "Lockheed A-29"],
    fact: "The Lockheed Hudson is a light bomber and coastal reconnaissance aircraft built by the American Lockheed Aircraft Corporation.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_A-29_Hudson_USAAF_in_flight_c1941.jpg?width=1000", credit: "USAAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PBO-1_VP-82_NAS_Argentia.jpg?width=1000", credit: "USN / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAAF_13_Sqn_%28AWM_AC0069%29.jpg?width=1000", credit: "John Thomas Harrison / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "i153", name: "Polikarpov I-153", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["I-153", "Polikarpov I-190", "Polikarpov I-195"],
    fact: "The Polikarpov I-153 Chaika ( Russian: Чайка, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Poliakarpov_I-153_Musee_du_Bourget_P1010993.JPG?width=1000", credit: "Pline / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "i16", name: "Polikarpov I-16", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["TsKB-12", "TsKB-18", "TsKB-29", "I-16 Rata", "Polikarpov SPB", "Polikarpov UTI-2", "Polikarpov UTI-3", "Polikarpov UTI-4"],
    fact: "The Polikarpov I-16 ( Russian: Поликарпов И-16 ) is a Soviet single-engine single-seat fighter aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Polikarpov_I-16_republicano.jpg?width=1000", credit: "Angelmersaenz / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Soviet_volunteer.jpg?width=1000", credit: "The original uploader was DCTT at English Wikipedia . / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Khalkhin_Gol_Soviet_pilots_august_1939.jpg?width=1000", credit: "soviet reporter / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "iar80", name: "IAR 80", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["IAR 81", "IAR-81", "I.A.R. 81"],
    fact: "The IAR 80 was a Romanian World War II low-wing monoplane, all-metal monocoque fighter and ground-attack aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IAR-80.jpg?width=1000", credit: "Sorin Tulea / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "igla", name: "9K38 Igla", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["9K38", "SA24", "Sa18", "Sa16", "SA-16", "SA-24", "SA 24", "SA 16"],
    fact: "The 9K38 Igla ( Russian: Игла́, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IGLA-S_MANPADS_at_IDELF-2008.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "igo", name: "Type 89 I-Go medium tank", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Type 89 medium tank I-Go ( 八九式中戦車 イ号, Hachikyū-shiki chū-sensha I-gō ) is a medium tank used by the Imperial Japanese Army from 1932 to 1942 in combat operations of the Second",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_89_Yi-Go_at_Tsuchira.jpg?width=1000", credit: "User:Megapixie / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IJA_Experimental_tank_No1_01.jpg?width=1000", credit: "日本語: 日本陸軍 English: Imperial Japanese Army / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Typ_89_otsu.jpg?width=1000", credit: "Imperial Japanese Army / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "il18", name: "Ilyushin Il-18", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Il-18D", "Il-18V", "Il-22M", "Ilyushin Il-20", "Ilyushin Il-24", "Ilyushin Il-18V", "Ilyushin Il-18A", "Ilyushin Il-18B"],
    fact: "The Ilyushin Il-18 ( Russian: Илью́шин Ил-18; NATO reporting name: Coot ) is a large turboprop airliner that first flew in 1957 and became one of the best known Soviet aircraft of its era.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rossiya_Ilyushin_Il-18.jpg?width=1000", credit: "Sergey Riabsev / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IL-18-700px.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "il28", name: "Ilyushin Il-28", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Hong H-5", "Harbin H-5", "Harbin B-5", "H-5 bomber", "H-5 Beagle", "Avia B-228", "Il-28 Beagle", "IIyushin II-28"],
    fact: "The Ilyushin Il-28 ( Russian: Илью́шин Ил-28; NATO reporting name: Beagle ) is a medium-range jet bomber, originally manufactured for the Soviet Air Forces, in service since 1950.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/I%C5%82_28_%282%29.jpg?width=1000", credit: "Wisnia6522 / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "il4", name: "Ilyushin Il-4", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Il-4 Bob"],
    fact: "The Ilyushin Il-4 (DB-3F) ( Russian: Ильюшин Ил-4 (ДБ-3Ф); NATO reporting name: Bob ) is a Soviet twin-engined long-range bomber and torpedo bomber, widely used by the Soviet Air F",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Il-4_front_view_Moscow.jpg?width=1000", credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iljushin_DB-3F_%28SA-kuva_148731%29.jpg?width=1000", credit: "Sot.virk. Niilo Helander / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "il62", name: "Ilyushin Il-62", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["IL62", "Il-62", "Il-62M", "Ilyushin 62", "Ilyushin 62M", "Lyushin IL-62M", "ČSA Flight 542", "Ilyushin Il-62M"],
    fact: "The Ilyushin Il-62 ( Russian: Илью́шин Ил-62; NATO reporting name: Classic ) is a Soviet long-range narrow-body jetliner conceived in 1960 by Ilyushin.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Air-to-air_with_a_Russian_Air_Force_Ilyushin_Il-62M_%28retouched%29.jpg?width=1000", credit: "Sergey Lysenko / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "iris_t", name: "IRIS-T", category: "missile", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The IRIS-T (infrared imaging system tail/thrust vector-controlled) is a short range infrared homing air-to-air missile.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IRIS-T_expo_front.JPG?width=1000", credit: "HaraF / Wikimedia Commons (GFDL)" },
    ]
  },
  {
    id: "isu122", name: "ISU-122", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The ISU-122 (acronym of Istrebitelnaja - or Iosif Stalin -based - Samokhodnaya Ustanovka 122 ) was a Soviet assault gun used during World War II, mostly in the anti-tank role.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ISU-122_skos_RB.jpg?width=1000", credit: "Unknown / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dzia%C5%82o_samobie%C5%BCne_w_Malborku.jpg?width=1000", credit: "PiotrMig / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "j11", name: "Shenyang J-11", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["J-11D", "Jian-11", "J-11 fighters", "Shenyang J-11B", "Shenyang J-11D", "J-11 Flanker-B+"],
    fact: "The Shenyang J-11 ( Chinese: 歼-11; NATO reporting name: Flanker-B+ / Flanker-L ), also known as Yinglong ( simplified Chinese: 应龙; traditional Chinese: 應龍; pinyin: yìnglóng; lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/J-11BChel.jpg?width=1000", credit: "Mil.ru / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "j2m", name: "Mitsubishi J2M Raiden", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Mitsubishi J2M Raiden (雷電, \"Lightning Bolt\") is a single-engined, land-based fighter aircraft used by the Imperial Japanese Navy Air Service in World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi_J2M.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "jagdpanzer4", name: "Jagdpanzer IV", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["JagdPz IV", "Gerät 820", "Jagpazer 4", "Sd.Kfz. 162", "Jagpanzer IV", "Jagdpazner IV", "Jagpanzer four", "Jagdpazer four"],
    fact: "The Jagdpanzer IV / Sd.Kfz. 162, was a German tank destroyer based on the Panzer IV chassis and built in three main variants.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzermuseum_Munster_2010_0449.JPG?width=1000", credit: "Banznerfahrer / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SdKfz162.jpg?width=1000", credit: "baku13 / Wikimedia Commons (CC BY-SA 2.1 jp)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/0623_-_Moskau_2015_-_Panzermuseum_Kubinka_%2826374499726%29.jpg?width=1000", credit: "Uwe Brodrecht / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "javelin_jet", name: "Gloster Javelin", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Gloster G.A.5", "Javelin fighter", "Javelin FAW Mk.1", "Javelin FAW Mk.8", "Gloster Javelin FAW1", "Gloster Javelin FAW.1", "Gloster Javelin FAW Mk.7", "Gloster Javelin FAW Mk.8"],
    fact: "The Gloster Javelin is a twin-engined all-weather interceptor aircraft designed and produced by the Gloster Aircraft Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gloster_Javelin_46_Sqn_line_up%2C_XA628_nearest._%2851458866291%29.jpg?width=1000", credit: "tormentor4555 / Wikimedia Commons (PDM-owner)" },
    ]
  },
  {
    id: "jdam", name: "Joint Direct Attack Munition", category: "missile", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The Joint Direct Attack Munition ( JDAM ) is a guidance kit that converts unguided bombs, or \"dumb bombs\", into all-weather precision-guided munitions (PGMs).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/GBU-31_xxl.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "jf17", name: "CAC/PAC JF-17 Thunder", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["FC-1", "JF-17", "Jf 17", "CAC FC-1", "Chengdu FC-1", "JF-17 Thunder"],
    fact: "The CAC/PAC JF-17 Thunder, also known as FC-1 Xiaolong, is a Sino-Pakistani single-engine lightweight supersonic multirole combat aircraft developed jointly by the Pakistan Aeronau",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pakistan_Air_Force_Chengdu_JF-17_Gu.jpg?width=1000", credit: "Shimin Gu / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "jn4", name: "Curtiss JN Jenny", category: "plane", era: "WW1", difficulty: 3,
    aliases: [],
    fact: "The Curtiss JN \"Jenny\" is a series of biplanes built by the Glenn Curtiss Aeroplane Company of Hammondsport, New York, later the Curtiss Aeroplane and Motor Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flying_jenny_cropped.jpg?width=1000", credit: "George Johnson, Aviation Section, US Army Signal Corps / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "ju88", name: "Junkers Ju 88", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Ju88", "Ju 88", "Ju-88", "Ju.88", "Ju 88P", "Junkers 88", "Junkers JU88C", "Junkers JU88G"],
    fact: "The Junkers Ju 88 is a twin-engined multirole combat aircraft designed and produced by the German aircraft manufacturer Junkers Aircraft and Motor Works.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-363-2258-11%2C_Flugzeug_Junkers_Ju_88_%28cropped%29.jpg?width=1000", credit: "Rompel / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "k1_tank", name: "K1 tank", category: "tank", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The K1, sometimes referred to as the 88 Tank (88 전차), is a South Korean main battle tank designed by Chrysler Defense (later General Dynamics Land Systems ) and Hyundai Precision I",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2013.4.1_%EC%9C%A1%EA%B5%B011%EC%82%AC%EB%8B%A8_%EC%95%BC%EC%99%B8%EA%B8%B0%EB%8F%99%EC%A0%84%EC%88%A0%ED%9B%88%EB%A0%A8_Field_Training_Exercise%2C_Republic_of_Korea_Army_11th_Division_%288617306085%29.jpg?width=1000", credit: "대한민국 국군 Republic of Korea Armed Forces / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "ka25", name: "Kamov Ka-25", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Ka-25", "Ka-25 Hormone", "Kamov Ka-25PL", "Kamov Ka-25 Hormone"],
    fact: "The Kamov Ka-25 ( NATO reporting name \" Hormone \") is a naval helicopter, developed for the Soviet Navy in the USSR from 1958.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Soviet_Ka-25_Hormone-C_%28cropped%29.jpg?width=1000", credit: "US Navy / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "ka26", name: "Kamov Ka-26", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Ka-26", "Ka-126", "Ka-128", "IAR Ka-26", "Kamov Ka-26SS"],
    fact: "The Kamov Ka-26 ( NATO reporting name Hoodlum ) is a Soviet light utility helicopter with co-axial rotors.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kamov_Ka-26%2C_RA-24308_%28remix%29.jpg?width=1000", credit: "English: Aleksandr Markin Русский: Александр Маркин / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "kc10", name: "McDonnell Douglas KC-10 Extender", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["KC10", "KC-10", "KDC-10", "KC-10A", "C-10 Extender", "KC-10 Extender", "KDC-10 Extender", "KC-10A Extender"],
    fact: "The McDonnell Douglas KC-10 Extender is an American tanker and cargo aircraft that was operated by the United States Air Force (USAF) from 1981 to 2024.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/KC-10_Extender_%282151957820%29.jpg?width=1000", credit: "U.S. Air Force photo by Staff Sgt. Jerry Morrison / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/240926-F-OY799-1632.jpg?width=1000", credit: "Kenneth Abbate / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "kc46", name: "Boeing KC-46 Pegasus", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["KC-46", "KC-46A", "Boeing KC-46", "Boeing KC-46A", "KC-46 Pegasus", "Frankentanker", "Boeing 767-2C", "Boeing Pegasus"],
    fact: "The Boeing KC-46 Pegasus is an American military aerial refueling and strategic military transport aircraft developed by Boeing from its 767 jet airliner.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/KC-46_Pegasus_prepares_to_refuel_C-17_%28cropped%29.jpg?width=1000", credit: "USAF Christopher Okula / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "ki45", name: "Kawasaki Ki-45", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ki-45", "Ki-38", "Kawasaki Ki-38", "Kawasaki Ki-45 Toryu", "Kawasaki Ki-45 Toryu \"Nick\"", "Kawasaki Army Type 2 Two-seat Fighter", "Kawasaki Army Type 2 Twin-seat Fighter"],
    fact: "The Kawasaki Ki-45 Toryū ( 屠龍, Dragonslayer ) is a two-seat, twin-engine heavy fighter used by the Imperial Japanese Army in World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki_45_001.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "ki46", name: "Mitsubishi Ki-46", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ki-46", "Mitsubishi Ki-46 Dinah", "Mitsubishi Ki-46-III KAI", "Mitsubishi Army Type 100 Assault Plane", "Mitsubishi Army Type 100 Assault Aircraft", "Mitsubishi Army Type 100 HQ Reconnaissance"],
    fact: "The Mitsubishi Ki-46 is a twin-engine reconnaissance aircraft that was used by the Imperial Japanese Army in World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki-46_100sitei.jpg?width=1000", credit: "撮影者不明 / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "ki61", name: "Kawasaki Ki-61", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ki-61", "Ki-61 Hien", "Hagakure-Tai", "Kawasaki hien", "Kawasaki Ki-61 Hien", "Kawasaki Ki-61-II KAI", "Japanese Messerschmitt", "Kawasaki Army Type 3 Fighter"],
    fact: "The Kawasaki Ki-61 Hien (飛燕, \"flying swallow \") is a Japanese World War II fighter aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kawasaki_Ki-61-14.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "ki84", name: "Nakajima Ki-84 Hayate", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Nakajima Ki-84 Hayate ( キ84 疾風; lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Nakajima_Ki-84_Hayate_additional_prototype_of_the_Army_Air_Force.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "kingfisher", name: "Vought OS2U Kingfisher", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["OS2U", "Vought OS2U", "Vought XOS2U", "OS2U Kingfisher", "OS2N Kingfisher", "Vought Kingfisher", "Vought OSU Kingfisher", "Vought OS2U-2 Kingfisher"],
    fact: "The Vought OS2U Kingfisher is an American catapult-launched observation floatplane.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/OS2U-2_Kingfisher_in_flight_1942.jpg?width=1000", credit: "U.S. Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "l118", name: "L118 light gun", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["L118", "L119", "MKEK Boran", "105mm Light Gun", "105 mm Light Gun"],
    fact: "The L118 light gun is a 105 mm towed howitzer.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Artillery_Firing_105mm_Light_Guns_MOD_45155621.jpg?width=1000", credit: "Richard Watt / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "la7", name: "Lavochkin La-7", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["La-7", "La-7 Fin", "Lavochkin La-7R", "Lavochkin La-7TK"],
    fact: "The Lavochkin La-7 ( Russian: Лавочкин Ла-7; NATO reporting name: Fin ) is a piston-engined single-seat fighter aircraft developed by the Soviet Union during World War II by the La",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lavochkin_La-7_%E2%80%9927_white%E2%80%99_%2825168790698%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2007-08-cesko-317.jpg?width=1000", credit: "Ralf Roletschek ( talk ) / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/La-7_4_ld.jpg?width=1000", credit: "Martin Čížek / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "lav25", name: "LAV-25", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["M1047", "LAV-M", "LAV-AD", "LAV-105"],
    fact: "The LAV-25 ( Light Armored Vehicle ) is a member of the LAV II family.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/LAV-25A2.jpg?width=1000", credit: "Cpl. Nayelly Nieves-Nieves / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marines_with_2nd_Light_Armored_Vehicle_Battalion_float_test_Light_Armored_Vehicles_140326-M-SF718-007.jpg?width=1000", credit: "Lance Cpl. Tyler Andersen / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/USMC-110314-M-2740R-106.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "long_tom", name: "155 mm gun M1", category: "artillery", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The 155 mm gun M1 was a 155 mm field gun developed and used by the United States military.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/155_mm_Long_Tom_2.jpg?width=1000", credit: "Mark Pellegrini / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "luchs", name: "Spähpanzer Luchs", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Spahpanzer Luchs", "Spaehpanzer Luchs", "Spahpanzer 2 Luchs"],
    fact: "The Spähpanzer Luchs ( English: Scout Armored Car \" Lynx \", lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SpPz2_Luchs.JPG?width=1000", credit: "Billyhill / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "lysander", name: "Westland Lysander", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Westland Wendover", "Westland Lysander III", "Westland Lysander Mk.II", "Westland Lysander Mk.III"],
    fact: "The Westland Lysander is a British army co-operation and liaison aircraft produced by Westland Aircraft that was used immediately before and during the Second World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Westland_Lysander_IIIa_%27V9367_MA-B%27_%28G-AZWT%29_%2851554135693%29.jpg?width=1000", credit: "Alan Wilson from Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "m107", name: "M107 self-propelled gun", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["175 mm self-propelled gun", "M107 175mm Self-Propelled Gun"],
    fact: "The M107 175 mm (6.9 in) self-propelled gun was used by the US Army and US Marine Corps from the early 1960s to the late 1970s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_M107_175_mm_Self-propelled_Howitzer.jpg?width=1000", credit: "Leger Film- en Fotodienst (LFFD) / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "m110", name: "M110 howitzer", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["8-inch M110", "M110 gun motor carriage", "M110 Self Propelled Howitzer", "M110 203mm Self-Propelled Howitzer"],
    fact: "The 8-inch (203 mm) M110 self-propelled howitzer is an American self-propelled artillery system consisting of an M115 203 mm howitzer installed on a purpose-built chassis.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_M110_203_mm_8_inch_Heavy_Self-propelled_Howitzer.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "m1128", name: "M1128 mobile gun system", category: "afv", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The M1128 mobile gun system (MGS) is an eight-wheeled assault gun of the Stryker family, mounting a 105 mm tank gun, based on the Canadian LAV III light-armored vehicle manufacture",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Exercise_Allied_Spirit_I%2C_Day_5_150117-A-EM105-337.jpg?width=1000", credit: "Sgt. William Tanner / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flickr_-_DVIDSHUB_-_Third_Army_Moving_Strykers_to_Afghanistan.jpg?width=1000", credit: "DVIDSHUB / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flickr_-_The_U.S._Army_-_Range_fire.jpg?width=1000", credit: "The U.S. Army / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m36", name: "M36 tank destroyer", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["M36 GMC", "M36 Jackson", "M36 Gun Motor Carriage", "M36B1 gun motor carriage", "90 mm Gun Motor Carriage T71", "90 mm Gun Motor Carriage, M36"],
    fact: "The M36 tank destroyer, formally 90 mm Gun Motor Carriage, M36, was an American tank destroyer used during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/American_tank_destroyers.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vojna_po%C5%A1ta_Maribor_s_tankom_na_kamionu_na_dan_%C5%A1ofejev_1958.jpg?width=1000", credit: "Jože Gal (–2018) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m42_duster", name: "M42 Duster", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["M42A1 Duster", "M42 Duster SPAAG", "M42 Gun Motor Carriage", "M42 40 mm Self-Propelled Anti-Aircraft Gun"],
    fact: "The M42 40 mm self-propelled anti-aircraft gun, or Duster, is an American armored light air-defense gun built for the United States Army from 1952 until December 1960, in service until 1988.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M42_Duster_in_1968.jpg?width=1000", credit: "From the Robert L. Drieslein Collection (COLL/5643) at the Archives Branch, Marine Corps History Division / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "m4_bison", name: "Myasishchev M-4", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["M4 Bison", "M-4 Bison", "M-4 Molot", "Mya-4 Bison", "Bison bomber", "Myasishchev M", "Myasishchev 3M", "Myasishchev 2M"],
    fact: "The Myasishchev M-4 Molot ( Russian: Молот (Hammer ), USAF /DoD reporting name \"Type 37\", ASCC reporting name Bison ) was a four-engined strategic bomber designed by Vladimir Mikha",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Myasischev_3MD_VVS_museum.jpg?width=1000", credit: "Mike1979 Russia / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "m56_scorpion", name: "M56 Scorpion", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["M56 SPAA", "M56 Self Propelled Gun", "M56 self-propelled gun"],
    fact: "The M56 \"Scorpion\" self-propelled gun is an American unarmored, airmobile self-propelled tank destroyer, which was armed with a 90 mm M54 gun with a simple blast shield, and an unp",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M56_at_AAF_Tank_Museum.JPG?width=1000", credit: "Yellowute at English Wikipedia / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m7_priest", name: "M7 Priest", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["M7 Gun Motor Carriage", "Gun motor carriage M7", "M-7 Gun Motor Carriage", "M7 Howitzer Motor Carriage", "M-7 self-propelled artillery", "105 Millimeter Howitzer Motor Carriage M7"],
    fact: "The 105 mm howitzer motor carriage M7 was an American self-propelled artillery vehicle produced during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M7_Priest_at_APG.jpg?width=1000", credit: "en:user:Yellowute / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_the_Normandy_Campaign_1944_B6657.2.jpg?width=1000", credit: "Christie (Sgt), No 5 Army Film & Photographic Unit / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "m88", name: "M88 recovery vehicle", category: "afv", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The M88 recovery vehicle is one of the largest armored recovery vehicles (ARV) in use by United States Armed Forces.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M88_Armored_Recovery_Vehicle_in_pm.jpg?width=1000", credit: "baku13 / Wikimedia Commons (CC BY-SA 2.1 jp)" },
    ]
  },
  {
    id: "m8_greyhound", name: "M8 Greyhound", category: "afv", era: "WW2", difficulty: 3,
    aliases: ["M20 Scout Car", "M20 greyhound", "M8 armored car", "M20 Utility Car", "M20 Armored Car", "T26 Armored Car", "T22 Armored Car", "Armored Car M-8"],
    fact: "The M8 light armored car is a 6×6 armored car produced by the Ford Motor Company during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/M8_Greyhound_U.S._Army_Armor_%26_Cavalry_Collection_2023.jpg?width=1000", credit: "Schierbecker / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "manchester", name: "Avro Manchester", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Manchester bomber", "Avro 679 Manchester"],
    fact: "The Avro 679 Manchester was a British twin-engine heavy bomber developed and manufactured by the Avro aircraft company in the United Kingdom.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Avro_Manchester_ExCC.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "marder2", name: "Marder II", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Marder II (marten in English) was a German tank destroyer of World War II based on the Panzer II chassis.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-197-1238-16%2C_Russland-Mitte%2C_Panzerj%C3%A4ger_%22Marder_II%22.jpg?width=1000", credit: "Henisch / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "maverick", name: "AGM-65 Maverick", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["AGM65", "Rb-75", "AGM-65", "AGM 65", "AGM-65D", "AGM-65A", "AGM65F Maverick", "Maverick rocket"],
    fact: "The AGM-65 Maverick is an air-to-ground missile (AGM) designed for close air support.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AGM-65_Maverick_MG_1382.jpg?width=1000", credit: "Rama / Wikimedia Commons (CC BY-SA 2.0 fr)" },
    ]
  },
  {
    id: "mb339", name: "Aermacchi MB-339", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["MC-32", "Mb339", "MB.339", "MB-339", "MB-338", "Veltro 2", "Mb339pan", "T-Bird II"],
    fact: "The Aermacchi MB-339 is a military jet trainer and light attack aircraft designed and manufactured by Italian aviation company Aermacchi.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MB339_-_RIAT_2008_%282674540983%29.jpg?width=1000", credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "mc202", name: "Macchi C.202 Folgore", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Macchi C.202 Folgore ( Italian \"thunderbolt\") is an Italian fighter aircraft developed and manufactured by Macchi Aeronautica.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Macchi_M.C.202D_prototype.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "md500", name: "MD Helicopters MD 500", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["MD500", "MD500E", "MD520N", "MD530F", "MD 530F", "MD 520N", "Hughes 500", "Hughes 369"],
    fact: "The MD Helicopters MD 500 series is an American family of light utility civilian and military helicopters.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Md_helicopters_md-500e_g-sscl_arp.jpg?width=1000", credit: "Adrian Pingstone ( Arpingstone ) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "me410", name: "Messerschmitt Me 410 Hornisse", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Messerschmitt Me 410 Hornisse (Hornet) is a heavy fighter and Schnellbomber (\"Fast Bomber\" in English) designed and produced by the German aircraft manufacturer Messerschmitt.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Messerschmitt_Me-410A-1-U2_Hornisse%2C_Germany_-_Air_Force_AN1139884.jpg?width=1000", credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "meteor_missile", name: "Meteor", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["JNAAM", "Mbda meteor", "Meteor missile", "Meteor missile system", "Joint New Air-to-Air Missile"],
    fact: "The Meteor is a European active radar guided beyond-visual-range air-to-air missile (BVRAAM) developed and manufactured by MBDA.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ILA_2008_PD_446.JPG?width=1000", credit: "ILA-boy / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "mh53", name: "Sikorsky MH-53", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["MH53", "MH-53", "HH-53", "HH-53C", "HH-53B", "MH-53J", "Pavelow", "PAVE LOW"],
    fact: "The Sikorsky MH-53 Pave Low series is a retired long-range special operations and combat search and rescue (CSAR) helicopter for the United States Air Force.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MH-53J_Pave_Low_Mission_Descent_%28altered%29.jpg?width=1000", credit: "Senior Airman Andy M. Kin / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "mi14", name: "Mil Mi-14", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mi-14 Haze", "Mil Mi-14PL", "Mil Mi-14BT", "Mil Mi-14PS", "Mil Mi-14 Haze"],
    fact: "The Mil Mi-14 ( Russian: Миль Ми-14, NATO reporting name: Haze ) is a Soviet shore-based nuclear-capable amphibious anti-submarine helicopter derived from the earlier Mi-8.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manewry_NATO_Noble_Mariner_%28cropped%29.jpg?width=1000", credit: "Ministerstwo Obrony Narodowej / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mi2", name: "Mil Mi-2", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["PZL Mi-2", "PZL-Swidnik Mi-2", "Mil Mi-2 variants", "WSK-PZL Swidnik Mi-2"],
    fact: "The Mil Mi-2 ( NATO reporting name: Hoplite ) is a small, three rotor blade Soviet -designed multi-purpose helicopter developed by the Mil Moscow Helicopter Plant, designed in the",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mil_mi-2%28modified%29.jpg?width=1000", credit: "bomberpilot / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mi35", name: "List of Mil Mi-24 variants", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The Soviet and later Russian Mil Mi-24 helicopter has been produced in many variants, as described below.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mil_Mi-24_early_series_comparison_line_drawing.png?width=1000", credit: "Stingray, the Helicopter Guy / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "mi4", name: "Mil Mi-4", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mil Mi-4A", "Mil Mi-4 variants"],
    fact: "The Mil Mi-4 ( USAF /DoD reporting name \"Type 36\", NATO reporting name \"Hound\" ) is a Soviet transport helicopter that served in both military and civilian roles.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi-4-JH01_%28remix%29.jpg?width=1000", credit: "Jan Hrdonka / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mig17", name: "Mikoyan-Gurevich MiG-17", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["JJ-4", "Lim-5", "MiG-17", "Mig 17", "YF-114", "MiG-17F", "MiG-17PF", "MiG-17 Fresco"],
    fact: "The Mikoyan-Gurevich MiG-17 ( Russian: Микоян и Гуревич МиГ-17; NATO reporting name: Fresco ) is a transonic fighter aircraft that was produced in the Soviet Union from 1952 and wa",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MiG-17_Takes_to_the_Sky_%28cropped%29.jpg?width=1000", credit: "Balon Greyjoy / Wikimedia Commons (CC0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PZL-Mielec_Lim-5_%27408%27_%2813291122204%29.jpg?width=1000", credit: "Alan Wilson / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "mig27", name: "Mikoyan MiG-27", category: "plane", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The Mikoyan MiG-27 ( Russian: Микоян МиГ-27; NATO reporting name: Flogger-D/J ) is a variable-sweep ground-attack aircraft, originally built by the Mikoyan-Gurevich design bureau i",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MiG-27_%28cropped%29.jpg?width=1000", credit: "Rob Schleiffert / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Lanka_Military_0031.jpg?width=1000", credit: "Chamal Pathirana / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "mig3", name: "Mikoyan-Gurevich MiG-3", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["MiG-3", "MiG-7", "Mig 3", "Mig 7", "Mikoyan-Gurevich D", "Mikoyan-Gurevich 2D", "Mikoyan-Gurevich KhS", "Mikoyan-Gurevich IKh"],
    fact: "The Mikoyan-Gurevich MiG-3 ( Russian: Микоян и Гуревич МиГ-3 ) is a Soviet interceptor used during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mikoyan_MiG-3_65_red_%28RA-1563G%29_%288607661358%29.jpg?width=1000", credit: "Alan Wilson Description British photographer Aviation enthusiast from Weston, Spalding, Lincs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "milan", name: "MILAN", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["MILAN 2", "Milan ATGM", "Milan missile", "Milan Anti-Tank Weapon", "Milan anti tank missile"],
    fact: "MILAN ( French: Missile d'Infanterie Léger Antichar, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tag_der_Bundeswehr_Jagel_2019_HJL_13_noBG.png?width=1000", credit: "https://commons.wikimedia.org/wiki/User:Marseille77 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mtlb", name: "MT-LB", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["MT-LBT", "MT-LBV", "MTP-LB", "MT-LB TJ", "MT-LBu-P", "MT-LBu-PS", "MT-LBu-TP"],
    fact: "The MT-LB ( Russian: Многоцелевой Тягач Легкий Бронированный (МТ-ЛБ), romanized: Mnogotselevoy tyagach legky bronirovanny, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RWS2017-37.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "mystere", name: "Dassault Mystère IV", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Mystere IV", "Mystère IV", "Dassault Mystere IV", "Dassault Mystère IVB", "Dassault Mystere IVA", "Dassault MD 454 Mystère IV", "Dassault M.D.452 Mystère IVA", "Dassault MD 454 'Mystere IV'"],
    fact: "The Dassault MD.454 Mystère IV is a 1950s French fighter-bomber aircraft, the first transonic aircraft to enter service with the French Air Force.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dassault_Myst%C3%A8re_IV.jpg?width=1000", credit: "Jean-Christophe BENOIST / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "n1k", name: "Kawanishi N1K", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["H1K", "N1K", "N1K1", "Shiden Kai", "Shiden-Kai", "H1K George", "Kawanishi F1K", "Kawanishi N1K1"],
    fact: "The Kawanishi N1K was a fighter aircraft designed and produced by the Japanese aircraft manufacturer Kawanishi Aircraft Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kawanishi_N1K2-J_050317-F-1234P-015.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "namer", name: "Namer", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["IDF Namer", "Namer APC", "Namer IFV", "BMP Namer", "Namer armored personnel carrier"],
    fact: "Namer ( Hebrew: נָמֵר, pronounced [ naˈmeʁ ]; meaning \" leopard,\" and also a syllabic abbreviation of \" Na gmash\" (APC) and \" Mer kava\") is an Israeli armoured personnel carrier ba",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flickr_-_Israel_Defense_Forces_-_13th_Battalion_of_the_Golani_Brigade_Holds_Drill_at_Golan_Heights_%288%29.jpg?width=1000", credit: "https://www.flickr.com/people/45644610@N03 / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IM000656.jpg?width=1000", credit: "Ereshkigal1 / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nammer004.jpg?width=1000", credit: "MathKnight / Wikimedia Commons (GFDL)" },
    ]
  },
  {
    id: "nebelwerfer", name: "Nebelwerfer", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["Fog thrower", "Nebelwerfers", "Smoke thrower", "Nebelwerfer 41", "Nebelwerfer 42", "Moaning minnie", "Wurfgranate 41", "Wurfgranata 41"],
    fact: "The Nebelwerfer ( translation</span>\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"translation\",\"href\":\"./Template:Translation\"},\"params\":{\"1\":{\"wt\":\"\\\"fog launcher\\\"\"}},\"i\":0}}]}'>transl.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/10cmNbW40.jpg?width=1000", credit: "US War Department / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "nike_hercules", name: "Nike Hercules", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["hercules"],
    fact: "The Nike Hercules, initially designated SAM-A-25 and later MIM-14, was a surface-to-air missile (SAM) used by US and NATO armed forces for medium- and high-altitude long-range air defense.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MIM-14_Nike-Hercules_02.jpg?width=1000", credit: "U.S. Army / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "oh1", name: "Kawasaki OH-1", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Kawasaki OH-X"],
    fact: "The Kawasaki OH-1 (nickname: \"Ninja\") is a military scout/observation helicopter developed and manufactured by the Kawasaki Aerospace Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%EF%BC%AF%EF%BC%A8%EF%BC%8D%EF%BC%91_%284%29.jpg?width=1000", credit: "陸上自衛隊 / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "ontos", name: "M50 Ontos", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["T165", "Ontos tank", "M50 Self Propelled Rifle", "106mm Self-propelled Rifle M50", "Utility Vehicle, Tracked, Infantry, T55", "Utility Vehicle, Tracked, Infantry, T56"],
    fact: "Ontos, officially the Rifle, Multiple 106 mm, Self-propelled, M50, was an American light armored tracked anti-tank vehicle developed in the 1950s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ontos.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "oplot", name: "T-84", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["BTMP-84", "BREM-84", "T-84-120", "BM Oplot", "T-84 Oplot", "Object 478", "Oplot tank", "Yatagan tank"],
    fact: "The T-84 is a Ukrainian main battle tank (MBT), based on the Soviet T-80 MBT introduced in 1976, specifically the diesel engine version: T-80UD.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Strong_Europe_Tank_Challenge_2018_%2842054365704%29_%28cropped%29.jpg?width=1000", credit: "7th Army Training Command from Grafenwoehr, Germany / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BM_Oplot%2C_Kyiv_2018%2C_04.jpg?width=1000", credit: "VoidWanderer / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/2012_Eurosatory_Ukraine_tank.JPG?width=1000", credit: "Copyleft / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "ouragan", name: "Dassault Ouragan", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Toofani", "Dassault Barougan", "Dassault MD 450 Ouragan", "Dassault M.D.450 Ouragan", "Dassault MD 450A Ouragan", "Dassault MD 450B Ouragan", "Dassault MD 450R Ouragan", "Dassault M.D.450A Ouragan"],
    fact: "The Dassault M.D.450 Ouragan ( French: Hurricane ) is a French fighter-bomber developed and produced by Dassault Aviation.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dassault_Ouragan.jpg?width=1000", credit: "Groumfy69 / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IC578_%2813988546811%29.jpg?width=1000", credit: "Alec Wilson from Hampton-in-Arden, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "p26", name: "Boeing P-26 Peashooter", category: "plane", era: "Pioneer", difficulty: 3,
    aliases: ["Boeing 248", "Boeing 266", "Boeing 281", "Boeing 272", "Boeing P-26", "Boeing XP-936", "P-26 Peashooter", "Boeing Model 248"],
    fact: "The Boeing P-26 \"Peashooter\" is the first American production all-metal fighter aircraft and the first pursuit monoplane to enter squadron service with the United States Army Air Corps.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Peashooter.arp.750pix.jpg?width=1000", credit: "Unknown photographer Unknown photographer / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P-26_Maloney.jpg?width=1000", credit: "Martin Čížek / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "p2640", name: "P26/40 tank", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The P 26/40 was an Italian World War II heavy tank (sometimes defined medium tank when compared to tanks of other nations).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P26-40_tank.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ansaldo_P40_01.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army_parade_of_Italy_2011_46.jpg?width=1000", credit: "Nicholas Gemini / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "p3", name: "Lockheed P-3 Orion", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["P3C", "P3V", "P-3C", "P-3A", "P3 orion", "P3V Orion", "PC3 Orion", "P-3 Orion"],
    fact: "The Lockheed P-3 Orion is a four-engined, turboprop anti-submarine and maritime surveillance aircraft developed for the United States Navy and introduced in the 1960s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P-3c_03l_%28modified%29.jpg?width=1000", credit: "海上自衛隊 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "p8", name: "Boeing P-8 Poseidon", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["P8A", "P-8A", "P-8i", "P-8A MMA", "Boeing P-8", "P8 Poseidon", "Boeing P-8A", "P-8 Poseidon"],
    fact: "The Boeing P-8 Poseidon is an American maritime patrol and reconnaissance aircraft developed and produced by Boeing Defense, Space & Security.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Navy_P-8_Poseidon_taking_off_at_Perth_Airport.jpg?width=1000", credit: "Darren Koch / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "pak40", name: "5 cm Pak 38", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["PaK38", "Pak 38", "50 K 38"],
    fact: "The 5 cm Pak 38 (L/60) ( 5 cm Panzerabwehrkanone 38 (L/60) ) was a German anti-tank gun of 50 mm calibre.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-549-0743-13A%2C_Tunesien%2C_Soldaten_mit_Pak_38.jpg?width=1000", credit: "Appe [Arppe] / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "pak43", name: "8.8 cm Pak 43", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["PaK 43", "8,8 cm Panzerabwehrkanone"],
    fact: "The Pak 43 ( Panzerabwehrkanone 43 and Panzerjägerkanone 43 ) was a German 8.8 cm anti-tank gun developed by Krupp in competition with the Rheinmetall 8.8 cm Flak 41 anti-aircraft",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-698-0038-07%2C_Russland%2C_8%2C8cm_Pak.jpg?width=1000", credit: "Unknown Unknown / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "pantsir", name: "Pantsir missile system", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["Sa22", "57E6", "SA-22", "Pantsir", "Pantsyr", "Pantsyr-S1", "Pantsyr S1", "Pantsir-S1"],
    fact: "The Pantsir ( Russian: Панцирь, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MAKS_Airshow_2013_%28Ramenskoye_Airport%2C_Russia%29_%28521-05%29.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "panzer35t", name: "Panzer 35(t)", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["LT-35", "LT vz 35", "LT vz.35", "R-2 tank", "Panzer 35", "LT vz. 35", "PzKpfw 35"],
    fact: "The Panzerkampfwagen 35(t), commonly shortened to Panzer 35(t) or abbreviated as Pz.Kpfw.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer-35.jpg?width=1000", credit: "No machine-readable author provided. MoRsE assumed (based on copyright claims). / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pz_35T_001_russian_41.jpg?width=1000", credit: "ConnorMac12 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "panzerschreck", name: "Panzerschreck", category: "missile", era: "WW2", difficulty: 3,
    aliases: ["Tank terror", "Panzershrek", "Panzershreck", "Panzerschrek", "Raketenpanzerbüchse Panzerschreck"],
    fact: "Panzerschreck ( literal translation</span>\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"lit\",\"href\":\"./Template:Lit\"},\"params\":{},\"i\":0}}]}'>lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-671-7483-29%2C_Reichsgebiet%2C_Soldat_mit_Panzerabwehrwaffe.jpg?width=1000", credit: "Lysiak / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "patria_amv", name: "Patria AMV", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["AMXVP", "AMVXP", "XA-360", "AMV 8x8", "XA 360P", "Hoefyster", "XA 360 AMOS", "Patria AMV 8x8"],
    fact: "The Patria AMV ( Armoured Modular Vehicle ) is an 8×8 multi-role military vehicle produced by the Finnish defence industry company Patria.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pansarterr%C3%A4ngbil_360_Revinge_2015-7.jpg?width=1000", credit: "Jorchr / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Presentation_of_Svarun_8x8.jpg?width=1000", credit: "Mors / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "paveway", name: "Paveway", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["GBU-49", "GBU-58", "Paveway 2", "Paveway 3", "Paveway II", "Paveway III", "Enhanced Paveway"],
    fact: "Pave or PAVE is sometimes used as an acronym for precision avionics vectoring equipment; literally, electronics for controlling the speed and direction of aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Paveway_III_laser_guided_bomb_seeker_head.jpg?width=1000", credit: "uploaded by Megapixie / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "pe8", name: "Petlyakov Pe-8", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["PE8", "Pe-8", "PS-42", "ANT-42", "Tupolev TB-7", "Tupolev PS-42", "Petlyakov TB-7", "Petlyakov PS-42"],
    fact: "The Petlyakov Pe-8 ( Russian: Петляков Пе-8 ) was a Soviet heavy bomber designed before World War II, and the only four-engine bomber the USSR built during the war.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_TB-7_%28Ant-42%2C_Pe-8%29_%2814260356248%29.jpg?width=1000", credit: "SDASM Archives / Wikimedia Commons (No known restrictions)" },
    ]
  },
  {
    id: "pershing2", name: "MGM-31 Pershing", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["MGM-31", "Pershing I", "Pershing 1", "Pershing 1a", "Pershing IA", "Gilson Butte", "Pershing missile", "Gilson Butte, Utah"],
    fact: "The MGM-31A Pershing was the missile used in the Pershing 1 and Pershing 1a field artillery missile systems.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pershing_1_launch_%28Feb_16%2C_1966%29.png?width=1000", credit: "Warren C. Weaver / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "phalanx", name: "Phalanx CIWS", category: "missile", era: "Modern", difficulty: 2,
    aliases: ["MK 15 Phalanx", "Vulcan Phalanx", "Phalanx weapon system", "Phalanx Close-In Weapon System", "Phalanx close-in weapons systems", "cram"],
    fact: "The Phalanx CIWS ( SEE -wiz ) is an automated gun-based \" Close-In Weapon System \" to defend military watercraft automatically against incoming threats such as aircraft, missiles, and small boats.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Phalanx_CIWS_Block_1B_Full_Sized_USS_Elrod_FFG-55.jpg?width=1000", credit: "Chuck Homler d/b/a FocusOnWildlife / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "phoenix", name: "AIM-54 Phoenix", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["Aim54", "AIM-54", "AIM 54", "AIM-54C", "AIM-54A", "AAM-N-11", "Phoenix missile", "AIM-54A Phoenix"],
    fact: "The AIM-54 Phoenix is an American active radar-guided, beyond-visual-range air-to-air missile (AAM), carried in clusters of up to six missiles on the Grumman F-14 Tomcat, its only",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AIM-54A_%28left%29_on_F-14_at_NAS_Pax_1984.JPEG?width=1000", credit: "Don S. Montgomery, USN / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "piat", name: "PIAT", category: "missile", era: "WW2", difficulty: 3,
    aliases: ["Projectile Infantry Anti-Tank", "Projector, Infantry, Anti Tank", "Projector Infantry Tank Attack"],
    fact: "The Projector, Infantry, Anti Tank ( PIAT ) Mk I was a British man-portable anti-tank weapon developed during the Second World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PIAT_cropped.jpg?width=1000", credit: "Ranger Steve / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "pion", name: "2S7 Pion", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["2A-44", "2S7M Malka"],
    fact: "The 2S7 Pion (\" peony \") or 2S7M Malka is a Soviet self-propelled 203 mm cannon.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army-2018-29.jpg?width=1000", credit: "Nickel nitride / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "prachand", name: "HAL Prachand", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["HAL LCH", "Light Combat Helicopter", "HAL Light Combat Helicopter"],
    fact: "The HAL Prachand ( literal translation</span>\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"Lit\",\"href\":\"./Template:Lit\"},\"params\":{\"1\":{\"wt\":\"Fierce/Intense\"}},\"i\":0}}]}'>lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/HAL_Prachand_%28ZF_4834%29.jpg?width=1000", credit: "IAF / Wikimedia Commons (GODL-India)" },
    ]
  },
  {
    id: "predator", name: "General Atomics MQ-1 Predator", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["MQ1", "RQ-1", "MQ-1", "Predator A", "RQ-1 Mariner", "Predator uav", "Q-1 Predator", "MQ1 Predator"],
    fact: "The General Atomics MQ-1 Predator (often referred to as the Predator drone ) is an American remotely piloted aircraft (RPA) built by General Atomics that was used primarily by the",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MQ-1_Predator%2C_armed_with_AGM-114_Hellfire_missiles.jpg?width=1000", credit: "Lt. Col. Leslie Pratt / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "pzl_p11", name: "PZL P.11", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["PZL P.11c", "PZL P-11c"],
    fact: "The PZL P.11 is a Polish fighter aircraft, designed and produced in the early 1930s by Państwowe Zakłady Lotnicze.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/PZL_P.11c_%2739_-_2%27_%2814336386246%29.jpg?width=1000", credit: "Alan Wilson Description British photographer Aviation enthusiast from Weston, Spalding, Lincs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "qf17", name: "Ordnance QF 17-pounder", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["17 pdr", "QF17 pdr", "QF 17 pdr", "17 pounder", "17-pounder", "OQF 77mm HV", "77 mm HV gun", "QF 17-pounder"],
    fact: "The Ordnance Quick-Firing 17-pounder or just 17-pdr, was a 76.2 mm (3 inch) gun developed by the United Kingdom during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/QF-17-pounder-batey-haosef-1.jpg?width=1000", credit: "No machine-readable author provided. Bukvoed assumed (based on copyright claims). / Wikimedia Commons (CC BY 2.5)" },
    ]
  },
  {
    id: "qf25", name: "Ordnance QF 25-pounder", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["25 pdr", "QF 25 pdr", "25 pounder", "25-pounder", "QF 25 pounder", "25 pounder gun", "25 pounder guns", "25pr Short Mark 1"],
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/25_Pounder_Gun.JPG?width=1000", credit: "Nhl4hamilton / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "qf6", name: "Ordnance QF 6-pounder", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["Molins gun", "57mm Gun M1", "57 mm Gun M1", "OQF 6 Pounder", "QF 6pdr Class M", "QF 6 pounder gun", "Ordnance QF 6 pdr", "M-1 A Anti-Tank Gun"],
    fact: "The Ordnance quick-firing 6-pounder 7 cwt, or just 6-pounder, was a British 57 mm gun, serving during the Second World War as a primary anti-tank gun of both the British and United",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pak_army_QF-6_Pounder.jpg?width=1000", credit: "Xtreme o7 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "r22", name: "Robinson R22", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["R22 Beta II", "Robinson R22 Beta", "Robinson Model R22", "Robinson 22 helicopter"],
    fact: "The Robinson R22 is a two-seat, two-bladed, single-engined, light utility helicopter manufactured by Robinson Helicopter Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/R22_N4044D_%28cropped%29.jpg?width=1000", credit: "Jeroen Stroes Aviation Photography / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "r73", name: "R-73", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["R-74", "AA-11", "K-74M2", "AA-11 AAM", "Vympel R-73", "AA-11 Archer", "Izdeliye 760", "AA-11 'Archer'"],
    fact: "The Vympel R-73 ( NATO reporting name AA-11 Archer ) is a short-range IR-homing air-to-air missile developed by Vympel NPO that entered service in 1984.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MAKS2015part7-21.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "rapier", name: "Rapier", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["Rapier FSC", "Rapier 2000", "Rapier Missile", "Tracked Rapier", "Rapier Field Standard C"],
    fact: "Rapier is a surface-to-air missile developed for the British Army to replace their towed Bofors 40/L70 anti-aircraft guns.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Swiss_rapier_missile.jpg?width=1000", credit: "Nirazul ( talk ) / Wikimedia Commons (CC BY-SA 2.0 de)" },
    ]
  },
  {
    id: "reaper", name: "General Atomics MQ-9 Reaper", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["MQ9", "MQ-9", "RQ-9", "MQ-9B", "CU-163", "Ikhana", "Predator B", "MQ9-Reaper"],
    fact: "The General Atomics MQ-9 Reaper (sometimes called Predator B ) is a medium-altitude long-endurance unmanned aerial vehicle (UAV, one component of an unmanned aircraft system (UAS))",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/MQ-9_Reaper_UAV_%28cropped%29.jpg?width=1000", credit: "Lt. Col. Leslie Pratt / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "renault_r35", name: "Renault R35", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Char R35", "Vânătorul de care R35"],
    fact: "The Renault R35, an abbreviation of Char léger Modèle 1935 R or R35, was a French light infantry tank of the Second World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Renault-R-35-latrun-2.jpg?width=1000", credit: "No machine-readable author provided. Bukvoed assumed (based on copyright claims). / Wikimedia Commons (CC BY 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/1_FI_5_49_-_Revue_militaire%2C_place_Broglie._04_octobre_1938_%28archives_de_Strasbourg%29.jpg?width=1000", credit: "Archives de Strasbourg 1 FI 5 49 (Unknown photographer) / Wikimedia Commons (see file page)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/R-35-Aberdeen.0003kprx.jpg?width=1000", credit: "User:Fat yankey / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "rosomak", name: "KTO Rosomak", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["Rosomak"],
    fact: "The KTO Rosomak ( Polish: Kołowy Transporter Opancerzony Rosomak, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/KTO_Rosomak_IFV_with_ZSSW-30_RCWS.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (CC BY 3.0 pl)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tag_der_polnischen_Streikr%C3%A4fte_%2848616742787%29.jpg?width=1000", credit: "Gerrit Burow from Berlin, Deutschland / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SMK_120mm_RAK%2C_testy%2C_poligon_Nowa_D%C4%99ba_2019_01.jpg?width=1000", credit: "Jarosław Wolski / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "s3", name: "Lockheed S-3 Viking", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["S-3B", "S-3A", "S3 Viking", "S-3 viking", "ES-3 Shadow", "ES-3 Viking", "S-3b viking", "S-3A Viking"],
    fact: "The Lockheed S-3 Viking is a four-crew, twin-engine turbofan -powered subsonic anti-submarine jet aircraft designed and produced by the American aerospace manufacturer Lockheed Corporation.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/S-3A_%28cropped%29.jpg?width=1000", credit: "US Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "s400", name: "S-400 missile system", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["Sa21", "40N6", "SA-21", "S-400", "9M96E", "С-400", "48N6E", "9M96E2"],
    fact: "The S-400 Triumf ( Russian: C-400 Триумф – Triumf; translation: Triumph; NATO reporting name: SA-21 Growler ), previously known as the S-300 PMU-3, is a mobile surface-to-air missi",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A1-400_%C2%AB%D0%A2%D1%80%D0%B8%D1%83%D0%BC%D1%84%C2%BB.JPG?width=1000", credit: "Соколрус / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "s61", name: "Sikorsky S-61", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Sikorsky S-61L", "Sikorsky S-61A", "Sikorsky S-61N", "Sikorsky S-61 Triton", "Sikorsky S-61L Mk II", "Sikorsky S-61N Mk II", "Sikorsky S-61T Triton", "Sikorsky S-61 Shortsky"],
    fact: "The Sikorsky S-61L and S-61N are civil variants of the SH-3 Sea King military helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sikorsky_S-61N_Mk.II.jpg?width=1000", credit: "Peng Chen / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "s76", name: "Sikorsky S-76", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["S-76", "S76c", "S-76A", "H-76 Eagle", "Sikorsky H-76", "Sikorsky S-74", "Sikorsky S-76A", "Sikorsky S-76D"],
    fact: "The Sikorsky S-76 is a medium-size commercial utility helicopter designed and produced by the American helicopter manufacturer Sikorsky Aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pesca_1_%283737941060%29.jpg?width=1000", credit: "Contando Estrelas from Vigo, España / Spain / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "saracen", name: "Alvis Saracen", category: "afv", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The FV603 Saracen is a six-wheeled armoured personnel carrier designed and produced by Alvis from 1952 to 1976.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Alvis_Saracen_APC_%281953%29.jpg?width=1000", credit: "SG2012 / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "scimitar", name: "FV107 Scimitar", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["FV107", "Scimitar tank", "Alvis Scimitar"],
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scimitar_Light_Tank_MOD_45149231.jpg?width=1000", credit: "Graeme Main / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "scimitar_jet", name: "Supermarine Scimitar", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Supermarine 508", "Supermarine 529", "Supermarine Type 544", "Supermarine Type 543", "Supermarine Type 529", "Supermarine Type 508", "Supermarine Type 505", "Supermarine Type 576"],
    fact: "The Supermarine Scimitar was a British single-seat naval strike aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scimitars_62.jpg?width=1000", credit: "TSRL / Wikimedia Commons (GFDL)" },
    ]
  },
  {
    id: "sdkfz222", name: "Leichter Panzerspähwagen", category: "afv", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Leichter Panzerspähwagen (German: \"light armoured reconnaissance vehicle \") was a series of light four-wheel drive armoured cars produced by Nazi Germany from 1935 to 1944.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_North_Africa_1941_E3776.jpg?width=1000", credit: "No 1 Army Film & Photographic Unit, Vanderson (Lieut) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "sdkfz234", name: "Sd.Kfz. 234", category: "afv", era: "WW2", difficulty: 3,
    aliases: ["Sd Kfz. 234 Puma"],
    fact: "The Sd.Kfz. 234 ( Sonderkraftfahrzeug 234, Special Purpose Vehicle 234), was a family of armoured cars designed and built in Germany during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sd.Kfz_234-2_front-diagonal_view.jpg?width=1000", credit: "Unknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Niemieckie_samochody_pancerne_%282-13060%29.jpg?width=1000", credit: "Kempe / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "sea_dart", name: "Sea Dart", category: "missile", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "Sea Dart, or GWS.30 was a Royal Navy surface-to-air missile system designed in the 1960s and entering service in 1973.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Drill_Sea_Dart_Missiles_Onboard_HMS_Edinburgh_MOD_45153846.jpg?width=1000", credit: "LA(Phot) Dave Jenkins / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "sea_fury", name: "Hawker Sea Fury", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Hawker Sea Fury FB.11"],
    fact: "The Hawker Sea Fury is a British fighter aircraft designed and manufactured by Hawker Aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawker_Fury_FB.11_%E2%80%98SR661%E2%80%99_%28G-CBEL%29_%2835902999510%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Airplane_in_Museo_Giron.jpg?width=1000", credit: "Panther / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "sea_vixen", name: "de Havilland Sea Vixen", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["XP924", "DH110", "DH.110", "DH 110", "Sea Vixen", "DH.110 jet fighter", "De Havilland DH.110", "De Havilland DH 110"],
    fact: "The de Havilland DH.110 Sea Vixen is a British twin-engine, twin boom -tailed, two-seat, carrier-based fleet air-defence fighter flown by the Fleet Air Arm of the Royal Navy from t",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Duxford_Air_Festival_2017_-_sv3_%2834932299646%29.jpg?width=1000", credit: "wallycacsabre / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "seafire", name: "Supermarine Seafire", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Seafire Mk.IB", "Seafire Mk.IIC", "Seafire Mk.III", "Supermarine Type 357", "Supermarine Type 358", "Supermarine Type 375", "Supermarine Type 377", "Supermarine Type 386"],
    fact: "The Supermarine Seafire is a naval version of the Supermarine Spitfire fighter adapted for operation from aircraft carriers.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Seafire_1.jpg?width=1000", credit: "Royal Canadian Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fleet_Air_Arm_Trials%2C_Aboard_HMS_Victorious._23-25_September_1942._A12119.jpg?width=1000", credit: "Priest, L C (Lt) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "sexton", name: "Sexton", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["Sexton II", "Sexton artillery"],
    fact: "The 25pdr SP, tracked, Sexton was a Canadian-designed self-propelled artillery vehicle of the Second World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sexton_25pdr_S223813_pic07.JPG?width=1000", credit: "Alf van Beem / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "sh60", name: "Sikorsky SH-60 Seahawk", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["SH-60", "MH-60R", "MH-60S", "SH-60B", "SH-60F", "S-70B Seahawk", "MH-60 Seahawk", "H-60 Sea Hawk"],
    fact: "The Sikorsky SH-60/MH-60 Seahawk (or Sea Hawk ) is a twin turboshaft engine, multi-mission United States Navy helicopter based on the United States Army UH-60 Black Hawk and a memb",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SH-60B_Seahawk2.jpg?width=1000", credit: "Unknown / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "shackleton", name: "Avro Shackleton", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Avro Shackelton", "Avro 696 Shackleton", "Avro Shackleton MR.3", "Avro Shackleton AEW.2"],
    fact: "The Avro Shackleton is a British long-range maritime patrol aircraft (MPA) which was used by the Royal Air Force (RAF) and the South African Air Force (SAAF).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Avro_Shackleton_MR3_in_flight_c1955.jpg?width=1000", credit: "RAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "shilka", name: "ZSU-23-4 Shilka", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["ZSU23", "ZSU-23", "ZSU 23", "ZSU-24", "Gundish", "Gun Dish", "ZSU-23∙4", "ZSU-23x4"],
    fact: "The ZSU-23-4 \" Shilka \" is a lightly armoured Soviet self-propelled, radar -guided anti-aircraft weapon system ( SPAAG ).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%97%D0%A1%D0%A3-23-4_%C2%AB%D0%A8%D0%B8%D0%BB%D0%BA%D0%B0%C2%BB_%D0%B2_%D0%9C%D1%83%D0%B7%D0%B5%D0%B5_%D0%BE%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8.jpg?width=1000", credit: "Музей отечественной военной истории / Wikimedia Commons (GFDL)" },
    ]
  },
  {
    id: "sm79", name: "Savoia-Marchetti SM.79 Sparviero", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Savoia-Marchetti SM.79 Sparviero (Italian for sparrowhawk ) is a three-engined medium bomber developed and manufactured by the Italian aviation company Savoia-Marchetti.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Savoia_Marchetti_SM_79_Sparviero_in_volo.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SM79_193.jpg?width=1000", credit: "Andrea Nicola / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "sopwith_pup", name: "Sopwith Pup", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Sopwith Dove", "Sopwith Scout"],
    fact: "The Sopwith Pup is a British single-seater biplane fighter aircraft built by the Sopwith Aviation Company.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shuttleworth_Flying_Day_-_June_2013_%289124616838%29.jpg?width=1000", credit: "John5199 / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "sopwith_triplane", name: "Sopwith Triplane", category: "plane", era: "WW1", difficulty: 3,
    aliases: ["Tripehound", "Sopwith Tripehound"],
    fact: "The Sopwith Triplane is a British single-seat fighter aircraft designed and manufactured by the Sopwith Aviation Company during the First World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sopwith_Triplane_G-BOCK.jpg?width=1000", credit: "TSRL / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SopTri5.jpg?width=1000", credit: "ADMIRALTY COLLECTION / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SopTri3.jpg?width=1000", credit: "Unknown / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "sparrow", name: "AIM-7 Sparrow", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["Aim7", "AIM-7", "AIM 7", "AIM-7F", "AIM-7E", "AIM-7E4", "Sparrow AAM", "AIM-7M Sparrow"],
    fact: "The AIM-7 Sparrow (Air Intercept Missile ) is an American medium-range semi-active radar homing air-to-air missile operated by the United States Air Force, United States Navy, Unit",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AIM_7_HAFB_Museum.jpg?width=1000", credit: "Wilson44691 / Wikimedia Commons (CC0)" },
    ]
  },
  {
    id: "spike", name: "Spike", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["Spike ER", "Spike-ER", "Spike lr", "EUROSPIKE", "Euro-Spike", "Mini-Spike", "PstOhj 2000", "EuroSpike ER"],
    fact: "Spike ( Hebrew: ספייק) is an Israeli fire-and-forget anti-tank guided missile and anti-personnel missile with a tandem-charge high-explosive anti-tank (HEAT) warhead.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SPIKE_ATGM.jpg?width=1000", credit: "Dave1185 ( talk ) / Wikimedia Commons (CC BY 3.0)" },
    ]
  },
  {
    id: "starstreak", name: "Starstreak", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["ATASK", "Starstreak HVM", "Starstreak missile", "Multi Mission System", "High Velocity Missile", "Thor missile launcher"],
    fact: "Starstreak is a British short-range surface-to-air missile that can be used as a man-portable air-defence system (MANPADS) or used in heavier systems.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CJOAX_fires_150417-A-BG594-015.jpg?width=1000", credit: "Capt. Joseph Bush / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "storch", name: "Fieseler Fi 156 Storch", category: "plane", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Fieseler Fi 156 Storch ( [ ʃtɔrç ], \" stork \") is a liaison aircraft designed and produced by the German aircraft manufacturer Fieseler.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fieseler_Storch_3_%28cropped%29.jpg?width=1000", credit: "Tony Hisgett / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "strela", name: "9K32 Strela-2", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["Sa7", "SA-7", "9K32", "9M32", "SAM-7", "CA-94", "SA-N-5", "ItO 78"],
    fact: "The 9K32 Strela-2 ( Russian: Cтрела, lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SA-7.jpg?width=1000", credit: "US Navy / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "stug4", name: "Sturmgeschütz IV", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["StuG IV", "Sturmgeschutz IV", "Sturmgeschuetz IV"],
    fact: "The Sturmgeschütz IV (StuG IV) (Sd.Kfz.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sturmgeschutz_iv_Muzeum_Broni_Pancernej_CSWL_2.JPG?width=1000", credit: "Maciej Borun ( Maciej.borun ( talk )) / Wikimedia Commons (CC BY 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Przybycie_niemieckich_posi%C5%82k%C3%B3w_wojskowych_do_Salonik_%282-597%29.jpg?width=1000", credit: "Teschendorf / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "su15", name: "Sukhoi Su-15", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Su-15", "Su-21", "T-58VD", "Sukhoi T-58", "Sukhoi Su-21", "Su-15 Flagon", "Sukhoi Su-19", "Sukhoi T-58VD"],
    fact: "The Sukhoi Su-15 ( NATO reporting name: Flagon ) is a twinjet supersonic interceptor aircraft developed by the Soviet Union.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SU-15.jpg?width=1000", credit: "Wojsyl / Wikimedia Commons (CC BY-SA 2.5)" },
    ]
  },
  {
    id: "su17", name: "Sukhoi Su-17", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Su-17", "Su-20", "Su-22", "YF-112", "Sukhoi-22", "Sukhoi 22", "Su-22M-3K", "Su-22M-4K"],
    fact: "The Sukhoi Su-17 ( Russian: Су-17; NATO reporting name: Fitter ) is a variable-sweep wing fighter-bomber developed for the Soviet military.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vietnamese_Su-22M4_with_Kh-25s.jpg?width=1000", credit: "Hoangprs5 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-17M.jpg?width=1000", credit: "Unknown / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-20_Military_Museum_of_Egypt.jpg?width=1000", credit: "LeCaire / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "su30", name: "Sukhoi Su-30", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Su30", "Su-30", "Su-30MK", "Su-27PU", "Su-30MK2", "Sukoi SU-30MK", "Su-30 Flanker", "Sukhoi Su-30M"],
    fact: "The Sukhoi Su-30 ( Russian: Сухой Су-30; NATO reporting name: Flanker-C/G/H ) is a twin-engine, two-seat supermaneuverable fighter aircraft developed in the Soviet Union in the 198",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Su-30SM_in_flight_2014.jpg?width=1000", credit: "Alex Beltyukov / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "su35", name: "Sukhoi Su-35", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["Su35", "Su-35", "Su-35S", "Su-27M", "Su-35BM", "Su-35UB", "Super flanker", "Sukhoi Su-35S"],
    fact: "The Sukhoi Su-35 ( Russian: Сухой Су -35; NATO reporting name: Flanker-E/M, occasionally nicknamed \" Super Flanker \" ) is the designation for two improved derivatives of the Russia",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Russian_Air_Force%2C_RF-81719%2C_Sukhoi_Su-35S_%2849581740157%29.jpg?width=1000", credit: "Anna Zvereva from Tallinn, Estonia / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "su7", name: "Sukhoi Su-7", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Su-7", "Su-7B", "Sukhoi Su-7B", "Sukhoi Su-7BM", "Su-7 Fitter-A", "Sukhoi Su-7IG", "Sukhoi Su-7BMK", "Sukhoi Su-7 Fitter"],
    fact: "The Sukhoi Su-7 ( NATO designation name: Fitter-A ) is a swept wing, supersonic fighter aircraft developed by the Soviet Union in 1955.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukhoi_Su-7BKL%2C_Poland_-_Air_Force_AN2202869.jpg?width=1000", credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su-7B_Fitter_A.jpg?width=1000", credit: "Victor12 at en.wikipedia, derivative by F l a n k e r / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "su76", name: "SU-76", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Su85b", "SU-76M", "SU-76B", "OSU-76", "SU-85B", "SU-85A", "Samokhodnaja Ustanovka 76"],
    fact: "The SU-76 ( Samokhodnaya Ustanovka 76 ) was a Soviet light self-propelled gun used during and after World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Su76_nn.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/National_Museum_of_Military_History%2C_Bulgaria%2C_Sofia_2012_PD_229.jpg?width=1000", credit: "Bin im Garten / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "su85", name: "SU-85", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The SU-85 ( Samokhodnaya ustanovka 85) was a Soviet self-propelled gun used during World War II, based on the chassis of the T-34 medium tank.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/SU-85_tank_destroyer_at_the_Muzeum_Polskiej_Techniki_Wojskowej_in_Warsaw.jpg?width=1000", credit: "SuperTank17 / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "sunderland", name: "Short Sunderland", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Short S.25", "Short Hythe", "Sunderland Mk 2", "Flying Porcupine", "Shorts Sunderland", "Sunderland bomber", "Short Sunderland III", "Short S.25 Sunderland"],
    fact: "The Short S.25 Sunderland is a British flying boat patrol bomber, developed and constructed by Short Brothers for the Royal Air Force (RAF).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Short_Sunderland_Mk_V_ExCC.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "super_etendard", name: "Dassault-Breguet Super Étendard", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Super Etendard", "Super Étendard", "Super-Etendard", "Super-Étendard", "SuperEtendards", "Super Etendards", "Dassault Super Etendard", "Dassault Super Étendard"],
    fact: "The Dassault-Breguet Super Étendard ( Étendard is French for \" battle flag \", cognate to English \"standard\") is a French retired carrier-borne strike fighter aircraft designed and",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Super_Etendard_-_RIAT_2005_%28cropped%29.jpg?width=1000", credit: "Tim Felce (Airwolfhound) / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/CdG-photo173.jpg?width=1000", credit: "Guillaume Rueda / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "super_hornet", name: "Boeing F/A-18E/F Super Hornet", category: "plane", era: "Modern", difficulty: 2,
    aliases: ["F-18E", "F-18f", "Fa-18e", "F-18 Rhino", "Superhornet", "Super Hornet", "Super Hornets", "F18 super hornet"],
    fact: "The Boeing F/A-18E and F/A-18F Super Hornet are a series of American supersonic twin-engine, carrier-capable, multirole fighter aircraft derived from the McDonnell Douglas F/A-18 Hornet.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Navy_071203-N-8923M-074_An_F-A-18F_Super_Hornet%2C_from_the_Red_Rippers_of_Strike_Fighter_Squadron_%28VFA%29_11%2C_makes_a_sharp_turn_above_the_flight_deck_aboard_the_Nimitz-class_nuclear-powered_aircraft_carrier_USS_Harry_S._Truman.jpg?width=1000", credit: "U.S. Navy photo by Seaman Kevin T. Murray Jr. / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "t33", name: "Lockheed T-33", category: "plane", era: "Cold War", difficulty: 3,
    aliases: [],
    fact: "The Lockheed T-33 Shooting Star (or T-Bird ) is a subsonic jet trainer designed and produced by the American aircraft manufacturer Lockheed.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gjirokastra_US_airplane.jpg?width=1000", credit: "Marc Morell / Wikimedia Commons (GFDL)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-33A-10-T-Bird.jpg?width=1000", credit: "Museum Pusat TNI AU Dirgantara Mandala, Yogyakarta, Indonesia / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-33_Boliviano.jpg?width=1000", credit: "Mateo33 / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "t35", name: "T-35", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["T-35 tank", "T-35 Landship", "T-35 heavy tank"],
    fact: "The T-35 was a Soviet multi- turreted heavy tank of the interwar period and early Second World War that saw limited service with the Red Army.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/P68l.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "t44", name: "T-44", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["T44A", "T-44M", "T-44-85", "T-44-100", "T-44 tank", "Obiekt 136", "Object 136", "T-44A Tank"],
    fact: "The T-44 was a medium tank developed and produced near the end of World War II by the Soviet Union.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T_44_in_Linija_Stalina_%28Belarus%29.jpg?width=1000", credit: "Yozas gubka / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9_%D1%82%D0%B0%D0%BD%D0%BA_%D0%A2-44_%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_pic1.JPG?width=1000", credit: "Alf van Beem / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "t50", name: "KAI T-50 Golden Eagle", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["FA50", "KTX-2", "FA-50", "TA-50", "TA-50IQ", "FA-50PH", "FA-50GF", "KAI T-50"],
    fact: "The KAI T-50 Golden Eagle ( Korean: 골든이글 ) is a family of advanced, supersonic, South Korean jet trainers, light combat aircraft, light strike fighters and multirole light fighters",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Philippine_Air_Force_FA-50PH.jpg?width=1000", credit: "Senior Airman Mitchell Corley / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "t6", name: "North American T-6 Texan", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["BC-1A", "SNJ-2", "SNJ-4", "SNB-5", "T6 Texan", "SNJ Texan", "T-6 Texan", "AT-6 Texan"],
    fact: "The North American Aviation T-6 Texan is a single-engined advanced trainer aircraft designed and produced by the American aircraft manufacturer North American Aviation.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/AT-6C_Texans_in_flight_1943.jpg?width=1000", credit: "USAAF / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Noorduyn_AT-16_Harvard_IIB%2C_UK_-_Air_Force_AN1449396.jpg?width=1000", credit: "Mike Freer - Touchdown-aviation / Wikimedia Commons (GFDL 1.2)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/FAC_T-6_with_phosphor_rockets_in_Korea.jpg?width=1000", credit: "USAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "t60", name: "T-60 tank", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["T-60", "T-60Z", "T-60 light tank", "T-60 scout tank"],
    fact: "The T-60 scout tank was a light tank produced by the Soviet Union from 1941 to 1942.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-60_%E2%80%98A_-_2317%E2%80%99_-_Patriot_Museum%2C_Kubinka_%2824524755458%29.jpg?width=1000", credit: "Alan Wilson from Stilton, Peterborough, Cambs, UK / Wikimedia Commons (CC BY-SA 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-J19893%2C_Russland%2C_Cholm_russischer_Beutepanzer.jpg?width=1000", credit: "Muck, Richard / Wikimedia Commons (CC BY-SA 3.0 de)" },
    ]
  },
  {
    id: "t70", name: "T-70", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["T-70 tank", "T-70 light tank", "T-90 anti-aircraft tank", "T-90 self-propelled anti-aircraft gun"],
    fact: "The T-70 is a light tank used by the Red Army during World War II, replacing both the T-60 scout tank for reconnaissance and the T-50 light infantry tank for infantry support.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-70%2C_technical_museum%2C_Togliatti-1.jpg?width=1000", credit: "ShinePhantom / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A2%D0%B0%D0%BD%D0%BA_%D0%A2-70_%28%D0%9C%D0%B5%D0%BB%D0%B8%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%2C_2018%29.jpg?width=1000", credit: "Стоялов Максим / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "ta152", name: "Focke-Wulf Ta 152", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Ta-152", "Ta 152", "Focke Wulf Ta 152H"],
    fact: "The Focke-Wulf Ta 152 is a German high-altitude fighter and interceptor aircraft designed by Kurt Tank and produced by Focke-Wulf.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Focke-Wulf_Ta-152_H_%2815269691122%29.jpg?width=1000", credit: "SDASM Archives / Wikimedia Commons (No known restrictions)" },
    ]
  },
  {
    id: "tejas", name: "HAL Tejas", category: "plane", era: "Modern", difficulty: 3,
    aliases: ["HAL LCA", "ADA Tejas", "LCA Tejas", "HAL Tejas NP", "LCA Mk-1A jet", "HAL Tejas Mk1A", "Tejas aircraft", "Hindustan Tejas"],
    fact: "The HAL Tejas ( literal translation</span>\"}]],\"parts\":[{\"template\":{\"target\":{\"wt\":\"Lit\",\"href\":\"./Template:Lit\"},\"params\":{\"1\":{\"wt\":\"Radiant\"}},\"i\":0}}]}'>lit.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tejas_MK1_in_service_for_7_years.jpg?width=1000", credit: "Goverrnment of India / Wikimedia Commons (GODL-India)" },
    ]
  },
  {
    id: "thaad", name: "Terminal High Altitude Area Defense", category: "missile", era: "Modern", difficulty: 3,
    aliases: ["THAAD", "FBX-T", "TPS-X", "Theater High Altitude Area Defense", "Forward Based X-Band Transportable", "Terminal High Altitude Area Defence", "Theater High Altitude Areal Defense", "Forward Based X-Band - Transportable"],
    fact: "Terminal High Altitude Area Defense ( THAAD ), formerly Theater High Altitude Area Defense, is an American anti-ballistic missile defense system, deployed since 2008, designed to i",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_first_of_two_Terminal_High_Altitude_Area_Defense_%28THAAD%29_interceptors_is_launched_during_a_successful_intercept_test_-_US_Army.jpg?width=1000", credit: "The U.S. Army Ralph Scott/Missile Defense Agency/U.S. Department of Defense / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "tor", name: "Tor missile system", category: "missile", era: "Cold War", difficulty: 3,
    aliases: ["Sa15", "SA-15", "9K331", "SA-N-9", "Tor-M1", "Tor m1", "Klinok", "Tor m2"],
    fact: "The Tor ( Russian: Тор, lit. ' torus ' ) is an all-weather, low-to medium-altitude, short-range surface-to-air missile system designed for destroying airplanes, helicopters, cruise",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tor-M1_SAM_%282%29.jpg?width=1000", credit: "Vitaly V. Kuzmin / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "tortoise", name: "Tortoise heavy assault tank", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["A39 Tortoise", "Tortoise tank"],
    fact: "The Tortoise heavy assault tank (A39) was a British heavy assault gun tank design developed during the Second World War, but never put into mass production.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IWM-MH-9865-Tortoise.jpg?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "trimotor", name: "Ford Trimotor", category: "plane", era: "Pioneer", difficulty: 3,
    aliases: ["Rr-5", "Ford JR", "Ford RR", "Ford C-3", "Ford C-4", "Ford C-9", "Ford 14A", "Ford 5-AT"],
    fact: "The Ford Trimotor (also called the \"Tri-Motor\", and nicknamed the \"Tin Goose\" ) is an American three-engined transport aircraft.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Trimotor_EAA.jpg?width=1000", credit: "Alexf / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Womens_City_Club_flyers_at_Wash._Airport.jpg?width=1000", credit: "Harris & Ewing / Wikimedia Commons (PD-1923)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/EL-2002-00560.jpg?width=1000", credit: "NASA Langley / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "tsr2", name: "BAC TSR-2", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["TSR-2", "TSR.2", "Supermarine Type 579", "Supermarine Type 571", "Supermarine Type 594", "English Electric TSR.2", "British Aircraft Corporation TSR.2", "British Aircraft Corporation TSR-2"],
    fact: "The British Aircraft Corporation TSR-2 was a cancelled supersonic strike and reconnaissance aircraft designed by the British Aircraft Corporation (BAC).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/BAC_TSR-2_at_Duxford.jpg?width=1000", credit: "Andrew Belding / Wikimedia Commons (CC BY 2.0)" },
    ]
  },
  {
    id: "tu134", name: "Tupolev Tu-134", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Tu-134", "Tu 134", "Tu-134A", "Tu-134S", "Tu-134M", "Tu-134B", "Tu-124A", "Tu-134LK"],
    fact: "The Tupolev Tu-134 ( NATO reporting name: Crusty ) is a twin-engined, narrow-body jet airliner built in the Soviet Union for short and medium-haul routes from 1966 to 1989.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tretyakovo_Tupolev_Tu-134.jpg?width=1000", credit: "Leonid Faerberg (transport-photo.com) / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "tu154", name: "Tupolev Tu-154", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["TU154", "Tu-154", "TU154M", "Ty-154", "Ty 154", "Tu 154", "Ту-154", "Ty-154M"],
    fact: "The Tupolev Tu-154 ( Russian: Туполев Ту-154; NATO reporting name: \" Careless \") is a three-engined, medium-range, narrow-body airliner designed in the mid-1960s and manufactured by Tupolev.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tupolev_Tu-154M%2C_Iran_Air_Tours_JP6511800.jpg?width=1000", credit: "Aktug Ates / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "tunnan", name: "Saab 29 Tunnan", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["J 29", "Tunnan", "Saab 29", "Saab-29", "SAAB J29", "Saab J-29", "Saab J 29", "Saab J29B"],
    fact: "The Saab 29 Tunnan (\"The Barrel\"), colloquially Flygande Tunnan, or The Flying Barrel in English, is an early jet-powered fighter aircraft designed and produced by the Swedish airc",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Saab_J_29F_Tunnan_29670_SE-DXB_p%C3%A5_uppvisning_i_Karlstad_2025_%28cropped%29.jpg?width=1000", credit: "TunaFish Spotting / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/J-29_jets_in_the_Congo.jpg?width=1000", credit: "unknown, Swedish Air Force / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/J_29A2.jpg?width=1000", credit: "Unknown author / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "type15", name: "Type 15 tank", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["ZTQ-15", "VT-5 tank", "Norinco VT-5", "Norinco ZTQ-15", "Norinco Type-15"],
    fact: "The Type 15 ( Chinese: 15式轻型坦克; pinyin: yīwǔ shì qīngxíng tǎnkè, also designated ZTQ15 ), codenamed the Black Panther ( Chinese: 黑豹; pinyin: hēi bào ), is a Chinese third generatio",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_15_tank_20221020.jpg?width=1000", credit: "颐园居 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/VT-5_light_tank_of_Bangladesh_Army.jpg?width=1000", credit: "Nafis Fuad Ayon / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "type16", name: "Type 16 MCV", category: "afv", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The Type 16 MCV ( 16式機動戦闘車, ichirokushiki kidousentousha; Type 16 Maneuver Combat Vehicle) is a wheeled armored fighting vehicle of the Japan Ground Self-Defense Force (JGSDF).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/JGSDF_Type_16_Maneuver_Combat_Vehicle_%2826-7978%29_left_front_view_at_JASDF_Hamamatsu_Air_Base_October_23%2C_2022_01.jpg?width=1000", credit: "Hunini / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kidousentousha.jpg?width=1000", credit: "Ministry of Defense - Japan / Technical Research and Development Institute (TRDI) / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "type63_mrl", name: "Type 63 multiple rocket launcher", category: "artillery", era: "Cold War", difficulty: 3,
    aliases: ["BM-12", "T-107", "Fajr-1", "T-107 MBRL"],
    fact: "The Type 63 multiple rocket launcher is a towed, 12-tube, 107mm rocket launcher produced by the People's Republic of China in the early 1960s and later exported and manufactured globally.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/H12_Type_63_multiple_rocket_launcher.JPG?width=1000", credit: "Bình Giang / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "type74", name: "Type 74 tank", category: "tank", era: "Cold War", difficulty: 3,
    aliases: ["STB-1"],
    fact: "The Type 74 ( 74式戦車, nana-yon-shiki-sensha ) was a main battle tank (MBT) of the Japan Ground Self-Defense Force (JGSDF).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tank_type74_ja02.jpg?width=1000", credit: "Miya.m / Wikimedia Commons (CC BY-SA 2.1 jp)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/STB-1_STB-2.jpg?width=1000", credit: "1Panzerjager1 / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_74_Tank_rear.JPEG?width=1000", credit: "LCPL CHANCE W. HAWORTH, USMC / Wikimedia Commons (PDM)" },
    ]
  },
  {
    id: "type90", name: "Type 90 tank", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Type 90 mbt", "Type 90 Kyu-maru", "Type 90 Kyū-maru"],
    fact: "The Type 90 tank ( 90式戦車, Kyū-maru-shiki-sensha ) is a main battle tank (MBT) of the Japan Ground Self-Defense Force (JGSDF).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Firing_Type_90_tank.jpg?width=1000", credit: "refeia / Wikimedia Commons (CC BY 2.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/JGSDF_MBT_Type_90_at_JGSDF_PI_center_3.jpg?width=1000", credit: "hohoho / Wikimedia Commons (CC BY-SA 2.5)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Type_90_Tank_-_2.jpg?width=1000", credit: "User:Megapixie / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "uh1y", name: "Bell UH-1Y Venom", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["UH-1Y", "Bell UH-1Y", "UH-1Y Huey", "UH-1Y Venom", "UH-1Y Twin Huey", "Yankee helicopter", "UH-1Y Huey helicopter", "UH-1Y Huey helicopters"],
    fact: "The Bell UH-1Y Venom (also called Super Huey ) is a twin-engine, 4-blade, medium-sized utility helicopter built by Bell Textron under the H-1 upgrade program of the United States Marine Corps.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/UH-1Y_Venom.jpg?width=1000", credit: "Cpl. Hailey D. Clay / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "universal_carrier", name: "Universal Carrier", category: "afv", era: "WW2", difficulty: 3,
    aliases: ["T16 Carrier", "Bren Carrier", "Bren Gun Carrier", "Universal Carriers", "T16 Windsor Carrier", "British Universal Carrier"],
    fact: "The Universal Carrier, popularly known as the Bren Gun Carrier from its light machine gun armament, was a British armoured tracked vehicle of the Second World War.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Universal_carrier_%28mortar_carrier%29_9-08-2008_14-53-48_%282%29.JPG?width=1000", credit: "Paul Hermans / Wikimedia Commons (CC BY-SA 3.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_the_United_Kingdom_1939-45_H25279.jpg?width=1000", credit: "Lockeyear W T (Lt), War Office official photographer / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_France_1939-40_O570.jpg?width=1000", credit: "Keating G (Lt), War Office official photographer / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "vab", name: "Véhicule de l'Avant Blindé", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Renault VAB", "Vehicule de l'Avant Blinde"],
    fact: "Steel armour providing protection against 7.62 mm bullets, artillery shell splinters and anti-personnel mines Upgrades with MEXAS composite armour and mine protection",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fin_de_d%C3%A9fil%C3%A9_14_juillet_2022%2C_Paris_Porte_d%27Orl%C3%A9ans_%281%29_04.jpg?width=1000", credit: "Ibex73 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
  {
    id: "vc10", name: "Vickers VC10", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["VC10", "BA VC10k", "BAC VC10", "BAC VC-10", "BAC Super VC10", "Vickers Super VC10", "Vickers Type 1100 VC10", "Vickers Type 1150 Super VC10"],
    fact: "The Vickers VC10 is a retired mid-sized, narrow-body long-range British jet airliner designed and built by Vickers-Armstrongs (Aircraft) Ltd and first flown at Brooklands, Surrey, in 1962.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Vickers_VC10_K3_over_the_North_Sea_Lofting.jpg?width=1000", credit: "Chris Lofting / Wikimedia Commons (GFDL 1.2)" },
    ]
  },
  {
    id: "viggen", name: "Saab 37 Viggen", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["JA 37", "AJ-37", "Viggen", "Saab 37", "37 Viggen", "Saab AJ37", "Saab Sk37", "Saab JA37"],
    fact: "The Saab 37 Viggen ( The Tufted Duck; the word also means The Thunderbolt ) is a single-seat, single-engine multirole combat aircraft designed and produced by the Swedish aircraft manufacturer Saab.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Viggen_%2852526298757%29.jpg?width=1000", credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)" },
    ]
  },
  {
    id: "whitley", name: "Armstrong Whitworth Whitley", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["AW38", "AW.38", "AW 38", "A.W.38", "Whitley I", "Whitley II", "Whitley IV", "AW Whitley"],
    fact: "The Armstrong Whitworth A.W.38 Whitley was a British medium/heavy bomber aircraft of the 1930s.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Armstrong_Whitworth_Whitley_in_flight_c1940.jpg?width=1000", credit: "RAF / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "wiesel", name: "Wiesel", category: "afv", era: "Modern", difficulty: 3,
    aliases: [],
    fact: "The Wiesel is a German light air-transportable armoured fighting vehicle or armoured weapons carrier ( German: Waffenträger ), produced by Rheinmetall.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/LLWaTrg_Wiesel_1.JPG?width=1000", credit: "Billyhill / Wikimedia Commons (CC BY-SA 4.0)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzermuseum_Munster_2010_1007_%281%29.JPG?width=1000", credit: "Banznerfahrer / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "wildcat_heli", name: "AgustaWestland AW159 Wildcat", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["AW159", "Future Lynx", "Wildcat AH1", "Lynx Wildcat", "Wildcat HMA2", "AW159 Wildcat", "Westland Wildcat", "AgustaWestland AW159"],
    fact: "The AgustaWestland AW159 Wildcat (previously called the Future Lynx and Lynx Wildcat ) is a military helicopter, developed by the British-Italian helicopter manufacturer AgustaWest",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Navy_Wildcat_Helicopter_MOD_45158434.jpg?width=1000", credit: "PO(Phot) Si Ethell / Wikimedia Commons (OGL v1.0)" },
    ]
  },
  {
    id: "yak1", name: "Yakovlev Yak-1", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Yak-1", "YaK-1b", "Yak-1M", "Yakovlev I-26", "Yakovlev Yak-1M"],
    fact: "The Yakovlev Yak-1 ( Russian: Яковлев Як-1 ) was a Soviet fighter aircraft of World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/I-26.jpg?width=1000", credit: "Unknown author Unknown author / Wikimedia Commons (PDM)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%98%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%AF%D0%BA-1%D0%91_14-%D0%B3%D0%BE_%D0%93%D0%98%D0%90%D0%9F_%D0%BD%D0%B0_%D0%BF%D0%BE%D0%BB%D0%B5%D0%B2%D0%BE%D0%BC_%D0%B0%D1%8D%D1%80%D0%BE%D0%B4%D1%80%D0%BE%D0%BC%D0%B5_%D0%BF%D0%B5%D1%80%D0%B5%D0%B4_%D0%B1%D0%BE%D0%B5%D0%B2%D1%8B%D0%BC_%D0%B2%D1%8B%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg?width=1000", credit: "Михаил Трахман / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "yak38", name: "Yakovlev Yak-38", category: "plane", era: "Cold War", difficulty: 3,
    aliases: ["Yak-38", "Jak-38", "Yak-38U", "Yak-38 Forger", "Yakovlev Yak-39", "Yakovlev Yak-38U", "Yakovlev Yak-36M", "Yakovlev Yak-38A"],
    fact: "The Yakovlev Yak-38 ( Russian: Яковлев Як-38; NATO reporting name: \" Forger \") was Soviet Naval Aviation 's only operational VTOL strike aircraft in addition to being its first ope",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yak-38_%2814598742%29.jpg?width=1000", credit: "Vladimir Rodionov / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "yak9", name: "Yakovlev Yak-9", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["Yak-9", "Yak 9", "Yak-9 Frank", "Yakovlev Yak-9P"],
    fact: "The Yakovlev Yak-9 ( Russian: Яковлев Як-9; NATO reporting name: Frank ) is a single- engine, single-seat multipurpose fighter aircraft used by the Soviet Union and its allies duri",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Yak-9U_at_Central_Air_Force_Museum_Monino_pic1.JPG?width=1000", credit: "Alf van Beem / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%98%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%AF%D0%BA-9%D0%94_%D0%BD%D0%B0%D0%B4_%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D0%B5%D0%BC_%286%29.jpg?width=1000", credit: "Yevgeny Khaldei (1916–1997) / Wikimedia Commons (Public domain)" },
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%98%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%AF%D0%BA-9%D0%A2_%D0%BD%D0%B0_%D0%B0%D1%8D%D1%80%D0%BE%D0%B4%D1%80%D0%BE%D0%BC%D0%B5_%D0%9F%D0%BE%D1%80%D1%82-%D0%90%D1%80%D1%82%D1%83%D1%80%D0%B0.jpg?width=1000", credit: "Yevgeny Khaldei (1916–1997) / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "z20", name: "Harbin Z-20", category: "helicopter", era: "Modern", difficulty: 3,
    aliases: ["Z-20", "Zhi-20"],
    fact: "The Harbin Z-20 ( Chinese: 直-20 ) is a series of Chinese medium-lift utility helicopter produced by the Harbin Aircraft Industry Group (HAIG).",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Z-20_Airshow_China_2022_fly.jpg?width=1000", credit: "中文： ​中国新闻社 English: China News Service / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "zis3", name: "76 mm divisional gun M1942 (ZiS-3)", category: "artillery", era: "WW2", difficulty: 3,
    aliases: ["ZIS-3", "76 K 42", "Ratsch-Bumm", "76mm M1942 divisional gun"],
    fact: "The 76-mm divisional gun M1942 ( ZiS-3 ) ( Russian: 76-мм дивизионная пушка обр.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/76_mm_divisional_gun_M1942_%28ZiS-3%29_001.jpg?width=1000", credit: "Torin / Wikimedia Commons (Public domain)" },
    ]
  },
  {
    id: "zsu572", name: "ZSU-57-2", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["57 ITPSV SU 57-2", "ZSU-57-2 Ob'yekt 500", "Sparka"],
    fact: "The ZSU-57-2 Ob'yekt 500 is a Soviet self-propelled anti-aircraft gun (SPAAG), armed with two 57 mm autocannons.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/ZSU-57-2_Hun_2010_02.jpg?width=1000", credit: "User:VargaA / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },

  /* -------------------------------------------- IDENTIFIED BY HAND */
  {
    id: "tacam_r2", name: "TACAM R-2", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Tank Destroyer Tacam R-2"],
    fact: "The TACAM R-2 (Tun Anticar pe Afet Mobil R-2 – \"Anti-tank gun on R-2 mobile gun carriage\") was a Romanian tank destroyer used during World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/TACAM_R-2_tank_destroyer.JPG?width=1000", credit: "Mircea87 / Wikimedia Commons (GFDL)" },
    ]
  },
  {
    id: "maresal", name: "Mareșal", category: "tank", era: "WW2", difficulty: 3,
    aliases: [],
    fact: "The Mareșal (meaning \"marshal\"), also known as the M-tank, was a Romanian-produced light tank destroyer from World War II.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mare%C8%99al_tank_destroyer_M-00_prototype.jpg?width=1000", credit: "Unknown author / Wikimedia Commons (CC BY-SA 3.0)" },
    ]
  },
  {
    id: "ozelot", name: "Ozelot", category: "afv", era: "Modern", difficulty: 3,
    aliases: ["LeFlaSys Ozelot", "Wiesel 2 Ozelot", "LeFlaSys"],
    fact: "A Wiesel 2 carrying four Stinger missiles, small enough to be flown in by helicopter.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ozelot.jpg?width=1000", credit: "Thomas Hartwig, / Wikimedia Commons (CC BY 2.0 de)" },
    ]
  },
  {
    id: "shturm_s", name: "Shturm-S", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["9P149", "9K114 Shturm", "Shturm", "AT-6 Spiral"],
    fact: "An MT-LB carrying a retractable launcher for AT-6 Spiral anti-tank missiles.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A8%D1%82%D1%83%D1%80%D0%BC-%D0%A1_-_%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%BA%D1%83%D1%80%D1%81%D0%B0%D0%BD%D1%82%D0%BE%D0%B2_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0_%D0%B1%D0%BE%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F_%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D1%85_%D0%B2%D0%BE%D0%B9%D1%81%D0%BA_%D0%B8_%D0%B0%D1%80%D1%82%D0%B8%D0%BB%D0%BB%D0%B5%D1%80%D0%B8%D0%B8_02.jpg?width=1000", credit: "Ольги Балашовой, Вадима Савицкого / Wikimedia Commons (CC BY 4.0)" },
    ]
  },
  {
    id: "sparka", name: "Type 80 SPAAG", category: "afv", era: "Cold War", difficulty: 3,
    aliases: ["Type 80", "WZ305", "Sparka", "Type 80 anti-aircraft"],
    fact: "China's twin 57 mm anti-aircraft tank, closely modelled on the Soviet ZSU-57-2 and built on a Type 69 hull.",
    images: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_80_57mm_anti-aircraft_artillery_20251112.jpg?width=1000", credit: "颐园居 / Wikimedia Commons (CC BY-SA 4.0)" },
    ]
  },
];

const CATEGORIES = ["tank", "afv", "plane", "helicopter", "missile", "artillery", "car", "ship"];
const ERAS = ["Age of Sail", "Pioneer", "WW1", "WW2", "Cold War", "Modern"];


/* Display names for categories whose id does not capitalise nicely. */
const CATEGORY_LABELS = {
  tank: "Tanks",
  afv: "AFVs",
  plane: "Aircraft",
  helicopter: "Helicopters",
  missile: "Missiles",
  artillery: "Artillery",
  car: "Cars",
  ship: "Ships"
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VEHICLES, CATEGORIES, ERAS, CATEGORY_LABELS };
}
