"use client"

import AboutUsPageHead from '@/components/about-us/AboutUsPageHead';
import ArabDreams from '@/components/about-us/ArabDreams';
import Ourworks from '@/components/about-us/OurWorks';
import Reviews from '@/components/about-us/Reviews';
import ScrollDownArrow from '@/components/about-us/ScrollDownArrow';
import PageHead from '@/components/general/PageHead';
import React, { useRef } from 'react'
import styled from "styled-components"


const AboutUs = () => {
    const endRef = useRef();
    const goTo = () => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Container>
            <PageHead
                type="large"
                image="/images/about-us-image.svg"
                title="About us"
                description="we're more than a business; we're a dedicated team fueled by passion and driven by a commitment to redefine industry standards. Join us on our journey, where every success story begins with innovation and collaboration."
            />
            <Content className="wrapper">
                <ContentHead>
                    <BuildYourDreams>
                        Building your dreams in kingdom of Saudi arabia
                    </BuildYourDreams>
                    <ScrollDown onClick={goTo}>
                        <ScrollDownArrow />
                    </ScrollDown>
                </ContentHead>
                <Our>
                    <AboutUsPageHead
                        title="Our mission"
                        description="We strive to become the comprehensive one-stop solution for all accounting, bookkeeping, outsourcing, tax consultation, CFO, business setup, and other finance-related services. We follow ethically derived financial strategies to cater to the business needs of our clients."
                        image="/images/our-mission-page-head.svg"
                    />
                    <AboutUsPageHead
                        title="Our vision"
                        description="To create a lifelong relationship with our clients by delivering precise accounting, valuable auditing consultancy services, and a lot more with a brighter vision. We strive to transform the lives of aspiring minds with a cost-effective approach."
                        image="/images/our-vision-page-head.svg"
                    />
                </Our>
                <Works>
                    <Ourworks />
                </Works>
                <ArabDreams />
                <span ref={endRef}>
                    <Reviews />
                </span>
            </Content>
        </Container>
    );
}

export default AboutUs


const Container = styled.div``;
const Content = styled.div`
    padding: 50px 0;
`;
const ContentHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    @media all and (max-width: 640px) {
        gap: 30px;
    }
`;
const BuildYourDreams = styled.div`
    font-size: 41px;
    color: #626262;
    font-family: "PrimeformProLight";
    color: #626262;

    @media all and (max-width: 1440px) {
        font-size: 34px;
    }
    @media all and (max-width: 1150px) {
        font-size: 32px;
    }
    @media all and (max-width: 1080px) {
        font-size: 24px;
    }
    @media all and (max-width: 768px) {
        font-size: 26px;
    }
    @media all and (max-width: 640px) {
        font-size: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
`;
const ScrollDown = styled.div``;
const Our = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 70px;
    @media all and (max-width: 1080px) {
        margin-top: 60px;
    }
    @media all and (max-width: 768px) {
        margin-top: 50px;
    }
    @media all and (max-width: 640px) {
        margin-top: 40px;
    }
    @media all and (max-width: 480px) {
        margin-top: 30px;
    }
`;
const Works = styled.div`
    margin-top: 60px;
`;
