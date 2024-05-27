
export default function Header() {
  return (
    <header
      className={`flex w-full h-20 justify-between bg-neutral-200 overflow-hidden border-b-[1px] border-neutral-200`}
    >
      <img src="/logos/decisor_icon.svg" className="h-9 ml-6 mt-5" />
      <p className="mr-5 mt-6 font-extralight text-2xl">Originação</p>
    </header>
  );
}