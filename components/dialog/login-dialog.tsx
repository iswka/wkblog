import DialogBase from "./core/dialog-base";
import LoginForm from "../form/login-form";
import { ReactNode } from "react";

interface LoginDialogProps {  
  trigger: ReactNode;
}

export default function LoginDialog({ trigger }: LoginDialogProps) {
  return (
    <DialogBase title="登录到你的账号" description="输入你的邮箱来登录你的账号" contentClassName="w-[400px]" trigger={trigger}>
      <LoginForm />
    </DialogBase>
  );
} 