export const initialState={
    todos:[ ]
}

const reducer=(state,action)=>{
    console.log(action)

    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos:[action.payload, ...state.todos]
            }
        case  "REMOVE_TODO":
            return{
                ...state,
                todos: [...state.todos].filter(todo =>todo.id !== action.payload) 
            }
        case "COMPLATE_TODO":
            return{
               ...state,
               todos: state.todos.map((todo)=>{
                if(todo.id !== action.payload){ // id ler aynı değilse bir değişiklik yapmadan yazmaya devam et
                    return todo;
                }
                return{
                    ...todo,
                    isCompleted:!todo.isCompleted, //durumunu değiştirir
                }

               })
            }
            case "UPDATE_TODO":
                return{
                   ...state,
                   todos: state.todos.map((todo)=>{
                    if(todo.id !== action.payload.todoId){ // id ler aynı değilse bir değişiklik yapmadan yazmaya devam et
                        return todo;
                    }
                    return{
                        ...todo,
                       content: action.payload.newValue
                    }
    
                   })
                }
            default:
                return{
                    ...state
                }
    }
}
export default reducer;