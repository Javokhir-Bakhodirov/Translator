const initialState = {
	sourceLanguage: "en",
	targetLanguage: "uz",
	translateText: "",
	translate: "",
	theme: localStorage.getItem("theme") || "light",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SOURCE_LANGUAGE":
			return { ...state, sourceLanguage: action.lang };
		case "TARGET_LANGUAGE":
			return { ...state, targetLanguage: action.lang };
		case "TRANSLATED_TEXT":
			return { ...state, translateText: action.lang };
		case "TRANSLATED":
			return { ...state, translatedText: action.lang };
		case "CHANGE_THEME":
			localStorage.setItem("theme", action.theme);
			document.body.className =
				action.theme === "dark" ? "dark-theme" : "light-theme";
			return { ...state, theme: action.theme };
		default:
			return state;
	}
};
