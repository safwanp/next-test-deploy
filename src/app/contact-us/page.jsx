"use client"

import Image from "next/image"

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup"
import React from 'react'
import styled from "styled-components"


const ContactUs = () => {
    const initialValues = {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: Yup.string()
            .matches(/^\d+$/, "Phone number must contain only digits")
            .required("Phone number is required"),
        message: Yup.string().required("Message is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        resetForm();
    };

    return (
        <>
            <Container>
                <Content className="wrapper">
                    <div className="left">
                        <div>
                            <Title className="font">
                                Get connected with us
                            </Title>
                            <Description>Reach out and let's turn your ideas into reality</Description>
                        </div>
                        <NumberMail>
                            <Number>
                                <div className="iconFrame">
                                    <Image
                                        width={24}
                                        height={24}
                                        src="/icons/phone.svg"
                                        alt="phone"
                                    />
                                </div>
                                <Text>+971 56 201 0475</Text>
                            </Number>
                            <Mail>
                                <div className="iconFrame">
                                    <Image
                                        width={24}
                                        height={24}
                                        src="/icons/mail.svg"
                                        alt="Mail"
                                    />
                                </div>
                                <Text>info@arabdreams.biz</Text>
                            </Mail>
                        </NumberMail>
                    </div>
                    <div className="right">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}>
                            {({ isSubmitting }) => (
                                <StyledForm as={Form}>
                                    <FieldWrapper>
                                        <label htmlFor="name">Name</label>
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            as={Input}
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component={Error}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            as={Input}
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component={Error}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <label htmlFor="phoneNumber">
                                            Phone Number
                                        </label>
                                        <Field
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Enter Phone Number"
                                            as={Input}
                                        />
                                        <ErrorMessage
                                            name="phoneNumber"
                                            component={Error}
                                        />
                                    </FieldWrapper>
                                    <FieldWrapper>
                                        <label htmlFor="message">Message</label>
                                        <Field
                                            // as="textarea"
                                            name="message"
                                            placeholder="Type your message here..."
                                            rows="4"
                                            cols="50"
                                            as={TextArea}
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component={Error}
                                        />
                                    </FieldWrapper>
                                    <Button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </Button>
                                </StyledForm>
                            )}
                        </Formik>
                    </div>
                </Content>
            </Container>
        </>
    )
}

export default ContactUs



const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("/images/contact-us-background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media all and (max-width: 980px) {
    flex-direction: column;
    /* text-align: center; */
    justify-content: end;
  }
  @media all and (max-width: 480px) {
    }
  .left {
      @media all and (max-width: 980px) {
        text-align: center;
      }
    
  }
  .right {
    display: flex;
    flex-direction: column;
    background: #EFEFEF15;
    padding: 60px;
    border: 1px solid;
    border-image-source: linear-gradient(146.29deg, rgba(239, 239, 239, 0.3) 0%, rgba(239, 239, 239, 0.063) 23.6%, rgba(239, 239, 239, 0.3) 44.7%, rgba(239, 239, 239, 0.081) 67.8%, rgba(239, 239, 239, 0.3) 85.83%);
    backdrop-filter: blur(10px);
    @media all and (max-width: 1320px) {
        padding: 60px 40px;
        /* width: 100%; */
    }
    @media all and (max-width: 1280px) {
        padding: 60px 20px;
    }
    @media all and (max-width: 980px) {
        width: 80%;
        margin-top: 30px;
    }
    
    
  }
`;

const Input = styled.input`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #E3E3E3A3;
  color: #FFFFFF;
  `;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #E3E3E3A3;
  color: #FFFFFF;
  resize: none;
`;

const Button = styled.button`
  padding: 18px 78px 18px 78px;
  background: linear-gradient(0deg, #F6F6F6, #F6F6F6),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
  color: #070707;
  border: 1px solid #F6F6F6;
  cursor: pointer;
  margin-top: 25px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Error = styled.div`
  color: #e12b2b;
  font-size: 16px;
  margin-bottom: 5px;
  position: absolute;
  right: 0;
  top: 100%;
  font-family: "PrimeformProMedium";
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;

  label {
    font-size: 16px;
    margin-bottom: 5px;
    color: #E4E4E4;
  }
`;

const NumberMail = styled.div`
    margin-top: 160px;
    @media all and (max-width: 980px) {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
`;

const Number = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
    .iconFrame {
        width: 28px;

        img{
            width: 100% !important;
            height: auto !important;
        }

        @media all and (max-width: 1280px) {
            width: 25px;        
        }
        @media all and (max-width: 1080px) {
            width: 22px;
        }
    }
`;

const Mail = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    .iconFrame {
        width: 28px;

        img{
            width: 100% !important;
            height: auto !important;
        }

        @media all and (max-width: 1280px) {

            width: 25px;
        }
        @media all and (max-width: 1080px) {
            width: 22px;
        }
    }
`;

const Text = styled.p`
    color: #FFFFFF;
    font-size: 20px;
    font-family: "PrimeformProMedium";
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1080px) {
        font-size: 17px;
    }
    @media all and (max-width: 980px) {
        font-size: 16px;
    }
    @media all and (max-width: 768px) {
        font-size: 15px;
    }
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
`;


const Title = styled.p`
    font-size: 98px;
    color: #ffffff;
    margin-bottom: 31px;
    z-index: 1;
    font-family: "PrimeformProLight";

    @media all and (max-width: 1425px) {
        font-size: 88px;
    }
    @media all and (max-width: 1280px) {
        font-size: 86px;
    }
    @media all and (max-width: 1175px) {
        font-size: 84px;
    }
    @media all and (max-width: 1158px) {
        font-size: 70px;
    }
    @media all and (max-width: 1120px) {
        font-size: 68px;
    }
    @media all and (max-width: 1080px) {
        font-size: 62px;
    }
    @media all and (max-width: 980px) {
        font-size: 58px;
    }
    @media all and (max-width: 768px) {
        font-size: 52px;
    }
    @media all and (max-width: 640px) {
        font-size: 40px;
        margin-bottom: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 38px;
        margin-bottom: 12px;
    }
`;
const Description = styled.p`
    font-size: 26px;
    color: #a0a0a0;
    z-index: 1;
    line-height: 33px;
    @media all and (max-width: 1425px) {
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 33px;
    }
    @media all and (max-width: 1080px) {
        line-height: 26px;
    }
    @media all and (max-width: 980px) {
        line-height: 24px;
    }
    @media all and (max-width: 768px) {
        font-size: 17px;
        line-height: 22px;
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
    }
`;