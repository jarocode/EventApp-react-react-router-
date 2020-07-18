const Classification = (indexo, dispatch) => {
    switch(indexo.toString()) {
        case '2' :
            return dispatch ({type: 'ChangeClass', payload:'music'})
        case '3' :
            return dispatch ({type: 'ChangeClass', payload:'sports'})
        case '4' :
            return dispatch ({type: 'ChangeClass', payload:'fashion'})
    }
}

export const SelectClick = (names , disp, set, ind, disp2) => {
    
    switch(names) {
        case 'My events':
            return disp({type:'AddDisplay', payload: 'true'});
                   
        case 'Add Events':
            return  disp({type:'AddShow', payload: 'true'});
            
        default:
            disp({type:'AddDisplay', payload: 'false'});
            Classification(ind, disp2);
            return set(ind);
    }
}



export const Selectcountry = (st, ind, dis) => {
    switch (ind.toString()) {
        case '0' :
            return dis({type: 'ChangeCountry', payload: 'US'});
        case '1' :
            return dis({type: 'ChangeCountry', payload: 'CA'});
        case '2' :
            return dis({type: 'ChangeCountry', payload: 'ZA'});
        case '3' :
            return dis({type: 'ChangeCountry', payload: 'GB'});
        case '4' :
            return dis({type: 'ChangeCountry', payload: 'DE'});
    }
    
}
