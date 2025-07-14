import React from "react";
import { PricingComp } from "../single-pricing-card-1";

function Pricing() {
  return (
    <div className="text-white">
      <h2 className="font-extrabold text-6xl md:text-7xl text-left">Pricing</h2>
      <p className="text-left text-3xl font-bold leading-relaxed mt-2">
        Simple Pricing, No Surprises
      </p>
      <PricingComp />
    </div>
  );
}

export default Pricing;
