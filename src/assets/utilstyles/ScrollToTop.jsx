import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <div>{children}</div>;
}
ScrollToTop.proptypes = {
  children: PropTypes.node,
};
