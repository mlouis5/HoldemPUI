/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $("#timer").TimeCircles({
        start: true,
        animation_interval: "smooth",
        time: {
            Days: {color: "#C0C8CF", show: false},
            Hours: {color: "#C0C8CF", show: false},
            Minutes: {color: "#C0C8CF", show: false},
            Seconds: {color: "#C0C8CF"}
        }
    });

});
