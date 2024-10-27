import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ServicesMainPage from "./pages/services/ServicesMainPage.tsx";
import StartPage from "./pages/StartPage.tsx";
import SchedulesMainPage from "./pages/schedules/SchedulesMainPage.tsx";
import ActivitiesMainPage from "./pages/activities/ActivitiesMainPage.tsx";
import ContactMainPage from "./pages/contact/ContactMainPage.tsx";
import AboutUsPage from "./pages/aboutUs/AboutUsPage.tsx";

export const router = createBrowserRouter(
  [
    {
        path: "/",
        element: <App />,
        children: [
          { index: true, element: <StartPage /> },
          { path: "home", element: <StartPage /> },
          { path: "services", element: <ServicesMainPage /> },
          { path: "schedules", element: <SchedulesMainPage /> },
          { path: "activities", element: <ActivitiesMainPage /> },
          { path: "contact", element: <ContactMainPage /> },
          { path: "aboutUs", element: <AboutUsPage /> },
    //       { path: 'user/new', element: <UserDialog mode={UserDialogMode.Add} /> }, // Route for adding a user
    //   { path: 'user/:id', element: <UserDialog mode={UserDialogMode.Edit} /> },
        ],
      },
    ]);
