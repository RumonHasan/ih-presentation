import React from 'react'
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import {FaCode} from 'react-icons/fa';

const Footer = () => {
    return (
        <Wrapper>
            <Typography variant='h6' style={{color:'red', fontSize:'20px', textAlign:'center'}}>
                Copyright ©2021 Rumon Hasan & Yoi.T
            </Typography>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div `
    display: 'flex';
    justify-content: center;
    align-items: 'center';
    margin-top: '50px';
`