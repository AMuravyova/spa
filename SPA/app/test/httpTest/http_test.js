/**
 * Created by amurav on 06.04.2017.
 */
describe("HTTP service test", function(){

    let mockScope = {};
    let controller;
    let backend;

    beforeEach(angular.mock.module("moduleTest"));
    beforeEach(angular.mock.inject( function ($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "baseData.json")
            .respond([
                {"name": "item 1"},
                {"name": "item 2"},
                {"name": "item 3"}
            ]);
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http) {
        mockScope = $rootScope.$new();
        controller = $controller("testController", {
            $scope: mockScope,
            $http: $http
        });
        backend.flush();
    }));

    it("Ajax request", function () {
        backend.verifyNoOutstandingExpectation();
    });


});