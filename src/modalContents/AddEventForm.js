import React, {useContext, useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  {SecondContext} from '../context/secondContext';

const Form = styled.form`
    height: 100%;
    padding: .05rem 0 2rem 0;
    width: 55%;
    margin: auto;
    background: white;
    box-shadow: 1px 1px 1px 1px #000, -1px -1px 1px 1px #000;
    transform: translateY(-42rem);
    transition: transform 0.4s ease-in;
`
const FormContent = styled.div`
    width: 90%;
    height: 95%;
    margin: auto;
`
const H2 = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    color: #1a1a3d;
`
const H4 = styled.h4`
    margin: .5rem 0 .5rem 0;
    color: #888;
`
const Grid1 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1.2rem;
`
const Grid2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 1.2rem 0 1.2rem 0;
`
const Input = styled.input`
    border: 1px solid #bbb;
    width: 85%;
    height: 2rem;
    border-radius: .3rem;
    &::placeholder {
        color: #ddd;
    }
`
const Area = styled.textarea`
    border: 1px solid #bbb;
    width: 90%;
    height: 4rem;
    border-radius: .3rem;
    outline: none;
`
const Button = styled.button`
    width: 100%;
    margin-top: 1.5rem;
    height: 2.6rem;
    color: #fff;
    background: #1a1a3d;
    border: 1px  solid #1a1a3d;
    border-radius: .3rem;
`
const Span = styled.span`
    float: right;
    margin-right: 1rem;
    cursor: pointer;
    color: #ccc;
    &:hover{
        color: #888;
    }
`

const EventForm = () => {
    const {displayState, dispatch2} = useContext(SecondContext);
    const {showAddEventModal} = displayState;
    const [state, setState] = useState(false);
    const handleClick = () => {
        dispatch2({type: 'showAddEventModal', payload: false});
    }

    useEffect(() => {
        setTimeout(() => {
            setState(true);
        }, 100)
    })
    
    return ( 
        <Form style={{transform:`${state && `translateY(0rem)`}`}}>
            <H2>
                <span style={{marginRight: ".5rem"}}><FontAwesomeIcon icon="pen"/></span>
                Create Your Event
                <Span onClick={handleClick}>&times;</Span>
            </H2>
            <FormContent>
                <label>
                    <H4>EventName</H4>
                    <Input type="text" placeholder="...event" style={{width:'100%'}}/>
                </label>
                <Grid1>
                    <label>
                        <H4>Type</H4>
                        <Input type="text" placeholder="...type"/>
                    </label>
                    <label>
                        <H4>Genre</H4>
                        <Input type="text" placeholder="...genre"/>
                    </label>
                    <label>
                        <H4>Subgenre</H4>
                        <Input type="text" placeholder="subgenre"/>
                    </label>
                </Grid1>
                <Grid2>
                    <div>
                        <label>
                            <H4>Country</H4>
                            <Input type="text" placeholder="country"/>
                        </label>
                        <label>
                            <H4>Date</H4>
                            <Input type="datetime-local"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <H4>City</H4>
                            <Input type="text"/>
                        </label>
                        <label>
                            <H4>timezone</H4>
                            <select style={{border: '1px solid #bbb'}} name="" id="">
                                <option value="ACDT">ACDT</option>
                                <option value="ACST">ACST</option>
                                <option value="CAT">CAT</option>
                                <option value="FJT">FJT</option>
                                <option value="FKST">FKST</option>
                            </select>
                        </label>
                    </div>
                </Grid2>
                <label>
                    <H4>Location</H4>
                    <Area name=""></Area>
                </label>
                <Button type="submit">Add</Button>
            </FormContent>
        </Form>
     );
}
 
export default EventForm;