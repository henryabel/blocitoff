(function () {
    function HomeCtrl($firebaseArray) {
        vm = this;
        console.log("home");
        var ref = firebase.database().ref();
        var taskList = $firebaseArray(ref);
        vm.$add = function (task) {
            taskList.$add(task);
        };
        //vm.$add("test3");
    }
    angular.module('blocItOff').controller('HomeCtrl', ['$firebaseArray', HomeCtrl]);
})();