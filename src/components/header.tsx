import { AuthSession } from '@/components/auth-session';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 xl:px-4">
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold text-lg">Agenda Tech Brasil 🇧🇷</h1>
        </div>
        <div className="flex items-center space-x-4">
          <AuthSession />
        </div>
      </div>
    </header>
  );
}
