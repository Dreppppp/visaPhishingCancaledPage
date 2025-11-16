import { useRouter } from "next/navigation";

export default function ConfirmingPopup() {
  const router = useRouter()
  const cancelBtnHandler = (): void => {
    router.push("/canceledpage");
  }
   const confirmBtnHandler = (): void => {
    router.push("/canceledpage");
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[1000]">
      <div className="w-[300px] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-[#1A1F71]">
          Подтверждение операции
        </h2>
        <p className="text-gray-700 text-[16px]">
          Вы уверены, что хотите списать{" "}
          <span className="font-medium text-[#1434cb]">30 000 ₽</span> с вашей
          карты?
        </p>
        <div className="flex justify-between mt-3">
          <button
            className="w-[120px] py-2 rounded-lg border border-[#1A1F71] text-[#1A1F71] text-sm font-medium hover:bg-[#E1E6F9] transition" onClick={confirmBtnHandler}
          >
            Подтвердить
          </button>
          <button className="w-[120px]  py-2 rounded-lg bg-[#1A1F71] text-white text-sm font-medium hover:bg-[#142688] transition" onClick={cancelBtnHandler}>
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
}
