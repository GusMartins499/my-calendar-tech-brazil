import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, type Mock, test, vi } from 'vitest';
import { authClient } from '@/app/lib/better-auth-client';
import { AuthSession } from './auth-session';

vi.mock('@/app/lib/better-auth-client', () => ({
  authClient: {
    useSession: vi.fn(),
    signIn: {
      social: vi.fn(),
    },
    signOut: vi.fn(),
  },
}));

describe('Auth-session', () => {
  test('Should render loading state initially', () => {
    (authClient.useSession as Mock).mockReturnValue({
      data: undefined,
      error: undefined,
    });
    render(<AuthSession />);

    expect(screen.getByTestId('avatar-loading')).toBeInTheDocument();
  });

  test('Should render sign in button when not authenticated', () => {
    (authClient.useSession as Mock).mockReturnValue({
      data: null,
      error: null,
    });
    render(<AuthSession />);

    expect(
      screen.getByRole('button', { name: /conectar com google/i })
    ).toBeInTheDocument();
  });

  test('Should render user information and sign out button when authenticated', () => {
    const sessionData = {
      user: {
        name: 'John Doe',
        image: 'https://example.com/avatar.jpg',
      },
    };
    (authClient.useSession as Mock).mockReturnValue({
      data: sessionData,
      error: null,
    });
    render(<AuthSession />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByTestId('avatar-fallback')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument();
  });

  test('Should call signIn when sign in button is clicked', async () => {
    (authClient.useSession as Mock).mockReturnValue({
      data: null,
      error: null,
    });
    render(<AuthSession />);

    const signInButton = await screen.findByRole('button', {
      name: /conectar com google/i,
    });
    fireEvent.click(signInButton);

    expect(authClient.signIn.social).toHaveBeenCalledWith({
      provider: 'google',
      scopes: [process.env.NEXT_PUBLIC_GOOGLE_SCOPE ?? ''],
    });
  });

  test('Should call signOut when sign out button is clicked', async () => {
    const sessionData = {
      user: {
        name: 'John Doe',
        image: 'https://example.com/avatar.jpg',
      },
    };
    (authClient.useSession as Mock).mockReturnValue({
      data: sessionData,
      error: null,
    });
    render(<AuthSession />);

    const signOutButton = await screen.findByRole('button', { name: /sair/i });
    fireEvent.click(signOutButton);

    expect(authClient.signOut).toHaveBeenCalled();
  });
});
