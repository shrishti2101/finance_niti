import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [ispending, setIspending] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  // const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) { throw Error("Error Fetching data") }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIspending(false);
          setError(null);
        })
        .catch(err => {
          setIspending(false);
          setError(err.message)
        });
    }, 500)
  }, [url])

  const postBlog = (blog) => {
    fetch(url)
      .then((res) => {
        console.log('Fetch existing blogs response:', res); // Log the response object
        if (!res.ok) {
          throw Error("Error fetching existing blogs");
        }
        return res.json();
      })
      .then((existingBlog) => {
        if (!existingBlog || !Array.isArray(existingBlog)) {
          throw Error("Invalid data format for existing blogs");
        }
        const id = existingBlog.length ? Math.max(...existingBlog.map(b => b.id)) + 1 : 1;
        const newBlog = { ...blog, id };

        return fetch(url, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newBlog)
        })
      })
      .then((res) => {
        if (!res.ok) {
          throw Error("Error Add blog");
        }
        return res.json();
      })
      .then((data) => {
        setData((prevData) => [...prevData, data]);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error adding new blog:", error)
      });


     
  }
  const editBlog = (id, updatedBlog) => {
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBlog)
    })
      .then((res) => {
        if (!res.ok) { throw Error("Error updating blog") }
        return res.json();
      })
      .then((updatedData) => {
        setData((prevData) => prevData.map((blog) => blog.id === id ? updatedData : blog));
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error updating blog:", error)
      });
  };
  return { data, ispending, error, postBlog,editBlog};
}

export default useFetch;