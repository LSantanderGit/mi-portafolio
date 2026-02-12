import { useEffect, useMemo, useRef, useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

type Options = {
  enabled?: boolean
  cacheKey?: string
}

const memoryCache = new Map<string, unknown>()
const inflight = new Map<string, Promise<unknown>>()

export function useLazyResource<T>(
  loader: () => Promise<T>,
  { enabled = true, cacheKey }: Options = {}
) {
  const [status, setStatus] = useState<Status>(enabled ? "loading" : "idle")
  const [data, setData] = useState<T | null>(() => {
    if (cacheKey && memoryCache.has(cacheKey)) return memoryCache.get(cacheKey) as T
    return null
  })
  const [error, setError] = useState<unknown>(null)

  const hasCached = useMemo(() => !!(cacheKey && memoryCache.has(cacheKey)), [cacheKey])
  const aliveRef = useRef(true)

  useEffect(() => {
    aliveRef.current = true
    return () => {
      aliveRef.current = false
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    if (data) return

    let p: Promise<unknown> | undefined

    ;(async () => {
      try {
        setStatus("loading")

        if (cacheKey) {
          if (memoryCache.has(cacheKey)) {
            const cached = memoryCache.get(cacheKey) as T
            if (!aliveRef.current) return
            setData(cached)
            setStatus("success")
            return
          }

          if (inflight.has(cacheKey)) {
            p = inflight.get(cacheKey)!
          } else {
            p = loader()
            inflight.set(cacheKey, p)
          }

          const result = (await p) as T
          memoryCache.set(cacheKey, result)
          inflight.delete(cacheKey)

          if (!aliveRef.current) return
          setData(result)
          setStatus("success")
          return
        }

        const result = await loader()
        if (!aliveRef.current) return
        setData(result)
        setStatus("success")
      } catch (e) {
        if (!aliveRef.current) return
        setError(e)
        setStatus("error")
      }
    })()
  }, [enabled, cacheKey, data, loader, hasCached])

  return { data, status, loading: status === "loading", error }
}
