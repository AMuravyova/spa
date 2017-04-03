/**
 * Created by amurav on 30.03.2017.
 */
export const serviceFile = ($resource) => {
    return $resource('phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
        }
    });
    // return {
    //     sortFilesDesc: () => {},
    //     sortFilesAsc: () => {},
    //     getFilesByUser: (currentUser) => {},
    //     getFirstEigthtFiles: () => {},
    //     addFile: () => {},
    //     delFile: (id) => {}
    // }
};