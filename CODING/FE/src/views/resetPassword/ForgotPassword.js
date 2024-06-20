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
import { useNavigate } from 'react-router-dom';
import fetchData from '../../util/ApiConnection';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchData(`http://localhost:8080/api/v1/auth/send-recover/${email}`, 'GET', null);
      if (data.status === 'ERROR') {
        setEmailMessage("Email has not been registered or invalid");
        throw new Error("Email has not been registered or invalid");
      } else {
        setEmailMessage("An email reset password was sent. Please check your email!!!");
      }
    } catch (error) {
      console.error('Error requesting password reset:', error);
      // Handle the error as needed (e.g., log it, display a message to the user, etc.)
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleForgotPassword}>
                  <h1>Forgot Password</h1>
                  <p className="text-body-secondary">Type your email</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type="submit">Send Email</CButton>
                  </div>

                  <div style={{ color: 'red' }} className='email-message'>{emailMessage}</div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ForgotPassword;
