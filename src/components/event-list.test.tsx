import { render, screen, within } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import type { TechEvent } from '@/@types/tech-events-brazil-api-response';
import { EventsList } from './event-list';

const mockEvents: TechEvent[] = [
  {
    name: 'Next.js Conf',
    eventDays: '10 de Setembro de 2025',
    url: 'https://nextjs.org/conf',
    type: 'Online',
    badge: 'online',
    city: '',
    month: 'setembro',
    monthNumber: '9',
    uf: '',
  },
  {
    name: 'Evento React',
    eventDays: '10 de Outubro de 2025',
    url: 'https://react.dev/',
    type: 'Híbrido',
    badge: 'hybrid',
    city: '',
    month: 'outubro',
    monthNumber: '10',
    uf: '',
  },
  {
    name: 'Evento NodeJS',
    eventDays: '10 de Novembro de 2025',
    url: 'https://nodejs.org/pt',
    type: 'Presencial',
    badge: 'onSite',
    city: '',
    month: 'november',
    monthNumber: '10',
    uf: '',
  },
];

const REGEX_OFFICIAL_PAGE_BUTTON_TEXT = /Página oficial do evento/i;

vi.mock('next/navigation', () => {
  return {
    useSearchParams: () => ({
      get: (key: string) => {
        if (key === 'month') return '9';
        return null;
      },
    }),
  };
});

test('Should be able to render a list of events', () => {
  render(<EventsList initialEvents={mockEvents} />);

  expect(screen.getAllByTestId('tech-event-card')).toHaveLength(
    mockEvents.length
  );
});

test('Should be able to render the official page button', () => {
  render(<EventsList initialEvents={mockEvents} />);

  const buttons = screen.getAllByRole('link', {
    name: REGEX_OFFICIAL_PAGE_BUTTON_TEXT,
  });

  expect(buttons).toHaveLength(mockEvents.length);
});

test('Event card buttons should have correct attributes', () => {
  render(<EventsList initialEvents={mockEvents} />);

  const cards = screen.getAllByTestId('tech-event-card');

  for (const card of cards) {
    const link = within(card).getByRole('link', {
      name: REGEX_OFFICIAL_PAGE_BUTTON_TEXT,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', link.getAttribute('href'));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  }
});
