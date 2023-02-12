class Collection {
    #list = [];

    fetch() {
        return StudentsApi
            .getList()
            .then((list) => {
                this.#list = list;

                return this.#list;
            })
    }
}