"use client"

import * as React from "react"
import Link from "next/link"
import { Menu as MenuIcon } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import NavigationItem from "./navigation-item"

interface NavbarProps {
  className: string
}

export default function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const menus = [
    { title: "Início", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "Sobre", path: "/sobre" },
    { title: "Contato", path: "/contato" },
  ]

  return (
    <nav className={cn("w-full border-b md:border-0", className)}>
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-purple-600">Logo</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isMobileMenuOpen ? "block" : "hidden"
            }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <NavigationItem item={item} key={item.title} />
            ))}
            <li>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}