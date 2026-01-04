type PageTitleProps = {
  titleStart: string
  titleEnd: string
  description?: string
  className?: string
}

export default function PageTitle({
  titleStart,
  titleEnd,
  description,
  className = "",
}: PageTitleProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {/* TITLE */}
      <h1 className="text-4xl font-bold md:text-5xl">
        <span className="text-foreground">
          {titleStart}{" "}
        </span>
        <span className="animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {titleEnd}
        </span>
      </h1>

      {/* DESCRIPTION */}
      {description && (
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
