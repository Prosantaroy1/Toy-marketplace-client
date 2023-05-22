import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TarckCar from '../../AllCategory/TarckCar';


const Category = () => {

    const [categorys, setCategorys] = useState([]);
     //
     const [activeTab, setActiveTab] = useState("truck")
     //
     useEffect(()=>{
        fetch(`http://localhost:5000/product/${activeTab}`)
        .then(res=> res.json())
        .then(data=>{
            setCategorys(data)
        })
    },[activeTab])
    //
    const handleTab = (tabName) =>{
       setActiveTab(tabName);
     //  console.log(tabName)
    };
   console.log(categorys)
   //
   //const {_id, price, rating, photo, toyname} = categorys || {};


    return (
        <div>
            <h4 className='text-center mt-3 font-bold text-3xl'>All Category</h4>
            <div className='container mx-auto'>
              <Tabs className='mt-3 font-bold'>
                 <TabList className='flex flex-row gap-4 justify-center'>
                     <Tab onClick={()=> handleTab("truck")} className={`truck border px-4 ${activeTab == "truck" ? "bg-green-700" : ""}`}>
                        Track Car
                     </Tab>
                     <Tab onClick={()=> handleTab("regular car")} className={`regular border px-4  car ${activeTab == "regular car" ? "bg-green-700" : ""}`}>
                        Regular Car
                     </Tab>
                     <Tab onClick={()=> handleTab("sports car")} className={`sports border px-4  car ${activeTab == "sports car" ? "bg-green-700" : ""}`}>
                        Sports Car
                    </Tab>
                  </TabList>
             {/*Tarck Car */}
                <TabPanel>
                    <div className='flex flex-row gap-4 mt-3 flex-wrap'>
                      {
                        categorys.map(category=> <TarckCar
                         key={category._id}
                         category={category}
                        ></TarckCar>)
                      }
                    </div>
                </TabPanel>
             {/*Regular Car */}
                <TabPanel>
                   <div className='flex flex-row gap-4 mt-3 flex-wrap'>
                       {
                        categorys.map(category=> <TarckCar
                         key={category._id}
                         category={category}
                        ></TarckCar>)
                      }
                    </div>
                </TabPanel>
             {/*Sports Car */}
                <TabPanel>
                  <div className='flex flex-row gap-4 mt-3 flex-wrap'>
                      {
                        categorys.map(category=> <TarckCar
                         key={category._id}
                         category={category}
                        ></TarckCar>)
                      }
                    </div>
                </TabPanel>
              </Tabs>    
            </div>
        </div>
    );
};

export default Category;