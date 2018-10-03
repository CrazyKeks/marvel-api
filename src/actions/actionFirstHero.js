export const FirstDownloadHero = 'GET_FIRST_HERO';

export function getFirstHero(hero) {
  return{
    type: FirstDownloadHero,
    payload: hero,
  }
}