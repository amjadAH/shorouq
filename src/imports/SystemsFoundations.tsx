import svgPaths from "./svg-c21zek608o";
import clsx from "clsx";
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("bg-[#0f0a18] place-self-stretch relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#f8f8f2] text-[20px] text-center text-nowrap tracking-[-0.4492px]">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#f8f8f2] text-[20px] text-nowrap tracking-[-0.4492px]">{text}</p>
    </div>
  );
}

export default function SystemsFoundations() {
  return (
    <div className="bg-[#0a0512] relative size-full" data-name="Systems & Foundations">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-0 relative size-full">
          <div className="content-stretch flex flex-col gap-[48px] items-start px-0 py-[80px] relative shrink-0 w-full" data-name="Section">
            <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,159,122,0.1)] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
              <div className="h-[40px] relative shrink-0 w-[406px]" data-name="Heading 2">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[40px] left-0 not-italic text-[#f8f8f2] text-[36px] text-nowrap top-0 tracking-[0.3691px]">{`Systems & Foundations`}</p>
              </div>
              <div className="h-[28px] relative shrink-0 w-[768px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#a0a0a0] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">The invisible work that makes products easier to design, build, and scale.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[40px] h-[455px] items-center justify-center relative rounded-[16px] shrink-0 w-full" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[rgba(255,159,122,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[334px] relative shrink-0 w-[987px]" data-name="Container">
                <Container additionalClassNames="[grid-area:1_/_1]">
                  <div className="content-stretch flex flex-col gap-[8px] h-[114px] items-start relative shrink-0 w-[453.5px]" data-name="Container">
                    <HeadingText text="Visual Foundations" />
                    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[220.5px] not-italic text-[#a0a0a0] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] w-[441px]">I define color systems, typography scales, spacing rules, and interaction patterns that create consistency across products and teams.</p>
                    </div>
                  </div>
                </Container>
                <Container additionalClassNames="[grid-area:1_/_2]">
                  <div className="content-stretch flex flex-col gap-[8px] h-[114px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                    <HeadingText text="Design Tokens" />
                    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[218px] not-italic text-[#a0a0a0] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] w-[436px]">I work with tokenized values for colors, spacing, typography, and states to ensure design decisions translate cleanly into code.</p>
                    </div>
                  </div>
                </Container>
                <div className="[grid-area:2_/_1] bg-[#0f0a18] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[8px] self-stretch shrink-0 w-[477.5px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-[453.5px]" data-name="Container">
                    <HeadingText1 text="Reusable Components" />
                    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[222.5px] not-italic text-[#a0a0a0] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] w-[445px]">I help shape reusable, accessible components that teams can confidently build on without reinventing UI patterns.</p>
                    </div>
                  </div>
                </div>
                <div className="[grid-area:2_/_2] bg-[#0f0a18] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[8px] self-stretch shrink-0 w-[477.5px]" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[453.5px]" data-name="Container">
                    <HeadingText1 text="Collaboration with Engineering" />
                    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[226.5px] not-italic text-[#a0a0a0] text-[16px] text-center top-0 tracking-[-0.3125px] translate-x-[-50%] w-[454px]">I partner closely with developers to align on constraints, states, and edge cases—bridging design intent and implementation.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
                <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,159,122,0.05)] border-solid inset-0 pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Button">
                  <div className="h-[24px] relative shrink-0 w-[214.711px]" data-name="Text">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[107px] not-italic text-[#ff9f7a] text-[16px] text-center text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%]">{`View Systems & Foundations`}</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Icon">
                        <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #FF9F7A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}