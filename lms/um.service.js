class UmService {
    constructor() {
        this.usernameToUser = new Map();

        this.usernameToUser.set("superman", {username: "superman", password: "foobar"}); // TEMPORARY LINE
    }

    getUserByUsername(username) {
        return this.usernameToUser.get(username);
    }

    setUser(username, password) {
        this.usernameToUser.set(username, {username: username, password: password});
    }
}