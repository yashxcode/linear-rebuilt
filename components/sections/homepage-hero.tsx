import { Button, Highlight } from "../button"
import { Hero, HeroSubtitle, HeroTitle } from "../hero"
import { HeroImage } from "../hero-image"
import { ChevronRightIcon } from "../icons/chevron-right"

export const HomepageHero = () => {
  return (
    <Hero>
      <Button
        href="#"
        variant="secondary"
        size="small"
        className="animate-fade-in translate-y-[-1rem] opacity-0"
      >
        Introducing Linear Initiatives <Highlight>→</Highlight>
      </Button>
      <HeroTitle className="animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:200ms]">
        Linear is a better way
        <br className="hidden md:block" /> to build products
      </HeroTitle>
      <HeroSubtitle className="animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:400ms]">
        Meet the new standard for modern software development.
        <br className="hidden md:block" /> Streamline issues, sprints, and
        product roadmaps.
      </HeroSubtitle>
      <Button
        href="#"
        variant="primary"
        size="large"
        className="animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:600ms]"
      >
        Get started{" "}
        <Highlight>
          <ChevronRightIcon />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  )
}
