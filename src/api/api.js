// const handleTranslate = async () => {
// 	const data = useSelector((state) => state); // Call useSelector and useDispatch at the top level in a component
// 	const dispatch = useDispatch();

// 	const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";
// 	const options = {
// 		method: "POST",
// 		headers: {
// 			"x-rapidapi-key": "216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9",
// 			"x-rapidapi-host": "deep-translate1.p.rapidapi.com",
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			q: data.translateText,
// 			source: data.sourceLanguage,
// 			target: data.targetLanguage,
// 		}),
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json();
// 		dispatch({
// 			type: "TRANSLATED",
// 			lang: result.data.translations.translatedText,
// 		});
// 		console.log(result);
// 	} catch (error) {
// 		console.error("Translation failed:", error);
// 	}
// };

// export default handleTranslate;
