import { graphql } from "@octokit/graphql";

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token secret123`,
    },
});
const { repository } = await graphql(`
    {
      repository(owner: "octokit", name: "graphql.js") {
        issues(last: 3) {
          edges {
            node {
              title
            }
          }
        }
      }
    }
  `,

    {
        headers: {
            authorization: `token /* 발급 받은 토큰 넣기 */`,
        },
    }
);
return repository;