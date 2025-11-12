'use client'

import { useAuth } from '@/hooks/use-auth'

export default function AuthDebug() {
  const { user, loading, isAuthenticated } = useAuth()

  return (
    <div className="fixed bottom-4 right-4 bg-background border rounded-lg p-4 shadow-lg max-w-sm">
      <h3 className="font-semibold mb-2">Auth Debug</h3>
      <div className="text-xs space-y-1">
        <div>Loading: {loading.toString()}</div>
        <div>Authenticated: {isAuthenticated.toString()}</div>
        <div>User: {user ? 'Yes' : 'No'}</div>
        {user && (
          <div className="space-y-1">
            <div>Email: {user.email || 'N/A'}</div>
            <div>Name: {user.user_metadata?.full_name || 'N/A'}</div>
            <div>Avatar: {user.user_metadata?.avatar_url ? 'Yes' : 'No'}</div>
          </div>
        )}
      </div>
    </div>
  )
}