import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SecondContext} from '../context/secondContext'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    z-index: 100;
`
const Modal = styled.div`
    width: 33%;
    height: 35%;
    background: #fff;
    margin: auto;
    margin-top: 10rem;
    box-shadow: 1px 1px 4px 1px #0f0, -1px -1px 4px 1px #0f0;
    color: #000;
    border-radius: 4px;
    padding-top: 1.3rem;
`
const Success = styled.div`
    width: 30%;
    background: #efefff;
    margin: auto;
    height: 45%;
    border-radius: 50%;
    border: 1px solid #dfdfef;
`
const Span1 = styled.span`
    margin: 1.6rem 0rem 0rem 1.6rem;
    display: block;
`
const Span2 = styled.span`
    display: block;
    font-size: 1.6rem;
    float: right;
    margin: -8.3rem .8rem 0 0;
    color: #8f8f8f;
    cursor: pointer;
`
const H3 = styled.h3`
    margin-left: 5.8rem;
    color: #7f7f9f;
    font-weight: normal;
`
const Button = styled.button`
    margin: .7rem 0 0 3rem;
    width: 72%;
    padding: 10px 0 10px 0;
    border-radius: 2px;
    background: #0f0;
    color: #fff;
    border: 1px solid #0f0;
    font-weight: bold;
`
const Div = styled.div`
   width: 100%;
   border-top: 1px solid #dfdfdf;
`

const SuccessModal = () => {
    
    const {dispatch2} = useContext(SecondContext);
    const hideShow = () => {
        dispatch2({type:'AddShowSuccess', payload:'false'})
    }
    return ( 
        <Container>
            <Modal>
                <Success>
                   <Span1><FontAwesomeIcon icon='check' color='#0f0' size='3x'/></Span1> 
                </Success>
                <Span2 onClick={hideShow}>&times;</Span2>
                <H3>saved successfully!</H3>
                <Div>
                 <Button>view event&nbsp;&nbsp;<FontAwesomeIcon icon='chevron-right'/></Button>
                </Div>
            </Modal>
        </Container>
     );
}
 
export default SuccessModal;