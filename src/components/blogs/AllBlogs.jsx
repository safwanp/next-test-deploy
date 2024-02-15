"use client"

import Link from "next/link"
import Image from "next/image"

import { useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

import MainContent from "./MainContent";


export default function AllBlogs() {
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

    const [currentPage, setCurrentPage] = useState(0);

    const blogsPerPage = 6;
    const pageCount = Math.ceil(allBlogsData.length / blogsPerPage);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const displayedBlogs = allBlogsData.slice(
        currentPage * blogsPerPage,
        (currentPage + 1) * blogsPerPage
    );

    return (
        <Container>
            <MappedDataContainer>
                {displayedBlogs.map((blog, i) => (
                    <Link href={`/blogs/${i}`} key={i}>
                        <MainContent
                            {...blog}
                            headingFontSize="50px"
                            isimageattop="true"
                        />
                    </Link>
                ))}
            </MappedDataContainer>

            <PaginationContainer>
                <ReactPaginate
                    previousLabel={<Image
                        width={24}
                        height={24}
                        src={"/icons/previous.svg"}
                        alt="Previous"
                    />}
                    nextLabel={<Image
                        width={24}
                        height={24}
                        src={"/icons/next.svg"}
                        alt="Next"
                    />}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    disableNextButton={currentPage === pageCount - 1}
                    disablePrevButton={currentPage === 0}
                />
            </PaginationContainer>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    justify-content: center;
    align-items: center;
`;

const MappedDataContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 80px;
    @media all and (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .pagination {
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .pagination li a {
        cursor: pointer;
        margin: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #f0f0f0;
    }
    .pagination li.active a {
        background-color: #070707;
        color: #fff;
    }
    img {
        width: 100%;
        height: auto;
    }
    .pagination li.disabled a {
        cursor: no-drop; 
    }
`;
