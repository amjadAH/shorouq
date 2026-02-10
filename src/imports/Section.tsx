import svgPaths from "./svg-wr8ge6l1v0";
import img98326Fb5Dea14F1880C9Fa2B394F00011105C2 from "figma:asset/bb876845b5cbd6f5f494a99cab66f9abf2c241a6.png";
import imgEllipse1 from "figma:asset/810485d7d6bb87f8698ac657ece18ca35ec7f014.png";
import { img98326Fb5Dea14F1880C9Fa2B394F00011105C1 } from "./svg-dexnr";

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center relative">{children}</div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,159,122,0.1)] relative rounded-[14px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,159,122,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start justify-center not-italic relative">
        <p className="leading-[36px] relative shrink-0 text-[#f8f8f2] text-[18px] text-nowrap tracking-[0.3955px]">{text}</p>
        <p className="leading-[normal] relative shrink-0 text-[#b5b5b5] text-[14px] w-[466px]">{text1}</p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,159,122,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[56px] relative size-full">
          <div className="content-stretch flex flex-col gap-[16px] h-[121px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[40px] relative shrink-0 w-[386.211px]" data-name="HomePage">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[#f8f8f2] text-[32px] text-nowrap top-[0.5px] tracking-[0.3691px]">{`Leadership & Mentorship`}</p>
              </div>
            </div>
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[768px]" data-name="HomePage">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#a0a0a0] text-[20px] top-[-0.5px] tracking-[-0.4492px] w-[691px]">Supporting people and fostering growth is as important to me as solving design problems.</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative w-full">
                <div className="content-stretch flex flex-col gap-[40px] items-start justify-center px-0 py-[24px] relative shrink-0 w-[530px]" data-name="Container">
                  <Container1>
                    <Container>
                      <Icon>
                        <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M19 8V14" id="Vector_3" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M22 11H16" id="Vector_4" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </Icon>
                    </Container>
                    <Helper text="Internship Programs" text1="Led end-to-end internship programs — from recruiting and onboarding to creating structured learning paths that build real skills and confidence." />
                  </Container1>
                  <Container1>
                    <Container>
                      <Icon>
                        <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p161d4800} id="Vector_2" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d={svgPaths.p13e20900} id="Vector_4" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </Icon>
                    </Container>
                    <Helper text="Team Mentorship" text1="Mentor junior designers through regular feedback sessions, portfolio reviews, and collaborative problem-solving to develop their design voice." />
                  </Container1>
                  <div className="relative shrink-0" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
                      <Container>
                        <Icon>
                          <path d={svgPaths.pdb17300} id="Vector" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p2f6e8c0} id="Vector_2" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p32c0b4c0} id="Vector_3" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </Icon>
                      </Container>
                      <div className="relative shrink-0 w-[466px]">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start not-italic relative w-full">
                          <p className="leading-[36px] relative shrink-0 text-[#f8f8f2] text-[18px] text-nowrap tracking-[0.3955px]">ADPList Mentorship</p>
                          <p className="leading-[normal] min-w-full relative shrink-0 text-[#b5b5b5] text-[14px] w-[min-content]">Support designers navigating career transitions, building portfolios, and developing strategic thinking through 1-on-1 mentorship sessions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                  <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="[grid-area:1_/_1] flex h-[225.342px] items-center justify-center ml-0 mt-[26.43%] relative w-[225.341px]">
                        <div className="flex-none h-[202.207px] rotate-[353deg] w-[202.206px]">
                          <div className="relative size-full" data-name="Group">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202.206 202.207">
                              <g id="Group">
                                <path d={svgPaths.p2ca9f9f0} fill="var(--fill-0, #FF9F7A)" id="Vector" opacity="0.8" />
                                <path d={svgPaths.p1c04a080} fill="var(--fill-0, #FF9F7A)" id="Vector_2" opacity="0.8" />
                                <path d={svgPaths.pf8af280} fill="var(--fill-0, #FF9F7A)" id="Vector_3" opacity="0.8" />
                                <path d={svgPaths.p27e8d680} fill="var(--fill-0, #FF9F7A)" id="Vector_4" opacity="0.8" />
                                <path d={svgPaths.p30f21300} fill="var(--fill-0, #FF9F7A)" id="Vector_5" opacity="0.8" />
                                <path d={svgPaths.p3cd32580} fill="var(--fill-0, #FF9F7A)" id="Vector_6" opacity="0.8" />
                                <path d={svgPaths.p3a65a080} fill="var(--fill-0, #FF9F7A)" id="Vector_7" opacity="0.8" />
                                <path d={svgPaths.p1082f180} fill="var(--fill-0, #FF9F7A)" id="Vector_8" opacity="0.8" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="[grid-area:1_/_1] ml-[141.94px] mt-[14.76px] relative size-[169.734px]">
                        <img alt="" className="block max-w-none size-full" height="169.734" src={imgEllipse1} width="169.734" />
                      </div>
                      <div className="[grid-area:1_/_1] h-[203.37px] ml-[41.61%] mt-0 relative w-[191.119px]" data-name="Group">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191.119 203.37">
                          <g id="Group">
                            <path d={svgPaths.p39de6900} fill="var(--fill-0, #FF9F7A)" id="Vector" opacity="0.8" />
                            <path d={svgPaths.p2aacb200} fill="var(--fill-0, #FF9F7A)" id="Vector_2" opacity="0.8" />
                            <path d={svgPaths.p25cc4270} fill="var(--fill-0, #FF9F7A)" id="Vector_3" opacity="0.8" />
                            <path d={svgPaths.p2d40f240} fill="var(--fill-0, #FF9F7A)" id="Vector_4" opacity="0.8" />
                            <path d={svgPaths.p2e08a400} fill="var(--fill-0, #FF9F7A)" id="Vector_5" opacity="0.8" />
                            <path d={svgPaths.pbe7ca00} fill="var(--fill-0, #FF9F7A)" id="Vector_6" opacity="0.8" />
                            <path d={svgPaths.p2ef1c800} fill="var(--fill-0, #FF9F7A)" id="Vector_7" opacity="0.8" />
                          </g>
                        </svg>
                      </div>
                      <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[32.67px] mt-[104.93px] place-items-start relative" data-name="Mask group">
                        <div className="[grid-area:1_/_1] h-[169.734px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[30.765px_0px] mask-size-[169.734px_169.734px] ml-[-30.76px] mt-0 relative w-[225.958px]" data-name="98326FB5-DEA1-4F18-80C9-FA2B394F0001_1_105_c 1" style={{ maskImage: `url('${img98326Fb5Dea14F1880C9Fa2B394F00011105C1}')` }}>
                          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img98326Fb5Dea14F1880C9Fa2B394F00011105C2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,159,122,0.08)] relative rounded-[14px] shrink-0 w-[264.117px]" data-name="Button">
            <div className="content-stretch flex flex-col items-start overflow-clip px-[33px] py-[17px] relative rounded-[inherit] w-full">
              <div className="h-[24px] relative shrink-0 w-full" data-name="HomePage">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[99px] not-italic text-[#ff9f7a] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">Helping others shine</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(255,159,122,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
          </div>
        </div>
      </div>
    </div>
  );
}