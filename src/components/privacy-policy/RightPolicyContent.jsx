"use client"

import React from "react";
import styled from "styled-components";

export default function RightPolicyContent({
    title,
    description,
    seconddescription,
}) {
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Description>{seconddescription}</Description>
        </Container>
    );
}

const Container = styled.div`
  /* background-color: #f9f9f9; */
  /* padding: 10px 5px; */
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: "PrimeformProMedium";
  color: #1D1D1D;
  margin-bottom: 20px;
  @media all and (max-width:1320px) {
   font-size: 30px;
  }
  @media all and (max-width:1280px) {
   font-size: 28px;
  }
  @media all and (max-width:1080px) {
   font-size: 22px;
  }
  @media all and (max-width:980px) {
   font-size: 20px;
  }
  @media all and (max-width:768px) {
   font-size: 18px;
  }
  @media all and (max-width:640px) {
   font-size: 17px;
  }
  `;

const Description = styled.p`
  font-size: 20px;
  color: #626262;
  line-height: 35px;
  margin-bottom: 10px;
  @media all and (max-width:1320px) {
    font-size: 19px;
  }
  @media all and (max-width:1280px) {
   font-size: 18px;
  }
  @media all and (max-width:1080px) {
   font-size: 17px;
   line-height: 28px;
  }
  @media all and (max-width:980px) {
   font-size: 16px;
   line-height: 28px;
  }
  @media all and (max-width:768px) {
   font-size: 15px;
   line-height: 25px;
  }
  
`;
