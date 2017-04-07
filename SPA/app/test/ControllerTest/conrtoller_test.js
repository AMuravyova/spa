/**
 * Created by amurav on 06.04.2017.
 */
describe("ControllerTest", function(){

    let mockScope = {};
    let controller;

    beforeEach(angular.mock.module("moduleTest"));
    beforeEach(angular.mock.inject( function ($controller, $rootScope){
       mockScope = $rootScope.$new();
       controller = $controller("testController", {
           $scope: mockScope
       });
    }));

    it("Create property counter", function () {
        expect(mockScope.counter).toEqual(0);
    })

    it("Increment", function () {
        mockScope.incrementCounter();
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(2);
    })
});