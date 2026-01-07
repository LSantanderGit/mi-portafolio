import TechRow from "./tech-row";
import { techStack } from "../../../locales/tech-stacks";
import { shuffleArray } from "../../../utils/shuffle";

const ITEMS_PER_ROW = 8;

export default function TechMarquee() {
  const rows = Math.ceil(techStack.length / ITEMS_PER_ROW);

  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 px-6">
      {Array.from({ length: rows }).map((_, i) => {
        const shuffled = shuffleArray(techStack);
        const rowItems = shuffled.slice(0, ITEMS_PER_ROW);

        return (
          <TechRow
            key={i}
            items={rowItems}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={30 + i * 4}
          />
        );
      })}
    </div>
  );
}
