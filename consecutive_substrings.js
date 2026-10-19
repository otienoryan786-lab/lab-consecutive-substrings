function consecutiveSubstrings(string) {

  // type your code here
  const result = []
  // start = where each substring begins
  for (let start = 0; start < string.length; start++) {
        // end = where each substring stops (exclusive), so at least 1 character
        for (let end = start + 1; end <= string.length; end++) {
          result.push(string.slice(start, end));
        }
  }
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));

  console.log("Expecting: ['a', 'ab', 'b']");
  console.log("=>", consecutiveSubstrings('ab'));
  console.log("");

  console.log("Expecting: ['a', 'aa', 'a']  (repeated letters are kept)");
  console.log("=>", consecutiveSubstrings('aa'));

  console.log("");

  console.log("Expecting: ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']");
  console.log("=>", consecutiveSubstrings('abcd'));
}

module.exports = consecutiveSubstrings;


