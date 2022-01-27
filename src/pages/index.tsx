import Aside from "../components/Aside";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Main from '../components/Main';


export default function Home() {
  return (
    <Layout>
      <Header />
      <Menu />
      <Main />
      <Aside />
    </Layout>
  )
}
