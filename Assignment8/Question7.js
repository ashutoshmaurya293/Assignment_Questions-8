function decode_String(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ']') {
        stack.push(s[i]);
      } else {
        let curr = stack.pop();
        let str = '';
        while (curr !== '[') {
          str = curr + str;
          curr = stack.pop();
        }
  
        let count = '';
        curr = stack.pop();
        while (!isNaN(parseInt(curr, 10))) {
          count = curr + count;
          curr = stack.pop();
        }
        stack.push(curr); 
  
        stack.push(str.repeat(parseInt(count, 10)));
      }
    }
  
    return stack.join('');
  }
  
  const s = "3[a]2[bc]";
  const result = decode_String(s);
  console.log(result); // Output: "aaabcbc"
  