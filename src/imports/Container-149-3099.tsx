import imgImage4 from "figma:asset/9346e003feb069bd9465242534369fe09c2d20d7.png";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-[976px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">User Flow (Redesigned)</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[414.617px] ml-0 mt-0 relative row-1 w-[476.992px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[976px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#808080] text-[14px] top-[0.5px] tracking-[-0.1504px]">Optimized end-to-end flow reducing friction and confusion</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">Installment selection redesigned for clearer decision-making</p>
        <Group />
        <Paragraph />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}
