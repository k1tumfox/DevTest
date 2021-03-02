export function findOutlier(integers: number[]) {
  
  if (integers.length >= 3) {
    const evens = integers.filter(ele => ele%2 === 0);
    const odds = integers.filter(ele => ele%2 !== 0);

    if (evens.length > odds.length) {
      return odds[0];
    } else {
      return evens[0];
    }

  } else {
    return null;
  }
}

// notes:
// - array of integers with min length 3
// - array is either all odd or even except for a single int N
// - return "outlier" N
