class AuthService {

    constructor(umService, permissionService) {
        this.umService = umService;
        this.permissionService = permissionService;
    }

    login(username, password) {
        let user = this.umService.getUserByUsername(username);

        if(user == null) {
            throw new Error(`user with ${username} not found`);
        }

        if(user.password === EncryptionHelper.encrypt(password)) {
            let userPermissions = this.permissionService.getPermissions(user.role);

            sessionStorage.setItem('authInfo', JSON.stringify({
                user: user,
                permissions: userPermissions
            }));
        } else {
            throw new Error(`incorrect username or password`);
        }
        return user;
    }

    logout() {
        sessionStorage.removeItem('authInfo');
    }

    isLogined() {
        return sessionStorage.getItem('authInfo') != null;
    }

    signUp(username, password) { // TODO needs to be changed
        password = EncryptionHelper.encrypt(password);
        this.umService.setUser(username, password);
    }
}