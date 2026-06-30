import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homecomp from "../pages/home/Homecomp";
import Newscomp from "../pages/news/NewsComp";
import Metrocomp from "../pages/metroplus/MetroComp";
import FeaturesComp from "../pages/features/FeaturesComp";
import SportComp from "../pages/sport/SportComp";
import PunchComp from "../pages/punchlite/PunchComp";
import Editcomp from "../pages/editorial/Editcomp";
import ColomComp from "../pages/column/ColumnComp";
import VideoComp from "../pages/videos/VideoComp";
import ConComp from "../pages/continuation/ConComp";


export const element = createBrowserRouter([
    {
        path: "/", element: <MainLayout />,
        children: [
            { path: '/', element: <Homecomp />},
            { path: 'news', element: <Newscomp />},
            { path: 'metro',  element: <Metrocomp /> },
            { path: 'features',  element: <FeaturesComp /> },
            { path: 'sport',  element: <SportComp /> },
            { path: 'punch',  element: <PunchComp /> },
            { path: 'Editorial',  element: <Editcomp /> },
            { path: 'column',  element: <ColomComp /> },
            { path: 'video',  element: <VideoComp /> },
            { path: 'continuation',  element: <ConComp /> },
        ]
       
        
    }
])