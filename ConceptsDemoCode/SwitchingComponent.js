import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProfilePage from "./ProfilePage";
import ContactPage from "./ContactPage";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  profile: ProfilePage,
  contact: ContactPage,
};

const Pages = (props) => {
  const SomeHandler = PAGES[props.page] || ContactPage;
  return <Handler {...props} />;
};
