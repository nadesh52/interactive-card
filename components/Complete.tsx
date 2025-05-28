"use client";
import { completeSub } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Complete() {
  const router = useRouter();

  return (
    <div className="desktop:px-0 desktop:my-0 mx-auto mt-[94px] mb-[45px] flex h-full w-full max-w-[381px] items-center">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"assets/images/icon-complete.svg"}
            width={80}
            height={80}
            alt="complete"
          />
          <div className="text-center">
            <h2 className="text-secondary-300 mt-[40px] mb-[32px] text-[30px] leading-[38px]">
              THANK YOU!
            </h2>
            <p className="text-secondary-200">{completeSub}</p>
          </div>
          <button onClick={() => router.back()} className="btn mt-[52px]">
            Continue
          </button>
        </div>
      </section>
    </div>
  );
}
