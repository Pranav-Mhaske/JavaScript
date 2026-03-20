console.log('Program Started')

const friends = [] //Empty array to store the names of friends

const i = prompt('Enter the number of friends you want to add') // variable to keep track of the number of friends added

let count = 0 // variable to keep track of the number of friends added

while(count < i) {
    const name = prompt('Enter the name of your friend')
    friends.push(name)
    count++
}

console.log(friends);

console.log('Program Ended')