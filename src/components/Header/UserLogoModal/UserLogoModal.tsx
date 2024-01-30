import { useRef, useState } from "react";
import SettingModal from "../SettingModal/SettingModal";
import Modal from "../../Modal/Modal";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import { LogoWrapper } from "./UserLogoModal.styled";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import Icon from "../../Icon/Icon";
// import PrifileImageEmail from "./PrifileImageEmail";

const UserLogoModal = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);

  const { email, avatar } = useSelector(selectUser);

  useOutsideClick(menuRef, () => {
    if (anchorEl) {
      setTimeout(() => setAnchorEl(false), 100);
    }
  });

  const handleClick = () => {
    setAnchorEl(!anchorEl);
  };

  return (
    <LogoWrapper>
      <button className="open-btn" onClick={handleClick}>
        <span className="name">{email.substring(0, 8)}</span>
        <img
          className="user-photo"
          src={`${avatar}`}
          alt="default_logo"
          width="28"
          height="28"
        ></img>
        <Icon className="arrow-down" id="arrow-down" />
      </button>
      <div className={`btn-down ${anchorEl ? "open" : ""}`} ref={menuRef}>
        <button onClick={() => setSettingsVisible(true)}>Settings</button>
        {settingsVisible && (
          <Modal setVisible={setSettingsVisible} title="Setting" setting={true}>
            <SettingModal />
          </Modal>
        )}
        <br />
        <button onClick={() => setVisible(true)}>Log out</button>
        {visible && (
          <Modal setVisible={setVisible} title="Log out" logout={true}>
            <UserLogoutModal setVisible={setVisible} />
          </Modal>
        )}
      </div>
    </LogoWrapper>
  );
};

export default UserLogoModal;
