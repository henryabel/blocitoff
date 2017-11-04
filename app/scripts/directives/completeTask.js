(function () {
    function completeTask(FireArray) {
        return {
            restrict: 'E'
            , scope: true
            , templateUrl: '/templates/completeTask.html'
            , link: function (scope, elements, attributes) {
                scope.completion = function (task) {
                    FireArray.completeTask(task);
                };
            }
        };
    }
    angular.module('blocItOff').directive('completeTask', ['FireArray', completeTask]);
})();