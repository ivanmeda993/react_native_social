export const generateImageUrl = (id: number): string =>
  `https://randomuser.me/api/portraits/men/${id}.jpg`;

export const USER_STORIES: UserStory[] = Array.from({length: 100}, (_, i) => ({
  id: i + 1,
  firstName: `User ${i + 1}`,
  profileImage: `https://randomuser.me/api/portraits/men/${i}.jpg`,
}));
