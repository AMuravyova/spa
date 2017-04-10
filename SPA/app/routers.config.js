/**
 * Created by amurav on 28.03.2017.
 */
export const Routes = ($stateProvider, $urlRouterProvider) => {

    //RestangularProvider.setBaseUrl("http://localhost:3000/appDB/");

    // Restangular.withConfig(function(RestangularConfigurer) {
    //     RestangularConfigurer.setBaseUrl('http://localhost:3000/appDB/')});

    // RestangularProvider.setDefaultRequestParams({apikey: apikey});
    // RestangularProvider.setRestangularFields({
    //   id: '_id.$oid'
    // });
    // RestangularProvider.setRequestInterceptors((elem, operation, what) => {
    //   if (operation === 'put'){
    //     elem._id = undefined;
    //     return elem;
    //   }
    //   return elem;
    // });

    $stateProvider
        .state('page',{
            abstract: true,
            templateUrl: '../index.html'
        })
        .state('page.home',{
            url: '/home',
            templateUrl: '../pages/home-page/home.html'

        })
        .state('page.home.dashboard',{
            url: '/dashboard',
            templateUrl: '../pages/dashboard-page/dashboard.html'
            
        })
        .state('page.home.documents',{
            url: '/documents',
            templateUrl: '../pages/documents-page/documents.html'
            
        })
        .state('page.home.images',{
            url: '/images',
            templateUrl: '../pages/images-page/images.html'
            
        })

        .state('page.home.team',{
            url: '/team',
            templateUrl: '../pages/team-page/team.html'
            
        })

        .state('page.home.account',{
            url: '/account',
            templateUrl: '../pages/account-page/account.html'
        })

        .state('page.sing',{
            url: '/sing',
            templateUrl: '../pages/sing-page/sing.html'
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

    $urlRouterProvider.when('','/sing');
};
