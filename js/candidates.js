/* Vehicle Spotter — pictures the dataset could not place.
 *
 * Photographs found on a vehicle's own Wikipedia article whose filename does
 * not name that vehicle, so the harvester would not attach them to an entry.
 * They are usually a variant, a relative, a rival shown for comparison, or
 * something else entirely. The entry builder shows them one at a time and asks
 * what they are.
 */
const CANDIDATES = [];

if (typeof module !== "undefined" && module.exports) module.exports = { CANDIDATES };
