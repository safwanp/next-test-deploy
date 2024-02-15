import React from "react";
import styled from "styled-components";

export default function SlickButton({ icon, color, hovericon }) {
    return (
        <Container color={color}>
            <Arrow>
                <img src={icon} alt="Button Arrow" />
            </Arrow>
            <HoverArrow>
                <img src={hovericon} alt="hover icon" />
            </HoverArrow>
        </Container>
    );
}

const Container = styled.button`
    padding: 10px;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    transition: 0.5s;
    &:hover {
        background-color: #070707;
        div {
          display: none;
        }
        span {
          display: block;
        }

    }
    @media all and (max-width: 768px) {
        padding: 8px;
    }
`;
const Arrow = styled.div`
    display: block;
    width: 15px;
    @media all and (max-width: 768px) {
        width: 13px;
    }
`;
const HoverArrow = styled.span`
    display: none;
    width: 15px;
    @media all and (max-width: 768px) {
        width: 13px;
    }
`;
