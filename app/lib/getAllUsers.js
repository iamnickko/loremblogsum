const getAllUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Failed to fetch all users.')
    }
    const data = response.json()
    return data;
}

export default getAllUsers;