(function () {
    function HomeCtrl($firebaseArray) {
        vm = this;
        var ref = firebase.database().ref();
        var taskList = $firebaseArray(ref);
        vm.$add = function (task) {
            taskList.$add(task);
        };
        //vm.$add("test3");
        vm.fetchTasks = function () {
            return taskList;
        };
    }
    angular.module('blocItOff').controller('HomeCtrl', ['$firebaseArray', HomeCtrl]);
})();