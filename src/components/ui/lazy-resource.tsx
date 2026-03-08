import React from "react"
import { useLazyResource } from "@/hooks/use-lazy-resource"

type Props<T> = {
	enabled?: boolean
	cacheKey: string
	loader: () => Promise<T>
	fallback?: React.ReactNode
	children: (data: T) => React.ReactNode
	onError?: (e: unknown) => React.ReactNode
}

export default function LazyResource<T>({
	enabled = true,
	cacheKey,
	loader,
	fallback = null,
	children,
	onError,
}: Props<T>) {
	const { data, loading, error } = useLazyResource<T>(loader, { enabled, cacheKey })

	if (loading || data == null) return fallback
	if (error) return onError ? onError(error) : null

	return <>{children(data)}</>
}
