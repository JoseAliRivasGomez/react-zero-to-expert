import { useTodos } from '../hooks/useTodos';

export const Title = () => {

    const {pendingTodos, completedTodos, countTodos} = useTodos();

    return (
        <>
            <h2>
                Pending Todos: {pendingTodos}
            </h2>
            <h2>
                Completed Todos: {completedTodos}
            </h2>
            <h2>
                Count Todos: {countTodos}
            </h2>
        </>    
    )
}
