import React from "react"
import Header from "../components/Header"
import LandingPageImage1 from "../assets/landing-page-1.jpg"
import { Button } from "react-bootstrap"
import NotebookImage from "../assets/notebook.jpg"
import Footer from "../components/Footer"
import cn from "classnames"

export const NotebookCard = ({ text, className }) => (
	<div
		className={cn(
			"tw-rounded-3xl tw-border tw-border-primary tw-px-[10px] tw-py-[25px] tw-self-start tw-min-w-[250px]",
			className || ""
		)}
		style={{
			boxShadow: "1px 4px 12px 9px rgba(0, 0, 0, 0.17)",
		}}
	>
		<div className="tw-flex tw-justify-end">
			<img
				src={NotebookImage}
				width="200"
				height="100"
				className="tw-pl-[20%]"
			/>
		</div>
		<div className="tw-text-primary tw-text-[24px] tw-ml-4 tw-font-extrabold">
			{text}
		</div>
	</div>
)

export default function LandingPage() {
	return (
		<div>
			<Header />
			<div className="tw-flex tw-items-center tw-justify-center tw-px-[7%]">
				<div className="tw-basis-1/2">
					<h1 className="tw-font-extrabold tw-text-[80px]">
						The Speak Logic{" "}
						<div className="tw-text-primary">Problem Solver</div>
					</h1>
					<div className="tw-mt-2 tw-ml-10 tw-text-[24px]">
						Think logically to solve problems
					</div>
					<div className="tw-block">
						<Button className="tw-px-[18px] tw-py-2 tw-ml-[10%] tw-mt-5 tw-font-bold tw-text-[22px] tw-text-white hover:tw-text-white tw-inline-block tw-bg-primary">
							Get Started
						</Button>
					</div>
				</div>
				<div className="tw-basis-1/2">
					<img src={LandingPageImage1} className="tw-max-h-[700px]" />
				</div>
			</div>
			<div className="tw-flex tw-items-center tw-justify-center tw-px-[7%] tw-border-t tw-border-primary tw-pt-[150px] tw-pb-[100px] ">
				<div className="tw-basis-1/3 ">
					<h1 className="tw-font-extrabold tw-text-[92px]">Why we are ?</h1>
					<div className="tw-mt-5 tw-text-[20px] tw-max-w-[350px]">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt
					</div>
				</div>
				<div className="tw-basis-2/3 tw-flex tw-gap-[5%] tw-ml-[10%] tw-min-h-[500px]">
					<NotebookCard
						text={
							<span>
								Solution <br /> to every <br />
								problem
							</span>
						}
					/>
					<NotebookCard
						text={
							<span>
								Solution <br /> to every <br />
								problem
							</span>
						}
						className="tw-self-end"
					/>
					<NotebookCard
						text={
							<span>
								First <br /> Modern <br />
								Website
							</span>
						}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}
