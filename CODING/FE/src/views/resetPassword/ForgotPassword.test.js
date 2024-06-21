import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

global.fetch = jest.fn();

describe('Forgot Password Form Validation', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('T13: User must be able to request a password reset with a valid email', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'SUCCESS' }),
      })
    );

    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'valid@example.com' } });
    fireEvent.click(screen.getByText('Send Email'));

    await waitFor(() => {
      expect(screen.getByText('An email reset password was sent. Please check your email!!!')).toBeInTheDocument();
    });
  });

  test('T14: Handle invalid email during password reset request', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'ERROR' }),
      })
    );

    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'invalid@example.com' } });
    fireEvent.click(screen.getByText('Send Email'));

    await waitFor(() => {
      expect(screen.getByText('Email has not been registered or invalid')).toBeInTheDocument();
    });
  });
});
