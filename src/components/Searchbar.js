import React, {useContext, useState} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { MyContext } from '../context/firstContext';
import {useDispatch, useSelector} from 'react-redux';
import Search from '../actions/searchAction';

const Container  = styled.div`
    & {
        position: relative;
        background: url("./img/checklist2.jpg")  center/cover no-repeat;
        z-index: 1; 
        width: 80rem;
        height: 10.35rem;
    }
    & :after {
        content: '';
        background: #ff3434;
        position: absolute;
        opacity: 0.3;
        top: 0rem;
        left: 0rem;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
`
const Flex1 = styled.div`
    height: 4rem;
    width: 70%;
    padding: .7rem 0 0 0;
    margin: 0rem 0rem 0rem 20rem;
    /* position: relative; */
    /* z-index: 7; */
`
const Input = styled.input`
    background: #1a1a3d;
    border: 1px solid #1a1a3d;
    border-radius: 1rem;
    margin: 0 0;
    height: 2rem;
    width: 13.3rem;
    padding-left: 2rem;
    outline: none;
    color: #eee;
    position: relative;
    z-index: 3;
    &::placeholder {
        color: #ddd;
    }
`
const Button = styled.button`
    /* display: block; */
    float: right;
    width: 4.6rem;
    height: 1.7rem;
    margin-left: 1rem;
    border-radius: .3rem;
    background: #1a1a3d;
    color: #fff;
    border: 2px solid #1a1a3d;
    cursor: pointer;
    &:hover{
        background: #fff;
        border: none;
        color: #ff3434;
        }
`
const Span = styled.span`
    color: #ddd;
    cursor: pointer;
    background: #1a1a3d;
    padding: .5rem;
    border-radius: 5px;
    margin-left: .2rem;
`

const Searchbar = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState('')
    // const {state} = useContext(MyContext)
    
    const handleChange = (e) => {
        setKeyword(e.target.value);
        console.log(keyword);
    }
    
    const handleSearch = () => {
        dispatch(Search(keyword));
        setKeyword('');
    }
    
    return ( 
        <Container>
             <Flex1>
                <Input 
                    type="text" 
                    placeholder="...search events"
                    onChange = {handleChange}
                    value = {keyword}
                /> 
                <Span onClick={handleSearch}><FontAwesomeIcon icon='search'/></Span>
                <Button>Profile</Button> 
                <Button>Log out</Button> 
             </Flex1>
        </Container>
     );
}
 
export default Searchbar;