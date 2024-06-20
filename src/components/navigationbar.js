import React from 'react';
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataList from './components/DataList';

function App() {
  return (
    <BrowserRouter>
      {/* Umfasst die gesamte App, damit alle untergeordneten Komponenten Zugriff auf das Routing Paket haben */}
      <NavigationBar />
      <Content>
        <Routes>
          {/* Innerhalb der Routes befinden sich die einzelnen Routen bzw Seiten*/}
          <Route path="/" element={<HomePage/>} />
          <Route path="/Linux" element={<Linux/>} />
          <Route path="/Python" element={<Python/>} />
          <Route path="/AWS Cloud" element={<AWSCloud/>} />
          <Route path="/Javascript" element={<Javascript/>} />
          <Route path="/Scrum" element={<Scrum/>} />
          <Route path="/Netzwerk" element={<Netzwerk/>} />
          <Route path="/Web" element={<Web/>} />
          <Route path="/Datenbank" element={<Datenbank/>} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  );
}

export default App;