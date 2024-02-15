"use client"

import Link from "next/link"
import styled from "styled-components"

import PageHead from '@/components/general/PageHead'
import MixedTitle from "@/components/general/MixedTitle"
import BusinessCard from "@/components/general/BusinessCard"


const BusinessSupport = () => {
    const supportBusinessKey = [
        {
            icon: "/icons/grm-icon.svg",
            title: "GRM",
            link: "/business-support/grm",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/Business-transfer-icon.svg",
            title: "Business Transfer",
            link: "/business-support/business-transfer",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/regulatory-icon.svg",
            title: "Regulatory Compilance",
            link: "/business-support/regulatory-compilance",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/trademark-icon.svg",
            title: "Trademark registration",
            link: "/business-support/trademark-registration",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },

        {
            icon: "/icons/businesstrends-icon.svg",
            title: "Business trends",
            link: "/business-support/business-trends",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/workpermi-icon.svg",
            title: "Work permit & visa assistance",
            link: "/business-support/work-permit-visa-assistance",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
    ];

    return (
        <>
            <PageHead
                wrapperneeded
                image="/images/business-background.svg"
                title="Business Support"
                type="large"
                description="Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
            />
            <Container className='wrapper'>
                <TitleContainer>
                    <Title>
                        <MixedTitle
                            text={[
                                {
                                    title: "How we support your ",
                                    isBold: false,
                                },
                                {
                                    title: " business",
                                    isBold: true,
                                },
                            ]}
                        />
                    </Title>
                    <TitleDescription>
                        Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus
                        dolor euismod luctus vitae. Elementum aliquam enim sit
                        posuere mauris viverra lorem. Augue magna malesuada
                        tristique tempus rhoncus facilisis odio commodo. Diam ac
                        luctus tortor diam eros adipiscing.
                    </TitleDescription>
                </TitleContainer>
                <Cards>
                    {supportBusinessKey.map(
                        ({ icon, title, description, link }, i) => {
                            return (
                                <Link href={link} key={i}>
                                    <BusinessCard
                                        icon={icon}
                                        title={title}
                                        description={description}
                                        link={link}
                                        type="business"
                                    />
                                </Link>
                            );
                        }
                    )}
                </Cards>
            </Container>
        </>
    )
}

export default BusinessSupport


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
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 60px;
    border-bottom: 1px solid #908c82;
    @media all and (max-width: 1280px) {
        padding-bottom: 45px;
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 768px) {
        padding-bottom: 40px;
    }
    @media all and (max-width: 640px) {
        padding-bottom: 36px;
    }
`;
const Title = styled.div`
    width: 500px;
    @media all and (max-width: 1280px) {
        width: 410px;
    }
    @media all and (max-width: 1080px) {
        width: 360px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;
const TitleDescription = styled.p`
    width: 570px;
    color: #626262;
    font-size: 22px;
    line-height: 35px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 28px;
        width: 470px;
    }
    @media all and (max-width: 1150px) {
        width: 440px;
    }
    @media all and (max-width: 1080px) {
        width: 380px;
        line-height: 26px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
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
