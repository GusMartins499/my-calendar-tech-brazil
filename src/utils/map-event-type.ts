import type { BadgeVariant, EventType } from '@/@types/tech-events-brazil-api-response';

export function mapEventType(type: EventType | undefined): BadgeVariant {
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
