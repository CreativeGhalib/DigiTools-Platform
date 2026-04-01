import React from "react";
import Banner from "../../components/homepage/Banner";
import Stats from "../../components/homepage/Stats";
import PremiumTools from "../../components/homepage/PremiumTools";
import Steps from "../../components/homepage/Steps";
import Pricing from "../../components/homepage/Pricing";
import CallToAction from "../../components/homepage/CallToAction";
import Footer from "../../components/shared/footer/Footer";

const Homepage = () => {
  return (
    <div className="bg-white">
      <Banner />
      <Stats />
      <div id="features">
        <PremiumTools />
      </div>
      <Steps />
      <div id="pricing">
        <Pricing />
      </div>
      <CallToAction />
      <div id="faq">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
