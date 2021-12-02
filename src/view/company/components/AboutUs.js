import React,{useEffect} from 'react';
import styled from 'styled-components';
import Aos from "aos";
import "aos/dist/aos.css";
import BtnMailto from '../../shared/BtnMailto';


const AboutUs = () => {
    return (
    <Container>
        <VisualCompany>
        <Top>
            <ImgLg  data-aos="fade-up" data-aos-duration="800">
                <img src="/assets/img/sub/company_01.jpg" alt="" />
            </ImgLg>
            <Text data-aos="fade-up" data-aos-duration="1400">
                <h3>
                    안녕하십니까.<br/>
                    브릿지인베스트먼트입니다.
                </h3>
                <p>
                    브릿지인베스트먼트 홈페이지를 방문해주셔서 감사합니다. <br className="hiddne-mobile"/> 브릿지인베스트먼트는 전문 인력의 투자 역량을 바탕으로 <br className="hiddne-mobile"/>
                    유망 산업 및 기술 앞 선도적 투자, 성장성 높은 중소·벤처기업의 <br className="hiddne-mobile"/> 발굴 및 지원을 위해 2021년 1월에 설립되었습니다. <br className="hiddne-mobile"/>
                    기업의 비전 및 투자 철학을 지지하며 긴밀한 소통을 통해 <br className="hiddne-mobile"/>  함께 성장하고, 신뢰할 수 있는 파트너가 되겠습니다.
                </p>
            </Text>
        </Top>
        <Bottom>
        <ImgSm  data-aos="fade-up" data-aos-duration="1600"><img src="/assets/img/sub/company_02.webp" alt="" /></ImgSm>
        <ImgSm  data-aos="fade-up" data-aos-duration="2200"><img src="/assets/img/sub/company_03.webp" alt="" /></ImgSm>
        <ImgSm  data-aos="fade-up" data-aos-duration="3000"><img src="/assets/img/sub/company_04.webp" alt="" /></ImgSm>
        </Bottom>
 
        </VisualCompany>
        <CompanyMap data-aos="fade-up" >
            <img src="/assets/img/sub/company_map.jpg" alt="브릿지 인베스트먼트 위치" className="hidden-mobile" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1600"/>
            <img src="/assets/img/sub/company_map_m.jpg" alt="브릿지 인베스트먼트 위치" className="hidden-desktop" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1600" />
            <table data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2400">
                <tbody>
                    <tr>
                        <th>주        소</th>
                        <td>서울특별시 강남구 테헤란로 207, 13층</td>
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td>02-555-5191</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td> <BtnMailto
                                to="#" label="admin@brdginv.com"
                                mailto="mailto:admin@brdginv.com"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CompanyMap>

       
    </Container>
    );
};




const Container = styled.div `
   
`;

const VisualCompany = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:1024px) {
        flex-direction: column;
    }

`;

const Top = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:1024px) {
        flex-wrap: wrap-reverse;
    }

`;
const ImgLg = styled.div `
    width: 590px;
    margin-bottom: 40px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width:1024px) {
        width: 100%;
        margin-bottom: 4%;
    }

`;

const Bottom = styled.div `
    display:flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap: wrap;

`;

const ImgSm = styled.div `
    width: 32%;
    @media screen and (max-width:1024px) {
        &:nth-child(1), &:nth-child(2) {width: 48%;}
        &:last-child {
            width:100%;
            margin-top: 4%;
            img {
                max-width:auto;
                width:100%;
            }
        }
    }

`;

const Text = styled.div `
    margin-left:80px;
    h3 {color: #222; font-size: 46px;  line-height: 1.24; margin-bottom:30px;}
    p { font-size: 16px; color: #747474; line-height: 1.75; }
    @media screen and (max-width:1024px) {
        margin-left:initial;
        h3 { font-size: 26px; letter-spacing: -0.5px; margin-bottom:15px;}
        p { font-size: 16px; line-height: 1.6;}
    }
`;

const CompanyMap = styled.div `
    margin-top:110px;
    table {
        width: 800px;
        margin: 50px auto 0;
        border-top:1px solid #333;
        th { height:50px;
             vertical-align:middle;
             font-size:16px; 
             font-weight:500; 
             color:#222; 
             border-bottom:1px solid #ddd;
           }
        td { height:50px;
             vertical-align:middle;
             font-size:16px; 
             font-weight:500; 
             color:#747474; 
             border-bottom:1px solid #ddd;
             a {
            display: inline-block;
            color: #747474;
                }
           }
      
    }
    @media screen and (max-width:1024px) {
      margin-top:30px;
        table {
            width: 100%;
            margin: 30px auto 50px;
            th,td {
                font-size:14px;
                
            }
        }
    }
`;


export default AboutUs;