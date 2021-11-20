import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import axios from "axios"

const SignInPage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");

  const signIn = () => {
    axios.post("/sign-in", {
      email: userEmail,
      pw: userPw
    }).then(function (response) {
      if (!response.data.success) {
        alert("폼 제출에 실패하였습니다.")
      } else {
        console.log(response.data)
      }
    })
      .catch(function (error) {
        console.log(error);
      })
  }

  const navigateSignUp = () => {
    navigate("/sign-up");
  }

  const consoleLog = () => {
    console.log(localStorage.getItem("userList"))
  }

  const removeAll = () => {
    localStorage.setItem("userList", JSON.stringify([]));
    window.location.reload();
  };

  return (
    <div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px"
      }}
      >
        <Typography variant="h3" component="h3" gutterBottom>
          로그인
        </Typography>
        <br />
        <TextField
          value={userEmail}
          required
          id="userEmail"
          label="이메일"
          variant="outlined"
          color="secondary"
          defaultValue=""
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          value={userPw}
          required
          id="userPw"
          label="비밀번호"
          variant="outlined"
          color="secondary"
          defaultValue=""
          onChange={(e) => setUserPw(e.target.value)}
        />
        <br />
        <ButtonGroup
          variant="outlined"
          color="secondary"
          size="large"
        >
          <Button onClick={signIn}>
            로그인
          </Button>
          <Button onClick={navigateSignUp}>
            회원가입
          </Button>
        </ButtonGroup>
        <br />
        <br />
        <br />
        <br />
        <Button onClick={consoleLog}>
          아이디 조회
        </Button>
        <Button onClick={removeAll}>
          모든 계정 정보 삭제
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
