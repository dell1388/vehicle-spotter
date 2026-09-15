/* Vehicle Spotter — dataset.
 * Images: Wikimedia Commons, served via Special:FilePath (resizes on demand).
 * Each entry: id, name (canonical), aliases[], category, era, imageUrl, difficulty 1-3.
 * Aliases carry the real-world naming mess: nicknames, foreign names, NATO
 * reporting names, designation-only forms and common misspellings. The matcher
 * generates further variants automatically, so aliases only need the ones a
 * human would actually type.
 */
const VEHICLES = [
  /* ---------------------------------------------------------------- TANKS */
  {
    id: "m4_sherman", name: "M4 Sherman", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["Sherman", "M4", "Sherman tank", "M4A3", "M4A1", "Medium Tank M4"],
    fact: "The most-produced Allied tank of WWII — around 49,000 were built.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M4_Sherman_tank_-_Flickr_-_Joost_J._Bakker_IJmuiden.jpg?width=1000", credit: "Joost J. Bakker / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "t34", name: "T-34", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["T34", "T-34-85", "T-34/85", "T 34", "Tridtsatchetvyorka"],
    fact: "Its sloped armour forced a complete rethink of German tank design.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tank_T-34.JPG?width=1000", credit: "Cezary Piwowarski / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "tiger_i", name: "Tiger I", category: "tank", era: "WW2", difficulty: 1,
    aliases: ["Tiger", "Tiger 1", "Panzer VI", "Panzerkampfwagen VI", "PzKpfw VI", "Tiger tank"],
    fact: "So feared that Allied crews reported 'Tigers' far more often than existed.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-299-1805-16%2C_Nordfrankreich%2C_Panzer_VI_%28Tiger_I%29.2.jpg?width=1000", credit: "Scheck / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "panzer_iv", name: "Panzer IV", category: "tank", era: "WW2", difficulty: 3,
    aliases: ["Panzer 4", "Panzerkampfwagen IV", "PzKpfw IV", "Pz IV", "Mark IV panzer", "PanzerIV"],
    fact: "The only German tank in production for the entire war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzermuseum_Munster_2010_0128_b.jpg?width=1000", credit: "File:Panzermuseum Munster 2010 0128.JPG: Banznerfahrer derivative work: Georgfotoart / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "m1_abrams", name: "M1 Abrams", category: "tank", era: "Modern", difficulty: 1,
    aliases: ["Abrams", "M1", "M1A1", "M1A2", "M1A2 SEP", "Abrams tank"],
    fact: "Powered by a gas turbine — it whines rather than rumbles.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/M1A2_SEP_v3.jpg?width=1000", credit: "Spc. Kali Ecton / Wikimedia Commons (Public domain)"
  },
  {
    id: "challenger2", name: "Challenger 2", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Challenger II", "Challenger", "Chally 2", "CR2", "Challenger 2 MBT"],
    fact: "Holds the record for the longest confirmed tank-on-tank kill.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg?width=1000", credit: "Graeme Main / Wikimedia Commons (OGL v1.0)"
  },
  {
    id: "leopard2", name: "Leopard 2", category: "tank", era: "Modern", difficulty: 3,
    aliases: ["Leopard II", "Leopard", "Leo 2", "Leopard 2A6", "Leopard 2A7", "Leo2"],
    fact: "Germany's main battle tank, used by more than a dozen armies.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard_2_A7V_313_Bad_Frankenhausen_2024.JPG?width=1000", credit: "Boevaya mashina / Wikimedia Commons (CC BY-SA 3.0 de)"
  },

  /* --------------------------------------------------------------- PLANES */
  {
    id: "spitfire", name: "Supermarine Spitfire", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["Spitfire", "Spit", "Supermarine Spit", "Spitfire Mk IX"],
    fact: "Its elliptical wing was chosen for aerodynamics, not looks.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Spitfire_-_Season_Premiere_Airshow_2018_%28cropped%29.jpg?width=1000", credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "p51", name: "North American P-51 Mustang", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["P-51 Mustang", "P-51", "P51", "Mustang", "P-51D"],
    fact: "A British-requested Merlin engine turned it into a long-range escort.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/P-51-361.jpg?width=1000", credit: "USAAF/361st FG Association (via Al Richards) / Wikimedia Commons (Public domain)"
  },
  {
    id: "b17", name: "Boeing B-17 Flying Fortress", category: "plane", era: "WW2", difficulty: 1,
    aliases: ["B-17", "B17", "Flying Fortress", "Fortress", "B-17G", "Boeing B-17"],
    fact: "Named by a reporter who counted the machine guns bristling from it.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/B17_-_Chino_Airshow_2014_%28framed%29.jpg?width=1000", credit: "Airwolfhound / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "bf109", name: "Messerschmitt Bf 109", category: "plane", era: "WW2", difficulty: 2,
    aliases: ["Bf 109", "Bf109", "Me 109", "Me109", "Messerschmitt 109", "109", "Messerschmidt Bf 109"],
    fact: "The most-produced fighter aircraft in history — nearly 34,000 built.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-662-6659-37%2C_Flugzeug_Messerschmitt_Me_109.jpg?width=1000", credit: "Hebenstreit / Wikimedia Commons (CC BY-SA 3.0 de)"
  },
  {
    id: "p38", name: "Lockheed P-38 Lightning", category: "plane", era: "WW2", difficulty: 3,
    aliases: ["P-38", "P38", "P-38 Lightning", "Lightning", "Fork-tailed devil"],
    fact: "German pilots called it 'der Gabelschwanz-Teufel' — the fork-tailed devil.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/P38_Lightning.jpg?width=1000", credit: "CindyN / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "f14", name: "Grumman F-14 Tomcat", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-14", "F14", "Tomcat", "F-14 Tomcat", "F-14D"],
    fact: "Its wings sweep back automatically as it accelerates.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg?width=1000", credit: "U.S. Navy photo / Wikimedia Commons (Public domain)"
  },
  {
    id: "sr71", name: "Lockheed SR-71 Blackbird", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["SR-71", "SR71", "Blackbird", "SR-71 Blackbird", "Habu"],
    fact: "It leaked fuel on the ground — the panels only sealed once hot.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_SR-71_Blackbird.jpg?width=1000", credit: "USAF / Judson Brohmer / Wikimedia Commons (Public domain)"
  },
  {
    id: "a10", name: "Fairchild Republic A-10 Thunderbolt II", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["A-10", "A10", "Warthog", "A-10 Warthog", "Thunderbolt II", "A-10C"],
    fact: "The airframe was essentially built around its 30 mm rotary cannon.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Fairchild_Republic_A-10_Thunderbolt_II_-_32156159151.jpg?width=1000", credit: "Master Sgt. William Greer, U.S. Air Force / Wikimedia Commons (Public domain)"
  },
  {
    id: "f16", name: "General Dynamics F-16 Fighting Falcon", category: "plane", era: "Cold War", difficulty: 2,
    aliases: ["F-16", "F16", "Fighting Falcon", "Viper", "F-16 Falcon"],
    fact: "Pilots almost universally call it the Viper, never the Fighting Falcon.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/F-16_June_2008.jpg?width=1000", credit: "Master Sgt. Andy Dunaway / Wikimedia Commons (Public domain)"
  },
  {
    id: "concorde", name: "Concorde", category: "plane", era: "Cold War", difficulty: 1,
    aliases: ["Aerospatiale/BAC Concorde", "BAC Concorde", "Concord", "Supersonic Concorde"],
    fact: "Cruised at Mach 2 — New York to London in under three hours.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/British_Airways_Concorde_G-BOAC_03.jpg?width=1000", credit: "Eduard Marmet / Wikimedia Commons (CC BY-SA 3.0)"
  },

  /* ----------------------------------------------------------------- CARS */
  {
    id: "model_t", name: "Ford Model T", category: "car", era: "Pioneer", difficulty: 1,
    aliases: ["Model T", "Tin Lizzie", "T-Ford", "Ford T", "ModelT"],
    fact: "15 million built — the car that put the world on wheels.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1925_Ford_Model_T_touring.jpg?width=1000", credit: "ModelTMitch / Wikimedia Commons (Public domain)"
  },
  {
    id: "beetle", name: "Volkswagen Beetle", category: "car", era: "Cold War", difficulty: 1,
    aliases: ["VW Beetle", "Beetle", "Bug", "VW Bug", "Käfer", "Kafer", "Volkswagen Type 1", "Type 1", "VW Kafer"],
    fact: "Production ran for 65 years, ending in Mexico in 2003.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/VW_K%C3%A4fer_Baujahr_1966.jpg?width=1000", credit: "Vwexport1300 / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "mustang_car", name: "Ford Mustang", category: "car", era: "Cold War", difficulty: 1,
    aliases: ["Mustang", "Mustang 1965", "1965 Mustang", "Ford Mustang GT", ],
    fact: "Created the 'pony car' class; 400,000 sold in its first year.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/1965_Ford_Mustang_2D_Hardtop_Front.jpg?width=1000", credit: "Kroelleboelle / Wikimedia Commons (CC BY-SA 3.0)"
  },
  {
    id: "countach", name: "Lamborghini Countach", category: "car", era: "Cold War", difficulty: 2,
    aliases: ["Countach", "Lambo Countach", "Lamborghini Contach", "Countach LP400"],
    fact: "Its name is a Piedmontese exclamation roughly meaning 'wow'.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini_Countach_-_Flickr_-_exfordy_%282%29_%28cropped-2%29.jpg?width=1000", credit: "Brian Snelson from Hockley, Essex, England / Wikimedia Commons (CC BY 2.0)"
  },
  {
    id: "2cv", name: "Citroën 2CV", category: "car", era: "Cold War", difficulty: 2,
    aliases: ["2CV", "Citroen 2CV", "Deux Chevaux", "2 CV", "Duck", "Ente", "Tin Snail"],
    fact: "Designed to carry a farmer and eggs across a ploughed field unbroken.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Citroen_2CV_1X7A7979.jpg?width=1000", credit: "Alexander Migl / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "mini", name: "Mini", category: "car", era: "Cold War", difficulty: 3,
    aliases: ["Classic Mini", "Morris Mini-Minor", "Mini Minor", "Austin Seven", "Mini Cooper", "BMC Mini", "Morris Mini"],
    fact: "Its transverse engine layout became the template for small cars.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Morris_Mini-Minor_1959_%28621_AOK%29.jpg?width=1000", credit: "DeFacto / Wikimedia Commons (CC BY-SA 2.5)"
  },
  {
    id: "willys_jeep", name: "Willys MB Jeep", category: "car", era: "WW2", difficulty: 1,
    aliases: ["Jeep", "Willys Jeep", "Willys MB", "Willys", "MB Jeep", "GP", "Army jeep"],
    fact: "Eisenhower named it one of the decisive weapons of the war.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Covered_Willy%27s_jeep_Wings_Over_Wine_Country_2007.JPG?width=1000", credit: "BrokenSphere / Wikimedia Commons (CC BY 3.0)"
  },

  /* ---------------------------------------------------------------- SHIPS */
  {
    id: "uss_missouri", name: "USS Missouri", category: "ship", era: "WW2", difficulty: 2,
    aliases: ["Missouri", "BB-63", "Mighty Mo", "USS Missouri BB-63", "Big Mo", "Iowa class battleship"],
    fact: "Japan's formal surrender was signed on her deck in Tokyo Bay, 1945.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Missouri_post_refit.JPG?width=1000", credit: "Unknown / Wikimedia Commons (Public domain)"
  },
  {
    id: "hms_victory", name: "HMS Victory", category: "ship", era: "Age of Sail", difficulty: 2,
    aliases: ["Victory", "Nelson's flagship", "HMS Victory 1765"],
    fact: "Nelson's flagship at Trafalgar — still a commissioned warship today.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/HMSVictoryPortsmouthEngland_%28version_2%29.jpg?width=1000", credit: "User:Cimosteve (modified by MARC912374) / Wikimedia Commons (CC0)"
  },
  {
    id: "titanic", name: "RMS Titanic", category: "ship", era: "Pioneer", difficulty: 1,
    aliases: ["Titanic", "SS Titanic", "RMS Titanic 1912"],
    fact: "Her sister ships Olympic and Britannic looked near-identical.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/RMS_Titanic_3_%28cropped_to_ship%29.jpg?width=1000", credit: "Francis Godolphin Osbourne Stuart / Wikimedia Commons (Public domain)"
  },
  {
    id: "nimitz", name: "USS Nimitz", category: "ship", era: "Modern", difficulty: 3,
    aliases: ["Nimitz", "CVN-68", "USS Nimitz CVN-68", "Nimitz class carrier", "Nimitz-class aircraft carrier"],
    fact: "Two reactors let her steam for over 20 years without refuelling.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Nimitz_%28CVN-68%29.jpg?width=1000", credit: "United States Navy / Wikimedia Commons (Public domain)"
  },

  /* ---------------------------------------------------------- HELICOPTERS */
  {
    id: "huey", name: "Bell UH-1 Iroquois", category: "helicopter", era: "Cold War", difficulty: 1,
    aliases: ["Huey", "UH-1", "UH1", "UH-1 Huey", "Iroquois", "Bell UH-1", "Bell Huey", ],
    fact: "Officially the Iroquois, but the 'HU-1' designation stuck as Huey.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/UH1_Huey_-_Fly_Navy_2017_%2826938005897%29.jpg?width=1000", credit: "Airwolfhound from Hertfordshire, UK / Wikimedia Commons (CC BY-SA 2.0)"
  },
  {
    id: "apache", name: "Boeing AH-64 Apache", category: "helicopter", era: "Modern", difficulty: 1,
    aliases: ["Apache", "AH-64", "AH64", "AH-64D", "Apache Longbow", "Longbow", "Hughes AH-64"],
    fact: "The mast-mounted radar dome lets it target from behind cover.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/AH-64D_Apache_Longbow.jpg?width=1000", credit: "\"Photo Courtesy of U.S. Army\" - by Tech. Sgt. Andy Dunaway / Wikimedia Commons (Public domain)"
  },
  {
    id: "hind", name: "Mil Mi-24", category: "helicopter", era: "Cold War", difficulty: 3,
    aliases: ["Mi-24", "Mi24", "Hind", "Mil Mi-24 Hind", "Mi-24 Hind", "Krokodil"],
    fact: "A gunship that also carries troops — crews nicknamed it the Crocodile.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mi24CP_%28modified%29_b.jpg?width=1000", credit: "File:Mi24CP (modified).jpg: Cezary Piwowarskimodified by FOX 52 derivative work: Georgfotoart / Wikimedia Commons (CC BY-SA 4.0)"
  },
  {
    id: "chinook", name: "Boeing CH-47 Chinook", category: "helicopter", era: "Modern", difficulty: 2,
    aliases: ["Chinook", "CH-47", "CH47", "Wokka", "Boeing Chinook", "Vertol CH-47"],
    fact: "Tandem rotors mean no tail rotor — and a lot of lift.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/CH-47_assigned_to_3rd_General_Support_Aviation_Battalion%2C_82nd_Combat_Aviation_Brigade.jpg?width=1000", credit: "Sgt. Steven Galimore / Wikimedia Commons (CC0)"
  }
];

const CATEGORIES = ["tank", "plane", "car", "ship", "helicopter"];
const ERAS = ["Age of Sail", "Pioneer", "WW2", "Cold War", "Modern"];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VEHICLES, CATEGORIES, ERAS };
}
