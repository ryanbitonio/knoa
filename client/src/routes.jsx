import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Rsvp from "./components/layout/Rsvp";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/rsvp", element: <Rsvp /> },
]);

export default router;
