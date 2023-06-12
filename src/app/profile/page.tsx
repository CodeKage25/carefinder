'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../../context/AuthUserContext'
const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth()
  const router = useRouter()
  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/')
  }, [authUser, loading, router])

  return <div>Great</div>
}

export default LoggedIn
