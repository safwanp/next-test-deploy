"use client"

import React from "react";
import styled from "styled-components";


export default function AboutUsPageHead({ image, title, description }) {
    return (
        <Container>
            <Background $image={image} >
                <Content className="wrapper">
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
            </Background>
        </Container>
    );
}
const Container = styled.div``;

const Background = styled.div`
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    height: 400px;
    @media all and (max-width: 1280px) {
        height: 370px;
    }
    @media all and (max-width: 1080px) {
        height: 360px;
    }
    @media all and (max-width: 980px) {
        height: 350px;
    }
    @media all and (max-width: 768px) {
        height: 300px;
    }
    @media all and (max-width: 640px) {
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 86%;
    @media all and (max-width: 640px) {
        height: 90%;
    }
`;
const Title = styled.p`
    color: #ffffff;
    z-index: 1;
    font-family: "PrimeformProLight";
    span {
        display: ${(props) => (props.$span ? props.$span : "none")};
    }
    font-size: 65px;
    margin-bottom: 15px;
    @media all and (max-width: 1425px) {
        font-size: 75px;
    }
    @media all and (max-width: 1280px) {
        font-size: 70px;
    }
    @media all and (max-width: 1175px) {
        font-size: 65px;
    }
    @media all and (max-width: 1158px) {
        font-size: 60px;
    }
    @media all and (max-width: 1120px) {
        font-size: 55px;
    }
    @media all and (max-width: 1080px) {
        font-size: 50px;
    }
    @media all and (max-width: 980px) {
        font-size: 45px;
    }
    @media all and (max-width: 768px) {
        font-size: 40px;
    }
    @media all and (max-width: 640px) {
        font-size: 35px;
        /* margin-bottom: 24px; */
    }
    @media all and (max-width: 480px) {
        font-size: 30px;
    }
`;
const Description = styled.p`
    font-size: 20px;
    color: #a0a0a0;
    z-index: 1;
    line-height: 32px;
    @media all and (max-width: 1425px) {
        font-size: 19px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
        /* line-height: 33px; */
    }
    @media all and (max-width: 1080px) {
        line-height: 26px;
    }
    @media all and (max-width: 980px) {
        line-height: 24px;
    }
    @media all and (max-width: 768px) {
        font-size: 16px;
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
