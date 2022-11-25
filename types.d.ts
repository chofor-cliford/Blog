export interface Video {
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  postedBy: {
    _id: string;
    userName: string;
    image: string;
  };
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}

export interface Post {
  image: {
    asset: {
      url: string;
    };
  };
  createdBy: {
    name: string;
    _id: string;
    image: {
      asset: {
        url: string;
      };
    };
    description: string;
  };
  _createdAt: string;
  slug: {
    current: string;
  };
  title: string;
  excerpt: string;
  category: {
    name: string;
    slug: {
      current: string;
    };
  };
  content: {
    _key: string;
    _type: string;
    style: string;
    children: {
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }[];
    markDefs: {
      _key: string;
      _type: string;
      href: string;
    }[];
    asset: {
      url: string;
    };
    listItem: string;
  }[];
  _id: string;
  comments: {
    _key: string;
    name: string;
    comment: string;
  }[];
}
