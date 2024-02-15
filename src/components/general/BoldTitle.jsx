import React from "react";
import styled from "styled-components";

export default function BoldTitle({ text = [] }) {
    return (
        <Container>
            {text.map(({ title = "", isBold }, i) => (
                <span className={isBold ? "bold" : "normal"} key={i}>
                    {title}
                </span>
            ))}
        </Container>
    );
}
const Container = styled.div`
    .normal {
        font-family: "PrimeformProRegular";
        font-size: 50px;
        color: #070707;
        line-height: 60px;
        @media all and (max-width: 1280px) {
            font-size: 48px;
            line-height: 48px;
        }
        @media all and (max-width: 1080px) {
            font-size: 45px;
        }
        @media all and (max-width: 980px) {
            font-size: 36px;
        }
        @media all and (max-width: 980px) {
            line-height: 40px;
        }
        @media all and (max-width: 768px) {
            font-size: 30px;
            line-height: 33px;
        }
        @media all and (max-width: 640px) {
            font-size: 28px;
        }
        @media all and (max-width: 480px) {
            font-size: 24px;
        }
    }
    .bold {
        font-family: "PrimeformProMedium";
        font-size: 50px;
        color: #070707;
        line-height: 60px;
        @media all and (max-width: 1280px) {
            font-size: 48px;
            line-height: 48px;
        }
        @media all and (max-width: 1080px) {
            font-size: 45px;
        }
        @media all and (max-width: 980px) {
            font-size: 36px;
        }
        @media all and (max-width: 980px) {
            line-height: 40px;
        }
        @media all and (max-width: 768px) {
            font-size: 30px;
            line-height: 33px;
        }
        @media all and (max-width: 640px) {
            font-size: 28px;
        }
        @media all and (max-width: 480px) {
            font-size: 24px;
        }
    }
`;
