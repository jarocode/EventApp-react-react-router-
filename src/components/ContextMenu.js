import React from 'react';
import useContextmenu from '../customHooks/useContextMenu';
import styled from '@emotion/styled';

const Contextmenu = (props) => {
    const {xpos, ypos, isVisible} = useContextmenu(props.ind);
    const Container = styled.div`
        position: absolute;
        top: ${ypos};
        left: ${xpos};
        display: ${isVisible? 'block' : 'none'};
        z-index: 50;
    `
    //my Geeee!!
    
    return ( 
        <Container>
            {props.menu()}
        </Container>
     );
}
 
export default Contextmenu;