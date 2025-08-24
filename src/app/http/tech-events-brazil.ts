import type { TechEventsBrazilApiResponse } from '@/@types/tech-events-brazil-api-response';
import { getCurrentTechEvents } from '@/utils/get-current-events';

export async function useTechEvents() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/agenda-tech-brasil/agenda-tech-brasil/main/src/db/database.json'
    );
    const techEvents: TechEventsBrazilApiResponse = await response.json();

    const currentEvents = getCurrentTechEvents(techEvents.eventos)

    return {
      events: currentEvents,
      tba: techEvents.tba
    }
  } catch (_error) {
    return {
      events: [],
      tba: []
    }
  }
}
