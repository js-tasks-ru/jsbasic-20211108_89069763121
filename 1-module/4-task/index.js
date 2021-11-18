function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  let spam1 = '1xBet';
  let spam2 = 'XXX';
  let lowerSpam1 = spam1.toLowerCase();
  let lowerSpam2 = spam2.toLowerCase();
  return lowerStr.includes(lowerSpam1) || lowerStr.includes(lowerSpam2)
}

