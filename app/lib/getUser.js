const getUser = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch userId.");
  }
  const data = response.json();
  return data;
};

export default getUser;
