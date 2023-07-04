let inistialState = {
    bollean: false,
}
const myReducer = (state = inistialState, action) => {


    switch (action.type) {
        case "CHANGECOLOR": {
            return {

                ...state,

                bollean: !state.bollean

            }
        }
        default: {

            return state

        }

    }








}







export default myReducer