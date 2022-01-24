import Aside from "../components/C_Aside";
import Header from "../components/C_Header";
import Layout from "../components/C_Layout";
import Menu from "../components/Menu";
import Main from './../components/C_Main';


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
