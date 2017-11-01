(function () {
    function HomeCtrl($firebaseArray) {
        vm = this;
        var ref = firebase.database().ref().child("tasks");
        var taskList = $firebaseArray(ref);
        vm.fetchTasks = function () {
            return taskList;
        };
        vm.oldAndCompletedTasks = function (task, index) {
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
    }
    angular.module('blocItOff').controller('HomeCtrl', ['$firebaseArray', HomeCtrl]);
})();
//temporary add function:
/* taskList.$add({
     date: new Date().getTime()
     , description: "test3"
     , priority: "high"
     , state: "completed"
 , });
 taskList.$add(); */
/*
(function () {
    function HomeCtrl($firebaseArray) {
        vm = this;
        var ref = firebase.database().ref();
        var taskList = $firebaseArray(ref);
        //taskList[1].state = "changed";
        //taskList.$save(0);
        //vm.add = function (task) {
        //    taskList.$add(task);
        //};
        vm.save = function (index) {
            taskList.$save(index).then(function (ref) {
                taskList.ref.key() === taskList[index].$id; // true
            });
        };
        taskList.$add({
            date: new Date().getTime()
            , description: "tst"
            , priority: "high"
            , state: "active"
        , });
        //vm.save();
        /*vm.add({
            description: "text4"
            , date: new Date().getTime()
            , priority: "high"
            , state: "active"
        });
        vm.fetchTasks = function () {
            return taskList;
        };
        vm.oldAndCompletedTasks = function (task, index) {
            debugger;
            if (task.date == 1509079801755) {
                task.state = "changed";
            }
            //            taskList.$save(index); //Causes an endless loop
            console.log("in old");
            if (task.state == "expired" || task.state == "completed") return true;
            else return false;
        };
    }
    angular.module('blocItOff').controller('HomeCtrl', ['$firebaseArray', HomeCtrl]);
})();
*/