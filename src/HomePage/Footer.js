import styled from 'styled-components';

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

export const Footer = () =>{
    return(
        <HorizontalInfo>
            <Row>
                <p> © 2021 Priya Misner, All Rights Reserved</p>
            </Row>

        </HorizontalInfo>

    );
}