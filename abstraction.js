  /*                       Abstraction
  In this example we will demonstrate the concept 'Abstraction'.
    Here we will use the scenario of a worker that has a name, id, and 
    base salary.  When you observe the code you can see the first
    function name Worker holds the properties; name,id,and baseSalary...

    In this example the function 'Worker' is used as a constructor
    which sets the main blueprint for the objects that will be created. */


    


function Worker(name, id, baseSalary){
  this.name = name;
  this.id = id;
  this.baseSalary = baseSalary;

  this.monthlyBonus = 3500;

  this.calculateFinalSalary = function(){
      let finalSalary = this.baseSalary + this.monthlyBonus;
      console.log ('Final Salary is : '+finalSalary);
  }

  this.getWorkerDetails = function (){
      console.log ('Name : '+this.name+' ---> ID : '+this.id);
      this.calculateFinalSalary();
  }
}

let worker1 = new Worker('Franz', 46, 1000);
worker1.getWorkerDetails();


/*  Technically this code can work; however, there are a variable and a function that are vunerable to changes that could 
  greatly affect the results.  A user could possibly change the monthlyBonus that a worker is supposed to receive.  And also
  the formula inside the function 'this.calculateFinalSalary' could be altered by a user which could greatly change the results
  to results that are unintended and possibly damaging.  Therefore we need to take both the variable 'monthlyBonus' and the function
  'this.calculateFinalSalary' out of reach of the user that could easily make unintended changes.

  The user only needs to provide the Base Salary in order for this code to work and not be bothered with entering the monthly 
  bonus (variable  ---> this.MonthlyBonus) as well.

  'this.MonthlyBonus' should be changed to a function variable ---> 'let MonthlyBonus = 3500' 
  And the function 'this.calculateFinalSalary' changed to 'let calculateFinalSalary'---> 'this.baseSalary" changed to
  'baseSalary' and 'this.monthlyBonus' changed to 'monthlyBonus'

  Also in the 'this.getWorkerDetails' function, change 'this.calculateFinalSalary()' to 'calculateFinalSalary()'.

  **Note that these changes will make the function'calculateFinalSalary' and the variable 'monthlyBonus' out of reach from 
  the user because this function and variable becomes trapped inside the scope of function 'Worker';  making the function not accessible 
  outside the scope.  Therefore the user can not call nor manipulate this function nor the variable.  
  
                                            Encapsulation

   Encapsulation is a mechanism of restricting direct access to some of the objects components  
   Using part of the code from above.....*/


  this.getWorkerDetails = function (){
    console.log ('Name : '+this.name+' ---> ID : '+this.id);
    this.calculateFinalSalary();
  }

  let worker1 = new Worker('Franz', 46, 1000);
worker1.getWorkerDetails();

   
/* Neither function 'this.calculateFinalSalary' or 'this.getWorkerDetails' can be called or used directly.  For
  example...  When functions are not linked to objects, they can be called in this form ---> 'getWorkerDetails()'.
  But as you can see in the code directly above, this particular function is linked to the object 'worker1'.  
  
  So #1, the object 'worker1' is derived and created from the original object 'Worker'. 
    ---> let worker1 = new Worker('Franz', 46, 1000);

  #2, the function is then called   --->  worker1.getWorkerDetails();

  When calling functions that are linked to objects, steps must be followed before these functions can be used; therefore
  using Encapsulation.  
                                        Inheritance
                                                                                                                
Inheritance is when a created Object or Class acquire the methods and properties of parent Object or Class.  This same
  code below has inheritance.  When the new object is created --->  let worker1 = new Worker('Elroy', 55, 2000),  all the 
   properties and methods transfers from the parent object 'Worker' to the child object 'worker1'.  In the last 2 lines
   of code, you can see that the function 'this.getWorkerDetails' that is in the 'Worker" object is also used in the
   created object 'worker1'.  Any object that is created from the 'Worker' Object or function can use these methods and 
   more (prototype).  */

function Worker(name, id, baseSalary){
  this.name = name;
  this.id = id;
  this.baseSalary = baseSalary;

  this.monthlyBonus = 3500;

  this.calculateFinalSalary = function(){
      let finalSalary = this.baseSalary + this.monthlyBonus;
      console.log ('Final Salary is : '+finalSalary);
  }

  this.getWorkerDetails = function (){
      console.log ('Name : '+this.name+' ---> ID : '+this.id);
      this.calculateFinalSalary();
  }
}


let worker1 = new Worker('Elroy', 55, 2000);
worker1.getWorkerDetails();




                                        