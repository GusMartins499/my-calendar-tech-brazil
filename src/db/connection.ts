import 'dotenv/config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from '@/db/schema/auth-schema'

const client = createClient({ url: process.env.DB_FILE_NAME ?? 'file:local.db' });

export const db = drizzle({ client, schema });
