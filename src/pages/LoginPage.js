import Layout from '../components/Layout/Layout';
import LoginForm from '../components/Login/LoginForm';
export default function LoginPage() {
  return (
    <Layout>
      <section className='container'>
        <LoginForm />
      </section>
    </Layout>
  );
}
