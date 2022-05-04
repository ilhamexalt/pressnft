import React from "react";
import Button from "../Button";

export default function index() {
  return (
    <div className="flex py-4 items-center justify-between max-w-7xl mx-auto">
      <span className="text-white font-body font-bold text-3xl leading-6">
        PRESSNFT
      </span>
      <div className="gap-x-12 uppercase flex items-center">
        <div className="relative">
          <a className="text-custom-left cursor-pointer font-body font-normal text-sm leading-6">
            home
          </a>
          <div
            className="bg-custom-left h-2 w-2 rounded-full absolute"
            style={{ left: 14 }}
          ></div>
        </div>
        <div>
          <a className="text-white cursor-pointer font-body font-normal text-sm leading-6">
            marketplace
          </a>
        </div>
        <div>
          <a className="text-white cursor-pointer font-body font-normal text-sm leading-6">
            Resources
          </a>
        </div>
        <div>
          <a className="text-white cursor-pointer font-body font-normal text-sm leading-6">
            stat
          </a>
        </div>
      </div>
      <Button title="GO TO APP" />
    </div>
  );
}
