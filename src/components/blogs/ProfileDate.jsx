"use client"

import Image from "next/image"

import styled from "styled-components";


export default function ProfileDate({ name, image, date }) {
    return (
        <Container>
            <span className="iconFrame">
                <Image width={24} height={24} src={image} alt={name} />
            </span>
            <span className="name">
                {name}
                {date}
            </span>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    .iconFrame {
        display: flex;
        align-items: center;
        width: 20px;

        @media all and (max-width:1080px) {
            width: 16px;
        }
        @media all and (max-width:980px) {
            width: 15px;
        }
    }
    .name {
        color: #868585;
        font-size: 18px;
        @media all and (max-width:1280px) {
            font-size: 17px;
          }
    }
    .date {
        color: #868585;
        font-size: 18px;
        @media all and (max-width:1280px) {
            font-size: 17px;
          }
    }
`;
