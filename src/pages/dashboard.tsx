
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Main from '../components/Main';
import Aside from '../components/Aside';

export default function Dashboard() {
  return (
    <Layout>
      <Menu />      
      <Main />
      <Aside />
    </Layout >
  )
}