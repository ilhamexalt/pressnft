import React from "react";
import Image from "next/image";

export default function index({ src, width, height, alt }) {
  return (
    <div>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="object-center"
      />
    </div>
  );
}
