import React from "react";
import styled from "styled-components";

export default function ReviewCard({ text, image, name, designation }) {
    return (
        <Container>
            <Quote>“</Quote>
            <Details>
                <Text>{text}</Text>
                <Profile>
                    <ProfileImage>
                        <img src={image} alt="" />
                    </ProfileImage>
                    <ProfileInformation>
                        <Name>{name}</Name>
                        <Designation>{designation}</Designation>
                    </ProfileInformation>
                </Profile>
            </Details>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    position: relative;
`;
const Quote = styled.p`
    font-family: "PrimeformProLight";
    font-size: 100px;
    position: absolute;
    @media all and (max-width:768px){
        font-size: 90px;
}
@media all and (max-width:480px){
    font-size: 70px;
}

`;
const Details = styled.div`
    margin-left: 50px;
    margin-top: 25px;
    @media all and (max-width:768px){
        margin-top: 22px;
        margin-left: 40px;
}
@media all and (max-width:480px){
    margin-top: 18px;
    margin-left: 30px;
}
`;
const Text = styled.p`
    color: #070707;
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
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
`;
const ProfileImage = styled.div`
    width: 50px;
    border-radius: 50px;
    @media all and (max-width: 768px) {
        width: 40px;
    }
    @media all and (max-width:480px){
        width: 35px;
}
    
`;
const ProfileInformation = styled.div``;
const Name = styled.p`
    color: #070707;
    font-size: 20px;
    margin-bottom: 5px;
    @media all and (max-width: 768px) {
        font-size: 17px;
    }
    @media all and (max-width:640px){
        margin-bottom: 2px;
}
@media all and (max-width:480px){
    font-size: 16px;
}
`;
const Designation = styled.div`
    color: #626262;
    font-size: 16px;
    @media all and (max-width: 768px) {
        font-size: 14px;
      
    }
`;
