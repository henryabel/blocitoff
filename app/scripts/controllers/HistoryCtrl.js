(function () {
    function HistoryCtrl(FireArray) {
        var vm = this;
        vm.fetchTasks = function () {
            return FireArray.all;
        };
        vm.oldAndCompletedTasks = function (task, index) {
            return FireArray.sortTasks(task, index);
        };
    }
    angular.module('blocItOff').controller('HistoryCtrl', ['FireArray'
        , HistoryCtrl]);
})();