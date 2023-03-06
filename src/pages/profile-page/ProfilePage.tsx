import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

import Header from 'components/features/header/Header';
import Footer from 'components/features/footer/Footer';

import styles from './ProfilePage.module.css';

const ProfilePage: React.FC = () => {
  const { email, createdAt, lastSignIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Platzi Fake Store | Profile</title>
        <meta name="description" content="Profile page" />
      </Helmet>
      <Header />
      <section className="flex-auto p-[50px]">
        <div className="profile-container flex justify-center">
          <div className="flex flex-col gap-[15px]">
            <div className="mx-auto">
              <img
                className="max-w-full rounded-[50%] overflow-hidden"
                src={`https://i.pravatar.cc/200?u=${email}`}
                alt="Profile avatar"
              />
            </div>
            <div className={styles.subCaption}>
              <span className="text-white font-semibold">Email:</span> {email}
            </div>
            <div className={styles.subCaption}>
              <span className="text-white font-semibold">Account was created at</span>: {createdAt}
            </div>
            <div className={styles.subCaption}>
              <span className="text-white font-semibold">Last sign in</span>: {lastSignIn}
            </div>
            <Link className={styles.btn} to="/login">
              Log out
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfilePage;
