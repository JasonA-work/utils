# Utils

We'll keep adding more. For now, we have:

1. Word Count
2. Format Date

## Word Count Function

This component provides a function to count the number of words in a given string. A word is defined as a sequence of non-space characters. Consecutive spaces are treated as a single delimiter.

### Function Signature

```typescript
export function wordCount(str: string): number
```

### Parameters

- `str` (`string`): The input string in which words will be counted.

### Returns

- `number`: The number of words in the input string.

### Example

```typescript
import { wordCount } from "@witt/utils"

const text = "Hello,    world! This is a   test."
const count = wordCount(text)

console.log(count) // Output: 6
```

In this example, the input string contains 6 words. Consecutive spaces between words are treated as a single delimiter.

### Usage

To use the `wordCount` function, import it into your project and pass the string you want to analyze as an argument. The function will return the number of words in the string.

### Implementation Details

The function works by:

1. Splitting the input string using a space character as the delimiter.
2. Filtering out any empty strings from the resulting array.
3. Returning the length of the filtered array, which represents the number of words.

### Notes

- The function treats multiple consecutive spaces as a single delimiter.
- Words are defined strictly as sequences of non-space characters.

## formatDate

The `formatDate` function is a utility function that formats a date according to the given or default options. It takes a date input (either a string in the format `yyyy-mm-dd` or a `Date` object) and an optional `Intl.DateTimeFormatOptions` object for custom formatting. If no custom options are provided, it uses the default options.

### Parameters

- `dateInput` (string | Date): The date to format. Can be a string in the format `yyyy-mm-dd` or a `Date` object. **Note**: The function cannot handle strings in the `dd-mm-yyyy` format.
- `customOptions` (Intl.DateTimeFormatOptions) _(optional)_: Custom date formatting options following the `Intl.DateTimeFormatOptions` interface.

### Default Options

The default options used for formatting the date are:

- `year`: "numeric" (e.g., 2024)
- `month`: "long" (e.g., January, February, etc.)
- `day`: "numeric" (e.g., 1, 2, 3, etc.)

In other words, it returns MMMM DD, YYYY by default.

### Return Value

The function returns a `string` representing the formatted date.

### Examples

#### Using a date string

```js
formatDate("2021-12-24")
// Returns "December 24, 2021"
```

```js
formatDate("2021-12-24", { year: "2-digit", month: "numeric", day: "numeric" })
// Returns "12/24/21"
```

```js
formatDate("24-12-2021")
// Returns "Invalid Date"
```

#### Using new Date()

```js
formatDate(new Date())
// Returns today's date in MMMM DD, YYYY
```

### Intl.DateTimeFormatOptions Properties

| Property       | Description                                              | Possible Values                                           |
| -------------- | -------------------------------------------------------- | --------------------------------------------------------- |
| `weekday`      | The representation of the weekday                        | `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"` |
| `era`          | The representation of the era                            | `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"` |
| `year`         | The representation of the year                           | `"numeric"`, `"2-digit"`                                  |
| `month`        | The representation of the month                          | `"numeric"`, `"2-digit"`, `"narrow"`, `"short"`, `"long"` |
| `day`          | The representation of the day                            | `"numeric"`, `"2-digit"`                                  |
| `hour`         | The representation of the hour                           | `"numeric"`, `"2-digit"`                                  |
| `minute`       | The representation of the minute                         | `"numeric"`, `"2-digit"`                                  |
| `second`       | The representation of the second                         | `"numeric"`, `"2-digit"`                                  |
| `hour12`       | Whether to use 12-hour time (as opposed to 24-hour time) | `boolean`                                                 |
| `timeZoneName` | The representation of the time zone name                 | `"long"`, `"short"`, `"narrow"`                           |

# License

This project is licensed under the MIT License.
