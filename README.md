<div>
    <h1 align='center'>
        My calendar tech Brazil
        <img alt="pin" src="./src/app/icon.png" width='24' height='24' />
    </h1>
</div>

Welcome to My Calendar Tech Brazil! This is a web application that allows you to browse and filter technology events happening in Brazil.

## 🙏 Acknowledgements

*   [Tech Events Brazil](https://github.com/agenda-tech-brasil/agenda-tech-brasil) for providing a repository for all scheduled events.
*   [Tech Events Brazil API](https://raw.githubusercontent.com/agenda-tech-brasil/agenda-tech-brasil/main/src/db/database.json) for providing the event data.

## ✅ To-do
- [ ] Finish RTL tests
- [ ] E2E tests
- [ ] Refresh token

## ✨ Features

*   Browse a list of upcoming tech events.
*   Filter events by month.
*   User authentication to add events in your personal Google calendar.

## 🚀 Technologies

This project is built with the following technologies:

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Database:** [SQLITE](https://sqlite.org/) with [Drizzle ORM](https://orm.drizzle.team/)
*   **Authentication:** [Better-auth](https://www.better-auth.com/)
*   **Testing:** [Vitest](https://vitest.dev/) and [Testing library](https://testing-library.com/)
*   **Linting & Formatting:** [Biome](https://biomejs.dev/)
*   **Containerization:** [Docker](https://www.docker.com/)

## 💻 Getting Started

You can follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v20 or higher)
*   [pnpm](https://pnpm.io/) (optional)
    > If you are using yarn or npm, maybe you will need to manage the Docker files
*   [Docker](https://www.docker.com/) (optional, for containerized development)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/GusMartins499/my-calendar-tech-brazil.git
    cd my-calendar-tech-brazil
    ```

2.  Install the dependencies:

    ```bash
    pnpm install
    ```
    ```bash
    yarn install
    ```
    ```bash
    npm install
    ```

3.  Set up your environment variables by creating a `.env` file in the project's root.
    ```bash
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    BETTER_AUTH_SECRET=
    BETTER_AUTH_URL=http://localhost:3000
    DB_FILE_NAME=file:local.db
    NEXT_PUBLIC_GOOGLE_SCOPE="https://www.googleapis.com/auth/calendar"
    ```

### Google Cloud Platform Setup

To use the Google Calendar integration, you need to set up a project on the Google Cloud Platform and enable the Google Calendar API.

1.  **Create a new project:**
    *   Go to the [Google Cloud Console](https://console.cloud.google.com/).
    *   Click on the project dropdown in the top navigation bar and select "New Project".
    *   Give your project a name and click "Create".

2.  **Enable the Google Calendar API:**
    *   In the navigation menu, go to "APIs & Services" > "Library".
    *   Search for "Google Calendar API" and enable it for your project.

3.  **Create OAuth 2.0 Client ID:**
    *   In the navigation menu, go to "APIs & Services" > "Credentials".
    *   Click on "Create Credentials" and select "OAuth 2.0 Client ID".
    *   Choose "Web application" as the application type.
    *   Add `http://localhost:3000` to the "Authorized JavaScript origins".
    *   Add `http://localhost:3000/api/auth/google/callback` to the "Authorized redirect URIs".
    *   Click "Create".

4.  **Get your credentials:**
    *   After creating the credentials, you will see your "Client ID" and "Client Secret".
    *   Copy these values and add them to your `.env` file as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

### Running the Development Server

To start the development server, run the following command:

```bash
pnpm dev
```
```bash
npm run dev
```
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run the following scripts:

*   `pnpm dev`: Runs the app in development mode.
*   `pnpm build`: Builds the app for production.
*   `pnpm start`: Starts the production server.
*   `pnpm lint`: Checks the code for linting errors.
*   `pnpm format`: Formats the code.
*   `pnpm test:rtl`: Runs the tests.
*   `pnpm test:rtl:ui`: Runs the tests with a UI.

## 🐳 Docker

This project includes a `Dockerfile` and `docker-compose.yml` for containerized development. To run the project with Docker, use the following commands:

```bash
docker-compose build
docker-compose up -d
docker-compose up -d --build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
