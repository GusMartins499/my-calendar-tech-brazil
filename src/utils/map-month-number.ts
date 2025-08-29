import type { Month } from '@/@types/tech-events-brazil-api-response';

const currentDate = new Date();

const DECEMBER_INDEX = 11
const JANUARY_INDEX = 0

const monthIndexToCorrectNumber = (monthIndex: number) => {
  if (monthIndex === DECEMBER_INDEX) {
    return MONTH_LABEL_TO_NUMBER.dezembro
  }
  if (monthIndex === JANUARY_INDEX) {
    return MONTH_LABEL_TO_NUMBER.janeiro
  }
  const monthNumber = monthIndex + 1

  return String(monthNumber)
}
export const CURRENT_MONTH = monthIndexToCorrectNumber(currentDate.getMonth())

export const MONTH_LABEL_TO_NUMBER: Record<Month, string> = {
  janeiro: '1',
  fevereiro: '2',
  março: '3',
  abril: '4',
  maio: '5',
  junho: '6',
  julho: '7',
  agosto: '8',
  setembro: '9',
  outubro: '10',
  novembro: '11',
  dezembro: '12',
};

export const MONTHS: { label: string; value: number }[] = [
  {
    label: 'Janeiro',
    value: 1,
  },
  {
    label: 'Fevereiro',
    value: 2,
  },
  {
    label: 'Março',
    value: 3,
  },
  {
    label: 'Abril',
    value: 4,
  },
  {
    label: 'Maio',
    value: 5,
  },
  {
    label: 'Junho',
    value: 6,
  },
  {
    label: 'Julho',
    value: 7,
  },
  {
    label: 'Agosto',
    value: 8,
  },
  {
    label: 'Setembro',
    value: 9,
  },
  {
    label: 'Outubro',
    value: 10,
  },
  {
    label: 'Novembro',
    value: 11,
  },
  {
    label: 'Dezembro',
    value: 12,
  },
];
