import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {HomeLayout} from "./layout/HomeLayout";
import React from "react";
import {Drug} from "./page/Drug";
import {Box} from "@chakra-ui/react";
import {Hs} from "./page/hs/Hs";
import {HsAdd} from "./page/hs/HsAdd";
import {HsEdit} from "./page/hs/HsEdit";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<HomeLayout/>}>
            <Route path='hospital' element={<Hs/>}/>
            <Route path="hospitalAdd" element={<HsAdd/>}/>
            <Route path="hospitalEdit/:id" element={<HsEdit/>}/>
            <Route path="nutraceutical" element={<Drug/>}/>
        </Route>
    )
);


function App() {


    return (
        <Box>

            <RouterProvider router={router}/>


        </Box>
    );
}


export default App;
