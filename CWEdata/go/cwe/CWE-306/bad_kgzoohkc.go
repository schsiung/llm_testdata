// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { useEffect, useState } from "react"; // eslint-disable-line @typescript-eslint/no-unused-vars
import api from "../../common/api";
import { setErrorSnackMessage } from "../../actions";
import withStyles from "@mui/styles/withStyles";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import history from "../../history";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const styles = (theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        backgroundColor: "#FAFAFA",
      },
    },
    paper: {
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 800,
      height: 424,
      margin: "auto",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: -400,
      marginTop: -212,
      "&.MuiPaper-root": {
        borderRadius: 8,
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    },
    submit: {
      margin: "30px 0px 16px",
      height: 40,
      boxShadow: "none",
      padding: "16px 30px",
    },
    errorBlock: {
      backgroundColor: "#C72C48",
      width: 800,
      height: 64,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: "50%",
      top: "50%",
      marginLeft: -400,
      marginTop: -290,
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      borderRadius: 8,
      padding: 10,
      boxSizing: "border-box",
    },
    mainContainer: {
      position: "relative",
      height: 424,
    },
    theOcean: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      background:
        "transparent linear-gradient(to bottom, #073052 0%,#05122b 100%); 0% 0% no-repeat padding-box;",
    },
    oceanBg: {
      backgroundImage: "url(/images/BG_Illustration.svg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom left",
      height: "100%",
      width: 324,
    },
    theLogin: {
      padding: "40px 45px 20px 45px",
    },
    loadingLoginStrategy: {
      textAlign: "center",
    },
    headerTitle: {
      marginBottom: 10,
    },
    submitContainer: {
      textAlign: "right",
    },
    disclaimer: {
      fontSize: 12,
      marginTop: 30,
    },
    jwtInput: {
      marginTop: 45,
    },
    linearPredef: {
      height: 10,
    },
    errorIconStyle: {
      marginRight: 3,
    },
    loaderAlignment: {
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    retryButton: {
      alignSelf: "flex-end",
    },
    extraDetailsContainer: {
      fontStyle: "italic",
      color: "#9C9C9C",
      transition: "all .2s ease-in-out",
      padding: "0 5px",
      marginTop: 5,
      overflow: "auto",
    },
    errorLabel: {
      color: "#000",
      fontSize: 18,
      fontWeight: 500,
      marginLeft: 5,
    },
    simpleError: {
      marginTop: 5,
      padding: "2px 5px",
      fontSize: 16,
      color: "#000",
    },
    messageIcon: {
      color: "#C72C48",
      display: "flex",
      "& svg": {
        width: 32,
        height: 32,
      },
    },
    errorTitle: {
      display: "flex",
      alignItems: "center",
    },
  });

interface ILoginCallBackProps {
  setErrorSnackMessage: typeof setErrorSnackMessage;
  classes: any;
}

const LoginCallback = ({
  classes,
  setErrorSnackMessage,
}: ILoginCallBackProps) => {
  const [error, setError] = useState<string>("");
  const [errorDescription, setErrorDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get("code");
      const state = urlParams.get("state");
      const error = urlParams.get("error");
      const errorDescription = urlParams.get("errorDescription");
      if (error || errorDescription) {
        setError(error || "");
        setErrorDescription(errorDescription || "");
        setLoading(false);
      } else {
        api
          .invoke("POST", "/api/v1/login/oauth2/auth", { code, state })
          .then(() => {
            // We push to history the new URL.
            let targetPath = "/";
            if (
              localStorage.getItem("redirect-path") &&
              localStorage.getItem("redirect-path") !== ""
            ) {
              targetPath = `${localStorage.getItem("redirect-path")}`;
              localStorage.setItem("redirect-path", "");
            }
            setLoading(false);
            history.push(targetPath);
          })
          .catch((error) => {
            setError(error.errorMessage);
            setErrorDescription(error.detailedError);
            setLoading(false);
          });
      }
    }
  }, [loading]);
  return error !== "" || errorDescription !== "" ? (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container className={classes.mainContainer}>
          <Grid item xs={7} className={classes.theOcean}>
            <div className={classes.oceanBg} />
          </Grid>
          <Grid item xs={5} className={classes.theLogin}>
            <div className={classes.errorTitle}>
              <span className={classes.messageIcon}>
                <ErrorOutlineIcon />
              </span>
              <span className={classes.errorLabel}>Error from IDP</span>
            </div>
            <div className={classes.simpleError}>{error}</div>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              className={classes.extraDetailsContainer}
            >
              {errorDescription}
            </Typography>
            <Button
              component={"a"}
              href="/login"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Back to Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  ) : null;
};

export default withStyles(styles)(LoginCallback);