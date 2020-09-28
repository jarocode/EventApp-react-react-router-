import React from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import loader from '../loaders/5.gif'

const Container = styled.div`
   margin : 6rem 7rem 4rem 20rem; 
`

const Spinner = () => {
    return ( 
        <Container>
            {/* <FontAwesomeIcon  icon='spinner' size='6x' style={{color:'#ef3434'}} spin/> */}
            <img src={loader} alt=""/>
        </Container>
     );
}
 
export default Spinner;