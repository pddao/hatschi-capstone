import { useHistory, useLocation } from 'react-router-dom';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

export function BackButton() {
  const history = useHistory();
  const location = useLocation();
  const homepage = location.pathname === '/home';
  const loginpage = location.pathname === '/';

  return homepage | loginpage ? (
    <div>{''}</div>
  ) : (
    <div onClick={() => history.goBack()}>
      <ArrowBackIosOutlinedIcon />
    </div>
  );
}
