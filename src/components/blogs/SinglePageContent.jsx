"use client"

import React from 'react'
import styled from 'styled-components'

export default function SinglePageContent() {
    const singlePageContentData = [
        {
            heading: "Navigating the Entrepreneurial Journey",
            paragraph:
                "Embark on a journey of discovery as we navigate the intricacies of entrepreneurship. From the initial spark of an idea to the establishment and growth of your business, Entrepreneurial Insights provides a compass for emerging entrepreneurs, offering valuable perspectives to help you chart a successful course. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
        },
        {
            heading:
                "Innovate or Stagnate: The Power of Entrepreneurial Creativity",
            paragraph:
                "Dive into the realm of innovation and creativity, where we explore how thinking outside the box can be the catalyst for business success. Learn from the experiences of trailblazing entrepreneurs who have harnessed the power of innovation to propel their ventures forward. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe",
        },
        {
            heading: "Strategic Moves: Crafting a Roadmap for Business Success",
            paragraph:
                "Uncover the art of strategic planning and decision-making in the business world. Entrepreneurial Insights breaks down the importance of having a well-thought-out strategy, offering actionable tips and case studies to inspire strategic thinking in every aspect of your entrepreneurial journey. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. In nibh mauris cursus mattis molestie a iaculis at. Mauris a diam maecenas sed enim ut sem viverra aliquet. Bibendum ut tristique et egestas quis ipsum suspendisse. At risus viverra adipiscing at in tellus integer. Quam quisque id diam vel quam elementum. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Viverra suspendisse potenti nullam ac tortor. Nec sagittis aliquam malesuada bibendum. Aliquam sem fringilla ut morbi tincidunt augue interdum. Aliquet sagittis id consectetur purus. Cursus euismod quis viverra nibh cras pulvinar mattis. Nunc sed blandit libero volutpat sed cras ornare arcu.",
        },
    ];

    return (
        <Container>
            {singlePageContentData.map((item, i) => (
                <ContentItem key={i}>
                    <h2>{item.heading}</h2>
                    <p>{item.paragraph}</p>
                </ContentItem>
            ))}
        </Container>
    )
}

const Container = styled.div`
    
`

const ContentItem = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 25px;
    @media all and (max-width:980px) {
        font-size: 21px;
    }
  }

  p {
    font-size: 16px;
    color: #666666;
    margin-bottom: 45px;
    line-height: 30px;
    @media all and (max-width:980px) {
        line-height: 27px;
    }
  }
`;
