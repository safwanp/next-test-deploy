"use client"

import Image from "next/image"

import React from "react";
import styled from "styled-components";

export default function Button() {
    return (
        <Container>
            <ButtonContent>
                <p className="text">Learn more</p>
                <div className="arrowFrame">
                    <Image
                        width={24}
                        height={24}
                        src="/icons/arrow.svg"
                        alt="arrow"
                    />
                </div>
            </ButtonContent>
        </Container>
    );
}

const Container = styled.button`
    background-color: #ffffff;
    border: none;
    padding: 10px;
    cursor: pointer;
    position: relative; 
    transition: background-color 0.3s ease;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px; 
        height: 2px; 
        border-radius: 2px;
        background-color: #626262; 
        transition: width 0.7s ease; 
    }

    &:hover::after {
        width: 100%; 
    }
`;

const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .text {
        font-size: 20px;
        font-family: "PrimeformProMedium";
        color: #4E4E4E;
        
        @media all and (max-width: 1080px) {
            font-size: 17px;
        }
        @media all and (max-width: 980px) {
            font-size: 16px;
        }
        @media all and (max-width: 480px) {
            font-size: 15px;
        }
        @media all and (max-width: 360px) {
            font-size: 14px;
        }
    }

    .arrowFrame {
        margin-left: 10px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    ${Container}:hover & .arrowFrame {
        opacity: 1;
    }
`;
