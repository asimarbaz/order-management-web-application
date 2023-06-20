const initialState = []

const CustomerReducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_CUSTOMER":{
            return [...state,action.payload]
        }
        case "LIST_CUSTOMER":{
            return action.payload
        }
        default : {
            return [...state]
        }
    }
}

export default CustomerReducer