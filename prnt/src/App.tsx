import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Nav from "./Header/Nav";
import Footer from "./Footer/Footer";
import Section1 from "./Components/Home-page/Section1";
import Section2 from "./Components/Home-page/Section2";
import Section3 from "./Components/Home-page/Section3";
import Section4 from "./Components/Home-page/Section4";
import Section5 from "./Components/Home-page/Section5";
import About1 from "./Components/AbuoutUs/About1";
import Service1 from "./Components/Services/Service1";
import Sectors from "./Components/Sectors/Sectors";
import Contactus from "./Components/Contactus/Contactus";
import { Services01 } from "./Components/Services/Services01";
import { CounterProvider } from "./context/CounterContext";

function HomePage() {
  return (
    <div className="pt-[28px] bg-[#f2f2f2]  overflow-hidden">
      <div className="px-[70px]">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <div className="px-[15px]">
        <Section5 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <div className="w-full px-[70px]  bg-[#f2f2f2]">
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CounterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about-us" element={<About1 />} />

            <Route path="/services" element={<Service1 />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/Contactus" element={<Contactus />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/contactus" element={<Contactus />} />

            <Route path="/service1" element={<Service1 />} />
            <Route path="/section5" element={<Section5 />} />
            {/* Add other routes as needed */}
          </Route>
        </Routes>
      </Router>
    </CounterProvider>
  );
}

export default App;
