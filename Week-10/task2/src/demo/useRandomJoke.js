import React,{useState,useEffect} from 'react'
function useRandomJoke()
{


let [joke, setJoke] = useState([]);
  useEffect(() => {
    let fetchJoke = async () =>
      await fetch(`https://official-joke-api.appspot.com/random_joke`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.punchline);
          setJoke(data.punchline);
        });
    fetchJoke();
  }, []);
  return joke
}
export default useRandomJoke;