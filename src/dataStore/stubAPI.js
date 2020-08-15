import _ from "lodash";

class StubAPI {
    constructor() {
        this.testEntries = [
            {
                id: 1,
                title: "Creating an Online Journal for my Web App class",
                body: "This is an entry to a Stub API, to give me some data to work with while developing my web app"

            },
            {
                id: 2,
                title: "Another entry to continue testing my app",
                body: "This is a second entry to show multiple entries are stored"
            }
        ];
    }

    getAll() {
        return this.testEntries;
    }

    addEntry(title, body) {
        let id = 1;
        let last = _.last(this.testEntries);
        if (last) {
            id = last.id + 1;
        }
        let len = this.testEntries.length;
        let newLen = this.testEntries.push ({
            id,
            title,
            body
        });
        return newLen > len;
    }

    getEntry(id) {
        let index = _.findIndex(this.testEntries, entry => entry.id === id);
        let result = index !== -1 ? this.testEntries[index] : null;
        return result;
    }

    editEntry(id) {
        let index = _.findIndex(this.testEntries, entry => entry.id === id);
        
    };

}

export default new StubAPI();