"use client"

import styled from "styled-components"

import AllBlogs from "@/components/blogs/AllBlogs"
import PageHead from "@/components/general/PageHead"
import RecentBlogs from "@/components/blogs/RecentBlogs"
import PopularBlogs from "@/components/blogs/PopularBlogs"


const page = () => {
    return (
        <>
            <PageHead
                image="/images/blog-background.svg"
                title="Blogs"
                description="Our Blogs provide readers with the most up-to-date and relevant information about
                the business landscape in Saudi Arabia."
                type="small"
                wrapperneeded={true}
            />
            <Container className="wrapper">
                <div className="head">
                    <h1>Recent blogs</h1>
                </div>
                <div className="top">
                    <div className="left">
                        <RecentBlogs />
                    </div>
                    <div className="right">
                        <p className="rightHeading">Popular blogs</p>
                        <PopularBlogs />
                    </div>
                </div>
                <div className="bottom">
                    <p className="allBlog">All blogs</p>
                    <AllBlogs />
                </div>
            </Container>
        </>
    )
}

export default page


const Container = styled.div`
    .head {
        font-size: 27px;
        margin: 80px 0 30px 0;
        @media all and (max-width:1280px) {
            font-size: 25px;
          }
          @media all and (max-width:980px) {
            font-size: 20px;
          }
      }
    .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;

        @media all and (max-width:920px) {
            flex-direction: column;
          }

        .left{
          width: 65%;
          @media all and (max-width:1280px) {
            width: 60%;
          }
          @media all and (max-width:1080px) {
            width: 58%;
          }
          @media all and (max-width:980px) {
            width: 54%;
          }
          @media all and (max-width:920px) {
            width: 100%;
          }
        }
        .right{
          width: 30%;
          border-left: 1px solid #DFDFDF;
          padding: 0 0 0 40px;
          @media all and (max-width:1280px) {
            width: 35%;
          }
          @media all and (max-width:1080px) {
            width: 38%;
          }
          @media all and (max-width:980px) {
            width: 42%;
          }
          @media all and (max-width:920px) {
            width: 100%;
            margin-top: 30px;
            padding: 0;
            border: none;
          }
          .rightHeading {
              font-size: 24px;
              font-family: "PrimeformProMedium";
              margin-bottom: 20px;
              @media all and (max-width:1280px) {
                font-size: 22px;
              }
              @media all and (max-width:768px) {
                font-size: 30px;
              }
          }
        }
    }
    .bottom {
      margin-bottom: 30px;
      .allBlog {
        margin-bottom: 25px;
        font-size: 52px;
        @media all and (max-width:1280px) {
            font-size: 48px;
        }
        @media all and (max-width:1080px) {
            font-size: 40px;
        }
        @media all and (max-width:980px) {
            font-size: 35px;
        }
        @media all and (max-width:768px) {
            font-size: 30px;
        }
      }
    }
`;
