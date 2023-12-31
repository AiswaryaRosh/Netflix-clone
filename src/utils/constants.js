export const NETFLIX_LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const LOGIN_PAGE_BACKGROUND_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const USER_AVATAR = "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY,
    }
  };

export const MOVIE_CARD_URL = "https://image.tmdb.org/t/p/w200/";

export const LANGUAGE_OPTIONS = [
  {displayName: 'English', value: 'en'},
  {displayName: 'Hindi', value: 'hindi'},
  {displayName: 'Spanish', value: 'spanish'}
];

export const OPEN_PLATFORM_API_KEYS = process.env.REACT_APP_OPEN_PLATFORM_API_KEYS;