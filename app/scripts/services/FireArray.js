(function () {
    function FireArray($firebaseArray) {
        vm = this;
        var ref = firebase.database().ref().child("tasks");
        var taskList = $firebaseArray(ref);
        FireArray.all = taskList;
        FireArray.sortTasks = function (task, index) {
            var todaysDate = new Date().getTime();
            var sevenDaysInMilliseconds = 604800000;
            if (task.date < (todaysDate - sevenDaysInMilliseconds)) {
                if (task.state != "expired") {
                    taskList[index].state = "expired";
                    taskList.$save(index);
                }
            }
            if (task.state == "expired" || task.state == "completed") return true;
            else return false;
        };
        FireArray.add = function (taskName, priority) {
            //console.log(taskList);
            function convertToNum() {
                if (priority == "High") {
                    return 1;
                }
                else if (priority == "Medium") {
                    return 2;
                }
                else {
                    return 3;
                }
            }
            taskList.$add({
                date: new Date().getTime()
                , description: taskName
                , priority: convertToNum()
                , state: "active"
            });
        };
        return FireArray;
    }
    angular.module('blocItOff').factory('FireArray', ['$firebaseArray', FireArray]);
})();