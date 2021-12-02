import React from 'react';
import styled from 'styled-components';
import SubLayout from '../../shared/layout/SubLayout';
import OrganizationChart from '../components/OrganizationChart';


const TeamContainer = () => {
    return (
    <Container>
        <SubLayout>
            <OrganizationChart/>
        </SubLayout>
    </Container>
    );
};




const Container = styled.div `

 
`;


export default TeamContainer;