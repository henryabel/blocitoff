(function () {
    console.log("outer function"); //works
    function HistoryCtrl($firebaseArray) {
        console.log("inner function"); //doesn't work
    }
    angular.module('blocItOff').controller('HistoryCtrl', ['$firebaseArray', HistoryCtrl]);
})();
/*vm = this;
var ref = firebase.database().ref().child("tasks");
var taskList = $firebaseArray(ref);
console.log(taskList);*/