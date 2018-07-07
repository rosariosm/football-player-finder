import superagent from 'superagent';

const responseBody = res => res.body;

const PlayerRequests = {
  all: () => { return superagent.get('https://football-players-b31f2.firebaseio.com/players.json').then(responseBody)}
};

export default {
  PlayerRequests
};