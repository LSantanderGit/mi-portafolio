import { useEffect } from "react"

const BASE_TITLE = "Lucas Matías Santander"

export default function usePageTitle(title?: string) {
  useEffect(() => {
    const nextTitle = title ? `${BASE_TITLE} | ${title}` : BASE_TITLE
    document.title = nextTitle
  }, [title])
}
