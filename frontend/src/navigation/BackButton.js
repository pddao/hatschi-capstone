import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { findAllByDisplayValue } from '@testing-library/react';

export function BackButton() {
  const history = useHistory();
  const location = useLocation();
  const homepage = location.pathname === '/';

  return homepage ? (
    <div> </div>
  ) : (
    <div onClick={() => history.goBack()}>
      <ArrowBackIosOutlinedIcon>Back</ArrowBackIosOutlinedIcon>
    </div>
  );
}
