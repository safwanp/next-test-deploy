"use client"

import Link from "next/link"

import styled from "styled-components";
import MainContent from "./MainContent";


export default function RecentBlogs() {
    const blogData = [
        {
            contentImage: "/images/blog-content-image1.svg",
            content:
                "Saudi has been one of the fast-growing investment grounds that allows investors to step forward and establish a business entity. As a part of Vision 2030 Saudi welcomes 15+ ...",
            name: "Aromal",
            date: "Jan 25, 2024",
        },
        {
            contentImage: "/images/blog-content-image2.svg",
            content: "Saudi has been one of the fast-growing investment grounds that allows investors to step forward and establish a busines",
            name: "Anjana",
            date: "Feb 04, 2024",
        },
        {
            contentImage: "/images/blog-content-image3.svg",
            content: "Saudi has been one of the fast-growing investment grounds that allows investors to step forward and establish a busines",
            name: "Anjana",
            date: "Feb 04, 2024",
        },
    ];

    return (
        <Container>
            {blogData.map((blog, i) => (
                <Link href={`/blogs/${i}`} key={i}>
                    <MainContent {...blog} isimageattop isRecentBlog={true} />
                </Link>
            ))}
        </Container>
    );
}

const Container = styled.div`
  /* Add margin bottom to create a gap between children */
  > div:not(:last-child) {
    margin-bottom: 80px;
  }
`;
