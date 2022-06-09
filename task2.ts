/**
 * TypeScript conditional typings
 *
 * Let's improve the typings of 'process()' to return a string when given a string,
 * and to return null when given null.
 *
 * Additional task:
 * refactor process() to return an Error instead of null when given null, with strict typings.
 * */

function process(text: string | null): string | null {
  if (text === null) {
    return null;
  }

  return text.toUpperCase();
}

/**
 * TypeScript Generics (advanced)
 *
 * Let's implement a simple useQuery(callback: (...args): any[] => any) hook which takes a callback as parameter, and returns a 'query()' function which
 * infers the same function signature as the input callback, but only takes the first parameter, and the return type of query() is always void.
 * @example
 * const { query } = useQuery((param: string) => Promise.resolve())
 *
 * // OK
 * query('someString')
 *
 * // TS Error: Argument of type 'number' is not assignable to parameter of type 'string'.
 * query(1)
 * */