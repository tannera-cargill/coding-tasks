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
 * Lets refactor the below snippet to remove the onFinished callback from taskA() and use
 * promises instead.
 * */

// refactor this
function taskA(onFinished: (token: string) => string) {
  const getToken = () => Promise.resolve("abc");
  return getToken().then((value) => {
    return onFinished(value);
  });
}

// leave taskB untouched.
function taskB(token: string) {
  return token;
}

// refactor this
export const tokenGetter = () => {
  return taskA((value) => taskB(value));
};

/**
 * Part 3:
 * Refactor the below code to run taskA() and taskB() concurrently in the executor.
 * */

function callA() {
  return Promise.resolve("resultA");
}

function callB() {
  return Promise.resolve("resultB");
}

const executorPart3 = async () => {
  const resultA = await callA();
  const resultB = await callB();

  return [resultA, resultB];
};

/**
 * Part 4:
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
