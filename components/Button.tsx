import { MouseEventHandler } from "react";

export default function Button({
  children,
  onClick,
  type,
}: {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className="select-none bg-secondary-500 no-underline bg-opacity-30 hover:bg-opacity-40 py-1 px-2 rounded-full text-secondary-700 dark:text-secondary-400 font-bold border-secondary-400 border-opacity-0 border-2 hover:border-opacity-60 duration-100 active:scale-95"
    >
      {children}
    </button>
  );
}
