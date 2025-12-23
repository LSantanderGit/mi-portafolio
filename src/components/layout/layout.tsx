import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./header";
import Footer from "./footer";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />

      {/* PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="grow"
        >
          <main className="container mx-auto px-4 py-6">
            <Outlet />
          </main>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default Layout;
