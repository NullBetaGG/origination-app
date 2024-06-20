export default function Header() {

  return (
    <header
      className={`flex w-full h-16 justify-between bg-neutral-700 overflow-hidden`}
    >
      <img src="/logos/decisor_icon.svg" className="h-9 ml-6 mt-4" />
      <p className="mr-5 mt-4 text-neutral-300 font-normal text-2xl">Originação</p>
    </header>
  );
}