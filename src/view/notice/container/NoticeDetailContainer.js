import React from 'react';
import styled from 'styled-components';
import SubLayout from '../../shared/layout/SubLayout';
import NoticeDetailContents from '../components/NoticeDetailContents';


const NoticeDetailContainer = () => {
    return (
    <Container>
        <SubLayout>
        <NoticeDetailContents/>
        </SubLayout>
    </Container>
    );
};




const Container = styled.div `

 
`;


export default NoticeDetailContainer;