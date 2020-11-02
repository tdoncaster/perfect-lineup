function totalPlayer(lineup) {
  let totalSalary = 0

  for (let i = 0; i < lineup.length; i++) {
    totalSalary += lineup[i].salary
  }
  if (totalSalary <= 45000) {
    return true
  } else {
    return false
  }
}

function teamCounter(lineup) {
  const playersPerTeam = lineup.reduce((agg, player) => {
    const { teamId } = player

    agg[teamId] = agg[teamId] ? agg[teamId] + 1 : 1

    return agg
  }, {})
  for (let key in playersPerTeam) {
    if (playersPerTeam[key] > 2) {
      return false
    }
  }

  return true
}

function gameCounter(lineup) {
  const playersPerGame = lineup.reduce((agg, player) => {
    const { gameId } = player

    agg[gameId] = agg[gameId] ? agg[gameId] + 1 : 1

    return agg
  }, {})

  for (let key in playersPerGame) {
    if (playersPerGame[key] > 3) {
      return false
    }
  }

  return true
}

function posCounter(lineup) {
  const positionlist = ['P', 'C', '1B', '2B', '3B', 'SS']
  const positions = lineup.reduce((agg, player) => {
    const { position } = player

    agg[position] = agg[position] ? agg[position] + 1 : 1

    return agg
  }, {})

  for (let key in positions) {
    if (key === 'OF' && positions[key] !== 3) {
      return false
    }
    else if (positions[key] !== 1 && positionlist.includes(key)) {
      return false
    }
  }

  return true
}

const lineup = [{
  id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
  id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
}, {
  id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
}, {
  id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
}, {
  id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
}, {
  id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
}, {
  id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
}, {
  id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
}, {
  id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
}]








function validateLineup(lineup) {
  return totalPlayer(lineup) &&
    gameCounter(lineup) &&
    teamCounter(lineup) &&
    posCounter(lineup) &&
    lineup.length === 9
}








validateLineup(lineup)
module.exports = validateLineup


