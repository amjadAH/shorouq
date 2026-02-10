import imgImage4 from "figma:asset/bee77b1c844fea258503115f2ec9ff5a3e2053b5.png";
import imgImage5 from "figma:asset/df11daef638bd2bd82d7a3de56bbaaabb5bbaa94.png";
import imgImage6 from "figma:asset/1f2ddfa5ae54bc72f89f83dce6b8d58d01fcf688.png";
import imgImage7 from "figma:asset/a8942a5e271f283503cedc58d9d9ece3ce3d27e7.png";
import imgImage8 from "figma:asset/24c9e244dc4c2966cfb489571226f13cbf459d06.png";
import imgImage9 from "figma:asset/628cac368cf97362d5f7e8207b270b85ad48070d.png";
import imgImage10 from "figma:asset/06f71265292372d0c5d7850322e9b6429f2dfffa.png";

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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">Usability Testing</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[268px] ml-0 mt-0 relative row-1 w-[477px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.12%] left-[0.21%] max-w-none top-[0.06%] w-full" src={imgImage4} />
        </div>
      </div>
      <div className="col-1 h-[268px] ml-[500.5px] mt-0 relative row-1 w-[477px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.12%] left-[-0.1%] max-w-none top-[0.06%] w-full" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading1 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">Moderated sessions to observe real users completing a booking task from landing to confirmation.</p>
        <Group />
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
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">Heuristic Evaluation</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[268px] ml-0 mt-0 relative row-1 w-[477px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="col-1 h-[268px] ml-[500.5px] mt-0 relative row-1 w-[477px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading2 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">UX audit based on Nielsen's principles to identify structural and communication issues.</p>
        <Group1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[976px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">Competitor Benchmarking</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[268px] ml-0 mt-0 relative row-1 w-[477px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="col-1 h-[268px] ml-[500.5px] mt-0 relative row-1 w-[477px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading3 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">Analyzed booking flows from similar coworking / marketplace platforms to identify best practices in:</p>
        <Group2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[976px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#d0d0d0] text-[20px] top-0 tracking-[-0.4492px]">Behavioral Data (Hotjar)</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 h-[268px] ml-0 mt-0 relative row-1 w-[477px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[976px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading4 />
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#b5b5b5] text-[18px] tracking-[-0.4395px]">{`Reviewed heatmaps & session recordings to validate friction points.`}</p>
        <Group3 />
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
      <Container4 />
      <Container5 />
    </div>
  );
}
