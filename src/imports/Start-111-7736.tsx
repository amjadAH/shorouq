import svgPaths from "./svg-qszprd2kbt";

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-center not-italic relative shrink-0 text-right" data-name="body">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none relative shrink-0 text-[#242938] text-[20px]" dir="auto">
        أدخل رقم بطاقة الرقم القومي للعميل
      </p>
      <p className="font-['Tajawal:Medium',sans-serif] leading-[1.5] relative shrink-0 text-[#5e6167] text-[14px]" dir="auto">
        ابحث باستخدام الرقم القومي المتواجد على بطاقة العميل الشخصية
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[28.24%_14.55%_27.24%_15.29%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.631 37.8426">
        <g id="Group">
          <path d={svgPaths.p315d5280} fill="var(--fill-0, #FFC64A)" id="Vector" />
          <path d={svgPaths.p15e60280} fill="var(--fill-0, #FFC64A)" id="Vector_2" />
          <path d={svgPaths.p315d5280} fill="var(--fill-0, #DFE9F6)" id="Vector_3" />
          <path d={svgPaths.p332de400} fill="var(--fill-0, #FFC64A)" id="Vector_4" />
          <path d={svgPaths.p9a09200} fill="var(--fill-0, #3EBCA5)" id="Vector_5" />
          <path d={svgPaths.p7131a00} fill="var(--fill-0, #263E8E)" id="Vector_6" />
          <path d={svgPaths.p189cbf80} fill="var(--fill-0, #263E8E)" id="Vector_7" />
          <path d={svgPaths.p3f364df2} fill="var(--fill-0, #263E8E)" id="Vector_8" />
          <path d={svgPaths.p3b253340} fill="var(--fill-0, #D38528)" id="Vector_9" />
          <g id="Group_2">
            <path d={svgPaths.p2c1fad80} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p49f0000} fill="var(--fill-0, #263E8E)" id="Vector_11" />
            <g id="Mask group">
              <mask height="16" id="mask0_111_4664" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="13" x="4" y="4">
                <path d={svgPaths.p5c54b00} fill="var(--fill-0, white)" id="Vector_12" />
              </mask>
              <g mask="url(#mask0_111_4664)">
                <path d={svgPaths.p3dccac20} fill="var(--fill-0, #263E8E)" id="Vector_13" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function NationalId() {
  return (
    <div className="bg-[#f2f5ff] overflow-clip relative rounded-[75px] shrink-0 size-[85px]" data-name="National ID">
      <Group />
    </div>
  );
}

function FullBody() {
  return (
    <div className="content-stretch flex gap-[22px] items-center justify-end relative shrink-0" data-name="full body">
      <Body />
      <NationalId />
    </div>
  );
}

function FullBodyAndLin() {
  return (
    <div className="content-stretch flex flex-col h-[98px] items-center justify-between relative shrink-0 w-[513px]" data-name="full body and lin">
      <FullBody />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 513 1">
                <line id="Line 12" stroke="var(--stroke-0, #D5D8E4)" x2="513" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="base">
      <div aria-hidden="true" className="absolute border border-[#b3b5ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Tajawal:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#6b6f79] text-[16px] text-right whitespace-pre-wrap" dir="auto">
            14 رقم من اليسار إلى اليمين
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[328px]" data-name="Input field">
      <Base />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#1e3e8f] content-stretch flex h-[54px] items-center justify-center px-[16px] py-[18px] relative rounded-[4px] shrink-0 w-[328px]" data-name="Buttons">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-center text-white" dir="auto">
        بحث
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <InputField />
      <Buttons />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[48px] h-[422px] items-center justify-center left-[568px] px-[48px] rounded-[16px] top-[329px] w-[784px]">
      <div aria-hidden="true" className="absolute border border-[#dfe0e2] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <FullBodyAndLin />
      <Frame />
    </div>
  );
}

function KhaznasLogo() {
  return (
    <div className="absolute h-[59.169px] left-[1615px] overflow-clip top-[33px] w-[144.773px]" data-name="khazna\'s logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144.775 59.1696">
        <g id="Horizontal">
          <path d={svgPaths.p61caac0} fill="var(--fill-0, #22398C)" id="Path 1" />
          <path d={svgPaths.p312e7500} fill="var(--fill-0, #22398C)" id="Path 2" />
          <path d={svgPaths.p897fe60} fill="var(--fill-0, #22398C)" id="Path 3" />
          <path d={svgPaths.p266af5a8} fill="var(--fill-0, #22398C)" id="Path 4" />
          <path d={svgPaths.p138219c0} fill="var(--fill-0, #22398C)" id="Path 5" />
          <path d={svgPaths.p2ecee00} fill="var(--fill-0, #22398C)" id="Path 6" />
          <path d={svgPaths.p321b680} fill="var(--fill-0, #22398C)" id="Path 7" />
          <path d={svgPaths.p22ae780} fill="var(--fill-0, #22398C)" id="Path 8" />
          <path d={svgPaths.p29c7000} fill="var(--fill-0, #22398C)" id="Path 9" />
          <path d={svgPaths.p27a6a380} fill="var(--fill-0, #22398C)" id="Path 10" />
          <path d={svgPaths.p2973e400} fill="var(--fill-0, #22398C)" id="Path 11" />
          <path d={svgPaths.p12d1bcf0} fill="var(--fill-0, #22398C)" id="Path 12" />
          <path d={svgPaths.p2101fe00} fill="var(--fill-0, #22398C)" id="Path 13" />
          <path d={svgPaths.p3da38400} fill="var(--fill-0, #22398C)" id="Path 14" />
          <path d={svgPaths.pc6f2400} fill="var(--fill-0, #22398C)" id="Path 15" />
          <path d={svgPaths.p7ab7400} fill="var(--fill-0, #22398C)" id="Path 16" />
          <path d={svgPaths.p16d81500} fill="var(--fill-0, #22398C)" id="Path 17" />
          <path d={svgPaths.p101adc00} fill="var(--fill-0, #22398C)" id="Path 18" />
          <path d={svgPaths.pff4ad40} fill="var(--fill-0, #22398C)" id="Path 19" />
        </g>
      </svg>
    </div>
  );
}

function Lang() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="lang1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p14c3a500} fill="var(--fill-0, #FBFBFB)" fillRule="evenodd" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p262b1400} fill="var(--fill-0, #E92B2B)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p73da900} fill="var(--fill-0, #1D1D1D)" fillRule="evenodd" id="Vector_3" />
          </g>
          <path d={svgPaths.pc09c400} fill="var(--fill-0, #FFE70E)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Language1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[41px]" data-name="language">
      <Lang />
      <p className="font-['Tajawal:ExtraBold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-black" dir="auto">
        ع
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic_chevrondown">
          <path d="M6 9L12 15L18 9" id="Icon" stroke="var(--stroke-0, #6B6F79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Language() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="language">
      <div aria-hidden="true" className="absolute border border-[#b3b5ba] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[10px] relative w-full">
          <Language1 />
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function DropList() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[248px] top-[49px] w-[112px]" data-name="Drop list">
      <Language />
    </div>
  );
}

function DotsVertical() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="dots-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dots-vertical">
          <g id="Icon">
            <path d={svgPaths.p3d96f400} stroke="var(--stroke-0, #3366FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1a816e00} stroke="var(--stroke-0, #3366FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1116500} stroke="var(--stroke-0, #3366FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f2f5ff] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative rounded-[100px]">
      <DotsVertical />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative">
      <Frame2 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex items-start left-[160px] size-[40px] top-[51px]" data-name="Component 2">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[1071px] h-[125px] items-center justify-end left-0 pl-[160px] pr-[32px] pt-[32px] top-0 w-[1920px]">
      <div aria-hidden="true" className="absolute border-[#dfe0e2] border-b border-solid inset-0 pointer-events-none" />
      <KhaznasLogo />
      <DropList />
      <div className="absolute flex h-[24px] items-center justify-center left-[224px] top-[59px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 15" stroke="var(--stroke-0, #DFE0E2)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Component />
    </div>
  );
}

export default function Start() {
  return (
    <div className="bg-white relative size-full" data-name="Start">
      <Frame1 />
      <Frame4 />
    </div>
  );
}