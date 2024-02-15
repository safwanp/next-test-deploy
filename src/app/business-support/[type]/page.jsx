"use client"

import styled from "styled-components";

import PageHead from "@/components/general/PageHead";
import MixedTitle from "@/components/general/MixedTitle";
import ScrollList from "@/components/business-support/ScrollList";


const BusinessSupportType = ({ params = {} }) => {
    const { type } = params

    console.log(type, "type of business support");

    return (
        <>
            <PageHead
                image="/images/Regulatory-page-head.svg"
                title="GRM"
                type="small"
                description="Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing."
            />
            <Assesment>
                <Title className="wrapper">
                    <div>
                        <MixedTitle
                            text={[
                                {
                                    title: "Regulatory ",
                                    isBold: false,
                                },
                                {
                                    title: "Compliance",
                                    isBold: true,
                                },
                                {
                                    title: " Assessment",
                                    isBold: false,
                                },
                            ]}
                        />
                    </div>
                </Title>
                <ScrollContainer>
                    <ScrollList />
                </ScrollContainer>
            </Assesment>
        </>
    );
}

export default BusinessSupportType

const Assesment = styled.div`
    padding: 120px 0;
    @media all and (max-width: 1080px) {
        padding: 100px 0;
    }
    @media all and (max-width: 980px) {
        padding: 70px 0;
    }
    @media all and (max-width: 640px) {
        padding: 50px 0;
    }
    @media all and (max-width: 480px) {
        padding: 50px 0;
    }
`;
const Title = styled.div`
    &>div {
        width: 700px;
        @media all and (max-width: 768px) {
            width: auto;
        }
    }
`;

const ScrollContainer = styled.div`
    display: flex;
    justify-content: end;
    height: 400px;
    overflow-y: scroll;
    margin-right: 10%;
    margin-top: 40px;
    @media all and (max-width: 980px) {
        margin: 40px 10% 0 10%;
    }

    &::-webkit-scrollbar {
        display: block;
        width: 10px;
        @media all and (max-width: 980px) {
            width: 5px;
        }
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #d9d9d9;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #070707;
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #444444;
    }
`;
