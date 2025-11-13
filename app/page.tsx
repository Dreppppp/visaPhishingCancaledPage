"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import visaAnimation from "../assets/visaAnimation.json";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  let [isAnimationPasted, setIsAnimationPasted] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
    setTimeout(() => {
      setIsAnimationPasted(true);
    }, 2500);
  }, []);
  useEffect(() => {
    if (isAnimationPasted) {
      router.push("/infoPage");
    }
  }, [isAnimationPasted, router]);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex  flex-col justify-center items-center w-fit h-fit relative mt-[-90px]">
          <div className="">
            <Lottie
              lottieRef={lottieRef}
              animationData={visaAnimation}
              loop={false}
            />
          </div>
          <p className="text-[25px] text-black font-[500] absolute bottom-[30px] w-[223px]">
            Pay online with visa
          </p>
        </div>
      </div>
    </>
  );
}
