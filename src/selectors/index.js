import { createSelector } from 'reselect'
import moment from 'moment'

const getPlayers = (state) => state.footballPlayers.players

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