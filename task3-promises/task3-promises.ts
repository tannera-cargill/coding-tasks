/**
 * Part 1:
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
 * Part 2:
 * Refactor the below code to run taskA() and taskB() concurrently in the executor.
 * */

function callA() {
  return Promise.resolve('resultA')
}

function callB() {
  return Promise.resolve('resultB')
}

const executorPart2 = async () => {
 const resultA = await callA();
  const resultB = await callB();

  return [resultA, resultB]
};

/**
 * Part 3:
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
