"use client";
import { useHolder } from "@/contexts/HolderContext";
import { validateTextInput } from "@/utils";
import React, { useState } from "react";

const initForm = {
  holder: undefined,
  number: undefined,
  month: undefined,
  year: undefined,
  cvc: undefined,
};
const initError = {
  holder: null,
  number: null,
  month: null,
  year: null,
  cvc: null,
};

// const formatted = form.number.replace(/(\d{4})(?=\d)/g, "$1  ").trim();
export default function Form({ onSubmitSuccess }:any) {
  const [form, setForm] = useState<any>(initForm);
  const [isError, setIsError] = useState<any>(initError);
  const { setHolder } = useHolder();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { holder, number, month, year, cvc } = form;

    const errors = {
      holder: validateTextInput(holder, "holder"),
      number: validateTextInput(number, "number"),
      month: validateTextInput(month, "month"),
      year: validateTextInput(year, "year"),
      cvc: validateTextInput(cvc, "cvc"),
    };
    setIsError(errors);

    // If no errors (all fields return false), do something
    const hasError = Object.values(errors).some((error) => error !== false);

    if (!hasError) {
      onSubmitSuccess()
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setHolder((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="desktop:px-0 desktop:max-w-[381px] desktop:my-0 mx-auto mt-[94px] mb-[45px] flex h-full w-full items-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-[28px] flex flex-col gap-[24px]">
          <label>
            <p className="label-title">CARDHOLDER NAME</p>
            <input
              type="text"
              name="holder"
              onFocus={() =>
                setIsError((prev: any) => ({ ...prev, holder: false }))
              }
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
              className={`${isError.holder && "ring-primary-red"} input w-full`}
            />
            <p className={`${!isError.holder && "hidden"} label-error`}>
              {isError.holder}
            </p>
          </label>
          <label>
            <p className="label-title">CARD NUMBER</p>
            <input
              type="text"
              name="number"
              onFocus={() =>
                setIsError((prev: any) => ({ ...prev, number: false }))
              }
              maxLength={16}
              onChange={handleChange}
              placeholder="e.g. 1234 5678 9123 0000"
              className={`${isError.number && "ring-primary-red"} input w-full`}
            />
            <p className={`${!isError.number && "hidden"} label-error`}>
              {isError.number}
            </p>
          </label>
          <div className="desktop:gap-[16px] flex flex-row gap-[12px]">
            <div>
              <p className="label-title">EXP. DATE (MM/YY)</p>
              <div className="desktop:gap-[10px] flex flex-row gap-[8px]">
                <label>
                  <input
                    type="text"
                    name="month"
                    maxLength={2}
                    onFocus={() =>
                      setIsError((prev: any) => ({ ...prev, month: false }))
                    }
                    onChange={handleChange}
                    placeholder="MM"
                    className={`${isError.month && "ring-primary-red"} input desktop:w-[80px] w-[72px]`}
                  />
                  <p
                    className={`${!isError.month && "hidden"} label-error text-nowrap`}
                  >
                    {isError.month}
                  </p>
                </label>
                <label>
                  <input
                    type="text"
                    name="year"
                    maxLength={2}
                    onFocus={() =>
                      setIsError((prev: any) => ({ ...prev, year: false }))
                    }
                    onChange={handleChange}
                    placeholder="YY"
                    className={`${isError.year && "ring-primary-red"} input desktop:w-[80px] w-[72px]`}
                  />
                  <p
                    className={`${!isError.year && "hidden"} label-error text-nowrap`}
                  >
                    {isError.year}
                  </p>
                </label>
              </div>
            </div>

            <label>
              <p className="label-title">CVC</p>
              <input
                type="text"
                name="cvc"
                onFocus={() =>
                  setIsError((prev: any) => ({ ...prev, cvc: false }))
                }
                maxLength={3}
                onChange={handleChange}
                placeholder="e.g. 123"
                className={`${isError.cvc && "ring-primary-red"} input w-full`}
              />
              <p className={`${!isError.cvc && "hidden"} label-error`}>
                {isError.cvc}
              </p>
            </label>
          </div>
        </div>
        <button type="submit" className="btn">
          Confirm
        </button>
      </form>
    </div>
  );
}
