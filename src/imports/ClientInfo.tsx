import svgPaths from "./svg-l0325oz53j";
import imgRobertTesorieroProfile1536X11521 from "figma:asset/d9dcb2914f94bba7e49a84cfcd7da6d0ea8dfe48.png";
import imgRobertTesorieroProfile1536X11522 from "figma:asset/1d2b4bc14bcd849f7771c18ad5bc6a96597d0d1b.png";

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

function Frame9() {
  return (
    <div className="bg-[#f2f5ff] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative rounded-[100px]">
      <DotsVertical />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <Frame9 />
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
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Component 3">
      <Frame1 />
    </div>
  );
}

function KhaznasLogo() {
  return (
    <div className="h-[31px] overflow-clip relative shrink-0 w-[75.85px]" data-name="khazna\'s logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.851 31.0003">
        <g id="Horizontal">
          <path d={svgPaths.p1dd472c0} fill="var(--fill-0, #22398C)" id="Path 1" />
          <path d={svgPaths.p2ac88d00} fill="var(--fill-0, #22398C)" id="Path 2" />
          <path d={svgPaths.pdfa3380} fill="var(--fill-0, #22398C)" id="Path 3" />
          <path d={svgPaths.p4c05c00} fill="var(--fill-0, #22398C)" id="Path 4" />
          <path d={svgPaths.p3cb9c980} fill="var(--fill-0, #22398C)" id="Path 5" />
          <path d={svgPaths.p25f08b00} fill="var(--fill-0, #22398C)" id="Path 6" />
          <path d={svgPaths.pd4a2a00} fill="var(--fill-0, #22398C)" id="Path 7" />
          <path d={svgPaths.p21ac9f00} fill="var(--fill-0, #22398C)" id="Path 8" />
          <path d={svgPaths.p3b5133c0} fill="var(--fill-0, #22398C)" id="Path 9" />
          <path d={svgPaths.p6d10200} fill="var(--fill-0, #22398C)" id="Path 10" />
          <path d={svgPaths.p1726bc00} fill="var(--fill-0, #22398C)" id="Path 11" />
          <path d={svgPaths.pee22e80} fill="var(--fill-0, #22398C)" id="Path 12" />
          <path d={svgPaths.p293f0d00} fill="var(--fill-0, #22398C)" id="Path 13" />
          <path d={svgPaths.pa99400} fill="var(--fill-0, #22398C)" id="Path 14" />
          <path d={svgPaths.p3119fe64} fill="var(--fill-0, #22398C)" id="Path 15" />
          <path d={svgPaths.p2da71120} fill="var(--fill-0, #22398C)" id="Path 16" />
          <path d={svgPaths.p17c0a8c0} fill="var(--fill-0, #22398C)" id="Path 17" />
          <path d={svgPaths.p228032c0} fill="var(--fill-0, #22398C)" id="Path 18" />
          <path d={svgPaths.p177b8980} fill="var(--fill-0, #22398C)" id="Path 19" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <KhaznasLogo />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[328px]" data-name="Header">
      <Component />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Header />
      </div>
    </div>
  );
}

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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#242938] text-[18px] text-right" dir="auto">
        بيانات العميل الشخصية
      </p>
      <IcIdCard />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <Frame2 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
                <line id="Line 12" stroke="var(--stroke-0, #D5D8E4)" x2="328" y1="0.5" y2="0.5" />
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
    <div className="bg-[#f5fffd] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Tags">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#63bca8] text-[18px] text-right" dir="auto">
        جديد
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0">
      <Tags />
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
            الاسم بالكامل
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

function Base1() {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="base">
      <div aria-hidden="true" className="absolute border border-[#b3b5ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Tajawal:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#6b6f79] text-[16px] text-right whitespace-pre-wrap" dir="auto">
            رقم الهاتف
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[328px]" data-name="Input field">
      <Base1 />
    </div>
  );
}

function IcChevrondown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic_chevrondown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic_chevrondown">
          <path d="M6 9L12 15L18 9" id="Icon" stroke="var(--stroke-0, #6B6F79)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Base2() {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="base">
      <div aria-hidden="true" className="absolute border border-[#b3b5ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
          <IcChevrondown />
          <p className="flex-[1_0_0] font-['Tajawal:Regular',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#6b6f79] text-[16px] text-right whitespace-pre-wrap" dir="auto">
            الشركة
          </p>
        </div>
      </div>
    </div>
  );
}

function InputField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-[328px]" data-name="Input field">
      <Base2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <InputField />
      <InputField1 />
      <InputField2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end justify-center relative shrink-0 w-full">
      <Frame5 />
      <Frame6 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
                <line id="Line 12" stroke="var(--stroke-0, #D5D8E4)" x2="328" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IdUpload1() {
  return (
    <div className="h-[203px] relative rounded-[4px] shrink-0 w-[329px]" data-name="ID Upload">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[203px] left-0 top-0 w-[329px]" data-name="robert-tesoriero_profile_1536x1152 1">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRobertTesorieroProfile1536X11521} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b3b5ba] border-dashed inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
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
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text CTA">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#242938] text-[16px] text-right" dir="auto">
        تغير الصورة
      </p>
      <IcRefresh />
    </div>
  );
}

function IdUpload() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0" data-name="ID Upload">
      <IdUpload1 />
      <TextCta />
    </div>
  );
}

function IdUpload3() {
  return (
    <div className="h-[203px] relative rounded-[4px] shrink-0 w-[329px]" data-name="ID Upload">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[203px] left-0 top-0 w-[329px]" data-name="robert-tesoriero_profile_1536x1152 1">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgRobertTesorieroProfile1536X11522} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b3b5ba] border-dashed inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
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
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text CTA">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#242938] text-[16px] text-right" dir="auto">
        تغير الصورة
      </p>
      <IcRefresh1 />
    </div>
  );
}

function IdUpload2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative shrink-0" data-name="ID Upload">
      <IdUpload3 />
      <TextCta1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <IdUpload />
      <IdUpload2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-end justify-center left-[16px] top-[104px] w-[328px]">
      <Frame8 />
      <Frame3 />
      <Frame4 />
      <Frame11 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#1e3e8f] content-stretch flex h-[54px] items-center justify-center px-[16px] py-[18px] relative rounded-[4px] shrink-0 w-[328px]" data-name="Buttons">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-center text-white" dir="auto">
        التالي
      </p>
    </div>
  );
}

function TextCta2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text CTA">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#dd2c46] text-[16px] text-right" dir="auto">
        إلغاء العملية
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[16px] top-[1071px]" data-name="Buttons">
      <Buttons1 />
      <TextCta2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_8.33%_9.12%_4.17%]" data-name="Group">
      <div className="absolute inset-[-1.26%_-1.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 20.31">
          <g id="Group">
            <path d={svgPaths.p2c3cea80} fill="var(--fill-0, #333333)" id="Vector" stroke="var(--stroke-0, #333333)" strokeWidth="0.5" />
            <path d={svgPaths.p28e1cd00} fill="var(--fill-0, #333333)" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[24px] top-[40px]" data-name="Home">
      <Group />
    </div>
  );
}

function More() {
  return (
    <div className="absolute right-[9px] size-[24px] top-[40px]" data-name="More">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="More">
          <path d={svgPaths.p3c6f2d00} fill="var(--fill-0, black)" fillOpacity="0.87" id="more_vert" />
        </g>
      </svg>
    </div>
  );
}

function Lock() {
  return (
    <div className="absolute left-[72px] size-[20px] top-[42px]" data-name="Lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Lock">
          <path d={svgPaths.p290d5100} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Address() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-center leading-[0] left-[111.46px] overflow-clip text-[14px] top-[42px] tracking-[0.16px] w-[202.542px] whitespace-nowrap" data-name="Address">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.87)]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[20px]">khazna.com</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.54)]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'lnum', 'pnum'" }}>
        <p className="leading-[20px]">admindesigns</p>
      </div>
    </div>
  );
}

function AddressField() {
  return (
    <div className="absolute contents left-[56px] top-[29px]" data-name="Address Field">
      <div className="absolute bg-[rgba(0,0,0,0.05)] h-[46px] left-[56px] right-[53.23px] rounded-[23px] top-[29px]" data-name="Address BG" />
      <Lock />
      <Address />
    </div>
  );
}

function SignalWifi4Bar() {
  return (
    <div className="-translate-y-1/2 absolute right-[86px] size-[18px] top-1/2" data-name="signal_wifi_4_bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="signal_wifi_4_bar">
          <path d={svgPaths.p3e65cd80} fill="var(--fill-0, white)" id="signal_wifi_4_bar_2" />
        </g>
      </svg>
    </div>
  );
}

function SignalCellular4Bar() {
  return (
    <div className="-translate-y-1/2 absolute right-[66px] size-[18px] top-1/2" data-name="signal_cellular_4_bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="signal_cellular_4_bar">
          <path d={svgPaths.p6c83880} fill="var(--fill-0, white)" id="signal_cellular_4_bar_2" />
        </g>
      </svg>
    </div>
  );
}

function BatteryStd() {
  return (
    <div className="-translate-y-1/2 absolute right-[46px] size-[18px] top-1/2" data-name="battery_std">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="battery_std">
          <path d={svgPaths.p608a500} fill="var(--fill-0, white)" id="battery_std_2" />
        </g>
      </svg>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Status Bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
        <path clipRule="evenodd" d="M0 0V24H360V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background" />
      </svg>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] right-[8px] text-[14px] text-[rgba(0,0,0,0.87)] text-right top-[calc(50%-8px)] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        11:11
      </p>
      <SignalWifi4Bar />
      <SignalCellular4Bar />
      <BatteryStd />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[360px]" data-name="toolbar">
      <div className="absolute inset-[-2.5%_-0.56%_-5%_-0.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 364 86">
          <g filter="url(#filter0_dd_111_4885)" id="toolbar-bg">
            <path clipRule="evenodd" d="M2 2H362V82H2V2Z" fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="86" id="filter0_dd_111_4885" width="364" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_111_4885" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="effect1_dropShadow_111_4885" mode="normal" result="effect2_dropShadow_111_4885" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_111_4885" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <Home />
      <More />
      <AddressField />
      <StatusBar />
    </div>
  );
}

export default function ClientInfo() {
  return (
    <div className="bg-white relative size-full" data-name="Client info">
      <Frame7 />
      <Buttons />
      <Toolbar />
    </div>
  );
}