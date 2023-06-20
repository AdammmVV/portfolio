import axios from "axios";

const instance = axios.create({
    baseURL: 'https://gmail-nodejs-beige.vercel.app/',
})

export const api = {
    sendMessage: (data: { name: string, email: string, description: string }) => {
        return instance.post<{message: string}>('sendMessage', data)
    }
}