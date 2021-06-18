import { useHistory } from "react-router-dom";

export function BackButton() {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}
