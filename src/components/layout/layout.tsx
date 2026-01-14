"use client"

import { Outlet, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

import Header from "./header/header"
import Footer from "./footer"
import { LavaLampBackground } from "./lava-lamp-background"

function Layout() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <LavaLampBackground />

      <Header />

		<motion.div
			key={location.pathname}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
			duration: 0.25,
			ease: [0.4, 0, 0.2, 1],
			}}
			className="grow"
		>
			<main className="container mx-auto px-4 py-6">
			<Outlet />
			</main>
		</motion.div>

      <Footer />
    </div>
  )
}

export default Layout
