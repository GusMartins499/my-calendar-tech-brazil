import { CalendarPlus } from 'lucide-react';
import type { TechEvent } from '@/@types/tech-events-brazil-api-response';
import { authClient } from '@/app/lib/auth-client';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type EventCardProps = {
  event: TechEvent;
};

export function EventCard({ event }: EventCardProps) {
  const { signIn, useSession, getAccessToken } = authClient;
  const session = useSession();

  const handleSignIn = async () => {
    const userId = session.data?.user.id;
    if (userId) {
      const accessToken = await getAccessToken({
        userId: 'c5sfgp2rdrQsCxQzWnGfc47vT8QbqqhF',
        providerId: 'google',
      });
      return await fetch('/api/schedule', {
        method: 'POST',
        body: JSON.stringify({ token: accessToken.data?.accessToken }),
      });
    }
    await signIn.social({
      provider: 'google',
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
  };

  return (
    <Card data-testid="tech-event-card">
      <CardHeader
        className="flex flex-col xl:grid"
        data-testid="tech-event-card-header"
      >
        <CardTitle data-testid="tech-event-card-title">{event.name}</CardTitle>
        <CardDescription data-testid="tech-event-card-description">
          {event.eventDays}
        </CardDescription>
        {event.type ? (
          <CardAction
            aria-roledescription="badge"
            data-testid="tech-event-card-badge"
          >
            <Badge variant={event.badge}>{event.type}</Badge>
          </CardAction>
        ) : null}
      </CardHeader>
      <CardFooter
        className="flex-col gap-2 lg:justify-between xl:flex-row"
        data-testid="tech-event-card-footer"
      >
        <Button asChild className="w-full xl:w-auto">
          <a href={event.url} rel="noreferrer" target="_blank">
            Página oficial do evento
          </a>
        </Button>
        <Button
          className="w-full cursor-pointer xl:w-auto"
          data-testid="tech-event-card-action"
          onClick={handleSignIn}
        >
          <CalendarPlus />
          Adicionar a minha agenda
        </Button>
      </CardFooter>
    </Card>
  );
}
