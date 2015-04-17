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

        $scope.gameState = {
            playOrder: {
                smallBlind: {
                    "playerFirstName": null,
                    "playerLastName": null,
                    "playerEmail": null,
                    "playerId": null,
                    "holeCards": [null, null],
                    "isDealer": false,
                    "isBigBlind": false,
                    "isAllIn": false,
                    "actionOrder": 0,
                    "action": null,
                    "availableActions": null,
                    "playerName": "null null",
                    "playerNumber": 1,
                    "eliminated": false,
                    "isSmallBlined": false,
                    "stack": -1
                },
                bigBlind: {
                    "playerFirstName": null,
                    "playerLastName": null,
                    "playerEmail": null,
                    "playerId": null,
                    "holeCards": [null, null],
                    "isDealer": false,
                    "isBigBlind": false,
                    "isAllIn": false,
                    "actionOrder": 0,
                    "action": null,
                    "availableActions": null,
                    "playerName": "null null",
                    "playerNumber": 1,
                    "eliminated": false,
                    "isSmallBlined": false,
                    "stack": -1
                },
                button: {
                    "playerFirstName": null,
                    "playerLastName": null,
                    "playerEmail": null,
                    "playerId": null,
                    "holeCards": [null, null],
                    "isDealer": false,
                    "isBigBlind": false,
                    "isAllIn": false,
                    "actionOrder": 0,
                    "action": null,
                    "availableActions": null,
                    "playerName": "null null",
                    "playerNumber": 1,
                    "eliminated": false,
                    "isSmallBlined": false,
                    "stack": -1
                },
                nextToAct: {
                    "playerFirstName": null,
                    "playerLastName": null,
                    "playerEmail": null,
                    "playerId": null,
                    "holeCards": [null, null],
                    "isDealer": false,
                    "isBigBlind": false,
                    "isAllIn": false,
                    "actionOrder": 0,
                    "action": null,
                    "availableActions": null,
                    "playerName": "null null",
                    "playerNumber": 1,
                    "eliminated": false,
                    "isSmallBlined": false,
                    "stack": -1
                },
                players: [{
                        "playerFirstName": null,
                        "playerLastName": null,
                        "playerEmail": null,
                        "playerId": null,
                        "holeCards": [null, null],
                        "isDealer": false,
                        "isBigBlind": false,
                        "isAllIn": false,
                        "actionOrder": 0,
                        "action": null,
                        "availableActions": null,
                        "playerName": "null null",
                        "playerNumber": 1,
                        "eliminated": false,
                        "isSmallBlined": false,
                        "stack": -1
                    }, {
                        "playerFirstName": null,
                        "playerLastName": null,
                        "playerEmail": null,
                        "playerId": null,
                        "holeCards": [null, null],
                        "isDealer": false,
                        "isBigBlind": false,
                        "isAllIn": false,
                        "actionOrder": 0,
                        "action": null,
                        "availableActions": null,
                        "playerName": "null null",
                        "playerNumber": 4,
                        "eliminated": false,
                        "isSmallBlined": false,
                        "stack": -1
                    }, {
                        "playerFirstName": null,
                        "playerLastName": null,
                        "playerEmail": null,
                        "playerId": null,
                        "holeCards": [null, null],
                        "isDealer": false,
                        "isBigBlind": false,
                        "isAllIn": false,
                        "actionOrder": 0,
                        "action": null,
                        "availableActions": null,
                        "playerName": "null null",
                        "playerNumber": 3,
                        "eliminated": false,
                        "isSmallBlined": false,
                        "stack": -1
                    }, {
                        "playerFirstName": null,
                        "playerLastName": null,
                        "playerEmail": null,
                        "playerId": null,
                        "holeCards": [null, null],
                        "isDealer": false,
                        "isBigBlind": false,
                        "isAllIn": false,
                        "actionOrder": 0,
                        "action": null,
                        "availableActions": null,
                        "playerName": "null null",
                        "playerNumber": 2,
                        "eliminated": false,
                        "isSmallBlined": false,
                        "stack": -1
                    }],
                bigAmt: 0,
                smallAmt: 0
            },
            pots: null,
            board: {
                board: [{
                        "suit": "HEART",
                        "rank": "TEN",
                        "isBurned": false,
                        "cardString": "ten_of_hearts"
                    }, {
                        "suit": "DIAMOND",
                        "rank": "SEVEN",
                        "isBurned": false,
                        "cardString": "seven_of_diamonds"
                    }, {
                        "suit": "SPADE",
                        "rank": "SEVEN",
                        "isBurned": false,
                        "cardString": "seven_of_spades"
                    }, {
                        "suit": "HEART",
                        "rank": "EIGHT",
                        "isBurned": false,
                        "cardString": "eight_of_hearts"
                    }, {
                        "suit": "HEART",
                        "rank": "KING",
                        "isBurned": false,
                        "cardString": "king_of_hearts"
                    }],
                flop: [{
                        "suit": "HEART",
                        "rank": "TEN",
                        "isBurned": false,
                        "cardString": "ten_of_hearts"
                    }, {
                        "suit": "DIAMOND",
                        "rank": "SEVEN",
                        "isBurned": false,
                        "cardString": "seven_of_diamonds"
                    }, {
                        "suit": "SPADE",
                        "rank": "SEVEN",
                        "isBurned": false,
                        "cardString": "seven_of_spades"
                    }],
                turn: {
                    "suit": "HEART",
                    "rank": "EIGHT",
                    "isBurned": false,
                    "cardString": "eight_of_hearts"
                },
                river: {
                    "suit": "HEART",
                    "rank": "KING",
                    "isBurned": false,
                    "cardString": "king_of_hearts"
                }
            }
        };
        
        $rootScope.$on('gameState', function (event, updatedValues) {
            $scope.gameState = updatedValues.gameState;
            $scope.$apply();
            console.log("MODEL:");
            console.log($scope.gameState);
        });
    }

    hal.controller('GameCtrl', ["$scope", "$rootScope", "sharedService", GameController]);

}());

