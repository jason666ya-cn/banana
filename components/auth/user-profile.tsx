'use client'

import { LogoutButton } from '@/components/auth/social-auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/hooks/use-auth'

export function UserProfile() {
  const { user, loading, isAuthenticated } = useAuth()

  if (loading) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!isAuthenticated) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>未登录</CardTitle>
          <CardDescription>请先登录以查看用户信息</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>用户资料</CardTitle>
        <CardDescription>您的GitHub账户信息</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              src={user.user_metadata?.avatar_url}
              alt={user.user_metadata?.full_name || user.email}
            />
            <AvatarFallback>
              {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">
              {user.user_metadata?.full_name || '未知用户'}
            </p>
            <p className="text-xs text-muted-foreground">
              @{user.user_metadata?.user_name || user.email}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <div>
            <span className="font-medium">邮箱:</span> {user.email}
          </div>
          {user.user_metadata?.company && (
            <div>
              <span className="font-medium">公司:</span> {user.user_metadata.company}
            </div>
          )}
          {user.user_metadata?.location && (
            <div>
              <span className="font-medium">位置:</span> {user.user_metadata.location}
            </div>
          )}
        </div>

        <div className="pt-4">
          <LogoutButton />
        </div>
      </CardContent>
    </Card>
  )
}