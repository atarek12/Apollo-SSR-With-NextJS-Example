import type { AppProps } from "next/app";
import Link from "next/link";
import { withApollo } from "../apollo/withApollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/use-query">
            <a>Using useQuery</a>
          </Link>
        </li>
        <li>
          <Link href="/use-lazy-query">
            <a>Using useLazyQuery</a>
          </Link>
        </li>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default withApollo(MyApp);
