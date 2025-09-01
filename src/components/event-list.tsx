'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import type { TechEvent } from '@/@types/tech-events-brazil-api-response';
import { fetchTechEvents } from '@/app/http/tech-events-brazil';
import Loading from '@/app/loading';
import { EventCard } from '@/components/event-card';
import { CURRENT_MONTH } from '@/utils/map-month-number';

type EventsListProps = {
  initialEvents: TechEvent[];
};

export function EventsList({ initialEvents }: EventsListProps) {
  const searchParams = useSearchParams();
  const month = searchParams.get('month') ?? CURRENT_MONTH;

  const [techEvents, setTechEvents] = useState<TechEvent[]>(initialEvents);

  useEffect(() => {
    async function fetchEvents() {
      const { events } = await fetchTechEvents({ month });
      setTechEvents(events);
    }

    if (month !== String(CURRENT_MONTH)) {
      fetchEvents();
    } else {
      setTechEvents(initialEvents);
    }
  }, [month, initialEvents]);

  if (techEvents.length <= 0) {
    return (
      <div className="flex items-center justify-center">
        <p>Eventos antigos não listados</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Suspense fallback={<Loading />}>
        {techEvents.map((event) => (
          <EventCard event={event} key={event.name} />
        ))}
      </Suspense>
    </div>
  );
}
