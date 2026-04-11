import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/homepage/HomePage";
import Books from "../Pages/books/Books";
import PageToRead from "../Pages/pagetoread/PageToRead";
import ErrorPage from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "//page-to-read",
        element: <PageToRead />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
