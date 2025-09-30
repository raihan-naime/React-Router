import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import Mobiles from "./Components/Mobiles.jsx";
import Laptop from "./Components/Laptop.jsx";
import Users from "./Components/Users.jsx";
import Users2 from "./Components/Users2.jsx";
import UserDetails from "./Components/User/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetail from "./Components/Posts/PostDetail.jsx";

// promise
const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "mobiles",
        Component: Mobiles,
      },
      {
        path: "laptop",
        Component: Laptop,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        ),
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      }
    ],
  },
  {
    path: "about",
    element: <div>I am about me</div>,
  },
  {
    path: "app",
    // element: <App></App>
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
