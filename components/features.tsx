type FeaturesProps = {
  children: React.ReactNode
}

type MainFeatureProps = {
  image: string
  text: string
}

type FeaturesTitleProps = {
  children: React.ReactNode
}

type FeaturesGridProps = {
  features: {
    icon: React.FC
    title: string
    text: string
  }[]
}

type FeaturesCardsProps = {
  features: {
    image: string
    imageClassName: string
    title: string
    text: string
  }[]
}

export const Features = ({ children }: FeaturesProps) => {
  return (
    <section className="flex flex-col items-center py-[12.8rem]">
      {children}
    </section>
  )
}

const FeaturesTitle = ({ children }: FeaturesTitleProps) => (
  <h2 className="text-gradient mb-11 text-center text-6xl md:text-8xl">
    {children}
  </h2>
)

const MainFeature = ({ text, image }: MainFeatureProps) => {
  return (
    <div className="w-[78rem] max-w-[90%] text-center">
      <div className="relative z-10 rounded-[14px] backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask-composite:xor] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]">
        <img src={image} alt="Feature illustration" className="h-auto w-full" />
      </div>
      <p className="my-16 mx-auto w-[80%] text-4xl leading-tight text-white">
        {text}
      </p>
      <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
    </div>
  )
}

const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  return (
    <div className="mb-[14rem] grid w-full grid-cols-3 gap-y-9 text-md text-primary-text">
      {features.map(({ title, text, icon: Icon }) => (
        <div
          key={title}
          className="w-[25.6rem] [&_svg]:mb-[2px] [&_svg]:mr-[6px] [&_svg]:inline [&_svg]:fill-white"
        >
          <Icon />
          <span className="text-white">{title}</span> {text}
        </div>
      ))}
    </div>
  )
}

const FeaturesCards = ({ features }: FeaturesCardsProps) => {
  return <div>Cards</div>
}

Features.Main = MainFeature
Features.Grid = FeaturesGrid
Features.Cards = FeaturesCards
Features.Title = FeaturesTitle
