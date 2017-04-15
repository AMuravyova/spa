/**
 * Created by amurav on 13.04.2017.
 */
export class AccountController {
    constructor(authService) {
        this.authService = authService;
        this.currentUser = this.authService.getUser();
    }

    getCurrentUser () {
        return this.currentUser;
    }
}