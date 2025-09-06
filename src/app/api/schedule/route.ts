import { google } from 'googleapis';
import { type NextRequest, NextResponse } from 'next/server';
import type { TechEvent } from '@/@types/tech-events-brazil-api-response';
import { formatEventToSchedule } from '@/utils/map-event-days';

type RequestBody = {
  token: string;
  event: TechEvent;
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json() as RequestBody;

    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    auth.setCredentials({
      access_token: body.token
    });

    const { start: schedulingStartDate, end: schedulingEndDate } = formatEventToSchedule(body.event.eventDate, body.event.monthNumber)
    const event = body.event

    const calendar = google.calendar({
      version: 'v3',
      auth,
    });

    await calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      requestBody: {
        summary: event.name,
        description: event.url ? `Página oficial do evento: ${event.url}` : '',
        start: {
          ...schedulingStartDate
        },
        end: {
          ...schedulingEndDate
        },
      },
    });

    return NextResponse.json(
      { message: 'Schedule successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Schedule unsuccessful', details: error },
      { status: 500 }
    );
  }
};
