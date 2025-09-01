import { Suspense } from 'react';
import { EventsList } from '@/components/event-list';
import { Filters } from '@/components/filter';
import { CURRENT_MONTH } from '@/utils/map-month-number';
import { fetchTechEvents } from './http/tech-events-brazil';
import Loading from './loading';

export default async function Home() {
  const { events } = await fetchTechEvents({ month: CURRENT_MONTH });

  return (
    <div className="flex flex-col space-y-2.5 px-6">
      <h1 className="py-2 text-center font-bold text-3xl tracking-tight">
        Eventos Tech
      </h1>
      <p className="text-center font-medium text-xl tracking-tight">
        Descubra os melhores eventos de tecnologia organizados por mês. <br />
        Encontre workshops, palestras e conferências que vão impulsionar sua
        carreira.
      </p>
      <Filters />
      <Suspense fallback={<Loading />}>
        <EventsList initialEvents={events} />
      </Suspense>
    </div>
  );
}
