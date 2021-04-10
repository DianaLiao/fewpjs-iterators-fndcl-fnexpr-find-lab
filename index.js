
const superbowlWin = array => {
  let winner = array.find(entry => entry.result === "W")
  if (winner) return winner.year
}
