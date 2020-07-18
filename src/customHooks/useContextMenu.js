import React, {useState, useEffect, useCallback} from 'react';

const useContextmenu = (el) => {
    const [isVisible, setIsvisible] = useState(false);
    const [xpos, setXpos] = useState('0px');
    const [ypos, setYpos] = useState('0px');
    
    const handleClick = useCallback((e) => {
        setIsvisible(!isVisible);
        setXpos(`${e.pageX}px`);
        setYpos(`${e.pageY}px`);
        // console.log('boy');
    }, [isVisible])
     useEffect(() => {
        document.getElementById(el).addEventListener('click', handleClick);
        return () => {
            document.getElementById(el).removeEventListener('click', handleClick);
        }
     }, [el, isVisible]);
    return {xpos, ypos, isVisible};
}
 
export default useContextmenu;