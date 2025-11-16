import { VisaLogoIcon } from "@/assets/icons";

export default function canceledpage() {
  return (
    <div>
      <div className="w-full h-[50px] relative flex justify-center items-centr shadow-[0_4px_6px_rgba(0,0,0,0.2)] overflow-hidden z-1">
        <div className="absolute top-[-45px] w-[200px] h-[145px]">
          <VisaLogoIcon/>
        </div>
      </div>
      <div>type your card munber</div>
    </div>
  );
}
