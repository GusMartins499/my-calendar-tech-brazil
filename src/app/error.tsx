'use client';

export default function ErrorFallback({ error }: { error: Error }) {
  return (
    <>
      <h3>Algo deu errado</h3>
      <pre>{error.message}</pre>
    </>
  );
}
