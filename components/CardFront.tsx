"use client";
import { useHolder } from "@/contexts/HolderContext";
import Image from "next/image";
import React from "react";

export default function CardFront() {
  const { holder } = useHolder();

  const groups = holder?.number?.match(/.{1,4}/g) || [
    "0000",
    "0000",
    "0000",
    "0000",
  ];

  return (
    <div className="desktop:top-[186px] desktop:left-[164px] pointer-events-none absolute top-[126px] left-[16px] z-20">
      <div className="bg-card-front card">
        <div className="desktop:pt-[28px] desktop:pl-[32px] desktop:pr-[34px] pt-[18px] pr-[22px] pb-[20px] pl-[20px]">
          <div>
            <Image
              src={"assets/images/card-logo.svg"}
              width={84}
              height={47}
              alt="card-logo"
              className="desktop:w-[84px] w-[47px]"
            />
          </div>
          <div className="desktop:mt-[65px] mt-[42px] w-full text-white">
            <div className="desktop:text-[28px] desktop:leading-[36px] desktop:tracking-[2px] text-[20px] leading-[14px]">
              {groups.map((group: any, index: any) => (
                <span key={index} className="mr-2 inline-block">
                  {group}
                </span>
              ))}
            </div>
            <div className="desktop:text-[14px] desktop:leading-[18px] desktop:tracking-[1px] mt-[24px] flex flex-row items-center justify-between text-[10px] leading-[10px] tracking-[2px]">
              <div>{(holder?.holder || "Jane Appleseed").toUpperCase()}</div>
              <div>{`${holder.month ?? "00"}/${holder.year ?? "00"}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
