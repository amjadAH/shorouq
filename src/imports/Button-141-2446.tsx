function HomePage() {
  return (
    <div className="relative w-full" data-name="HomePage">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#ff9f7a] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">Know more</p>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(255,159,122,0.08)] relative rounded-[14px] inline-block" data-name="Button">
      <div className="flex flex-col items-center justify-center px-[33px] py-[17px] relative rounded-[inherit]">
        <HomePage />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,159,122,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}