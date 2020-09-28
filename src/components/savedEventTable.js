import React, {useContext, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {TableContext} from '../context/TableContext';
import RemoveClick from '../Functions/removeClick';

const Container = styled.div`
     width: 100%;
     height: 30rem;
     position: relative;
     background: #1a1a3d;
     
`
const TableData = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
`
const Th = styled.th`
  padding: 12px 0 12px 0;
`
const Td = styled.td`
  padding: 10px 0 10px 0;
  text-align: center;
  width: 9%;

`
const Thead = styled.thead`
  background: #1a1a3d;
  font-size: 0.73em;
  /* padding: 10px 0 10px 0; */
`

const Button = styled.button`
  left: 46.6rem;
  position: absolute;
  margin-top: -2.7rem;
  width: 3.7%;
  height: 6%;
  background: #ff3434;
  border: 1px solid #ff3434;
  color: #fff;
  border-radius: 45%;
  opacity : 0;
  transition: all 0.5s ease-in-out;
  outline: none;
  &:hover {
    opacity: 1;
  }
`
const Tr = styled.tr`
  background: #1a1a3d;
  margin-bottom: 1rem !important;
  &:nth-of-type(odd) {
    background: #3c3c8f;
  }
`

const Table = () => {
  
  const {tableData, dispatch3} = useContext(TableContext);
  
  let first = '#5e5e7f';
  let second = '#1a1a3d';
  const Tbody = styled.tbody`
  background: ${tableData.newBg === true ? first : second};
  font-size: 0.7em;
`
console.log(tableData);
  return ( 
        <Container>
          <TableData>
              <Thead>
                {/* <tr> */}
                    <Th><FontAwesomeIcon icon='map-marked' color='#ff3434'/>&nbsp;&nbsp;Event</Th>
                    <Th><FontAwesomeIcon icon='file-archive' color='#ff3434'/>&nbsp;&nbsp;Type</Th>
                    <Th><FontAwesomeIcon icon='file-alt' color='#ff3434'/>&nbsp;&nbsp;Genre</Th>
                    <Th><FontAwesomeIcon icon='file-image' color='#ff3434'/>&nbsp;&nbsp;Subgenre</Th>
                    <Th><FontAwesomeIcon icon='flag' color='#ff3434'/>&nbsp;&nbsp;Country</Th>
                    <Th><FontAwesomeIcon icon='city' color='#ff3434'/>&nbsp;&nbsp;State</Th>
                    <Th><FontAwesomeIcon icon='map-marker-alt' color='#ff3434'/>&nbsp;&nbsp;Exact Location</Th>
                    <Th><FontAwesomeIcon icon='calendar-alt' color='#ff3434'/>&nbsp;&nbsp;Date</Th>
                    <Th><FontAwesomeIcon icon='clock' color='#ff3434'/>&nbsp;&nbsp;Time</Th>
                    <Th><FontAwesomeIcon icon='globe' color='#ff3434'/>&nbsp;&nbsp;Timezone</Th>
                {/* </tr> */}
                </Thead>
                <Tbody>
                { tableData.map( (event, index) => 
                <Tr>
                    <Td>{event.eventName}</Td>
                    <Td>{event.eventType}</Td>
                    <Td>{event.eventGenre}</Td>
                    <Td>{event.eventsubGenre}</Td>
                    <Td>{event.eventCountry}</Td>
                    <Td>{event.eventState}</Td>
                    <Td>{event.eventAddress}, {event.eventCity}</Td>
                    <Td>{event.eventDate}</Td>
                    <Td>{event.eventTime}</Td>
                    <Td>{event.eventTimeZone}</Td>
                </Tr>
                
                /* <Button onClick ={() => RemoveClick(tableData, index, dispatch3)}>
                  <FontAwesomeIcon icon='trash'/>
                </Button> */
              )}  
            </Tbody>
          </TableData>
          
        </Container>
     );
}
 
export default Table;