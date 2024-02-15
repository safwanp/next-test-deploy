"use client"

import React, { useState } from 'react'
import styled from "styled-components"

import PrivacyRightList from '@/components/privacy-policy/PrivacyRightPolicy'
import PageHead from '@/components/general/PageHead'


const PrivacyPolicy = () => {
    const [selectedTitle, setSelectedTitle] = useState("");

    return (
        <Container>
            <PageHead
                image="/images/privacy-policy-background.svg"
                title="Privacy policy"
                wrapperneeded={true}
                description="Setting up a GCC company in Saudi Arabia is only for GCC nationals. This is a unique investment opportunity by the Saudi Government for investors from other GCC countries."
                type="small"
            />
            <div className="mainContent wrapper">
                <Left>
                    <div className="wrapper">
                        <ul>
                            <li className={selectedTitle === "Privacy & Policy" ? "active" : ""} onClick={() => setSelectedTitle("Privacy & Policy")}>Privacy & Policy</li>
                            <li className={selectedTitle === "Personal identification information" ? "active" : ""} onClick={() => setSelectedTitle("Personal identification information")}>Personal identification information</li>
                            <li className={selectedTitle === "Non-personal identification information" ? "active" : ""} onClick={() => setSelectedTitle("Non-personal identification information")}>Non-personal identification information</li>
                            <li className={selectedTitle === "Web browser cookies" ? "active" : ""} onClick={() => setSelectedTitle("Web browser cookies")}>Web browser cookies</li>
                            <li className={selectedTitle === "How we use collected information" ? "active" : ""} onClick={() => setSelectedTitle("How we use collected information")}>How we use collected information</li>
                            <li className={selectedTitle === "How we protect your information" ? "active" : ""} onClick={() => setSelectedTitle("How we protect your information")}>How we protect your information</li>
                            <li className={selectedTitle === "Sharing your personal information" ? "active" : ""} onClick={() => setSelectedTitle("Sharing your personal information")}>Sharing your personal information</li>
                            <li className={selectedTitle === "Third party websites" ? "active" : ""} onClick={() => setSelectedTitle("Third party websites")}>Third party websites</li>
                            <li className={selectedTitle === "Changes to this privacy policy" ? "active" : ""} onClick={() => setSelectedTitle("Changes to this privacy policy")}>Changes to this privacy policy</li>
                            <li className={selectedTitle === "Your acceptance of these terms" ? "active" : ""} onClick={() => setSelectedTitle("Your acceptance of these terms")}>Your acceptance of these terms</li>
                            <li className={selectedTitle === "Contacting us" ? "active" : ""} onClick={() => setSelectedTitle("Contacting us")}>Contacting us</li>
                        </ul>
                    </div>
                </Left>
                <Right>
                    <PrivacyRightList selectedTitle={selectedTitle} />
                </Right>
            </div>
        </Container>
    )
}

export default PrivacyPolicy


const Container = styled.div`
        padding-bottom: 80px;
    .mainContent {
        display: flex;
        justify-content: space-between;
        @media all and (max-width:980px) {
        flex-direction: column;
    }
    } 

`;
const Left = styled.div`
    width: 34%;
    position: sticky;
    top: 0;
    height: calc(100vh);
    overflow-y: auto;

    &>div.wrapper{
        padding-top: 60px;
    
        ul {
            margin-top: 100px;
            li {
                font-size: 22px;
                color: #626262;
                margin-bottom: 20px; 
                cursor: pointer;
                @media all and (max-width:1320px) {
                    font-size: 20px;
                }
                @media all and (max-width:1280px) {
                    font-size: 18px;
                }
                @media all and (max-width:1080px) {
                    font-size: 16px;
                }

                &.active {
                    color: #1D1D1D;
                    font-family: "PrimeformProSemiBold";
                }
            }
        }
    }

    @media all and (max-width:1520px) {
        width: 35%;
    }
    @media all and (max-width:1280px) {
        width: 34%;
    }
    @media all and (max-width:980px) {
        position: initial;
        width: 100%;
        height: 100%;
        display: none;
    }
    `;
const Right = styled.div`
    width: 60%;
    overflow-y: auto;
    @media all and (max-width:1520px) {
        width: 60%;
    }
    @media all and (max-width:1280px) {
        width: 60%;
    }
    @media all and (max-width:980px) {
        width: 100%;
    }
`;
