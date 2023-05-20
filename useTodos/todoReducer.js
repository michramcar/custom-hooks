export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload]

        case 'Remove Todo':
            return initialState.filter(e => e.id !== action.payload);

        case 'Toggle Todo':
            return initialState.map(e => {
                if (e.id === action.payload) {
                    return {
                        ...e,
                        done: !e.done
                    }
                }
                return e;
            });

        default:
            return initialState;
    }
}