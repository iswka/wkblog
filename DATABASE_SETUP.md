# PostgreSQL 数据库配置

## 环境配置

1. 确保您已经安装了 PostgreSQL 数据库
2. 创建一个新的数据库
3. 更新 `.env` 文件中的 `DATABASE_URL`：

```env
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name?schema=public"
```

## 数据库迁移

### 首次设置
```bash
# 推送 schema 到数据库（用于开发）
npm run db:push

# 或者创建并运行迁移（用于生产）
npm run db:migrate
```

### 常用命令
```bash
# 生成 Prisma 客户端
npm run db:generate

# 推送 schema 变更到数据库
npm run db:push

# 创建新的迁移
npm run db:migrate

# 打开 Prisma Studio（数据库 GUI）
npm run db:studio

# 重置数据库
npm run db:reset
```

## 使用示例

### 在 API 路由中使用：
```typescript
import { prisma } from '@/lib/prisma'

export async function GET() {
  const users = await prisma.user.findMany()
  return Response.json(users)
}
```

### 在 Server Components 中使用：
```typescript
import { prisma } from '@/lib/prisma'

async function UserList() {
  const users = await prisma.user.findMany()
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

## 测试连接

访问 `/api/test-db` 来测试数据库连接是否正常工作。

## 注意事项

1. 不要将 `.env` 文件提交到版本控制
2. 在生产环境中使用连接池
3. 定期备份数据库
4. 使用环境变量管理不同环境的配置
