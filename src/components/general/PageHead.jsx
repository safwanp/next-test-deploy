"use client"

import React from "react";
import styled from "styled-components";

const PageHead = ({
    image = "",
    title = "",
    description = "",
    secondtitle = "",
    span = "",
    type = "",
}) => {
    return (
        <Container>
            <Background $image={image} className={type}>
                <Content className="wrapper">
                    <Title
                        $span={span}
                        className={type === "smallGradient" && "font"}>
                        {title}
                        <span>&</span>
                        {secondtitle}
                    </Title>
                    <Description>{description}</Description>
                </Content>
            </Background>
        </Container>
    );
}

export default PageHead

const Container = styled.div`
    .large {
        height: 100vh;
        min-height: 100vh;
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            background: linear-gradient(
                0.72deg,
                rgba(2, 1, 1, 0.93) 25.74%,
                rgba(0, 0, 0, 0.571815) 50.7%,
                rgba(0, 0, 0, 0) 97.03%
            );
        }
    }
    .small {
        height: 400px;
        @media all and (max-width: 1280px) {
            height: 370px;
        }
        @media all and (max-width: 1080px) {
            height: 360px;
        }
        @media all and (max-width: 980px) {
            height: 350px;
        }
        @media all and (max-width: 768px) {
            height: 300px;
        }
        @media all and (max-width: 640px) {
            height: 250px;
        }
    }
    .smallGradient {
        height: 400px;
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            background: linear-gradient(
                0.72deg,
                rgba(0, 0, 0, 0.93) 25.74%,
                rgba(0, 0, 0, 0.571815) 50.7%,
                rgba(0, 0, 0, 0) 97.03%
            );
        }
        @media all and (max-width: 1280px) {
            height: 370px;
        }
        @media all and (max-width: 1080px) {
            height: 360px;
        }
        @media all and (max-width: 980px) {
            height: 350px;
        }
        @media all and (max-width: 768px) {
            height: 300px;
        }
        @media all and (max-width: 640px) {
            height: 250px;
        }
    }
`;

const Background = styled.div`
    background-image: url(${(props) => props.$image});
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 86%;
    @media all and (max-width: 640px) {
        height: 90%;
    }
    .font {
        font-size: 80px;
        margin-bottom: 15px;
        @media all and (max-width: 1425px) {
            font-size: 75px;
        }
        @media all and (max-width: 1280px) {
            font-size: 70px;
        }
        @media all and (max-width: 1175px) {
            font-size: 65px;
        }
        @media all and (max-width: 1158px) {
            font-size: 60px;
        }
        @media all and (max-width: 1120px) {
            font-size: 55px;
        }
        @media all and (max-width: 1080px) {
            font-size: 50px;
        }
        @media all and (max-width: 980px) {
            font-size: 45px;
        }
        @media all and (max-width: 768px) {
            font-size: 40px;
        }
        @media all and (max-width: 640px) {
            font-size: 35px;
            /* margin-bottom: 24px; */
        }
        @media all and (max-width: 480px) {
            font-size: 30px;
            
        }
    }
`;
const Title = styled.p`
    font-size: 110px;
    color: #ffffff;
    margin-bottom: 20px;
    z-index: 1;
    font-family: "PrimeformProLight";
    span {
        display: ${(props) => (props.$span ? props.$span : "none")};
    }
    @media all and (max-width: 1425px) {
        font-size: 92px;
    }
    @media all and (max-width: 1280px) {
        font-size: 87px;
    }
    @media all and (max-width: 1175px) {
        font-size: 85px;
    }
    @media all and (max-width: 1158px) {
        font-size: 70px;
    }
    @media all and (max-width: 1120px) {
        font-size: 83px;
    }
    @media all and (max-width: 1080px) {
        font-size: 65px;
    }
    @media all and (max-width: 980px) {
        font-size: 62px;
    }
    @media all and (max-width: 768px) {
        font-size: 52px;
    }
    @media all and (max-width: 640px) {
        font-size: 42px;
        margin-bottom: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 32px;
        margin-bottom: 12px;
    }
`;
const Description = styled.p`
    font-size: 26px;
    color: #a0a0a0;
    z-index: 1;
    line-height: 33px;
    @media all and (max-width: 1425px) {
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 33px;
    }
    @media all and (max-width: 1080px) {
        line-height: 26px;
    }
    @media all and (max-width: 980px) {
        line-height: 24px;
    }
    @media all and (max-width: 768px) {
        font-size: 17px;
        line-height: 22px;
    }
    @media all and (max-width: 640px) {
        font-size: 15px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
        line-height: 20px;
    }
`;
