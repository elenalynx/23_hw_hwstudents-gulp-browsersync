class ListView {
    studentListElement = document.querySelector('#studentList');

    constructor(options) {
        this.options = options;
        this.root = this.initView();
    }

    initView() {
        this.renderList();
        return `
        <table id="listTable">
            <tr>
                <th>Name</th>
                <th colspan="10">Marks</th>
                <th>Actions</th>
            </tr>
            <tbody id="studentList">

            </tbody>
        </table>
        `;
    }

    appendTo(container) {
        container.append(this.root);
    }

    renderList(list) {
        const html = list.map(this.generateStudentHtml).join('');

        this.studentListElement.innerHTML = html;
    }

    renderOne(student) {
        const html = this.generateStudentHtml(student);

        this.studentListElement.insertAdjacentHTML('beforeend', html)
    }

    generateStudentHtml(student) {
        return `
        <tr data-id="${student.id}" class="studentItem">
            <td>${student.name}</td>
            ${this.generateStudentMarks(student.marks)}
            <td>
            <button class="deleteBtn">Delete</button>
        </td>
      </tr>
`;
    }

    generateStudentMarks(marks) {
        return marks.reduce((acc, mark) => {
            return acc + `
           <td>
            <input class="markInput" type="text" value="${mark}">
           </td>
        `;
        }, '')
    }
}