import imgImage4 from "figma:asset/0e3be17f5a02c339e76320f4aea082aaffbc6cce.png";
import imgImage5 from "figma:asset/e70470eba883561e91ff3451e69c2cadb19bd9ee.png";
import imgImage6 from "figma:asset/25030bc5c31a77b8e6e5eb921c6854192590e491.png";
import imgImage7 from "figma:asset/43d9e53e997ed454f3e02e33e4a745cc94c2e5c8.png";
import imgImage8 from "figma:asset/cf3be36e901b93fcb07acea7aecbe3405056e84b.png";

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1085px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[36px] min-h-px min-w-px not-italic relative text-[#f8f8f2] text-[30px] tracking-[0.3955px] whitespace-pre-wrap">Desktop Experience</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1085px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#a0a0a0] text-[18px] top-0 tracking-[-0.4395px]">Progression through the registration flow, highlighting states: empty, filled, locked, error, success.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[76px] relative shrink-0 w-[1085px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px]">Entry point focusing on ID search to begin registration.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <div className="h-[293px] relative shrink-0 w-[520px]" data-name="image 4">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[480px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px]">Form with empty ID upload states, prompting courier to add documents.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <div className="h-[292px] relative shrink-0 w-[520px]" data-name="image 4">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px]">Validation error highlighting missing document uploads before progression.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <div className="h-[292px] relative shrink-0 w-[520px]" data-name="image 4">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px]">Complete form with uploaded ID documents, ready for submission.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <div className="h-[293px] relative shrink-0 w-[521px]" data-name="image 4">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage7} />
      </div>
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[20px] left-0 text-[#a0a0a0] text-[14px] top-[0.5px] tracking-[-0.1504px]">Confirmation dialog signaling successful registration completion.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <div className="h-[293px] relative shrink-0 w-[520px]" data-name="image 4">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <Paragraph5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[1051px] relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-between flex flex-wrap items-center justify-between relative size-full">
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[1085px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-start relative w-full">
        <Container2 />
        <Frame />
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
