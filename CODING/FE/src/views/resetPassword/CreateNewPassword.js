import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked } from '@coreui/icons';
import { useNavigate, MemoryRouter } from 'react-router-dom';
import fetchData from '../../util/ApiConnection';

const CreateNewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleCreateNewPassword = (e) => {
    e.preventDefault();

    // Get the current URL
    const url = window.location.href;

    const urlParams = new URLSearchParams(url.split('?')[1]);
    const email = urlParams.get('email');
    const token = urlParams.get('token');

    const data = { email, password, token };

    if (password === confirmPassword) {
      fetchData('http://localhost:8080/api/v1/auth/reset-password', 'POST', data)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'SUCCESS') {
            setMessage('Reset password successfully');
            // Navigate to login page after successful password reset
            navigate('/');
          } else {
            setMessage('The link reset password is out of time');
          }
        });
    } else {
      setMessage('Password and confirm password must be the same');
    }
  };
  const validateInputs = () => {
    const errors = {};

    if (!password) {
      errors.password = 'Password is required ';
    } else {
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.password = 'Password must contain at least one special character ';
      }
      if (!/\d/.test(password)) {
        errors.password = 'Password must contain at least one number ';
      }
      if (!/[A-Z]/.test(password)) {
        errors.password = 'Password must contain at least one uppercase letter ';
      }
      if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long ';
      }
      if (password.startsWith(' ')) {
        errors.password = 'The first character of the password cannot be a space ';
      }
    }

    return errors;
  };

  return (
    <MemoryRouter>
      <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={handleCreateNewPassword}>
                    <h1>Create New Password</h1>
                    <p className="text-body-secondary">Type your new password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      {errors.password && <p className="text-danger m-1">{errors.password}</p>}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      {errors.password && <p className="text-danger m-1">{errors.password}</p>}
                    </CInputGroup>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <CButton style={{ color: 'white', display: 'inline-block', flex: 1, marginRight: '15px' }} color="success" type="submit">Submit</CButton>
                      <CButton color="danger" style={{ display: 'inline-block', flex: 1 }}>
                        <a style={{ color: 'white', textDecoration: 'none' }} href="/">Back to Login</a>
                      </CButton>
                    </div>
                    <div style={{ color: 'red' }}>{message}</div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </MemoryRouter>
  );
};

export default CreateNewPassword;
