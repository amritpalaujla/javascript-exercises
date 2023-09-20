const removeFromArray = function(array, ...args) {
const resultingArray = []

array.forEach((item) =>
{
if(!args.includes(item)){
    resultingArray.push(item)
}
});
return resultingArray
};

// Do not edit below this line
module.exports = removeFromArray;
