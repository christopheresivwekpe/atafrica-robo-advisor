import { SWRConfig } from "swr";
import axios from "axios";
import Layout from "../components/Layout";

const fetcher = (url, token) => axios.get(url, { headers: { authorization: `Bearer ${token}` },})
.then(res => res.data);

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{  fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;