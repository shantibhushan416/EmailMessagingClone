import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import {
  AccountCircleOutlined,
  AppsOutlined,
  HelpOutline,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  Tune,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/Constant";

const StyleAppBar = styled(AppBar)({
  background: "#f5f5f5",
  boxShadow: "none",
});
const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",

  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  "& > svg": {
    marginLeft: 20,
  },
});

export default function Header({ clicked }) {
  return (
    <StyleAppBar position="static">
      <Toolbar>
        <MenuIcon onClick={clicked} color="action" />
        <img
          src={gmailLogo}
          alt="logo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <SearchWrapper>
          <Search color="action" />
          <InputBase placeholder="Search mail" />
          <Tune color="action" />
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutline color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyleAppBar>
  );
}
