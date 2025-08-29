const currentYear = new Date().getFullYear();

export function mapEventDays(days: string[], month: string) {
  const isSingleDay = days.length === 1;
  if (isSingleDay) {
    return `Dia ${days[0]} de ${month} de ${currentYear}`;
  }
  return `Dias ${days.join(',')} de ${month} de ${currentYear}`;
}
