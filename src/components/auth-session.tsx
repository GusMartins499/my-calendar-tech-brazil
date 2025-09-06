'use client';

import { LogOut, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { authClient } from '@/app/lib/better-auth-client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function AuthSession() {
  const { useSession, signOut } = authClient;
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (session.data || session.error) {
      setIsLoading(false);
    }
    if (session.data === null && session.error === null) {
      setIsLoading(false);
    }
  }, [session.data, session.error]);

  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google',
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
    );
  }

  if (session.data) {
    return (
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Avatar className="size-8">
            <AvatarImage
              alt={session.data.user.name || 'Usuário'}
              src={session.data.user.image || ''}
            />
            <AvatarFallback>
              <User className="size-4" />
            </AvatarFallback>
          </Avatar>
          <span className="hidden font-medium text-sm sm:inline-block">
            {session.data.user.name}
          </span>
        </div>
        <Button
          className="flex items-center space-x-1"
          onClick={handleSignOut}
          size="sm"
          variant="outline"
        >
          <LogOut className="size-4" />
          <span className="hidden sm:inline">Sair</span>
        </Button>
      </div>
    );
  }

  return (
    <Button className="flex items-center space-x-2" onClick={handleSignIn}>
      <User className="size-4" />
      <span>Conectar com Google</span>
    </Button>
  );
}
