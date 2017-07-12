'use strict';

function quickSort(input) {

 try { 
    if(input.constructor === Array)
    {

      if (input.length > 1) {
            var Pivot = input[0];

              var lessThanPivot = [];
              var greaterThanPivot = [];

              for (var i = 1; i < input.length; i++) {
                  if(input[i] < Pivot)
                    lessThanPivot.push(input[i]);
                  else
                    greaterThanPivot.push(input[i]);
              }

           //var sortedArray=quickSort(lessThanPivot);
            //sortedArray.concat(Pivot);
           //sortedArray.concat(quickSort(greaterThanPivot));
           //return sortedArray;
          return quickSort(lessThanPivot).concat(Pivot).concat(quickSort(greaterThanPivot));
        }
        else
        return input;
    }
       else
       throw "Input is not an array"
    }
    catch(err) {
       throw err;
    }


};
module.exports = quickSort;