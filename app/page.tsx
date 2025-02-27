import { Clients } from "@/components/sections/clients"
import { Container } from "@/components/container"
import { StarsIllustration } from "@/components/icons/stars"
import { UnlikeAnyTool } from "@/components/sections/unlike-any-tool"
import classNames from "classnames"
import { HomepageHero } from "@/components/sections/homepage-hero"
import { IssueTracking } from "@/components/sections/issue-tracking"
import { BuildMomentum } from "@/components/sections/build-momentum"
import { SetDirection } from "@/components/sections/set-direction"

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
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] flex h-[60rem] items-center justify-center overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,119,198,0.4)] after:bg-background",
        )}
      >
        <StarsIllustration />
      </div>
      <Container>
        <UnlikeAnyTool />
      </Container>
      <IssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  )
}

export default Home
