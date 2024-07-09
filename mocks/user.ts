export const generateImageUrl = (id: number): string =>
  `https://randomuser.me/api/portraits/men/${id}.jpg`;
export const USER_STORIES: UserStory[] = [
  {
    firstName: 'Joseph',
    id: 1,
    profileImage: generateImageUrl(1),
  },
  {
    firstName: 'Angel',
    id: 2,
    profileImage: generateImageUrl(2),
  },
  {
    firstName: 'White',
    id: 3,
    profileImage: generateImageUrl(3),
  },
  {
    firstName: 'Olivier',
    id: 4,
    profileImage: generateImageUrl(4),
  },
  {
    firstName: 'Nata',
    id: 5,
    profileImage: generateImageUrl(5),
  },
  {
    firstName: 'Nicolas',
    id: 6,
    profileImage: generateImageUrl(6),
  },
  {
    firstName: 'Nino',
    id: 7,
    profileImage: generateImageUrl(17),
  },
  {
    firstName: 'Nana',
    id: 8,
    profileImage: generateImageUrl(12),
  },
  {
    firstName: 'Adam',
    id: 9,
    profileImage: generateImageUrl(11),
  },
];
