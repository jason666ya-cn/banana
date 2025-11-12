export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            认证失败
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            GitHub 认证过程中发生错误。请重试。
          </p>
        </div>
        <div>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}