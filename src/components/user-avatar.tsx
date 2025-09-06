'use client';

import { use } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type SessionPromiseResponse = {
  data: {
    user: {
      id: string;
      email: string;
      emailVerified: boolean;
      name: string;
      createdAt: Date;
      updatedAt: Date;
      image?: string | null | undefined;
    };
    session: {
      id: string;
      userId: string;
      expiresAt: Date;
      createdAt: Date;
      updatedAt: Date;
      token: string;
      ipAddress?: string | null | undefined;
      userAgent?: string | null | undefined;
    };
  };
};

export function UserAvatar({
  sessionPromise,
}: {
  sessionPromise: Promise<SessionPromiseResponse>;
}) {
  const session = use(sessionPromise);

  return (
    <>
      <Avatar>
        <AvatarImage
          alt="Usuário Google"
          src={session?.data?.user.image ?? ''}
        />
        <AvatarFallback>{session?.data?.user?.name}</AvatarFallback>
      </Avatar>
      <span>{session?.data?.user?.name}</span>
    </>
  );
}
