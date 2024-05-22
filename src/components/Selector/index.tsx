interface SelectorProps {
  text: string;
  onClick: () => void;
  isSelected: boolean;
  containerStyle?: string;
}

export default function Selector(props: SelectorProps) {
  return (
    <div
      onClick={props.onClick}
      className={`flex flex-row justify-center items-center bg-neutral-150 py-2 px-6 border-neutral-300 border-[1px] rounded-base cursor-pointer hover:bg-neutral-300 hover:border-neutral-150 ${props.isSelected
        ? "bg-primary-600 border-primary-900 hover:bg-primary-600 hover:border-primary-900"
        : ""
        } ${props.containerStyle}`}
    >
      <p>{props.text}</p>
    </div>
  );
}
