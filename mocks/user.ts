export const generateImageUrl = (id: number): string =>
  `https://randomuser.me/api/portraits/men/${id}.jpg`;

export const USER_STORIES: UserStory[] = Array.from({length: 100}, (_, i) => ({
  id: i + 1,
  firstName: `User ${i + 1}`,
  profileImage: `https://randomuser.me/api/portraits/men/${i}.jpg`,
}));

export const USER_POSTS: UserPost[] = Array.from({length: 100}, (_, i) => ({
  id: i + 1,
  name: `Name ${i + 1}`,
  location: `Location ${i + 1}`,
  profileImage: `https://randomuser.me/api/portraits/men/${i}.jpg`,
  postImage: 'https://picsum.photos/400',
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 100),
  bookmarks: Math.floor(Math.random() * 100),
}));

export const USER_PROFILE: UserProfile = {
  id: 1,
  name: 'Ivan Milicevic',
  profileImage: 'https://randomuser.me/api/portraits/men/11.jpg',
  followers: 435,
  following: 45,
  posts: 110,
  photos: Array.from(
    {length: 100},
    (_, i) => `https://picsum.photos/400?random=${i}`,
  ),
  videos: Array.from(
    {length: 100},
    (_, i) => `https://picsum.photos/400?random=${i}`,
  ),
  saved: Array.from(
    {length: 100},
    (_, i) => `https://picsum.photos/400?random=${i}`,
  ),
};
