"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SignInButton, UserMenu } from "@/components/auth/social-auth"
import { useAuth } from "@/hooks/use-auth"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading, isAuthenticated } = useAuth()

  const AuthButtons = () => {
    if (loading) {
      return <Button variant="outline" disabled>加载中...</Button>
    }

    if (isAuthenticated && user) {
      return <UserMenu user={user} />
    }

    return <SignInButton />
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">🍌</div>
            <span className="font-bold text-xl hidden sm:inline">Nano Banana</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-foreground/70 hover:text-foreground transition">
              Features
            </Link>
            <Link href="#cases" className="text-foreground/70 hover:text-foreground transition">
              Examples
            </Link>
            <Link href="#faq" className="text-foreground/70 hover:text-foreground transition">
              FAQ
            </Link>
            <Link href="#pricing" className="text-foreground/70 hover:text-foreground transition">
              Pricing
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex gap-3">
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#features" className="text-foreground/70 hover:text-foreground">
              Features
            </Link>
            <Link href="#cases" className="text-foreground/70 hover:text-foreground">
              Examples
            </Link>
            <Link href="#faq" className="text-foreground/70 hover:text-foreground">
              FAQ
            </Link>
            <Link href="#pricing" className="text-foreground/70 hover:text-foreground">
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <AuthButtons />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
