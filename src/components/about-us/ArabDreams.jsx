"use client"

import React from "react";
import styled from "styled-components";
import MixedTitle from "../general/MixedTitle";
import Services from "./Services";

export default function ArabDreams() {
    const Arab = [
        {
            icon: "/icons/quality-arab.svg",
            title: "Quality of service"
        },
        {
            icon: "/icons/qualified-arab.svg",
            title: "Qualified experts"
        },
        {
            icon: "/icons/knack-arab.svg",
            title: "Knack for solutions"
        },
        {
            icon: "/icons/accountability-arab.svg",
            title: "Accountability"
        },
        {
            icon: "/icons/customisable-arab.svg",
            title: "Customizable Services"
        },
        {
            icon: "/icons/comprehensive-arab.svg",
            title: "Comprehensive advice "
        },
        {
            icon: "/icons/diverse-arab.svg",
            title: "Diverse clientele"
        },
        {
            icon: "/icons/cost-arab.svg",
            title: "Cost-effective"
        },
        {
            icon: "/icons/quality-service-arab.svg",
            title: "Quality of service"
        },
    ]

    return (
        <Container>
            <MixedTitle
                text={[
                    {
                        title: "Why Arab dreams?",
                        isBold: true,
                    },
                ]}
            />
            <Description>
                We bring solutions to make life easier for our customers
            </Description>
            <Items>
                {Arab.map(({ icon, title }, i) => (
                    <Services icon={icon} title={title} key={i} />
                ))}
            </Items>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 0;
    @media all and (max-width: 1080px) {
        padding: 100px 0;
    }
    @media all and (max-width: 980px) {
        padding: 70px 0;
    }
    @media all and (max-width: 640px) {
        padding: 50px 0;
    }
    @media all and (max-width: 480px) {
        padding: 50px 0;
    }
`;
const Description = styled.p`
    color: #626262;
    font-size: 22px;
    line-height: 35px;
    margin-top: 15px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 28px;
      
    }
    @media all and (max-width: 1080px) {
       
        line-height: 26px;
        margin-top: 10px;
    }
    @media all and (max-width: 980px) {
        line-height: 24px;
    }
    @media all and (max-width: 768px) {
        font-size: 17px;
        line-height: 22px;
    }
    @media all and (max-width: 640px) {
        font-size: 16px;
    }
    @media all and (max-width: 480px) {
            font-size: 14px;
    }
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width: 80%;
    gap: 25px 10px ;
    margin-top: 50px;
    @media all and (max-width:1280px){
        margin-top: 40px;
        width: 90%;
}
@media all and (max-width:768px){
    grid-template-columns: repeat(2,1fr);
    width: 100%;
}
@media all and (max-width:640px){
    margin-top: 30px;
    gap: 10px;
}
@media all and (max-width:480px){
    grid-template-columns: repeat(1,1fr);
    width: auto;
}
`
