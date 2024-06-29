
import HeroSection from "@/components/heroSection";
import KeyProblemsSolved from "@/components/keyProblemsSolved";
import NavBar from "@/components/navBar";


import React from "react";

function page() {
  return (
    <div>
      <NavBar>
        <HeroSection />
        <KeyProblemsSolved />
      </NavBar>
    </div>
  );
}

export default page;
