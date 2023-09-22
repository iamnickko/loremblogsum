const PostLayout = ({children}) => {

    
    return (
        <section>
            {children}
        </section>
    )
}

export default PostLayout;

export const generateMetadata = async ({params}) => {
    const id = params.id
    const fetchMetadata = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const metaData = await fetchMetadata.json()
    return {
        title: metaData.title,
        description: `A blog article written on LoremBlogsum named \"${metaData.title}\"`
    }
}