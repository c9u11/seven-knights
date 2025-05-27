export const ROUTES_BASENAME = import.meta.env.BASE_URL;
export const ROUTES_PATH_ROOT = '/';
export const ROUTES_PATH_FARMING_CALCULATOR = "/farming-calculator";
export const ROUTES_PATH_GEAR_RECOMMENDATION = "/gear-recommendation";

export const ROUTES_LIST = [
  {
    name: '홈',
    path: ROUTES_PATH_ROOT,
  },
  {
    name: '쫄작 계산기',
    path: ROUTES_PATH_FARMING_CALCULATOR,
  },
  {
    name: '장비 추천',
    path: ROUTES_PATH_GEAR_RECOMMENDATION,
  }
]