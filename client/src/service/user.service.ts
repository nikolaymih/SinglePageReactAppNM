const url = 'http://localhost:5000';

export const getUserDataService = async (
    location: string
) => {

    return (await fetch(`${url}${location}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
}