import imgBitmap from "figma:asset/f71c940de0d0d99622e1f7a5bbd3595e737cb63c.png";
import imgRobertTesorieroProfile1536X11521 from "figma:asset/c91f8e425b1dcb513ce5a6fcef46f88a9e2458ab.png";

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

export default function KycFrontPhoto() {
  return (
    <div className="bg-white relative size-full" data-name="KYC front photo">
      <div className="absolute h-[640px] left-0 top-0 w-[360px]" data-name="Bitmap">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[121.87%] left-0 max-w-none top-[-10.94%] w-full" src={imgBitmap} />
        </div>
      </div>
      <div className="absolute h-[640px] left-[-1px] top-0 w-[361px]" data-name="robert-tesoriero_profile_1536x1152 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRobertTesorieroProfile1536X11521} />
      </div>
      <Group />
    </div>
  );
}