import { players, normalizedPlayers } from '../../__mocks__/players-mock'
import { getNormalizedPlayers, getVisiblePlayers, filterPlayer } from '../../src/selectors'


describe('Players Selectors', () => {
  describe('getNormalizedPlayers', () => {
    it('should return age instead of dateOfBirth and remove contractUntil and jerseyNumber keys', () => {   
      const selected = getNormalizedPlayers.resultFunc(players);
      expect(selected).toEqual(normalizedPlayers);
    });
  });

  describe('getVisiblePlayers', () => {
    it('should return all players when empty filter', () => {
   	  let filters = {};   
      const selected = getVisiblePlayers.resultFunc(normalizedPlayers, filters);
      expect(selected).toEqual(normalizedPlayers);
    });

    it('should return all players which position is keeper', () => {
   	  let filters = {"position":"Keeper"};   
      let expected = [{"age":27,"name":"David de Gea","nationality":"Spain","position":"Keeper"},
          {"age":31,"name":"Sergio Romero","nationality":"Argentina","position":"Keeper"}]

      const selected = getVisiblePlayers.resultFunc(normalizedPlayers, filters);
      expect(selected).toEqual(expected);
    });

    it('should return player whose name is Sergio Romero', () => {
   	  let filters = {"name":"Sergio Romero"};
   	  let expected = [{"age":31,"name":"Sergio Romero","nationality":"Argentina","position":"Keeper"}]   
     
      const selected = getVisiblePlayers.resultFunc(normalizedPlayers, filters);
      expect(selected).toEqual(expected);
    });

    it('should not return players', () => {
   	  let filters = {"name":"Sergio Romero", "age":50};   
     
      const selected = getVisiblePlayers.resultFunc(normalizedPlayers, filters);
      expect(selected).toEqual([]);
    });
   });
}); 
