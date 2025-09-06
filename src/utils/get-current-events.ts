import type {
  EventDetails,
  Filters,
  Month,
  TechEvent,
  YearlyEvent,
} from '@/@types/tech-events-brazil-api-response';
import { mapEventDays } from './map-event-days';
import { mapEventType } from './map-event-type';
import { MONTH_LABEL_TO_NUMBER } from './map-month-number';
import { toCapitalize } from './to-capitalize';

const currentYear = new Date().getFullYear();

function mappedEvents(eventDetails: EventDetails, month: Month) {
  return {
    name: eventDetails.nome,
    city: eventDetails.cidade,
    uf: eventDetails.uf,
    url: eventDetails.url,
    eventDays: mapEventDays(eventDetails.data, toCapitalize(month)),
    eventDate: eventDetails.data,
    type: toCapitalize(eventDetails.tipo ?? ''),
    badge: mapEventType(eventDetails.tipo),
    month: toCapitalize(month),
    monthNumber: MONTH_LABEL_TO_NUMBER[month],
  };
}

export function filterCurrentTechEvents(currentEvents: TechEvent[], filters: Filters) {
  const { month } = filters

  const filteredEvents = currentEvents.filter((event) => event.monthNumber === month)

  return filteredEvents
}

export function getCurrentTechEvents(events: YearlyEvent[], filters: Filters) {
  const currentEvents = events
    .filter((event) => event.ano === currentYear)
    .flatMap((yearEvent) => yearEvent.meses.filter((month) => !month.arquivado))
    .flatMap((monthlyEvent) =>
      monthlyEvent.eventos.map((event) => mappedEvents(event, monthlyEvent.mes))
    )
    .filter((event) => event.monthNumber === filters.month)

  return currentEvents;
}
