import React, {useEffect, useContext} from 'react';
import styled from '@emotion/styled';
import SideBar from './Sidebar';
import Searchbar from './Searchbar';
import Eventboard from './Eventboard';
import SavedEvents from './SavedEvents';
import {SecondContext} from '../context/secondContext';
import Addeventmodal from './AddEventModal';

 

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Dashboard = () => {
   
    const {details} = useContext(SecondContext)
    
    return ( 
        <Container>
            <SideBar/>
            <Searchbar/>
             { details.display === 'true' ? <SavedEvents/> :
            <Eventboard/> } 
             {details.show === 'true' && <Addeventmodal/>}
        </Container>
     )
}
 
export default Dashboard;