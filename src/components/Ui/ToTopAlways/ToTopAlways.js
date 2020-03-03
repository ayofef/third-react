import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop(props) {
  useEffect(() => {
    if (props.history.action === 'POP') {
      return;
    }
    let hash = props.location.hash;
    if (hash) {
      let element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({block: 'start', behavior: 'smooth'});
      }
    } else {
      window.scrollTo(0, 0);
    }
  });

  return (null);
}

export default withRouter(ScrollToTop);