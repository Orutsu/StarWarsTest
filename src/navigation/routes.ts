export const DASHBOARD_ROUTES = {
  EPISODES: 'Episodes',
  LIKED_CHARACTERS: 'Liked_Characters',
} as const;

export const EPISODES_ROUTES = {
  EPISODES_LIST: 'Episodes_List',
  EPISODE_DETAILS: 'Episode_Details',
  CHARACTER_DETAILS: 'Episodes_Character_Details',
} as const;

export const LIKED_CHARACTERS_ROUTES = {
  LIKED_CHARACTERS_LIST: 'Liked_Characters_List',
  CHARACTER_DETAILS: 'Liked_Character_Details',
  EPISODE_DETAILS: 'Liked_Character_Episode_Details',
} as const;

type valueof<T> = T[keyof T];

export type EpisodeRoutes = valueof<typeof EPISODES_ROUTES>;
export type LikedCharactersRoutes = valueof<typeof LIKED_CHARACTERS_ROUTES>;
export type DashboardRoutes = valueof<typeof DASHBOARD_ROUTES>;
export type RootRoutes = DashboardRoutes;
export type ChildrenRoutes = EpisodeRoutes | LikedCharactersRoutes;
export type AllRoutes = RootRoutes | ChildrenRoutes;
