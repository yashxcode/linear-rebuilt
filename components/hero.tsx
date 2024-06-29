import classNames from "classnames"

interface HeroProps {
  children: React.ReactNode
}

interface HeroElementProps {
  children: React.ReactNode
  className?: string
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "text-6xl md:text-8xl text-gradient my-6 font-medium",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        "md:text-xl text-primary-text mb-12 text-lg",
        className,
      )}
    >
      {children}
    </p>
  )
}

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>
}
