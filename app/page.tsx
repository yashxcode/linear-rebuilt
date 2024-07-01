import { Button, IconWrapper } from "@/components/button"
import { Clients } from "@/components/clients"
import { Container } from "@/components/container"
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero"
import { HeroImage } from "@/components/hero-image"
import { ChevronRightIcon } from "@/components/icons/chevron-right"

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
    </>
  )
}

export default Home
