import axios from 'axios'

export const baseUrl = axios.create({
    baseURL: 'http://localhost:3001/db.json'
})