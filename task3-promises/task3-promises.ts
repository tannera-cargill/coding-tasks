/**
 * Part 1:
 * Lets refactor the below snippet to remove the onFinished callback from taskA() and use
 * promises instead.
 * */

function taskA(onFinished: (token: string) => string) {
  const getToken = () => Promise.resolve("abc");
  return getToken().then((value) => {
    return onFinished(value);
  });
}

function taskB(token: string) {
  return token;
}

export const tokenGetter = () => {
  return taskA((value) => taskB(value));
};

/**
 * Part 2:
 * Refactor the below code to run taskA() and taskB() concurrently in the executor.
 * */

async function callA() {
  console.log("callA ran");
}

async function callB() {
  console.log("callB ran");
}

const executorPart2 = () => {
  callA();
  callB();
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
