const fakeDao = {
    async getAll() {
        console.log("[fakeDao] getAll");
        return [];
    },
    async getById(id) {
        console.log("[fakeDao] getById", id);
        return { id, title: "Libro falso", author: "Nadie", stock: 0 };
    },
    async getByIsbn(isbn) {
        console.log("[fakeDao] getByIsbn", isbn);
        return null;
    },
    async save(data) {
        console.log("[fakeDao] save", data);
        return { id: 1, ...data };
    },
    async update(id, changes) {
        console.log("[fakeDao] update", id, changes);
        return { id, ...changes };
    },
    async delete(id) {
        console.log("[fakeDao] delete", id);
        return true;
    }
};

export default fakeDao;