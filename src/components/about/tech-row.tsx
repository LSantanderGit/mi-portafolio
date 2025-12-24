import { motion } from "framer-motion";
import TechBadge from "./tech-badge";
import type { TechItem } from "../../types";

type Props = {
  items: TechItem[];
  direction?: "left" | "right";
  speed?: number;
};

export default function TechRow({
  items,
  direction = "left",
  speed = 40,
}: Props) {
  const from = direction === "left" ? "0%" : "-100%";
  const to = direction === "left" ? "-100%" : "0%";

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 py-2"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => (
			<TechBadge key={`${item.label}-${i}`} {...item} />
		))}
      </motion.div>
    </div>
  );
}
