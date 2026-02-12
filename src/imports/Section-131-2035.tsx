import imgImage5 from "figma:asset/4db238df51342273628921e5c1bcaa71043705f9.png";
import imgImage6 from "figma:asset/45bbd0a32390d8917c3727a15bf98c756d171308.png";
import imgImage7 from "figma:asset/dbc48099832d5e1f498c35a84d285b78c2a2261c.png";
import imgImage9 from "figma:asset/159ab469d0fc929da82ce14abd1741a7db5f7c73.png";
import imgImage10 from "figma:asset/c7b9a1b6d0099eee72808f7f5d138ac94aaa1194.png";

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1033px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#b5b5b5] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Screens are shown in Arabic as the product serves a local market. Design decisions focus on hierarchy, flow, and system feedback.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,159,122,0.03)] content-stretch flex flex-col h-[74px] items-start pl-[28px] pr-[4px] py-[24px] relative rounded-[10px] shrink-0 w-[1085px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ff9f7a] border-l-4 border-r-4 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1085px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[36px] min-h-px min-w-px not-italic relative text-[#f8f8f2] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">Mobile Experience</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1085px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#a0a0a0] text-[18px] top-0 tracking-[-0.4395px]">Designed for fast, on-the-go interactions — making referral tracking and sharing intuitive, transparent, and action-driven.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[1085px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[340.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[327px] whitespace-pre-wrap">{`Referral program surfaced directly on the home screen with a clear value proposition. `}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[340.328px]" data-name="Container">
      <div className="aspect-[360/640] relative shrink-0 w-full" data-name="image 5">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[340.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
          <p className="mb-0">Clear explanation of incentive logic and activation</p>
          <p>{` dependency.`}</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[340.336px]" data-name="Container">
      <div className="aspect-[360/640] relative shrink-0 w-full" data-name="image 6">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[340.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[306px] whitespace-pre-wrap">Motivational empty state with clear CTA</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[340.336px]" data-name="Container">
      <div className="aspect-[360/640] relative shrink-0 w-full" data-name="image 7">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[41px] relative shrink-0 w-[340px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">
          <p className="mb-0">{`Separated earned vs. used balance for clarity with `}</p>
          <p>added status visibility (Pending / Activated)</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[340.336px]" data-name="Container">
      <div className="aspect-[360/640] relative shrink-0 w-full" data-name="image 9">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[340.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px]">Optimized sharing for frictionless distribution</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[340.336px]" data-name="Container">
      <div className="aspect-[360/640] relative shrink-0 w-full" data-name="image 10">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <Paragraph6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[32px] items-start relative w-full">
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pt-[49px] relative shrink-0 w-[1085px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,159,122,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container2 />
      <Container3 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[81px] px-[24px] relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(255,159,122,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container />
      <Container1 />
    </div>
  );
}