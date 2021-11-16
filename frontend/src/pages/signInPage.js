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
    try {
      //응답 성공 
      const response = await axios.post('localhsot:8080',{
          //보내고자 하는 데이터 
          email: userEmail,
          pw, userPw
      });
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
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
