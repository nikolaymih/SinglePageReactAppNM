const url = 'http://localhost:5000';

export const getUserDataService = async () => {
    return (await fetch(`${url}/apple.com`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
}