/* Vehicle Spotter — pictures the dataset could not place.
 *
 * Photographs found on a vehicle's own Wikipedia article whose filename does
 * not name that vehicle, so the harvester would not attach them to an entry.
 * They are usually a variant, a relative, a rival shown for comparison, or
 * something else entirely. The entry builder shows them one at a time and asks
 * what they are; the article each came from is offered as a starting guess.
 */
const CANDIDATES = [
  {
    id: "panzer35t__pz_35t_001_russian_41_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pz_35T_001_russian_41.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Panzer 35(t)", entry: "panzer35t", category: "tank", era: "WW2"
  },
  {
    id: "panzer35t__tacam_r_2_tank_destroyer_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/TACAM_R-2_tank_destroyer.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Panzer 35(t)", entry: "panzer35t", category: "tank", era: "WW2"
  },
  {
    id: "stug4__przybycie_niemieckich_posi_k_w_wojskowyc",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Przybycie_niemieckich_posi%C5%82k%C3%B3w_wojskowych_do_Salonik_%282-597%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Sturmgeschütz IV", entry: "stug4", category: "tank", era: "WW2"
  },
  {
    id: "jagdpanzer4__sdkfz162_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SdKfz162.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Jagdpanzer IV", entry: "jagdpanzer4", category: "tank", era: "WW2"
  },
  {
    id: "jagdpanzer4__0623_moskau_2015_panzermuseum_kubinka_26",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/0623_-_Moskau_2015_-_Panzermuseum_Kubinka_%2826374499726%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Jagdpanzer IV", entry: "jagdpanzer4", category: "tank", era: "WW2"
  },
  {
    id: "su76__ungheria_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/UNGHERIA.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "SU-76", entry: "su76", category: "tank", era: "WW2"
  },
  {
    id: "su76__national_museum_of_military_history_bulg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/National_Museum_of_Military_History%2C_Bulgaria%2C_Sofia_2012_PD_229.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "SU-76", entry: "su76", category: "tank", era: "WW2"
  },
  {
    id: "isu122__dzia_o_samobie_ne_w_malborku_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dzia%C5%82o_samobie%C5%BCne_w_Malborku.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "ISU-122", entry: "isu122", category: "tank", era: "WW2"
  },
  {
    id: "t44__char_t_34_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Char_T-34.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "T-44", entry: "t44", category: "tank", era: "WW2"
  },
  {
    id: "t44___44_pic1_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9_%D1%82%D0%B0%D0%BD%D0%BA_%D0%A2-44_%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_pic1.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "T-44", entry: "t44", category: "tank", era: "WW2"
  },
  {
    id: "t60__bundesarchiv_bild_183_j19893_russland_ch",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_183-J19893%2C_Russland%2C_Cholm_russischer_Beutepanzer.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "T-60 tank", entry: "t60", category: "tank", era: "WW2"
  },
  {
    id: "t60__mare_al_tank_destroyer_m_00_prototype_jp",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mare%C8%99al_tank_destroyer_M-00_prototype.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "T-60 tank", entry: "t60", category: "tank", era: "WW2"
  },
  {
    id: "t70___70_2018_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A2%D0%B0%D0%BD%D0%BA_%D0%A2-70_%28%D0%9C%D0%B5%D0%BB%D0%B8%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%2C_2018%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "T-70", entry: "t70", category: "tank", era: "WW2"
  },
  {
    id: "m8_greyhound__t22_armored_car_haugh_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/T22-armored-car-haugh.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M8 Greyhound", entry: "m8_greyhound", category: "afv", era: "WW2"
  },
  {
    id: "m8_greyhound__m20_armored_utility_vehicle_1_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/M20_Armored_Utility_Vehicle_1.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M8 Greyhound", entry: "m8_greyhound", category: "afv", era: "WW2"
  },
  {
    id: "m36__62_cavalrymen_with_a_destroyed_patton_ta",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/62_Cavalrymen_with_a_destroyed_Patton_Tank.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M36 tank destroyer", entry: "m36", category: "tank", era: "WW2"
  },
  {
    id: "m36__vojna_po_ta_maribor_s_tankom_na_kamionu_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vojna_po%C5%A1ta_Maribor_s_tankom_na_kamionu_na_dan_%C5%A1ofejev_1958.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M36 tank destroyer", entry: "m36", category: "tank", era: "WW2"
  },
  {
    id: "m7_priest__the_british_army_in_the_normandy_campaig",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_the_Normandy_Campaign_1944_B6657.2.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M7 Priest", entry: "m7_priest", category: "artillery", era: "WW2"
  },
  {
    id: "bishop__the_british_army_in_italy_1943_na7710_jp",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_Italy_1943_NA7710.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Bishop", entry: "bishop", category: "artillery", era: "WW2"
  },
  {
    id: "comet_tank__armoured_maintenance_vehicle_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Armoured_Maintenance_Vehicle.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Comet", entry: "comet_tank", category: "tank", era: "WW2"
  },
  {
    id: "renault_r35__1_fi_5_49_revue_militaire_place_broglie_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/1_FI_5_49_-_Revue_militaire%2C_place_Broglie._04_octobre_1938_%28archives_de_Strasbourg%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Renault R35", entry: "renault_r35", category: "tank", era: "WW2"
  },
  {
    id: "renault_r35__r_35_aberdeen_0003kprx_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/R-35-Aberdeen.0003kprx.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Renault R35", entry: "renault_r35", category: "tank", era: "WW2"
  },
  {
    id: "hotchkiss_h35__h_1935_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/H_1935.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Hotchkiss H35", entry: "hotchkiss_h35", category: "tank", era: "WW2"
  },
  {
    id: "hotchkiss_h35__panzer_frankreich_1940_raboe_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzer_Frankreich_1940_%28RaBoe%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Hotchkiss H35", entry: "hotchkiss_h35", category: "tank", era: "WW2"
  },
  {
    id: "p2640__ansaldo_p40_01_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ansaldo_P40_01.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "P26/40 tank", entry: "p2640", category: "tank", era: "WW2"
  },
  {
    id: "p2640__army_parade_of_italy_2011_46_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army_parade_of_Italy_2011_46.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "P26/40 tank", entry: "p2640", category: "tank", era: "WW2"
  },
  {
    id: "ab41__desant_strzelc_w_niemieckich_na_froncie_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Desant_strzelc%C3%B3w_niemieckich_na_froncie_w_po%C5%82udniowych_W%C5%82oszech_%282-2288%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Autoblindo Fiat-Ansaldo", entry: "ab41", category: "afv", era: "WW2"
  },
  {
    id: "chi_to__experimental105mm_anti_tank_self_propell",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Experimental105mm_anti-tank_self-propelled_gun_Ka-To_01.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 4 Chi-To medium tank", entry: "chi_to", category: "tank", era: "WW2"
  },
  {
    id: "chi_to__type5_75mm_tank_gun_01_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type5_75mm_tank_gun_01.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 4 Chi-To medium tank", entry: "chi_to", category: "tank", era: "WW2"
  },
  {
    id: "igo__ija_experimental_tank_no1_01_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/IJA_Experimental_tank_No1_01.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 89 I-Go medium tank", entry: "igo", category: "tank", era: "WW2"
  },
  {
    id: "igo__typ_89_otsu_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Typ_89_otsu.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 89 I-Go medium tank", entry: "igo", category: "tank", era: "WW2"
  },
  {
    id: "sdkfz234__niemieckie_samochody_pancerne_2_13060_jp",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Niemieckie_samochody_pancerne_%282-13060%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Sd.Kfz. 234", entry: "sdkfz234", category: "afv", era: "WW2"
  },
  {
    id: "sdkfz234__tatra103_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tatra103.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Sd.Kfz. 234", entry: "sdkfz234", category: "afv", era: "WW2"
  },
  {
    id: "sdkfz222__sdkfz222_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SdKfz222.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Leichter Panzerspähwagen", entry: "sdkfz222", category: "afv", era: "WW2"
  },
  {
    id: "ba10__sovietarmouredvehicle_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SovietArmouredVehicle.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BA-10", entry: "ba10", category: "afv", era: "WW2"
  },
  {
    id: "ba10__bundesarchiv_bild_101i_013_0068_18a_pole",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-013-0068-18A%2C_Polen%2C_Treffen_deutscher_und_sowjetischer_Soldaten.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BA-10", entry: "ba10", category: "afv", era: "WW2"
  },
  {
    id: "universal_carrier__the_british_army_in_the_united_kingdom_1",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_the_United_Kingdom_1939-45_H25279.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Universal Carrier", entry: "universal_carrier", category: "afv", era: "WW2"
  },
  {
    id: "universal_carrier__the_british_army_in_france_1939_40_o570_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_British_Army_in_France_1939-40_O570.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Universal Carrier", entry: "universal_carrier", category: "afv", era: "WW2"
  },
  {
    id: "dukw__mobyduck_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mobyduck.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "DUKW", entry: "dukw", category: "afv", era: "WW2"
  },
  {
    id: "gepard__dutch_prtl_cheetah_spaag_radar_operator_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_PRTL_Cheetah_SPAAG_Radar_Operator_Position.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Flakpanzer Gepard", entry: "gepard", category: "afv", era: "Cold War"
  },
  {
    id: "gepard__het_vullen_van_het_munitiemagazijn_van_d",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Het_vullen_van_het_munitiemagazijn_van_de_Pantserrups_Tegen_Luchtdoelen_%28PRTL%29_met_35_mm_brisantgranaten_2053-011-035.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Flakpanzer Gepard", entry: "gepard", category: "afv", era: "Cold War"
  },
  {
    id: "wiesel__ozelot_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ozelot.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Wiesel", entry: "wiesel", category: "afv", era: "Modern"
  },
  {
    id: "wiesel__panzermuseum_munster_2010_1007_1_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Panzermuseum_Munster_2010_1007_%281%29.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Wiesel", entry: "wiesel", category: "afv", era: "Modern"
  },
  {
    id: "brdm2__spw_40p2_ch_12_internationales_maritimes",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SPW-40P2_%28Ch%29%2C_12._Internationales_Maritimes-Fahrzeugtreffen%2C_Ribnitz-Damgarten_%28P1060695%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BRDM-2", entry: "brdm2", category: "afv", era: "Cold War"
  },
  {
    id: "brdm2__battle_of_konotop_18_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Battle_of_Konotop_18.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BRDM-2", entry: "brdm2", category: "afv", era: "Cold War"
  },
  {
    id: "btr60__zil_153_in_kubinka_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/ZiL-153_in_Kubinka.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BTR-60", entry: "btr60", category: "afv", era: "Cold War"
  },
  {
    id: "btr60__military_vehicles_moscow_1964_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Military_Vehicles_Moscow_1964.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BTR-60", entry: "btr60", category: "afv", era: "Cold War"
  },
  {
    id: "mtlb___02_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A8%D1%82%D1%83%D1%80%D0%BC-%D0%A1_-_%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0_%D0%BA%D1%83%D1%80%D1%81%D0%B0%D0%BD%D1%82%D0%BE%D0%B2_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0_%D0%B1%D0%BE%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F_%D1%80%D0%B0%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D1%85_%D0%B2%D0%BE%D0%B9%D1%81%D0%BA_%D0%B8_%D0%B0%D1%80%D1%82%D0%B8%D0%BB%D0%BB%D0%B5%D1%80%D0%B8%D0%B8_02.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "MT-LB", entry: "mtlb", category: "afv", era: "Cold War"
  },
  {
    id: "mtlb__mt_lbmb_with_mb2_combat_module_bronnitsy",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/MT-LBMB_with_MB2_combat_module_-_Bronnitsy_test_range.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "MT-LB", entry: "mtlb", category: "afv", era: "Cold War"
  },
  {
    id: "bmp3__destruction_of_russian_tanks_by_ukrainia",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Destruction_of_Russian_tanks_by_Ukrainian_troops_in_Mariupol_%284%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BMP-3", entry: "bmp3", category: "afv", era: "Modern"
  },
  {
    id: "bmp3__army_2020_178_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army-2020-178.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BMP-3", entry: "bmp3", category: "afv", era: "Modern"
  },
  {
    id: "bmd2__106th_guards_airborne_division_394_1_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/106th_Guards_Airborne_Division_%28394-1%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BMD-2", entry: "bmd2", category: "afv", era: "Cold War"
  },
  {
    id: "bmd2__slavicbrotherhood2020_09_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SlavicBrotherhood2020-09.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "BMD-2", entry: "bmd2", category: "afv", era: "Cold War"
  },
  {
    id: "shilka__naboj23_mm_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Naboj23_mm.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "ZSU-23-4 Shilka", entry: "shilka", category: "afv", era: "Cold War"
  },
  {
    id: "zsu572__type_80_57mm_anti_aircraft_artillery_202",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_80_57mm_anti-aircraft_artillery_20251112.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "ZSU-57-2", entry: "zsu572", category: "afv", era: "Cold War"
  },
  {
    id: "zsu572__iranian_army_ground_forces_new_equipment",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iranian_Army_Ground_Forces_New_Equipment_2019_%2832%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "ZSU-57-2", entry: "zsu572", category: "afv", era: "Cold War"
  },
  {
    id: "gvozdika___27_29384512417_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A3_%D0%9A%D0%B8%D1%94%D0%B2%D1%96_%D0%BD%D0%B0_%D0%A5%D1%80%D0%B5%D1%89%D0%B0%D1%82%D0%B8%D0%BA%D1%83_%D0%BF%D1%80%D0%BE%D0%B9%D1%88%D0%BE%D0%B2_%D0%B2%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D0%BF%D0%B0%D1%80%D0%B0%D0%B4_%D0%B7_%D0%BD%D0%B0%D0%B3%D0%BE%D0%B4%D0%B8_27-%D1%97_%D1%80%D1%96%D1%87%D0%BD%D0%B8%D1%86%D1%96_%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%96_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8_%2829384512417%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "2S1 Gvozdika", entry: "gvozdika", category: "artillery", era: "Cold War"
  },
  {
    id: "gvozdika__m1974_sp_howitzer_19910304_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/M1974-sp-howitzer-19910304.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "2S1 Gvozdika", entry: "gvozdika", category: "artillery", era: "Cold War"
  },
  {
    id: "akatsiya__parkpatriot2015part6_08_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/ParkPatriot2015part6-08.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "2S3 Akatsiya", entry: "akatsiya", category: "artillery", era: "Cold War"
  },
  {
    id: "m110__mk33_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mk33.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M110 howitzer", entry: "m110", category: "artillery", era: "Cold War"
  },
  {
    id: "m42_duster__people_s_liberation_army_lebanon_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/People%27s_Liberation_Army_%28Lebanon%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M42 Duster", entry: "m42_duster", category: "afv", era: "Cold War"
  },
  {
    id: "m88__commander_having_fun_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Commander_Having_Fun.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M88 recovery vehicle", entry: "m88", category: "afv", era: "Cold War"
  },
  {
    id: "m88__flcross_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/FLCross.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M88 recovery vehicle", entry: "m88", category: "afv", era: "Cold War"
  },
  {
    id: "lav25__marines_with_2nd_light_armored_vehicle_b",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Marines_with_2nd_Light_Armored_Vehicle_Battalion_float_test_Light_Armored_Vehicles_140326-M-SF718-007.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "LAV-25", entry: "lav25", category: "afv", era: "Modern"
  },
  {
    id: "lav25__usmc_110314_m_2740r_106_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/USMC-110314-M-2740R-106.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "LAV-25", entry: "lav25", category: "afv", era: "Modern"
  },
  {
    id: "aav7__aav_australia_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/AAV-australia.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Assault Amphibious Vehicle", entry: "aav7", category: "afv", era: "Modern"
  },
  {
    id: "aav7__aav_survivability_upgrade_su_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/AAV_Survivability_Upgrade_%28SU%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Assault Amphibious Vehicle", entry: "aav7", category: "afv", era: "Modern"
  },
  {
    id: "scimitar__overturned_cvr_t_on_murrell_bridge_in_fa",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Overturned_CVR%28T%29_on_Murrell_Bridge_in_Falklands.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "FV107 Scimitar", entry: "scimitar", category: "afv", era: "Cold War"
  },
  {
    id: "ferret__royal_tank_museum_92_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Tank_Museum_92.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Ferret armoured car", entry: "ferret", category: "afv", era: "Cold War"
  },
  {
    id: "amx13__ministro_de_defensa_acompa_al_presidente",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/MINISTRO_DE_DEFENSA_ACOMPA%C3%91%C3%93_AL_PRESIDENTE_OLLANTA_HUMALA_EN_LA_GRAN_PARADA_MILITAR_Y_DESFILE_C%C3%8DVICO_20125461145.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "AMX-13", entry: "amx13", category: "tank", era: "Cold War"
  },
  {
    id: "vab__inside_vab_2007_07_14_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_VAB_2007_07_14.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Véhicule de l'Avant Blindé", entry: "vab", category: "afv", era: "Cold War"
  },
  {
    id: "vab__french_medical_vab_dsc06841_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/French_medical_VAB_dsc06841.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Véhicule de l'Avant Blindé", entry: "vab", category: "afv", era: "Cold War"
  },
  {
    id: "type74__stb_1_stb_2_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/STB-1_STB-2.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 74 tank", entry: "type74", category: "tank", era: "Cold War"
  },
  {
    id: "type74__type_74_tank_rear_jpeg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Type_74_Tank_rear.JPEG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 74 tank", entry: "type74", category: "tank", era: "Cold War"
  },
  {
    id: "type90__jgsdf_mbt_type_90_at_jgsdf_pi_center_3_j",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/JGSDF_MBT_Type_90_at_JGSDF_PI_center_3.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 90 tank", entry: "type90", category: "tank", era: "Modern"
  },
  {
    id: "type90__japanese_type_90_tank_2_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Type_90_Tank_-_2.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 90 tank", entry: "type90", category: "tank", era: "Modern"
  },
  {
    id: "type16__kidousentousha_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kidousentousha.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 16 MCV", entry: "type16", category: "afv", era: "Modern"
  },
  {
    id: "type16___jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%E9%99%B8%E4%B8%8A%E8%87%AA%E8%A1%9B%E9%9A%8A_%E6%9D%B1%E9%83%A8%E6%96%B9%E9%9D%A2%E9%9A%8A_%E9%83%A8%E9%9A%8A%E7%AB%A0.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 16 MCV", entry: "type16", category: "afv", era: "Modern"
  },
  {
    id: "k1_tank__2id_us_rok_combined_division_conducts_jo",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/2ID_US-ROK_Combined_Division_conducts_joint_live_fire_exercise_for_Freedom_Shield_24_-_11_of_13.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "K1 tank", entry: "k1_tank", category: "tank", era: "Modern"
  },
  {
    id: "k1_tank__2011_11_11_11_7633936210_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/2011.11.11_%EC%9C%A1%EA%B5%B011%EC%82%AC%EB%8B%A8_%EC%A0%95%EB%B9%84%EB%8C%80%EB%8C%80_%EC%A0%84%EC%B0%A8%EC%A0%95%EB%B9%84_%287633936210%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "K1 tank", entry: "k1_tank", category: "tank", era: "Modern"
  },
  {
    id: "namer__im000656_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/IM000656.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Namer", entry: "namer", category: "afv", era: "Modern"
  },
  {
    id: "namer__nammer004_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nammer004.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Namer", entry: "namer", category: "afv", era: "Modern"
  },
  {
    id: "oplot__bm_oplot_kyiv_2018_04_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/BM_Oplot%2C_Kyiv_2018%2C_04.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "T-84", entry: "oplot", category: "tank", era: "Modern"
  },
  {
    id: "oplot__2012_eurosatory_ukraine_tank_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/2012_Eurosatory_Ukraine_tank.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "T-84", entry: "oplot", category: "tank", era: "Modern"
  },
  {
    id: "al_khalid__chinese_90_iim_mbt_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_90-IIM_MBT.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Al-Khalid tank", entry: "al_khalid", category: "tank", era: "Modern"
  },
  {
    id: "cv90__cv_90_mk_iv_siaf_2022_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/CV_90_Mk_IV_SIAF-2022.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Combat Vehicle 90", entry: "cv90", category: "afv", era: "Modern"
  },
  {
    id: "cv90__cv90120_mspo_2007_photo_2_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/CV90120%2C_MSPO_2007%2C_photo_2.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Combat Vehicle 90", entry: "cv90", category: "afv", era: "Modern"
  },
  {
    id: "rosomak__tag_der_polnischen_streikr_fte_486167427",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tag_der_polnischen_Streikr%C3%A4fte_%2848616742787%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "KTO Rosomak", entry: "rosomak", category: "afv", era: "Modern"
  },
  {
    id: "rosomak__smk_120mm_rak_testy_poligon_nowa_d_ba_20",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SMK_120mm_RAK%2C_testy%2C_poligon_Nowa_D%C4%99ba_2019_01.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "KTO Rosomak", entry: "rosomak", category: "afv", era: "Modern"
  },
  {
    id: "patria_amv__artyleryjski_w_z_dowodzenia_awd_na_podzw",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Artyleryjski_W%C3%B3z_Dowodzenia_%28AWD%29_na_podzwoziu_KTO_Rosomak_modu%C5%82u_batalionowego_%22Rak%22_podczas_test%C3%B3w_odbiorczych._Poligon_Nowa_D%C4%99ba_2019.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Patria AMV", entry: "patria_amv", category: "afv", era: "Modern"
  },
  {
    id: "patria_amv__presentation_of_svarun_8x8_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Presentation_of_Svarun_8x8.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Patria AMV", entry: "patria_amv", category: "afv", era: "Modern"
  },
  {
    id: "centauro__army_parade_of_italy_2011_22_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army_parade_of_Italy_2011_22.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Centauro", entry: "centauro", category: "afv", era: "Modern"
  },
  {
    id: "challenger3__des_2024_100_0104_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/DES_2024_100_0104.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Challenger 3", entry: "challenger3", category: "tank", era: "Modern"
  },
  {
    id: "vickers_mbt__amisom_forces_in_saa_moja_outside_kismay",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/AMISOM_forces_in_Saa%27moja_outside_Kismayo_14_%288049898219%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Vickers MBT", entry: "vickers_mbt", category: "tank", era: "Cold War"
  },
  {
    id: "type15__vt_5_light_tank_of_bangladesh_army_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/VT-5_light_tank_of_Bangladesh_Army.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Type 15 tank", entry: "type15", category: "tank", era: "Modern"
  },
  {
    id: "m1128__flickr_dvidshub_third_army_moving_stryke",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flickr_-_DVIDSHUB_-_Third_Army_Moving_Strykers_to_Afghanistan.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M1128 mobile gun system", entry: "m1128", category: "afv", era: "Modern"
  },
  {
    id: "m1128__flickr_the_u_s_army_range_fire_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Flickr_-_The_U.S._Army_-_Range_fire.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "M1128 mobile gun system", entry: "m1128", category: "afv", era: "Modern"
  },
  {
    id: "dh2__the_royal_flying_corps_on_the_western_fr",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Royal_Flying_Corps_on_the_Western_Front%2C_1914-1918_Q11874.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Airco DH.2", entry: "dh2", category: "plane", era: "WW1"
  },
  {
    id: "eindecker__ms_h_leb_09_05_07r_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/MS_H_LeB_09.05.07R.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Fokker Eindecker fighters", entry: "eindecker", category: "plane", era: "WW1"
  },
  {
    id: "eindecker__parschau_s_e1_15_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Parschau%27s_E1-15.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Fokker Eindecker fighters", entry: "eindecker", category: "plane", era: "WW1"
  },
  {
    id: "sopwith_pup__100_years_of_the_raf_mod_45163717_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/100_years_of_the_RAF_MOD_45163717.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Sopwith Pup", entry: "sopwith_pup", category: "plane", era: "WW1"
  },
  {
    id: "sopwith_triplane__soptri5_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SopTri5.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Sopwith Triplane", entry: "sopwith_triplane", category: "plane", era: "WW1"
  },
  {
    id: "sopwith_triplane__soptri3_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SopTri3.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Sopwith Triplane", entry: "sopwith_triplane", category: "plane", era: "WW1"
  },
  {
    id: "jn4__jn_4_ambulance_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/JN-4_ambulance.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Curtiss JN Jenny", entry: "jn4", category: "plane", era: "WW1"
  },
  {
    id: "jn4__jn_4_and_wingwalker_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/JN-4_and_wingwalker.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Curtiss JN Jenny", entry: "jn4", category: "plane", era: "WW1"
  },
  {
    id: "p26__p_26_maloney_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/P-26_Maloney.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Boeing P-26 Peashooter", entry: "p26", category: "plane", era: "Pioneer"
  },
  {
    id: "i16__soviet_volunteer_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Soviet_volunteer.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Polikarpov I-16", entry: "i16", category: "plane", era: "WW2"
  },
  {
    id: "i16__khalkhin_gol_soviet_pilots_august_1939_j",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Khalkhin_Gol_Soviet_pilots_august_1939.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Polikarpov I-16", entry: "i16", category: "plane", era: "WW2"
  },
  {
    id: "gladiator__arthur_chin_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Arthur_Chin.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Gloster Gladiator", entry: "gladiator", category: "plane", era: "WW2"
  },
  {
    id: "gladiator__royal_air_force_operations_in_the_middle",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Air_Force_Operations_in_the_Middle_East_and_North_Africa%2C_1939-1943._CM354.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Gloster Gladiator", entry: "gladiator", category: "plane", era: "WW2"
  },
  {
    id: "trimotor__womens_city_club_flyers_at_wash_airport_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Womens_City_Club_flyers_at_Wash._Airport.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Ford Trimotor", entry: "trimotor", category: "plane", era: "Pioneer"
  },
  {
    id: "trimotor__el_2002_00560_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/EL-2002-00560.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Ford Trimotor", entry: "trimotor", category: "plane", era: "Pioneer"
  },
  {
    id: "lysander__royal_air_force_italy_the_balkans_and_so",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Air_Force-_Italy%2Cthe_Balkans_and_South-east_Europe%2C_1942-1945._CNA3132.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Westland Lysander", entry: "lysander", category: "plane", era: "WW2"
  },
  {
    id: "defiant__iwm_ch2526_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/IWM_CH2526.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Boulton Paul Defiant", entry: "defiant", category: "plane", era: "WW2"
  },
  {
    id: "defiant__iwm_atp_12826d_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/IWM_ATP_12826D.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Boulton Paul Defiant", entry: "defiant", category: "plane", era: "WW2"
  },
  {
    id: "seafire__fleet_air_arm_trials_aboard_hms_victorio",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fleet_Air_Arm_Trials%2C_Aboard_HMS_Victorious._23-25_September_1942._A12119.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Supermarine Seafire", entry: "seafire", category: "plane", era: "WW2"
  },
  {
    id: "seafire__aircraft_in_hangar_of_hms_argus_i49_c194",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Aircraft_in_hangar_of_HMS_Argus_%28I49%29_c1942.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Supermarine Seafire", entry: "seafire", category: "plane", era: "WW2"
  },
  {
    id: "buffalo__fujio_sakaguchi_s_nakajima_ki_27_shot_do",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Fujio_Sakaguchi%27s_Nakajima_Ki-27_shot_down_near_Rangoon%2C_24_January_1942.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Brewster F2A Buffalo", entry: "buffalo", category: "plane", era: "WW2"
  },
  {
    id: "kingfisher__uss_iowa_bb_61_planes_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Iowa_%28BB-61%29_Planes.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Vought OS2U Kingfisher", entry: "kingfisher", category: "plane", era: "WW2"
  },
  {
    id: "kingfisher__la_havane_mus_e_de_la_r_volution_avion_j",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/La_Havane-Mus%C3%A9e_de_la_R%C3%A9volution-Avion.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Vought OS2U Kingfisher", entry: "kingfisher", category: "plane", era: "WW2"
  },
  {
    id: "c46__c_46_medical_flight_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/C-46_medical_flight.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Curtiss C-46 Commando", entry: "c46", category: "plane", era: "WW2"
  },
  {
    id: "c46__c_46f_quicktrans_busanda_6287464059_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/C-46F_Quicktrans_Busanda_%286287464059%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Curtiss C-46 Commando", entry: "c46", category: "plane", era: "WW2"
  },
  {
    id: "hudson__pbo_1_vp_82_nas_argentia_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/PBO-1_VP-82_NAS_Argentia.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed Hudson", entry: "hudson", category: "plane", era: "WW2"
  },
  {
    id: "hudson__raaf_13_sqn_awm_ac0069_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAAF_13_Sqn_%28AWM_AC0069%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed Hudson", entry: "hudson", category: "plane", era: "WW2"
  },
  {
    id: "beaufort__beauproto1_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beauproto1.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Bristol Beaufort", entry: "beaufort", category: "plane", era: "WW2"
  },
  {
    id: "beaufort__ringed_with_menace_awm_artv09061_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ringed_with_menace_%28AWM_ARTV09061%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Bristol Beaufort", entry: "beaufort", category: "plane", era: "WW2"
  },
  {
    id: "whitley__royal_air_force_bomber_command_1939_1941",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Air_Force_Bomber_Command%2C_1939-1941._CH1764.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Armstrong Whitworth Whitley", entry: "whitley", category: "plane", era: "WW2"
  },
  {
    id: "hampden___2_24_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80_2-%D0%B9_%D1%8D%D1%81%D0%BA%D0%B0%D0%B4%D1%80%D0%B8%D0%BB%D1%8C%D0%B8_24_%D0%BC%D0%B8%D0%BD%D0%BD%D0%BE-%D1%82%D0%BE%D1%80%D0%BF%D0%B5%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B0%D0%B2%D0%B8%D0%B0%D0%BF%D0%BE%D0%BB%D0%BA%D0%B0_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%97%D0%B0%D1%85%D0%B0%D1%80%D0%BE%D0%B2%D0%B8%D1%87_%D0%A1%D1%82%D0%BE%D1%8F%D0%BD%D0%BE%D0%B2_%D1%81_%D1%8D%D0%BA%D0%B8%D0%BF%D0%B0%D0%B6%D0%B5%D0%BC.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Handley Page Hampden", entry: "hampden", category: "plane", era: "WW2"
  },
  {
    id: "hampden__raf_bomber_command_1940_hu104656_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/RAF_Bomber_Command_1940_HU104656.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Handley Page Hampden", entry: "hampden", category: "plane", era: "WW2"
  },
  {
    id: "sunderland__royal_air_force_coastal_command_1939_194",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Air_Force_Coastal_Command%2C_1939-1945._CH8570.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Short Sunderland", entry: "sunderland", category: "plane", era: "WW2"
  },
  {
    id: "sunderland__royal_air_force_1939_1945_coastal_comman",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Air_Force-_1939-1945-_Coastal_Command_CH854.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Short Sunderland", entry: "sunderland", category: "plane", era: "WW2"
  },
  {
    id: "ju88__bundesarchiv_bild_101i_345_0780_14a_fran",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101I-345-0780-14A%2C_Frankreich%2C_abgest%C3%BCrztes_Flugzeug.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Junkers Ju 88", entry: "ju88", category: "plane", era: "WW2"
  },
  {
    id: "ju88__duitse_ju_88_i_kg_66_2000_644_001_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Duitse_Ju_88_I.KG_66_2000-644-001.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Junkers Ju 88", entry: "ju88", category: "plane", era: "WW2"
  },
  {
    id: "do217__me110_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Me110.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Dornier Do 217", entry: "do217", category: "plane", era: "WW2"
  },
  {
    id: "do217__bmw801_front_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/BMW801_front.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Dornier Do 217", entry: "do217", category: "plane", era: "WW2"
  },
  {
    id: "he177__daimler_benz_db_610_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Daimler_Benz_DB_610.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Heinkel He 177 Greif", entry: "he177", category: "plane", era: "WW2"
  },
  {
    id: "he177__bf_109g_6_db_605a_1_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bf_109G-6_DB_605A-1.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Heinkel He 177 Greif", entry: "he177", category: "plane", era: "WW2"
  },
  {
    id: "storch__morane_saulnier_ms_505_criquet_d_egty_vl",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/MORANE-SAULNIER_MS.505_CRIQUET_D-EGTY_vl.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Fieseler Fi 156 Storch", entry: "storch", category: "plane", era: "WW2"
  },
  {
    id: "storch__lv_ziv_morane_saulnier_ms_502_criquet_81",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/LV-ZIV_Morane-Saulnier_MS.502_Criquet_%288164166412%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Fieseler Fi 156 Storch", entry: "storch", category: "plane", era: "WW2"
  },
  {
    id: "ar196__bundesarchiv_bild_101ii_mw_1949_03_kreuz",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv_Bild_101II-MW-1949-03%2C_Kreuzer_%22Admiral_Hipper%22%2C_Bordflugzeug.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Arado Ar 196", entry: "ar196", category: "plane", era: "WW2"
  },
  {
    id: "ar196__hidroavi_n_del_crucero_alem_n_admiral_hi",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hidroavi%C3%B3n_del_crucero_alem%C3%A1n_Admiral_Hipper.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Arado Ar 196", entry: "ar196", category: "plane", era: "WW2"
  },
  {
    id: "ki46__ki_46_celebes_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki-46_Celebes.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Mitsubishi Ki-46", entry: "ki46", category: "plane", era: "WW2"
  },
  {
    id: "ki46__488_squadron_rnzaf_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/488_Squadron_RNZAF.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Mitsubishi Ki-46", entry: "ki46", category: "plane", era: "WW2"
  },
  {
    id: "ki61__ki_61_colour_1a_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki-61_colour_1a.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Kawasaki Ki-61", entry: "ki61", category: "plane", era: "WW2"
  },
  {
    id: "ki61__ki_61_at_fukuoka_in_1945_jpeg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki-61_at_Fukuoka_in_1945.jpeg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Kawasaki Ki-61", entry: "ki61", category: "plane", era: "WW2"
  },
  {
    id: "ki45__war_booty_ki_45_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/War_booty_Ki-45.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Kawasaki Ki-45", entry: "ki45", category: "plane", era: "WW2"
  },
  {
    id: "d3a__japanese_planes_preparing_pearl_harbor_j",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_planes_preparing-Pearl_Harbor.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Aichi D3A", entry: "d3a", category: "plane", era: "WW2"
  },
  {
    id: "d3a__coral_sea_japanese_type_99_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Coral_Sea_Japanese_Type_99.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Aichi D3A", entry: "d3a", category: "plane", era: "WW2"
  },
  {
    id: "n1k__shiden_bulletproof_glass_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SHIDEN_Bulletproof_glass.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Kawanishi N1K", entry: "n1k", category: "plane", era: "WW2"
  },
  {
    id: "n1k__shiden_kai_side2_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiden-kai-side2.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Kawanishi N1K", entry: "n1k", category: "plane", era: "WW2"
  },
  {
    id: "ki84__ki_84_right_front_view_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki-84-Right_front_view.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Nakajima Ki-84 Hayate", entry: "ki84", category: "plane", era: "WW2"
  },
  {
    id: "ki84__ki_84_right_fuselage_and_wing_root_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ki-84-Right_fuselage_and_wing_root.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Nakajima Ki-84 Hayate", entry: "ki84", category: "plane", era: "WW2"
  },
  {
    id: "il4__iljushin_db_3f_sa_kuva_148731_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iljushin_DB-3F_%28SA-kuva_148731%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Ilyushin Il-4", entry: "il4", category: "plane", era: "WW2"
  },
  {
    id: "la7__2007_08_cesko_317_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/2007-08-cesko-317.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lavochkin La-7", entry: "la7", category: "plane", era: "WW2"
  },
  {
    id: "la7__la_7_4_ld_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/La-7_4_ld.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lavochkin La-7", entry: "la7", category: "plane", era: "WW2"
  },
  {
    id: "yak1___1_14_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%98%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%AF%D0%BA-1%D0%91_14-%D0%B3%D0%BE_%D0%93%D0%98%D0%90%D0%9F_%D0%BD%D0%B0_%D0%BF%D0%BE%D0%BB%D0%B5%D0%B2%D0%BE%D0%BC_%D0%B0%D1%8D%D1%80%D0%BE%D0%B4%D1%80%D0%BE%D0%BC%D0%B5_%D0%BF%D0%B5%D1%80%D0%B5%D0%B4_%D0%B1%D0%BE%D0%B5%D0%B2%D1%8B%D0%BC_%D0%B2%D1%8B%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Yakovlev Yak-1", entry: "yak1", category: "plane", era: "WW2"
  },
  {
    id: "yak1__jaki_1_w_starym_zadybiu_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaki_1_w_Starym_Zadybiu.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Yakovlev Yak-1", entry: "yak1", category: "plane", era: "WW2"
  },
  {
    id: "yak9___9_6_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%98%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%AF%D0%BA-9%D0%94_%D0%BD%D0%B0%D0%B4_%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D0%B5%D0%BC_%286%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Yakovlev Yak-9", entry: "yak9", category: "plane", era: "WW2"
  },
  {
    id: "yak9___9_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%98%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D0%B8_%D0%AF%D0%BA-9%D0%A2_%D0%BD%D0%B0_%D0%B0%D1%8D%D1%80%D0%BE%D0%B4%D1%80%D0%BE%D0%BC%D0%B5_%D0%9F%D0%BE%D1%80%D1%82-%D0%90%D1%80%D1%82%D1%83%D1%80%D0%B0.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Yakovlev Yak-9", entry: "yak9", category: "plane", era: "WW2"
  },
  {
    id: "cr42__cr_42_82a_squadriglia_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/CR-42_82a_Squadriglia.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Fiat CR.42 Falco", entry: "cr42", category: "plane", era: "WW2"
  },
  {
    id: "mc202__castel_benito_airfield_destroyed_hangar_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Castel_Benito_airfield_destroyed_hangar_1943.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Macchi C.202 Folgore", entry: "mc202", category: "plane", era: "WW2"
  },
  {
    id: "sm79__sm_79_vigna_di_valle_1_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SM_79_Vigna_di_Valle_1.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Savoia-Marchetti SM.79 Sparviero", entry: "sm79", category: "plane", era: "WW2"
  },
  {
    id: "sm79__sm79_193_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/SM79_193.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Savoia-Marchetti SM.79 Sparviero", entry: "sm79", category: "plane", era: "WW2"
  },
  {
    id: "iar80__p_ghid_originale_7510300_02_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/P_Ghid_Originale_7510300_02.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "IAR 80", entry: "iar80", category: "plane", era: "WW2"
  },
  {
    id: "f84__f_84g_51_1231_48fbg_chm_0853_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-84g-51-1231-48fbg-chm-0853.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Republic F-84 Thunderjet", entry: "f84", category: "plane", era: "Cold War"
  },
  {
    id: "f84__14fw_f_84_1948_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/14fw-f-84-1948.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Republic F-84 Thunderjet", entry: "f84", category: "plane", era: "Cold War"
  },
  {
    id: "f89__f_86_21862_jber_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-86_21862_JBER.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Northrop F-89 Scorpion", entry: "f89", category: "plane", era: "Cold War"
  },
  {
    id: "f89__f_89j_hampton_air_power_park_va_2007_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/F-89J_Hampton_Air_Power_Park_VA_2007.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Northrop F-89 Scorpion", entry: "f89", category: "plane", era: "Cold War"
  },
  {
    id: "f106__mercury_seven_astronauts_with_aircraft_j",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mercury_Seven_astronauts_with_aircraft.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Convair F-106 Delta Dart", entry: "f106", category: "plane", era: "Cold War"
  },
  {
    id: "a3__a3d_2_nose_wheel_collapse_uss_saratoga_j",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/A3D-2_nose_wheel_collapse_USS_Saratoga.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Douglas A-3 Skywarrior", entry: "a3", category: "plane", era: "Cold War"
  },
  {
    id: "a3__a_3b_vah_4_dropping_mk_83_bomb_vietnam_1",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/A-3B_VAH-4_dropping_Mk_83_bomb_Vietnam_1965.jpeg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Douglas A-3 Skywarrior", entry: "a3", category: "plane", era: "Cold War"
  },
  {
    id: "a5__a3j_1s_vah_7_cvan_65_nan11_62_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/A3J-1s_VAH-7_CVAN-65_NAN11-62.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "North American A-5 Vigilante", entry: "a5", category: "plane", era: "Cold War"
  },
  {
    id: "a5__ra_5c_rvah_12_off_vietnam_1967_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/RA-5C_RVAH-12_off_Vietnam_1967.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "North American A-5 Vigilante", entry: "a5", category: "plane", era: "Cold War"
  },
  {
    id: "ea6b__ea_6a_and_ea_6b_of_vmaq_2_in_flight_c197",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/EA-6A_and_EA-6B_of_VMAQ-2_in_flight_c1977.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Grumman EA-6B Prowler", entry: "ea6b", category: "plane", era: "Cold War"
  },
  {
    id: "ea6b__ea_6b_aip_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/EA-6B_AIP.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Grumman EA-6B Prowler", entry: "ea6b", category: "plane", era: "Cold War"
  },
  {
    id: "e2__us_navy_081111_n_9565d_040_t_brett_whorl",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Navy_081111-N-9565D-040_t._Brett_Whorley%2C_left%2C_and_Lt._Andrew_Leatherwood%2C_assigned_to_Airborne_Early_Warning_Squadron_%28VAW%29_115%2C_the.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Grumman E-2 Hawkeye", entry: "e2", category: "plane", era: "Cold War"
  },
  {
    id: "e2__uss_theodore_roosevelt_cvn_71_conducts_f",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/USS_Theodore_Roosevelt_%28CVN_71%29_conducts_flight_operations._%2849122248696%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Grumman E-2 Hawkeye", entry: "e2", category: "plane", era: "Cold War"
  },
  {
    id: "e3__lockheed_rc_121c_1955_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Lockheed_RC-121C_1955.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Boeing E-3 Sentry", entry: "e3", category: "plane", era: "Cold War"
  },
  {
    id: "e3__ila_2008_pd_185_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/ILA_2008_PD_185.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Boeing E-3 Sentry", entry: "e3", category: "plane", era: "Cold War"
  },
  {
    id: "p3__p_3a_vp_49_1964_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/P-3A_VP-49_1964.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed P-3 Orion", entry: "p3", category: "plane", era: "Cold War"
  },
  {
    id: "p3__helice_hs_54h60_77_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Helice_HS_54H60-77.JPG?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed P-3 Orion", entry: "p3", category: "plane", era: "Cold War"
  },
  {
    id: "s3__s_3a_escape_sys_china_lake_nan1_72jpg_jp",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/S-3A_escape_sys_China_Lake_NAN1-72jpg.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed S-3 Viking", entry: "s3", category: "plane", era: "Cold War"
  },
  {
    id: "s3__s_2g_and_s_3a_in_flight_1976_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/S-2G_and_S-3A_in_flight_1976.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed S-3 Viking", entry: "s3", category: "plane", era: "Cold War"
  },
  {
    id: "c141__hanoi_taxi_over_nmusaf_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hanoi_Taxi_over_NMUSAF.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed C-141 Starlifter", entry: "c141", category: "plane", era: "Cold War"
  },
  {
    id: "kc10__usaf_f_14d_and_f_18c_s_prepare_to_refuel",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/USAF_F-14D_and_F-18C%27s_prepare_to_refuel.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "McDonnell Douglas KC-10 Extender", entry: "kc10", category: "plane", era: "Cold War"
  },
  {
    id: "kc10__240926_f_oy799_1632_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/240926-F-OY799-1632.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "McDonnell Douglas KC-10 Extender", entry: "kc10", category: "plane", era: "Cold War"
  },
  {
    id: "t33__t_33a_10_t_bird_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-33A-10-T-Bird.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed T-33", entry: "t33", category: "plane", era: "Cold War"
  },
  {
    id: "t33__t_33_boliviano_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/T-33_Boliviano.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Lockheed T-33", entry: "t33", category: "plane", era: "Cold War"
  },
  {
    id: "t6__noorduyn_at_16_harvard_iib_uk_air_force_",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Noorduyn_AT-16_Harvard_IIB%2C_UK_-_Air_Force_AN1449396.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "North American T-6 Texan", entry: "t6", category: "plane", era: "WW2"
  },
  {
    id: "t6__fac_t_6_with_phosphor_rockets_in_korea_j",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/FAC_T-6_with_phosphor_rockets_in_Korea.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "North American T-6 Texan", entry: "t6", category: "plane", era: "WW2"
  },
  {
    id: "bird_dog__l_19s_vmo_6_nan2_52_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/L-19s_VMO-6_NAN2-52.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Cessna O-1 Bird Dog", entry: "bird_dog", category: "plane", era: "Cold War"
  },
  {
    id: "bird_dog__army_l_19_fac_1968_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Army_L-19_FAC_1968.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Cessna O-1 Bird Dog", entry: "bird_dog", category: "plane", era: "Cold War"
  },
  {
    id: "a37__oa_37b_2_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/OA-37B-2.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Cessna A-37 Dragonfly", entry: "a37", category: "plane", era: "Cold War"
  },
  {
    id: "a37__a_37b_minigun_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/A-37B_Minigun.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Cessna A-37 Dragonfly", entry: "a37", category: "plane", era: "Cold War"
  },
  {
    id: "c119__c_82a_packet_cq_585_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/C-82A_Packet_CQ-585.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Fairchild C-119 Flying Boxcar", entry: "c119", category: "plane", era: "Cold War"
  },
  {
    id: "c119__r4q_1_usmc_nan8_50_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/R4Q-1_USMC_NAN8-50.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Fairchild C-119 Flying Boxcar", entry: "c119", category: "plane", era: "Cold War"
  },
  {
    id: "dc8__usn_dc_8_c_24_ec_24_8435059326_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/USN_DC-8_C-24_EC-24_%288435059326%29.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Douglas DC-8", entry: "dc8", category: "plane", era: "Cold War"
  },
  {
    id: "dc8__united_dc_8_n8099u_descents_using_its_th",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/United_DC-8_N8099U_descents_using_its_thrust_reversers.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Douglas DC-8", entry: "dc8", category: "plane", era: "Cold War"
  },
  {
    id: "b727__terminal_sekinchan_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Terminal_Sekinchan.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Boeing 727", entry: "b727", category: "plane", era: "Cold War"
  },
  {
    id: "b757__c32_b_air_to_air_uarrsi_jpg",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/C32-B_air_to_air_UARRSI.jpg?width=1000",
    credit: "Wikimedia Commons — see the file page",
    hint: "Boeing 757", entry: "b757", category: "plane", era: "Cold War"
  },
];

if (typeof module !== "undefined" && module.exports) module.exports = { CANDIDATES };
