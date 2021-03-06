import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "../Styles/Home";
import theme from "../Styles/Config";
import Typography from "@material-ui/core/Typography";
import Layout from "./Layout";

const Home = () => {
  // const [posts,setPosts]= useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idfromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idfromButtonClick]); //aqui se pone el id para que se cambie las notas
  const classes = useStyles();
  // function fetchApi (){
  //   axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
  //   .then(result=>{
  //     console.log(result.data)
  //   }).catch(console.log)
  // }
  // fetchApi()
  // {data.result.map((data,index)=>{
  return (
    <Layout>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        change post
      </button>
        {/* <ul>
        {
          posts.map(post => (
            <li key={post.index}>
               {post.title}
            </li>
          ))} 
          </ul>    */}
        <div>{post.title}</div>
      </Layout>
  );
};

export default Home;
