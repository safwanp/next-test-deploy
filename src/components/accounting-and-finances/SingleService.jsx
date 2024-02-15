"use client"

import React from "react";
import styled from "styled-components";

import PageHead from "../general/PageHead";
import MixedTitle from "../general/MixedTitle";
import BusinessCard from "../general/BusinessCard";

export default function SingleService({
    pageHeadTitle,
    pageHeadDescription,
    pageHeadImage,
    titleArray,
    cardType,
}) {
    const AccountingCards = [
        {
            icon: "/icons/annual-audit-icon.svg",
            title: "Cfo Service",
            link: "/accounting-and-finances/accounting/cfo-service",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/management-audit-icon.svg",
            title: "Management Reporting",
            link: "/accounting-and-finances/accounting/management-reporting",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/satutory-audit-icon.svg",
            title: "Account Supervision Service",
            link: "/accounting-and-finances/accounting/account-supervision-service",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/accounting-and-bookkeeping-icon.svg",
            title: "Accounting and Bookkeeping",
            link: "/accounting-and-finances/accounting/accounting-and-bookkeeping",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
    ];

    const Auditing = [
        {
            icon: "/icons/annual-audit-icon.svg",
            title: "Annual Audit",
            link: "/accounting-and-finances/auditing/annual-audit",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/management-audit-icon.svg",
            title: "Management Audit",
            link: "/accounting-and-finances/auditing/management-audit",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/satutory-audit-icon.svg",
            title: "Statutory Audit Assistance",
            link: "/accounting-and-finances/auditing/statutory-audit-assistance",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/accounting-and-bookkeeping-icon.svg",
            title: "Accounting and Bookkeeping",
            link: "/accounting-and-finances/auditing/accounting-and-bookkeeping",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
    ];

    const Taxation = [
        {
            icon: "/icons/vat-icon.svg",
            title: "Vat Consultancy",
            link: "/accounting-and-finances/taxation/vat-consultancy",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/income-icon.svg",
            title: "Income Tax & ZAKAT Consultancy",
            link: "/accounting-and-finances/taxation/income-tax-zakat-consultancy",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/withholding-icon.svg",
            title: "Withholding Tax",
            link: "/accounting-and-finances/taxation/withholding-tax",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
        {
            icon: "/icons/business-icon.svg",
            title: "Business cost savings",
            link: "/accounting-and-finances/taxation/business-cost-savings",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu",
        },
    ];

    const types = {
        auditing: Auditing,
        accounting: AccountingCards,
        taxation: Taxation,
    }

    const currentType = cardType in types ? types[cardType] : types["auditing"]

    return (
        <Container>
            <PageHead
                type="smallGradient"
                title={pageHeadTitle}
                description={pageHeadDescription}
                image={pageHeadImage}
            />
            <Content className="wrapper">
                <Head>
                    <MixedTitle text={titleArray} />
                </Head>
                <Cards>
                    {currentType?.map(({ icon, title, description, link }, i) => (
                        <BusinessCard
                            key={i}
                            icon={icon}
                            title={title}
                            description={description}
                            type="accounting"
                            link={link}
                        />
                    ))}
                </Cards>
            </Content>
        </Container>
    );
}

const Container = styled.div``;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
const Head = styled.div`
    width: 70%;
    text-align: center;
    @media all and (max-width: 1280px) {
        width: 80%;
    }
    @media all and (max-width: 768px) {
        width: 85%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const Cards = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px 45px;
    @media all and (max-width: 1492px) {
        grid-gap: 30px 40px;
    }
    @media all and (max-width: 1460px) {
        grid-gap: 30px 30px;
    }
    @media all and (max-width: 1280px) {
        margin-top: 30px;
    }
    @media all and (max-width: 980px) {
        gap: 20px;
    }
    @media all and (max-width: 768px) {
        margin-top: 15px;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 15px;
    }
`;
