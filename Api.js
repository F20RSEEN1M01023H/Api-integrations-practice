// const id = 4;
// const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
// const user = await res.json();

// console.log(user);

// async function getUser() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1",
//     );
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.log("Something Went Wrong", error);
//   }
// }
// getUser();

// fetch("https://jsonplaceholder.typicode.com/posts/5")
//   .then((r) => r.json())
//   .then((d) => console.log(d.title));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((r) => r.json())
//   .then((d) => console.log("Total todos:", d.length));

// fetch("https://jsonplaceholder.typicode.com/comments/1")
//   .then((r) => r.json())
//   .then((d) => console.log(d.email, d.body));

//*****************POST Method***********/

// async function UserRun() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({
//       title: "My first post",
//       body: "Hello Hamamd",
//       userId: 1,
//     }),
//   });

//   const data = await response.json();

//   console.log(data);
// }

// UserRun();

// ************** GET Method ******************

// async function Run() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//     );
//     if (!response.ok) {
//       throw new Error(`Something went wrong : ${response.status}`);
//     }
//     const data = await response.json();

//     console.log("Get Result:", data);
//   } catch (error) {
//     console.log("Something went wrong :", error);
//   }
// }
// Run();

// *******************POST Method********************

// async function Run() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         userId: 1,
//         title: "Hammad",
//         body: "Hello hamad how are you ?",
//       }),
//     });
//     const data = await response.json();
//     console.log("Data succesfully updated:", data);
//   } catch (error) {
//     console.log("Something went wrong :", error);
//   }
// }
// Run();

// **********************PUT Method *******************

// async function Run() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "PUT",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           userId: 1,
//           title: "Hammad",
//           body: "Hello hamad how are you ?",
//         }),
//       },
//     );
//     const data = await response.json();
//     console.log("Data succesfully updated:", data);
//   } catch (error) {
//     console.log("Something went wrong :", error);
//   }
// }
// Run();

// **********************PATCH Method *******************

// async function Run() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "PATCH",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           title: "Hammad",
//         }),
//       },
//     );
//     const data = await response.json();
//     console.log("Data succesfully updated:", data);
//   } catch (error) {
//     console.log("Something went wrong :", error);
//   }
// }
// Run();

// *******************DELETE **************

// async function run() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         method: "DELETE",
//       },
//     );
//     if (!response.ok) {
//       throw new Error("Something went wrong :", response.status);
//     }
//     console.log("Delete sucessfully", await response.status);
//     console.log("Body should be empty", await response.text());
//   } catch (error) {
//     console.log(error);
//   }
// }
// run();

// ****************GET TEST****************

// Fetch the user with ID 3 from https://jsonplaceholder.typicode.com/users/3 using GET

// async function getUserPosts() {
//   try {
//     const response = await fetch("httpJGTRYU");
//     if (!response.ok) {
//       throw new Error(`Something Went wrong + ${response.status}`);
//     }
//     const user = await response.json();

//     console.log(`Name: ${user.name}, Email: ${user.email}`);
//   } catch (error) {
//     console.log("Something went wrong", error);
//   }
// }
// getUserPosts();

// async function getUserPosts() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?userId=3",
//     );
//     if (!response.ok) {
//       throw new Error("Something Went wrong", response.status);
//     }
//     const user = await response.json();

//     console.log(user.length);
//   } catch (error) {
//     console.log("Something went wrong", error);
//   }
// }
// getUserPosts();

// ******************Test Example filling ***************************
// async function getUserPosts() {
//   try {
//     // Step 1: fetch user #3
//     const userRes = await fetch("https://jsonplaceholder.typicode.com/users/3");
//     if (!userRes.ok) throw new Error("User fetch failed: " + userRes.status);
//     const user = await userRes.json();

//     // Step 2: print name and email
//     console.log("User:", user.name);
//     console.log("Email:", user.email);

//     // Step 3: fetch posts for this user
//     const postsRes = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?userId=3",
//     );
//     if (!postsRes.ok) throw new Error("Posts fetch failed: " + postsRes.status);
//     const posts = await postsRes.json();

//     // Step 4: print total count
//     console.log("Total posts by this user:", posts.length);
//   } catch (error) {
//     console.log("Something went wrong:", error);
//   }
// }

// // Step 5: call the function!
// getUserPosts();

// *******************Real Apis Practice*****************

// async function getJoke() {
//   try {
//     const response = await fetch(
//       "https://v2.jokeapi.dev/joke/Programming?type=single",
//       {
//         headers: { Accept: "application/json" },
//       },
//     );
//     if (!response.ok) {
//       throw new Error(`Something went wrong : ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data.joke);
//   } catch(error) {
//     console.log("Something went wrong:", error);
//   }
// }
// getJoke();

// ******************Weather Api*****************
// async function getWeather(city) {
//   const key = "Api_weather_key";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`Status: ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(`City: ${data.name}`);
//     console.log(`Temp: ${data.main.temp}C`);
//     console.log(`Feel: ${data.main.feels_like}C`);
//     console.log(`Sky: ${data.weather[0].description}`);
//   } catch (error) {
//     console.log("Something went wrong", error.message);
//   }
// }
// getWeather("London");

// async function checkThis() {
//   try {
//     const res = await fetch(
//       "https://v2.jokeapi.dev/joke/Programming?type=single",
//     );
//     if (!res.ok) {
//       throw new Error(`Status : ${res.status}`);
//     }
//     const data = await res.json();
//     console.log(data.joke);
//   } catch (error) {
//     console.log("Something went wrong", error.message);
//   }
// }

// checkThis();

// *******************GET TEST ****************

// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) {
//       throw new Error(`Something went Wrong and Status: ${response.status}`);
//     }
//     const posts = await response.json();
//     console.log("-----------Post Content Below-----------");

//     posts.slice(0, 3).forEach((post) => {
//       console.log(`POST ID: ${post.id}`);
//       console.log(`POST Title: ${post.title}`);
//     });
//   } catch (error) {
//     console.log(`Something went wrong : ${error.message}`);
//   }
// }

// getPosts();

// ************************POST TEST************************
// async function SendPost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         userId: 1,
//         title: "Hammad Ashraf",
//         body: "Hello Hammad how are you bro ?",
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Something went wrong status: ${response.status}`);
//     }
//     const post = await response.json();
//     console.log(post);
//   } catch (error) {
//     console.log(`Something went wrong here: ${error}`);
//   }
// }

// SendPost();

// **********************PUT TEST******************

// async function putPost() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/5",
//       {
//         method: "PUT",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           userId: 5,
//           title: "This is the Updated Post 5 Title",
//           body: "This is the updated body content of the post",
//  id:5,
//         }),
//       },
//     );
//     if (!response.ok) {
//       throw new Error(`Something went wrong Status : ${response.status}`);
//     }
//     const post = await response.json();

//     console.log("Updated Content below:", post);
//   } catch (error) {
//     console.log(`something went wrong : ${error}`);
//   }
// }
// putPost();

// *********************PATCH TEST*********************

// async function putPost() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/3",
//       {
//         method: "PATCH",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           title: "This is the Updated Post 3 Only Title",
//         }),
//       },
//     );
//     if (!response.ok) {
//       throw new Error(`Something went wrong Status : ${response.status}`);
//     }
//     const post = await response.json();

//     console.log("Updated Content below:", post);
//   } catch (error) {
//     console.log(`something went wrong : ${error}`);
//   }
// }
// putPost();

// ****************DELETE******************

// async function DelPost() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/7",
//       {
//         method: "DELETE",
//       },
//     );
//     if (!response.ok) {
//       throw new Error(`Something went wrong Status : ${response.status}`);
//     }
//     console.log("Delete Successfully", response.status);
//     console.log("Body text should be Empty", await response.text());
//   } catch (error) {
//     console.log("Something went wrong :", error.message);
//   }
// }
// DelPost();

// test.js — run with: node test.js
// async function login() {
//   try {
//     const res = await fetch("https://omnidentai-crm.onrender.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: "iqra@example.com",
//         password: "StrongPass123",
//       }),
//     });

//     const data = await res.json();
//     console.log("Login response:", data);
//     console.log("Token:", data.token || data.accessToken);
//   } catch (e) {
//     console.log("Error:", e.message);
//   }
// }

// login();

// async function wakeServer() {
//   console.log("Waking server up... please wait");

//   for (let i = 1; i <= 5; i++) {
//     const res = await fetch("https://omnidentai-crm.onrender.com/");
//     console.log(`Attempt ${i} — Status: ${res.status}`);
//     await new Promise((r) => setTimeout(r, 10000)); // wait 10 seconds between tries
//   }
// }

// wakeServer();

// findApi.js
// async function tryUrl(url) {
//   try {
//     const res = await fetch(url);
//     const text = await res.text();
//     console.log(`\n--- ${url}`);
//     console.log("Status:", res.status);
//     console.log("Response:", text.slice(0, 100));
//   } catch (e) {
//     console.log(`\n--- ${url}`);
//     console.log("Error:", e.message);
//   }
// }

// async function run() {
//   await tryUrl("https://omnidentai-crm.onrender.com/");
//   await tryUrl("https://omnidentai-crm.onrender.com/auth/login");
//   await tryUrl("https://omnidentai-crm.onrender.com/api/auth/login");
//   await tryUrl("https://omnidentai-crm.onrender.com/login");
// }

// run();

// practice-auth.js
async function login() {
  try {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    });

    const data = await res.json();
    console.log("Login response:", data);
    console.log("Token:", data.token);

    // Now use the token
    await getProfile(data.token);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

async function getProfile(token) {
  const res = await fetch("https://reqres.in/api/users/2", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  console.log("\nProfile:", data.data);
  console.log("Name:", data.data.first_name, data.data.last_name);
  console.log("Email:", data.data.email);
}

login();
