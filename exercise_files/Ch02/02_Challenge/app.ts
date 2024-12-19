// Define an interface for a Todo item, which represents a task with an ID, title, status, and an optional completed date.
interface Todo {
    id: number;         // Unique identifier for the todo item.
    title: string;      // Title or description of the task.
    status: Status;     // The current status of the task (could be todo, in progress, or done).
    completedOn?: Date; // Optional field representing the completion date, if the task is done.
}

// Define an enum called `Status` that represents the possible statuses of a todo item.
enum Status {
    todo = "todo",        // Task is yet to be started.
    done = "done",        // Task is completed.
    inProgress = "in-progress" // Task is currently in progress.
}

// Sample array of todo items that represents the current list of tasks.
const todoItems: Todo[] = [
    { id: 1, title: "Learn HTML", status: Status.done, completedOn: new Date("2021-09-11") }, // A completed task.
    { id: 2, title: "Learn TypeScript", status: Status.inProgress },                          // A task in progress.
    { id: 3, title: "Write the best app in the world", status: Status.todo },                  // A task not yet started.
]

// Function to add a new todo item to the `todoItems` array.
// It takes a string `todo` (the title of the new task) and returns the newly added `Todo` object.
function addTodoItem(todo: string): Todo {
    // Get the next available unique ID for the new todo item using the `getNextId` function.
    const id = getNextId(todoItems);

    // Create a new todo item object with the generated ID, the given title, and default status as `todo`.
    const newTodo = {
        id,
        title: todo,
        status: Status.todo,  // New tasks are initially marked as 'todo'.
    };

    // Push the newly created todo item into the `todoItems` array.
    todoItems.push(newTodo);

    // Return the newly added todo item.
    return newTodo;
}

// Generic function to calculate the next available ID for a todo item based on the existing items in the array.
// T is a generic type, constrained to objects that have an `id` property (e.g., Todo).
function getNextId<T extends { id: number }>(items: T[]): number {
    // Find the maximum `id` value among the existing items using the `reduce` method.
    // It iterates over all `items` and compares their `id`s to find the largest one, then adds 1 to it for the next ID.
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1;
}

// Adding a new todo item with the title: "Buy lots of stuff with all the money we make from the app".
// The new todo item is added to the `todoItems` array and its details are returned.
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");

// Log the newly added todo item as a JSON string for easy viewing.
console.log(JSON.stringify(newTodo));
