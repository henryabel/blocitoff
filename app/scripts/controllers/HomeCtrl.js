(function () {
    function HomeCtrl(FireArray) {
        vm = this;
        vm.fetchTasks = function () {
            return FireArray.all;
        };
        vm.activeTasks = function (task, index) {
            return FireArray.sortTasks(task, index);
        };
        vm.addTask = function () {
            FireArray.add(vm.taskName, vm.priority);
        }
    }
    angular.module('blocItOff').controller('HomeCtrl', ['FireArray'
        , HomeCtrl]);
})();