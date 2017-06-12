
export default function (state = [{id:1, value:'sdsdfs'}], action) {
  switch (action.type){
    case 'FETCH_UPDATED_LIST':{
      console.log([...state, action.payload]);
      return [...state, action.payload]
    }
    default: {
      return state;
    }
  }
}
