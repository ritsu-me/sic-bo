const die1 = function () {
  const num:Array<number> = [1,2,3,4,5,6]
  let rolled:number = num[~~(Math.random() * num.length)];
  return rolled;
}
const die2 = function () {
  const num:Array<number> = [1,2,3,4,5,6]
  let rolled:number = num[~~(Math.random() * num.length)];
  return rolled;
}
const die3 = function () {
  const num:Array<number> = [1,2,3,4,5,6]
  let rolled:number = num[~~(Math.random() * num.length)];
  return rolled;
}
const rolledDice:Array<number> = [die1(),die2(),die3()]
export default rolledDice;