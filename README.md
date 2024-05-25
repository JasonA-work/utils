# Utils

We'll keep adding more. For now, we have:

1. Word Count

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

### License

This project is licensed under the MIT License.
