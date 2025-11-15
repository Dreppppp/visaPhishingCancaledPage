import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="
          peer
          appearance-none
          w-5 h-5 
          border-2 
          border-[#1434cb]
          rounded 
          transition
          checked:bg-[#1434cb]
          checked:border-[#1434cb]
        "
      />
      <svg
        className="
          absolute 
          left-0 top-0 
          w-5 h-5 p-1 
          text-white 
          opacity-0 
          peer-checked:opacity-100 
          transition-opacity
        "
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    </label>
  );
}
