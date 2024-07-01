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
      <div className="flex flex-wrap gap-6">
        <div className="bg-glass-gradient md:p-14 border-transparent-white flex min-h-[48rem] basis-[calc(66.66%-12px)] flex-col justify-end rounded-[4.8rem] border p-8 text-center">
          <p className="text-3xl mb-4">Built for your keyboard</p>
          <p className="text-primary-text text-md">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
        <div className="bg-glass-gradient md:p-14 border-transparent-white relative flex min-h-[48rem] basis-[calc(33.33%-12px)] flex-col items-center justify-end rounded-[4.8rem] border p-8 text-center">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="text-3xl mb-4">Breathtakingly fast</p>
          <p className="text-primary-text text-md">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="bg-glass-gradient md:p-14 border-transparent-white flex min-h-[48rem] basis-[calc(33.33%-12px)] flex-col justify-end rounded-[4.8rem] border p-8 text-center">
          <p className="text-3xl mb-4">Designed for modern software teams</p>
          <p className="text-primary-text text-md">
            Comes with built-in workflows that create focus and routine.
          </p>
        </div>
        <div className="bg-glass-gradient md:p-14 border-transparent-white flex min-h-[48rem] basis-[calc(66.66%-12px)] flex-col justify-end rounded-[4.8rem] border p-8 text-center">
          <p className="text-3xl mb-4">Meet your command line</p>
          <p className="text-primary-text text-md">
            Complete any action in seconds with the global command menu.
          </p>
        </div>
      </div>
    </div>
  )
}
