function addTwo(num: number) {
  return num + 2;
}
console.log(addTwo(4));

function abcd(): string {
  return "abcd";
}
console.log(abcd());

function voidExample(): void {
  console.log("void example");
}
voidExample();
function neverExample(): never {
  while (true) {
    console.log("infinite run");
  }
}
neverExample();
