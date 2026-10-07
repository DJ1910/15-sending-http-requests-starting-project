export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");

    if (!response.ok) {
        throw new Error("Failed to fetch available places.");
    }

    const resData = await response.json();

    return resData.places;
}

export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places");

    if (!response.ok) {
        throw new Error("Failed to fetch user selected places.");
    }

    const resData = await response.json();

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok) {
        throw new Error('Failed to update user data.');
    }

    const resData = await response.json();
    return resData.message;
}