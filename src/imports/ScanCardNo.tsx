import imgWhatsAppImage20230111At12061 from "figma:asset/1d92fd30b3c60c9deb543b5b2d1bef98904261c4.png";

function Group() {
  return (
    <div className="absolute contents left-[calc(25%+53px)] top-[545px]">
      <div className="absolute h-[61px] left-[calc(25%+59px)] top-[551px] w-[62px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 61">
          <ellipse cx="31" cy="30.5" fill="var(--fill-0, white)" id="Ellipse 10" rx="31" ry="30.5" />
        </svg>
      </div>
      <div className="absolute left-[calc(25%+53px)] size-[73px] top-[545px]">
        <div className="absolute inset-[-4.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 79">
            <circle cx="39.5" cy="39.5" id="Ellipse 11" r="38" stroke="var(--stroke-0, white)" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-end left-[20px] top-[265px]">
      <div className="h-[84px] relative rounded-[12px] shrink-0 w-[316px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

export default function ScanCardNo() {
  return (
    <div className="bg-white relative size-full" data-name="Scan card no.">
      <div className="absolute h-[640px] left-0 top-0 w-[360px]" data-name="WhatsApp Image 2023-01-11 at 12.06 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.44%] left-[-13.06%] max-w-none top-[-28.42%] w-[266.39%]" src={imgWhatsAppImage20230111At12061} />
        </div>
      </div>
      <Group />
      <Frame />
    </div>
  );
}