import Collection from "./model/Collection.js";

export default class Controller {

    constructor(root) {
        this.root = root;
        this.collection = new Collection();
        this.listView = new ListView();
            // {
            // onEdit: id => this.formView.setFormData(this.collection.get(id))
        // }
        // );
        this.formView = new FormView(
            // {
            // onSubmit: todo => this.save(todo)
        // }
        );


        this.listView.appendTo(this.root);
        this.formView.appendTo(this.root);

        this.collection
            .fetch()
            .then((list) => {
                this.listView.renderList(list);
            })
    }

    // save(todo) {
    //     this.collection
    //         .save(todo)
    //         .then((newTodo) => {
    //             if (todo.id) {
    //                 this.listView.replaceTodo(newTodo.id, newTodo);
    //             } else {
    //                 this.listView.renderTodo(newTodo);
    //             }
    //         });
    // }
    //
    // delete(id) {
    //     this.collection
    //         .delete(id)
    //         .then(() => {
    //             this.listView.remove(id);
    //         })
    // }
}
