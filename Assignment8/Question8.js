function can_Swap(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const diff = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        diff.push(i);
      }
    }
  
    if (diff.length !== 2) {
      return false;
    }
  
    const [i, j] = diff;
    return s[i] === goal[j] && s[j] === goal[i];
  }
  