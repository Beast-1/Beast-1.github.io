import { useEffect, useState } from 'react'
import { GITHUB_USERNAME } from '../data/portfolio'

const CACHE_KEY = `github-stats-${GITHUB_USERNAME}`
const CACHE_TTL = 60 * 60 * 1000 // 1 hour

export function useGithubStats() {
  const [publicRepos, setPublicRepos] = useState(null)

  useEffect(() => {
    let cancelled = false

    const cached = readCache()
    if (cached !== null) {
      setPublicRepos(cached)
      return
    }

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data || typeof data.public_repos !== 'number') return
        setPublicRepos(data.public_repos)
        writeCache(data.public_repos)
      })
      .catch(() => {
        // Network/rate-limit failure — fail silently, no error state shown to visitors
      })

    return () => {
      cancelled = true
    }
  }, [])

  return publicRepos
}

function readCache() {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { value, timestamp } = JSON.parse(raw)
    if (Date.now() - timestamp > CACHE_TTL) return null
    return value
  } catch {
    return null
  }
}

function writeCache(value) {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify({ value, timestamp: Date.now() }))
  } catch {
    // localStorage unavailable — ignore, not critical
  }
}
