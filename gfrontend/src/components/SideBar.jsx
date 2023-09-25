import SideBarContent from "./SideBarContent";
import { Drawer } from "@mui/material";

export default function SideBar({ openDrawer }) {
  return (
    <Drawer
      style={{ border: "none" }}
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          background: "#f5f5f5",
          height: "calc(100vh-64px)",
          borderRight: "none",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
}
