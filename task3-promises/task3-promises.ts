/**
 * Preliminary question: What is Logged?
 **/

async function asyncFunction() {
  const firstValue = 10;
  const secondValue = await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log(firstValue, secondValue);
}
asyncFunction();

/**
 * Part 1:
 * Refactor the above function to use only Promises, and no async await,
 * whilst keeping exactly the same behaviour.
 * */


/**
 * Part 2:
 * Lets refactor tokenGetterFunc() to make it more reusable by allowing us to provide a different getToken() function.
 * */
async function tokenGetterFunc() {
  const getToken = () => Promise.resolve("abc");
  let token;
  try {
    token = await getToken();
  } catch (e) {
    console.error("Token loading failed");
  }

  return token;
}
