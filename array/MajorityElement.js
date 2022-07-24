function printMajority(a, size)
    {
        /* Find the candidate for Majority*/
        let cand = findCandidate(a, size);
   
        /* Print the candidate if it is Majority*/
        if (isMajority(a, size, cand))
            console.log(cand);
        else
            console.log("No Majority Element");
    }
   
    /* Function to find the candidate for Majority */
    function findCandidate(a, size)
    {
        let maj_index = 0, count = 1;
        let i;
        for (i = 1; i < size; i++) {
            if (a[maj_index] == a[i])
                count++;
            else
                count--;
   
            if (count == 0) {
                maj_index = i;
                count = 1;
            }
        }
        return a[maj_index];
    }
   
    // Function to check if the candidate
    // occurs more than n/2 times
    function isMajority(a, size, cand)
    {
        let i, count = 0;
        for (i = 0; i < size; i++) {
            if (a[i] == cand)
                count++;
        }
        if (count > parseInt(size / 2, 10))
            return true;
        else
            return false;
    }
      
    let a = [ 1, 3, 3, 1, 2 ,1];
    let size = a.length;
  
    // Function call
    printMajority(a, size);