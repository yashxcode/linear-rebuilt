import { Clients } from "@/components/sections/clients"
import { Container } from "@/components/container"
import { StarsIllustration } from "@/components/icons/stars"
import { UnlikeAnyTool } from "@/components/sections/unlike-any-tool"
import classNames from "classnames"
import { HomepageHero } from "@/components/sections/homepage-hero"

const Home = () => {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
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
      <Container>
        <UnlikeAnyTool />
      </Container>
    </>
  )
}

export default Home
