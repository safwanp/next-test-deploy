"use client"

import ServicesCard from '@/components/accounting-and-finances/ServiceCard'
import BoldTitle from '@/components/general/BoldTitle'
import MixedTitle from '@/components/general/MixedTitle'
import PageHead from '@/components/general/PageHead'
import React from 'react'
import styled from "styled-components"


const page = () => {
    return (
        <>
            <PageHead
                title="Accounting &"
                secondtitle=" Finance"
                type="large"
                image="/images/Accounting-page-head.svg"
                description="Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
            />
            <Container className="wrapper">
                <MixedTitle
                    text={[
                        {
                            title: "We turn ",
                            isBold: false,
                        },
                        {
                            title: "ideas into finance",
                            isBold: true,
                        },
                    ]}
                />
                <Description>
                    Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus
                    dolor euismod luctus vitae. Elementum aliquam enim sit posuere
                    mauris viverra lorem. Augue magna malesuada tristique tempus
                    rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros
                    adipiscing.Lorem ipsum dolor sit amet consectetur. Vel mi mattis
                    lacus dolor euismod luctus vitae. Elementum aliquam enim sit
                    posuere mauris viverra lorem. Augue magna malesuada tristique
                    tempus rhoncus facilisis odio commodo. Diam ac luctus tortor
                    diam eros adipiscing.
                </Description>
                <OurServices>
                    <ServicesTitle>
                        <BoldTitle
                            text={[
                                {
                                    title: "Our Services",
                                    isBold: true,
                                },
                            ]}
                        />
                    </ServicesTitle>
                    <CardContainer>
                        <ServicesCard />
                    </CardContainer>
                </OurServices>
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
const Description = styled.p`
    margin: 25px 0 100px 0;
    color: #626262;
    z-index: 1;
    font-size: 22px;
    line-height: 35px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 28px;
        margin: 20px 0 60px 0;
    }
    @media all and (max-width: 1080px) {
        line-height: 26px;
        margin: 20px 0 45px 0;
    }
    @media all and (max-width: 980px) {
        line-height: 24px;
        margin: 19px 0 40px 0;
    }
    @media all and (max-width: 768px) {
        font-size: 17px;
        line-height: 22px;
        margin: 18px 0 40px 0;
    }
    @media all and (max-width: 640px) {
        font-size: 16px;
        margin: 18px 0 30px 0;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
        margin: 18px 0 25px 0;
    }
`;
const OurServices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ServicesTitle = styled.div`
    padding-bottom: 30px;
    position: relative;
    @media all and (max-width: 1280px) {
        padding-bottom: 26px;
    }
    @media all and (max-width: 820px) {
        padding-bottom: 24px;
    }
    @media all and (max-width: 768px) {
        padding-bottom: 20px;
    }
    @media all and (max-width: 480px) {
        padding-bottom: 10px;
    }

    &::after {
        content: "";
        height: 1px;
        width: 80%;
        background-color: #d9d9d9b2;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const CardContainer = styled.div`
    margin-top: 70px;
    @media all and (max-width: 1280px) {
        margin-top: 60px;
    }
    @media all and (max-width: 1080px) {
        margin-top: 50px;
    }
    @media all and (max-width: 820px) {
        margin-top: 30px;
    }
    @media all and (max-width: 480px) {
        margin-top: 20px;
    }
`;
