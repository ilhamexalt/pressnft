import React from "react";

export default function index({ title }) {
  return (
    <button className="py-2 px-6 text-white rounded-sm bg-gradient-to-r from-custom-left to-custom-right font-body font-semibold text-base">
      {title}
    </button>
  );
}
