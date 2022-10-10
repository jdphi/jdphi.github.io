myarray = [9,8,7,6,5,4,3,2,1]
newarray = [0,0,0,0,0]
for (let i = 0; i < myarray.length; i++) {
    for (let j = 0; j<newarray.length; j++) {
        if (newarray.includes(myarray[i])) {
            continue
        }
        else if (myarray[i] > newarray[j]) {
            newarray[j] = myarray[i]
        }
        console.log(newarray)
    }
}
console.log(newarray)