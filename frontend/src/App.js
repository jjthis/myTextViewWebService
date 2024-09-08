import MainPage from './pages/mainPage';
import TextListPage from './pages/textListPage';
import TextViewPage from './pages/textViewPage';
import MenuAlwaysLeftTop from './components/menuAlwaysLeftTop';
import MenuView from './components/menuView';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {isSlideBarOpened} from './utils/contextList';
import React, { useState } from "react";

function App() {
  const [isOpened, setOpened] = useState(false);

  const openState = {
    state: isOpened,
    actions: setOpened,
  };

  
  return (
    <BrowserRouter>
        <div className="App">
          <isSlideBarOpened.Provider value={openState}>
            <MenuAlwaysLeftTop/>
            <MenuView/>
          </isSlideBarOpened.Provider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/TextList" element={<TextListPage />} />
            <Route path="/TextView/:id" element={<TextViewPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}


export default App;