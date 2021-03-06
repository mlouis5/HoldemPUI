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
            var gameState = undefined;
            var pId = undefined;
            var email = undefined;
            var fName = undefined;
            var lName = undefined;
            var gameCode = undefined;
            var dialog = undefined;

            sharedService.connect = function (callback) {
                if (!isSocketSet) {
                    socket = new WebSocket('ws://localhost:9595/');
                    console.log(socket);

                    if (socket) {
                        isSocketSet = true;

                        socket.onmessage = function (evt) {
                            gameState = JSON.parse(evt.data);
                            console.log(gameState)
                            if (gameState !== undefined) {
                                $(dialog).fadeOut(600, closeDialog);
                                sharedService.broadCastGameState(gameState);
                            }
                        };
                        socket.onopen = function () {
//                            socket.send({
//                                header: 'Ping',
//                                payload: null
//                            }); // Send the message 'Ping' to the server
                            isSocketSet = true;
                            if (callback) {
                                callback();
                            }
                        };
                        socket.onclose = function () {
                            pId = undefined;
                            socket = undefined;
                            isSocketSet = false;
                            gameState = undefined;
                            dialog = undefined;
                            sharedService.broadCastGameState(gameState);
                        };
                        socket.onerror = function (evt) {
                            console.log(evt.data);
                        };
                    }
                }
                return isSocketSet;
            };

            sharedService.register = function () {
                socket.send(JSON.stringify({
                    header: 'sign_in',
                    pid: pId,
                    payload: {
                        email: email,
                        fName: fName,
                        lName: lName,
                        gameId: gameCode
                    }
                }));
            };

            sharedService.sendBySocket = function (singleGameState) {
                socket.send(JSON.stringify(singleGameState));
            };

            sharedService.disconnectSocket = function () {
                socket.close();
                isSocketSet = false;
            };

            sharedService.broadCastGameState = function (state) {
                $rootScope.$broadcast('gameState', {
                    gameState: state
                });
            };
            sharedService.broadCastPInfo = function () {
                $rootScope.$broadcast('pInfo', {
                    pid: pId,
                    email: email,
                    fName: fName,
                    lName: lName
                });
            };

            var signIn = function (email, fName, lName, gameCode) {
                if (pId === undefined) {
                    pId = md5(fName + lName + email);
                    sharedService.broadCastPInfo();
                    console.log("PID: " + pId);
                    sharedService.connect(sharedService.register);
                }
            };

            sharedService.initSignInButton = function () {
                $("#register-dialog-button").on('click', function () {
                    email = $("#register-email").val();
                    fName = $("#register-fname").val();
                    lName = $("#register-lname").val();
                    gameCode = $("#register-code").val();

                    console.log("email: " + email);
                    console.log("code: " + gameCode);

                    if (email !== undefined && gameCode !== undefined
                            && fName !== undefined && lName !== undefined) {
                        signIn(email, fName, lName, gameCode);
                    }
                });
            };

            init();
            function init() {
                if (pId === undefined) {
                    dialog = document.getElementById("signInDialog");
                    dialog.showModal();
                    console.log("dialog");
                    console.log(dialog);
                    sharedService.initSignInButton();
                }
            }

            function closeDialog() {
                dialog.close();
                dialog = undefined;
            }
            return sharedService;
        }]);
})();
