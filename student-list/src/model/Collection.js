import StudentsApi from "./StudentsApi.js";

export  default class Collection {
    #list = [];

    fetch() {
        return StudentsApi
            .getList()
            .then((list) => {
                this.#list = list;

                return this.#list;
            })
    }

    save(todo) {
        if (todo.id) {
            return StudentsApi.update(todo.id, todo)
                .then((newTodo) => {
                    this.updateTodoKeys(todo.id, newTodo);

                    return newTodo;
                })
        }

        return StudentsApi.create(todo)
            .then((newTodo) => {
                this.#list.push(newTodo);

                return newTodo;
            })
    }

    delete(id) {
        return StudentsApi.delete(id);
    }

    updateTodoKeys(id, changes) {
        const oldTodo = this.get(id)

        Object.keys(changes).forEach(key => oldTodo[key] = changes[key]);
    }

    get(id) {
        return this.#list.find(item => item.id === id);
    }
}