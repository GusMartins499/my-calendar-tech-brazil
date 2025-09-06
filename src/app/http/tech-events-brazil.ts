import type { Filters, TechEvent, TechEventsBrazilApiResponse } from '@/@types/tech-events-brazil-api-response';
import { getCurrentTechEvents } from '@/utils/get-current-events';

export async function fetchTechEvents(filters: Filters) {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/agenda-tech-brasil/agenda-tech-brasil/main/src/db/database.json',
    );
    const techEvents = (await response.json()) as TechEventsBrazilApiResponse;

    const currentEvents: TechEvent[] = getCurrentTechEvents(techEvents.eventos, filters);

    return {
      events: currentEvents,
    };
  } catch (_error) {
    return {
      events: [],
    };
  }
}
