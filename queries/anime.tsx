import { gql } from "@apollo/client";

export const GET_ANIME_LISTS = gql`
  query GetAnimeLists($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: $search) {
        id
        title {
          userPreferred
        }
        coverImage {
          extraLarge
        }
        genres
        description
      }
    }
  }
`;
