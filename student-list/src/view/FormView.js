class FormView {
    // static INPUTS_SELECTOR = 'input, textarea';
    studentFormElement = document.querySelector('#studentForm');

    constructor() {
        // this.options = options;
        this.root = this.initView();
        this.$inputs = this.root.find(this.studentFormElement);
    }

    initView() {
        return `
            <form id="listForm" name="studentForm">
              <input id="id" type="hidden">
              <label for="name">Student Name: </label>
              <input id="name" type="text">
              <button onsubmit={onSubmit}>Save</button>
            </form>
        `;
    }

    onSubmit(e) {
        e.preventDefault()

        const data = this.getFormData()
        this.options.onSubmit(data);

    }

    appendTo(container) {
        container.append(this.root);
    }

    getFormData() {
        const contact = {}

        for (const input of this.$inputs) {
            contact[input.id] = input.value;
        }

        return contact;
    }

    setFormData(contact) {
        for (const input of this.$inputs) {
            const inputId = input.id;

            if (inputId in contact) {
                input.value = contact[inputId];
            }
        }
    }
}