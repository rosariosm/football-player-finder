import { createSelector } from 'reselect'
import moment from 'moment'

const getPlayers = (state) => state.footballPlayers.players
const getFilters = (state) => state.footballPlayers.filters

export const getNormalizedPlayers = createSelector(
  getPlayers,
  players => players.map(function(player){
    return {
      name: player.name,
      position: player.position,
      nationality: player.nationality,
      age: moment().diff(moment(player.dateOfBirth, 'YYYY-MM-DD'), 'years')
    }
  })
)

export const getVisiblePlayers = createSelector(
 [ getNormalizedPlayers, getFilters ],
 (players, filters) => {    
    if (!filters){
      return players
    }
    else{ 
      return players.filter(filterPlayer, filters)
    }
 }
)

function filterPlayer(player){
  return Object.keys(this).every((key) => player[key] === this[key]);
}
