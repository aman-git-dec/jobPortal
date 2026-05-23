//import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Button } from "./components/ui/Button";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import Joblisting from "./pages/job-listing";
import JobPage from "./pages/job";
import PostJob from "./pages/post-job";
import SavedJobs from "./pages/saved-job";
import MyJobs from "./pages/myjobs";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>,
      },
      {
        path:'/onboarding',
        element:<Onboarding/>,
      },
      {
        path:'/jobs',
        element:<Joblisting/>,
      },
      {
        path:'/job/:id',
        element:<JobPage/>,
      },
      {
        path:'/post-job',
        element:<PostJob/>,
      },
      {
        path:'/saved-jobs',
        element:<SavedJobs/>,
      },
      {
        path:'/my-jobs',
        element:<MyJobs/>,
      },
    ],
  },
])

function App() {
  return(
    <RouterProvider router = {router}/>
  )
}

export default App;
