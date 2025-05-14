/**
 * TypeScript conditional typings
 *
 * Let's improve the typings of 'process()' to return a string when given a string,
 * and to return null when given null.
 *
 * Additional task:
 * refactor process() to return an Error instead of null when given null, with strict typings.
 * */

function processA(text: string | null): string | null {
  if (text === null) {
    return null;
  }

  return text.toUpperCase();
}
