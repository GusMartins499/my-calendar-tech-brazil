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
    <Card>
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription>{event.eventDays}</CardDescription>
        {event.type ? (
          <CardAction>
            <Badge variant={event.badge}>{event.type}</Badge>
          </CardAction>
        ) : null}
      </CardHeader>
      <CardFooter className="justify-between">
        <Button asChild>
          <a href={event.url} rel="noreferrer" target="_blank">
            Página oficial do evento
          </a>
        </Button>
        <Button>
          <CalendarPlus />
          Adicionar a minha agenda
        </Button>
      </CardFooter>
    </Card>
  );
}
