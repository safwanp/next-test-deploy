"use client"

import Link from "next/link"

import React from 'react'
import styled from "styled-components"

import Button from "@/components/general/Button"
import PageHead from '@/components/general/PageHead'
import MixedTitle from '@/components/general/MixedTitle'
import BusinessCard from "@/components/general/BusinessCard"


const page = () => {
    const conpanyContent = [
        {
            icon: "/icons/office.svg",
            title: "Limited liability company",
            description: "A subsidiary or LLC Company is the most commonly used, widely popular, and easiest type of company to set up in Saudi Arabia. A subsidiary company is totally or partially held by a holding company.",
            link: "/company-formation/liability",
        },
        {
            icon: "/icons/foreign-country.svg",
            title: "Branch of a Foreign Company",
            description: "If you are planning to expand your business, then Saudi Arabia is the best choice because of the booming business opportunities here.",
            link: "/company-formation/foreign",
        },
        {
            icon: "/icons/airplane.svg",
            title: "GCC Nationals Company",
            description: "A subsidiary or LLC Company is the most commonly used, widely popular, and easiest type of company to set up in Saudi Arabia. A subsidiary company is totally or partially held by a holding company.",
            link: "/company-formation/gcc",
        },
        {
            icon: "/icons/map.svg",
            title: "Multi Country Business",
            description: "A subsidiary or LLC Company is the most commonly used, widely popular, and easiest type of company to set up in Saudi Arabia. A subsidiary company is totally or partially held by a holding company.",
            link: "/company-formation/country-business",
        },
    ];

    return (
        <>
            <PageHead
                image="/images/company-formation-head.svg"
                title="Company formation"
                description="Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
                type="large"
            />
            <Container className="wrapper">
                <Title>
                    <MixedTitle
                        text={[
                            {
                                title: " Elevate Your Business with Effortless ",
                                isBold: false,
                            },
                            {
                                title: " Company Formation",
                                isBold: true,
                            },
                        ]}
                    />
                </Title>
                <Cards>
                    {conpanyContent.map(({ icon, title, description, link }, i) => {
                        return (
                            <Link href={link} key={i}>
                                <BusinessCard
                                    icon={icon}
                                    title={title}
                                    description={description}
                                    link={link}
                                    type="company"
                                />
                                <Button />
                            </Link>
                        );
                    })}
                </Cards>
            </Container>
        </>
    )
}

export default page


const Container = styled.div`
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

const Title = styled.div`
    text-align: center;
    margin-bottom: 80px;
   
    @media all and (max-width: 980px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

const Cards = styled.div`
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px 90px;
    @media all and (max-width: 1492px) {
        grid-gap: 30px 60px;
    }
    @media all and (max-width: 1460px) {
        grid-gap: 30px 30px;
    }
    @media all and (max-width: 1280px) {
        margin: 15px;
    }
    @media all and (max-width: 980px) {
        gap: 20px;
    }
    @media all and (max-width: 768px) {
        margin: 15px 0;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: repeat(1,1fr);
        margin: 15px 30px;
    }
    @media all and (max-width: 480px) {
        margin: 15px 0;
    }
`;
