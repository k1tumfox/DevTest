export function isValidWalk(walk: string[]) {
  const nCount = walk.filter(path => path === 'n').length;
  const sCount = walk.filter(path => path === 's').length;
  const eCount = walk.filter(path => path === 'e').length;
  const wCount = walk.filter(path => path === 'w').length;

  if (walk.length === 10 && nCount === sCount && eCount === wCount) {
    
    return true;
  } else {
    return false;
  }
}

// notes
// - 1 min / block
// - return true if app gives you path that takes 10 min and returns to starting point
// - you will always reveice a valid array containing n,s,e,w