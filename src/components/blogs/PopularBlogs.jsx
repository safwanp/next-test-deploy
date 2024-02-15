"use client"

import Link from "next/link"
import styled from "styled-components";

import MainContent from "./MainContent";


export default function PopularBlogs() {
    const sideData = [
        {
            contentImage: "/images/blog-side-content-image1.svg",
            heading: "Major Investment Sectors",
            content: "Saudi has been one of the fast-growing investment grounds that allows investors to ste...",
            name: "Aromal",
            date: "Jan 25, 2024",
            link: "",
        },
        {
            contentImage: "/images/blog-side-content-image2.svg",
            heading: "New companies law - 2024",
            content: "Zakat, Tax and Customs Authority (ZATCA)has declared that they will extend the initiative of w...",
            name: "Swathy",
            date: "Sep 20, 2023",
            link: "",
        },
        {
            contentImage: "/images/blog-side-content-image3.svg",
            heading: "Set up business in Saudi Arabia",
            content: "As a part of Vision 2030, an array of recent economic reforms is happening in the Kingdom. ",
            name: "Safwan",
            date: "Jan 24, 2024",
            link: "",
        },
    ];
    return (
        <Container>
            {sideData.map((blog, i) => (
                <Link href={`/blogs/${blog.id}`} key={i}>
                    <MainContent {...blog} isimageattop="true" isRecentBlog={false} />
                </Link>
            ))}
        </Container>
    );
}

const Container = styled.div`
  > div:not(:last-child) {
    margin: 40px 0;
    border-bottom: 1px solid #DFDFDF;
    padding: 10px 0; 
  }

  > div:last-child {
    padding-bottom: 40px;
  }
`;
