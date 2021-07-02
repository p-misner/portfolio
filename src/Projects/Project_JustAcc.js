import React from 'react';
import styled from 'styled-components';
import justaccBig from '../Images/justacc_multiple.png';
import justaccDataDort from '../Images/justacc_DataSorting.png';
import justaccWireframe from '../Images/PrototypeProcess.png';
import raceMapGif from '../Images/JustAccGif.gif';
import accIndexGif from '../Images/AccIndexGif.gif';
import lineGraphGif from '../Images/LineGraphsGif.gif';

const ContentWrapper = styled.div`
    margin: 160px auto 80px auto;
    width: 85vw;
`;
const Spacer = styled.div`
    height: 128px;

`;
const HeroBody = styled.p`
    margin-top:24px;
    font-size: 26px;
    line-height:38px;
`;
const BoldedLink = styled.span`
    font-weight:500;
    color: ${props => props.inputColor || "#082939"};
    text-decoration: underline;
    cursor:pointer;

    &:hover{
        // font-weight:600;
        opacity:0.6;
    }
`;
const UnboldedLink = styled(BoldedLink)`
    font-weight:300;
`;
const BigImage = styled.img`
    width: 85vw;
    margin: 32px auto;
    height: auto;
`;

const MiddleImage = styled.img`
    width: 90%;
    margin: 32px 0px 0px 0px;
    height: auto;
`;
const RoleColumn = styled.div`
    display: flex;
    flex-direction:column;
    margin: 0px 12px 0px 0px;
`;
const Column = styled.div`
    display: flex;
    flex-flow:column nowrap;
    margin: 0px 32px 0px 0px;
    flex: 1 1 0px
`;
const HorizontalInfo = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: flex-start;
    
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

const ItalicBody = styled(SmallBody)`
    font-style:italic;
`;

const BoldBody = styled.span`
    font-weight:500;
`;

const BlueBackground = styled.div`
    background-color: #082939;
    width: 100vw;
    margin-left: -7.5vw;
`;

const BlueBackgroundContent= styled.div`
    margin-left: 7.5vw;
    color: ${props=> props.inputColor || "#082939"}
`;
const ColoredHeader2 = styled.h2`
    color: ${props=> props.inputColor || "#082939"}
`;

const ColoredPara = styled.p`
    color: ${props=> props.inputColor || "#082939"};
`;

export const Project_JustAcc = ()=>{
    return (
        <ContentWrapper>
            <h1>Just Accessibility</h1>
            <HeroBody>An interactive data dashboard built under <BoldedLink><a href="https://sites.google.com/view/shan-jiang/publications">Dr. Shan Jiang</a></BoldedLink> at Tufts University's <BoldedLink><a href="https://as.tufts.edu/uep/people/faculty/shan-jiang">UrbanismX Lab</a></BoldedLink>. The visualization explores how Covid-19 impacted accessibility to food, grocery and health services in the United States's top twenty-five metropolitan areas. </HeroBody>
            <BigImage src={justaccBig}/>
            <HorizontalInfo>
                <RoleColumn>
                    <h3>Duration</h3>
                    <SmallBody> 5 months</SmallBody>
                    <ItalicBody> Dec. 2020-May 2021</ItalicBody>
                </RoleColumn>
                <RoleColumn>
                    <h3>Team Members</h3>
                    <SmallBody> Dr. Shan Jiang <ItalicBody>(Principle Investigator)</ItalicBody> </SmallBody>
                    <SmallBody> Jianying Wang <ItalicBody>(Research Lead)</ItalicBody> </SmallBody>
                    <SmallBody> Priya Misner <ItalicBody>(Website and Visualization)</ItalicBody> </SmallBody>
                </RoleColumn>
                <RoleColumn>
                    <h3>Role</h3>
                    <SmallBody> Designed charts, maps, and user flow based on an exisiting research paper and data.  </SmallBody>
                    <SmallBody> Coded the data dashboard for both web and mobile screens. </SmallBody>
                </RoleColumn>
                <RoleColumn>
                    <h3>Tools</h3>
                    <SmallBody> Sketching </SmallBody>
                    <SmallBody> Figma </SmallBody>
                    <SmallBody> Mapbox </SmallBody>
                    <SmallBody> React </SmallBody>
                    <SmallBody> <UnboldedLink> <a target="_blank" rel="noreferrer noopener" href="https://visgl.github.io/react-map-gl/">React Map GL </a> </UnboldedLink> </SmallBody>
                    <SmallBody> d3.js  </SmallBody>
                    <SmallBody> python  </SmallBody>
                </RoleColumn>

            </HorizontalInfo>
            <Spacer />
            <h2>The Challenge</h2>
            <ShortenedBody> 
                Dr. Shan Jiang approached me at the end of 2020 to develop a visualization for her 
                lab's research into the impact of the Covid-19 pandemic on access to services like food, grocery 
                and health care in cities. A draft of a research paper existed when I came on board, as did a powerpoint 
                with preliminary findings.  
            </ShortenedBody>
            <ShortenedBody>
                The challenge: to transform the static images and text from a research paper into a tool that allowed <BoldBody>researchers to explore </BoldBody> 
                the multitude of variables studied but also <BoldBody>told a story </BoldBody>about the research to other practitioners in the urban planning field.
                I wanted the visualization to entice people to play around with the various variables while discovering the impact Covid-19 had on food, grocery and health care accessibility.
                
            </ShortenedBody>
           
            <Spacer />
            <h2> From Data to Design </h2>
            <ShortenedBody> With twenty-five cities worth of .csv files to Excel sheets with rows of statistics to the conclusions drawn in the 
                research paper draft, there was a lot of information to sort through before any thought of design could begin. Armed with the graphing capabilities 
                of Excel, <BoldedLink><a>kepler.gl</a></BoldedLink>,  and a notebook, I realized that the data files could be easily split into two groups. One set of data 
                compared the cities to each other while the geographical data displayed how areas of a specific city had changed during the pandemic.   </ShortenedBody>
            <BigImage src={justaccDataDort}/>
            <caption>Organizing data files and categorizing variable types into two groups </caption>

            <ShortenedBody> The flow of the app had to account for the two different data perspectives. Before jumping into the design of the chart and map components, 
                I sketched out some wireframes of the dashboard using the original graphics from the research paper draft as placeholders.  
            </ShortenedBody>
            <ShortenedBody> 
                The initial wireframes provided a good structure to the project but now the finer details had to be ironed out. In the initial prototypes, 
                users were able to display both the accessibility rank index graph and the accessibility gap plots at the same time. The amount of data being 
                displayed became overwhelming. Later versions of the dashboard split the graph and dot plots into separate tabs.

            </ShortenedBody>
            <BigImage src={justaccWireframe}/>
            <Spacer />
            <BlueBackground>
                <Spacer />
                <BlueBackgroundContent>
                    <ColoredHeader2 inputColor="#EBF3F4"> A Closer Look: Charts and Maps</ColoredHeader2>
                    <ShortenedBody inputColor="#EBF3F4">
                        Three of the more interesting graphics developed for the Just Accessibility dashboard are highlighted in this section. 
                    </ShortenedBody>
                    <HorizontalInfo>
                        <Column>
                        <MiddleImage src={raceMapGif}/>
                        <ColoredPara inputColor="#EBF3F4"> 
                            The Black vs White Accessibility Comparison map uses both color and interactive buttons 
                            to display the geographical areas where the pandemic impacted resident's access to Grocery services. 
                        </ColoredPara>
                        <ColoredPara inputColor="#EBF3F4"> 
                            This map also uses a slider to display the Accessibility Index of geographical tracts. I experimented with making 
                            the map three-dimensioanl where height represented Accessibility Index but the slider was a much more understandable solution.
                        </ColoredPara>
                        </Column>
                        <Column>
                        <MiddleImage src={accIndexGif}/>
                        <ColoredPara inputColor="#EBF3F4"> 
                            The Accessibility Index map displays the Accessibility Index (rated from 1 to 10) using a diverging color gradient. 
                            By toggling <BoldBody>Display Increase </BoldBody>and <BoldBody>Display Decrease</BoldBody>, most city maps follow the trend that the suburbs improved in accessibility 
                            during the pandemic while  accessibility in a city's center worsened.
                        </ColoredPara>
                        </Column>
                    </HorizontalInfo>
                    <HorizontalInfo>
                        <Column>
                        <MiddleImage src={lineGraphGif}/>
                        <ColoredPara inputColor="#EBF3F4"> 
                            Showing the relationship between Accessibility Index and distance from a city's center, this line graph allows users 
                            to add and remove cities at will. Other features include adding a geographic group of cities and highlighting specific cities on click.
                        </ColoredPara>
                       
                        </Column>
                        <Column>
                        <ColoredPara > 
                              s
                        </ColoredPara>
                        </Column>
                    </HorizontalInfo>
                    <Spacer />

                </BlueBackgroundContent>
               
            </BlueBackground>
            

            <Spacer />
            <h2> Development Details</h2>
            <ShortenedBody>
                This dashboard was built using <BoldedLink><a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">React</a></BoldedLink> as the frontend
                 framework. The package <BoldedLink><a href="https://visgl.github.io/react-map-gl/" target="_blank" rel="noreferrer noopener">React-Map-GL </a></BoldedLink> 
                 was used to allow the feature's of <BoldedLink><a href="https://www.mapbox.com/mapbox-gljs" target="_blank" rel="noreferrer noopener">Mapbox GL JS </a></BoldedLink> 
                 to be used inside a React application. All graphs and charts were built with the help of <BoldedLink><a href="https://d3js.org/" target="_blank" rel="noreferrer noopener">d3.js </a></BoldedLink>.
                 Major thanks to Amanda Wattenberg's <BoldedLink><a href="https://wattenberger.com/blog/react-and-d3" target="_blank" rel="noreferrer noopener">article </a></BoldedLink>  on using React and d3.js together.
                Dropdown menus were created using the <BoldedLink><a href="react-select.com/" target="_blank" rel="noreferrer noopener">react-select </a></BoldedLink> package and the navigation icons were modified   
                from <BoldedLink><a href="thenounproject.com/" target="_blank" rel="noreferrer noopener">The Noun Project</a></BoldedLink>. 
            </ShortenedBody>

            <ShortenedBody>
                The beta version of the Just Accessibility dashboard is being <BoldedLink><a href="justaccessibility.herokuapp.com/" target="_blank" rel="noreferrer noopener">hosted on Heroku</a></BoldedLink> but the final version will 
                be hosted on the UrbanismX website using Tufts University servers.

            </ShortenedBody>
        


        </ContentWrapper>
    );
}

export const Project_RSE = ()=>{
    return (
        <ContentWrapper>
            <h1>Redesigning Ready.Set.Excel's Graphs </h1>
            <HeroBody>An interactive data dashboard built under <BoldedLink><a href="https://sites.google.com/view/shan-jiang/publications">Dr. Shan Jiang</a></BoldedLink> at Tufts University's <BoldedLink><a href="https://as.tufts.edu/uep/people/faculty/shan-jiang">UrbanismX Lab</a></BoldedLink>. The visualization explores how Covid-19 impacted accessibility to food, grocery and health services in the United States's top twenty-five metropolitan areas. </HeroBody>

        </ContentWrapper>
    );
}

export const Project_VRDriving = ()=>{
    return (
        <ContentWrapper>
            <h1>Virtual Reality Driving</h1>
            <HeroBody>An interactive data dashboard built under <BoldedLink><a href="https://sites.google.com/view/shan-jiang/publications">Dr. Shan Jiang</a></BoldedLink> at Tufts University's <BoldedLink><a href="https://as.tufts.edu/uep/people/faculty/shan-jiang">UrbanismX Lab</a></BoldedLink>. The visualization explores how Covid-19 impacted accessibility to food, grocery and health services in the United States's top twenty-five metropolitan areas. </HeroBody>

        </ContentWrapper>
    );
}