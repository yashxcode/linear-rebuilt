import { Button, Highlight } from "../button"
import { LogoLightIllustration } from "../illustrations/logo-light"
import { ZapIllustration } from "../illustrations/zap"

export const UnlikeAnyTool = () => {
  return (
    <div className="text-white">
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl mb-4 md:mb-7">
          Unlike any tool
          <br className="hidden md:inline-block" /> you've used before
        </h2>
        <p className="text-primary-text md:text-xl mx-auto mb-4 max-w-[68rem] text-lg md:mb-7">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto md:flex-wrap">
        <div className="bg-glass-gradient md:p-14 border-transparent-white flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end rounded-[4.8rem] border p-8 text-center md:basis-[calc(66.66%-12px)]">
          <p className="text-3xl mb-4">Built for your keyboard</p>
          <p className="text-primary-text text-md">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
        <div className="bg-glass-gradient md:p-14 border-transparent-white relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end rounded-[4.8rem] border p-8 text-center md:basis-[calc(33.33%-12px)]">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="text-3xl mb-4">Breathtakingly fast</p>
          <p className="text-primary-text text-md">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="bg-glass-gradient md:p-14 border-transparent-white group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end rounded-[4.8rem] border p-8 text-center md:basis-[calc(33.33%-12px)]">
          <div className="width-[130%] pointer-events-none absolute top-[-8rem]">
            <LogoLightIllustration />
          </div>
          <p className="text-3xl mb-4">Designed for modern software teams</p>
          <p className="text-primary-text text-md">
            Comes with built-in workflows that create focus and routine.
          </p>
          <Button
            variant="secondary"
            href="/"
            size="small"
            className="absolute bottom-[20rem] translate-y-[30%] scale-[0.8] opacity-0 transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100 [&_.highlight]:text-[1.1rem]"
          >
            <Highlight>Linear Method</Highlight>
            Product principles
            <svg
              className="ml-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#8A8F98"
            >
              <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
            </svg>
          </Button>
        </div>
        <div className="bg-glass-gradient md:p-14 border-transparent-white flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end rounded-[4.8rem] border p-8 text-center md:basis-[calc(66.66%-12px)]">
          <p className="text-3xl mb-4">Meet your command line</p>
          <p className="text-primary-text text-md">
            Complete any action in seconds with the global command menu.
          </p>
        </div>
      </div>
    </div>
  )
}
