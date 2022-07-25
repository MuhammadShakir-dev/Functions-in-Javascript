  /*
  I do nothing but creates a function and set two arguments in that and returns a function in that and the nested function returns a range of min and max
  in the last i make three variables to test my function and set the range in each of them
  */
  function isBetweenRange(min,max){
            return function(num){
                return num >=min && num <=max;
            }
        }

        isChild = isBetweenRange(1,18);
        isAdult = isBetweenRange(19,65);
        isSenior = isBetweenRange(65,100);

        
