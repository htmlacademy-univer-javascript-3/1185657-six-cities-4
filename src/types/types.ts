
export type Review = {
  user: {
    name: string;
    avatarSrc: string;
  };
  rating: number;
  text: string;
  date: Date;
}

export type Host = {
  name: string;
  avatarSrc: string;
  status: string;
  description: string[];
}

export type PlaceCard = {
  id: number;
  imageUrl: string;
  price: string;
  name: string;
  type: string;
  rating: number;
  isPremium?: boolean;
  isBookmarked?: boolean;
}

export type Offer = {
  header: {
    userEmail: string;
    favoriteCount: number;
  };
  main: {
    offerGallery: string[];
    offerDetails: {
      name: string;
      isPremium?: boolean;
      rating: number;
      type: string;
      bedrooms: number;
      maxGuests: number;
      price: string;
      insideItems: string[];
    };
    host: Host;
    reviews: Reviews;
    nearPlaces: PlaceCards;
  };
}

export type Reviews = Review[];
export type PlaceCards = PlaceCard[];
