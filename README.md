# My Calendar Tech Brazil

Welcome to My Calendar Tech Brazil! This is a web application that allows you to browse and filter technology events happening in Brazil.

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

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v20 or higher)
*   [pnpm](https://pnpm.io/) (optional)
    > If you are using yarn or npm, maybe you will need to managed the docker files
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

3.  Set up your environment variables by creating a `.env` file in the root of the project.
    ```bash
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    BETTER_AUTH_SECRET=
    BETTER_AUTH_URL=http://localhost:3000
    DB_FILE_NAME=file:local.db
    NEXT_PUBLIC_GOOGLE_SCOPE="https://www.googleapis.com/auth/calendar"
    ```

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

## 🙏 Acknowledgements

*   [Tech Events Brazil API](https://raw.githubusercontent.com/agenda-tech-brasil/agenda-tech-brasil/main/src/db/database.json) for providing the event data.