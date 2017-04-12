/**
 * Created by amurav on 03.04.2017.
 */
export const transactionsStore = (Restangular) => {
    return {
        transactions: [],
        loadTransactions: () => {
            this.transactions = Restangular.all('transactions').getList().$object;
        },
        addTransaction: (transaction) => {
            let that = this;
            return Restangular.all('transactions').post({transaction: transaction})
                .then(() => {
                    that.transactions.push(transaction);
                })
        }
    }

};
























/*
https://ath3nd.wordpress.com/2013/08/05/15/
Restagular.one('someVariable').get({someParameter: $stateParams.someParameter})
    .then(function(result){
        $scope.someVariable = result;
    });

Не лучше ли определить службу, которая обрабатывает получение некоторых
переменных? Эта служба сама может зависеть от Restangular для фактического
выполнения остального вызова.
    .controller('MyController', ['Restangular', '$scope', '$stateParams', function(Restangular, $scope, $stateParams){
        $scope.someOtherVariables = Restagular.all('someOtherVariables').getList
        someOtherParameter: $stateParams.someOtherParameter,
            someEvenOtherParameter: $stateParams.someEvenOtherParameter
    });
}]);
можно переписать в

    .controller('MyController', ['SomeOtherVariableService', '$scope', '$stateParams', function(SomeOtherVariableService, $scope, $stateParams){

        $scope.someOtherVariables = SomeOtherVariableService.getSomeVariableList(
            $stateParams.someOtherParameter,
            $stateParams.someEvenOtherParameter
        );

    }]);
Дополнительное преимущество теперь в том, что у нас есть именованная функция
для получения someOtherVariable, и вы можете использовать ее в других
контроллерах / службах без необходимости повторять код. Кроме того,
модульный тест для контроллера становится очень легким во втором случае.
    Пример реализации службы может быть следующим:
    .factory('SomeOtherVariableService', ['Restangular', function SomeOtherVariableService (Restangular){
    return {
        getSomeOtherVariable: function(someParameter, someOtherParameter){
            return Restagular.one('someVariable').get({
                someParameter: someParameter,
                someOtherParameter: someOtherParameter
            });
        }
    };
}]);
Но что, если мы захотим сделать вызов Restangular в нашем сервисе и
«добавить» его дополнительно. Предположим, что вызов Restangular:

{
    someProp: 'someValue',
        someOtherProp: 'someOtherValue'
}

And we would like our service to return:
{
    someProp: 'someValue',
        someOtherProp: 'someOtherValue',
    //newly created prop
    newlyCreatedProp: 'newlyCreatedProp'
}

If you wanted to achieve that directly in a controller, you would do
    something like that:

    Restagular.one('someVariable').get({someParameter: someParameter})
        .then(function(result){
            var newRes = result;
            newRes.newlyCreatedProp = 'newlyCreatedProp';
            $scope.newRes = newRes;
        });

Однако, если вы используете службу, вы ожидаете иметь что-то вроде этого:
    $scope.newRes = SomeService.getNewRes(someParameter);

.factory('SomeVariableService', ['Restangular', '$q', function SomeVariableService (Restangular, $q){
    return {
        getNewRes: function(someParameter){
            var newResDeferred = $q.defer();
            Restagular.one('someVariable').get({someParameter: someParameter})
                .then(function(result){
                    var newRes = result;
                    newRes.newlyCreatedProp = 'newlyCreatedProp';
                    newResDeferred.resolve(newRes);
                });
            return newResDeferred.promise;
        }
    };


    angular.module('example').factory('exampleService', ['Restangular', function(Restangular){

        // this is service object with list of methods in it
        // this object will be used by controller
        var service = {
            getExamples: getExamples,
            getExample: getExample
        };

        // get examples from server by using Restangular
        function getExamples(){
            return Restangular.all('examples').getList();
        }

        // get example with given id from server by using Restangular
        function getExample(exampleId){
            return Restangular.one('examples', exampleId).get();
        }

        return service;

    }]);

    here we build exampleService now lets inject it into a controller

    angular.controller('ExampleCtrl', ['exampleService', function(exampleService){

        // get examples by using exampleService
        exampleService.getExamples().then(function (examples) {
            $scope.examples = examples;
        });

        // get example with given id by using exampleService
        exampleService.getExample('1234').then(function (examples) {
            $scope.example = example;
        });

    }]);
    */