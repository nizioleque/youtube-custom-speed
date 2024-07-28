import { bugReportURL, reviewUrl, supportUrl } from "../../../const/urls";
import HeaderButton from "./HeaderButton";

function HeaderButtons() {
  return (
    <>
      <HeaderButton href={supportUrl}>🍺 Support</HeaderButton>
      <HeaderButton href={reviewUrl}>⭐ Rate</HeaderButton>
      <HeaderButton href={bugReportURL}>📧 Report a bug</HeaderButton>
    </>
  );
}

export default HeaderButtons;
