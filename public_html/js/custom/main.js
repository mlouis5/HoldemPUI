/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    var hal = angular.module('HoldemApp', ['ngRoute']);

    hal.factory('sharedService', ["$rootScope", '$timeout', function ($rootScope, $timeout) {
            var sharedService = {};
            var socket;
            var isSocketSet = false;
            var gameState;
            var pId;

            sharedService.connect = function () {
                if (!isSocketSet) {
                    socket = new WebSocket('ws://localhost:9595/');
                    console.log(socket);
                    if (socket) {
                        isSocketSet = true;
                    }
                    socket.onmessage = function (evt) {
                        sharedService.gameState = evt.data;
                        sharedService.broadCastGameState(sharedService.gameState);
                    };
                }
            };
            
            sharedService.register = function (registration) {
                socket.send(JSON.stringify(registration));
            };

            sharedService.sendBySocket = function (singleGameState) {
                socket.send(JSON.stringify(singleGameState));
            };

            sharedService.disconnectSocket = function () {
                socket.close();
                isSocketSet = false;
            };

            sharedService.broadCastGameState = function (state) {
                $rootScope.$broadcast("'gameState'", {
                    gameState: state
                });
            };
            return sharedService;
        }]);
})();
