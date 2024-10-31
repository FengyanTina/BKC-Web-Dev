import { createBrowserRouter } from "react-router-dom";
//import{ Suspense, lazy } from "react";
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

// // Lazy load the pages
// const ServicesMainPage = lazy(() => import("./pages/services/ServicesMainPage.tsx"));
// const StartPage = lazy(() => import("./pages/StartPage.tsx"));
// const SchedulesMainPage = lazy(() => import("./pages/schedules/SchedulesMainPage.tsx"));
// const ActivitiesMainPage = lazy(() => import("./pages/activities/ActivitiesMainPage.tsx"));
// const ContactMainPage = lazy(() => import("./pages/contact/ContactMainPage.tsx"));
// const AboutUsPage = lazy(() => import("./pages/aboutUs/AboutUsPage.tsx"));

// export const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />,
//       children: [
//         {
//           index: true,
//           element: (
//             <Suspense fallback={<div>Loading...</div>}>
//               <StartPage />
//             </Suspense>
//           ),
//         },
//         {
//           path: "home",
//           element: (
//             <Suspense fallback={<div>Loading...</div>}>
//               <StartPage />
//             </Suspense>
//           ),
//         },
//         {
//           path: "services",
//           element: (
//             <Suspense fallback={<div>Loading...</div>}>
//               <ServicesMainPage />
//             </Suspense>
//           ),
//         },
//         {
//           path: "schedules",
//           element: (
//             <Suspense fallback={<div>Loading...</div>}>
//               <SchedulesMainPage />
//             </Suspense>
//           ),
//         },
//         {
//           path: "activities",
//           element: (
//             <Suspense fallback={<div>Loading...</div>}>
//               <ActivitiesMainPage />
//             </Suspense>
//           ),
//         },
//         {
//           path: "contact",
//           element: (
//             <Suspense fallback={<div>Loading...</div>}>
//               <ContactMainPage />
//             </Suspense>
//           ),
//         },
//         {
//           path: "aboutUs",
//           element: (
//             <Suspense fallback={<div>Loading...</div>}>
//               <AboutUsPage />
//             </Suspense>
//           ),
//         },
//       ],
//     },
//   ]
// );