import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Destination from "../Components/Destination/Destination";
import Crew from "../Components/Crew/Crew";
import Technology from "../Components/Technology/Technology";
import Moon from "../Components/Moon/Moon";
import Mars from "../Components/Mars/Mars";
import Europa from "../Components/Europa/Europa";
import Titan from "../Components/Titan/Titan";
import Crew1 from "../Components/Crew1/Crew1";
import Crew2 from "../Components/Crew2/Crew2";
import Crew3 from "../Components/Crew3/Crew3";
import Crew4 from "../Components/Crew4/Crew4";
import Tech1 from "../Components/Tech1/Tech1";
import Tech2 from "../Components/Tech2/Tech2";
import Tech3 from "../Components/Tech3/Tech3";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/destination",
        element: <Destination />,
        children: [
            {
               path: "/destination",
               element: <Moon />
            },
            {
                path: "/destination/mars",
                element: <Mars />
            },
            {
                path: "/destination/europa",
                element: <Europa />
            },
            {
                path: "/destination/titan",
                element: <Titan />
            }
        ]
    },
    {
        path: "/crew",
        element: <Crew />,
        children: [
            {
                path: "/crew",
                element: <Crew1 />
            },
            {
                path: "/crew/crew2",
                element: <Crew2 />
            },
            {
                path: "/crew/crew3",
                element: <Crew3 />
            },
            {
                path: "/crew/crew4",
                element: <Crew4 />
            }
        ]
    },
    {
        path: "/technology",
        element: <Technology />,
        children: [
            {
                path: "/technology",
                element: <Tech1 />
            },
            {
                path: "/technology/tech2",
                element: <Tech2 />
            },
            {
                path: "/technology/tech3",
                element: <Tech3 />
            }
        ]
    }
])