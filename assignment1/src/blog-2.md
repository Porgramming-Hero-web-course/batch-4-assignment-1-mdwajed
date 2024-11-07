Handling asynchronous operations using async/await over callback/promise TypeScript:

Asynchronous programming is a fundamental part of modern software development, especially in JavaScript and TypeScript. Handling tasks like data fetching, file reading, or making network requests without blocking the execution flow is essential for building efficient applications. TypeScript, with its powerful type system, offers a robust way to manage asynchronous operations. Among the most popular tools to handle these operations are callbacks, promises, and the more modern async/await syntax.

In this blog I will discuss how to conduct asynchronous operations using async/await in TypeScript, why it is preferred over callbacks and promises, and how to apply best practices for cleaner, more maintainable code.

1.Asynchronous Operations :
In JavaScript and TypeScript, certain operations—such as HTTP requests, timers, or reading files—take time to complete. When running such operations synchronously, the program is blocked until the operation finishes, which negatively impacts the user experience.

Asynchronous operations allow other tasks to continue while waiting for the current task to finish. Callbacks, promises, and async/await are different approaches to handling such tasks.

2.Callback Operations:
Callbacks are one of the oldest patterns for handling asynchronous operations. They are simply functions that are passed as arguments to other functions and are executed once a task is completed. While they work, callbacks have a notorious downside—callback hell.

Here is an example using callbacks in TypeScript:
function fetchData(url: string, callback: (data: any) => void): void {
setTimeout(() => {
console.log(\`Data fetched from \${url}\`);
callback({ success: true, data: "Some data" });
}, 1000);
}

fetchData("https://api.example.com", (response) => {
console.log(response);
});
While the above code works fine for simple cases, managing nested asynchronous operations using callbacks make the code harder to understand and maintain.

3. The Promise Approach:
   A promise represents a value that may be available now, or in the future, or never. They provide methods like .then(), .catch(), and .finally() to handle the result or error once the promise resolves.

Here's how we can rewrite the previous example using promises:

function fetchData(url: string): Promise<any> {
return new Promise((resolve, reject) => {
setTimeout(() => {
console.log(\`Data fetched from \${url}\`);
resolve({ success: true, data: "Some data" });
}, 1000);
});
}

fetchData("https://api.example.com")
.then(response => {
console.log(response);
})
.catch(error => {
console.error("Error fetching data", error);
});
Promises are definitely cleaner than callbacks, but the syntax still involves chaining .then() and .catch() methods, which can lead to complexity, especially when multiple promises are involved.

4. Async/Await:
   The Modern Approach to Asynchronous Operations introduced in ECMAScript 2017 (ES8), async/await is a syntactic sugar built on top of promises. It allows us to write asynchronous code in a synchronous-looking manner. It improves readability and eliminates the need for chaining .then() methods, making the code look cleaner and more natural.

How async/await Works :
async: This keyword is used to define a function as asynchronous. It automatically wraps the return value in a promise.
await: This keyword can only be used inside an async function. It pauses the function execution until the promise resolves or rejects.
Let rewrite the promise-based example using async/await:

async function fetchData(url: string): Promise<any> {
return new Promise((resolve, reject) => {
setTimeout(() => {
console.log(\`Data fetched from \${url}\`);
resolve({ success: true, data: "Some data" });
}, 1000);
});
}

async function pair() {
try {
const response = await fetchData("https://api.example.com");
console.log(response);
} catch (error) {
console.error("Error fetching data", error);
}
}

pair();
In this version:

We define an async function main() which uses await to wait for the fetchData function to resolve.
The code looks synchronous but still operates asynchronously.
try/catch blocks are used for error handling, which is far cleaner than .catch() chaining in promise-based approaches.

5. Why Use async/await Over Callbacks and Promises? :

- Improved Readability
  One of the biggest advantages of async/await is that it makes asynchronous code appear as if it’s written in a synchronous manner. This simplifies reading and debugging.

- Error Handling
  With async/await, error handling becomes straightforward using try/catch blocks, which is much cleaner than using .

- Easier to Maintain
  When using callbacks or promises, dealing with multiple nested asynchronous operations is difficult. Async/await helps avoid deeply nested structures and allows for more linear, readable flow.

- Code Flow Control
  Async/await allows developers to write asynchronous code sequentially, making the logic flow easier to follow without the need for chaining .then() or nesting callbacks.

6. Best Practices When Using async/await in TypeScript :
   Wrap await calls in try/catch blocks to catch errors.

try {
const data = await someAsyncFunction();
console.log(data);
} catch (error) {
console.error("Error:", error);
}
Avoid blocking the event loop: Do not use await in non-async functions or within loops where it's unnecessary. Keep the code efficient.

Return promises where needed: Although async functions return promises by default, ensure that other functions you interact with are also returning promises to maintain consistency.

Since TypeScript provides static type checking, combine it with async/await to get the full benefit of type safety.

async function fetchData(url: string): Promise<{ success: boolean, data: string }> {
// implementation here...
} 7. Conclusion
Async/await in TypeScript is an inevitable tool for handling asynchronous operations. It simplifies the syntax, readability, and reduces the complexity of callback and promise chaining. By async/await, developers can write cleaner, more maintainable, and error-resistant code.

By using async/await, you'll be able to craft better asynchronous workflows and enhance the overall quality of your TypeScript applications.
