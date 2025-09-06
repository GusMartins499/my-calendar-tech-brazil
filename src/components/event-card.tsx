import { CalendarPlus } from 'lucide-react';
import { toast } from 'sonner';
import type { TechEvent } from '@/@types/tech-events-brazil-api-response';
import { authClient } from '@/app/lib/better-auth-client';
import { HTTP_STATUS_ERROR } from '@/utils/constants';
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
  const { useSession } = authClient;
  const session = useSession();

  const handleSchedule = async () => {
    if (!session.data) {
      return toast.warning('Se conecte com Google');
    }
    try {
      const accessToken = await authClient.getAccessToken({
        userId: session.data.user.id,
        providerId: 'google',
      });
      const responseSchedule = await fetch('/api/schedule', {
        method: 'POST',
        body: JSON.stringify({ token: accessToken.data?.accessToken, event }),
      });

      if (responseSchedule.status === HTTP_STATUS_ERROR) {
        toast.error('Não foi possível adicionar o evento na agenda');
      }

      toast.success('Evento adicionado');
    } catch (_error) {
      toast.error('Não foi possível adicionar o evento na agenda');
    }
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
          disabled={session.data?.user === null}
          onClick={handleSchedule}
        >
          <CalendarPlus />
          Adicionar a minha agenda
        </Button>
      </CardFooter>
    </Card>
  );
}
