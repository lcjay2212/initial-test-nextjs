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
        episodes
      }
    }
  }
`;

export const GET_ANIME_BY_ID = gql`
  query GetAnimeById($id: Int) {
    Media(id: $id) {
      id
      title {
        userPreferred
      }
      description
      popularity
      genres
      episodes
      season
      seasonYear
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      bannerImage
      coverImage {
        extraLarge
      }
      status
      characters {
        nodes {
          image {
            large
          }
          name {
            userPreferred
          }
          description
        }
      }
      staff {
        nodes {
          name {
            userPreferred
          }
          image {
            large
          }
        }
      }
      studios {
        nodes {
          name
        }
      }
    }
  }
`;
