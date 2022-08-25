import axios from "axios";

// testing our endpoints that we made in server2.js
const getFromMyServer1= async ()=>{
    const res = await axios.get("http://localhost:8000/")
  
    console.log(res.data);
  }
  
  
  const getFromMyServer2= async ()=>{
    const res = await axios.get("http://localhost:8000/login/sangeetha")
  
    console.log(res.data);
  }
  
  
  getFromMyServer1();
  getFromMyServer2();

  