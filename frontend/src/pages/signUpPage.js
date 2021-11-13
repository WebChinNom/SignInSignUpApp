import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPw, setUserPw] = useState("");

    const signUp = () => {
        const saved = localStorage.getItem("userList");
        const newUserList = JSON.parse(saved) || [];
        newUserList.push(
            userEmail+userPw
        );
        localStorage.setItem("userList", JSON.stringify(newUserList));
        navigate("/");
    }

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
                    회원가입
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
                    <Button onClick={signUp}>
                        회원가입
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default SignUpPage;
