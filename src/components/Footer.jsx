import React from "react"
import logo from "../assets/logo.png"
import footerLogo from "../assets/footer-logo.jpg"
import FacebookIcon from "../assets/Icons/FacebookIcon"
import TwitterIcon from "../assets/Icons/TwitterIcon"
import YoutubeIcon from "../assets/Icons/YoutubeIcon"
import LinkedinIcon from "../assets/Icons/LinkedinIcon"
import InstagramIcon from "../assets/Icons/InstagramIcon"
import TelephoneIcon from "../assets/Icons/TelephoneIcon"
import MailIcon from "../assets/Icons/MailIcon"

export const IconContainer = (props) => (
	<div className="tw-flex tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-white tw-p-4">
		{props.children}
	</div>
)

export default function Footer() {
	return (
		<div className="tw-min-h-[20vh] tw-bg-[#2F4858] tw-text-white tw-text-[16px]">
			<div className="tw-flex tw-py-[100px] tw-px-[10%] tw-gap-[10%] tw-justify-between">
				<div>
					<div>
						<img src={footerLogo} width="200" height="200" />
					</div>
					<div className="tw-mt-5 tw-max-w-[600px]">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim
					</div>
					<div className="tw-flex tw-gap-[10px] tw-mt-7">
						<IconContainer>
							<FacebookIcon />
						</IconContainer>
						<IconContainer>
							<TwitterIcon />
						</IconContainer>
						<IconContainer>
							<YoutubeIcon />
						</IconContainer>
						<IconContainer>
							<LinkedinIcon />
						</IconContainer>
						<IconContainer>
							<InstagramIcon />
						</IconContainer>
					</div>
				</div>
				<div className="tw-flex tw-flex-col tw-justify-start tw-min-w-[500px]">
					<div className="tw-text-[202x] tw-font-bold">
						Feel Free to share your quiries
					</div>
					<div className="tw-flex tw-gap-[15px] tw-items-center tw-mt-4">
						<span>
							<TelephoneIcon />
						</span>
						<span>+1 (800) 3456 – 398</span>
					</div>
					<div className="tw-flex tw-gap-[15px] tw-items-center tw-mt-4">
						<span>
							<svg
								width="17"
								height="14"
								viewBox="0 0 17 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.9134 2.00004C16.9134 1.08337 16.1569 0.333374 15.2324 0.333374H1.7845C0.859959 0.333374 0.103516 1.08337 0.103516 2.00004V12C0.103516 12.9167 0.859959 13.6667 1.7845 13.6667H15.2324C16.1569 13.6667 16.9134 12.9167 16.9134 12V2.00004ZM15.2324 2.00004L8.50844 6.16671L1.7845 2.00004H15.2324ZM15.2324 12H1.7845V3.66671L8.50844 7.83337L15.2324 3.66671V12Z"
									fill="#F8F8F8"
								/>
							</svg>
						</span>
						<span>info@psl.com</span>
					</div>
					<div className="tw-flex tw-gap-[15px] tw-items-center tw-mt-4">
						<span>
							<MailIcon />
						</span>
						<span>support@gmail.com</span>
					</div>
					<div className="tw-flex tw-gap-[15px] tw-items-center tw-mt-4">
						<span>
							<MailIcon />
						</span>
						<span>+912 3456578769</span>
					</div>
				</div>
			</div>
			<div className="tw-flex tw-justify-around tw-items-center tw-bg-[#09273A] tw-py-7">
				<span className="tw-flex-1 tw-text-center">
					@ 2022 All Right Reserved
				</span>
				<span className="tw-flex-1 tw-text-center">Terms and Conditions </span>
			</div>
		</div>
	)
}
