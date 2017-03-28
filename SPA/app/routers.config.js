/**
 * Created by amurav on 28.03.2017.
 */
export function Routes ($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('page',{
            abstract: true,
            templateUrl: '../index.html'
        })
        .state('page.home',{
            url: '/home',
            templateUrl: '../pages/home-page/home.html'

        })
        .state('page.dashboard',{
            url: '/dashboard',
            templateUrl: '../pages/dashboard-page/dashboard.html'
            
        })
        .state('page.documents',{
            url: '/documents',
            templateUrl: '../pages/documents-page/documents.html'
            
        })
        .state('page.images',{
            url: '/images',
            templateUrl: '../pages/images-page/images.html'
            
        })

        .state('page.requests',{
            url: '/requests',
            templateUrl: '../pages/requests-page/requests.html'
            
        })

        .state('page.account',{
            url: '/account',
            controller: 'accountCtrl',
            templateUrl: '../pages/account-page/account.html'
        })

        .state('page.logout',{
            url: '/logout',
            controller: 'logoutCtrl',
            templateUrl: '../pages/logout-page/logout.html'
        });

    //     .state('page.images.image', {
    //         url: '/:pageName',
    //         templateUrl: function ($stateParams) {
    //             return '/app/images/' +
    //                 $stateParams.pageName + '.html';
    //         }
    //     })
    //
    //     .state('page.requests.request', {
    //         url: '/:pageName',
    //         templateUrl: function ($stateParams) {
    //             return '/app/requests/' +
    //                 $stateParams.pageName + '.html';
    //         }
    //     })
    //
    //     .state('page.documents.document', {
    //     url: '/:pageName',
    //     templateUrl: function ($stateParams) {
    //         return '/app/documents/' +
    //             $stateParams.pageName + '.html';
    //     }
    // });

    $urlRouterProvider.when('','/home');
};
