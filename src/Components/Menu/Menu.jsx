import { useEffect, useState } from "react";
import api from "../../api";

const Menu = () => {
  const [starters, setStarters] = useState([]);
  const [starterData, setStarterData] = useState([]);
  const [beverages, setbeverages] = useState([]);
  const [mainCourse, setMainCourse] = useState([]);
  useEffect(()=>{
    const fetchStarter = async() =>{
        const starterData = await api.get("/management/foodMenuList/");
        setStarters(starterData.data);
    }

    fetchStarter();
  },[])
  console.log(
    starters.filter(item=>item.name === "Starters"))
  return (
    <div className="text-center">
      <h3>CHEF'S RECOMMEDED</h3>
      <h1>Selected Menus</h1>
      <h6 className="w-2/3 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod vitae
        in, accusamus aspernatur excepturi accusantium libero ex id optio,
        beatae, rerum veniam fugiat blanditiis tempora nobis ducimus tempore
        consectetur.
      </h6>
      <div className="starters">
        
      </div>
    </div>
  );
};

export default Menu;
