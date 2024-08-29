import React, { Children } from "react";

const Container = ({ children }) => {
	return <div className="max-w-[1150px] mx-auto py-[20px]">{children}</div>;
};

export default Container;
