import { SignInButton, GitHubLoginButton, GoogleLoginButton } from '@/components/auth/social-auth'
import { UserProfile } from '@/components/auth/user-profile'

export default function AuthDemo() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              社交登录演示
            </h1>
            <p className="text-lg text-muted-foreground">
              使用 Supabase 实现的 GitHub 和 Google OAuth 服务器端认证
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">统一登录入口</h2>
              <div className="space-y-4 p-6 border border-border rounded-lg">
                <div>
                  <h3 className="text-lg font-medium mb-3">推荐方式</h3>
                  <SignInButton />
                  <p className="text-sm text-muted-foreground mt-2">
                    点击后选择您偏好的登录方式
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">独立登录选项</h3>
                <div className="space-y-3 p-6 border border-border rounded-lg">
                  <GitHubLoginButton />
                  <GoogleLoginButton />
                  <p className="text-sm text-muted-foreground">
                    也可以直接选择特定的登录方式
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <h3 className="font-medium">功能特性:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>统一的登录入口设计</li>
                  <li>支持 GitHub 和 Google OAuth</li>
                  <li>优雅的下拉菜单选择</li>
                  <li>服务器端 OAuth 处理</li>
                  <li>安全的会话管理</li>
                  <li>自动用户信息同步</li>
                  <li>响应式UI设计</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">用户资料</h2>
              <UserProfile />
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">配置说明</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">GitHub OAuth 配置:</h4>
                <p>1. 在 GitHub 创建 OAuth App</p>
                <p>2. 在 Supabase 控制台配置 GitHub 提供程序</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Google OAuth 配置:</h4>
                <p>1. 在 Google Cloud Console 创建 OAuth 2.0 凭据</p>
                <p>2. 在 Supabase 控制台配置 Google 提供程序</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">通用配置:</h4>
                <p>3. 设置环境变量：NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY</p>
                <p>4. 认证回调URL：http://localhost:3000/auth/callback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}