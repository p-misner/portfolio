import styled from 'styled-components';
const darkestBlue = "#082939";

const Row = styled.div`
    display: flex;
    flex-flow:row nowrap;
    margin: 0px 32px 0px 0px;
    flex: 1 1 0px
    
`;
const HorizontalInfo = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: flex-start;
    margin: 0 auto 10px auto;
    flex-wrap:wrap;
    width: 90vw;
`;

const Wrapper = styled.div`
    width:auto;
    margin:0px 16px;
    max-width: 968px;
    @media (min-width: 768px) {
        margin: 0px 32px;
      }
    @media (min-width: 968px) {
        margin: 0px auto;
      }
`;
const BorderDiv = styled.div`
    border: 1px ${darkestBlue} solid;
    border-radius:8px;
    padding: 16px 0px;
`;
export const ExplorationText = styled.div`
    margin: 16px;
    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 16px;
    }
`;
export const RegBody = styled.p`
    font-weight:300;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height:24px;
    font-size:16px;
`;
export const ExplorationBody = styled(RegBody)`    
    margin-bottom:16px;
`;
export const Footer = () =>{
    return(
        <Wrapper>
            <BorderDiv>
                <ExplorationText>
                    <h3> Contact Me</h3>
                    <ExplorationBody> Have a cool dataset to share? Looking to inject some magic into some CSVs? Want to say hi? Shoot me an email at priyamisner [at] gmail [dot] com</ExplorationBody>
                    <ExplorationBody> Find me on the Internet:</ExplorationBody>
                </ExplorationText>
            </BorderDiv>
        <HorizontalInfo>
            <Row>
                <p> © 2021 Priya Misner, All Rights Reserved</p>
            </Row>
        </HorizontalInfo>
        </Wrapper>

    );
}

