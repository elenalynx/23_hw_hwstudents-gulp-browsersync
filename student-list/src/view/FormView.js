class FormView {
    static INPUTS_SELECTOR = 'input, textarea';

    constructor(options) {
        this.options = options;
        this.root = this.initView();
        this.$inputs = this.root.find(FormView.INPUTS_SELECTOR);
    }

    initView() {
        return `
            <form id="listForm" name="studentForm">
              <input id="id" type="hidden">
              <label for="name">Student Name: </label>
              <input id="name" type="text">
              <button>Save</button>
            </form>
        `;
    }

    appendTo(container) {
        container.append(this.root);
    }
}