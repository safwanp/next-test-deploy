"use client"

import React from "react";
import Image from "next/image"
import styled from "styled-components";

import ProfileDate from "@/components/blogs/ProfileDate";
import MainContent from "@/components/blogs/MainContent";
import SinglePageContent from "@/components/blogs/SinglePageContent";


export default function BlogSinglePage() {
    const allBlogsData = [
        {
            contentImage: "/images/all-blog-image1.svg",
            heading: "Entrepreneurial Insights",
            content: "Welcome to Entrepreneurial Insights, your go-to source for navigating the dynamic landsca...",
            name: "Nibin",
            date: "Jan 02, 2024",
        },
        {
            contentImage: "/images/all-blog-image2.svg",
            heading: "Innovate to Elevate",
            content: "In this dynamic space, we explore the latest trends, strategies, and success stories that e...",
            name: "Libin",
            date: "Jan 07, 2024",
        },
        {
            contentImage: "/images/all-blog-image3.svg",
            heading: "Strategies for Success",
            content: "We believe in the power of informed decision-making, and our articles provide actionable a...",
            name: "Sangeeth",
            date: "Jan 11, 2024",
        },
        {
            contentImage: "/images/all-blog-image4.svg",
            heading: "The Corporate Compass",
            content: "The Corporate Compass is your go-to resource. We believe in empowering leaders with knowledge th...",
            name: "Afsal",
            date: "Jan 16, 2024",
        },
        {
            contentImage: "/images/all-blog-image5.svg",
            heading: "Startup Spotlight",
            content: "Whether you're an aspiring entrepreneur, an investor seeking the next big opportunity, or si...",
            name: "Aamir",
            date: "Jan 18, 2024",
        },
        {
            contentImage: "/images/all-blog-image6.svg",
            heading: "Mastering the Market",
            content: "Mastering the Market is your go-to resource for gaining a competitive edge and navigatin...",
            name: "Vijay",
            date: "Sep 23, 2024",
        },
        {
            contentImage: "/images/all-blog-image4.svg",
            heading: "The Corporate Compass",
            content: "The Corporate Compass is your go-to resource. We believe in empowering leaders with knowledge th...",
            name: "Afsal",
            date: "Jan 16, 2024",
        },
        {
            contentImage: "/images/all-blog-image5.svg",
            heading: "Startup Spotlight",
            content: "Whether you're an aspiring entrepreneur, an investor seeking the next big opportunity, or si...",
            name: "Aamir",
            date: "Jan 18, 2024",
        },
        {
            contentImage: "/images/all-blog-image6.svg",
            heading: "Mastering the Market",
            content: "Mastering the Market is your go-to resource for gaining a competitive edge and navigatin...",
            name: "Vijay",
            date: "Sep 23, 2024",
        },
        {
            title: "All blogs",
            contentImage: "/images/all-blog-image1.svg",
            heading: "Entrepreneurial Insights",
            content: "Welcome to Entrepreneurial Insights, your go-to source for navigating the dynamic landsca...",
            name: "Nibin",
            date: "Jan 02, 2024",
        },
        {
            contentImage: "/images/all-blog-image2.svg",
            heading: "Innovate to Elevate",
            content: "In this dynamic space, we explore the latest trends, strategies, and success stories that e...",
            name: "Libin",
            date: "Jan 07, 2024",
        },
        {
            contentImage: "/images/all-blog-image3.svg",
            heading: "Strategies for Success",
            content: "We believe in the power of informed decision-making, and our articles provide actionable a...",
            name: "Sangeeth",
            date: "Jan 11, 2024",
        },
        {
            contentImage: "/images/all-blog-image4.svg",
            heading: "The Corporate Compass",
            content: "The Corporate Compass is your go-to resource. We believe in empowering leaders with knowledge th...",
            name: "Afsal",
            date: "Jan 16, 2024",
        },
        {
            contentImage: "/images/all-blog-image5.svg",
            heading: "Startup Spotlight",
            content: "Whether you're an aspiring entrepreneur, an investor seeking the next big opportunity, or si...",
            name: "Aamir",
            date: "Jan 18, 2024",
        },
        {
            contentImage: "/images/all-blog-image6.svg",
            heading: "Mastering the Market",
            content: "Mastering the Market is your go-to resource for gaining a competitive edge and navigatin...",
            name: "Vijay",
            date: "Sep 23, 2024",
        },
        {
            contentImage: "/images/all-blog-image4.svg",
            heading: "The Corporate Compass",
            content: "The Corporate Compass is your go-to resource. We believe in empowering leaders with knowledge th...",
            name: "Afsal",
            date: "Jan 16, 2024",
        },
        {
            contentImage: "/images/all-blog-image5.svg",
            heading: "Startup Spotlight",
            content: "Whether you're an aspiring entrepreneur, an investor seeking the next big opportunity, or si...",
            name: "Aamir",
            date: "Jan 18, 2024",
        },
        {
            contentImage: "/images/all-blog-image6.svg",
            heading: "Mastering the Market",
            content: "Mastering the Market is your go-to resource for gaining a competitive edge and navigatin...",
            name: "Vijay",
            date: "Sep 23, 2024",
        },
    ];

    return (
        <Container className="wrapper">
            {/* <MyBreadcrumb/> */}
            <Paragraph>
                Saudi has been one of the fast-growing investment grounds that
                allows investors to step forward and establish a business
                entity. As a part of Vision 2030 Saudi welcomes 15+ ...
            </Paragraph>
            <SingleContent>
                Embark on a journey of discovery as we navigate the intricacies
                of entrepreneurship. From the initial spark of an idea to the
                establishment and growth of your business, Entrepreneurial
                Insights provides a compass for emerging entrepreneurs, offering
                valuable perspectives to help you chart a successful c
            </SingleContent>
            <div className="profileDate">
                <ProfileDate image="/icons/user-icon.svg" name="Aiswarya" />
                <ProfileDate
                    image="/icons/calender-icon.svg"
                    date="Dec 26, 2024"
                />
            </div>
            <SinglePageImage>
                <Image
                    width={24}
                    height={24}
                    src="/images/blog-content-image1.svg"
                    alt="content image"
                />
            </SinglePageImage>
            <MappedContainer>
                <SinglePageContent />
                <Legend>Thank you</Legend>
            </MappedContainer>
            <Bottom>
                <h4 className="heading">Similar blogs</h4>
                <FlexContainer>
                    {allBlogsData.slice(0, 3).map((blog, index) => (
                        <MainContent
                            key={index}
                            contentImage={blog.contentImage}
                            content={blog.content}
                            heading={blog.heading}
                            name={blog.name}
                            date={blog.date}
                            isimageattop={true}
                        />
                    ))}
                </FlexContainer>
            </Bottom>
        </Container>
    );
}

const Container = styled.div`
    padding: 100px 0;
    width: 65%;
    @media all and (max-width:640px) {
        width: 70%;
    }
    @media all and (max-width:480px) {
        width: 75%;
    }
    .profileDate {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
`;

const Paragraph = styled.p`
    font-size: 30px;
    margin-bottom: 25px;
    color: #292929;
    line-height: 40px;
    @media all and (max-width:1080px) {
        font-size: 26px;
    }
    @media all and (max-width:640px) {
        font-size: 23px;
        line-height: 33px;
    }
`;
const SingleContent = styled.p`
    color: #626262;
    font-size: 20px;
    margin-bottom: 30px;
    line-height: 35px;
    @media all and (max-width:1080px) {
        font-size: 18px;
    }
    @media all and (max-width:768px) {
        line-height: 29px;
    }
    @media all and (max-width:640px) {
        font-size: 16px;
    }
`;
const SinglePageImage = styled.div`
    margin-bottom: 50px;

    img{
        width: 100% !important;
        height: auto !important;
    }
`;

const MappedContainer = styled.div`
    /* padding: 0 0 50px 0; */
    border-bottom: 1px solid #ddd; /* Adding border bottom */
    position: relative;
    margin-bottom: 25px;
`;

const Legend = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    text-align: center;
    color: #888;
    background-color: #fff;
    width: 105px;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 40px;
  /* width: 90%; */
  @media all and (max-width:1280px) {
    grid-template-columns: repeat(2,1fr);
  }
  @media all and (max-width:768px) {
        grid-template-columns: repeat(1,1fr);
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    .heading {
        font-size: 42px;
        margin-bottom: 25px;
    }
`

