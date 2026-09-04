import axios from "axios";

const client = axios.create({
    baseURL: 'https://www.arbeitnow.com',
})

export async function fetchJobs() {
    const data = await client.get('/api/job-board-api');
    return data;
}