/**
 * Created by amurav on 30.03.2017.
 */
export const serviceFile = (Restangular) => {

    var service = {
        getDocuments: getDocuments,
        getDocument: getDocument,
        getImages: getImages,
        getImage: getImage
    };

    // get examples from server by using Restangular
    let getDocuments = () => {
        return Restangular.all('documents').getList();
    };

    // get example with given id from server by using Restangular
    let getDocument = (documentId) => {
        return Restangular.one('documents', documentId).get();
    };

    let getImages = () => {
        return Restangular.all('images').getList();
    };


    let getImage = (imageId) => {
        return Restangular.one('image', imageId).get();
    };

    return service;

    // return $resource('phones/:phoneId.json', {}, {
    //     query: {
    //         method: 'GET',
    //         params: {phoneId: 'phones'},
    //         isArray: true
    //     }
    // });
    // return {
    //     sortFilesDesc: () => {},
    //     sortFilesAsc: () => {},
    //     getFilesByUser: (currentUser) => {},
    //     getFirstEigthtFiles: () => {},
    //     addFile: () => {},
    //     delFile: (id) => {}
    // }
};