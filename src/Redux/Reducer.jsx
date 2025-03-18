import { SET_AGE,SET_NAME,SET_PHONE } from "./Action";


const initialState = {
    name:'',
    age:'',
    phone:''
};




const reducer = (state=initialState,action) =>
{
    switch (action.type)
      {
        case SET_NAME:

        return{
            ...state,
            name:action.payload
        };


        case SET_AGE:
            return{
                ...state,
                age:action.payload
            };


        case SET_PHONE:
            return{
                ...state,
                phone:action.payload
            };

      }
}



export default reducer;