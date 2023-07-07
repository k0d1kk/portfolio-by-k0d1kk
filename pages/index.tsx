import { AboutMe } from 'components/AboutMe';
import { Header } from 'components/Header';
import { MainLayout } from 'components/layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout title="k0d1kk || FrontEnd" desc="Portfolio of FrontEnd web-developer">
      <Header />
      <AboutMe />
    </MainLayout>
  );
};

export default HomePage;
