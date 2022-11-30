import { useState } from "react"
import loginImage from "../assets/login-image.png"

import InputGroup from "react-bootstrap/InputGroup"
import { Button, Form, FormControl } from "react-bootstrap"
import styled from "styled-components"
import googleIcon from "../assets/google.png"
import fbIcon from "../assets/fb.png"
import twitterIcon from "../assets/twitter.png"
import MailIcon from "../assets/Icons/MailIcon"
import LockIcon from "../assets/Icons/LockIcon"

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 454px;
	text-align: center;
	border: 1px solid #00a14c;
	border-radius: 10px;
`

function LoginPage() {
	return (
		<div className="App">
			<LoginContainer>
				<img
					className="tw-rounded-[10px]"
					src={loginImage}
					alt="login image"
					width="450"
				/>
				<div className="tw-min-w-[70%] tw-mt-10 tw-mb-10">
					<InputGroup className="mb-3 input">
						<InputGroup.Text className="tw-bg-white">
							<MailIcon fill="hsl(0, 0%, 40%)" />
						</InputGroup.Text>
						<Form.Control
							className="tw-py-3 tw-border-l-0"
							placeholder="Enter user name or email "
							aria-label="Enter user name or email "
							aria-describedby="basic-addon1"
						/>
					</InputGroup>
					<InputGroup className="">
						<InputGroup.Text className="tw-bg-white">
							<LockIcon />
						</InputGroup.Text>
						<Form.Control
							placeholder="Password "
							aria-label="Password "
							aria-describedby="basic-addon1"
							className="tw-py-3 tw-border-l-0"
						/>
					</InputGroup>
					<div className="tw-text-end tw-text-[#9F9F9F] tw-py-2 tw-text-[16px]">
						Forgot Password?
					</div>
					<Button
						className="tw-bg-primary tw-text-white tw-text-[16px] tw-w-full hover:tw-text-white"
						size="lg"
					>
						LOG IN
					</Button>
					<div className="tw-mt-10 ">Or Continue with </div>
					<div className="tw-flex tw-mt-3 tw-gap-[10px] tw-items-center tw-justify-center">
						<img src={fbIcon} width="37" height="36" />
						<img src={twitterIcon} width="37" height="36" />
						<img src={googleIcon} width="37" height="36" />
					</div>

					<Button
						className="login-btn mt-5 tw-text-[16px] tw-max-w-[180px] tw-bg-primary tw-text-white  hover:tw-text-white"
						size="lg"
					>
						SIGN UP
					</Button>
				</div>
			</LoginContainer>
		</div>
	)
}

export default LoginPage
