import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import axios from "axios"

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPw, setUserPw] = useState("");

    // const signUp = async() => {
    //     try {
    //         //응답 성공 
    //         const response = await axios.post('localhsot:8080/sign-up',{
    //             //보내고자 하는 데이터 
    //             "email": userEmail,
    //             "pw": userPw
    //         });
    //         console.log(response);
    //       } catch (error) {
    //         //응답 실패
    //         console.error(error);
    //       }
    //     navigate("/sign-in");
    // }

    const signUp = () => {
        axios.post("http://localhost:8080/sign-up", {
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
