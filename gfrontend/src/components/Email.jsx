import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";
import Email from "./Emails";
import NoMails from "./common/NoMail";
import { EMPTY_TABS } from "../constants/Constant";

import { useEffect, useState } from "react";

import { Box, Checkbox, List, ListItem } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

export default function Emails() {
  const { type } = useParams();

  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);

  const getEmailService = useApi(API_URLS.getEmailFromType);
  const moveEmailToBin = useApi(API_URLS.moveEmailsToBin);
  const deleteEmail = useApi(API_URLS.deleteEmails);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]);

  const selectedAllEmails = (e) => {
    if (e.target.checked) {
      const email = getEmailService.response.map((email) => email._id);

      setSelectedEmails(email);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteEmails = () => {
    if (type === "bin") {
      deleteEmail.call(selectedEmails);
    } else {
      moveEmailToBin.call(selectedEmails);
    }
    setRefreshScreen((prev) => !prev);
    setSelectedEmails([]);
  };

  const { openDrawer } = useOutletContext();
  return (
    <Box
      style={
        openDrawer
          ? { width: "calc(100% - 250px)", marginLeft: "250px" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectedAllEmails(e)} />
        <DeleteOutline onClick={deleteEmails} />
      </Box>
      <List>
        {getEmailService.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
            setRefreshScreen={setRefreshScreen}
            setSelectedEmails={setSelectedEmails}
          />
        ))}
      </List>
      {getEmailService?.response?.length === 0 && (
        <NoMails message={EMPTY_TABS[type]} />
      )}
    </Box>
  );
}
