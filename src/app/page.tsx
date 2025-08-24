import { CalendarPlus } from 'lucide-react';
import { Suspense } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useTechEvents } from './http/tech-events-brazil';

export default async function Home() {
  const { events } = await useTechEvents();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Suspense fallback={<p>Loading ...</p>}>
        {events.map((event) => (
          <Card key={event.id}>
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
        ))}
      </Suspense>
    </div>
  );
}
