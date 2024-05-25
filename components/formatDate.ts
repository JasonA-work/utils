/**
 * Formats a date according to the given or default options.
 *
 * @param {string | Date} dateInput - The date to format. Can be a string (in any popular format except (dd-mm-yyyy)) or a Date object. Examples of valid input includes: ["May 24, 2024", "24 May, 2024", "05-24-2024", "05/24/2024", "2024-05-24", "2024/05/24", and many more]
 * @param {Intl.DateTimeFormatOptions} [customOptions] - Optional custom date formatting options.
 * @returns {string} The formatted date string.
 *
 * The default options are:
 * - year: "numeric" (e.g., 2024)
 * - month: "long" (e.g., January, February, etc.)
 * - day: "numeric" (e.g., 1, 2, 3, etc.)
 *
 * @typedef {Object} Intl.DateTimeFormatOptions
 * @property {('numeric'|'2-digit'|'narrow'|'short'|'long')} [weekday] - The representation of the weekday.
 * @property {('numeric'|'2-digit'|'narrow'|'short'|'long')} [era] - The representation of the era.
 * @property {('numeric'|'2-digit')} [year] - The representation of the year.
 * @property {('numeric'|'2-digit'|'narrow'|'short'|'long')} [month] - The representation of the month.
 * @property {('numeric'|'2-digit')} [day] - The representation of the day.
 * @property {('numeric'|'2-digit')} [hour] - The representation of the hour.
 * @property {('numeric'|'2-digit')} [minute] - The representation of the minute.
 * @property {('numeric'|'2-digit')} [second] - The representation of the second.
 * @property {boolean} [hour12] - Whether to use 12-hour time (as opposed to 24-hour time).
 * @property {('long'|'short'|'narrow')} [timeZoneName] - The representation of the time zone name.
 */
export function formatDate(
  dateInput: string | Date,
  customOptions?: Intl.DateTimeFormatOptions
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const options: Intl.DateTimeFormatOptions = {
    ...defaultOptions,
    ...customOptions,
  }

  // If dateInput is a string, convert it to a Date object
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput

  return date.toLocaleDateString(undefined, options)
}
