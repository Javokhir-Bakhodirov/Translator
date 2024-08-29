import React from "react";
import languages from "../../db/languages";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Hero = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state);
	console.log(data.translatedText);
	// console.log(data.translatedText);

	const handleTranslate = async () => {
		const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";
		const options = {
			method: "POST",
			headers: {
				"x-rapidapi-key": "216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9",
				"x-rapidapi-host": "deep-translate1.p.rapidapi.com",
				"Content-Type": "application/json",
			},
			data: {
				q: `${data.translateText}`,
				source: `${data.sourceLanguage}`,
				target: `${data.targetLanguage}`,
			},
			url: url,
		};

		try {
			const response = await axios.request(options);
			console.log(response.data.data.translations.translatedText);
			dispatch({
				type: "TRANSLATED",
				lang: response.data.data.translations.translatedText,
			});
		} catch (error) {
			console.error("Translation error:", error);
		}
	};

	return (
		<section className="hero py-12">
			<div className="container mx-auto max-w-2xl">
				<div
					className=" p-8 rounded-lg shadow-lg"
					style={{
						backgroundColor: data.theme === "dark" ? "#c1c1c1" : "#f8f8f8",
					}}
				>
					<div className="grid grid-cols-2 gap-4 mb-6">
						<div className="col-span-1">
							<label className="block text-gray-700 text-sm font-medium">
								Source Language:
							</label>
							<select
								onChange={(e) =>
									dispatch({ type: "SOURCE_LANGUAGE", lang: e.target.value })
								}
								defaultValue={data.sourceLanguage}
								className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
							>
								{languages.map((lang) => (
									<option key={lang.id} value={lang.value}>
										{lang.name}
									</option>
								))}
							</select>
						</div>
						<div className="col-span-1">
							<label className="block text-gray-700 text-sm font-medium">
								Target Language:
							</label>
							<select
								onChange={(e) =>
									dispatch({ type: "TARGET_LANGUAGE", lang: e.target.value })
								}
								defaultValue={data.targetLanguage}
								className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
							>
								{languages.map((lang) => (
									<option key={lang.id} value={lang.value}>
										{lang.name}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-medium">
							Enter Text:
						</label>
						<textarea
							onChange={(e) =>
								dispatch({
									type: "TRANSLATED_TEXT",
									lang: e.target.value,
								})
							}
							className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md p-4 resize-none h-32 focus:outline-none focus:ring focus:border-blue-500"
						/>
					</div>
					<button
						onClick={handleTranslate}
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
					>
						Translate
					</button>
					<div className="mt-6">
						<label className="block text-gray-700 text-sm font-medium">
							Translated Text:
						</label>
						<div className="mt-1 p-4 bg-gray-50 border border-gray-300 rounded-md text-gray-800 min-h-[100px]">
							<p>{data.translatedText}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
