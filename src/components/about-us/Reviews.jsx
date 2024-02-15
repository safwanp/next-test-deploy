"use client"

import React, { useRef } from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BoldTitle from "../general/BoldTitle";
import SlickButton from "./SlickButton";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
    const sliderRef = useRef();

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const Review = [
        {
            text: "Our experience with the employee management service has been nothing short of exceptional. The platform&apos;s user-friendly interface streamlines all aspects of HR, from onboarding to performance tracking",
            image: "/images/Review-profile-image.svg",
            name: "Aiswarya haridas",
            designation: "UI UX designer"
        },
        {
            text: "Our experience with the employee management service has been nothing short of exceptional. The platform&apos;s user-friendly interface streamlines all aspects of HR, from onboarding to performance tracking",
            image: "/images/Review-profile-image.svg",
            name: "Aiswarya haridas",
            designation: "UI UX designer"
        },
        {
            text: "Our experience with the employee management service has been nothing short of exceptional. The platform&apos;s user-friendly interface streamlines all aspects of HR, from onboarding to performance tracking",
            image: "/images/Review-profile-image.svg",
            name: "Aiswarya haridas",
            designation: "UI UX designer"
        },
        {
            text: "Our experience with the employee management service has been nothing short of exceptional. The platform&apos;s user-friendly interface streamlines all aspects of HR, from onboarding to performance tracking",
            image: "/images/Review-profile-image.svg",
            name: "Aiswarya haridas",
            designation: "UI UX designer"
        },
    ]

    return (
        <Container>
            <Left>
                <Title>
                    <BoldTitle
                        text={[
                            {
                                title: "From our ",
                                isBold: false,
                            },
                            {
                                title: "clients",
                                isBold: true,
                            },
                        ]}
                    />
                </Title>
                <Description>
                    Hear what real clients say! Discover the impact we&apos;ve made -
                    read testimonials now.
                </Description>
                <Buttons>
                    <span onClick={(e) => sliderRef.current.slickPrev()}>
                        <SlickButton
                            hovericon="/icons/white-left-arrow-about-us.svg"
                            icon="/icons/black-left-arrow-about-us.svg"
                        />
                    </span>
                    <span onClick={(e) => sliderRef.current.slickNext()}>
                        <SlickButton
                            hovericon="/icons/white-right-arrow-about-us.svg"
                            icon="/icons/black-right-arrow-about-us.svg"
                        />
                    </span>
                </Buttons>
            </Left>
            <Right>
                <Slider {...settings} ref={sliderRef}>
                    {Review.map(({ text, image, name, designation }, i) => (
                        <ReviewCard
                            text={text}
                            image={image}
                            name={name}
                            designation={designation}
                            key={i}
                        />
                    ))}
                </Slider>
            </Right>
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px) {
        margin-bottom: 100px;
    }
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
        margin-bottom: 60px;
    }
    @media all and (max-width: 480px) {
        margin-bottom: 40px;
    }
`;

const Left = styled.div`
    width: 40%;
    margin-top: 50px;
    @media all and (max-width: 640px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        margin-top: 0px;
    }
`;

const Title = styled.div`
    width: 50%;
    @media all and (max-width: 1280px) {
        width: 60%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;

const Description = styled.p`
    color: #626262;
    font-size: 20px;
    line-height: 30px;
    margin-top: 15px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
        line-height: 28px;
    }
    @media all and (max-width: 1080px) {
        line-height: 26px;
        margin-top: 10px;
    }
    @media all and (max-width: 980px) {
        line-height: 24px;
    }
    @media all and (max-width: 768px) {
        font-size: 17px;
        line-height: 22px;
    }
    @media all and (max-width: 640px) {
        font-size: 16px;
    }
    @media all and (max-width: 480px) {
        font-size: 14px;
    }
`;

const Buttons = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 30px;
    @media all and (max-width: 480px) {
        margin-top: 15px;
    }
`;
const Right = styled.div`
    width: 45%;
    cursor: pointer;
    @media all and (max-width: 980px) {
        width: 50%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        margin-top: 20px;
    }
`;
