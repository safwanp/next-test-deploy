"use client"

import Image from "next/image"

import React from "react";
import styled from "styled-components";

import ProfileDate from "./ProfileDate";

export default function MainContent({
    name = "",
    date = "",
    content = "",
    contentImage = "",
    heading = "",
    singlePageContent = "",
    isimageattop = false,
    isRecentBlog = false,
}) {
    return (
        <Container>
            {isimageattop && (
                <ImageContainer>
                    <Image src={contentImage} width={32} height={160} alt="content image" />
                </ImageContainer>
            )}
            <ContentHeading $isimageattop={isimageattop}>
                {heading}
            </ContentHeading>

            <Paragraph $isRecentBlog={isRecentBlog}>{content}</Paragraph>
            <SingleContent>{singlePageContent}</SingleContent>
            <Bottom>
                <ProfileDate image="/icons/user-icon.svg" name={name} />
                <ProfileDate image="/icons/calender-icon.svg" date={date} />
            </Bottom>
            {!isimageattop && (
                <ImageContainer>
                    <Image src={contentImage} alt="content image" />
                </ImageContainer>
            )}
        </Container>
    );
}

const Container = styled.div`
    h3 {
        color: #000000;
        margin-bottom: 25px;
    }
`;

const ImageContainer = styled.div`
    img{
        width: 100% !important;
        height: auto !important;
    }
`;

const ContentHeading = styled.h4`
    font-size: 23px;
    font-family: "PrimeformProMedium";
    color: #292929;
    margin: ${(props) => (props.$isimageattop ? "25px 0 0 0" : "0")};
    @media all and (max-width:1340px) {
        font-size: 21px;
    }
    /* @media all and (max-width:1280px) {
        font-size: 18px;
    } */

    @media all and (max-width:1080px) {
        font-size: 20px;
    }
    @media all and (max-width:980px) {
        font-size: 19px;
    }
    @media all and (max-width:768px) {
        font-size: 18px;
    }
`;

const SingleContent = styled.div`
    color: #626262;
    font-size: 18px;
`;

const Paragraph = styled.p`
    font-size: ${(props) => (props.$isRecentBlog ? "22px" : "18px")};
    font-family: "PrimeformProMedium";
    color: ${(props) => (props.$isRecentBlog ? "#292929" : "#626262")};
    margin: 25px 0;
    @media all and (max-width:980px) {
        font-size: ${(props) => (props.$isRecentBlog ? "18px" : "17px")};
    }
    @media all and (max-width:920px) {
        font-size: ${(props) => (props.$isRecentBlog ? "22px" : "17px")};
    }
    @media all and (max-width:640px) {
        font-size: ${(props) => (props.$isRecentBlog ? "20px" : "17px")};
    }

`;


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
`;
