import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        This is an example of how we can use server-side-rendering with apollo
        <br />
        client by fetching all the queries of the requested page in the server.
      </p>
      <p>
        If you went to the `/use-query` page and refreshed the page, you will
        <br />
        notice that the page came pre-rendered with its ows data and that there
        <br />
        is no loading state
      </p>
      <p>
        But when doing the same thing with the `/use-lazy-query` page, you will
        <br />
        notice that the app does not compile and errors are printed on the
        devtool.
      </p>
    </div>
  );
};

export default Home;
