import React, {useState,useContext, useEffect} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SecondContext} from '../context/secondContext'
import {TableContext} from '../context/TableContext';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    position: fixed;
    z-index: 34;
`
const Modal = styled.div`
    width: 37%;
    height: 62%;
    background: #fff;
    opacity: 1!important;
    margin: auto;
    margin-top: 160px;
    padding: 3rem 0 0 0;
    border-radius: 25px;
    border: 3px solid #4a4acc; 
`
const Circle = styled.div`
    width: 10%;
    height: 15.6%;
    color: #fff;
    position: absolute;
    top: 6.6rem;
    left: 28.6rem;
    background: linear-gradient( to right, #3a3a6d, #4a4acc);
    border-radius: 50%;
`
const Span = styled.span`
    margin: 0 0 0 .65rem;
    display: block;
`
const Span1 = styled.span`
    display:block;
    position: absolute;
    color: #bfbfcf;
    font-size: 1.8rem;
    left: 12rem;
    top: 3.7rem;
    cursor: pointer;
`

const Form = styled.form`
    position: static;
    margin: auto;
    margin-top: 1rem;
    width: 85%;
    height: 94%;
    background: #fff;
`
const Input1 = styled.input`
    border: 1px solid #fff;
    width: 98.3%;
    height: 2rem;
    margin-bottom: 1.5rem;
    outline: none;
    border-radius: 5px;
    box-shadow: 2px 2px 6px 1px #dfdfdf;
    &::placeholder {
        color: #cfcfdf;
    }
    &:focus {
        border: 1px solid #4a4acc;
        background: none;
    }
`
const Flex1 = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`
const Input2 = styled.input`
    border: 1px solid #fff;
    width: 25%;
    height: 2rem;
    outline: none;
    border-radius: 5px;
    box-shadow: 2px 2px 6px 1px #dfdfdf;
    &::placeholder {
        color: #cfcfdf;
    }
    &:focus {
        border: 1px solid #4a4acc;
        background: none;
    }
`
const Text = styled.textarea`
    border: 1px solid #fff;
    width: 98.3%;
    height: 5rem;
    outline: none;
    margin-bottom: 1.5rem;
    border-radius: 5px;
    box-shadow: 2px 2px 6px 1px #dfdfdf;
    &::placeholder {
        color: #cfcfdf;
    }
    &:focus {
        border: 1px solid #4a4acc;
        background: none;
    }
`
const Flex2 = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    justify-content: space-around;
`
const Input3 = styled.input`
    outline: none;
    width: 28%;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #fff;
    box-shadow: 2px 2px 6px 1px #dfdfdf;
    &::placeholder {
        color: #cfcfdf;
        background: none;
    }
    &:focus {
        border: 1px solid #4a4acc;
        background: none;
    }
`
const Flex3 = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
    justify-content: space-between;
`
const Input4 = styled.input`
    outline: none;
    border: 3px solid #fff;
    border-radius: 2px;
    box-shadow: 2px 2px 6px 1px #dfdfdf;
    &::placeholder {
        color: #cfcfdf;
    }
    &:focus {
        border: 1px solid #4a4acc;
    }
`
const Select = styled.select`
   outline: none;
   border: 3px solid #fff;
   border-radius: 2px;
   box-shadow: 2px 2px 6px 1px #dfdfdf;
   &::placeholder {
        color: #cfcfdf;
    }
    &:focus {
        border: 1px solid #4a4acc;
    } 
`
const Button = styled.button`
    width: 100%;
    height: 2.5rem;
    color: #fff;
    border: none;
    font-weight: bold;
    background: linear-gradient( to right, #3a3a6d, #4a4acc);
    border-radius: 1.25rem;
    cursor: pointer;
`

const Addmodal = () => {
    const {tableData, dispatch3} = useContext(TableContext);
    const {show, dispatch2} = useContext(SecondContext);
    const [data, setData] = useState({
            newEvent : '',
            newType : '',
            newGenre : '',
            newSubgenre : '',
            newCountry : '',
            newCity : '',
            newState : '',
            newAddress : '',
            newDate : '',
            newTime : '',
            newTimezone : '',
            newBg: false
        })
    const hideForm = () => {
        dispatch2({type:'AddShow', payload: 'false'});
    }
    
    const HandleChange = (e) => {
       const {name, value} = e.target;
       setData({...data, [name] : value})
    }
    
    let bg = false
    
    const HandleSubmit = (e) => {
        e.preventDefault();
        let time = data.newTime.slice(10);
        let b = data.newTime.slice(0, 10).split('-');
        let date = [b[2],b[1],b[0]].join('-');
        let data2 = {...data, newDate : date, newTime: time, newBg: true}
        let newData = [...tableData, data2]
        dispatch3({type: 'Add', payload: newData})
        
    }
    useEffect(() => {
        console.log(tableData);
    }, [tableData])

    
return ( 
        <Container>
            <Modal>
                <Circle>
                   <Span><FontAwesomeIcon icon='smile' size='5x'/></Span>
                   <Span1 onClick={hideForm}>&times;</Span1>
                </Circle>
                <Form onSubmit={HandleSubmit}>
                    <Input1 
                        type="text" 
                        placeholder='enter event...'
                        name = 'newEvent'
                        value = {data.newEvent}
                        onChange = {HandleChange}
                        />
                    <Flex1>
                       <Input2 
                            type="text" 
                            placeholder='type...'
                            name= 'newType'
                            value={data.newType}
                            onChange = {HandleChange}
                            />
                       <Input2 
                            type="text" 
                            placeholder='genre...'
                            name = 'newGenre'
                            value= {data.newGenre}
                            onChange = {HandleChange}
                        />
                       <Input2 
                            type="text" 
                            placeholder='subgenre...'
                            name = 'newSubgenre'
                            value = {data.newSubgenre}
                            onChange = {HandleChange}
                            />
                    </Flex1>
                    <Text 
                        placeholder="enter event address..."
                        value = {data.newAddress}
                        name = 'newAddress'
                        onChange = {HandleChange}
                    >
                    </Text>
                    <Flex2>
                        <Input3 
                            type="text" 
                            style={{marginLeft : '2rem'}}
                            placeholder='state...'
                            value={data.newState}
                            name = 'newState'
                            onChange = {HandleChange}
                            />
                        <Input3 
                            type="text" 
                            style={{marginRight : '2rem'}}
                            placeholder='country...'
                            value={data.Country}
                            name = 'Country'
                            onChange = {HandleChange}
                            />
                    </Flex2>
                    <Flex3>
                        <Input4 
                            type="datetime-local" 
                            placeholder='time...'
                            value = {data.newTime}
                            name = 'newTime'
                            onChange = {HandleChange}
                            />
                        <Select 
                         name="newTimezone"
                         value = {data.newTimezone}
                         onChange = {HandleChange}
                        >
                            <option value="none"></option>
                            <option value="acdt">ACDT</option>
                            <option value="acst">ACST</option>
                            <option value="cdt">CDT</option>
                            <option value="chst">CHST</option>
                            <option value="dft">DFT</option>
                            <option value="east">EAST</option>
                            <option value="west">WEST</option>
                            <option value="yakt">YAKT</option>
                        </Select>
                    </Flex3>
                    <Button><FontAwesomeIcon icon='pen-alt'/>&nbsp;&nbsp;Add</Button>
                </Form>
            </Modal>
        </Container>
     );
}
 
export default Addmodal;