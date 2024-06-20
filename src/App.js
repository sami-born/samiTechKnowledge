import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './pages/homepage';


function App() {
  return (
    <BrowserRouter>
      {/* Umfasst die gesamte App, damit alle untergeordneten Komponenten Zugriff auf das Routing Paket haben */}
      
        <Routes>
          {/* Innerhalb der Routes befinden sich die einzelnen Routen bzw Seiten*/}
          <Route path="/" element={<Homepage/>} />
          <Route path="/" element={<Homepage/>} />

        </Routes>
     
     
    </BrowserRouter>
  );
}

export default App;