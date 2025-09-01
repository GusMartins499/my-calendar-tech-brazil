import { CalendarPlus } from 'lucide-react';
import type { TechEvent } from '@/@types/tech-events-brazil-api-response';
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
  return (
    <Card data-testid="tech-event-card">
      <CardHeader data-testid="tech-event-card-header">
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
        className="justify-between"
        data-testid="tech-event-card-footer"
      >
        <Button asChild>
          <a href={event.url} rel="noreferrer" target="_blank">
            Página oficial do evento
          </a>
        </Button>
        <Button data-testid="tech-event-card-action">
          <CalendarPlus />
          Adicionar a minha agenda
        </Button>
      </CardFooter>
    </Card>
  );
}
