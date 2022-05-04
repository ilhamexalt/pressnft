import React from "react";
import Card from "../components/Card-Image";

export default function payment() {
  return (
    <div className="py-6" style={{ background: "#333333", opacity: "50%" }}>
      <div className="flex justify-around ml-16 max-w-4xl items-center">
        <p
          className="text-base font-body font-semibold"
          style={{ color: "#CECECE" }}
        >
          Our Partners
        </p>
        <div>
          <Card src="/gopay.png" width="50" height="50" />
          <span className="text-lg font-body font-semibold text-white">
            gopay
          </span>
        </div>
        <div>
          <Card src="/dana.png" width="170" height="50" />
        </div>
        <div className="">
          <Card src="/mastercard.png" width="85" height="50" />
          <span className="text-sm font-body font-semibold text-white">
            mastercard
          </span>
        </div>
      </div>
    </div>
  );
}
