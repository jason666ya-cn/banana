# Supabase 社交登录设置指南

本文档详细说明如何在 Next.js 应用中使用 Supabase 实现 GitHub 和 Google OAuth 认证。

## 前置条件

- Next.js 16+ 应用
- Supabase 项目
- GitHub 账户
- Google Cloud 账户

## 1. GitHub OAuth 应用配置

1. 登录 GitHub，前往 Settings > Developer settings > OAuth Apps
2. 点击 "New OAuth App"
3. 填写应用信息：
   - **Application name**: 你的应用名称
   - **Homepage URL**: `http://localhost:3000`（开发环境）
   - **Authorization callback URL**: `https://your-project.supabase.co/auth/v1/callback`
4. 创建应用后，保存 Client ID 和 Client Secret

## 2. Google OAuth 应用配置

1. 登录 Google Cloud Console (https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 Google+ API (已废弃，现在使用 Google Identity API)
4. 前往 "APIs & Services" > "Credentials"
5. 点击 "Create Credentials" > "OAuth 2.0 Client IDs"
6. 选择应用类型为 "Web application"
7. 设置授权的重定向 URI：
   - `https://your-project.supabase.co/auth/v1/callback`
   - `http://localhost:3000/auth/callback` (开发环境)
8. 创建后保存 Client ID 和 Client Secret

## 3. Supabase 配置

1. 登录 Supabase 控制台
2. 前往 Authentication > Providers
3. 启用 GitHub 提供程序
4. 填入 GitHub OAuth 应用的 Client ID 和 Client Secret
5. 启用 Google 提供程序
6. 填入 Google OAuth 应用的 Client ID 和 Client Secret
7. 保存配置

## 4. 环境变量配置

创建 `.env.local` 文件：

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

这些值可以在 Supabase 项目的 Settings > API 中找到。

## 5. 安装依赖

```bash
npm install @supabase/supabase-js @supabase/ssr
```

## 6. 项目文件结构

```
├── lib/supabase/
│   ├── client.ts          # 客户端 Supabase 配置
│   └── server.ts          # 服务器端 Supabase 配置
├── app/auth/
│   ├── login/route.ts     # GitHub 登录 API 路由
│   ├── google/route.ts    # Google 登录 API 路由
│   ├── logout/route.ts    # 登出 API 路由
│   ├── callback/route.ts  # OAuth 回调处理
│   └── demo/page.tsx      # 认证演示页面
├── components/auth/
│   ├── social-auth.tsx    # 社交登录组件
│   └── user-profile.tsx   # 用户资料组件
├── hooks/
│   └── use-auth.ts        # 认证状态钩子
└── middleware.ts          # Next.js 中间件（会话刷新）
```

## 7. 核心功能

### 客户端认证状态管理
- 使用 `useAuth()` 钩子获取用户状态
- 自动处理认证状态变化
- 支持加载状态和错误处理

### 服务器端会话管理
- 中间件自动刷新用户会话
- 安全的 Cookie 处理
- 支持服务器端渲染 (SSR)

### GitHub 和 Google OAuth 流程
1. 用户点击登录按钮
2. 重定向到 GitHub 认证页面
3. GitHub 回调到 Supabase
4. Supabase 重定向回应用
5. 自动获取用户信息并设置会话

## 8. 使用示例

### 登录按钮
```tsx
import { GitHubLoginButton, GoogleLoginButton } from '@/components/auth/social-auth'

export default function LoginPage() {
  return (
    <div>
      <h1>登录</h1>
      <GitHubLoginButton />
      <GoogleLoginButton />
    </div>
  )
}
```

### 检查认证状态
```tsx
import { useAuth } from '@/hooks/use-auth'

export default function ProtectedPage() {
  const { user, loading, isAuthenticated } = useAuth()

  if (loading) return <div>加载中...</div>
  if (!isAuthenticated) return <div>请先登录</div>

  return <div>欢迎，{user.email}!</div>
}
```

### 服务器端认证检查
```tsx
import { createClient } from '@/lib/supabase/server'

export default async function ServerPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return <div>未授权访问</div>
  }

  return <div>服务器端用户：{user.email}</div>
}
```

## 9. 安全最佳实践

1. **使用 getUser() 而不是 getSession()** 用于身份验证检查
2. **在中间件中启用自动会话刷新**
3. **确保环境变量安全** - 不要将敏感信息提交到版本控制
4. **使用 HTTPS** 在生产环境中
5. **定期更新依赖包** 以获得安全补丁

## 10. 常见问题

### Q: 回调 URL 404 错误
A: 确保 GitHub 和 Google OAuth 应用中的回调 URL 都设置为 Supabase 的认证端点：
`https://your-project.supabase.co/auth/v1/callback`

### Q: 认证后无法获取用户信息
A: 检查环境变量是否正确配置，并确保 Supabase 项目中的 GitHub 和 Google 提供程序都已启用。

### Q: 中间件不工作
A: 确保 `middleware.ts` 文件在项目根目录，并检查 `config.matcher` 配置。

## 11. 演示页面

访问 `/auth/demo` 查看完整的认证功能演示，包括：
- GitHub 和 Google 登录/登出
- 用户资料显示
- 认证状态管理

## 支持

如果遇到问题，请检查：
1. Supabase 控制台的日志
2. 浏览器开发者工具
3. Next.js 开发服务器控制台

更多信息请参考：
- [Supabase 认证文档](https://supabase.com/docs/guides/auth)
- [Next.js 中间件文档](https://nextjs.org/docs/advanced-features/middleware)