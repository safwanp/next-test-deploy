import React from "react";
import styled from "styled-components";

export default function Services({ icon, title }) {
    return (
        <Container>
            <Icon>
                <img src={icon} alt={title} />
            </Icon>
            <Title>{title}</Title>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 20px;
    @media all and (max-width:1280px){
        padding: 10px ;
}
@media all and (max-width:640px){
    padding: 10px 5px;
}
@media all and (max-width:480px){
    gap: 5px;
}
`
const Icon = styled.div`
width: 35px;
@media all and (max-width:1280px){
    width: 30px;
}
@media all and (max-width:1080px){
    width: 25px;
}
@media all and (max-width:640px){
    width: 20px;
}
`
const Title = styled.p`
    font-family: 'PrimeformProMedium';
    font-size: 20px;
    @media all and (max-width:1280px){
        font-size: 16px;
}
@media all and (max-width:1080px){
    font-size: 15px;
}
@media all and (max-width:640px){
    font-size: 14px;
}
`
