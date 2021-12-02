import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import MainContainer from '../view/main/container/MainContainer';
import Header from '../view/shared/header/Header';
import Footer from '../view/shared/Footer';


const Main = () => {
    const [mainHeader, IsMainHeader] = useState('');

    return (
    <Container>
        <Header className={cn({ IsMainHeader })}/>
        <MainContainer/>
    </Container>
    );
};




const Container = styled.div `

 
`;


export default Main;
