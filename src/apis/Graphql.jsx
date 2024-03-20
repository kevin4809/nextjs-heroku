
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { API_URL } from "./config";
export async function getInformation() {
  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        infoBlogs {
          data {
            attributes {
              Titulo
              launch
              description
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              platforms {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });
  

  const messages = data.infoBlogs.data.map((blog) => {
    return {
      Titulo: blog.attributes.Titulo,
      launch: blog.attributes.launch,
      description: blog.attributes.description[0].children.map((child) => child.text).join(" "),
      coverUrl: blog.attributes.cover.data.attributes.url,
      platforms: blog.attributes.platforms.data.map((platform) => platform.attributes.name),
    };
  });

  return {
    props: {
      messages,
    },
  };
}