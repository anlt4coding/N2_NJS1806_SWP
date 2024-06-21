import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccountList from '../ui_adminDasdboard/AccountList' // Adjust this import according to your actual file structure
import fetchData from '../../util/ApiConnection'
import UserStorage from '../../util/UserStorage';

// Mock fetchData function
jest.mock('../../util/ApiConnection', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock UserStorage function
jest.mock('../../util/UserStorage', () => ({
  getAuthenticatedUser: jest.fn(),
}));

describe('View Account', () => {
  beforeEach(() => {
    // Mock getAuthenticatedUser to return a valid user object with accessToken
    UserStorage.getAuthenticatedUser.mockReturnValue({
      accessToken: 'dummy-token',
    });

    // Mock fetchData implementation
    fetchData.mockImplementation((url, method) => {
      if (method === 'GET' && url === 'http://localhost:8080/api/v1/users') {
        return Promise.resolve({
          payload: [
            {
              id: 1,
              username: 'testuser1',
              email: 'testuser1@example.com',
              profileDetails: 'Profile details here',
              fullName: 'Test User 1',
              phone: '123456789',
              address: '123 Test St',
              birthday: '1990-01-01',
              roleName: 'User',
              status: true,
            },
            {
              id: 2,
              username: 'testuser2',
              email: 'testuser2@example.com',
              profileDetails: 'Profile details here',
              fullName: 'Test User 2',
              phone: '987654321',
              address: '456 Test St',
              birthday: '1992-02-02',
              roleName: 'Admin',
              status: true,
            },
          ],
        });
      }
      return Promise.resolve({ payload: [] });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('Admin có thể xem thông tin tài khoản người dùng (T17)', async () => {
    render(<AccountList />);

    // Đảm bảo dữ liệu được tải và fetchData chỉ được gọi một lần
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));

    // Kiểm tra xem thông tin tài khoản được hiển thị cho người dùng đầu tiên
    expect(screen.getByText('testuser1')).toBeInTheDocument(); // Username
    expect(screen.getByText('testuser1@example.com')).toBeInTheDocument(); // Email
    expect(screen.getByText('123 Test St')).toBeInTheDocument(); // Address

    // Kiểm tra xem thông tin tài khoản được hiển thị cho người dùng thứ hai
    expect(screen.getByText('testuser2')).toBeInTheDocument(); // Username
expect(screen.getByText('testuser2@example.com')).toBeInTheDocument(); // Email
    expect(screen.getByText('456 Test St')).toBeInTheDocument(); // Address
  });

//   test('Thông tin tài khoản bao gồm tên người dùng, email và chi tiết hồ sơ (T18)', async () => {
//     render(<AccountList />);

//     // Đảm bảo dữ liệu được tải và fetchData chỉ được gọi một lần
//     await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));

//     // Kiểm tra xem thông tin tài khoản bao gồm các trường yêu cầu cho người dùng đầu tiên
//     expect(screen.getByText('testuser1')).toBeInTheDocument(); // Tên người dùng
//     expect(screen.getByText('testuser1@example.com')).toBeInTheDocument(); // Email
//     expect(screen.getByText('Profile details here')).toBeInTheDocument(); // Profile details

//     // Kiểm tra xem thông tin tài khoản bao gồm các trường yêu cầu cho người dùng thứ hai
//     expect(screen.getByText('testuser2')).toBeInTheDocument(); // Tên người dùng
//     expect(screen.getByText('testuser2@example.com')).toBeInTheDocument(); // Email
//     expect(screen.getByText('Profile details here')).toBeInTheDocument(); // Profile details
//   });

  test('Thông tin tài khoản phải được lấy từ cơ sở dữ liệu một cách bảo mật (T19)', async () => {
    render(<AccountList />);

    // Đảm bảo fetchData được gọi với các tham số chính xác
    await waitFor(() => expect(fetchData).toHaveBeenCalledWith(
      'http://localhost:8080/api/v1/users',
      'GET',
      null,
      'dummy-token'
    ));

    // Đảm bảo dữ liệu được tải
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1));

    // Xác nhận cuộc gọi bao gồm access token bảo mật
    expect(UserStorage.getAuthenticatedUser).toHaveBeenCalled();
    const user = UserStorage.getAuthenticatedUser();
    expect(user.accessToken).toBe('dummy-token');
  });
});