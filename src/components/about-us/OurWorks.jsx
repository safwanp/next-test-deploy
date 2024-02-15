"use client"

import Image from "next/image"

import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

export default function Ourworks() {
    const Works = [
        {
            icon: "/icons/folder-about-us.svg",
            count: 1500,
            title: "Projects completed"
        },
        {
            icon: "/icons/client-about-us.svg",
            count: 8562,
            title: "Satisfied Clients"
        },
        {
            icon: "/icons/employees-about-us.svg",
            count: 450,
            title: "Expert employees"
        },
        {
            icon: "/icons/award-winning-about-us.svg",
            count: 38,
            title: "Awards winning"
        },

    ]

    return (
        <Container>
            <Left>
                <Company>Our Company</Company>
                <Proud>We are proud of our works</Proud>
            </Left>
            <Right>
                {Works.map(({ icon, count, title }, i) => (
                    <Card key={i}>
                        <Icon>
                            <Image
                                width={24}
                                height={24}
                                src={icon}
                                alt=""
                            />
                        </Icon>

                        <Count>
                            <CountUp start={5} end={count} duration={2.5} />
                            <span>+</span>
                        </Count>
                        {/* <Count>{count}</Count> */}

                        <Title>{title}</Title>
                    </Card>
                ))}
            </Right>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    transition: 0.5s;
    &:hover {
        background-color: #fcfafe;
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        padding: 10px;
    }
    @media all and (max-width: 480px) {
        padding: 5px;
    }
`;
const Left = styled.div`
    width: 25%;
    @media all and (max-width: 1280px) {
        width: 30%;
    }
    @media all and (max-width: 1080px) {
        width: 24%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Right = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        width: auto;
        gap: 20px;
    }
    @media all and (max-width: 1080px) {
        /* gap: 15px; */
    }
    @media all and (max-width: 980px) {
        margin-top: 25px;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }
`;

const Company = styled.p`
    font-size: 20px;
    color: #626262;
    margin-bottom: 8px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
    @media all and (max-width: 768px) {
        font-size: 15px;
    }
`;
const Proud = styled.p`
    font-size: 33px;
    line-height: 37px;
    @media all and (max-width: 1280px) {
        font-size: 28px;
    }
    @media all and (max-width: 1080px) {
        font-size: 24px;
        line-height: 33px;
    }
    @media all and (max-width: 768px) {
        font-size: 22px;
        line-height: 28px;
    }
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Icon = styled.div`
    width: 45px;
    margin-bottom: 15px;

    img{
        width: 100% !important;
        height: auto !important;
    }

    @media all and (max-width: 1280px) {
        width: 35px;
        margin-bottom: 10px;
    }
    @media all and (max-width: 1080px) {
        width: 30px;
    }
`;
const Count = styled.p`
    span {
        font-family: "PrimeformProMedium";
        font-size: 26px;
        margin-bottom: 5px;
        @media all and (max-width: 1280px) {
            font-size: 24px;
        }
        @media all and (max-width: 1080px) {
            font-size: 20px;
        }
    }
`;
const Title = styled.p`
    font-family: "PrimeformProMedium";
    font-size: 15px;
    @media all and (max-width: 1280px) {
        font-size: 14px;
    }
`;
