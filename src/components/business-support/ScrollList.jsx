"use client"

import React from "react";
import styled from "styled-components";


export default function ScrollList() {
    const regulatory = [
        {
            sino: "01",
            title: "Business Transfer",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
        },
        {
            sino: "02",
            title: "Legal Review",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
        },
        {
            sino: "03",
            title: "Business Transfer",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
        },
        {
            sino: "04",
            title: "Legal Review",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
        },
        {
            sino: "05",
            title: "Business Transfer",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
        },
        {
            sino: "06",
            title: "Legal Review",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
        },
    ]
    return (
        <Container>
            <ul>
                {regulatory.map(({ sino, title, description }, i) => (
                    <li key={i}>
                        <Sino>{sino}</Sino>
                        <Content>
                            <Title>{title}</Title>
                            <Description>{description}</Description>
                        </Content>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

const Container = styled.div`
    width: 730px;
    margin-right: 50px;
    @media all and (max-width: 1350px) {
        width: 720px;
    }
    @media all and (max-width: 1280px) {
        width: 710px;
    }
    @media all and (max-width: 1080px) {
        width: 760px;
        margin-right: 40px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
        margin-right: 20px;
    }
    ul {
        li {
            display: flex;
            justify-content: space-between;
            align-items: end;
            margin-bottom: 30px;
            @media all and (max-width: 980px) {
                gap: 30px;
            }
            @media all and (max-width: 480px) {
                align-items: start;
                flex-direction: column;
                gap: 5px;
                margin-bottom: 25px;
            }

        }
    }
`;
const Sino = styled.p`
    font-size: 90px;
    @media all and (max-width: 1280px) {
        font-size: 70px;
    }
    @media all and (max-width: 768px) {
        font-size: 50px;
    }
    @media all and (max-width: 480px) {
        font-size: 35px;
    }
    
`;
const Content = styled.div``;
const Title = styled.p`
    font-size: 32px;
    margin-bottom: 15px;
    @media all and (max-width: 1280px) {
        font-size: 28px;
    }
    @media all and (max-width: 1080px) {
        font-size: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 22px;
        margin-bottom: 6px;
    }
    
`;
const Description = styled.p`
    color: #626262;
    font-size: 22px;
    width: 574px;
    line-height: 33px;
    @media all and (max-width: 1280px) {
        font-size: 20px;
        line-height: 26px;
    }
    @media all and (max-width: 1080px) {
        width: 650px;
    }
    @media all and (max-width: 1080px) {
        line-height: 26px;
        font-size: 18px;
    }
    @media all and (max-width: 980px) {
        width: auto;
    }
    @media all and (max-width: 480px) {
        font-size: 17px;
        line-height: 23px;
    }
`;
