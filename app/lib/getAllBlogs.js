const getAllBlogs = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch all blogs.");
  }
  const data = response.json();
  return data;
};

export default getAllBlogs;
