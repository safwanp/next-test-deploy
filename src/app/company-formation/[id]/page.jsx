"use client"

import BusinessCard from '@/components/general/BusinessCard'
import MixedTitle from '@/components/general/MixedTitle'
import PageHead from '@/components/general/PageHead'
import React from 'react'
import styled from "styled-components"


const page = () => {
    const dummyData = [
        {
            icon: "/icons/liability-icon1.svg",
            description: "The Limited Liability Company can perform the same activities as the holding company along with other activities allowing it to expand to the local market.",
        },
        {
            icon: "/icons/liability-icon2.svg",
            description: "The Limited Liability Company or the Subsidiary Company in the KSA is considered an individual domestic entity with all the benefits of a local entity.",
        },
        {
            icon: "/icons/liability-icon3.svg",
            description: "Limited Liabiliy businesses can own different types of assets making it the best option for foreign businesses when setting up a business in Saudi Arabia.",
        },
        {
            icon: "/icons/liability-icon4.svg",
            description: "The Subsidiary Company must abide by the company laws of Saudi Arabia and will have to pay all taxes that are applicable.",
        },
    ]

    return (
        <>
            <PageHead
                image="/images/liability.svg"
                title="Limited liability company"
                type="small"
                description="A subsidiary or LLC Company is the most commonly used, widely popular, and easiest type of company to set up in Saudi Arabia. A subsidiary company is totally or partially held by a holding company."
            />
            <Assesment>
                <Title className="wrapper">
                    <div>
                        <MixedTitle
                            text={[
                                {
                                    title: "Unlocking the Benefits of an Limited",
                                    isBold: false,
                                },
                                {
                                    title: " Liability Company",
                                    isBold: true,
                                },
                            ]}
                        />
                    </div>
                </Title>
                <Cards className="wrapper">
                    {dummyData.map(({ icon, description }, i) => {
                        return (
                            <BusinessCard
                                key={i}
                                icon={icon}
                                description={description}
                            />
                        );
                    })}
                </Cards>
            </Assesment>
        </>
    )
}

export default page


const Assesment = styled.div`
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        width: 900px;
        line-height: 90px;
        text-align: center;
        @media all and (max-width: 768px) {
            width: auto;
        }
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
