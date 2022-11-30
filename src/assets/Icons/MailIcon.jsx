import React from "react"

export default function MailIcon({ fill }) {
	return (
		<svg
			width="17"
			height="14"
			viewBox="0 0 17 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.9134 2.00004C16.9134 1.08337 16.1569 0.333374 15.2324 0.333374H1.7845C0.859959 0.333374 0.103516 1.08337 0.103516 2.00004V12C0.103516 12.9167 0.859959 13.6667 1.7845 13.6667H15.2324C16.1569 13.6667 16.9134 12.9167 16.9134 12V2.00004ZM15.2324 2.00004L8.50844 6.16671L1.7845 2.00004H15.2324ZM15.2324 12H1.7845V3.66671L8.50844 7.83337L15.2324 3.66671V12Z"
				fill={fill || "#F8F8F8"}
			/>
		</svg>
	)
}