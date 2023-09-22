const getBlog = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch blog with ID of ${id}.`);
  }
  const data = response.json();
  return data;
};

export default getBlog;
