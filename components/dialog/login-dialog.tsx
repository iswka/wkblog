"use client"

import DialogBase from "./core/dialog-base";
import LoginForm from "../form/login-form";
import { ReactNode, useState } from "react";
import RegisterForm from "../form/register-form";

interface LoginDialogProps {  
  trigger: ReactNode;
}

export default function LoginDialog({ trigger }: LoginDialogProps) {
  const [open, setOpen] = useState(false);

  const handleLoginSuccess = () => {
    setOpen(false);
  };

  return (
    <DialogBase 
      title="登录到你的账号" 
      description="输入你的邮箱来登录你的账号" 
      contentClassName="w-[400px]" 
      trigger={trigger}
      open={open}
      onOpenChange={setOpen}
    >
      {/* <LoginForm onSuccess={handleLoginSuccess} /> */}
      <RegisterForm />
    </DialogBase>
  );
} 