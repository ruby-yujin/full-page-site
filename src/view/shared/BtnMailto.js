import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const BtnMailto = ({mailto, label}) => {
    return (
        <Btn
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Btn>
    );
};

const Btn = styled(Link) `
    text-decoration: none;
    &:hover, &:focus {
        text-decoration: none;
    } 

`;

export default BtnMailto;