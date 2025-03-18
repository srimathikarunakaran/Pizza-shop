export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';
export const SET_PHONE = 'SET_PHONE';



export const setname =(name) =>(
   
    {
        type: SET_NAME,
        payload: name
    }
);


export const setage= (age) => (
    {
        type: SET_AGE,
        payload: age
    }
);



export const setphone = (phone) =>
(
    {
        type:SET_PHONE,
        payload:phone
    }
);
