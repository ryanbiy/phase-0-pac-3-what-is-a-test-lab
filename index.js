const name = "Susan";
const height = 30;
test('height is less than 40', () => {
    expect(height).toBeLessThan(40);
  }); 
const message = `${name} is ${height} inches tall`;
module.exports = {name, height, message};
console.log(message)