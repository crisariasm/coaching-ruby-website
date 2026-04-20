"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="block">
            <Image src="/logo.png" alt="Ruby coach de vida" width={140} height={40} className="object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-foreground hover:text-accent transition-colors">
              Servicios
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-accent transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="block text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="block text-foreground hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
