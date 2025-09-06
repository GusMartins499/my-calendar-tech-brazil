import dayjs from "dayjs";

const currentYear = new Date().getFullYear();

type SchemaEventDateTime = {
  start: {
    date?: string | null;
    dateTime?: string | null;
    timeZone?: string | null;
  },
  end: {
    date?: string | null;
    dateTime?: string | null;
    timeZone?: string | null;
  }
}

export function mapEventDays(days: string[], month: string) {
  const isSingleDay = days.length === 1;
  if (isSingleDay) {
    return `Dia ${days[0]} de ${month} de ${currentYear}`;
  }
  return `Dias ${days.join(',')} de ${month} de ${currentYear}`;
}

export function formatEventToSchedule(days: string[], month: string): SchemaEventDateTime {
  const isSingleDay = days.length === 1;
  if (isSingleDay) {
    const [day] = days
    const schedulingDate = dayjs(`${currentYear}-${month}-${day}`).format('YYYY-MM-DD')

    return {
      start: {
        date: schedulingDate
      },
      end: {
        date: schedulingDate
      }
    }
  }
  const firstDay = days.at(0)
  const lastDay = days.at(-1)
  const schedulingStartDate = dayjs(`${currentYear}-${month}-${firstDay}`).format('YYYY-MM-DD')
  const schedulingEndDate = dayjs(`${currentYear}-${month}-${lastDay}`).format('YYYY-MM-DD')

  return {
    start: {
      date: schedulingStartDate
    },
    end: {
      date: schedulingEndDate
    }
  }
}