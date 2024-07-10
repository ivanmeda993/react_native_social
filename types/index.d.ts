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
