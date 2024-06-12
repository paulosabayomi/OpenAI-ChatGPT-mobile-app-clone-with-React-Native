import axios from 'axios';
import { GOOGLE_GEMINI_API_KEY } from './secret';

const gemini_endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key='
export const APP_COLOR_MODE_KEY = "app-color-mode"
const  instance = axios.create({
    baseURL: gemini_endpoint + GOOGLE_GEMINI_API_KEY,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const make_request = async (prompt: string) => {
    return await instance.post('', {
        contents: [{
            parts:[
                {
                    text: prompt
                }
            ]
        }]
      })
      .then(function (response) {
        const generated_response = response.data.candidates[0].content.parts[0].text
        console.log("gemini response", response.data.candidates[0].content.parts[0].text);
        return generated_response
      })
      .catch(function (error: any) {
        console.log("gemini error", error);
        return undefined
      });
}

