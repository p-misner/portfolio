import React, { useState, useCallback } from "react";
import ReactGA from 'react-ga';
import styled from 'styled-components';
import GoToTop from "../Projects/GoToTop";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const ContentWrapper = styled.div`
    margin: 160px auto 80px auto;
    width: 85vw;
`;
const Spacer = styled.div`
    height: 128px;
`;
const HalfSpacer = styled.div`
    height: 64px;
`;
const HeroBody = styled.p`
    margin-top:24px;
    font-size: 26px;
    line-height:38px;
    @media (max-width:800px){
        font-size:20px;
        line-height:28px;
    }
`;
const BigImage = styled.img`
    width: 85vw;
    margin: 32px auto;
    height: auto;
   
`;
const MediumImage = styled.img`
    width: 60vw;
    margin: 32px 0px 0px 0px;
    height: auto;
    @media (max-width:768px){
        width: 85vw;
    }
`;
const SmallBody = styled.p`
    margin: 0px;
    font-size: 17px;
    line-height:28px;
    margin-bottom:7px;
    color: ${props=> props.inputColor || "#082939"}
`;
const ShortenedBody = styled(SmallBody)`
    max-width: 70vw;
    margin-top: 16px;
`;
const ItalicCaption = styled(SmallBody)`
    font-style:italic;
    text-align:center;
`;

const BulletList = styled.ul`
    list-style:square;
    padding-left:48px;
    max-width: 68vw;

`;
const BulletListItem = styled.li`
    font-weight: 300;
    line-height:30px;
`;

const Video = styled.iframe`
    width:85vw;
    height:45vw;
    margin: 32px auto;

`;
const BoldBulletBody = styled.span`
    font-weight:500;
    padding-right:8px;
`;
const Column = styled.div`
    display: flex;
    flex-flow:column nowrap;
    margin: 0px 32px 0px 0px;
    flex: ${props=>props.grow ||"1"} 1 0px
`;
const Row = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: flex-start;
    margin: 0 auto;
    flex-wrap:wrap;
    
`;

const RowImage = styled.img`
    width: 90%;
    margin: 32px 0px 0px 0px;
    height: auto;
`;


export function ChartCollection(){
    ReactGA.pageview(window.location.pathname);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <ContentWrapper>
            <h1>Chart Collection</h1>
            <HeroBody>Graphs and charts created for Twitter's #30DayChartChallenge</HeroBody>
            <HalfSpacer />
            <div>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
                </div>
            <GoToTop />
        </ContentWrapper>
    );
}