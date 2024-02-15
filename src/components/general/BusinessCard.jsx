"use client"

import Link from "next/link"
import Image from "next/image"

import styled from "styled-components";
import ReadMoreButton from "./ReadMoreButton";


export default function BusinessCard({ icon, title, description, type, link }) {
    return (
        <Wrapper>
            <Container
                className={`${type === "business" ? "business" : ""}${type === "accounting" ? "accounting" : ""
                    }`}
            >
                {icon && (
                    <IconContainer
                        className={`${type === "accounting" ? "accountingIcon" : ""
                            }`}
                    >
                        <Image width={45} height={45} src={icon} alt={title} />
                    </IconContainer>
                )}
                <Content>
                    <Title className={type && "bold"}>{title}</Title>
                    <Description>{description}</Description>
                    {(type === "services" || type === "accounting") && (
                        <Link href={link}>
                            <ReadMoreButton />
                        </Link>
                    )}
                </Content>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    .business {
        transition: 0.5s;
        cursor: pointer;
        &:hover {
            background-color: #fcfafe;
        }

        padding: 40px;
        @media all and (max-width: 1425px) {
            padding: 21px;
        }
        @media all and (max-width: 980px) {
            padding: 14px;
        }
        @media all and (max-width: 640px) {
            padding: 20px;
        }
        @media all and (max-width: 480px) {
            padding: 16px;
        }
    }
    .accounting {
        display: flex;
        padding: 40px;
        gap: 20px;
        @media all and (max-width: 1425px) {
            padding: 21px;
        }
        @media all and (max-width: 1080px) {
            gap: 10px;
        }
        
        @media all and (max-width: 980px) {
            padding: 14px;
        }
        @media all and (max-width: 640px) {
            padding: 20px;
        }
        @media all and (max-width: 480px) {
            padding: 16px;
            flex-direction: column;
            gap: 0;
        }
    }
`;
const Container = styled.div`
    
`;
const IconContainer = styled.div`
    width: 45px;
    margin-bottom: 20px;
    @media all and (max-width: 1280px) {
        width: 42px;
        margin-bottom: 14px;
    }
    @media all and (max-width: 1080px) {
        width: 40px;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 12px;
        width: 38px;
    }
    @media all and (max-width: 768px) {
        width: 30px;
    }
    @media all and (max-width: 480px) {
        width: 27px;
    }
`;
const Content = styled.div`
  flex: 1;
    .bold {
        font-family: "PrimeformProSemiBold";
    }
`;
const Title = styled.p`
    font-size: 30px;
    font-family: "PrimeformProMedium";
    margin-bottom: 20px;
    color: #000000;
    @media all and (max-width: 1280px) {
        font-size: 28px;
        margin-bottom: 14px;
    }
    @media all and (max-width: 1080px) {
        font-size: 25px;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 10px;
        font-size: 20px;
    }
    @media all and (max-width: 640px) {
        font-size: 18px;
    }
    @media all and (max-width: 480px) {
        font-size: 17px;
    }
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 35px;
    color: #626262;
    margin-bottom: 25px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 30px;
    }
    @media all and (max-width: 1080px) {
        font-size: 17px;
        line-height: 26px;
    }
    @media all and (max-width: 980px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
        line-height: 22px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
    }
`;
