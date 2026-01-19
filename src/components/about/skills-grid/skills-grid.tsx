import skills from "@/locales/skills.json"

export default function SkillsGrid() {
  return (
    <section className="flex justify-center px-4 pb-32">
      <div
        className="
          w-full max-w-5xl
          rounded-2xl
          border border-border
          bg-background/80
          backdrop-blur-xl
          shadow-xl
          px-8 py-10
        "
      >
        <h2
          className="
            text-sm font-semibold uppercase tracking-widest
            text-muted-foreground text-center
          "
        >
          Skills & Tools
        </h2>

        <div
          className="
            mt-8
            grid
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-6
            gap-6
          "
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="
                group
                relative
                flex
                items-center
                justify-center
                aspect-square
                rounded-xl
                border
                border-border
                bg-background
                transition-all
                duration-300
                hover:scale-125
                hover:z-10
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0 rounded-xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  bg-gradient-to-br
                  from-sky-400/30
                  via-transparent
                  to-purple-500/30
                "
              />

              {/* Icon */}
              <img
                src={`/assets/icons/${skill.icon}`}
                alt={skill.name}
                className="
                  relative z-10
                  h-15 w-15
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute -bottom-7
                  text-xs
                  opacity-0
                  group-hover:opacity-100
                  transition
                  text-muted-foreground
                "
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
