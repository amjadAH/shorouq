import svgPaths from "./svg-cqp260xg0e";
import imgIdUpload from "figma:asset/188de9eb0ae128fc9e11cd1879a08145619b33bf.png";
import imgIdUpload1 from "figma:asset/3a9ea2782c19251ff29c4742745e145b259ca94d.png";

function IcIdCard() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Ic_IDCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Ic_IDCard">
          <path clipRule="evenodd" d={svgPaths.p35166d80} fill="var(--fill-0, #242938)" fillRule="evenodd" id="Rectangle 1 (Stroke)" />
          <rect fill="var(--fill-0, #242938)" height="3" id="Rectangle 2" rx="0.5" stroke="var(--stroke-0, #242938)" width="3" x="5.5" y="8.5" />
          <path clipRule="evenodd" d={svgPaths.p25be4580} fill="var(--fill-0, #242938)" fillRule="evenodd" id="Line 8 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p1d5f9600} fill="var(--fill-0, #242938)" fillRule="evenodd" id="Line 10 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#242938] text-[20px] text-right" dir="auto">
        بيانات العميل الشخصية
      </p>
      <IcIdCard />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <Frame7 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 1">
                <line id="Line 12" stroke="var(--stroke-0, #D5D8E4)" x2="1504" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="bg-[#fffcf5] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Tags">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#ffac00] text-[18px] text-right" dir="auto">
        قيد التفعيل
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end leading-none not-italic relative shrink-0 text-right">
      <p className="font-['Tajawal:Medium',sans-serif] relative shrink-0 text-[#5e6167] text-[16px]" dir="auto">
        الاسم بالكامل
      </p>
      <p className="font-['Tajawal:Bold',sans-serif] relative shrink-0 text-[#242938] text-[24px]" dir="auto">
        عمر رمضان اسماعيل الشناوي
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end leading-none not-italic relative shrink-0 text-right">
      <p className="font-['Tajawal:Medium',sans-serif] relative shrink-0 text-[#5e6167] text-[16px]" dir="auto">
        رقم الهاتف
      </p>
      <p className="font-['Tajawal:Bold',sans-serif] relative shrink-0 text-[#242938] text-[24px]" dir="auto">
        01022655738
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end leading-none not-italic relative shrink-0 text-right">
      <p className="font-['Tajawal:Medium',sans-serif] relative shrink-0 text-[#5e6167] text-[16px]" dir="auto">
        الشركة
      </p>
      <p className="font-['Tajawal:Bold',sans-serif] relative shrink-0 text-[#242938] text-[24px]" dir="auto">
        khazna
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end justify-center relative shrink-0">
      <Tags />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function IcRefresh() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic_refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic_refresh">
          <path d={svgPaths.p126e5700} id="Icon" stroke="var(--stroke-0, #242938)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TextCta() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center right-0 top-[276px]" data-name="Text CTA">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#242938] text-[18px] text-right" dir="auto">
        تغير الصورة
      </p>
      <IcRefresh />
    </div>
  );
}

function IdUpload() {
  return (
    <div className="content-stretch flex flex-col h-[264px] items-end justify-center relative rounded-[16px] shrink-0 w-[420px]" data-name="ID Upload">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgIdUpload} />
      <TextCta />
    </div>
  );
}

function IcRefresh1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic_refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic_refresh">
          <path d={svgPaths.p126e5700} id="Icon" stroke="var(--stroke-0, #242938)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TextCta1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center right-0 top-[276px]" data-name="Text CTA">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#242938] text-[18px] text-right" dir="auto">
        تغير الصورة
      </p>
      <IcRefresh1 />
    </div>
  );
}

function IdUpload1() {
  return (
    <div className="content-stretch flex flex-col h-[264px] items-end justify-center relative rounded-[16px] shrink-0 w-[420px]" data-name="ID Upload">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgIdUpload1} />
      <TextCta1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-end relative shrink-0 w-full">
      <IdUpload />
      <IdUpload1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#dfe0e2] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-end p-[48px] relative w-full">
          <Frame8 />
          <Frame11 />
          <div className="flex items-center justify-center relative shrink-0 w-full">
            <div className="flex-none rotate-180 w-full">
              <div className="h-0 relative w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1504 1">
                    <line id="Line 12" stroke="var(--stroke-0, #D5D8E4)" x2="1504" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[160px] top-[157px] w-[1600px]">
      <Frame6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[16px] text-center text-white" dir="auto">
        التالي
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#1e3e8f] content-stretch flex h-[54px] items-center justify-center px-[16px] py-[18px] relative rounded-[4px] shrink-0 w-[328px]" data-name="Buttons">
      <Frame13 />
    </div>
  );
}

function TextCta2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text CTA">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#dd2c46] text-[18px] text-right" dir="auto">
        إلغاء العملية
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[160px] top-[994px] w-[512px]">
      <Buttons />
      <TextCta2 />
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

function Frame14() {
  return (
    <div className="bg-[#f2f5ff] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative rounded-[100px]">
      <DotsVertical />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <Frame14 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative">
      <Frame />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex items-start left-[160px] size-[40px] top-[51px]" data-name="Component 2">
      <Frame1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[1071px] h-[125px] items-center justify-end left-0 pl-[160px] pr-[32px] pt-[32px] top-0 w-[1920px]" data-name="header">
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

export default function ClientInfoWithFrontBackPhoto() {
  return (
    <div className="bg-white relative size-full" data-name="Client info with front & back photo">
      <Frame10 />
      <Frame9 />
      <Header />
    </div>
  );
}