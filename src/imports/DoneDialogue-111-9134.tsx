import svgPaths from "./svg-ll7ia2knoo";

function Success() {
  return (
    <div className="relative shrink-0 size-[85px]" data-name="success 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 85">
        <g id="success 3">
          <rect fill="var(--fill-0, #E1EDFF)" height="85" rx="42.5" width="85" />
          <g id="Group">
            <path d={svgPaths.p2d691400} fill="var(--fill-0, #C7D8F2)" id="Vector" />
            <path d={svgPaths.p32532bf0} fill="var(--fill-0, #EEF5FB)" id="Vector_2" />
            <g id="Group_2">
              <path d={svgPaths.p10860dc0} fill="var(--fill-0, #37BFA7)" id="Vector_3" />
              <path d={svgPaths.p1e352f00} fill="var(--fill-0, white)" id="Vector_4" />
            </g>
            <path d={svgPaths.p3cc70300} fill="var(--fill-0, #F8FDFF)" id="Vector_5" />
            <path d={svgPaths.p7555280} fill="var(--fill-0, #F8FDFF)" id="Vector_6" />
            <path d={svgPaths.p17f5f480} fill="var(--fill-0, #F0F7FF)" id="Vector_7" />
          </g>
          <path d={svgPaths.p38fb1940} fill="var(--fill-0, #B8D5FF)" id="Vector_8" />
          <path d={svgPaths.p3237bc00} fill="var(--fill-0, #B8D5FF)" id="Vector_9" />
          <path d={svgPaths.p3a619e00} fill="var(--fill-0, #B8D5FF)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center w-full" data-name="body">
      <div className="flex flex-col font-['Tajawal:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#242938] text-[18px] w-full">
        <p className="leading-[1.5] whitespace-pre-wrap" dir="auto">
          تمت إضافة بيانات العميل بنجاح!
        </p>
      </div>
      <p className="font-['Tajawal:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#5e6167] text-[16px] w-full whitespace-pre-wrap" dir="auto">
        تأكد من إخبار العميل بأماكن تفعيل كارت خزنة وكيفية تفعيله من خلال التطبيق
      </p>
    </div>
  );
}

function IcClose() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="ic_close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic_close">
          <path clipRule="evenodd" d={svgPaths.p28fcbf80} fill="var(--fill-0, #6B6F79)" fillRule="evenodd" id="Icon (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function BodyAndHead() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="body and head">
      <Success />
      <Body />
      <IcClose />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#1e3e8f] flex-[1_0_0] h-[54px] min-h-px min-w-px relative rounded-[4px]" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[18px] relative size-full">
          <p className="font-['Tajawal:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[14px] text-center text-white" dir="auto">
            حسنًا
          </p>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Buttons">
      <Buttons1 />
    </div>
  );
}

function Dialogue() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-center left-[736px] p-[16px] rounded-[18px] top-[391px] w-[450px]" data-name="Dialogue">
      <BodyAndHead />
      <Buttons />
    </div>
  );
}

export default function DoneDialogue() {
  return (
    <div className="relative size-full" data-name="Done dialogue">
      <div className="absolute bg-black h-[1080px] left-0 opacity-80 top-0 w-[1920px]" />
      <Dialogue />
    </div>
  );
}