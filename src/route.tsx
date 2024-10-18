import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import ServicesMainPage from "./pages/services/ServicesMainPage.tsx";
import StartPage from "./pages/StartPage.tsx";
import SchedulesMainPage from "./pages/schedules/SchedulesMainPage.tsx";
import ActivitiesMainPage from "./pages/activities/ActivitiesMainPage.tsx";
import NewsMainPage from "./pages/news/NewsMainPage .tsx";
import ContactMainPage from "./pages/contact/ContactMainPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { index: true, element: <StartPage /> },
      { path: "services", element: <ServicesMainPage /> },
      { path: "schedules", element: <SchedulesMainPage /> },  
      { path: "activities", element: <ActivitiesMainPage /> },
      { path: "news", element: <NewsMainPage /> },
      { path: "contact", element: <ContactMainPage /> },
      
    ],
  },
],
{ basename: "/BKC-Web-Dev" },
);
