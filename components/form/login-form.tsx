import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">邮箱</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">密码</Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              忘记密码?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="flex flex-col gap-3">
          <Button type="submit" className="w-full">
            登录
          </Button>
          <Button variant="outline" className="w-full">
            使用 Google 登录
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center text-sm">
        没有账号?{" "}
        <a href="#" className="underline underline-offset-4">
          注册
        </a>
      </div>
    </form>
  );
}
