import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";

const SignInPage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPw, setUserPw] = useState("");

  const judgeUser = () => {
    const saved = localStorage.getItem("userList");
    if (saved.includes(userEmail + userPw)) {
      return true;
    } else {
      return false;
    }
  }

  const signIn = () => {
    if (judgeUser()) {
      navigate("/memoList");
    } else {
      alert("아이디와 비밀번호가 일치하지 않습니다.");
      window.location.reload();
    }
  }

  const navigateSignUp = () => {
    navigate("/signUp");
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
