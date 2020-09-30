const RemoveClick = (arr,ind, disp) => {
    let newArr = [...arr];
    newArr.splice(ind, 1);
    disp({type:'Remove', payload: newArr})
}
 
export default RemoveClick;