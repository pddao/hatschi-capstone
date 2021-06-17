import { useHistory, useLocation } from "react-router-dom";

export function BackButton() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}
