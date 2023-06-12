import httpClient from "./httpClient";

export const deleteTodo = (id) => {
    return httpClient.delete(`/deleteTodo/${id}`);
};

export const clearCompleted = () => {
    return httpClient.delete('clearCompleted');
}

export const updateTodo = (id, updatedFields) => {
    return httpClient.put(`/updateTodo/${id}`, updatedFields);
};

export const getTodos = () => {
    return httpClient.get('/getTodos');
};

export const addTodo = (value) => {
    return httpClient.post('/addTodo', value);
};
