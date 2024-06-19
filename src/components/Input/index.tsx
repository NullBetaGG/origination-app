interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  subtitle?: string;
  children?: React.ReactNode;
  containerStyle?: string;
  inputStyle?: string;
  componentStyle?: string;
}

export default function Input({
  label,
  children,
  containerStyle,
  subtitle,
  inputStyle,
  componentStyle,
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col ${componentStyle}`}>
      {(label || subtitle) && (
        <div className="flex items-center text-neutral-300 justify-between mb-1">
          {label && <p className="font-medium">{label}</p>}
          {(subtitle || props.required) && (
            <p className="text-[0.7rem] text-neutral-300">
              {props.required ? "Obrigatório" : subtitle}
            </p>
          )}
        </div>
      )}
      <div
        className={`border-[1px] h-[42px] border-neutral-900 rounded-base inputContainer overflow-hidden focus-within:border-primary-900 flex items-center w-full transition-colors duration-200 ${containerStyle} ${props.disabled ? "bg-neutral-200" : "bg-transparent"
          } `}
      >
        {children && <div className="pl-2">{children}</div>}

        <input
          className={`outline-none py-4 px-3 text-neutral-300 w-full bg-transparent ${inputStyle}`}
          {...props}
        />
      </div>
    </div>
  );
}
