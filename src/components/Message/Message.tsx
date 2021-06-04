import React, {useReducer} from 'react';

const reducer = (state: any, action: any) => {
    if (action.type = 'aaa') return state;
    return state
}

function Message() {

   const {pstid} =  useParams()


    const [state, dispatch] = useReducer<any>(reducer, {});
    return (
        <div className="App">

        </div>
    );
}

export default Message;