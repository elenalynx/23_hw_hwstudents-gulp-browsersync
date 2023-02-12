class Controller {

    constructor(root) {
        // this.root = root;
        this.collection = new Collection();
        this.listView = new ListView();
        this.formView = new FormView();


        this.listView.appendTo(root);
        this.formView.appendTo(root);

        this.collection
            .fetch()
            .then((list) => {
                this.listView.renderList(list);
            })
    }
}
