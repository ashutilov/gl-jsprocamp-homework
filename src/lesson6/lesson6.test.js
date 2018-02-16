import lesson6 from '../lesson6';

const {
    getClimate,
    getProfile,
    getPilots,
} = lesson6.task;

describe('Asynchronous javascript', function() {
  describe('getClimate function', () => {

    it('it should return climate', async () => {
      expect.hasAssertions();
      const data = await getClimate('Tatooine');
      expect(data).toEqual('arid');
    });

    it('it should return climate', async () => {
        expect.hasAssertions();
        const data = await getClimate('Yavin IV');
        expect(data).toEqual('temperate, tropical');
      });

    it('it should return error message', async () => {
      expect.hasAssertions();
      const data = await getClimate('ta');
      expect(data).toEqual('More than one result. Please povide more specific data');
    });

    it('it should return error message', async () => {
        expect.hasAssertions();
        const data = await getClimate('Qwerty');
        expect(data).toEqual('No such planet');
      });
  
  });

  describe('getProfile function', () => {

    it('it should return profile information', async () => {
      expect.hasAssertions();
      const data = await getProfile('Luke');
      expect(data).toHaveProperty('name', 'Luke Skywalker');
      expect(data).toHaveProperty('height', '172');
      expect(data).toHaveProperty('birth_year', '19BBY');
    });

    it('it should return profile information', async () => {
        expect.hasAssertions();
        const data = await getProfile('R2');
        expect(data).toHaveProperty('name', 'R2-D2');
        expect(data).toHaveProperty('height', '96');
        expect(data).toHaveProperty('mass', '32');
      });

      it('it should return error message', async () => {
        expect.hasAssertions();
        const data = await getProfile('');
        expect(data).toEqual('More than one result. Please povide more specific data');
      });
  
      it('it should return error message', async () => {
          expect.hasAssertions();
          const data = await getProfile('Qwerty');
          expect(data).toEqual('No such profile');
        });
    
  });

  describe('getPilots function', () => {

    it('it should return array of string', async () => {
      expect.hasAssertions();
      const data = await getPilots('Millennium');
      expect(data).toContain('Chewbacca');
      expect(data).toContain('Han Solo');
      expect(data).toContain('Lando Calrissian');
      expect(data).toContain('Nien Nunb');
      expect(data.length).toEqual(4);
    });

    it('it should return array of string', async () => {
        expect.hasAssertions();
        const data = await getPilots('Sentinel-class landing craft');
        expect(data.length).toEqual(0);
      });

      it('it should return array of string', async () => {
        expect.hasAssertions();
        const data = await getPilots('TIE Advanced x1');
        expect(data).toContain('Darth Vader');
        expect(data.length).toEqual(1);
      });

      it('it should return array of string', async () => {
        expect.hasAssertions();
        const data = await getPilots('TIE Advanced x1');
        expect(data).toContain('Darth Vader');
        expect(data).not.toContain('Qwerty');
        expect(data.length).toEqual(1);
      });

  });
});
