"use client"

import React from "react";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default function ScrollDownArrow() {
    return (
        <Container>
            <Background>
                <img src="/icons/scroll-down-background.svg" alt="Down-Arrow with text" />
            </Background>
            <Arrow>
                <img src="/icons/down-arrow.svg" alt="Arrow" />
            </Arrow>
        </Container>
    );
}

const Container = styled.div`
    cursor: pointer;
    position: relative;
    width: 100px;
    margin-right: 30px;
    @media all and (max-width: 1080px) {
       width: 60px;
    }
    @media all and (max-width: 768px) {
        
    }
    @media all and (max-width: 640px) {
       width: 50px;
       margin-right: 0;
    }
    @media all and (max-width: 480px) {
        
    }
`;
const Background = styled.div`
    animation: ${rotateAnimation} 3s infinite linear;
`
const Arrow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #ffffff;
    padding: 10px;
    width: 40px;
    @media all and (max-width: 1080px) {
        width: 30px;
    }
    @media all and (max-width: 768px) {
       
    }
    @media all and (max-width: 640px) {
        width: 28px;
    }
    @media all and (max-width: 480px) {
        
    }
`;
