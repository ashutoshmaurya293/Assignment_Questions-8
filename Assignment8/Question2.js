function is_Valid(s) {
    let openCount = 0;  
    let asteriskCount = 0;  
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        openCount++;
      } else if (s[i] === '*') {
        asteriskCount++;
      } else {
        if (openCount > 0) {
          openCount--;
        }
        else if (asteriskCount > 0) {
          asteriskCount--;
        }
        else {
          return false;
        }
      }
    }
  

    let closeCount = 0;  
    asteriskCount = 0; 
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ')') {
        closeCount++;
      } else if (s[i] === '*') {
        asteriskCount++;
      } else {
        if (closeCount > 0) {
          closeCount--;
        }
        else if (asteriskCount > 0) {
          asteriskCount--;
        }
        else {
          return false;
        }
      }
    }
  
    return true;
  }
  
  const s = "()";
  const result = is_Valid(s);
  console.log(result);  // Output: true
  