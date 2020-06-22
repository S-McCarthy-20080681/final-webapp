import _ from "lodash";

class StubAPI {
    constructor() {
        this.entries = [
            {
                id: 1,
                title: "Creating an Online Journal for my Web App class",
                date: "13-05-2020",
                body: "This is an entry to a Stub API, to give me some data to work with while developing my web app"

            },
            {
                id: 2,
                title: "Another entry to show the sort-by-date feature",
                date: "01-06-2020",
                body: "This is an entry dated in a different month from the previous entry, to show posts are sorted into their correct date categories"
            }
        ];
    }

    getAll() {
        return this.entries;
    }

    addEntry(title, date, body) {
        let id = 1;
        let last = _.last(this.entries);
        if (last) {
            id = last.id + 1;
        }
        let len = this.entries.length;
        let newLen = this.entries.push ({
            id,
            title,
            date,
            body
        });
    }

    getEntry(id) {
        let index = _.findIndex(this.entries, entry => entry.id === id);
        let result = index !== -1 ? this.entries[index] : null;
        return result;
    }

}

export default new StubAPI();