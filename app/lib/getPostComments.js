const getPostComments = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch comments for /post/${postId}`)
    }
    const data = response.json()
    return data;
}

export default getPostComments;