"use client";
import HolderProvider from "@/contexts/HolderContext";
import Image from "next/image";
import React, { useState } from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import Form from "./Form";
import Complete from "./Complete";

export default function Wrapper() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <HolderProvider>
      <div className="desktop:flex-row flex flex-col">
        <Image
          src={"assets/images/bg-main-mobile.png"}
          height={240}
          width={375}
          alt="mobile-head"
          className="desktop:hidden pointer-events-none"
        />
        <Image
          src={"assets/images/bg-main-desktop.png"}
          height={900}
          width={483}
          alt="desktop-head"
          className="desktop:block pointer-events-none hidden"
        />
        <CardFront />
        <CardBack />
        <div className="desktop:h-[900px] w-full px-[24px]">
          {!isSubmitted ? (
            <Form onSubmitSuccess={() => setIsSubmitted(true)} />
          ) : (
            <Complete />
          )}
        </div>
      </div>
    </HolderProvider>
  );
}
