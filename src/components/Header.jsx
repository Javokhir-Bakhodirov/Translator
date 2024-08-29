import { BsTranslate } from "react-icons/bs";
import React, { useEffect } from "react";
import Container from "../utils/Container";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state) => state);

	useEffect(() => {
		// Apply the current theme to the body on component mount
		document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
	}, [theme]);

	return (
		<header
			className="site-header sticky z-10 top-0 shadow-[0_1px_10px_1px_rgba(0,0,0,0.3)] bg-white "
			style={{
				backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
				boxShadow:
					theme === "dark" && "0px 5px 15px -5px rgba(103, 126, 144, 0.6)",
			}}
		>
			<Container>
				<div className="header flex items-center justify-between">
					<a href="/" className="inline-block">
						<BsTranslate
							className="w-[50px] h-[50px]"
							style={{ color: theme === "dark" ? "#fff" : "#000" }}
						/>
					</a>
					<div className="header__theme-toggle border w-[70px] border-gray-300 rounded-[30px] flex relative items-center">
						<input
							defaultChecked={theme === "dark"}
							onChange={(e) =>
								dispatch({
									type: "CHANGE_THEME",
									theme: e.target.checked ? "dark" : "light",
								})
							}
							id="theme-toggle"
							type="checkbox"
							className="appearance-none w-[60px] h-[25px]"
						/>
						<label
							htmlFor="theme-toggle"
							className="w-[32px] h-[32px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer absolute left-0 transition-all"
							style={{
								left: theme === "dark" ? "calc(100% - 28px)" : "0",
								backgroundColor: theme === "dark" ? "#fff" : "#000",
							}}
						>
							{theme === "light" ? (
								<BsSunFill />
							) : (
								<BsFillMoonFill className="text-black" />
							)}
						</label>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
