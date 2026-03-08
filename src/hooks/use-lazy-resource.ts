import { useEffect, useRef, useState } from "react"

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
  const [data, setData] = useState<T | null>(() => {
    if (cacheKey && memoryCache.has(cacheKey)) {
      return memoryCache.get(cacheKey) as T
    }
    return null
  })

  const [status, setStatus] = useState<Status>(() => {
    if (!enabled) return "idle"
    if (cacheKey && memoryCache.has(cacheKey)) return "success"
    return "loading"
  })

  const [error, setError] = useState<unknown>(null)
  const aliveRef = useRef(true)

  useEffect(() => {
    aliveRef.current = true
    return () => {
      aliveRef.current = false
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      setStatus("idle")
      return
    }

    if (cacheKey && memoryCache.has(cacheKey)) {
      setData(memoryCache.get(cacheKey) as T)
      setError(null)
      setStatus("success")
      return
    }

    let promise: Promise<T>

    if (cacheKey && inflight.has(cacheKey)) {
      promise = inflight.get(cacheKey)! as Promise<T>
    } else {
      promise = loader()
      if (cacheKey) inflight.set(cacheKey, promise)
    }

    setError(null)
    setStatus("loading")

    promise
      .then((result) => {
        if (cacheKey) {
          memoryCache.set(cacheKey, result)
        }

        if (!aliveRef.current) return
        setData(result)
        setError(null)
        setStatus("success")
      })
      .catch((e) => {
        if (!aliveRef.current) return
        setError(e)
        setStatus("error")
      })
      .finally(() => {
        if (cacheKey) {
          inflight.delete(cacheKey)
        }
      })
  }, [enabled, cacheKey, loader])

  return { data, status, loading: status === "loading", error }
}