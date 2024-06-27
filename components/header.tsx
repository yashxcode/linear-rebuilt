"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "./icons/logo"
import { Container } from "./container"
import { Button } from "./button"
import { HamburgerIcon } from "./icons/hamburger"
import classNames from "classnames"

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex items-center text-md">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
          Linear
        </Link>
        <nav
          className={classNames(
            "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full bg-background overflow-auto no-scrollbar md:w-auto md:top-0 md:relative md:h-auto md:block md:bg-transparent",
            hamburgerMenuIsOpen ? "" : "hidden"
          )}
        >
          <ul
            className={classNames(
              "flex flex-col md:flex-row md:items-center h-full [&_li]:mx-6 md:[&_li]:mr-0 [&_li]:border-b [&_li]:border-dark-gray md:[&_li]:border-none",
              "[&_a]:flex [&_a]:items-center [&_a]:h-navigation-height [&_a]:w-full [&_a]:text-md md:[&_a]:text-sm [&_a:hover]:text-gray [&_a]:transition-colors"
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
        <div className="ml-auto h-full flex items-center">
          <Link href="#" className="text-sm mr-6">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>
        <button
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          className="ml-6 md:hidden"
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  )
}
