import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-3xl bg-amber-400">Hello World!</h1>,
  },
]);

export default router;
