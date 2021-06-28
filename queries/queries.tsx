import { gql } from "@apollo/client";

export const GET_ANIME_LISTS = gql`
  query GetAnimeLists($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media {
        title {
          userPreferred
        }
        id
        coverImage {
          extraLarge
          large
          medium
          color
        }
        genres
      }
    }
  }
`;
