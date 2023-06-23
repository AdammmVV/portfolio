import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3010/',
})

export const api = {
    sendMessage: (data: { name: string, email: string, description: string }) => {
        return instance.post<{ message: string }>('sendMessage', data)
    },
    downloadCV: () => {
        return instance.get('download', {responseType: 'blob'}).then(({data}) => {
            const blob = new Blob(
                [data],
                {type: 'application/pdf'}
            )
            const downloadUrl = window.URL.createObjectURL(blob)

            const link = document.createElement('a')
            link.href = downloadUrl
            link.setAttribute('download', 'AdamchukValery(ru_eng).pdf')
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
    }
}