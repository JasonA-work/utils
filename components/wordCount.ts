/**
 * Counts the number of words in a given string.
 *
 * A word is defined as a sequence of non-space characters.
 * Consecutive spaces are treated as a single delimiter.
 *
 * @param {string} str - The input string to count words in.
 * @returns {number} - The number of words in the input string.
 *
 */
export function wordCount(str: string): number {
  return str.split(" ").filter(n => n !== "").length
}
