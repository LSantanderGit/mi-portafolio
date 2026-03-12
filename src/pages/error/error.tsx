'use client';

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";

interface ErrorPageProps {
  type?: "404" | "500" | "generic";
  errorMessage?: string;
}

export default function ErrorPage({ type = "404", errorMessage }: ErrorPageProps) {
  const { t } = useTranslation();

  const errorConfig = {
    "404": {
      code: "404",
    },
    "500": {
      code: "500",
    },
    generic: {
      code: "Error",
    },
  };

  const config = errorConfig[type];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <GlassCard>
          <div className="p-8 md:p-12 flex flex-col items-center text-center">
            {/* Animated Icon Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-4"
            >
              <div className="w-32 h-32 rounded-full bg-secondary/50 border border-border/50 flex items-center justify-center backdrop-blur-sm">
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3 
                  }}
                >
                  <AlertTriangle className="w-16 h-16 text-muted-foreground" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Code */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mb-4"
            >
              <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
                {config.code}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-foreground mb-3"
            >
              {t(`error.${type}.title`)}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-muted-foreground mb-8 max-w-md leading-relaxed"
            >
              {errorMessage || t(`error.${type}.description`)}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8"
            >
              {/* Go Home Button */}
              <Link
                to="/"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02]"
              >
                <Home className="w-4 h-4" />
                {t("error.actions.goHome")}
              </Link>

              {/* Go Back Button */}
              <button
                onClick={() => window.history.back()}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 text-foreground font-medium transition-all duration-300 hover:bg-secondary hover:border-foreground/20 hover:shadow-lg hover:scale-[1.02] backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t("error.actions.goBack")}
              </button>
            </motion.div>

            {/* Hint - Now inside the card */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="text-xs text-muted-foreground/60 pt-6 border-t border-border/30 w-full"
            >
              {t("error.hint")}
            </motion.p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
