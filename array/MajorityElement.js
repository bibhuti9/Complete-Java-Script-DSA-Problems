// N = 5 
// A[] = {3,1,3,3,2} 
// Output:
// 3

class Solution {
    
    majorityElement(a, size)
    {
        var currentElement=a[0];
        var count=0;
        for(var i=1;i<a.length;i++){
            if(a[i]==currentElement){
                count=0;
                currentElement=a[i];
            }else{
                if(count>0){
                    count--;
                }else{
                    count--;
                    currentElement=a[i]
                }
            }
        }
        console.log(`${currentElement} ${count}`);
    }
}
var obj = new Solution();
obj.majorityElement([3,1,3,3,2],5);