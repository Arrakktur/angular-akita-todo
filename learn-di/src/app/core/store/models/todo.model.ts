export interface ITodo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export function createTodo({ id: number, title: string}: Partial<ITodo>){

}