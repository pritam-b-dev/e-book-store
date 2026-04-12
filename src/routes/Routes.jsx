import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/homepage/HomePage";
import Books from "../Pages/books/Books";
import PageToRead from "../Pages/pagetoread/PageToRead";
import ErrorPage from "../Pages/Error/Error";
import BookDetails from "../Pages/bookDetails/BookDetails";

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
        path: "/page-to-read",
        element: <PageToRead />,
        loader: () => fetch("/booksData.json"),
      },
      {
        //bookcard.jsx কে এই পেজের এক্সেস দেয়া আছে bookId পেরামিটারে জেসনের bookID টা পাস করে।
        path: "/bookdetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
