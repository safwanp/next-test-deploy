"use client"

import styled from "styled-components";

export default function ReadMoreButton() {
    return (
        <Container>
            Read More
            <Arrow>
                <img src="/icons/Read-More-Arrow.svg" alt="Right-Arrow" />
            </Arrow>
        </Container>
    );
}

const Container = styled.button`
    display: flex;
    font-size: 24px;
    align-items: center;
    font-family: "PrimeformProMedium";
    gap: 10px;
    margin-top: 25px;
    color: #000000;
    transition: all 0.5s;
    &:hover {
        filter: invert(42%) sepia(70%) saturate(1066%) hue-rotate(165deg)
            brightness(93%) contrast(104%);
    }
    @media all and (max-width: 1280px) {
        margin-top: 15px;
        font-size: 20px;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
    @media all and (max-width: 768px) {
        font-size: 15px;
        gap: 7px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
        gap: 5px;
    }
`;
const Arrow = styled.div`
    @media all and (max-width: 1280px) {
        width: 25px;
    }
    @media all and (max-width: 1080px) {
        width: 22px;
    }
    @media all and (max-width: 768px) {
        width: 20px;
    }
    @media all and (max-width: 480px) {
        width: 16px;
    }
`;
