// import { useState } from 'react-'
// '
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./screen/Home.jsx";
import EditorPage from "./screen/EditorPage.jsx";
import View from "./screen/View.jsx";
import Detail from "./screen/Detail.jsx";
import EditQ from "./screen/EditQ.jsx";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path={"/view/list"} element={<View></View>}></Route>
            <Route path={"/view/:id"} element={<Detail></Detail>}></Route>
            <Route path={`/comment/update`} element={<EditQ/>}></Route>
            <Route path={"/edit"} element={<EditorPage/>}></Route>
          <Route path={"/"} element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
