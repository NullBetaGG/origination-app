import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
} from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  containerStyle?: React.HTMLAttributes<HTMLButtonElement> | string;
  imageSrc?: string;
}

export default function Button({
  title,
  children,
  containerStyle,
  loading = false,
  size = "medium",
  disabled = false,
  onClick,
  imageSrc,
  ...props
}: ButtonProps) {
  let style =
    "border-primary-500 text-primary-500 hover:border-primary-300 hover:text-primary-300 active:border-primary-700 active:text-primary-700";

  let sizeStyle =
    size === "small"
      ? "p-2 text-sm "
      : size === "large"
        ? "p-3 text-lg "
        : "p-[10px] text-base ";

  let disabledStyle = disabled
    ? "cursor-not-allowed !text-neutral-900 !border-neutral-300 !bg-transparent !hover:border-primary-300 hover:text-primary-300 "
    : "";
  return (
    <button
      onClick={(e) => {
        if (loading) return;
        if (onClick) onClick(e);
      }}
      className={`flex items-center justify-center rounded-base gap-3 transition-all text-center border-[1px] border-primary-900 hover:border-primary-800 active:border-button-1000 cursor-pointer ${style} ${sizeStyle} ${disabledStyle} ${containerStyle}`}
      {...props}
    >
      {loading ? "Carregando..." : (
        <>
          {imageSrc && <img src={imageSrc} className="w-[18px] h-[20px]" />}
          {title && <p>{title}</p>}
          {children}
        </>
      )}
    </button>
  );
}
