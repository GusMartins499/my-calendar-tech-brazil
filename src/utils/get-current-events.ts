import { randomUUID } from 'node:crypto';
import type { VariantProps } from 'class-variance-authority';
import type {
  EventDetails,
  EventType,
  Month,
  YearlyEvent,
} from '@/@types/tech-events-brazil-api-response';
import type { badgeVariants } from '@/components/ui/badge';

const currentYear = new Date().getFullYear();

function toCapitalize(str: string) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>;

function mapEventType(type: EventType | undefined): BadgeVariant {
  switch (type) {
    case 'presencial':
      return 'onSite';
    case 'híbrido':
      return 'hybrid';
    case 'online':
      return 'online';
    case 'tba':
      return 'tba';
    default:
      return 'default';
  }
}

function mapEventDays(days: string[], month: string) {
  const isSingleDay = days.length === 1;
  if (isSingleDay) {
    return `Dia ${days[0]} de ${month} de ${currentYear}`;
  }
  return `Dias ${days.join(',')} de ${month} de ${currentYear}`;
}

function mappedEvents(eventDetails: EventDetails, month: Month) {
  return {
    id: randomUUID(),
    name: eventDetails.nome,
    city: eventDetails.cidade,
    uf: eventDetails.uf,
    url: eventDetails.url,
    eventDays: mapEventDays(eventDetails.data, toCapitalize(month)),
    type: toCapitalize(eventDetails.tipo ?? ''),
    badge: mapEventType(eventDetails.tipo),
    month: toCapitalize(month),
  };
}

export function getCurrentTechEvents(events: YearlyEvent[]) {
  const currentEvents = events
    .filter((event) => event.ano === currentYear)
    .flatMap((yearEvent) => yearEvent.meses.filter((month) => !month.arquivado))
    .flatMap((monthlyEvent) =>
      monthlyEvent.eventos.map((event) => mappedEvents(event, monthlyEvent.mes))
    );

  return currentEvents;
}
