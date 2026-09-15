/* Vehicle Spotter — War Thunder wiki units.
 *
 * Scraped from wiki.warthunder.com: every tank, aircraft and helicopter listed
 * under its game roles, with the vehicle render Gaijin publishes for each one.
 * Era is mapped from the game's rank, and every entry is difficulty 3, since
 * these are variant-level and the set is full of near-identical marks.
 *
 * These pictures are Gaijin Entertainment's game assets, not freely licensed
 * material like the photographs in js/vehicles.js. They are kept in this
 * separate file, and tagged source: "render", so they can be filtered out in
 * the game or removed entirely by deleting this file and its script tag.
 */
const RENDER_VEHICLES = [
  {
    id: "wt_a_20g", name: "A-20G-25", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a-20g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_26b", name: "A-26B-50", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a-26b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_26b_10", name: "A-26B-10", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a-26b_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_26c", name: "A-26C-45", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a-26c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_26c_45_dt", name: "A-26C-45DT", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a-26c-45-dt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_35b", name: "A-35B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a-35b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a2d", name: "A2D-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a2d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a5m4", name: "A5M4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a5m4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a5m4_hagiri", name: "Hagiri's A5M4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a5m4_hagiri.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m2_mod11", name: "A6M2 mod. 11", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m2_mod11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m2_n_zero", name: "A6M2-N", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m2_n_zero.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m2_zero", name: "A6M2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m2_zero.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m3_mod22_zero", name: "A6M3 mod. 22", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m3_mod22_zero.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m3_mod22ko_zero", name: "A6M3 mod. 22Ko", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m3_mod22ko_zero.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m3_zero", name: "A6M3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m3_zero.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m5_zero", name: "A6M5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m5_zero.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m5hei", name: "A6M5 Hei", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m5hei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m5ko", name: "A6M5 Ko", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m5ko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m5otsu", name: "A6M5 Otsu", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m5otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a6m6c", name: "A6M6c", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a6m6c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a7he1", name: "A7He1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a7he1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a7m1", name: "A7M1 (NK9H)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["A7M1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a7m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a7m2", name: "A7M2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a7m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_109_eoa2", name: "A.109EOA-2", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_109_eoa2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_10a_early", name: "A-10A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_10a_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_10a_late", name: "A-10A Late", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_10a_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_129_a", name: "A-129 International (p)", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["A-129 International"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_129_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_129_cbt", name: "A129CBT", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_129_cbt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_129_d", name: "AH-129D", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_129_d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_20g_30_ussr", name: "A-20G-30", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_20g_30_ussr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_29_hudson", name: "A-29", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_29_hudson.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_4b", name: "A-4B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_4b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_4e_early", name: "A-4E Early", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_4e_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_4e_early_iaf", name: "A-4E Early (M)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["A-4E Early"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_4e_early_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_4e_late_iaf", name: "A-4E", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_4e_late_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_4h", name: "A-4H", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_4h.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_4n", name: "Ayit", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_4n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_5c", name: "A-5C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_5c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_6e_tram", name: "A-6E TRAM", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_6e_tram.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_7d", name: "A-7D", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_7d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_7e", name: "A-7E", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_7e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_a_7k", name: "A-7K", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/a_7k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ab_205a_1", name: "AB 205 A-1", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ab_205a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1f", name: "AH-1F", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1f_iaf", name: "Tzefa D/E", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1f_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1g_iaf", name: "Tzefa A", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1g_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1q_iaf", name: "Tzefa B", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1q_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1s", name: "AH-1S Kisarazu", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1s_early", name: "AH-1E", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1s_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1s_late", name: "AH-1S", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1s_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_1w", name: "AH-1W", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_1w.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_2_rooivalk", name: "Rooivalk Mk1F CSH", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_2_rooivalk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_56a", name: "AH-56A", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_56a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_60_iaf", name: "AH-60", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_60_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64a", name: "AH-64A", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64a_greece_usa", name: "AH-64A (GR)", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["AH-64A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64a_greece_usa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64a_iaf", name: "Peten", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64a_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64a_peten", name: "AH-64A Peten", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64a_peten.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64d_i_saraph", name: "Saraph", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64d_i_saraph.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64d_japan", name: "AH-64DJP", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64d_japan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64d_lightweight_japan", name: "AH-64DJP (AT)", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["AH-64DJP"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64d_lightweight_japan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64e", name: "AH-64E", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_64e_britain", name: "AH Mk.2 Apache", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_64e_britain.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_6m", name: "AH-6M", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_6m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ah_mk1", name: "AH Mk.1 Apache", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ah_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ahs", name: "AHS", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ahs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_aichi_e13a", name: "Aichi E13A1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/aichi_e13a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_alpha_jet_a", name: "Alpha Jet A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/alpha_jet_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_alpha_jet_a_jabog41", name: "Alpha Jet A (JaboG 41)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Alpha Jet A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/alpha_jet_a_jabog41.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_alpha_jet_e", name: "Alpha Jet E", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/alpha_jet_e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_alpha_jet_th_phase_1", name: "Alpha Jet TH", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/alpha_jet_th_phase_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_am_1_mauler", name: "AM-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/am_1_mauler.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_amx", name: "AMX", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/amx.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_amx_a_1a_brazil", name: "AMX A-1A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/amx_a_1a_brazil.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ar_2", name: "Ar-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ar_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_arado_196a_3", name: "Ar 196 A-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/arado-196a-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_arado_196a_5", name: "Ar 196 A-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/arado-196a-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_arado_234", name: "Ar 234 B-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/arado-234.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_arado_234c_3", name: "Ar 234 C-3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/arado-234c-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_attaker_fb1", name: "Attacker FB 1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/attaker_fb1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_attaker_fb2", name: "Attacker FB.2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/attaker_fb2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_av_8a", name: "AV-8A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/av_8a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_av_8b_na", name: "AV-8B (NA)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/av_8b_na.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_av_8b_plus", name: "AV-8B Plus", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/av_8b_plus.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_av_8c", name: "AV-8C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/av_8c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_av_8s_late_thailand", name: "AV-8S Late", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/av_8s_late_thailand.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_av_8s_thailand", name: "AV-8S", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/av_8s_thailand.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_avenger_mk1", name: "Avenger Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/avenger_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_17e", name: "B-17E", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b-17e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_17e_late", name: "B-17E/L", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b-17e_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_17g", name: "B-17G-60-VE", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b-17g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_29", name: "B-29A-BN", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b-29.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_57", name: "B-57A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b-57.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_57b", name: "B-57B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b-57b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b5n2", name: "B5N2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b5n2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b6n1", name: "B6N1 Model 11", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b6n1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b6n2", name: "B6N2 Model 12", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b6n2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b6n2a", name: "B6N2a Model 12Ko", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b6n2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b7a2", name: "B7A2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b7a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b7a2_homare_23", name: "B7A2 (Homare 23)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["B7A2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b7a2_homare_23.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_10b", name: "B-10B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_10b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_18a", name: "B-18A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_18a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_239_finland", name: "B-239", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_239_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_24d", name: "B-24D-25-CO", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_24d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_25j_1", name: "B-25J-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_25j_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_25j_20", name: "B-25J-20", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_25j_20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_25j_30_china", name: "B-25J-30", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_25j_30_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_26b_c", name: "B-26B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_26b_c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_26c_france", name: "B-26C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_26c_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_34", name: "B-34", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_48_firecrest", name: "Firecrest", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_48_firecrest.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_52h", name: "B-52H", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_52h.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_b_66b", name: "B-66B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/b_66b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ba_65_a80", name: "Ba.65 A.80", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ba_65_a80.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ba_65_k14_l", name: "Ba.65 (K.14) L", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Ba.65 L"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ba_65_k14_l.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bb_1", name: "BB-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bb-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_be_6", name: "Be-6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/be_6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_beaufighter_mk1_40mm", name: "Beaufighter Mk I (40-mm)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Beaufighter Mk I"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/beaufighter_mk1_40mm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_beaufighter_mk21", name: "Beaufighter Mk 21", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/beaufighter_mk21.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_beaufighter_mk6c", name: "Beaufighter Mk VIc", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/beaufighter_mk6c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_beaufighter_mkx", name: "Beaufighter Mk X", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/beaufighter_mkx.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_beaufort_mkviii", name: "Beaufort Mk VIII", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/beaufort_mkviii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109a_1", name: "Flegel's Bf 109 A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109b_2", name: "Bf 109 B-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109b_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109c_1", name: "Bf 109 C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109c_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109e_1", name: "Bf 109 E-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109e-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109e_3", name: "Bf 109 E-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109e-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109e_3_japan", name: "Bf 109 E-7", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109e-3_japan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109e_4", name: "Bf 109 E-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109e-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109e_7", name: "Bf 109 E-7/U2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109e-7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109f_1", name: "Bf 109 F-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109f-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109f_2", name: "Bf 109 F-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109f-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109f_4", name: "Bf 109 F-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109f-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109f_4_trop", name: "Bf 109 F-4/trop", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109f-4_trop.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109g_10", name: "Bf 109 G-10", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109g-10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109g_14", name: "Bf 109 G-14", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109g-14.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109g_14as", name: "Bf 109 G-14/AS", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109g-14as.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109g_2", name: "Bf 109 G-2/trop", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109g-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109g_2_finland", name: "Bf 109 G-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109g-2_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109g_6", name: "Bf 109 G-6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109g-6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109g_6_erla_finland", name: "Bf 109 G-6 Erla", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109g-6_erla_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109k_4", name: "Bf 109 K-4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109k-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109z", name: "Bf 109 Z-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-109z.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_110c_4", name: "Bf 110 C-7", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-110c-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_110c_6", name: "Bf 110 C-6", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-110c-6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_110f_2", name: "Bf 110 F-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-110f-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_110g_2", name: "Bf 110 G-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf-110g-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf2c_1", name: "BF2C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf2c_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_109t_2", name: "Bf 109 T-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf_109t_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bf_110g_4", name: "Bf 110 G-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bf_110g_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bi", name: "BI", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bi.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_blenheim_mkiv", name: "Blenheim Mk IV", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/blenheim_mkiv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bo_105cb2", name: "BO 105 CB-2", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bo_105cb2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bo_105pah1", name: "BO 105 PAH-1", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bo_105pah1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bo_105pah1_a1", name: "BO 105 PAH-1A1", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bo_105pah1_a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_boomerang_mki", name: "Boomerang Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/boomerang_mki.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_boomerang_mkii", name: "Boomerang Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/boomerang_mkii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_boston_mk_1", name: "Boston Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/boston_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_br_20_dr", name: "B.R.20DR", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/br_20_dr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_br_20m_m1", name: "B.R.20M M1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/br_20m_m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_br_693_ab2", name: "Br.693AB2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/br_693_ab2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_breda_88", name: "Breda 88 (P.XI)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Breda 88"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/breda_88.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_brigand_b1", name: "Brigand B 1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/brigand_b1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_btd_1", name: "BTD-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/btd-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_buccaneer_s1", name: "Buccaneer S.1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/buccaneer_s1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_buccaneer_s2", name: "Buccaneer S.2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/buccaneer_s2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_buccaneer_s2b", name: "Buccaneer S.2B", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/buccaneer_s2b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bv_138c_1", name: "BV 138 C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bv-138c-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bv_155b_1", name: "BV 155 B-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bv-155b-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_bv_238", name: "BV 238", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/bv-238.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_c_3604", name: "C-3604", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/c_3604.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_canberra_bimk6", name: "Canberra B (I) Mk 6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Canberra B Mk 6"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/canberra_bimk6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_canberra_bmk2", name: "Canberra B Mk 2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/canberra_bmk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_caudron_cr714", name: "C.R.714", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/caudron_cr714.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cf_188a_canada", name: "CF-188A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cf_188a_canada.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_al_khalid_1", name: "Al-Khalid-I", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_al_khalid_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_antelope_tc_1l_ads", name: "Antelope", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_antelope_tc_1l_ads.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_cm11", name: "CM11", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_cm11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_cm_25", name: "CM25", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_cm_25.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_cm_34", name: "CM34", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_cm_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_gmc_cckw_353_m45_quad", name: "CCKW 353 (M45)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["CCKW 353"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_gmc_cckw_353_m45_quad.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_hj_9", name: "AFT09", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_hj_9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_hq_11", name: "HQ11", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_hq_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_hq_17", name: "HQ17", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_hq_17.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_is_2_1943_no402", name: "IS-2 No.402", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_is_2_1943_no402.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_is_2_1944", name: "IS-2 (1944)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_is_2_1944.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_isu_122", name: "ISU-122", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_isu_122.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_lvt_4_zis_2", name: "LVT(A)(4) (ZiS-2)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_lvt_4_zis_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m113a1_tow", name: "M113A1 (TOW)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["M113A1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m113a1_tow.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m1a2t", name: "M1A2T", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m1a2t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m36", name: "M36 GMC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m36.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m3a3_stuart", name: "M3A3 Stuart", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m3a3_stuart.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m3a3_stuart_1st_ptg", name: "M3A3 (1st PTG)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M3A3"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m3a3_stuart_1st_ptg.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m41_a3_walker_bulldog", name: "M41A3", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m41_a3_walker_bulldog.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m42_duster", name: "M42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m42_duster.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m48a1_patton_iii", name: "M48A1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m48a1_patton_iii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m4a1_76w_sherman", name: "M4A1 (75) W", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M4A1 W"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m4a1_76w_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m4a4_sherman", name: "M4A4", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m4a4_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m4a4_sherman_1st_ptg", name: "M4A4 (1st PTG)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M4A4"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m4a4_sherman_1st_ptg.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m55", name: "M55", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m55.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m5a1_stuart", name: "M5A1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m5a1_stuart.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m60a3_tts", name: "M60A3 TTS", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m60a3_tts.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m8_greyhound", name: "M8 LAC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m8_greyhound.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m8_scott", name: "M8 HMC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m8_scott.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_m_41d", name: "M41D", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_m_41d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_mbt2000", name: "MBT-2000", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_mbt2000.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_object_122tm", name: "Object 122MT \"MC\"", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_object_122tm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_object_211", name: "Object 211", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_object_211.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_oplot_t", name: "Oplot-M", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_oplot_t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_pgz_04a", name: "PGZ04A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_pgz_04a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_pgz_09", name: "PGZ09", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_pgz_09.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_pgz_625_fb10", name: "CS/SA5", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_pgz_625_fb10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_pgz_88", name: "PGZ88", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_pgz_88.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_plz_05", name: "PLZ05", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_plz_05.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_plz_83", name: "PLZ83", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_plz_83.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_plz_83_130", name: "PLZ83-130", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_plz_83_130.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ptl_02", name: "PTL02", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ptl_02.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ptz_89", name: "PTZ89", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ptz_89.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_qn506", name: "QN506", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_qn506.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_sdkfz_222_early", name: "Sd.Kfz.222", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_sdkfz_222_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_su_76m_1943", name: "SU-76M", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_su_76m_1943.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_t_26_no531", name: "T-26 No.531", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_t_26_no531.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_t_34_1942", name: "T-34 (1943)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_t_34_1942.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_t_34_85_d_5t", name: "T-34-85 (S-53)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_t_34_85_d_5t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_t_34_85_zis_53_no215", name: "T-34-85 No.215", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_t_34_85_zis_53_no215.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_t_62", name: "T-62 N545", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_t_62.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_t_80ud_478be", name: "T-80UD/BE", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_t_80ud_478be.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_tor_m1", name: "Tor-M1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_tor_m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_58", name: "T-34-85 Gai", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_58.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_59d", name: "ZTZ59D1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_59d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_62", name: "Type 62", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_62.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_63_i", name: "Type 63", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_63_i.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_64", name: "M64", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_64.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_65_aa", name: "Phòng không T-34", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_65_aa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_69", name: "Type 69", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_69.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_69_2a", name: "Type 69-IIa", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_69_2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_69_2g", name: "T-69 II G", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_69_2g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_86", name: "ZBD86", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_86.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_type_97_kai", name: "Chi-Ha Kai", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_type_97_kai.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_vt_4", name: "VT4", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_vt_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_vt_4b", name: "VT4A1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_vt_4b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_vt_5", name: "VT5", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_vt_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_wma_301", name: "WMA301", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_wma_301.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_wz_1001", name: "WZ1001(E) LCT", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["WZ1001 LCT"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_wz_1001.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_wz_141", name: "WZ141-1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_wz_141.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_wz_305", name: "WZ305", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_wz_305.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_zbd_04a", name: "ZBD04A", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_zbd_04a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_zsd63_pg87", name: "ZSD63/PG87", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_zsd63_pg87.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_zsl_92", name: "ZSL92", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_zsl_92.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztl_11", name: "ZTL11", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztl_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_zts_63_1980", name: "ZTS63", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_zts_63_1980.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_59a", name: "ZTZ59A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_59a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_88a", name: "ZTZ88A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_88a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_88b", name: "ZTZ88B", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_88b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_96a", name: "ZTZ96A", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_96a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_96a_prot", name: "ZTZ96A (P)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["ZTZ96A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_96a_prot.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_96b", name: "ZTZ96B", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_96b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_99", name: "ZTZ99-II", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_99.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_99_w", name: "ZTZ99-III", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_99_w.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cn_ztz_99a", name: "ZTZ99A", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cn_ztz_99a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_corsair_fmk2", name: "Corsair F Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/corsair_fmk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cr_32", name: "CR.32", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cr_32.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cr_32_bis", name: "CR.32 bis", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cr_32_bis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cr_32_quater", name: "CR.32 quater", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cr_32_quater.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_cw_21", name: "CW-21", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/cw_21.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d3a1", name: "D3A1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d3a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d4y1", name: "D4Y1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d4y1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d4y2", name: "D4Y2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d4y2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d4y3", name: "D4Y3 Ko", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d4y3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_371", name: "D.371", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_371.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_371_hs9", name: "D.371 H.S.9", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_371_hs9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_373", name: "D.373", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_373.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_500", name: "D.500", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_500.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_501", name: "D.501", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_501.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_510", name: "Pallier's D.510", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_510.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_510c", name: "D.510C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_510c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_520", name: "D.520", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_520.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_d_521", name: "D.521", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/d_521.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_db_3a_china", name: "DB-3A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/db_3a_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_db_3b", name: "DB-3B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/db_3b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_db_7", name: "DB-7", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/db_7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_db_lk", name: "DB-LK", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/db_lk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_dh_110_sea_vixen", name: "Sea Vixen F.A.W. Mk.2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/dh_110_sea_vixen.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_17e_1", name: "Do 17 E-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_17e_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_17z_2", name: "Do 17 Z-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_17z_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_17z_7", name: "Do 17 Z-7", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_17z_7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217e_2", name: "Do 217 E-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217e_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217e_4", name: "Do 217 E-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217e_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217j_1", name: "Do 217 J-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217j_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217j_2", name: "Do 217 J-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217j_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217k_1", name: "Do 217 K-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217k_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217m_1", name: "Do 217 M-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217m_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217n_1", name: "Do 217 N-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217n_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_217n_2", name: "Do 217 N-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_217n_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_335a_0", name: "Do 335 A-0", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_335a_0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_335a_1", name: "Do 335 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_335a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_do_335b_2", name: "Do 335 B-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/do_335b_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_douglas_a_1h", name: "A-1H", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/douglas_a_1h.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_douglas_ad_2", name: "AD-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/douglas_ad_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_douglas_ad_4", name: "AD-4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/douglas_ad_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_douglas_ad_4na_france", name: "AD-4NA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/douglas_ad_4na_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_e7k2", name: "E7K2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/e7k2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_e8n2", name: "E8N2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/e8n2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ef_2000_aesa", name: "EF-2000 (AESA)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["EF-2000"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ef_2000_aesa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ef_2000_block_10", name: "EF-2000", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ef_2000_block_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ef_2000_fgr4", name: "Typhoon FGR.4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ef_2000_fgr4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ef_2000_typhoon_aesa", name: "Typhoon (AESA)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ef_2000_typhoon_aesa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ef_2000a", name: "F-2000A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ef_2000a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ef_2000a_aesa", name: "F-2000A (AESA)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["F-2000A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ef_2000a_aesa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_er_2_ach30b_early", name: "Yer-2 (ACh-30B) (e)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Yer-2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/er-2_ach30b_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_er_2_ach30b_late", name: "Yer-2 (ACh-30B) (l)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Yer-2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/er-2_ach30b_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_er_2_m105_mv3", name: "Yer-2 (M-105)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Yer-2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/er-2_m105_mv3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_er_2_m105_tat", name: "Yer-2 (M-105) TAT", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Yer-2 TAT"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/er-2_m105_tat.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_er_2_m105r_lu2b", name: "Yer-2 (M-105R) LU", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Yer-2 LU"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/er-2_m105r_lu2b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_er_2_m105r_tat", name: "Yer-2 (M-105R) TAT", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Yer-2 TAT"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/er-2_m105r_tat.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_etndard_4m", name: "Etendard IVM", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/etndard_4m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_100a_china", name: "F-100A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-100a_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_100d", name: "F-100D", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-100d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_104a", name: "F-104A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-104a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_104c", name: "F-104C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-104c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_104g", name: "F-104G", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-104g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_104j", name: "F-104J", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-104j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_104s", name: "F-104S", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-104s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_104s_asa", name: "F-104S.ASA", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-104s_asa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_104s_cb", name: "F-104S TAF", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-104s_cb.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_105d", name: "F-105D", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-105d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4c", name: "F-4C Phantom II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4e", name: "F-4E Phantom II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4e_iaf", name: "Kurnass", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4e_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4e_kurnass_2000", name: "Kurnass 2000", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4e_kurnass_2000.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4ej", name: "F-4EJ Phantom II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4ej.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4ej_adtw", name: "F-4EJ ADTW", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4ej_adtw.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4ej_kai", name: "F-4EJ Kai Phantom II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4ej_kai.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4f", name: "F-4F Early", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4f_kws_lv", name: "F-4F KWS LV", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4f_kws_lv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4j", name: "F-4J Phantom II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4jk", name: "F-4J(UK) Phantom II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["F-4J Phantom II"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4jk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4k", name: "Phantom FG.1", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4m_fgr2", name: "Phantom FGR.2", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4m_fgr2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_4s", name: "F-4S Phantom II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-4s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_5a", name: "F-5A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-5a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_5ag_norway", name: "F-5A(G)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["F-5A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-5ag_norway.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_5c", name: "F-5C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-5c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_5e", name: "F-5E", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-5e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_5e_fcu_thailand", name: "F-5E FCU", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-5e_fcu_thailand.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_5t_thailand", name: "F-5T SCU", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-5t_thailand.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_5th_thailand", name: "F-5TH TCU", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-5th_thailand.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_80", name: "F-80C-10", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-80.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_80a", name: "F-80A-5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-80a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_82e", name: "F-82E", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-82e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_84b", name: "F-84B-26", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-84b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_84f", name: "F-84F", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-84f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_84f_iaf", name: "F-84F IAF", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-84f_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_84g", name: "F-84G-21-RE", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-84g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_84g_31_re_china", name: "F-84G-31-RE", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-84g-31-re_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_84g_france", name: "F-84G-26-RE", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-84g_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86_canadair_german", name: "CL-13A Mk 5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86_canadair_german.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86_cl_13_mk4_italy", name: "CL-13 Mk.4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86_cl_13_mk4_italy.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86_cl_13b_mk6", name: "CL-13B Mk.6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86_cl_13b_mk6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86a_5", name: "F-86A-5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86a-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86f_2", name: "F-86F-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86f-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86f_25", name: "F-86F-25", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86f-25.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86f_30_china", name: "F-86F-30", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86f-30_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86f_35", name: "F-86F-35", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86f-35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86f_40_china", name: "F-86F-40", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86f-40_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86f_40_japan_blue_impulse", name: "F-86F-40 JASDF", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86f-40_japan_blue_impulse.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_86k_late", name: "F-86K", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-86k_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_89b", name: "F-89B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-89b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_89d", name: "F-89D", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-89d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_8e", name: "F-8E", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-8e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_8e_fn", name: "F-8E(FN)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["F-8E"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f-8e_fn.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f1", name: "F-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f11f_1_late", name: "F11F-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f11f_1_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f1m2", name: "F1M2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f1m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f2a_1", name: "F2A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f2a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f2a_1_thach", name: "Thach's F2A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f2a-1_thach.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f2a_3", name: "F2A-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f2a-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f2g_1", name: "F2G-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f2g-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f2h_2", name: "F2H-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f2h-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f3d_1", name: "F3D-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f3d_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f3f_2", name: "F3F-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f3f-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f3f_2_galer", name: "Galer's F3F-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f3f-2_galer.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f3h_2", name: "F3H-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f3h-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4d_1", name: "F4D-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4d_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4f_3", name: "F4F-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4f-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4f_4", name: "F4F-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4f-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4f_4_martlet_mk4", name: "Martlet Mk IV", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4f-4_martlet_mk4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_1a", name: "F4U-1A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_1a_usmc", name: "F4U-1A (USMC)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["F4U-1A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-1a_usmc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_1c", name: "F4U-1C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_1d", name: "F4U-1D", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-1d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_4", name: "F4U-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_4b", name: "F4U-4B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-4b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_4b_vmf_214", name: "F4U-4B VMF-214", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-4b_vmf_214.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_6_au_1", name: "AU-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-6_au-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f4u_7", name: "F4U-7", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f4u-7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f6f_3", name: "F6F-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f6f-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f6f_5n", name: "F6F-5N", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f6f-5n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f7f1", name: "F7F-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f7f1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f7f3", name: "F7F-3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f7f3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f8f1", name: "F8F-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f8f1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f8f1b", name: "F8F-1B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f8f1b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f8u_2", name: "F8U-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f8u-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f9f_2", name: "F9F-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f9f-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f9f_5", name: "F9F-5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f9f-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f9f_8", name: "F9F-8", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f9f-8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_100f_china", name: "F-100F", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_100f_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_101c", name: "F-101C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_101c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_106a_1972", name: "F-106A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_106a_1972.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_111a", name: "F-111A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_111a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_111c_raaf", name: "F-111C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_111c_raaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_111f", name: "F-111F", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_111f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_14a_early", name: "F-14A Early", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_14a_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_14a_iriaf", name: "F-14A IRIAF", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_14a_iriaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_14b", name: "F-14B", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_14b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15a", name: "F-15A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15a_iaf", name: "Baz", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15a_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15c_baz_msip", name: "Baz Meshupar", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15c_baz_msip.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15c_golden_eagle", name: "F-15C Golden Eagle", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15c_golden_eagle.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15c_msip2", name: "F-15C MSIP II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15c_msip2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15e", name: "F-15E", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15i_raam", name: "F-15I Raam", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15i_raam.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15j", name: "F-15J", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_15j_kai", name: "F-15J(M)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["F-15J"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_15j_kai.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16a_block_10", name: "F-16A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16a_block_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16a_block_10_iaf", name: "Netz", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16a_block_10_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16a_block_10_netz_mod", name: "Netz (Mod)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Netz"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16a_block_10_netz_mod.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16a_block_15_adf", name: "F-16A ADF", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16a_block_15_adf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16a_block_15_ocu_belgium", name: "F-16A OCU", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16a_block_15_ocu_belgium.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16a_block_20_mlu", name: "F-16A MLU", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16a_block_20_mlu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16a_block_72v_china", name: "F-16V", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16a_block_72v_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16aj", name: "F-16AJ", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16aj.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16am_block_15_mlu_belgium", name: "F-16AM", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16am_block_15_mlu_belgium.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16c_block_40_barak_2", name: "F-16C Barak II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16c_block_40_barak_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16c_block_50", name: "F-16CM", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16c_block_50.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16c_block_52_aesa", name: "F-16CM PoBIT", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16c_block_52_aesa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16d_block_40_barak_2", name: "F-16D Barak II", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16d_block_40_barak_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16i_sufa", name: "F-16I Sufa", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16i_sufa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_16xl", name: "F-16XL", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_16xl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_20a", name: "F-20A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_20a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_222_2", name: "F.222.2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_222_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_2a", name: "F-2A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_2a_adtw", name: "F-2A ADTW", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_2a_adtw.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_47n_25_re_china", name: "F-47N-25-RE", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_47n_25_re_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_f_6c_pakistan", name: "F-6C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/f_6c_pakistan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18a", name: "F/A-18A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18a_hug_2_raaf", name: "AF/A-18A Late", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18a_hug_2_raaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18c_early", name: "F/A-18C Early", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18c_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18c_finland", name: "F-18C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18c_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18c_late", name: "F/A-18C Late", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18c_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18c_mlu_2_finland", name: "F/A-18C MLU 2", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18c_mlu_2_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18c_switzerland", name: "F/A-18C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18c_switzerland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18d_late_malaysia", name: "F/A-18D Late", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18d_late_malaysia.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18e_block_2", name: "F/A-18E", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18e_block_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fa_18f_block_2_raaf", name: "F/A-18F", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fa_18f_block_2_raaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fc_20_bis", name: "F.C.20 Bis", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fc_20_bis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ffa_p16", name: "FFA P-16", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ffa_p16.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ffvs_j22_a", name: "J22-A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ffvs_j22_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ffvs_j22_b", name: "J22-B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ffvs_j22_b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_cr42", name: "CR.42", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_cr42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_cr42_j11", name: "J11", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_cr42_j11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_cr42_marcolin", name: "Marcolin's C.R.42 CN", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_cr42_marcolin.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g50_seria2", name: "G.50 serie 2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g50_seria2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g50_seria7as", name: "G.50 AS serie 7", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g50_seria7as.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g91_ps", name: "G.91 pre-serie", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g91_ps.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g91_r1", name: "G.91 R/1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g91_r1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g91_r3", name: "G.91 R/3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g91_r3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g91_r4", name: "G.91 R/4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g91_r4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g91_y", name: "G.91 Y", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g91_y.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fiat_g91_ys", name: "G.91 YS", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fiat_g91_ys.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_firebrand_tf4", name: "Firebrand TF Mk IV", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/firebrand_tf4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_firefly_mk1", name: "Firefly F Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/firefly_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_firefly_mk4_netherlands", name: "Firefly F.Mk.IV", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/firefly_mk4_netherlands.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_firefly_mk5", name: "Firefly FR Mk V", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/firefly_mk5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fj_4b", name: "FJ-4B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fj_4b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fj_4b_agm_12b", name: "FJ-4B VMF-232", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fj_4b_agm_12b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fokker_d21_mod20", name: "Fokker D.XXI", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fokker_d21_mod20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fokker_d21_serie3_finland", name: "Fokker D.XXI-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fokker_d21_serie3_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fokker_d23", name: "Fokker D.XXIII", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fokker_d23.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fokker_g1a", name: "Fokker G.IA", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fokker_g1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_1_fireball", name: "FR-1 Fireball", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_1_fireball.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amc_34", name: "AMC.34 YR", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amc_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amc_35", name: "AMC.35 (ACG.1)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["AMC.35"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amc_35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amd_35", name: "AMD.35", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amd_35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amd_35_kwk39", name: "AMD.35 (PaK)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["AMD.35"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amd_35_kwk39.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amd_35_sa35", name: "AMD.35 (SA35)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["AMD.35"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amd_35_sa35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_aml_90", name: "AML-90", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_aml_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amr_35_zt3", name: "AMR.35 ZT3", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amr_35_zt3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_10m_acra", name: "AMX-10M", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_10m_acra.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_10p", name: "AMX-10P", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_10p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_10rc", name: "AMX-10RC", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_10rc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_13_75", name: "AMX-13", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_13_75.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_13_75_ss11", name: "AMX-13 (SS.11)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["AMX-13"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_13_75_ss11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_13_90", name: "AMX-13-90", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_13_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_13_chaffee", name: "AMX-13-M24", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_13_chaffee.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_13_dca_40", name: "AMX-13 DCA 40", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_13_dca_40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_13_fl_11", name: "AMX-13 (FL11)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["AMX-13"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_13_fl_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_13_hot", name: "AMX-13 (HOT)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["AMX-13"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_13_hot.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_1972", name: "AMX-30 (1972)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_1972.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_acra", name: "AMX-30 ACRA", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_acra.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_auf_1", name: "AuF1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_auf_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_b2", name: "AMX-30B2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_b2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_b2_brenus", name: "AMX-30B2 BRENUS", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_b2_brenus.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_dca", name: "AMX-30 S DCA", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_dca.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_roland", name: "Roland 1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_roland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_30_super", name: "AMX-30 Super", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_30_super.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_32", name: "AMX-32", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_32.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_32_105", name: "AMX-32 (105)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["AMX-32"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_32_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_40", name: "AMX-40", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_50", name: "AMX-50 (TOA100)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["AMX-50"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_50.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_50_1950", name: "AMX-50 (TO90/930)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["AMX-50"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_50_1950.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_50_foch", name: "AMX-50 Foch", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_50_foch.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_50_surbaisse", name: "AMX-50 Surbaissé", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_50_surbaisse.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_50_surblinde", name: "AMX-50 Surblindé", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_50_surblinde.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_elc_901", name: "ELC 901", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_elc_901.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_elc_bis", name: "ELC bis", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_elc_bis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_m4", name: "AMX M4", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_m4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_amx_vtt_dca", name: "VTT DCA", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_amx_vtt_dca.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_arl_44", name: "ARL-44", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_arl_44.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_arl_44_acl1", name: "ARL-44 (ACL-1)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["ARL-44"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_arl_44_acl1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_b1_ter", name: "B1 ter", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_b1_ter.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_bat_chat_25t", name: "Char 25t", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_bat_chat_25t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_cckw_353_bofors", name: "CCKW 353 AA", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_cckw_353_bofors.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_char_2c", name: "2C", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_char_2c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_char_2c_bis", name: "2C bis", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_char_2c_bis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_citroen_kegresse_p4t", name: "P.7.T AA", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_citroen_kegresse_p4t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_crotale_ng", name: "ItO 90M", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_crotale_ng.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_crusader_mk_2", name: "Crusader Mk.II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_crusader_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_cv_9035_nl", name: "CV 9035NL", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_cv_9035_nl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_fcm_36", name: "FCM.36", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_fcm_36.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_hotchkiss_h35", name: "H.35", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_hotchkiss_h35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_hotchkiss_h39", name: "H.39", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_hotchkiss_h39.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_hotchkiss_h39_cambronne", name: "H.39 \"Cambronne\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_hotchkiss_h39_cambronne.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_jaguar_ebrc", name: "EBRC Jaguar", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_jaguar_ebrc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leclerc_azur", name: "Leclerc AZUR", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leclerc_azur.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leclerc_s2", name: "Leclerc S2", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leclerc_s2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leclerc_sxxi", name: "Leclerc SXXI", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leclerc_sxxi.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leopard_1a5be", name: "Leopard 1A5BE", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leopard_1a5be.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leopard_2a4nl", name: "Leopard 2A4NL", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leopard_2a4nl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leopard_2a4nl_les", name: "Leopard 2 (OTCo)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leopard_2a4nl_les.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leopard_2a5nl", name: "Leopard 2A5NL", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leopard_2a5nl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_leopard_2a6nl", name: "Leopard 2A6NL", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_leopard_2a6nl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_lorraine_100", name: "CA Lorraine", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_lorraine_100.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_lorraine_155", name: "Lorraine 155 Mle.50", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_lorraine_155.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_lorraine_37l", name: "Lorraine 37L", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_lorraine_37l.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_lorraine_40t", name: "Lorraine 40t", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_lorraine_40t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_lvt_bofors", name: "LVT-4/40", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_lvt_bofors.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_m36b2_cefeo", name: "M36B2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_m36b2_cefeo.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_m44", name: "M44", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_m44.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_m46_patton", name: "M46", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_m46_patton.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_m4a1_sherman_fl_10", name: "M4A1 (FL10)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_m4a1_sherman_fl_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_m4a3_105_sherman", name: "M4A3 (105)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_m4a3_105_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_m4a3e2_sherman_jumbo", name: "M4A3E2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_m4a3e2_sherman_jumbo.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_m4a4_cn_75_50", name: "M4A4 (SA50)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M4A4"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_m4a4_cn_75_50.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_marder_clovis", name: "CLOVIS", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_marder_clovis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_marder_df_105", name: "DF105", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_marder_df_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_mars_15", name: "MARS 15", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_mars_15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_msc", name: "MSC", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_msc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_panhard_ebr_1951", name: "E.B.R. (1951)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["E.B.R."],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_panhard_ebr_1951.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_panhard_ebr_1954", name: "E.B.R. (1954)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["E.B.R."],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_panhard_ebr_1954.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_panhard_ebr_1963", name: "E.B.R. (1963)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["E.B.R."],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_panhard_ebr_1963.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_pzkpfw_v_panther_dauphine", name: "Panther \"Dauphiné\"", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_pzkpfw_v_panther_dauphine.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_renault_d2", name: "D2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_renault_d2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_renault_r39", name: "R.35 (SA38)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["R.35"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_renault_r39.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_samp_t_fcs", name: "FSAF SAMP/T (Mamba) (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["FSAF SAMP/T"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_samp_t_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_samp_t_launcher", name: "FSAF SAMP/T (Mamba) (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["FSAF SAMP/T"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_samp_t_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_sk105_a2", name: "SK-105A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_sk105_a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_somua_sau40", name: "SAu 40", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_somua_sau40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_somua_sm", name: "Somua SM", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_somua_sm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_tpk_641_vpc", name: "TPK 6.41", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_tpk_641_vpc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_vab_santal", name: "SANTAL", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_vab_santal.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_vbci", name: "VBCI", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_vbci.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_vbci2_mct30", name: "VBCI-2 (MCT30)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["VBCI-2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_vbci2_mct30.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_vcac_mephisto", name: "MEPHISTO", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_vcac_mephisto.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fr_vextra_105", name: "Vextra 105", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fr_vextra_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fury_mk1", name: "Fury Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fury_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fury_mk2", name: "Fury Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fury_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_189a_1", name: "Fw 189 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-189a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_1", name: "Fw 190 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_4", name: "Fw 190 A-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190a-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_5", name: "Fw 190 A-5/U12", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190a-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_5_cannons", name: "Fw 190 A-5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190a-5_cannons.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_5_u2", name: "Fw 190 A-5/U2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190a-5_u2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_8", name: "Fw 190 A-8", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190a-8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_8_france", name: "NC.900", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190a-8_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190c", name: "Fw 190 C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190d_12", name: "Fw 190 D-12", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190d-12.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190d_13", name: "Fw 190 D-13", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190d-13.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190d_9", name: "Fw 190 D-9", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190d-9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190f_8", name: "Fw 190 F-8", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw-190f-8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_189c_0", name: "Fw 189 C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw_189c_0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_190a_5_u14", name: "Fw 190 A-5/U14", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw_190a_5_u14.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_fw_200c_1", name: "Fw 200 C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/fw_200c_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g4m1", name: "G4M1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g4m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g5n1", name: "G5N1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g5n1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g8n1", name: "G8N1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g8n1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g_55_serie1", name: "G.55 serie 1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g_55_serie1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g_55_serie1_ss0", name: "G.55 sottoserie 0", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g_55_serie1_ss0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g_55s", name: "G.55S", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g_55s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g_56", name: "G.56", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g_56.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_g_lynx", name: "G-LYNX", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/g_lynx.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_9a33bm3", name: "Osa-AK", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_9a33bm3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_9a35_m", name: "Strela-10M", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_9a35_m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_amd_35_kwk", name: "P204(f) KwK 38", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["P204 KwK 38"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_amd_35_kwk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_amd_35_kwk39", name: "P204(f) KwK 39/1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["P204 KwK 39/1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_amd_35_kwk39.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_begleitpanzer_57", name: "Begleitpanzer 57", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_begleitpanzer_57.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_beutepanzer_mk_iv", name: "Beutepanzer IV", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_beutepanzer_mk_iv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_bmp_1_ddr", name: "SPz BMP-1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_bmp_1_ddr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_boxer_3105", name: "Boxer MGS", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_boxer_3105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_boxer_swatrinf", name: "sWaTrgInf", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_boxer_swatrinf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_erprobungstrager_3_achs_turm", name: "Turm III", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_erprobungstrager_3_achs_turm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_38t_gepard", name: "Flakpanzer 38", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_38t_gepard.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_i_ausf_a", name: "Flakpanzer I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_i_ausf_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_iv_kugelblitz", name: "Kugelblitz", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_iv_kugelblitz.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_iv_ostwind", name: "Ostwind", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_iv_ostwind.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_iv_ostwind_2", name: "Ostwind II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_iv_ostwind_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_iv_ostwind_2_net", name: "Ostwind Ost", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_iv_ostwind_2_net.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_iv_wirbelwind", name: "Wirbelwind", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_iv_wirbelwind.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_v_coelian", name: "Flakpanzer 341", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_v_coelian.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpanzer_zerstorer_45", name: "Zerstörer 45", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpanzer_zerstorer_45.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpz_1a2_gepard", name: "Gepard 1A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpz_1a2_gepard.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flakpz_i_gepard", name: "Gepard", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flakpz_i_gepard.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flarakpz_1", name: "FlaRakPz 1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flarakpz_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_flarakrad", name: "FlaRakRad", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_flarakrad.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_garford_putilov", name: "Garford-Beute", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_garford_putilov.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_infanterie_kampfpanzer_churchill", name: "Pz.Kpfw. Churchill", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_infanterie_kampfpanzer_churchill.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_iris_slm_fcs", name: "IRIS-T SLM (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["IRIS-T SLM"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_iris_slm_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_iris_slm_launcher", name: "IRIS-T SLM (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["IRIS-T SLM"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_iris_slm_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_jaguar_2", name: "Jaguar 2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_jaguar_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_jgdpz_iv_l48", name: "Jagdpanzer IV", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_jgdpz_iv_l48.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_kanonenjagdpanzer", name: "JPz 4-5", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_kanonenjagdpanzer.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_kpz_70", name: "KPz-70", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_kpz_70.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_kpz_t72m1", name: "T-72M1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_kpz_t72m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_kv_1_kwk_40", name: "KW I C 756 (r)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["KW I C 756"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_kv_1_kwk_40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_kv_1b_finland", name: "KV-IB", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_kv_1b_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_kv_2_754r", name: "KW II 754 (r)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["KW II 754"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_kv_2_754r.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_le_kpz_m41", name: "leKPz M41", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_le_kpz_m41.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2_pt14", name: "PT-16/T14 mod.", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2_pt14.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2a4", name: "Leopard 2A4", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2a4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2a4_pzbtl_123", name: "Leopard 2 (PzBtl 123)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2a4_pzbtl_123.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2a4m_can", name: "Leopard 2A4M", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2a4m_can.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2a5", name: "Leopard 2A5", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2a5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2a5_pso", name: "Leopard 2 PSO", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2a5_pso.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2a7v", name: "Leopard 2A7V", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2a7v.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2av", name: "Leopard 2AV", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2av.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2k", name: "Leopard 2K", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_2pl", name: "Leopard 2PL", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_2pl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_a1a1_120", name: "Leopard A1A1 (L/44)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Leopard A1A1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_a1a1_120.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_c2_mexas", name: "C2A1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_c2_mexas.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_leopard_i_a1", name: "Leopard A1A1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_leopard_i_a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_m109g", name: "M109G", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_m109g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_marder_1a1", name: "Marder A1-", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_marder_1a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_marder_1a3", name: "Marder 1A3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_marder_1a3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_mkpz_m47", name: "mKPz M47 G", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_mkpz_m47.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_mkpz_m48a2c", name: "M48A2 C", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_mkpz_m48a2c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_mkpz_m48a2ga2", name: "M48A2 G A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_mkpz_m48a2ga2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_mkpz_super_m48", name: "M48 Super", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_mkpz_super_m48.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_nbfz_vi", name: "Nb.Fz.", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_nbfz_vi.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_panther_ii", name: "Panther II", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_panther_ii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_panzerbefelhswagen_iv_ausf_j", name: "Pz.Bef.Wg.IV J", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_panzerbefelhswagen_iv_ausf_j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_panzerbefelhswagen_jagdpanther", name: "Bfw. Jagdpanther G1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_panzerbefelhswagen_jagdpanther.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_panzerbefelhswagen_vi_p", name: "Pz.Bef.Wg.VI P", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_panzerbefelhswagen_vi_p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_panzerjager_1", name: "Panzerjäger I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_panzerjager_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_panzerjager_panther", name: "Jagdpanther G1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_panzerjager_panther.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_panzerwerfer_42", name: "15 cm Pz.W.42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_panzerwerfer_42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pz_iv_l70", name: "Panzer IV/70(V)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Panzer IV/70"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pz_iv_l70.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pz_iv_l70_a", name: "Panzer IV/70(A)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Panzer IV/70"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pz_iv_l70_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_35t", name: "Pz.35(t)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Pz.35"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_35t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_38t_aufklarungspanzer", name: "Sd.Kfz. 140/1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_38t_aufklarungspanzer.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_38t_ausf_f", name: "Pz.38(t) F", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Pz.38 F"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_38t_ausf_f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_38t_marder_iii_ausf_h", name: "Marder III H", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_38t_marder_iii_ausf_h.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_38t_na", name: "Pz.38(t) n.A.", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Pz.38 n.A."],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_38t_na.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_e_100", name: "E-100", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_e_100.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_ii_ausf_c", name: "Pz.II C", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_ii_ausf_c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_ii_ausf_c_dak", name: "Pz.II C (DAK)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Pz.II C"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_ii_ausf_c_dak.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_ii_ausf_c_td", name: "Pz.II C TD", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_ii_ausf_c_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_ii_ausf_f", name: "Pz.II F", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_ii_ausf_f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_ii_ausf_h", name: "Pz.Sfl.Ic", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_ii_ausf_h.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_b", name: "Pz.III B", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_e", name: "Pz.III E", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_f", name: "Pz.III F", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_j", name: "Pz.III J1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_j_l42", name: "Pz.III J", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_j_l42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_j_td", name: "Pz.III J1 TD", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_j_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_l", name: "Pz.III L", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_l.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_m", name: "Pz.III M", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iii_ausf_n", name: "Pz.III N", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iii_ausf_n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iv_ausf_c", name: "Pz.IV C", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iv_ausf_c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iv_ausf_e", name: "Pz.IV E", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iv_ausf_e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iv_ausf_f", name: "Pz.IV F1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iv_ausf_f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iv_ausf_f2", name: "Pz.IV F2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iv_ausf_f2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iv_ausf_g", name: "Pz.IV G", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iv_ausf_g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iv_ausf_h", name: "Pz.IV H", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iv_ausf_h.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_iv_ausf_j", name: "Pz.IV J", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_iv_ausf_j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_v_ausf_d_panther", name: "Panther D", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_v_ausf_d_panther.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_v_ausf_f_panther", name: "Panther F", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_v_ausf_f_panther.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_v_ausf_g_panther", name: "Panther G", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_v_ausf_g_panther.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_v_ersatz_m10", name: "Ersatz M10", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_v_ersatz_m10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46", name: "Tiger II (10.5 cm Kw.K)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_b_tiger_iih_kwk46.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_ausf_b_tiger_iih_sla", name: "Tiger II (Sla.16)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_b_tiger_iih_sla.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_ausf_b_tiger_iip", name: "Tiger II (Nr.1-50)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_b_tiger_iip.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_ausf_e_tiger", name: "Tiger E", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_e_tiger.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_ausf_h1_tiger", name: "Tiger H1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_h1_tiger.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_ausf_h1_tiger_east", name: "Tiger Ost", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_h1_tiger_east.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_ausf_h1_tiger_west", name: "Tiger West", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_ausf_h1_tiger_west.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzkpfw_vi_tiger_p", name: "VK 45.01 (P)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["VK 45.01"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzkpfw_vi_tiger_p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzsfl_iva_dickermax", name: "Dicker Max", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzsfl_iva_dickermax.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_pzsflk40_sturer_emil", name: "Sturer Emil", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_pzsflk40_sturer_emil.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_radpanzer_90", name: "Radkampfwagen 90", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_radpanzer_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_raketenjagdpanzer_2", name: "RakJPz 2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_raketenjagdpanzer_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_raketenjagdpanzer_2_hot", name: "RakJPz 2 (HOT)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["RakJPz 2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_raketenjagdpanzer_2_hot.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_ru251", name: "Ru 251", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_ru251.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_schutzenpanzer_puma_vjtf", name: "Puma VJTF", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_schutzenpanzer_puma_vjtf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_schutzenpanzer_puma_vjtf_mod", name: "Puma u14", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_schutzenpanzer_puma_vjtf_mod.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_221_s_pz_b_41", name: "Sd.Kfz.221 (s.Pz.B.41)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Sd.Kfz.221"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_221_s_pz_b_41.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_234_1", name: "Sd.Kfz.234/1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_234_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_234_2", name: "Sd.Kfz.234/2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_234_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_234_2_mod", name: "Sd.Kfz.234/2 \"Biene\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_234_2_mod.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_234_2_td", name: "Sd.Kfz.234/2 TD", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_234_2_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_234_3", name: "Sd.Kfz.234/3", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_234_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_234_4", name: "Sd.Kfz.234/4", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_234_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_251_10", name: "Sd.Kfz.251/10", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_251_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_251_21", name: "Sd.Kfz.251/21", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_251_21.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_251_22", name: "Sd.Kfz.251/22", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_251_22.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_251_9", name: "Sd.Kfz.251/9", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_251_9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_6_2_flak36", name: "Sd.Kfz. 6/2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_6_2_flak36.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sdkfz_9_flak37", name: "8,8 cm Flak 37 Sfl.", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sdkfz_9_flak37.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sk105_a2", name: "JaPz.K A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sk105_a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sppz2_luchs_a2", name: "Luchs A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sppz2_luchs_a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_spz_12_3", name: "SPz 12-3 LGS", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_spz_12_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_spz_oerlikon_raketenautomat", name: "Raketenautomat", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_spz_oerlikon_raketenautomat.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_stug_iii_ausf_a", name: "StuG III A", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_stug_iii_ausf_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_stug_iii_ausf_f", name: "StuG III F", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_stug_iii_ausf_f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_stug_iii_ausf_g", name: "StuG III G", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_stug_iii_ausf_g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_stuh_iii_ausf_g", name: "StuH 42 G", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_stuh_iii_ausf_g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sturmmorser_sturmtiger", name: "38 cm Sturmmörser", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sturmmorser_sturmtiger.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_sturmpanzer_ii", name: "15cm sIG 33 B Sfl", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_sturmpanzer_ii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_t_34_747", name: "T 34 747 (r)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["T 34 747"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_t_34_747.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_th_400", name: "R400", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_th_400.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_th_800_bismark", name: "Class 3 (P)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Class 3"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_th_800_bismark.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_thyssen_henschel_tam", name: "TAM", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_thyssen_henschel_tam.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_thyssen_henschel_tam_2c", name: "TAM 2C", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_thyssen_henschel_tam_2c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_thyssen_henschel_tam_2ip", name: "TAM 2IP", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_thyssen_henschel_tam_2ip.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_vilkas", name: "Vilkas", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_vilkas.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_vk_3002m", name: "VK 3002 (M)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["VK 3002"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_vk_3002m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_vsw_flak_41", name: "VFW", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_vsw_flak_41.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_vt_1_2", name: "VT1-2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_vt_1_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_waffentrager_krupp_steyr", name: "Waffenträger", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_waffentrager_krupp_steyr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_wiesel_1_mk20", name: "Wiesel 1A4", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_wiesel_1_mk20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_wiesel_1_tow", name: "Wiesel 1A2", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_wiesel_1_tow.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_germ_wiesel_2_adwc", name: "Ozelot", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/germ_wiesel_2_adwc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gl_832", name: "GL.832HY", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gl_832.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_j8a", name: "J8A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_j8a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_j8a_iacobi", name: "Iacobi's J8A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_j8a_iacobi.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_mk1_belgium", name: "Gladiator Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_mk1_belgium.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_mk2", name: "Gladiator Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_mk2_france", name: "Gladiator Mk IIF", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_mk2_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_mk2_navy", name: "Sea Gladiator Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_mk2_navy.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_mk2_silver", name: "Gladiator Mk IIS", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_mk2_silver.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_gladiator_mk2_tuck", name: "Tuck's Gladiator Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/gladiator_mk2_tuck.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_go229_v3", name: "Ho 229 V3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/go229_v3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h_75a_1_france", name: "H-75A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h-75a-1_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h_75a_2_finland", name: "Hawk H-75A-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h-75a-2_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h_75a_4_france", name: "H-75A-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h-75a-4_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h_75m_china", name: "H-75M", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h-75m_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h6k4", name: "H6K4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h6k4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h8k2", name: "H8K2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h8k2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h8k3", name: "H8K3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h8k3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_h_34", name: "H-34", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/h_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_halifax_mk3", name: "Halifax B Mk IIIa", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/halifax_mk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_harrier_frs1", name: "Sea Harrier FRS.1", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/harrier_frs1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_harrier_frs1_early", name: "Sea Harrier FRS.1 (e)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Sea Harrier FRS.1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/harrier_frs1_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_harrier_gr1", name: "Harrier GR.1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/harrier_gr1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_harrier_gr3", name: "Harrier GR.3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/harrier_gr3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_harrier_gr7", name: "Harrier GR.7", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/harrier_gr7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_harrier_t10", name: "Harrier T.10", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/harrier_t10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hawk_200", name: "Hawk 200", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hawk_200.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hawk_200_rda", name: "Hawk 200 RDA", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hawk_200_rda.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hawk_209_indonesia", name: "Hawk 209", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hawk_209_indonesia.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hawk_iii", name: "Hawk III", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hawk_iii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_111h_16_winter", name: "He 111 H-16", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he-111h-16_winter.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_111h_2", name: "He 111 H-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he-111h-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_111h_6", name: "He 111 H-6", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he-111h-6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_162a_1", name: "He 162 A-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he-162a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_162a_2", name: "He 162 A-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he-162a-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_177a_3", name: "He 177 A-3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he-177a-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_177a_5", name: "He 177 A-5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he-177a-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he51a1", name: "He 51 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he51a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he51b1", name: "He 51 B-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he51b1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he51b_2w", name: "He 51 B-2/H", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he51b_2w.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he51c1", name: "He 51 C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he51c1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he51c1_late", name: "He 51 C-1/L", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he51c1_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_100d_1", name: "He 100 D-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_100d_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_112a_0", name: "He 112 A-0", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_112a_0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_112b_0", name: "He 112 B-0", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_112b_0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_112b_1", name: "He 112 B-1/U2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_112b_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_112b_2", name: "He 112 B-2/U2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_112b_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_112v_5", name: "He 112 V-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_112v_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_115a_2_sweden", name: "T 2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_115a_2_sweden.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_115c_1", name: "He 115 C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_115c_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_he_219a_7", name: "He 219 A-7", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/he_219a_7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hellcat_fmk1", name: "Hellcat Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hellcat_fmk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hkp2", name: "HKP2", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hkp2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hkp3c", name: "HKP3C", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hkp3c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hkp9a_cb2", name: "HKP9A", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hkp9a_cb2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hkp9a_cb3_fc", name: "HKP9A (FC)", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["HKP9A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hkp9a_cb3_fc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hornet_mk1", name: "Hornet Mk.I", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hornet_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hornet_mk3", name: "Hornet Mk.III", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hornet_mk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hp52_hampden_mk1_late", name: "Hampden Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hp52_hampden_mk1_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hp52_hampden_tbmk1", name: "Hampden TB Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hp52_hampden_tbmk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hp_12", name: "H.P.12", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hp_12.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hs_123a_1", name: "Hs 123 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hs-123a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hs_129b_2", name: "Hs 129 B-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hs-129b-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hs_129b_2_romania", name: "Hs 129 B-2 (Romania)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Hs 129 B-2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hs-129b-2_romania.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hs_129b_3", name: "Hs 129 B-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hs-129b-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hudson_mk_v", name: "Hudson Mk V", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hudson_mk_v.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hunter_f1", name: "Hunter F.1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hunter_f1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hunter_f50_sweden", name: "J34", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hunter_f50_sweden.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hunter_f58_switzerland", name: "Hunter F.58", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hunter_f58_switzerland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hunter_f58a_1971_switzerland", name: "Hunter F.58A (1971)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Hunter F.58A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hunter_f58a_1971_switzerland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hunter_f6", name: "Hunter F.6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hunter_f6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hunter_f9_rhodesia", name: "Hunter FGA.9", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hunter_f9_rhodesia.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hurricane_mk1", name: "Hurricane Mk I/L", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hurricane_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hurricane_mk1_late_ep", name: "Hurricane Mk.I/L FAA M", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hurricane_mk1_late_ep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hurricane_mk1b", name: "Sea Hurricane Mk IB", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hurricane_mk1b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hurricane_mk1c", name: "Sea Hurricane Mk IC", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hurricane_mk1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hurricane_mk4", name: "Hurricane Mk IV", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hurricane_mk4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hurricanemkii", name: "Hurricane Mk IIB/Trop", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hurricanemkii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_hurricanemkii_ussr", name: "Hurricane Mk IIB", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/hurricanemkii_ussr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_153_m62", name: "I-153 M-62", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-153_m62.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_153_m62_zhukovskiy", name: "Zhukovsky's I-153-M62", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-153_m62_zhukovskiy.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_153p", name: "I-153P", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-153p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_15_1934", name: "I-15 WR", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-15_1934.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_15_1935", name: "I-15 M-22", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-15_1935.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_15_1935_moscow", name: "I-15 M-25", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-15_1935_moscow.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_15bis", name: "I-15bis", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-15bis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_15bis_krasnolutsky", name: "Krasnolutsky's I-15bis", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-15bis_krasnolutsky.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_chung_28", name: "I-16 Chung 28", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_chung_28.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_type10", name: "I-16 type 10", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_type10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_type17_china", name: "I-16 type 17", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_type17_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_type18", name: "I-16 type 18", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_type18.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_type24", name: "I-16 type 24", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_type24.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_type27", name: "I-16 type 27", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_type27.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_type28", name: "I-16 type 28", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_type28.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_16_type5", name: "I-16 type 5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i-16_type5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_180", name: "I-180S", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i_180.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_185_m71_standard", name: "I-185 (M-71)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["I-185"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i_185_m71_standard.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_185_m82", name: "I-185 (M-82)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["I-185"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i_185_m82.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_225", name: "I-225", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i_225.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_i_29", name: "I-29", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/i_29.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ia_58a_pucara", name: "IA.58A Pucara", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ia_58a_pucara.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_iar_316b", name: "IAR 316B", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/iar_316b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_iar_81c", name: "IAR-81C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/iar_81c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_iar_81c_db_605", name: "IAR-81C (DB 605)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["IAR-81C"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/iar_81c_db_605.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_iar_93b", name: "IAR-93B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/iar_93b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_10", name: "IL-10", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il-10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_10_1946", name: "IL-10 (1946)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["IL-10"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il-10_1946.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_2i", name: "IL-2 (1942)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il-2i.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_2m", name: "IL-2M type 3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il-2m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_2m_mstitel", name: "IL-2M \"Avenger\"", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il-2m_mstitel.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_4", name: "IL-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_28", name: "IL-28", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_28.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_28_china", name: "H-5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_28_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_28sh", name: "IL-28Sh", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_28sh.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_2_1941", name: "IL-2 (1941)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_2_1941.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_2_37_1943", name: "IL-2-37", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_2_37_1943.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_2_m82", name: "IL-2 M-82", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_2_m82.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_2m_1943", name: "IL-2M (1943)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["IL-2M"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_2m_1943.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_8_1944", name: "IL-8 (1944)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["IL-8"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_8_1944.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_centurion_mk_5_shot", name: "Sho't", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_centurion_mk_5_shot.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_centurion_shot_kal_alef", name: "Sho't Kal Alef", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_centurion_shot_kal_alef.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_centurion_shot_kal_d", name: "Sho't Kal Dalet", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_centurion_shot_kal_d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_centurion_shot_kal_gimel", name: "Sho't Kal Gimel", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_centurion_shot_kal_gimel.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_eitan", name: "Eitan (P)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Eitan"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_eitan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_hunter_afv", name: "Hunter AFV", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_hunter_afv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_m109a1", name: "Rochev", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_m109a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_m113_hvms", name: "Bardelas/60mm HVMS", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_m113_hvms.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_m113a1_tow", name: "Giraf", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_m113a1_tow.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_m163_vulcan", name: "Hovet", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_m163_vulcan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_m48a1_patton_iii", name: "Magach 1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_m48a1_patton_iii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_m_51", name: "M-51", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_m_51.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_m_51_w", name: "M-51 (W)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["M-51"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_m_51_w.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_machbet", name: "Machbet", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_machbet.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_2", name: "Magach 2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_3", name: "Magach 3 (ERA)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Magach 3"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_3_idf", name: "Magach 3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_3_idf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_5", name: "Magach 5", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6", name: "Magach 6", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6_rocket", name: "Magach Hydra", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6_rocket.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6a", name: "Magach 6A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6b", name: "Magach 6B", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6b_gal", name: "Magach 6B Gal", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6b_gal.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6b_gal_batash", name: "Gal Batash", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6b_gal_batash.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6c", name: "Magach 6C", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6m", name: "Magach 6M", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_6r", name: "Magach 6R", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_6r.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_magach_7c", name: "Magach 7C", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_magach_7c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_1", name: "Merkava Mk.1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_1b", name: "Merkava Mk.1B", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_1b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_2b_early", name: "Merkava Mk.2B", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_2b_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_2d", name: "Merkava Mk.2D", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_2d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_3_raam_segol", name: "Ra'am Sagol", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_3_raam_segol.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_3b", name: "Merkava Mk.3B", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_3b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_3c", name: "Merkava Mk.3C", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_3c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_4_lic", name: "Merkava Mk.4 LIC", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_4_lic.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_4b", name: "Merkava Mk.4B", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_4b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_merkava_mk_4m", name: "Merkava Mk.4M", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_merkava_mk_4m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_mim_72_chaparral", name: "Imp.Chaparral", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_mim_72_chaparral.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_namer_rcws_30", name: "Namer 30", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_namer_rcws_30.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_namer_tsrikhon", name: "Namer Tsrikhon", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_namer_tsrikhon.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_sabra_mk1", name: "Sabra Mk.I", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_sabra_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_sholef", name: "Sholef", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_sholef.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_spyder_aio", name: "SPYDER", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_spyder_aio.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_ss_11_halftrack", name: "Zachlam Tager", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_ss_11_halftrack.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_tcm_20", name: "TCM-20", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_tcm_20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_tiran_4", name: "Tiran 4", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_tiran_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_tiran_4_sh", name: "Tiran 4S", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_tiran_4_sh.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_tiran_6", name: "Tiran 6", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_tiran_6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_zsu_23_4", name: "ZSU-23-4V", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_zsu_23_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_il_zsu_57_2", name: "ZSU-57-2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/il_zsu_57_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_intruder_mk_1", name: "Havoc Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/intruder_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_2s1", name: "2S1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_2s1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_39m_csaba", name: "Csaba", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_39m_csaba.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_40_43m_zrinyi_2", name: "Zrinyi II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_40_43m_zrinyi_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_40m_turan_1", name: "Turan I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_40m_turan_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_41m_turan_2", name: "Turan II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_41m_turan_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_43m_turan_3", name: "Turan III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_43m_turan_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_44m_zrinyi_1", name: "Zrinyi I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_44m_zrinyi_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_9a33bm3", name: "Osa-AKM", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_9a33bm3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_ab_41", name: "AB 41", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_ab_41.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_ab_43", name: "AB 43", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_ab_43.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_ariete_amv_pt1", name: "Ariete AMV", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_ariete_amv_pt1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_as_42_47", name: "AS 42/47", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_as_42_47.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_as_42_metropolitana", name: "AS 42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_as_42_metropolitana.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_aubl_74_60_70m", name: "AUBL/74 HVG", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_aubl_74_60_70m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_b1_centauro", name: "Centauro I 105", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_b1_centauro.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_b1_centauro_romor", name: "Centauro I 105 R", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_b1_centauro_romor.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_breda_52_autocannone", name: "Breda 90/53", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_breda_52_autocannone.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_btr_80a_hungary", name: "BTR-80A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_btr_80a_hungary.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_c13_t90", name: "C13 T90", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_c13_t90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_c13_tua", name: "C13/TUA", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_c13_tua.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_c1_ariete_certezza", name: "Ariete Certezza", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_c1_ariete_certezza.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_c1_ariete_preserie", name: "Ariete (P)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_c1_ariete_preserie.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_c1_ariete_pso", name: "Ariete PSO", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_c1_ariete_pso.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_centauro_2", name: "Centauro II (P)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Centauro II"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_centauro_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_centauro_mgs_120", name: "Centauro I 120", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_centauro_mgs_120.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_centauro_rgo_120", name: "Centauro RGO", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_centauro_rgo_120.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_dardo_vcc", name: "Dardo", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_dardo_vcc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_fiat_6614_106sr", name: "FIAT 6614", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_fiat_6614_106sr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_fiat_6614_firos", name: "FIROS 6", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_fiat_6614_firos.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_fiat_6616_cockerill", name: "AUBL/74", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_fiat_6616_cockerill.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_fiat_6616_ub", name: "FIAT 6616UB", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_fiat_6616_ub.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_fiat_cm52", name: "CM52", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_fiat_cm52.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_freccia", name: "Freccia", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_freccia.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_freccia_hitfist_ows", name: "Freccia OWS 30", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_freccia_hitfist_ows.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_kf_41", name: "KF41", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_kf_41.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_l3_cc", name: "L3/33 CC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_l3_cc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_l6", name: "L6/40", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_l6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_l6_leone", name: "L6/40 (31 Rgt.)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["L6/40"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_l6_leone.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_lancia3ro_100", name: "Lancia 3Ro (100/17)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Lancia 3Ro"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_lancia3ro_100.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_leopard_1a2", name: "Leopard 1A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_leopard_1a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_leopard_2a7_hungary", name: "Leopard 2A7HU", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_leopard_2a7_hungary.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_leopard_bofors", name: "Leopard 40/70", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_leopard_bofors.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m11_39", name: "M11/39", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m11_39.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m13_40_serie_1", name: "M13/40 (I)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m13_40_serie_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m13_40_serie_2", name: "M13/40 (II)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m13_40_serie_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m13_40_serie_3", name: "M13/40 (III)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m13_40_serie_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m14_41", name: "M14/41", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m14_41.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m14_41_47_40", name: "M14/41 (47/40)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M14/41"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m14_41_47_40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m15_42", name: "M15/42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m15_42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m15_42_contraereo", name: "M42 Contraereo", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m15_42_contraereo.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m26_ariete", name: "M26 \"D.C.Ariete\"", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m26_ariete.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m26a1_pershing", name: "M26A1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m26a1_pershing.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m36b1", name: "M36B1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m36b1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m3a3_stuart", name: "M3A3", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m3a3_stuart.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m47_105", name: "M47 (105/55)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m47_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m4a4_sherman", name: "Sherman V", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m4a4_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_m60a1_ariete", name: "M60A1 \"D.C.Ariete\"", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_m60a1_ariete.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_of_40_mk_1", name: "OF-40", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_of_40_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_of_40_mk_2a", name: "OF-40 Mk.2A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_of_40_mk_2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_of_40_mtca", name: "OF-40 (MTCA)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["OF-40"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_of_40_mtca.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_oto_r3_106sr", name: "R3 T106 FA", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_oto_r3_106sr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_oto_r3_t20_fa", name: "R3 T20 FA-HS", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_oto_r3_t20_fa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_otobreda_sidam_25", name: "SIDAM 25", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_otobreda_sidam_25.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_otobreda_sidam_25_mistral", name: "SIDAM 25 (Mistral)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["SIDAM 25"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_otobreda_sidam_25_mistral.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_otomatic", name: "OTOMATIC", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_otomatic.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_p_26_40", name: "P40 \"G.C. Leoncello\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_p_26_40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_palmaria", name: "Palmaria", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_palmaria.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_pzh_2000_hu", name: "PzH 2000HU", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_pzh_2000_hu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_pzkpfw_vi_ausf_e_tiger", name: "Tigris", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_pzkpfw_vi_ausf_e_tiger.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_sahariano", name: "Celere Sahariano", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_sahariano.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_samp_t_fcs", name: "FSAF SAMP/T (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["FSAF SAMP/T"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_samp_t_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_samp_t_launcher", name: "FSAF SAMP/T (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["FSAF SAMP/T"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_samp_t_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_breda_501", name: "Breda 501", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_breda_501.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_l40", name: "47/32 L40", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_l40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m41_75_18", name: "75/18 M41", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m41_75_18.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m41_75_32", name: "75/32 M41", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m41_75_32.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m41m_90", name: "90/53 M41M", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m41m_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m42_75_34", name: "75/34 M42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m42_75_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m43_105", name: "105/25 M43", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m43_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m43_105_leoncello", name: "M43 \"G.C.Leoncello\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m43_105_leoncello.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m43_75_34", name: "75/34 M43", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m43_75_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_semovente_m43_75_46", name: "75/46 M43", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_semovente_m43_75_46.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_sherman_75_37", name: "Sherman I Composito", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_sherman_75_37.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_sherman_vii", name: "Sherman Ic", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_sherman_vii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_toldi_ii_a", name: "Toldi IIA", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_toldi_ii_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_vbc_pt2", name: "VBC (PT2)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["VBC"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_vbc_pt2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_vcc_80_hitfist_30", name: "VCC-80/30", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_vcc_80_hitfist_30.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_vcc_80_hitfist_60", name: "VCC-80/60", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_vcc_80_hitfist_60.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_it_vrcc_centauro", name: "VRCC", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/it_vrcc_centauro.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_itp_m1", name: "ITP (M-1)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["ITP"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/itp_m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j1n1_mod11_early", name: "J1N1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j1n1_mod11_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j2m2", name: "J2M2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j2m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j2m3", name: "J2M3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j2m3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j2m4_kai", name: "J2M4 Kai", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j2m4_kai.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j2m5", name: "J2M5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j2m5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j2m5_30mm", name: "J2M5 (Type 5)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["J2M5"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j2m5_30mm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j5n1", name: "J5N1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j5n1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j6b", name: "J6B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j6b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j6k1", name: "J6K1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j6k1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j7w1", name: "J7W1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j7w1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j8m1", name: "Ki-200", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j8m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j9_early", name: "J9 Early", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j9_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_10a", name: "J-10A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_10a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_10c", name: "J-10C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_10c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_11a", name: "J-11A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_11a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_11b", name: "J-11B", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_11b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_15t", name: "J-15T", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_15t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_22m1a", name: "J-22M1A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_22m1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_7_mk2", name: "J-7II", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_7_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_7d", name: "J-7D", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_7d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_7e", name: "J-7E", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_7e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_8b", name: "J-8B", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_8b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_j_8f", name: "J-8F", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/j_8f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jaguar_e", name: "Jaguar E", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jaguar_e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jaguar_gr1", name: "Jaguar GR.1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jaguar_gr1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jaguar_gr1a", name: "Jaguar GR.1A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jaguar_gr1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_javelin_fmk9", name: "Javelin F.(A.W.) Mk.9", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Javelin F. Mk.9"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/javelin_fmk9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jf_17", name: "JF-17", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jf_17.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jh_7", name: "JH-7", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jh_7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jh_7a", name: "JH-7A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jh_7a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jh_7a2", name: "JH-7A2", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jh_7a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jh_7a_prototype", name: "JH-7A Prototype", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jh_7a_prototype.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_btr_3e1", name: "BTR-3E1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_btr_3e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_halftrack_m16", name: "M16 MGMC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_halftrack_m16.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_hiro_sha", name: "Ro-Go Exp.", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_hiro_sha.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_icv_ifv_prototype", name: "Type 24 ICV (P)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Type 24 ICV"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_icv_ifv_prototype.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_icv_prototype", name: "Type 25 RCV (P)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Type 25 RCV"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_icv_prototype.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_leopard_2ri", name: "Leopard 2RI", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_leopard_2ri.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_m163_vulcan", name: "M163", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_m163_vulcan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_m19", name: "M19A1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_m19.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_m36b2_jgsdf", name: "M36", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_m36b2_jgsdf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_m41_walker_bulldog", name: "M41A1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_m41_walker_bulldog.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_m4a3e8_76w_sherman", name: "M4A3 (76) W", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["M4A3 W"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_m4a3e8_76w_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_navy_120mm_spg", name: "Chi-Ha LG", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_navy_120mm_spg.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_oplot_t", name: "BM Oplot-T", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_oplot_t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_pzkpfw_vi_ausf_e_tiger", name: "Heavy Tank No.6", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_pzkpfw_vi_ausf_e_tiger.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_st_a1", name: "ST-A1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_st_a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_st_a2", name: "ST-A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_st_a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_st_a3", name: "ST-A3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_st_a3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_st_b1", name: "STB-2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_st_b1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_stingray", name: "Stingray", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_stingray.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_sub_i_ii_20mm", name: "SUB-I-II", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_sub_i_ii_20mm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_03_chusam_fcs", name: "Type 03 (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Type 03"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_03_chusam_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_03_chusam_launcher", name: "Type 03 (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Type 03"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_03_chusam_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_10_prototype", name: "TKX (P)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_10_prototype.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_16", name: "Type 16", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_16.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_16_mcv_prot", name: "Type 16 (P)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 16"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_16_mcv_prot.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_16_mod", name: "Type 16 (FPS)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 16"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_16_mod.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_1_chi_he", name: "Chi-He", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_1_chi_he.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_1_chi_he_5th_regiment", name: "Chi-He (5th Regiment)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Chi-He"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_1_chi_he_5th_regiment.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_2_ho_i", name: "Ho-I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_2_ho_i.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_2_ho_ni_2", name: "Ho-Ni II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_2_ho_ni_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_2_ka_mi", name: "Ka-Mi", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_2_ka_mi.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_3_chi_nu", name: "Chi-Nu", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_3_chi_nu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_3_chi_nu_75cm_type_5", name: "Chi-Nu II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_3_chi_nu_75cm_type_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_3_ho_ni_i", name: "Ho-Ni I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_3_ho_ni_i.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_3_ho_ni_iii", name: "Ho-Ni III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_3_ho_ni_iii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_3_ka_chi", name: "Ka-Chi", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_3_ka_chi.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_4_chi_to", name: "Chi-To", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_4_chi_to.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_4_chi_to_late", name: "Chi-To Late", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_4_chi_to_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_4_ho_ro", name: "Ho-Ro", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_4_ho_ro.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_5_chi_ri", name: "Chi-Ri", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_5_chi_ri.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_5_ho_ri_production", name: "Ho-Ri Production", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_5_ho_ri_production.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_5_ho_ri_prototype", name: "Ho-Ri Prototype", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_5_ho_ri_prototype.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_5_na_to", name: "Na-To", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_5_na_to.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_60_atm", name: "Type 60 ATM", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_60_atm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_60_sprg", name: "Type 60 SPRG (C)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 60 SPRG"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_60_sprg.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_61", name: "Type 61", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_61.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_61_mod", name: "Type 61 (B)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 61"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_61_mod.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_74", name: "Type 74 (E)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 74"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_74.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_74_c", name: "Type 74 (C)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 74"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_74_c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_74_f", name: "Type 74 (F)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 74"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_74_f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_74_mod_g_kai", name: "Type 74 (G)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 74"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_74_mod_g_kai.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_74_red_star", name: "Type 74 Red Star", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_74_red_star.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_75", name: "Type 75 SPH", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_75.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_75_mlrs", name: "Type 75 MLRS", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_75_mlrs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_81_tansam", name: "Type 81 (C)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Type 81"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_81_tansam.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_81_tansam_fcs", name: "Tan-SAM Kai (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Tan-SAM Kai"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_81_tansam_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_81_tansam_launcher", name: "Tan-SAM Kai (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Tan-SAM Kai"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_81_tansam_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_87", name: "Type 87", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_87.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_87_rcv", name: "Type 87 RCV", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_87_rcv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_87_rcv_prot", name: "Type 87 RCV (P)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Type 87 RCV"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_87_rcv_prot.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_89", name: "Type 89", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_89.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_89b_i_go_otsu", name: "I-Go Ko", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_89b_i_go_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_90", name: "Type 90", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_90b", name: "Type 90 (B)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Type 90"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_90b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_90b_camo", name: "Type 90 (B) \"Fuji\"", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Type 90 \"Fuji\""],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_90b_camo.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_93", name: "Type 93", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_93.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_94", name: "Type 94", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_94.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_95_ha_go_commander", name: "Ha-Go Commander", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_95_ha_go_commander.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_95_heavy", name: "Ro-Go", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_95_heavy.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_95_so_ki", name: "So-Ki", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_95_so_ki.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_97_chi_ha_12cm", name: "Chi-Ha Short Gun", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_97_chi_ha_12cm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_97_kai_td", name: "Chi-Ha Kai TD", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_97_kai_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_98_ke_ni", name: "Ke-Ni", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_98_ke_ni.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_jp_type_98_ta_se", name: "Ta-Se", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/jp_type_98_ta_se.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_188a_2", name: "Ju 188 A-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-188a-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_288c", name: "Ju 288 C", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-288c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_388j", name: "Ju 388 J", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-388j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_87b_2", name: "Ju 87 B-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-87b-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_87d_3", name: "Ju 87 D-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-87d-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_87d_5", name: "Ju 87 D-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-87d-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_87g_1", name: "Ju 87 G-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-87g_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_87g_2", name: "Ju 87 G-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-87g_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_87r_2", name: "Ju 87 R-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-87r-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_87r_2_snake", name: "Ju 87 R-2 Libya", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-87r-2_snake.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_88a_1", name: "Ju 88 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-88a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_88a_4", name: "Ju 88 A-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-88a-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ju_88c_6", name: "Ju 88 C-6", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ju-88c-6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ka_29", name: "Ka-29", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ka_29.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_kfir_c10_colombia", name: "Kfir C.10", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/kfir_c10_colombia.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_kfir_c2", name: "Kfir C.2", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/kfir_c2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_kfir_c7", name: "Kfir C.7", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/kfir_c7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_kfir_canard", name: "Kfir Canard", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/kfir_canard.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_27_otsu", name: "Ki-27 Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-27_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_27_otsu_ep", name: "Ki-27 Otsu Tachiarai", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-27_otsu_ep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_45_hei", name: "Ki-45 Hei", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-45_hei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_45_hei_tei_china", name: "Ki-45 Hei/Tei", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-45_hei_tei_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_45_ko", name: "Ki-45 Ko", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-45_ko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_45_otsu", name: "Ki-45 Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-45_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_45_tei", name: "Ki-45 Tei", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-45_tei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_49_1", name: "Ki-49-I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-49_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_49_2a", name: "Ki-49-IIa", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-49_2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_49_2b", name: "Ki-49-IIb", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-49_2b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_49_2b_late", name: "Ki-49-IIb/L", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-49_2b_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_83", name: "Ki-83", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-83.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_96", name: "Ki-96", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki-96.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_100_2", name: "Ki-100-II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_100_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_100_early", name: "Ki-100", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_100_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_102_otsu", name: "Ki-102 Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_102_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_108", name: "Ki-108 Kai", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_108.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_109", name: "Ki-109", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_109.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_10_1", name: "Ki-10-I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_10_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_10_1_commander", name: "Ki-10-I C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_10_1_commander.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_10_2", name: "Ki-10-II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_10_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_10_2_commander", name: "Ki-10-II C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_10_2_commander.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_21_1hei", name: "Ki-21-I Hei", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_21_1hei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_21_1ko", name: "Ki-21-Ia", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_21_1ko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_32", name: "Ki-32", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_32.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_43_1", name: "Ki-43-I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_43_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_43_2", name: "Ki-43-II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_43_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_43_3_ko", name: "Ki-43-III Ko", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_43_3_ko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_43_3_otsu", name: "Ki-43-III Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_43_3_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_44_1", name: "Ki-44-I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_44_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_44_1_ep", name: "Ki-44-I 34", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_44_1_ep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_44_2_hei", name: "Ki-44-II Hei", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_44_2_hei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_44_2_otsu", name: "Ki-44-II Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_44_2_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_48_2_otsu", name: "Ki-48-II Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_48_2_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_61_1a_hei", name: "Ki-61-I Hei", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_61_1a_hei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_61_1a_hei_ep", name: "Tada's Ki-61-I Hei", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_61_1a_hei_ep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_61_1a_ko", name: "Ki-61-I Ko", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_61_1a_ko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_61_1a_otsu", name: "Ki-61-I Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_61_1a_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_61_1a_otsu_usa", name: "Ki-61-Ib", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_61_1a_otsu_usa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_61_1a_tei", name: "Ki-61-I Tei", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_61_1a_tei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_61_2_early", name: "Ki-61-II Otsu Kai", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_61_2_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_67_1_ko", name: "Ki-67-I Ko", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_67_1_ko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_67_1_otsu", name: "Ki-67-I Otsu", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_67_1_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_84_hei", name: "Ki-84 Hei", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_84_hei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_84_ko", name: "Ki-84 Ko", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_84_ko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_84_otsu", name: "Ki-84 Otsu", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_84_otsu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_87", name: "Ki-87", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_87.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ki_94_2", name: "Ki-94-II", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ki_94_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_kitsuka", name: "Kikka", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/kitsuka.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_kor_1", name: "KOR-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/kor_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_kor_2", name: "KOR-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/kor_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_l_39za", name: "L-39ZA Albatros", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/l_39za.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_l_39za_art_thailand", name: "L-39ZA/ART Albatros", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/l_39za_art_thailand.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_11", name: "La-11", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_15", name: "La-15", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_5_type39", name: "La-5F", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-5_type39.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_5fn", name: "La-5FN", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-5fn.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_7", name: "La-7", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_7_dolgushin", name: "Dolgushin's La-7", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-7_dolgushin.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_7b_20", name: "La-7B-20", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-7b-20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_9", name: "La-9", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la-9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_174", name: "La-174", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la_174.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_la_200_toriy", name: "La-200", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/la_200_toriy.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_3_11", name: "LaGG-3-11", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-3-11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_3_23", name: "LaGG-3-23", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-3-23.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_3_34", name: "LaGG-3-34", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-3-34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_3_35", name: "LaGG-3-35", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-3-35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_3_4", name: "LaGG-3-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-3-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_3_66", name: "LaGG-3-66", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-3-66.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_3_8", name: "LaGG-3-8", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-3-8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lagg_i_301", name: "I-301", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lagg-i-301.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lancaster_mk1", name: "Lancaster B Mk I", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lancaster_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lancaster_mk3", name: "Lancaster B Mk III", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lancaster_mk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lancaster_mr7_france", name: "Lancaster MR.7", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lancaster_mr7_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_late_298d", name: "Late 298D", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/late_298d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_leo_451_early", name: "LeO 451 early", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/leo_451_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_leo_451_late", name: "LeO 451 late", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/leo_451_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lightning_f53", name: "Lightning F.53", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lightning_f53.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lincoln_b2", name: "Lincoln B Mk II", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lincoln_b2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_loire_130", name: "Loire 130C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/loire_130.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_lynx_ah_mk1", name: "Lynx AH.Mk.1", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/lynx_ah_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_m_346fa", name: "M-346FA", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/m_346fa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_martin_139wc", name: "Martin 139WC", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/martin_139wc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_marut_mk1", name: "HF-24", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/marut_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_maryland_mk1_france", name: "Martin 167-A3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/maryland_mk1_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_151c1", name: "M.B.151C.1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_151c1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_152c1", name: "M.B.152C1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_152c1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_157", name: "M.B.157", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_157.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_162", name: "M.B.162", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_162.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_174_a3", name: "M.B.174A-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_174_a3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_175t", name: "M.B.175T", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_175t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_326b", name: "MB-326B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_326b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_326k", name: "MB-326K", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_326k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mb_5", name: "MB.5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mb_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mbr_2", name: "MBR-2-M-34", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mbr-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc_202", name: "C. 202", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc-202.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc_202_d", name: "C. 202D", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc-202_d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc_202_ec", name: "C. 202EC", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc-202_ec.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc_205_n2", name: "C. 205N2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc-205_n2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc_205_serie1", name: "C. 205 serie 1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc-205_serie1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc_205_serie3", name: "C. 205 serie 3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc-205_serie3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc200_serie3", name: "C. 200 serie 3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc200_serie3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mc200_serie7", name: "C. 200 serie 7", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mc200_serie7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_450b_barougan", name: "M.D.450B Barougan", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_450b_barougan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_450b_ouragan", name: "M.D.450B Ouragan", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_450b_ouragan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_450b_ouragan_iaf_29", name: "M.D.450B (29)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["M.D.450B"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_450b_ouragan_iaf_29.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_452_mystere_2a", name: "M.D.452 IIA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_452_mystere_2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_452_mystere_2c_preproduction", name: "M.D.452 IIC", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_452_mystere_2c_preproduction.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_454_mystere_4a", name: "Mystere IVA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_454_mystere_4a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_460", name: "Super Mystere B2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_460.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_460_saar", name: "Sa'ar", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_460_saar.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_460_sambad", name: "Sambad", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_460_sambad.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_md_500_tow_late", name: "Lahatut", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/md_500_tow_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_163b", name: "Me 163 B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-163b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_163b_0", name: "Me 163 B-0", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-163b-0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_262a_1a", name: "Me 262 A-1a", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-262a-1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_262a_1a_early", name: "Me 262 A-1a/Jabo", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-262a-1a_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_262a_1a_u4", name: "Me 262 A-1/U4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-262a-1a_u4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_262a_2a", name: "Me 262 A-2a", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-262a-2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_262a1_u1", name: "Me 262 A-1a/U1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-262a1_u1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_262c_1a", name: "Me 262 C-1a", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-262c-1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_262c_2b", name: "Me 262 C-2b", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-262c-2b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_410a_1", name: "Me 410 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-410a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_410a_1_u2", name: "Me 410 A-1/U2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-410a-1_u2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_410a_1_u4", name: "Me 410 A-1/U4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-410a-1_u4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_410b_1", name: "Me 410 B-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-410b-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_410b_1_u2", name: "Me 410 B-1/U2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-410b-1_u2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_410b_2_u4", name: "Me 410 B-2/U4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-410b-2_u4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_410b_6_r3", name: "Me 410 B-6/R3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me-410b-6_r3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_210_v22_japan", name: "Me 210 V22", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me_210_v22_japan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_210a_1", name: "Me 210 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me_210a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_210ca_1_40_mm_hungary", name: "Me 210 Ca-1 36.M", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me_210ca_1_40_mm_hungary.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_210ca_1_hungary", name: "Me 210 Ca-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me_210ca_1_hungary.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_me_264", name: "Me 264", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/me_264.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk3", name: "Meteor F Mk 3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk3_navy", name: "Sea Meteor F Mk 3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk3_navy.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk4_lw", name: "Meteor F Mk 4 G.41F", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk4_lw.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk4_sw", name: "Meteor F Mk 4 G.41G", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk4_sw.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk8", name: "Meteor F Mk 8 G.41K", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk8_belgium", name: "Meteor F Mk.8", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk8_belgium.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk8_iaf", name: "Meteor F.8", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk8_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_fmk8_reaper", name: "Meteor F Mk.8 Reaper", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_fmk8_reaper.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_frmk9_iaf", name: "Meteor FR.9", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_frmk9_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_meteor_nfmk13", name: "Meteor NF.13", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/meteor_nfmk13.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mh_60l_dap", name: "MH-60L DAP", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mh_60l_dap.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_24a", name: "Mi-24A", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_24a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_24d", name: "Mi-24D", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_24d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_24p", name: "Mi-24P", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_24p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_24p_german_hfs80", name: "Mi-24P HFS 80", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_24p_german_hfs80.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_24v", name: "Mi-24V", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_24v.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_28a_sweden", name: "Mi-28A", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_28a_sweden.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_28n", name: "Mi-28N", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_28n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_28nm", name: "Mi-28NM", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_28nm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_35m", name: "Mi-35M", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_35m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_35p", name: "Mi-35P", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_35p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_35p_indonesia", name: "Mi-35", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_35p_indonesia.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_4av", name: "Mi-4AV", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_4av.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_8amtsh", name: "Mi-8AMTSh", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_8amtsh.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_8amtsh_vn", name: "Mi-8AMTSh-VN", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_8amtsh_vn.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_8tb", name: "Mi-8TB", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_8tb.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mi_8tv", name: "Mi-8TV", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mi_8tv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_15", name: "MiG-15bis", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_15bis_ish", name: "MiG-15bis ISh", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-15bis_ish.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_15bis_nr23_china", name: "J-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-15bis_nr23_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_17", name: "MiG-17", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-17.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_17_china", name: "J-4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-17_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_17_cuba", name: "MiG-17AS", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-17_cuba.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_17_f5", name: "Shenyang F-5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-17_f5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_17p_lim_5p", name: "Lim-5P", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-17p_lim_5p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_17pf_hungary", name: "MiG-17PF", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-17pf_hungary.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_19j_6a", name: "J-6A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-19j_6a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_19pt", name: "MiG-19PT", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-19pt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_19s", name: "MiG-19S", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-19s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_bis", name: "MiG-21bis", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_bis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_bis_lazur", name: "MiG-21 \"Lazur-M\"", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_bis_lazur.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_bis_sau", name: "MiG-21bis-SAU", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_bis_sau.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_bison", name: "MiG-21 Bison", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_bison.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_f13", name: "MiG-21F-13", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_f13.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_mf", name: "MiG-21MF", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_mf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_pfm", name: "MiG-21PFM", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_pfm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_s", name: "MiG-21S (R-13-300)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["MiG-21S"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_smt", name: "MiG-21SMT", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_smt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_sps_k", name: "MiG-21 SPS-K", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-21_sps_k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_9", name: "MiG-9", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_9_late_china", name: "MiG-9 (l)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["MiG-9"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig-9_late_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_21_2000_iaf", name: "MiG-21 2000", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_21_2000_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_23bn", name: "MiG-23BN", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_23bn.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_23m", name: "MiG-23M", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_23m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_23mf_germany", name: "MiG-23MF", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_23mf_germany.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_23ml", name: "MiG-23ML", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_23ml.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_23mla", name: "MiG-23MLA", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_23mla.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_23mld", name: "MiG-23MLD", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_23mld.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_25pd", name: "MiG-25PD", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_25pd.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_27k", name: "MiG-27K", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_27k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_27m", name: "MiG-27M", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_27m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29_9_12", name: "MiG-29 (9-12)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29_9_12.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29_9_12_germany", name: "MiG-29 (9-12A)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29_9_12_germany.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29_9_12_sniper", name: "MiG-29 Sniper", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29_9_12_sniper.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29_9_12b_hungary", name: "MiG-29 (9-12B)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29_9_12b_hungary.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29_9_12g", name: "MiG-29G", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29_9_12g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29_9_13", name: "MiG-29 (9-13)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29_9_13.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29kr_9_41r", name: "MiG-29KR (9-41R)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["MiG-29KR"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29kr_9_41r.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29m_9_15", name: "MiG-29M (9-15)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["MiG-29M"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29m_9_15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29n", name: "MiG-29N", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_29smt_9_19", name: "MiG-29SMT (9-19)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["MiG-29SMT"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_29smt_9_19.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_3_series_1_15", name: "MiG-3-15", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_3_series_1_15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_3_series_1_15_bk_pod", name: "MiG-3-15 (BK)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["MiG-3-15"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_3_series_1_15_bk_pod.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mig_3_series_34", name: "MiG-3-34", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mig_3_series_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_2000_5ei", name: "Mirage 2000-5Ei", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_2000_5ei.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_2000_5f", name: "Mirage 2000-5F", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_2000_5f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_2000c_s4", name: "Mirage 2000C-S4", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_2000c_s4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_2000c_s5", name: "Mirage 2000C-S5", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_2000c_s5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_2000d_r1", name: "Mirage 2000D-R1", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_2000d_r1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_2000d_rmv", name: "Mirage 2000D-RMV", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_2000d_rmv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_3c", name: "Mirage IIIC", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_3c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_3cj", name: "Shahak", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_3cj.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_3e", name: "Mirage IIIE", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_3e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_3s_c70_switzerland", name: "Mirage IIIS C.70", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_3s_c70_switzerland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_4000", name: "Mirage 4000", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_4000.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_5ba", name: "Mirage 5BA", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_5ba.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_5f", name: "Mirage 5F", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_5f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_f1c", name: "Mirage F1C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_f1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_f1c_200", name: "Mirage F1C-200", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_f1c_200.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_f1ct", name: "Mirage F1CT", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_f1ct.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mirage_milan", name: "Milan", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mirage_milan.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_morko_morane", name: "Mörkö-Morane", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/morko_morane.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_b_mk16", name: "Mosquito B.Mk.XVI", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_b_mk16.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_f_mk2_norway", name: "Mosquito F.Mk.II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_f_mk2_norway.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_fb_mk18", name: "Mosquito FB Mk XVIII", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_fb_mk18.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_fb_mk26_china", name: "Mosquito FB.Mk.26", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_fb_mk26_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_fb_mk6", name: "Mosquito FB Mk VI", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_fb_mk6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_fb_mk6_ash_norway", name: "Mosquito FB Mk VI ASH", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_fb_mk6_ash_norway.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_j30_sweden", name: "Mosquito J30", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_j30_sweden.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_nf_mk2", name: "Mosquito NF.Mk.II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_nf_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_mosquito_tr_mk33", name: "Mosquito TR.Mk.33", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/mosquito_tr_mk33.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ms_405c1", name: "M.S.405C1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ms_405c1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ms_406c1", name: "M.S.406C1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ms_406c1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ms_410c1", name: "M.S.410", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ms_410c1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_n1k1_ja", name: "N1K1-Ja", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/n1k1_ja.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_n1k1_kyuofu", name: "N1K1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/n1k1_kyuofu.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_n1k2_j", name: "N1K2-J", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/n1k2_j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_n1k2_jko", name: "N1K2-Ja", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/n1k2_jko.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_nc_223_3", name: "N.C.223.3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/nc_223_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_nesher", name: "Nesher", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/nesher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_nf_5a_netherlands", name: "NF-5A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/nf_5a_netherlands.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_nimrod_mk1", name: "Nimrod Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/nimrod_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_nimrod_mk2", name: "Nimrod Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/nimrod_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_o3u_1", name: "O3U-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/o3u_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_oh_58d", name: "OH-58D", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/oh_58d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_os2u_1", name: "OS2U-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/os2u_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_os2u_3", name: "OS2U-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/os2u_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_osprey_mk4", name: "Osprey Mk IV", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/osprey_mk4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_26a_33", name: "P-26A-33", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-26a_33.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_26a_34", name: "P-26A-34", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-26a_34.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_26a_34_m2", name: "P-26A-34 M2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-26a_34_m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_26b_35", name: "P-26B-35", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-26b_35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_36a", name: "P-36A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-36a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_36a_rasmussen", name: "Rasmussen's P-36A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-36a_rasmussen.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_36c", name: "P-36C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-36c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_36g", name: "P-36G", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-36g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38e", name: "P-38E", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38g", name: "P-38G-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38g_metal", name: "XP-38G", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38g_metal.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38j", name: "P-38J-15", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38j_marge", name: "Bong's P-38J-15", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38j_marge.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38k", name: "P-38K", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38l", name: "P-38L-5-LO", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38l.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_38l_1_china_rocaf", name: "P-38L-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-38l_1_china_rocaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_39k_1", name: "P-39K-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-39k_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_39n", name: "P-39N-0", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-39n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_39n_su", name: "Pokryshkin's P-39N-0", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-39n_su.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_39q_15", name: "P-39Q-15", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-39q_15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_39q_25_france", name: "P-39Q-25", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-39q_25_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_39q_5", name: "P-39Q-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-39q_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_400", name: "P-400", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-400.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_40c", name: "P-40C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-40c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_40c_china", name: "H-81A-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-40c_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_40e", name: "P-40E-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-40e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_40e_td", name: "P-40E-1 TD", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-40e_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_40f_5_france_ep", name: "P-40F-5 Lafayette", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-40f-5_france_ep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_40f_10", name: "P-40F-10", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-40f_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_43a_1", name: "P-43A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-43a-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d", name: "P-47D-25", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d_28", name: "P-47D-28", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d-28.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d_16_re_germany", name: "P-47D-16-RE", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d_16_re_germany.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d_22_re", name: "P-47D-22-RE", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d_22_re.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d_23_ra_china_rocaf", name: "P-47D-23-RA", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d_23_ra_china_rocaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d_30_china", name: "P-47D-30", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d_30_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d_luftwaffe", name: "P-47D", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d_luftwaffe.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47d_ussr", name: "P-47D-27", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47d_ussr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47m_1_re", name: "P-47M-1-RE", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47m-1-re.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_47n_15", name: "P-47N-15", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-47n-15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51_a_36", name: "A-36", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51_a-36.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51a_tl", name: "P-51A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51a_tl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51b", name: "Mustang Mk IA", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51b_7_sweden", name: "J26 David", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51b_7_sweden.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51c_10_nt", name: "P-51C-10", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51c-10-nt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51c_10_france", name: "F-6C-10-NA", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51c-10_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51c_11_nt_china", name: "P-51C-11-NT", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51c-11-nt_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51d_10", name: "P-51D-10", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51d-10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51d_20_na", name: "P-51D-20-NA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51d-20-na.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51d_20_na_j26", name: "J26", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51d-20-na_j26.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51d_20_china", name: "P-51D-20", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51d-20_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51d_30_usaaf_korea", name: "P-51D-30", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51d-30_usaaf_korea.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51d_5", name: "P-51D-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51d-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51h_5_na", name: "P-51H-5-NA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51h-5_na.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_51k", name: "P-51K", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-51k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_59a", name: "P-59A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-59a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_61a_1", name: "P-61A-11", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-61a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_61c_1", name: "P-61C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-61c_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_63a_10", name: "P-63A-10", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-63a-10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_63a_5", name: "P-63A-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-63a-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_63c_5", name: "P-63C-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-63c-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_63c_5_kingcobra_animal_version", name: "Kingcobra", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-63c-5_kingcobra_animal_version.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_66", name: "P-66", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p-66.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p1y1_mod11", name: "P1Y1 mod. 11", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p1y1_mod11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_108a_serie2", name: "P.108A serie 2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p_108a_serie2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_108b_serie1", name: "P.108B serie 1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p_108b_serie1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_p_108b_serie2", name: "P.108B serie 2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/p_108b_serie2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pb4y_2", name: "PB4Y-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pb4y-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pbj_1h", name: "PBJ-1H", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pbj_1h.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pbj_1j", name: "PBJ-1J", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pbj_1j.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pbm_1", name: "PBM-1 \"Mariner\"", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pbm_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pbm_3", name: "PBM-3 \"Mariner\"", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pbm_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pbm_5a", name: "PBM-5A \"Mariner\"", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pbm_5a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pby_5", name: "PBY-5 Catalina", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pby-5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pby_5a", name: "PBY-5A Catalina", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pby-5a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pby_5a_late_france", name: "PBY-5A Late", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pby-5a_late_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pby_5a_raf", name: "Catalina Mk IIIa", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pby-5a_raf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_2_1", name: "Pe-2-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-2-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_2_110", name: "Pe-2-110", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-2-110.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_2_205", name: "Pe-2-205", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-2-205.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_2_31", name: "Pe-2-31", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-2-31.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_2_359", name: "Pe-2-359", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-2-359.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_2_83", name: "Pe-2-83", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-2-83.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_3", name: "Pe-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_3_bis", name: "Pe-3bis", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-3_bis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_3_early", name: "Pe-3 (e)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Pe-3"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-3_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pe_8_m82", name: "Pe-8", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pe-8_m82.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_po_2", name: "Po-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/po-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_po_2m", name: "Po-2M", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/po-2m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_potez_630", name: "Potez 630", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/potez_630.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_potez_631", name: "Potez 631", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/potez_631.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_potez_633", name: "Potez 633", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/potez_633.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pv_2d", name: "PV-2D", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pv_2d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_pyorremyrsky", name: "VL Pyörremyrsky", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/pyorremyrsky.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_q_5_early", name: "Q-5 early", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/q_5_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_q_5a", name: "Q-5A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/q_5a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_q_5l", name: "Q-5L", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/q_5l.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_quing_6", name: "Qing-6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/quing_6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_r2y2_kai", name: "R2Y2 Kai V3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/r2y2_kai.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_r2y2_v1", name: "R2Y2 Kai V1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/r2y2_v1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_r2y2_v2", name: "R2Y2 Kai V2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/r2y2_v2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_rafale_c_f3", name: "Rafale C F3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/rafale_c_f3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_rafale_m_f3r", name: "Rafale M F3-R", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/rafale_m_f3r.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_rah_66", name: "RAH-66", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/rah_66.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2000_ga", name: "Re.2000 G.A.", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2000_ga.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2000_heja_1", name: "Héja I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2000_heja_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2000_heja_2", name: "Héja II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2000_heja_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2000_int", name: "Re.2000 serie 1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2000_int.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2001_cb", name: "Re.2001 CB", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2001_cb.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2001_cn", name: "Re.2001 CN", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2001_cn.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2001_serie1", name: "Re.2001 serie 1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2001_serie1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2001_serie1_ep", name: "Re.2001 gruppo 22", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2001_serie1_ep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2002_early", name: "Re.2002 Early", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2002_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2005_serie0", name: "Re.2005 serie 0", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2005_serie0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_re_2005_vdm", name: "Re.2005 (VDM)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Re.2005"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/re_2005_vdm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ro_43", name: "Ro.43", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ro_43.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ro_44", name: "Ro.44", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ro_44.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ro_57_quadriarma", name: "Ro.57 Quadriarma", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ro_57_quadriarma.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_s_199", name: "Sakeen", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/s_199.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_s_81_ar125", name: "S.81", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/s_81_ar125.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sa_313b", name: "SA 313B Alouette II", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sa_313b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sa_316b", name: "SA 316B Alouette III", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sa_316b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sa_341f", name: "SA.341F Gazelle", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sa_341f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sa_342l_china", name: "SA.342L Gazelle", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sa_342l_china.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sa_342m", name: "SA.342M Gazelle", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sa_342m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_105g", name: "SAAB-105G", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_105g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_105oe", name: "SAAB-105OE", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_105oe.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_a21a_3", name: "A21A-3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_a21a_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_a21rb", name: "A21RB", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_a21rb.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_a32a", name: "A32A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_a32a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_a32a_red_adam", name: "A32A Röd Adam", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_a32a_red_adam.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_aj37", name: "AJ37", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_aj37.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_ajs37", name: "AJS37", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_ajs37.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_ajs37_early", name: "AJS37 (Early)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["AJS37"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_ajs37_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_b17a", name: "B17A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_b17a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_b17b", name: "B17B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_b17b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_b17bs", name: "S17BS", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_b17bs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_b18b", name: "B18B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_b18b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_b3c", name: "B3C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_b3c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_f35_wdns", name: "Saab F-35", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_f35_wdns.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j21a_1", name: "J21A-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j21a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j21a_2", name: "J21A-2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j21a_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j21ra", name: "J21RA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j21ra.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j29a", name: "J29A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j29a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j29b", name: "A29B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j29b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j29d", name: "J29D", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j29d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j29f", name: "J29F", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j29f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j32b", name: "J32B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j32b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j35a", name: "J35A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j35a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j35d", name: "J35D", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j35d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_j35xs", name: "Saab J35XS", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_j35xs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_ja37", name: "JA37C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_ja37.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_ja37d", name: "JA37D", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_ja37d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_ja37di", name: "JA37DI", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_ja37di.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_ja37di_f21", name: "JA37DI F21", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_ja37di_f21.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_jas39a", name: "JAS39A", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_jas39a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_jas39c", name: "JAS39C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_jas39c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_jas39c_hungary", name: "JAS39EBS HU C", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_jas39c_hungary.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_jas39d", name: "JAS39D", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_jas39d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_jas39e", name: "JAS39E", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_jas39e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_sk60b", name: "SK60B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_sk60b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_t18b_1", name: "T18B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_t18b_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_saab_t18b_2", name: "T18B (57)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["T18B"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/saab_t18b_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sagittario_2", name: "Sagittario 2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sagittario_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb2c_1c", name: "SB2C-1C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb2c_1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb2c_4", name: "SB2C-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb2c_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb2c_5_france", name: "SB2C-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb2c_5_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb2u_2", name: "SB2U-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb2u-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb2u_3", name: "SB2U-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb2u-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb_25j_netherlands", name: "SB-25J", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb_25j_netherlands.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb_2m_100", name: "SB 2M-100A", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb_2m_100.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb_2m_103_mv3", name: "SB 2M-103 MV-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb_2m_103_mv3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb_2m_103c", name: "SB 2M-103", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb_2m_103c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb_2m_103u", name: "SB 2M-103U", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb_2m_103u.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb_2m_103u_mv3", name: "SB 2M-103U MV-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb_2m_103u_mv3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sb_2m_105", name: "SB 2M-105", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sb_2m_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sbd_3", name: "SBD-3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sbd-3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sc_1", name: "SC-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sc_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_scimitar_f1", name: "Scimitar F Mk.1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/scimitar_f1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_scout_ah_mk1", name: "Scout AH.Mk.1", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/scout_ah_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sea_fury_fb11", name: "Sea Fury FB 11", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sea_fury_fb11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sea_fury_fb51", name: "Sea Fury FB 51", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sea_fury_fb51.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sea_harrier_fa2", name: "Sea Harrier FA 2", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sea_harrier_fa2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sea_hawk_fga50_netherlands", name: "Sea Hawk Mk.50", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sea_hawk_fga50_netherlands.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sea_hawk_fga6", name: "Sea Hawk FGA.6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sea_hawk_fga6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sea_hawk_mk100", name: "Sea Hawk Mk.100", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sea_hawk_mk100.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sea_venom_faw20", name: "Sea Venom FAW 20", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sea_venom_faw20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_seafire_fr47", name: "Seafire FR 47", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/seafire_fr47.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_seafire_mk17", name: "Seafire F Mk XVII", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/seafire_mk17.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_seafire_mk3", name: "Seafire LF Mk.III", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/seafire_mk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_shackleton_mr_mk_2", name: "Shackleton MR.Mk.2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/shackleton_mr_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_79_1936", name: "S.M.79 serie 1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_79_1936.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_79_1937", name: "S.M.79 serie 4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_79_1937.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_79_1939", name: "S.M.79 serie 8", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_79_1939.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_79_1941", name: "S.M.79 AS", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_79_1941.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_79_1942", name: "S.M.79 bis/N", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_79_1942.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_79_1943", name: "S.M.79 bis/T.M", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_79_1943.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_79_iar", name: "S.M.79 B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_79_iar.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_91", name: "SM.91", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_91.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sm_92", name: "SM.92", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sm_92.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_so_4050_vautour_2a", name: "S.O.4050 Vautour IIA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/so_4050_vautour_2a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_so_4050_vautour_2a_iaf", name: "Vautour IIA IDF/AF", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/so_4050_vautour_2a_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_so_4050_vautour_2a_israel_iaf", name: "Vautour IIA", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/so_4050_vautour_2a_israel_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_so_4050_vautour_2b", name: "S.O.4050 Vautour IIB", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/so_4050_vautour_2b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_so_4050_vautour_2n", name: "Vautour IIN(C)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Vautour IIN"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/so_4050_vautour_2n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_so_4050_vautour_2n_late", name: "Vautour IIN(M)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Vautour IIN"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/so_4050_vautour_2n_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_so_8000_narval", name: "S.O.8000 Narval", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/so_8000_narval.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_soc_1", name: "SOC-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/soc_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_f22", name: "Spitfire F Mk 22", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_f22.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_f24", name: "Spitfire F Mk 24", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_f24.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_fr_mk14e", name: "Prendergast's Spitfire FR Mk XIVe", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_fr_mk14e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_fr_mk14e_belgium", name: "Spitfire FR Mk XIVe", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_fr_mk14e_belgium.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_ix", name: "Spitfire LF Mk IX", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_ix.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_ix_early", name: "Spitfire F Mk IX", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_ix_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_ix_plagis", name: "Plagis' Spitfire LF Mk IXc", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_ix_plagis.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_ix_usa", name: "Spitfire LF Mk IXc", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_ix_usa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_ix_ussr", name: "Spitfire Mk IXc", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_ix_ussr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_lf_mk9c_cw_greece", name: "Spitfire LF Mk IXc (CW)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Spitfire LF Mk IXc"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_lf_mk9c_cw_greece.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_lf_mk9e_iaf", name: "Spitfire Mk.IX (CW)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_lf_mk9e_iaf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_lf_mk9e_weisman", name: "Weizman's Spitfire LF Mk.IXe", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_lf_mk9e_weisman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk1", name: "Spitfire Mk Ia", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk14c", name: "Spitfire F Mk XIVc", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk14c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk14e", name: "Spitfire F Mk XIVe", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk14e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk18e", name: "Spitfire F Mk XVIIIe", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk18e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk5b", name: "Spitfire Mk Vb/trop", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk5b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk5b_float", name: "Spitfire Mk Vb (Float)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Spitfire Mk Vb"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk5b_float.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk5b_notrop", name: "Spitfire Mk Vb", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk5b_notrop.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk5c", name: "Spitfire Mk Vc/trop", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk5c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk5c_notrop", name: "Spitfire Mk Vc", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk5c_notrop.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_mk9c_4cannons", name: "Spitfire F Mk IXc", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_mk9c_4cannons.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfire_xvi", name: "Spitfire F Mk XVI", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfire_xvi.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfiremkii", name: "Spitfire Mk IIb", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfiremkii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfiremkiia", name: "Spitfire Mk IIa", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfiremkiia.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_spitfiremkiia_ep", name: "Spitfire Mk.IIa Venture I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/spitfiremkiia_ep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_stirling_mk1", name: "Stirling B Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/stirling_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_stirling_mk3", name: "Stirling B Mk III", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/stirling_mk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_strikemaster_mk88", name: "Strikemaster Mk.88", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/strikemaster_mk88.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_11", name: "Su-11", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_2_m82", name: "Su-2 (M-82)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Su-2"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-2_m82.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_2_mv5", name: "Su-2 MV-5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-2_mv5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_2_tss1", name: "Su-2 TSS-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-2_tss1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_6_am42", name: "Su-6 (AM-42)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Su-6"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-6_am42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_6_m71", name: "Su-6 (M-71F)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Su-6"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-6_m71.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_7b", name: "Su-7B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-7b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_7bkl", name: "Su-7BKL", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-7bkl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_7bmk", name: "Su-7BMK", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-7bmk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_8", name: "Su-8", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_9", name: "Su-9", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su-9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_17m2", name: "Su-17M2", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_17m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_17m4", name: "Su-17M4", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_17m4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_22m3", name: "Su-22M3", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_22m3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_22m4", name: "Su-22M4", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_22m4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_22m4_de_wtd61", name: "Su-22M4 WTD61", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_22m4_de_wtd61.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_22um3k", name: "Su-22UM3K", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_22um3k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_24m", name: "Su-24M", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_24m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_25_558arz", name: "Su-25BM", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_25_558arz.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_25k", name: "Su-25K", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_25k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_25sm3", name: "Su-25SM3", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_25sm3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_25t", name: "Su-25T", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_25t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_25tm", name: "Su-39", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_25tm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_27sm", name: "Su-27SM", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_27sm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_30mk2v_venezuela", name: "Su-30MK2 AMV", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_30mk2v_venezuela.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_30mkk", name: "Su-30MKK", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_30mkk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_30mkm", name: "Su-30MKM", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_30mkm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_30sm", name: "Su-30SM", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_30sm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_30sm2", name: "Su-30SM2", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_30sm2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_33", name: "Su-33", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_33.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_su_6_single", name: "Su-6", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/su_6_single.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sunderland_mk3a", name: "Sunderland Mk IIIa", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sunderland_mk3a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sunderland_mk5", name: "Sunderland Mk V", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sunderland_mk5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_super_etendard_97", name: "Super Etendard", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/super_etendard_97.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_super_hind_mk3", name: "Superhind", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/super_hind_mk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_a_34_comet", name: "Comet I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_a_34_comet.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_asrad_r", name: "ASRAD-R", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_asrad_r.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_bkan_1c", name: "Bkan 1C", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_bkan_1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_bmp_2md", name: "BMP-2MD", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_bmp_2md.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_bt_42", name: "BT-42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_bt_42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_charioteer_mk_7", name: "Charioteer Mk VII", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_charioteer_mk_7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_cv_90105", name: "CV 90105 TML", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_cv_90105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_cv_90105_tml", name: "CV 90105", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_cv_90105_tml.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_cv_90120", name: "CV90120-T", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_cv_90120.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_cv_9030_fin", name: "CV 9030FIN", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_cv_9030_fin.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_cv_9035_dk", name: "CV 9035DK", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_cv_9035_dk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_cv_90_mk4", name: "CV 90 Mk.IV", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_cv_90_mk4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_eldenhet_98", name: "EldE 98", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_eldenhet_98.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_ikv_103", name: "Ikv 103", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_ikv_103.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_ikv_72", name: "Ikv 72", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_ikv_72.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_ikv_73", name: "Ikv 73", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_ikv_73.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_ikv_91", name: "Ikv 91", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_ikv_91.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_ikv_91_105", name: "Ikv 91-105", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_ikv_91_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_itpsv_90", name: "ItPsV Leopard", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_itpsv_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_k9_vidar", name: "VIDAR", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_k9_vidar.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_kv_1_1942_fin", name: "KV-1 m1942", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_kv_1_1942_fin.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_l_62_anti_ii", name: "L-62 ANTI II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_l_62_anti_ii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_lago_1", name: "Lago I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_lago_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_landsverk_ush_204_gk", name: "U-SH 204 GK", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_landsverk_ush_204_gk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_landsverk_ush_405", name: "U-SH 405", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_landsverk_ush_405.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_leopard_1a5no", name: "Leopard 1A5NO2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_leopard_1a5no.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_lvkv_42", name: "Lvkv 42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_lvkv_42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_lvkv_90c", name: "Lvkv 9040C", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_lvkv_90c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_lvrbv_701", name: "Lvrbv 701", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_lvrbv_701.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_m24_chaffee_dk", name: "M24DK", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_m24_chaffee_dk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_nasams_fcs", name: "NASAMS 3 (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["NASAMS 3"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_nasams_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_nasams_launcher", name: "NASAMS 3 (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["NASAMS 3"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_nasams_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_nomads", name: "NOMADS", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_nomads.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_patria_amv_ctcv_105", name: "CT-CV 105HP", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_patria_amv_ctcv_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pbil_m40", name: "Pbil m/40", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pbil_m40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pbv_301", name: "Pbv 301", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pbv_301.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pbv_302_bill", name: "Pbv 302 (BILL)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Pbv 302"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pbv_302_bill.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pbv_501", name: "Pbv 501", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pbv_501.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pvkv_ii", name: "Pvkv II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pvkv_ii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pvkv_iii", name: "Pvkv III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pvkv_iii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pvkv_iv", name: "Pvkv IV", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pvkv_iv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pvkv_m43_1946", name: "Pvkv m/43 (1946)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Pvkv m/43"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pvkv_m43_1946.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pvkv_m43_1963", name: "Pvkv m/43 (1963)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Pvkv m/43"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pvkv_m43_1963.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pvlvv_fm42", name: "Pvlvv fm/42", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pvlvv_fm42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_pvrbv_551", name: "Pvrbv 551", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_pvrbv_551.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_sav_fm48", name: "SAV 20.12.48", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_sav_fm48.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_sav_m43_1944", name: "Sav m/43 (1944)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Sav m/43"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_sav_m43_1944.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_sav_m43_1946", name: "Sav m/43 (1946)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Sav m/43"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_sav_m43_1946.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_sherman_3_4", name: "Sherman III/IV", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_sherman_3_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_stormpjas_fm43_44", name: "Spj fm/43-44", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_stormpjas_fm43_44.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strf_9056", name: "Strf 9040 BILL", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strf_9056.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strf_90b", name: "Strf 9040B", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strf_90b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strf_90c", name: "Strf 9040C", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strf_90c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv121b_christian2", name: "Christian II", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv121b_christian2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_101", name: "Strv 101", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_101.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_103_0", name: "Strv 103-0", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_103_0.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_103a", name: "Strv 103A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_103a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_103c", name: "Strv 103C", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_103c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_104", name: "Strv 104", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_104.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_105", name: "Strv 105", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_105.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_121", name: "Strv 121", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_121.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_122", name: "Strv 122A", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_122.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_122b_plss", name: "Strv 122B PLSS", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_122b_plss.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_122b_plus", name: "Strv 122B+", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_122b_plus.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_74", name: "Strv 74", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_74.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_81", name: "Strv 81", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_81.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_81_rb52", name: "Strv 81 (RB 52)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["Strv 81"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_81_rb52.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m31", name: "Strv m/31", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m31.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m38", name: "Strv m/38", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m38.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m39", name: "Strv m/39", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m39.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m39_td", name: "Strv m/39 TD", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m39_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m40l", name: "Strv m/40L", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m40l.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m41_s1", name: "Strv m/41 S-I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m41_s1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m41_s2", name: "Strv m/41 S-II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m41_s2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m42_delat_torn", name: "Strv m/42 DT", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m42_delat_torn.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_strv_m42_eh", name: "Strv m/42 EH", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_strv_m42_eh.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_t_28", name: "T-28", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_t_28.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_t_50_fin", name: "T-50", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_t_50_fin.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_t_55m", name: "T-55M", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_t_55m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_t_80u", name: "T 80 U", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_t_80u.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_tgdgb_m40_lv", name: "Lvtdgb m/40", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_tgdgb_m40_lv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_udes_33", name: "UDES 33", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_udes_33.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_veak_40", name: "VEAK 40", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_veak_40.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_sw_vickers_mk_e_45", name: "T-26E", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/sw_vickers_mk_e_45.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_swift_f1", name: "Swift F.1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/swift_f1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_swift_f7", name: "Swift F.7", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/swift_f7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_swordfish_mk1", name: "Swordfish Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/swordfish_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_swordfish_mk2", name: "Swordfish Mk II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/swordfish_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_t2_early", name: "T-2 Early", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/t2_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_t_129_atak", name: "T129", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/t_129_atak.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ta_152c", name: "Ta 152 C-3", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ta-152c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ta_152h_1", name: "Ta 152 H-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ta-152h-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ta_154a_1", name: "Ta 154 A-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ta_154a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tandem_mai", name: "Tandem MAI", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tandem_mai.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tb_3_m17_32", name: "TB-3M-17-32", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tb_3_m17_32.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tbd_1_1938", name: "TBD-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tbd-1_1938.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tbf_1c", name: "TBF-1C", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tbf-1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tempest_mk2", name: "Tempest Mk II", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tempest_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tempest_mkv", name: "Tempest Mk V", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tempest_mkv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tempest_mkv_vikkers", name: "Tempest Mk V (Vickers P)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Tempest Mk V"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tempest_mkv_vikkers.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_thunderbolt_mk1", name: "Thunderbolt Mk.1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/thunderbolt_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tiger_hac_france", name: "EC-665 Tiger HAC", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tiger_hac_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tiger_had_block2_france", name: "Tiger HAD Block 2", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tiger_had_block2_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tiger_had_france", name: "EC-665 Tiger HAD", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tiger_had_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tiger_had_spain", name: "Tigre HAD-E", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tiger_had_spain.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tiger_hap_france", name: "EC-665 Tiger HAP", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tiger_hap_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tiger_uht", name: "EC-665 Tiger UHT", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tiger_uht.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tis_ma", name: "TIS MA", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tis_ma.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_adv", name: "Tornado ADV", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_adv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_f3", name: "Tornado F.3", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_f3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_f3_late", name: "Tornado F.3 Late", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_f3_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_gr1", name: "Tornado GR.1", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_gr1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_ids_de_assta1", name: "Tornado IDS ASSTA1", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_ids_de_assta1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_ids_de_assta3_sle", name: "Tornado IDS SLE", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_ids_de_assta3_sle.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_ids_de_mfg", name: "Tornado IDS MFG", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_ids_de_mfg.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_ids_de_wtd61", name: "Tornado IDS WTD61", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_ids_de_wtd61.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_ids_it", name: "Tornado IDS", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_ids_it.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_ids_it_mod95", name: "Tornado IDS (1995)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Tornado IDS"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_ids_it_mod95.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tornado_ids_it_ret8", name: "Tornado IDS MLU (RET.8)", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Tornado IDS MLU"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tornado_ids_it_ret8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_1", name: "Tu-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu-1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_2", name: "Tu-2S", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu-2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_2_early", name: "Tu-2", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu-2_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_2_postwar", name: "Tu-2S-44", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu-2_postwar.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_2_postwar_late", name: "Tu-2S-59", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu-2_postwar_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_14t", name: "Tu-14T", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu_14t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_4", name: "Tu-4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_tu_95m", name: "Tu-95M", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/tu_95m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_typhoon_mk1a", name: "Typhoon Mk Ia", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/typhoon_mk1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_typhoon_mk1b", name: "Typhoon Mk Ib", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/typhoon_mk1b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_typhoon_mk1b_late", name: "Typhoon Mk Ib/L", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/typhoon_mk1b_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ucav_mq_1_predator", name: "MQ-1", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ucav_mq_1_predator.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ucav_orion", name: "Orion", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ucav_orion.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ucav_wing_loong_i", name: "Wing Loong I", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ucav_wing_loong_i.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uh_1b", name: "UH-1B", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uh_1b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uh_1c", name: "UH-1C", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uh_1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uh_1c_xm_30", name: "UH-1C XM-30", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uh_1c_xm_30.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uh_1d", name: "UH-1D", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uh_1d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_17_pdr_m10_achilles", name: "Achilles", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_17_pdr_m10_achilles.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_17_pdr_m10_achilles_norfolk_yeomanry", name: "Achilles (65 Rg.)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Achilles"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_17_pdr_m10_achilles_norfolk_yeomanry.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_3_inch_gun_carrier", name: "Gun Carrier (3-in)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Gun Carrier"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_3_inch_gun_carrier.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a17_mk_1_tetrarch", name: "Tetrarch I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a17_mk_1_tetrarch.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a1e1_independent", name: "Independent", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a1e1_independent.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a25_mk_8", name: "Harry Hopkins I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a25_mk_8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a27m_cromwell_1", name: "Cromwell I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a27m_cromwell_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a27m_cromwell_5", name: "Cromwell V", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a27m_cromwell_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a27m_cromwell_5_rp3", name: "Cromwell V (RP-3)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Cromwell V"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a27m_cromwell_5_rp3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a30_sp_avenger_kit_3rank", name: "Avenger (Overlord)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a30_sp_avenger_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a39_tortoise", name: "Tortoise", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a39_tortoise.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_12_mk_2_matilda_2", name: "Matilda III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_12_mk_2_matilda_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_13_mk1", name: "A13 Mk I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_13_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_13_mk1_3rd_rtr", name: "A13 Mk I (3rd R.T.R.)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["A13 Mk I"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_13_mk1_3rd_rtr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_13_mk2", name: "A13 Mk II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_13_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_13_mk2_1939", name: "A13 Mk II 1939", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_13_mk2_1939.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_22_mk_1_churchill_1941", name: "Churchill I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_22_mk_1_churchill_1941.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_22b_mk_3_churchill_1942", name: "Churchill III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_22b_mk_3_churchill_1942.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_22f_mk_7_churchill_crocodile", name: "Churchill Crocodile", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_22f_mk_7_churchill_crocodile.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_33_excelsior", name: "Excelsior", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_33_excelsior.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_34_comet_iron_duke", name: "Comet I \"Iron Duke IV\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_34_comet_iron_duke.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_a_43_black_prince", name: "Black Prince", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_a_43_black_prince.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ac1_sentinel", name: "A.C.I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ac1_sentinel.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ac4_thunderbolt", name: "A.C.IV", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ac4_thunderbolt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_adats_m113a3", name: "ADATS (M113)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["ADATS"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_adats_m113a3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ajax", name: "Ajax", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ajax.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_alecto_mk_1", name: "Alecto I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_alecto_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_armored_car_aec_mk_2", name: "AEC Mk II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_armored_car_aec_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_armored_car_mk_2_aa", name: "AEC AA", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_armored_car_mk_2_aa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_as_90_mk_2", name: "AS90", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_as_90_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_bosvark", name: "Bosvark", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_bosvark.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_boxer_crv_block2", name: "CRV Block 2", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_boxer_crv_block2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_centurion_action_x", name: "Centurion Action X", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_centurion_action_x.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_centurion_mk_1", name: "Centurion Mk 1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_centurion_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_centurion_mk_10", name: "Centurion Mk 10", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_centurion_mk_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_centurion_mk_2", name: "Centurion Mk.2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_centurion_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_centurion_mk_3", name: "Centurion Mk 3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_centurion_mk_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_centurion_mk_5_avre_era", name: "Centurion Mk.5 AVRE", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_centurion_mk_5_avre_era.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_centurion_mk_5_raac", name: "Centurion Mk.5/1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_centurion_mk_5_raac.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_1_mk_3_gulf", name: "Challenger DS", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_1_mk_3_gulf.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_2_bn", name: "Black Night", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_2_bn.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_2_dorchester", name: "Challenger 2 (2F)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_2_dorchester.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_2_lep", name: "Challenger 3 TD", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_2_lep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_2_megatron", name: "Challenger 2 OES", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_2_megatron.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_2_tes", name: "Challenger 2 TES", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_2_tes.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_2e", name: "Challenger 2E", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_2e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_challenger_mk_3", name: "Challenger Mk.3", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_challenger_mk_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_chieftain_900", name: "Chieftain 900", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_chieftain_900.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_chieftain_marksman", name: "Chieftain Marksman", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_chieftain_marksman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_chieftain_mk_10", name: "Chieftain Mk 10", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_chieftain_mk_10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_chieftain_mk_3", name: "Chieftain Mk 3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_chieftain_mk_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_chieftain_mk_5", name: "Chieftain Mk 5", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_chieftain_mk_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_churchill_avre", name: "Churchill AVRE Petard", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_churchill_avre.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_churchill_na75", name: "Churchill NA75", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_churchill_na75.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_concept3_ngac", name: "Concept 3", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_concept3_ngac.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_cruiser_ram_1", name: "Ram I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_cruiser_ram_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_crusader_aa_mk_1", name: "Crusader AA Mk I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_crusader_aa_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_crusader_aa_mk_2", name: "Crusader AA Mk II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_crusader_aa_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_crusader_aa_mk_2_kit_3rank", name: "Crusader AA (Overlord)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Crusader AA"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_crusader_aa_mk_2_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_crusader_mk_2", name: "Crusader II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_crusader_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_crusader_mk_2_the_saint", name: "Crusader \"The Saint\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_crusader_mk_2_the_saint.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_crusader_mk_3", name: "Crusader III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_crusader_mk_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_daimler_mk_2", name: "Daimler Mk II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_daimler_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_desert_warrior", name: "Desert Warrior", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_desert_warrior.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_eland_90_mk_7", name: "Eland 90 Mk.7", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_eland_90_mk_7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_falcon", name: "Falcon", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_falcon.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv107_scimitar", name: "Scimitar", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv107_scimitar.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv107_scimitar_mk2", name: "Scimitar Mk.2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv107_scimitar_mk2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv221_caernarvon", name: "Caernarvon", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv221_caernarvon.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv4004_conway", name: "Conway", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv4004_conway.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv4005", name: "FV4005", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv4005.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv4202", name: "FV4202", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv4202.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv438_swingfire", name: "Swingfire", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv438_swingfire.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_fv721_fox", name: "Fox", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_fv721_fox.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_g6_spg", name: "G6", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_g6_spg.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_khalid", name: "Khalid", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_khalid.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_m109a1", name: "M109A1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_m109a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_m3_stuart", name: "Stuart I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_m3_stuart.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_m3a1_stuart", name: "Stuart III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_m3a1_stuart.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_m4a5_ram_2", name: "Ram II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_m4a5_ram_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_mark_v", name: "Mark V", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_mark_v.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_marmon_herrington_mk_6_2pdr", name: "SARC MkVI (2pdr)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["SARC MkVI"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_marmon_herrington_mk_6_2pdr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_marmon_herrington_mk_6_6pdr", name: "SARC MkVI (6pdr)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["SARC MkVI"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_marmon_herrington_mk_6_6pdr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_matilda_hedgehog", name: "Matilda Hedgehog", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_matilda_hedgehog.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_mk1_grant", name: "Grant I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_mk1_grant.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_olifant_mk_1a", name: "Olifant Mk.1A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_olifant_mk_1a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_olifant_mk_2", name: "Olifant Mk.2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_olifant_mk_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ram_90mm_aa", name: "QF 3.7 Ram", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ram_90mm_aa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ratel_20", name: "Ratel 20", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ratel_20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ratel_90", name: "Ratel 90", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ratel_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ratel_zt3", name: "ZT3A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ratel_zt3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_rooikat_105_td", name: "Rooikat 105", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_rooikat_105_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_rooikat_76", name: "Rooikat Mk.1D", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_rooikat_76.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_rooikat_mttd", name: "Rooikat MTTD", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_rooikat_mttd.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_rooikat_za_35", name: "ZA-35", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_rooikat_za_35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_sarc_mk4_a", name: "SARC MkIVa", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_sarc_mk4_a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_sherman_ic_firefly", name: "Sherman IC \"Trzyniec\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_sherman_ic_firefly.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_sherman_ii", name: "Sherman II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_sherman_ii.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_sherman_vc_firefly_kit_3rank", name: "Firefly (Overlord)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_sherman_vc_firefly_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_shir_2", name: "FV4030/3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_shir_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_skink_aa", name: "Skink", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_skink_aa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_sky_sabre_fcs", name: "Sky Sabre (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Sky Sabre"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_sky_sabre_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_sky_sabre_launcher", name: "Sky Sabre (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["Sky Sabre"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_sky_sabre_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_sp_17_pdr_valentine", name: "Archer", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_sp_17_pdr_valentine.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_stormer_air_defence", name: "Stormer AD", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_stormer_air_defence.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_stormer_hvm", name: "Stormer HVM", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_stormer_hvm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_t17e2", name: "Staghound AA", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_t17e2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_t_90s_bheeshma", name: "Bhishma TWMP", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_t_90s_bheeshma.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_tog_2", name: "TOG II", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_tog_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_tracked_rapier", name: "Rapier", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_tracked_rapier.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ttd", name: "TTD", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ttd.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_valentine_mk_1", name: "Valentine I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_valentine_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_valentine_mk_11", name: "Valentine XI", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_valentine_mk_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_valentine_mk_9", name: "Valentine IX", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_valentine_mk_9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vfm_5", name: "VFM5", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vfm_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vickers_gbt_155", name: "GBT 155", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vickers_gbt_155.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vickers_mbt_mk_1", name: "Vickers Mk.1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vickers_mbt_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vickers_mbt_mk_3", name: "Vickers Mk.3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vickers_mbt_mk_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vickers_mk7", name: "Vickers Mk.7", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vickers_mk7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vickers_mk_11", name: "Vickers Mk.11", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vickers_mk_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vickers_mk_6_aa_mk_1", name: "Light AA Mk I", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vickers_mk_6_aa_mk_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_vijayanta", name: "Vijayanta", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_vijayanta.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_uk_ystervark_spaa", name: "Ystervark", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/uk_ystervark_spaa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_adats_bradley", name: "ADATS", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_adats_bradley.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_ags_teledyne", name: "AGS", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_ags_teledyne.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_ccvl", name: "CCVL", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_ccvl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_efv_p1", name: "EFV", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_efv_p1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_halftrack_m13", name: "M13 MGMC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_halftrack_m13.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_halftrack_m15", name: "M15 CGMC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_halftrack_m15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_halftrack_m3_75mm_gmc", name: "M3 GMC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_halftrack_m3_75mm_gmc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_hstv_l", name: "HSTV-L", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_hstv_l.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_lav_ad", name: "LAV-AD", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_lav_ad.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_losat_ccv", name: "LOSAT", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_losat_ccv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_lvt_a1_m24", name: "LVT(A)(1) (M24)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_lvt_a1_m24.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_lvt_a_1", name: "LVT(A)(1)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_lvt_a_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_lvt_a_4", name: "LVT(A)(4)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_lvt_a_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m10_booker_late", name: "M10 Booker", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m10_booker_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1128_mgs", name: "M1128", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1128_mgs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1128_wolfpack", name: "M1128 Wolfpack", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1128_wolfpack.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1296_dragoon", name: "M1296", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1296_dragoon.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m18_hellcat_black_cat", name: "M18 \"Black Cat\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m18_hellcat_black_cat.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m18_hellcat_kit_3rank", name: "Hellcat (Hell)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m18_hellcat_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m18_super_hellcat", name: "Super Hellcat", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m18_super_hellcat.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1_abrams_kvt", name: "M1 KVT", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1_abrams_kvt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1_ip_abrams", name: "IPM1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1_ip_abrams.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1a1_aim_abrams", name: "M1A1 AIM", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1a1_aim_abrams.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1a1_hc_abrams", name: "M1A1 HC", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1a1_hc_abrams.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1a1_hc_usmc", name: "M1A1 Click-Bait", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1a1_hc_usmc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1a2_abrams", name: "M1A2 Abrams", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1a2_abrams.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1a2_sep2_abrams", name: "M1A2 SEP V2", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1a2_sep2_abrams.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1a2_sep2_abrams_trophy", name: "M1A2 (Trophy-HV)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1a2_sep2_abrams_trophy.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m1a2_sep3_abrams", name: "M1A2 SEPv3", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m1a2_sep3_abrams.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m247", name: "M247", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m247.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m24_chaffee_tl", name: "M24 (TL)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m24_chaffee_tl.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m26_t99", name: "M26 T99", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m26_t99.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m26e1_pershing", name: "M26E1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m26e1_pershing.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m2a2", name: "M2A2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m2a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m2a4", name: "M2A4", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m2a4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m2a4_1st_armor_div", name: "M2A4 (1st Arm.Div.)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M2A4"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m2a4_1st_armor_div.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m3_bradley", name: "M3 Bradley", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m3_bradley.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m3a1_stuart", name: "M3A1 Stuart", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m3a1_stuart.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m3a1_stuart_usmc", name: "M3A1 (USMC)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M3A1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m3a1_stuart_usmc.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m3a3_bradley", name: "M3A3 Bradley", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m3a3_bradley.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m46_patton_73_armor_bat", name: "M46 \"Tiger\"", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m46_patton_73_armor_bat.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4_sherman_calliope", name: "Calliope", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4_sherman_calliope.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4_t26", name: "M4/T26", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4_t26.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a1_76w_sherman", name: "M4A1 (76) W", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M4A1 W"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a1_76w_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a2_1944_germ", name: "M4 748 (a)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M4 748"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a2_1944_germ.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a2_76w_sherman", name: "M4A2 (76) W", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["M4A2 W"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a2_76w_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a2_sherman", name: "M4A2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a2_sherman.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a3e2_76w_sherman_jumbo", name: "M4A3E2 (76) W", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["M4A3E2 W"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a3e2_76w_sherman_jumbo.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a3e2_sherman_jumbo_cobra_king", name: "Cobra King", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a3e2_sherman_jumbo_cobra_king.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a3e8_76w_sherman_kit_3rank", name: "Sherman (Hell)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a3e8_76w_sherman_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m4a5_ram_2", name: "M4A5", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m4a5_ram_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m50_ontos", name: "M50", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m50_ontos.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m551_76", name: "M551(76)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m551_76.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m56_scorpion", name: "M56", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m56_scorpion.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m5a1_stuart_canadian_5st_arm", name: "Stuart VI (5th CAD)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Stuart VI"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m5a1_stuart_canadian_5st_arm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m5a1_stuart_td", name: "M5A1 TD", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m5a1_stuart_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m60_120s", name: "120S", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m60_120s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m60a1", name: "M60A1 (AOS)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m60a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m60a1_rise_mod", name: "M60A1 Predator", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m60a1_rise_mod.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m60a1_rise_passive_era", name: "M60A1 RISE (P)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["M60A1 RISE"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m60a1_rise_passive_era.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m60a2", name: "M60A2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m60a2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m60a3_slep", name: "M60 AMBT", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m60a3_slep.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m6a1", name: "M6A1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m6a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m6a2e1", name: "M6A2E1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m6a2e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m728", name: "M728 CEV", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m728.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m8a1", name: "M8A1 GMC", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m8a1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_m901_itv", name: "M901", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_m901_itv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_mbt_70", name: "MBT-70", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_mbt_70.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_merkava_mk_3d", name: "Merkava Mk.3D", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_merkava_mk_3d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_rdf_lt", name: "RDF/LT", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_rdf_lt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_skink_aa_kit_3rank", name: "Skink (Hell)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Skink"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_skink_aa_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_sl_amraam_fcs", name: "CLAWS (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["CLAWS"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_sl_amraam_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_sl_amraam_launcher", name: "CLAWS (TEL)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["CLAWS"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_sl_amraam_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t114", name: "T114", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t114.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t18_e2", name: "T18E2", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t18_e2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t1e1", name: "T1E1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t1e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t1e1_90", name: "T1E1 (90)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["T1E1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t1e1_90.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t20", name: "T20", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t20.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t25", name: "T25", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t25.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t26e4_superpershing", name: "T26E1-1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t26e4_superpershing.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t26e5", name: "T26E5", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t26e5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t29", name: "T29", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t29.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t30", name: "T30", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t30.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t32", name: "T32", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t32.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t32e1", name: "T32E1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t32e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t54e1", name: "T54E1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t54e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t54e2", name: "T54E2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t54e2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t55e1", name: "T55E1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t55e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t58", name: "T58", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t58.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t77e1", name: "T77E1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t77e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t86", name: "T86", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t86.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t92", name: "T92", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t92.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t95", name: "T95", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t95.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_t95e1", name: "T95E1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_t95e1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_xm1_chrysler", name: "XM1 (Chrysler)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["XM1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_xm1_chrysler.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_xm1_gm", name: "XM1 (GM)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["XM1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_xm1_gm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_xm246", name: "XM246", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_xm246.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_xm_8", name: "XM8", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_xm_8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_xm_800t", name: "XM800T", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_xm_800t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_xm_803", name: "XM803", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_xm_803.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_us_xm_975_roland", name: "XM975", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/us_xm_975_roland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_2s19_m1", name: "2S19M1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_2s19_m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_2s19_m2", name: "2S19M2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_2s19_m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_2s25", name: "2S25", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_2s25.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_2s25m", name: "2S25M", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_2s25m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_2s38", name: "2S38", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_2s38.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_2s3m", name: "2S3M", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_2s3m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_9a35_m2", name: "Strela-10M2", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_9a35_m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_9p149", name: "Shturm-S", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_9p149.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_9p157", name: "Khrizantema-S", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_9p157.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_asu_57", name: "ASU-57", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_asu_57.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_asu_85", name: "ASU-85", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_asu_85.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_ba_11", name: "BA-11", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_ba_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bm_13n", name: "BM-13N", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bm_13n.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bm_31_12", name: "BM-31-12", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bm_31_12.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bm_8_24", name: "BM-8-24", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bm_8_24.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bmd_4", name: "BMD-4", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bmd_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bmd_4m", name: "BMD-4M", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bmd_4m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bmd_4m2", name: "BMD-4M2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bmd_4m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bmp_2m", name: "BMP-2M", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bmp_2m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bmp_3", name: "BMP-3", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bmp_3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bmpt", name: "BMPT", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bmpt.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bmpt_72", name: "BMPT-72", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bmpt_72.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bt_5", name: "BT-5", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bt_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bt_7_1937_td", name: "BT-7 TD", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bt_7_1937_td.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bt_7_m", name: "BT-7M", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bt_7_m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_bt_7a_f32", name: "BT-7A (F-32)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["BT-7A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_bt_7a_f32.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_btr_152a", name: "BTR-152A", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_btr_152a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_btr_152d", name: "BTR-152D", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_btr_152d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_btr_82at", name: "BTR-82AT", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_btr_82at.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_btr_zd", name: "BTR-ZD", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_btr_zd.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_buk_m3_fcs", name: "9K317M \"BUK-M3\" (TADS)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["9K317M \"BUK-M3\""],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_buk_m3_fcs.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_buk_m3_launcher", name: "9K317M \"BUK-M3\" (TELAR)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["9K317M \"BUK-M3\""],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_buk_m3_launcher.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_garford_putilov", name: "Garford", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_garford_putilov.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_gaz_4m", name: "GAZ-AAA (4M)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["GAZ-AAA"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_gaz_4m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_gaz_dshk", name: "GAZ-AAA (DShK)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["GAZ-AAA"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_gaz_dshk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_gaz_mm_72k", name: "GAZ-MM (72-K)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["GAZ-MM"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_gaz_mm_72k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_is_1", name: "IS-1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_is_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_is_1_kit_3rank", name: "IS-1 ('45)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["IS-1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_is_1_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_is_2_1944_321", name: "IS-2 No.321", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_is_2_1944_321.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_is_2_1944_revenge", name: "IS-2 \"Revenge\"", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_is_2_1944_revenge.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_is_4m", name: "IS-4M", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_is_4m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_is_6", name: "IS-6", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_is_6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_is_7", name: "IS-7", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_is_7.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_isu_122s", name: "ISU-122S", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_isu_122s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_it_1", name: "IT-1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_it_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_122", name: "KV-122", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_122.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_1_l_11", name: "KV-1 (L-11)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_1_l_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_1_zis_5", name: "KV-1 (ZiS-5)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_1_zis_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_1e", name: "KV-1E", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_1e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_1s", name: "KV-1S", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_1s.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_220", name: "KV-220", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_220.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_2_1939", name: "KV-2 (1939)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_2_1939.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_2_1940", name: "KV-2 (1940)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_2_1940.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_2_zis_6", name: "KV-2 (ZiS-6)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_2_zis_6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_7_u13", name: "KV-7 (U-13)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["KV-7"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_7_u13.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_8", name: "KV-8", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_8.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_kv_85", name: "KV-85", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_kv_85.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_m3c", name: "M3 Medium", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_m3c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_m53_59", name: "M53/59", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_m53_59.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_120", name: "Object 120", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_120.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_140", name: "Object 140", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_140.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_248", name: "Object 248", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_248.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_268", name: "Object 268", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_268.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_279", name: "Object 279", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_279.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_292", name: "Object 292", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_292.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_435", name: "Object 435", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_435.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_685", name: "Object 685", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_685.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_775", name: "Object 775", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_775.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_object_906", name: "Object 906", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_object_906.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_pantsyr_s1", name: "Pantsir-S1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_pantsyr_s1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_pantsyr_sm_sv", name: "Pantsir SM-SV", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_pantsyr_sm_sv.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_pt_76_57", name: "PT-76-57", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_pt_76_57.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_pt_76b", name: "PT-76B", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_pt_76b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_pzkpfw_iii_ausf_j_l42", name: "T-III", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_pzkpfw_iii_ausf_j_l42.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_pzkpfw_v", name: "T-V", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_pzkpfw_v.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_rbt_5", name: "RBT-5", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_rbt_5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_sdkfz_251_21_kit_3rank", name: "Hanomag ('45)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_sdkfz_251_21_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_smk", name: "SMK", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_smk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_100p", name: "SU-100P", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_100p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_100y", name: "SU-100Y", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_100y.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_122", name: "SU-122", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_122.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_122_54", name: "SU-122-54", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_122_54.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_122p", name: "SU-122P", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_122p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_57b", name: "SU-57B", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_57b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_5_1", name: "SU-5-1", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_5_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_76d", name: "SU-76D", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_76d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_76m_5st_kav_corps", name: "SU-76M (5th Gv.Kav.Corps)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["SU-76M"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_76m_5st_kav_corps.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_85_1943", name: "SU-85", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_85_1943.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_85a", name: "SU-85A", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_85a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_su_85m", name: "SU-85M", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_su_85m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_10a", name: "T-10A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_10a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_10m", name: "T-10M", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_10m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_126sp", name: "T-126", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_126sp.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_26_1940_1st_gvtbr", name: "T-26 (1st Gv.T.Br.)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_26_1940_1st_gvtbr.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_26_4", name: "T-26-4", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_26_4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_28_1938", name: "T-28 (1938)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["T-28"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_28_1938.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_28e", name: "T-28E", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_28e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_100", name: "T-34-100", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_100.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_1940_l_11", name: "T-34 (Prototype)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_1940_l_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_1941", name: "T-34 (1941)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_1941.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_1941_57", name: "T-34-57", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_1941_57.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_1941_cast_turret", name: "T-34 (1st Gv.T.Br.)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_1941_cast_turret.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_1941_l_11", name: "T-34 (1940)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_1941_l_11.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_1942", name: "T-34 (1942)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_1942.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_57_1943", name: "T-34-57 (1943)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["T-34-57"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_57_1943.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_85_d_5t", name: "T-34-85 (D-5T)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_85_d_5t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_85_stp_s53", name: "T-34-85 (STP)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_85_stp_s53.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_85_zis_53_kit_3rank", name: "T-34-85 ('45)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_85_zis_53_kit_3rank.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_85_zis_53_v80", name: "T-34-85 \"Partisan\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_85_zis_53_v80.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34_85e", name: "T-34-85E", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34_85e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34e", name: "T-34E", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_34e_stz", name: "T-34E STZ", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_34e_stz.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_35", name: "T-35", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_35.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_44", name: "T-44", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_44.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_44_100", name: "T-44-100", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_44_100.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_44_122", name: "T-44-122", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_44_122.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_44_po", name: "T-44 (FM)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["T-44"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_44_po.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_54_1947", name: "T-54 (1947)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_54_1947.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_54_1949", name: "T-54 (1949)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_54_1949.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_54_1951", name: "T-54 (1951)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_54_1951.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_55_am", name: "T-55AM-1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_55_am.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_55_amd_1", name: "T-55AMD-1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_55_amd_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_55a", name: "T-55A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_55a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_60_1941", name: "T-60", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_60_1941.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_62m1", name: "T-62M-1", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_62m1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_64_b_1984", name: "T-64B", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_64_b_1984.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_64a_1971", name: "T-64A (1971)", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: ["T-64A"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_64a_1971.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_70_1942", name: "T-70", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_70_1942.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72a", name: "T-72A", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72av_turms", name: "T-72AV (TURMS-T)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["T-72AV"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72av_turms.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72b", name: "T-72B", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72b3_2011", name: "T-72B3", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72b3_2011.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72b3_arena", name: "T-72B3 \"Arena\"", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72b3_arena.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72b3_arena_m", name: "T-72B3A", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72b3_arena_m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72b_1989", name: "T-72B (1989)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: ["T-72B"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72b_1989.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_72m2_moderna", name: "T-72M2 Moderna", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_72m2_moderna.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_80b", name: "T-80B", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_80b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_80bvm", name: "T-80BVM", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_80bvm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_80ud", name: "T-80UD", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_80ud.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_80ue1", name: "T-80U-E1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_80ue1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_80ue1_sm", name: "-80U-1", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_80ue1_sm.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_80uk", name: "T-80UK", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_80uk.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_80um2", name: "T-80UM2", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_80um2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_t_90m_arena_m", name: "T-90M (Arena-M)", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_t_90m_arena_m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_to_55", name: "TO-55", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_to_55.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_valentine_mk_9", name: "MK-IX \"Valentine\"", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_valentine_mk_9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zis_12_94km_1945", name: "ZiS-12 (94-KM)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["ZiS-12"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zis_12_94km_1945.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zis_30", name: "ZiS-30", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zis_30.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zis_43", name: "ZiS-43", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zis_43.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zprk_2s6", name: "2S6", category: "tank", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zprk_2s6.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zsu_23_4m2", name: "ZSU-23-4M2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zsu_23_4m2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zsu_23_4m4", name: "ZSU-23-4M4", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zsu_23_4m4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zsu_29k", name: "YaG-10 (29-K)", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["YaG-10"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zsu_29k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zsu_37", name: "ZSU-37", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zsu_37.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zsu_37_2", name: "ZSU-37-2", category: "tank", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zsu_37_2.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_ussr_zut_37", name: "ZUT-37", category: "tank", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/ussr_zut_37.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_v_11g", name: "V-11", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/v_11g.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_v_12d", name: "V-12D", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/v_12d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_v_156_b1", name: "Chesapeake Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/v_156_b1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_v_156_f", name: "V-156-F", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/v_156_f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_vampire_fb5", name: "Vampire F.B.5", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/vampire_fb5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_vampire_fb52_finland", name: "Vampire FB 52A", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/vampire_fb52_finland.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_vampire_fb5_j28b", name: "A28B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/vampire_fb5_j28b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_vb_10_02", name: "VB.10-02", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/vb_10_02.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_vb_10c1", name: "VB.10C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/vb_10c1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_venom_fb4", name: "Venom FB.4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/venom_fb4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_vg_33", name: "V.G.33C-1", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/vg_33.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_vl_myrsky_2_late", name: "VL Myrsky II", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/vl_myrsky_2_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_walrus_mk1", name: "Walrus Mk.I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/walrus_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_washington_b1", name: "Washington B.Mk.I", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/washington_b1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wasp_has_mk1", name: "Wasp HAS.Mk.1", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wasp_has_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_welkin_fmk1", name: "Welkin F.Mk.I", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/welkin_fmk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wellington_mk10", name: "Wellington Mk X", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wellington_mk10.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wellington_mk1c", name: "Wellington Mk Ic", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wellington_mk1c.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wellington_mk1c_late", name: "Wellington Mk Ic/L", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wellington_mk1c_late.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wellington_mk3", name: "Wellington Mk III", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wellington_mk3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wessex_mk5", name: "Wessex HU Mk.5", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wessex_mk5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_whirlwind_mk1", name: "Whirlwind Mk I", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/whirlwind_mk1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_whirlwind_p9", name: "Whirlwind P.9", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/whirlwind_p9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wirraway", name: "Wirraway", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wirraway.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wm_21", name: "WM-21", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wm_21.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wm_23", name: "WM-23", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wm_23.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_wyvern_s4", name: "Wyvern S.4", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/wyvern_s4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_xa_38", name: "XA-38", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/xa_38.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_xf5f", name: "XF5F", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/xf5f.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_xf5u_1", name: "XF5U-1", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/xf5u_1.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_xp_50", name: "XP-50", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/xp-50.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_xp_55", name: "XP-55", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/xp-55.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yah_64", name: "YAH-64", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yah_64.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_15", name: "Yak-15", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-15.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_15_early", name: "Yak-15P", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-15_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_17", name: "Yak-17", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-17.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_1_early", name: "Yak-1 (19)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Yak-1"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-1_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_1b", name: "Yak-1B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-1b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_23", name: "Yak-23", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-23.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_28b", name: "Yak-28B", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-28b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_30d", name: "Yak-30D", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-30d.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_38", name: "Yak-38", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-38.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_38m", name: "Yak-38M", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-38m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_3_eremin", name: "Eremin's Yak-3(e)", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: ["Eremin's Yak-3"],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-3_eremin.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_3_vk107", name: "Yak-3 (VK-107)", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-3_vk107.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_3p", name: "Yak-3P", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-3p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_3t", name: "Yak-3T", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-3t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_3u", name: "Yak-3U", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-3u.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_4", name: "Yak-4", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-4.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_7b", name: "Yak-7B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-7b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9", name: "Yak-9", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9b", name: "Yak-9B", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9b.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9k", name: "Yak-9K", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9k.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9m", name: "Golovachev's Yak-9M", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9m.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9p", name: "Yak-9P", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9p.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9t", name: "Yak-9T", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9t.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9t_france", name: "Challe's Yak-9T", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9t_france.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9u", name: "Yak-9U", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9u.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_9ut", name: "Yak-9UT", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak-9ut.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_130_early", name: "Yak-130", category: "plane", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak_130_early.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_141", name: "Yak-141", category: "plane", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak_141.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_1_litvyak", name: "Yak-1 Litvyak", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak_1_litvyak.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yak_2_kabb", name: "Yak-2 KABB", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yak_2_kabb.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_yp_38", name: "YP-38", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/yp-38.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_1007_bis_serie3", name: "Z.1007 bis serie 3", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_1007_bis_serie3.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_1007_bis_serie5", name: "Z.1007 bis serie 5", category: "plane", era: "WW2", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_1007_bis_serie5.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_10a", name: "Z-10A", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_10a.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_10me", name: "Z-10ME", category: "helicopter", era: "Modern", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_10me.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_11wa", name: "Z-11WA", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_11wa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_19", name: "Z-19", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_19.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_19e", name: "Z-19E", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_19e.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_9w", name: "Z-9W", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_9w.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
  {
    id: "wt_z_9wa", name: "Z-9WA", category: "helicopter", era: "Cold War", difficulty: 3,
    source: "render",
    aliases: [],
    images: [{ url: "https://static.encyclopedia.warthunder.com/images/z_9wa.png", credit: "War Thunder Wiki / Gaijin Entertainment (game render)" }]
  },
];

/* In the browser this appends to the dataset defined by js/vehicles.js. */
if (typeof VEHICLES !== "undefined") {
  Array.prototype.push.apply(VEHICLES, RENDER_VEHICLES);
}
if (typeof module !== "undefined" && module.exports) module.exports = { RENDER_VEHICLES };
