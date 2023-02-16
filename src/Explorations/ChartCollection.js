import React, { useState, useCallback } from "react";
import ReactGA from 'react-ga';
import GoToTop from "../Projects/GoToTop";

// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";

// import {Wrapper, TopSpacer, HeroText, HeroBody} from "./DetailsStylesheet.js";


// export function ChartCollection(){
//     ReactGA.pageview(window.location.pathname);
//     const [currentImage, setCurrentImage] = useState(0);
//     const [viewerIsOpen, setViewerIsOpen] = useState(false);

//     const openLightbox = useCallback((event, { photo, index }) => {
//         setCurrentImage(index);
//         setViewerIsOpen(true);
//     }, []);

//     const closeLightbox = () => {
//         setCurrentImage(0);
//         setViewerIsOpen(false);
//     };
//     return (
//         <Wrapper>
//             <TopSpacer/>
//             <HeroText>2021 Chart Collection</HeroText>
//             <HeroBody>Graphs and charts created for the 2021 Twitter #30DayChartChallenge</HeroBody>
//             <Gallery photos={photos} onClick={openLightbox} />
//             <ModalGateway>
//                 {viewerIsOpen ? (
//                 <Modal onClose={closeLightbox}>
//                     <Carousel
//                     currentIndex={currentImage}
//                     views={photos.map(x => ({
//                         ...x,
//                         srcset: x.srcSet,
//                         caption: x.title
//                     }))}
//                     />
//                 </Modal>
//                 ) : null}
//             </ModalGateway>
//             <GoToTop />
//         </Wrapper>
//     );
// }