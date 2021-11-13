import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const MemoListPage = () => {
    const navigate = useNavigate();

    const signIn = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>
                Hello
            </h1>
            <br />
            <br />
            <br />
            <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={signIn}>
                로그인 페이지로 이동
            </Button>
        </div>
    );
}

export default MemoListPage;