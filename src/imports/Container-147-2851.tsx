import imgImage4 from "figma:asset/fe81acd9787e8cb849aeabf8d16c05b6c6f88010.png";
import imgImage5 from "figma:asset/2bc6bfe03aa20516f17fbe70e98a2c005bbfea03.png";
import imgImage6 from "figma:asset/3dd5f570940a6376f81c38aa5b67b081a59e6900.png";
import imgImage7 from "figma:asset/a7c15b855cf8c23b52d899b46dee7fa2d44da4b0.png";

function Heading() {
  return (
    <div className="relative shrink-0 w-[955px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic relative w-full">
        <p className="leading-[32px] relative shrink-0 text-[#f8f8f2] text-[24px] tracking-[0.0703px]">Research Strategy</p>
        <p className="leading-[29.25px] relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px] w-[955px] whitespace-pre-wrap">To better understand users’ motivations and pain points around early settlement, I combined qualitative research with competitor benchmarking and flow analysis.</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[976px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">User Calls</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[414.617px] ml-0 mt-0 relative row-1 w-[476.992px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[169.91%] left-0 max-w-none top-[-12.91%] w-full" src={imgImage4} />
        </div>
      </div>
      <div className="col-1 h-[414.617px] ml-[499.01px] mt-0 relative row-1 w-[476.992px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[976px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#808080] text-[14px] top-[0.5px] tracking-[-0.1504px]">Interview framework highlighting research goals, key questions, tools, and targeted participants.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] min-w-full not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px] w-[min-content] whitespace-pre-wrap">Conducted 10 qualitative calls with users who had previously requested early settlement offline, to understand motivations, confusion points, and trust barriers.</p>
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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">Competitor Analysis</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[414.617px] ml-0 mt-0 relative row-1 w-[476.992px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-3.73%] max-w-none top-0 w-[193.91%]" src={imgImage6} />
        </div>
      </div>
      <div className="col-1 h-[414.617px] ml-[499.01px] mt-0 relative row-1 w-[476.992px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-4.58%] max-w-none top-0 w-[267.29%]" src={imgImage7} />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[976px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#808080] text-[14px] top-[0.5px] tracking-[-0.1504px]">Breakdown of how competitors communicate settlement fees</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading2 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">Analyzed how other fintech apps communicate early repayment, fees transparency, and installment breakdown clarity.</p>
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