import imgImage4 from "figma:asset/0d0b3303720af82f4783d6b099b47a48cec16b36.png";
import imgImage5 from "figma:asset/2d760346ade6db90ca647422279540e6835a1e65.png";

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[976px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[#f8f8f2] text-[24px] top-0 tracking-[0.0703px]">Research Strategy</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[976px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">Survey Research</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[414.617px] ml-0 mt-0 relative row-1 w-[476.992px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[376.07%] left-[-0.07%] max-w-none top-[-11.24%] w-full" src={imgImage4} />
        </div>
      </div>
      <div className="col-1 h-[414.617px] ml-[499.01px] mt-0 relative row-1 w-[476.992px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[376.07%] left-0 max-w-none top-[-179.99%] w-full" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[976px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#808080] text-[14px] top-[0.5px] tracking-[-0.1504px]">Survey structure outlining goals, target users, key questions, and distribution plan.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">A structured survey was created to understand user motivations, expectations, and satisfaction with the referral program.</p>
        <Group />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[976px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">User Calls</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[414.617px] ml-0 mt-0 relative row-1 w-[476.992px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[207.96%] left-[-0.03%] max-w-none top-[-12.62%] w-full" src={imgImage5} />
        </div>
      </div>
      <div className="col-1 h-[414.617px] ml-[499.01px] mt-0 relative row-1 w-[476.992px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[976px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#808080] text-[14px] top-[0.5px] tracking-[-0.1504px]">Interview framework highlighting research goals, key questions, tools, and targeted participants.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading2 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">Qualitative calls were conducted to explore deeper motivations, challenges, and behavioral patterns around referrals.</p>
        <Group1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container4 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pt-[32px] relative size-full" data-name="Container">
      <Heading />
      <Container1 />
      <Container3 />
    </div>
  );
}