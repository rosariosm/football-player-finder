import {players} from './players-mock'

module.exports = [
  {
    pattern: 'https://football-players-b31f2.firebaseio.com(.*)',
    fixtures: function (match, params, headers, context) {
      if (match[1] === '/404') {
        throw new Error(404);
      }

      if (match[1] === '/players.json') {
        return players
      }
    },
    callback: function (match, data) {
      return { body : data };
    }
  }
];