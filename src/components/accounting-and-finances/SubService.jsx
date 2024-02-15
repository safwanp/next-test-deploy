"use client"

import React from "react";
import styled from "styled-components";
import MixedTitle from "../general/MixedTitle";
import BusinessCard from "../general/BusinessCard";


export default function SubService({ mixedtitle, description, services }) {
    const CfoServices = [
        {
            title: "1. Business Process Reengineering",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "2. Strategy Design & Implementation",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "3. Business Process Reengineering",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "4. Strategy Design & Implementation",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "5. Business Process Reengineering",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "6. Strategy Design & Implementation",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        }
    ]

    const AnnualAudit = [
        {
            title: "1. lmIt will ensure compliance with regulations",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "2. Advice on controls and processing system deficiencies and weaknesses",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "3. Verification of accounting treatments in respect to complicated transactions",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        },
        {
            title: "4. Strategy Design & Implementation",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor "
        }
    ]

    const VatConsultancy = [
        {
            title: "1. lmIt will ensure compliance with regulations",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu"
        },
        {
            title: "2. Advice on controls and processing system deficiencies and weaknesses",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu"
        },
        {
            title: "3. Verification of accounting treatments in respect to complicated transactions",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu"
        },
        {
            title: "4. Strategy Design & Implementation",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu"
        },
        {
            title: "5. Verification of accounting treatments in respect to complicated transactions",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu"
        },
        {
            title: "6. Strategy Design & Implementation",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magnaLorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod lu"
        },
    ]

    const types = {
        cfoservices: CfoServices,
        annualaudit: AnnualAudit,
        vatconsultancy: VatConsultancy,
    }

    const currentType = services in types ? types[services] : types["annualaudit"]

    return (
        <Container className="wrapper">
            <MixedTitle text={mixedtitle} type="large" />
            <Description>{description}</Description>
            <Cards>
                {currentType?.map(({ title, description }, i) => (
                    <BusinessCard
                        title={title}
                        description={description}
                        key={i}
                    />
                ))}
            </Cards>
        </Container>
    );
}

const Container = styled.div`
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
const Description = styled.div`
    margin: 50px 0 100px 0;
    color: #626262;
    z-index: 1;
    font-size: 22px;
    line-height: 35px;
    text-align: center;
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 28px;
        margin: 40px 0 70px 0;
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
const Cards = styled.div`
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 90px 90px;
    @media all and (max-width: 1492px) {
        grid-gap: 85px 85px;
    }
    @media all and (max-width: 1460px) {
        grid-gap: 80px 80px;
    }
    @media all and (max-width: 1280px) {
        margin: 15px 0;
        gap: 70px;
    }
    @media all and (max-width: 980px) {
        gap: 50px;
    }
    @media all and (max-width: 768px) {
        margin: 15px 0;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 15px 30px;
        gap: 30px;
    }
    @media all and (max-width: 480px) {
        margin: 15px 0;
    }
`;
