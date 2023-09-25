import { SIDEBAR_CONFIG } from "../config/Sidebar.config";
import ComposeMail from "./ComposeMail";

import styled from "@emotion/styled";
import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem } from "@mui/material";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { routes } from "../routes/Route";

const Container = styled(Box)({
  paddingLeft: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > a >li > svg": {
    marginRight: 20,
  },
  "& > ul > a": {
    textDecoration: "none",
    color: "inherit",
  },
});
const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d25",
  padding: 16,
  borderRadius: 16,
  minWidth: 140,
  textTransform: "none",
});

export default function SideBarContent() {
  const { type } = useParams();
 
  const [openDialog, SetOpenDialog] = useState(false);

  const ComposeMailBox = () => {
    SetOpenDialog(true);
  };

  return (
    <Container>
      <ComposeButton onClick={ComposeMailBox}>
        <CreateOutlined />
        Compose
      </ComposeButton>

      <List>
        {SIDEBAR_CONFIG.map((data, index) => (
          <NavLink key={index} to={`${routes.emails.path}/${data.name}`}>
            <ListItem
              style={
                type === data.name.toLowerCase()
                  ? { background: "#d3e3fd", borderRadius:"0 16px 16px 0" }
                  : {}
              }
            >
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          </NavLink>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} setOpenDialog={SetOpenDialog} />
    </Container>
  );
}
