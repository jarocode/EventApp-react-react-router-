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
   
    const {displayState} = useContext(SecondContext);
    const {showSavedEvents, showAddEventModal} = displayState;
    return ( 
        <Container>
            <SideBar/>
            <Searchbar/>
             { showSavedEvents ? <SavedEvents/> :
            <Eventboard/> } 
             {showAddEventModal && <Addeventmodal/>}
        </Container>
     )
}
 
export default Dashboard;