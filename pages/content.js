import React from "react";
import Button from "../components/Button";
import Card from "../components/Card-Image";
import Image from "next/image";

export default function content() {
  return (
    <div className="w-full mt-24">
      {/* Section Left */}
      <Button title="PRESSURENFT" />
      <div className="flex justify-between w-full">
        <div className="w-2/3">
          <span
            className="text-white font-body font-semibold flex items-center"
            style={{ fontSize: 70 }}
          >
            DISCOVER RARE{" "}
            <span className="flex ml-5">
              <Image
                alt="NFT 2"
                src="/2.jpeg"
                width={40}
                height={40}
                className="rounded-full"
              />
              <Image
                alt="NFT 3"
                src="/3.jpeg"
                width={40}
                height={40}
                className="rounded-full absolute"
              />
              <Image
                alt="NFT 1"
                src="/1.jpeg"
                width={40}
                height={40}
                className="rounded-full"
              />
            </span>
          </span>
          <h1
            className="text-white text-6xl font-body font-semibold"
            style={{ fontSize: 70 }}
          >
            NFTS COLLECTION
          </h1>
          <p
            className="mt-8 font-body text-base leading-7"
            style={{ color: "#CECECE" }}
          >
            Welcome the world of NFT Art, you can buy and sell art your <br />
            heart{"'"}s content and enjoy all the cool feature from us
          </p>
          <div className="mt-12">
            <span
              className="rounded-full py-1 px-1 text-white font-body font-normal text-base"
              style={{ background: "#F11616" }}
            >
              Let{"'"}
            </span>
            <span className="text-white font-body font-normal text-base ">
              s get started
            </span>
          </div>
          <div className="flex space-x-10 mt-14">
            <div>
              <span className="text-4xl leading-9 text-white font-body font-semibold">
                100K+
              </span>
              <p className="text-sm leading-3" style={{ color: "#CECECE" }}>
                Artwork
              </p>
            </div>
            <div>
              <span className="text-4xl text-white leading-9 font-body font-semibold">
                12K+
              </span>
              <p className="text-sm leading-3" style={{ color: "#CECECE" }}>
                Owners
              </p>
            </div>
            <div>
              <span className="text-4xl leading-9 text-white font-body font-semibold">
                806
              </span>
              <p className="text-sm leading-3" style={{ color: "#CECECE" }}>
                Artist
              </p>
            </div>
          </div>
          <p
            className="text-base leading-6 font-body font-semibold mt-10"
            style={{ color: "#CECECE" }}
          >
            Pressure NFT are a limited collection of unique ERC721 <br />
            standards tokens that bring utilities through <br />
            project shareholding.
          </p>
        </div>
        {/* End Section Left */}

        {/* Section Right */}
        <div
          className="bg-white absolute z-10 right-24"
          style={{ width: 400, height: 580 }}
        >
          <div className="relative">
            <Card src="/4.jpeg" width={450} height={500} alt="NFT 4" />
            <div
              className="flex justify-between mx-4 p-4 bg-gray-custom absolute bottom-4"
              style={{ width: 360, opacity: "80%" }}
            >
              <div>
                <p className="font-semibold font-body text-base text-white">
                  Start Bid
                </p>
                <p className="font-semibold font-body text-2xl text-white">
                  15,00 ETH
                </p>
              </div>
              <div>
                <p className="font-semibold font-body text-base text-white">
                  Remaining Time
                </p>
                <p className="font-semibold font-body text-2xl text-white text-center">
                  43 : 33 : 01
                </p>
              </div>
            </div>
          </div>
          <div className="mx-6 py-5">
            <h3
              className="text-base font-body font-semibold"
              style={{ color: "#C4C4C4" }}
            >
              Karafuru
            </h3>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-body font-semibold">Mosu #4265</h1>
              <span className="bg-black text-white font-body font-semibold text-base rounded-md px-3 py-2">
                Get it now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
