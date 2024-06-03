export default function Header() {

  return (
    <header
      className={`flex w-full h-20 justify-between bg-neutral-700 overflow-hidden`}
    >
      <img src="/logos/decisor_icon.svg" className="h-9 ml-6 mt-5" />
      <p className="mr-5 mt-6 text-neutral-300 font-normal text-2xl">Originação</p>
    </header>
  );
}