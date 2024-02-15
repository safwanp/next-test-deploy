"use client"

import Image from "next/image"

import React from "react";
import styled from "styled-components";

import BusinessCard from "../general/BusinessCard";


export default function ServicesCard() {
    const ourServices = [
        {
            serviceImage: "/images/services-accounting-image.svg",
            title: "ACCOUNTING",
            link: "/accounting-and-finances/accounting",
            description:
                "Lorem ipsum dolor sit amet consectetur. Quam pretium nunc penatibus quis ac posuere a cras. Congue amet amet faucibus ultrices. Morbi at accumsan amet praesent elementum quam a. Lacus amet velit enim nunc suspendisse ipsum fames.",
        },
        {
            serviceImage: "/images/services-auditing-image.svg",
            title: "AUDITING",
            link: "/accounting-and-finances/auditing",
            description:
                "Lorem ipsum dolor sit amet consectetur. Quam pretium nunc penatibus quis ac posuere a cras. Congue amet amet faucibus ultrices. Morbi at accumsan amet praesent elementum quam a. Lacus amet velit enim nunc suspendisse ipsum fames.",
        },
        {
            serviceImage: "/images/services-taxation-image.svg",
            title: "TAXATION",
            link: "/accounting-and-finances/taxation",
            description:
                "Lorem ipsum dolor sit amet consectetur. Quam pretium nunc penatibus quis ac posuere a cras. Congue amet amet faucibus ultrices. Morbi at accumsan amet praesent elementum quam a. Lacus amet velit enim nunc suspendisse ipsum fames.",
        },
    ];

    return (
        <Container>
            {ourServices.map(
                ({ serviceImage, title, description, link }, i) => (
                    <Card key={i} className={i % 2 !== 0 ? "reverse" : ""}>
                        <CardImage>
                            <Image
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                                width={24}
                                height={24}
                                src={serviceImage}
                                alt={title}
                            />
                        </CardImage>
                        <Description>
                            <BusinessCard
                                type="services"
                                title={title}
                                description={description}
                                link={link}
                            />
                        </Description>
                    </Card>
                )
            )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    .reverse {
        flex-direction: row-reverse;
    }
    @media all and (max-width: 820px) {
        gap: 50px;
    }
`;
const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    @media all and (max-width: 900px) {
        width: 85%;
    }
    @media all and (max-width: 820px) {
        gap: 20px;
    }
`;
const CardImage = styled.div`
    width: 50%;
    display: flex;

    img{
        width: 100% !important;
        height: auto !important;
    }

    @media all and (max-width: 980px) {
        width: 55%;
    }
    @media all and (max-width: 820px) {
        width: 100%;
    }
`;
const Description = styled.div`
    width: 45%;
    @media all and (max-width: 980px) {
        width: 40%;
    }
    @media all and (max-width: 820px) {
        width: 100%;
    }
`;
