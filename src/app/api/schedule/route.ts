import { google } from 'googleapis';
import { type NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    )

    auth.setCredentials({
      access_token: body.token
    })

    const calendar = google.calendar({
      version: 'v3',
      auth
    })

    await calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      requestBody: {
        summary: 'Summary',
        description: 'descrição',
        start: {
          dateTime: '2025-09-02T22:00:00-03:00'
        },
        end: {
          dateTime: '2025-09-02T23:00:00-03:00'
        }
      },
    })

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
