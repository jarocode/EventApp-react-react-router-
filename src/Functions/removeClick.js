const RemoveClick = (arr,ind, disp) => {
    let newArr = [...arr];
    newArr.splice(ind, 1);
    disp({type:'Add', payload: newArr})
}
 
export default RemoveClick;