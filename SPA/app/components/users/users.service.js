/**
 * Created by amurav on 12.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */
/**
 * Created by amurav on 08.04.2017.
 */

export class UsersService {

    constructor(Restangular){
        this.Restangular = Restangular;
        this.users = Restangular.all('users');
    }

    getUsers() {
        return this.users.getList().$object;
    }

    addUser(newUser) {
        this.users.post(newUser).then((newUsr) => {
            this.users = users.getList();
        })
    }



//customer
    getUserByEmailPassword (userDetails) {
    return this.user.get({email: email,
        password: password})
        .then((result) => {
                this.user = result;
            },
            (error) => {
                alert('Incorrect e-mail or password. Try enter again.');
            }
        );
    }
}

// export const usersService = (Restangular, $state) => {
//
//     let users = Restangular.all('users');
//
//
//     return {
//
//         getUsers: () => {
//             return users.getList().$object;
//         },
//
//         addUser: (newUser) => {
//             let users = Restangular.all('users');
//             users.post(newUser).then((newUsr) => {
//                 users = users.getList();
//             })
//         },
//
//         //customer
//         getUserByEmailPassword: (userDetails) => {
//             return user.get({email: email,
//             password: password})
//                 .then((result) => {
//                     user = result;
//                 },
//                     (error) => {
//                 alert('Incorrect e-mail or password. Try enter again.');
//                     });
//         }
//     }
// };


//Restangular.all('users').customGET('documents', {team: 'team'});
//Restangular.one('users','userEmail').customGET('documents');


