import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      action.setBalance((prev) => prev + 10);

      return [...state, {id:uuidv4(), name:action.name}];
    }
    case "fuel": {
        
        if(action.balance >=50){
            action.setBalance(prev=>prev-50);
        }

        return [...state];

    }
  }
};

export default reducer;
