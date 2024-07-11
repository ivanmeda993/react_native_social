interface UserStory {
  id: number;
  firstName: string;
  profileImage: string;
}

interface UserPost {
  id: number;
  name: string;
  location: string;
  profileImage: string;
  postImage: string;
  likes: number;
  comments: number;
  bookmarks: number;
}

interface UserProfile {
  id: number;
  name: string;
  profileImage: string;

  followers: number;
  following: number;
  posts: number;
  photos: string[];
  videos: string[];
  saved: string[];
}
