import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  casing: "snake_case",
  schema: "./src/db/schema/**.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.DB_FILE_NAME ?? 'file:local.db'
  },
});
