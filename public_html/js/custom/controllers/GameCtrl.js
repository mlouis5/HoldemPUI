/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    var hal = angular.module('HoldemApp');

    function GameController($scope, $rootScope, sharedService) {


//        init();
//
//        function init() {
//            console.log("calling sharedService.connect");
//            sharedService.connect();
//        }
        $scope.pPid = undefined;
        $scope.pFname = undefined;
        $scope.pLname = undefined;
        $scope.pEmail = undefined;
        $scope.me = undefined;

        $scope.gameState;
        
        $scope.findMe = function(element, index, arr){
            if(element.playerId === $scope.pPid){
                $scope.me = element;
            }
        }

        $rootScope.$on('gameState', function (event, broadcast) {
            $scope.gameState = broadcast.gameState;            
            $scope.gameState.players.forEach($scope.findMe);
            $scope.$apply();
            console.log("GameState:");
            console.log($scope.gameState);
        });
        
        $rootScope.$on('pInfo', function (event, braodcast) {
            $scope.pPid = braodcast.pid;
            $scope.pFname = braodcast.fName;
            $scope.pLname = braodcast.lName;
            $scope.pEmail = braodcast.email;
        });

        var square = new ProgressBar.Square('#user', {
            strokeWidth: 2,
            duration: 1200
        }).a;
    }

    hal.controller('GameCtrl', ["$scope", "$rootScope", "sharedService", GameController]);

}());

