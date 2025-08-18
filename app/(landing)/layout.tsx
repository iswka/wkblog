import HeaderMenu from "./(components)/header-menu";
import UserAvatar from "./(components)/user-avatar";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 sticky top-0 bg-background z-50">
      <div className="flex items-center gap-10">
        <h1 className="font-bold">WK&apos;s Blog</h1>
        <HeaderMenu/>
      </div>
      <UserAvatar/>
    </header>
  );
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (  
    <div>
      <Header />
      {children}
    </div>
  );
}