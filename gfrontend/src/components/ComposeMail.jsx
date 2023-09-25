import { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: " 10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});
const ToWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 15px",
});

const Send = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: 500,
  textTransform: "none",
  borderRadius: 18,
  width: 100,
});
export default function ComposeMail({ openDialog, setOpenDialog }) {
  const initialValue = {
    To: "",
    Subject: "",
    Message: "",
  };
  const [credentials, setCredential] = useState(initialValue);
  const sentEmailServices = useApi(API_URLS.saveSentEmails);
  const draftEmailServices = useApi(API_URLS.saveDraftEmails)

  const config = {
    Host: "smtp.elasticemail.com",
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    Port: 2525,
  };

  const closeComposeMail = (e) => {
    e.preventDefault();

    if (window.Email) {
      window.Email.send({
        ...config,
        To: credentials.To,
        From: "shantibhushan107@gmail.com",
        Subject: credentials.Subject,
        Body: credentials.Message,
      }).then((message) => alert(message));
    }

    const payload = {
      to: credentials.To,
      from: "shantibhushan107@gmail.com",
      subject: credentials.Subject,
      body: credentials.Message,
      date: new Date(),
      image: "",
      name: "Shanti Bhushan Singh",
      starred: false,
      type: "draft",
    };
    draftEmailServices.call(payload);

    if (!draftEmailServices.error) {
      setOpenDialog(false);
      setCredential("");
    }
    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setCredential({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: credentials.To,
        From: "shantibhushan107@gmail.com",
        Subject: credentials.Subject,
        Body: credentials.Message,
      }).then((message) => alert(message));
    }

    const payload = {
      to: credentials.To,
      from: "shantibhushan107@gmail.com",
      subject: credentials.Subject,
      body: credentials.Message,
      date: new Date(),
      image: "",
      name: "Shanti Bhushan Singh",
      starred: false,
      type: "sent",
    };
    sentEmailServices.call(payload);

    if (!sentEmailServices.error) {
      setOpenDialog(false);
      setCredential("");
    }
    setOpenDialog(false);
  };

  return (
    <Dialog PaperProps={{ sx: dialogStyle }} open={openDialog}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <ToWrapper>
        <InputBase placeholder="To" name="To" onChange={onValueChange} />
        <InputBase
          placeholder="Subject"
          name="Subject"
          onChange={onValueChange}
        />
      </ToWrapper>

      <TextField
        multiline
        rows={20}
        name="Message"
        onChange={onValueChange}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
      />

      <Footer>
        <Send onClick={(e) => sendMail(e)}>Send</Send>
        <DeleteOutline onClick={() => setOpenDialog(false)} />
      </Footer>
    </Dialog>
  );
}
