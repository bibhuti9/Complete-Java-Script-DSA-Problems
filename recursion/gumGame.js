function Josh(person, k, index) {
    if (person.length == 1) {
        return;
    }
    index = ((index + k) % person.length);
    if (index > -1) {
        person.splice(index, 1);
    }
    console.log(person);
    Josh(person, k, index);
}
var k = 2;
var index = 0; // The index where the person which will die
Josh([0,1,2,3,4], k, index);