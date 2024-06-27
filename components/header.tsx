"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "./button"
import { Container } from "./container"
import { HamburgerIcon } from "./icons/hamburger"
import { Logo } from "./icons/logo"
import classNames from "classnames"

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-10 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex items-center text-md">
          <Logo className="mr-3 h-[1.8rem] w-[1.8rem]" />
          Linear
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500",
          )}
        >
          <nav
            className={classNames(
              "fixed left-0 top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0",
            )}
          >
            <ul
              className={classNames(
                "flex h-full w-full flex-col md:w-auto md:flex-row md:items-center [&_li]:mx-6 [&_li]:border-b [&_li]:border-dark-gray md:[&_li]:mr-0 md:[&_li]:border-none",
                "[&_a:hover]:text-gray [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:items-center [&_a]:text-md [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:text-sm [&_a]:md:transition-colors",
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto flex h-full items-center">
          <Link href="#" className="mr-6 text-sm">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>
        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  )
}
