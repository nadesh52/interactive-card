"use client";
import { useHolder } from "@/contexts/HolderContext";
import React from "react";

export default function CardBack() {
  const { holder } = useHolder();
  return (
    <div className="desktop:left-[258px] desktop:right-0 desktop:top-[469px] pointer-events-none absolute top-[32px] right-[16px] z-10">
      <div className="bg-card-back card shadow-xl">
        <div className="px-[35px] py-[72px]">
          <div className="desktop:mt-[40px] desktop:mr-[20px]">
            <div className="flex items-center justify-end">
              <div className="desktop:text-[14px] desktop:leading-[18px] desktop:tracking-[13%] text-[10px] leading-[10px] text-white">
                {holder?.cvc || "000"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
