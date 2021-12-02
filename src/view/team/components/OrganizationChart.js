import React from 'react';
import styled from 'styled-components';


const OrganizationChart = () => {

    return (
    <Container   data-aos="fade-up"  data-aos-delay="300" data-aos-duration="1200">
        <ChartItem half>
            <Top color={'orange'}>대표이사</Top>
            <Bottom>
                <strong>이준혁 대표</strong>
                <span>경영총괄</span>
            </Bottom>
        </ChartItem>
        <ChartItem half>
            <Top color={'black'}>준법감시인(위험관리책임자)</Top>
            <Bottom>
                <strong>이아람 부장</strong>
                <span>컴플라이언스</span>
            </Bottom>
        </ChartItem>
        <ChartItem color={'gray'} className="boxwrap">
            <Top>투자본부</Top>
            <Bottom className="box">
                <Item>
                    <strong>Jason Jung 이사</strong>
                    <span>투자심사</span>
                </Item>
                <Item>
                    <strong>임정욱 이사</strong>
                    <span>투자심사</span>
                </Item>
                <Item>
                    <strong>조현호 심사역</strong>
                    <span>투자심사</span>
                </Item>
                <Item>
                    <strong>박정은 조사역</strong>
                    <span>투자심사</span>
                </Item>
               
            </Bottom>
        </ChartItem>
        <ChartItem half>
            <Top>관리본부</Top>
            <Bottom>
                <strong>박수진 팀장</strong>
                <span>경영총괄</span>
            </Bottom>
        </ChartItem>
    </Container>
    );
};




const Container = styled.div `

 
`;

const ChartItem = styled.div `
    width: ${(props) => (props.half ? '600px' :'1200px')};
    margin: 0 auto 85px;
    height: 140px;
    position: relative;
    &:after {
        content:'';
        width: 1px;
        height: 85px;
        border-left:1px dotted #979797;
        position: absolute;
        left:${(props) => (props.half ? '299px' :'599px')};
        bottom:-85px;
    }
    &:last-child {
        &:after{
            content:none;
        }
    }
    @media screen and (max-width:1600px) {
        width: ${(props) => (props.half ? '100%' :'100%')};
        height: auto;
        margin: 0 auto 30px;
        &:after {
        height: 30px;
        left:${(props) => (props.half ? '49.9999%' :'49.9999%')};
        bottom:-30px;
        .boxwrap &{
            height: 200px !important;
        }
     }
    }
`;

const Top = styled.div `
    height: 40px;
    color:#fff;
    font-size: 15px;
    font-weight: bold;
    background:${(props) => (props.color === 'orange' ? '#f08226' : props.color === 'black' ? '#000' : '#d0d0d0')};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bottom = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border: solid 1px #e0e0e0;
    strong { display:block; color: #333; font-size: 18px; font-weight:bold; line-height: 1.67;}
    span { display:block; color: #bbb; font-size: 15px;}
    &.box {
        flex-direction: initial;
        flex-wrap:wrap;
    }
    @media screen and (max-width:1600px) {
        height: 80px;
        &.box {
            height: 160px;
        }
    }
    
`;

const Item = styled.div `
    width: 25%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right:1px solid #e0e0e0;
    &:last-child {border-right:none;}
    @media screen and (max-width:1600px) {
        width: 50%;
        height: 80px;
        border-right:none;
        &:nth-child(odd) { border-right:1px solid #e0e0e0;}
        &:nth-child(3), &:nth-child(4) { border-top:1px solid #e0e0e0;}
    }

`;
export default OrganizationChart;