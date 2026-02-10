import svgPaths from "./svg-hao4jb5ei9";
import imgEllipse4 from "figma:asset/7a7ed9f830d97739d1d0decba29c23b0460c59f5.png";

function Group() {
  return (
    <div className="col-1 h-[271.945px] ml-0 mt-0 relative row-1 w-[271.946px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271.945 271.945">
        <g id="Group">
          <path d={svgPaths.p50ddec0} fill="var(--fill-0, #FF9F7A)" id="Vector" opacity="0.8" />
          <path d={svgPaths.pa17d580} fill="var(--fill-0, #FF9F7A)" id="Vector_2" opacity="0.8" />
          <path d={svgPaths.pb5f3e00} fill="var(--fill-0, #FF9F7A)" id="Vector_3" opacity="0.8" />
          <path d={svgPaths.p2d4c7f80} fill="var(--fill-0, #FF9F7A)" id="Vector_4" opacity="0.8" />
          <path d={svgPaths.p1d72c00} fill="var(--fill-0, #FF9F7A)" id="Vector_5" opacity="0.8" />
          <path d={svgPaths.p3822acf0} fill="var(--fill-0, #FF9F7A)" id="Vector_6" opacity="0.8" />
          <path d={svgPaths.p3d053700} fill="var(--fill-0, #FF9F7A)" id="Vector_7" opacity="0.8" />
          <path d={svgPaths.p14097900} fill="var(--fill-0, #FF9F7A)" id="Vector_8" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-[29.47px] mt-[24px] relative row-1 size-[213px]">
        <img alt="" className="block max-w-none size-full" height="213" src={imgEllipse4} width="213" />
      </div>
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full">
      <Group1 />
    </div>
  );
}