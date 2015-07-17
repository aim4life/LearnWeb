// Code goes here
(function(){
var creatWorker = function(){
  var count = 0;
  var task1 = function(){
	  count++;
	  console.log("Performing Task 1:"+count);
  }
  var task2 = function(s){
	  count++;
	  console.log("Performing Task 2: Arg "+s+" and count is "+count);
  }
  return {
	  job1:task1,
	  job2:task2
  };
};
var work1 = creatWorker();
work1.job1();
work1.job2("Test String");
work1.job1();
work1.job2("Test String");
work1.job1();
work1.job2("Test String");
work1.job1();
work1.job2("Test String");
work1.job1();
work1.job2("Test String");
}());

