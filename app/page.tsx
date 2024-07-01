import { Button, IconWrapper } from "@/components/button"
import { Clients } from "@/components/clients"
import { Container } from "@/components/container"
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero"
import { HeroImage } from "@/components/hero-image"
import { ChevronRightIcon } from "@/components/icons/chevron-right"
import { StarsIllustration } from "@/components/icons/stars"
import classNames from "classnames"

const Home = () => {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <Hero>
            <Button
              href="#"
              variant="secondary"
              size="small"
              className="animate-fade-in translate-y-[-1rem] opacity-0"
            >
              Introducing Linear Initiatives <IconWrapper>→</IconWrapper>
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
              <IconWrapper>
                <ChevronRightIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "mask-radial-faded relative my-[-12.8rem] flex h-[60rem] items-center justify-center overflow-hidden",
          "before:bg-radial-faded [--color:#7877C6] before:absolute before:inset-0 before:opacity-[0.4]",
          "after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,119,198,0.4)] after:bg-background",
        )}
      >
        <StarsIllustration />
      </div>
    </>
  )
}

export default Home
