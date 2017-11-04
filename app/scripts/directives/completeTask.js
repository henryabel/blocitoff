(function () {
    function completeTask(FireArray) {
        return {
            restrict: 'E'
            , scope: {}
            , templateUrl: '/templates/completeTask.html'
            , link: function (scope) {
                scope.test = function (index) {
                    console.log(index);
                };
            }
        };
    }
    angular.module('blocItOff').directive('completeTask', ['FireArray', completeTask]);
})();