import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./assets/navbar/navbar";
import Hero from "./assets/hero/hero";
import Arrivals from "./assets/arrivals/arrivals";
import Flash from "./assets/flash/flash";
import Categories from "./assets/categories/categories";
import Action from "./assets/cta/Action";
import TrustedPartners from "./assets/partners/partners";
import Shopping from "./assets/shopping/shopping";
import Footer from "./assets/footer/footer";

import "./App.css";

function Home() {
  return (
    <>
      <Hero />
      <Arrivals />
      <Flash />
      <Categories />
      <Action />
      <TrustedPartners />
      <Footer />
    </>
  );
}

function App() {
  const [bagCount, setBagCount] = useState(0);

  return (
    <>
      <Navbar bagCount={bagCount} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={
            <Shopping
              bagCount={bagCount}
              onAddToBag={() => setBagCount((c) => c + 1)}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;