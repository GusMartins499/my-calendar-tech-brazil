import { Suspense } from 'react';
import { EventsList } from '@/components/event-list';
import { Filters } from '@/components/filter';
import { CURRENT_MONTH } from '@/utils/map-month-number';
import { fetchTechEvents } from './http/tech-events-brazil';
import Loading from './loading';

export default async function Home() {
  const { events } = await fetchTechEvents({ month: CURRENT_MONTH });

  return (
    <div className="container mx-auto flex flex-col">
      <Filters />
      <Suspense fallback={<Loading />}>
        <EventsList initialEvents={events} />
      </Suspense>
    </div>
  );
}
