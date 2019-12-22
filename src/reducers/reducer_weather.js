import { FETCH_WEATHER } from "../actions/index";
export default function(state = [] ,action) {
   switch (action.type){
       case FETCH_WEATHER:
       //state.puch(action.payload.data)
       //state.concat([action.payload.data ])
       return [action.payload.data,...state] //[city,city,city] not [city,[city,city]]
   }
    // console.log('action recived',action);
    
    return state;
}