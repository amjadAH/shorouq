import svgPaths from "./svg-ry8xmjdm3y";

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

function Toolbar({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[80px] left-0 top-0 w-[360px]"} data-name="toolbar">
      <div className="absolute inset-[-2.5%_-0.56%_-5%_-0.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 364 86">
          <g filter="url(#filter0_dd_111_4690)" id="toolbar-bg">
            <path clipRule="evenodd" d="M2 2H362V82H2V2Z" fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="86" id="filter0_dd_111_4690" width="364" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_111_4690" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="effect1_dropShadow_111_4690" mode="normal" result="effect2_dropShadow_111_4690" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_111_4690" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <Home />
      <More />
      <AddressField />
      <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Status Bar">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 24">
          <path clipRule="evenodd" d="M0 0V24H360V0H0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="background" />
        </svg>
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] right-[8px] text-[14px] text-[rgba(0,0,0,0.87)] text-right top-[calc(50%-8px)] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          11:11
        </p>
        <div className="-translate-y-1/2 absolute right-[86px] size-[18px] top-1/2" data-name="signal_wifi_4_bar">
          <div className="absolute inset-[12.5%_1.56%_10.55%_1.56%]" data-name="signal_wifi_4_bar">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4375 13.8516">
              <path d={svgPaths.pf9bc600} fill="var(--fill-0, white)" id="signal_wifi_4_bar" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute right-[66px] size-[18px] top-1/2" data-name="signal_cellular_4_bar">
          <div className="absolute inset-[8.4%]" data-name="signal_cellular_4_bar">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9766 14.9766">
              <path d={svgPaths.p26058000} fill="var(--fill-0, white)" id="signal_cellular_4_bar" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute right-[46px] size-[18px] top-1/2" data-name="battery_std">
          <div className="absolute inset-[8.4%_29.1%]" data-name="battery_std">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.52344 14.9766">
              <path d={svgPaths.p21b7a800} fill="var(--fill-0, white)" id="battery_std" />
            </svg>
          </div>
        </div>
      </div>
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

function Frame4() {
  return (
    <div className="bg-[#f2f5ff] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative rounded-[100px]">
      <DotsVertical />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative">
      <Frame1 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Component 3">
      <Frame2 />
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

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <KhaznasLogo />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Component />
      <Frame6 />
    </div>
  );
}

function Group1() {
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
      <Group1 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="body">
      <p className="font-['Tajawal:Bold',sans-serif] leading-none relative shrink-0 text-[#242938] text-[18px] w-full" dir="auto">
        أدخل رقم بطاقة الرقم القومي للعميل
      </p>
      <p className="font-['Tajawal:Medium',sans-serif] leading-[1.5] relative shrink-0 text-[#5e6167] text-[14px] w-full" dir="auto">
        ابحث باستخدام الرقم القومي المتواجد على بطاقة العميل الشخصية
      </p>
    </div>
  );
}

function FullBody() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center justify-center relative shrink-0 w-full" data-name="full body">
      <NationalId />
      <Body />
    </div>
  );
}

function FullBodyAndLin() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[328px]" data-name="full body and lin">
      <FullBody />
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <FullBodyAndLin />
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-end left-[16px] top-[104px]">
      <Header />
      <Frame3 />
    </div>
  );
}

export default function Start() {
  return (
    <div className="bg-white relative size-full" data-name="Start">
      <Toolbar />
      <Frame5 />
    </div>
  );
}