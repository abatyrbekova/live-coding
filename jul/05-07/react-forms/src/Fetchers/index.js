export const registerUser = async (userData) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
};
