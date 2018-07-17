import {players} from './players-mock'

module.exports = [
  { 
    pattern: 'https://football-players-b31f2.firebaseio.com(.*)',
    fixtures: function (match, params, headers, context) {
      /**
       * Returning error codes example:
       *   request.get('https://domain.example/404').end(function(err, res){
       *     console.log(err); // 404
       *     console.log(res.notFound); // true
       *   })
       */
      if (match[1] === '/404') {
        throw new Error(404);
      }

      /**
       * Checking on parameters example:
       *   request.get('https://domain.example/hero').send({superhero: "superman"}).end(function(err, res){
       *     console.log(res.body); // "Your hero: superman"
       *   })
       */

      if (match[1] === '/players.json') {
        return players
      } 
    },
    callback: function (match, data) {
      return { body : data };
    }
  }
];