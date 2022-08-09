export type WorkData = {
  workId: string,
  title: string,
  price: string,
  category: string,
  descriptionShort: string,
  descriptionLong: string,
  shopLink: string,
  youtubeLink?: string,
  ogImage: {
    url: string
  },
  isPickedUp: boolean,
  imageUrlA: {
    url: string
  },
  imageUrlB?: {
    url: string
  },
  imageUrlC?: {
    url: string
  },
  imageUrlD?: {
    url: string
  },
  shopLinks?: {
    shopLink: {
      shopLink: string,
      title: string
    }[]
  }
}