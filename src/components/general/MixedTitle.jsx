"use client"

import styled from "styled-components";

export default function MixedTitle({ text = [], type = "" }) {
    return (
        <Container>
            {text.map(({ title, isBold }, i) => (
                <span className={`${isBold ? "bold" : "normal"} ${type ? type : ""}`} key={i} >
                    {title}
                </span>
            ))}
        </Container>
    );
}

const Container = styled.div`
    .normal {
        font-family: "PrimeformProLight";
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
        font-family: "PrimeformProRegular";
        font-size: 50px;
        line-height: 60px;
        color: #070707;
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
    .large {
        font-size: 94px;
        text-align: center;
        width: 100%;
        /* display: block; */
        line-height: 100px;

        @media all and (max-width: 1425px) {
            font-size: 92px;
            line-height: 85px;
        }
        @media all and (max-width: 1280px) {
            font-size: 87px;
            line-height: 80px;
        }
        @media all and (max-width: 1175px) {
            font-size: 85px;
            line-height: 75px;
        }
        @media all and (max-width: 1158px) {
            font-size: 83px;
            line-height: 70px;
        }
        @media all and (max-width: 1120px) {
            font-size: 83px;
        }
        @media all and (max-width: 1080px) {
            font-size: 80px;
            
        }
        @media all and (max-width: 980px) {
            font-size: 62px;
            line-height: 65px;
        }
        @media all and (max-width: 768px) {
            font-size: 52px;
            line-height: 55px;
        }
        @media all and (max-width: 640px) {
            font-size: 42px;
            line-height: 50px;
        }
        @media all and (max-width: 480px) {
            font-size: 32px;
            line-height: normal;
        }
    }
`;
