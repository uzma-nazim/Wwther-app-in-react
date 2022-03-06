import { useEffect, useState } from "react"
import "./style.css"

const App = () => {



  let [inputVal, setinpytVal] = useState("")
  let [apicity, setapicity] = useState()
  let [latitiude, setlatitiude] = useState(	25.97551)
  let [longtitiude, setlongtitiude] = useState(	113.236656)
  let [bydafault, setbydafault] = useState()

  const getLocation = () => {


    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((postion) => {
        // console.log(postion.coords.longitude);
        setlatitiude(postion.coords.latitude)
        setlongtitiude(postion.coords.longitude)


        console.log("karachi");
      })
      
    }


  }
  getLocation()


  useEffect(() => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitiude}&lon=${longtitiude}&appid=f2098469fd3accc3e484cd6d689038da&units=metric`)




      .then(data => data.json())
      .then((result) => {

        setapicity(result)
        console.log(result);
        console.log(apicity);




      })
      .catch((error) => {
        console.log(error);

      });





  }, [latitiude, longtitiude ,inputVal])




  const searchLocation = ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=f2098469fd3accc3e484cd6d689038da&units=metric`)




    .then(data => data.json())
    .then((result) => {

      setapicity(result)
      console.log(result);
      console.log(apicity);




    })
    .catch((error) => {
      console.log(error);

    });

    
  }



  return (

    <>
      <div className="mainHeader">

        <div className="smallheader" >


          <input placeholder="Enter City" onChange={(e) => setinpytVal(e.target.value)} type="text" />
          <br />
          <button onClick={searchLocation} className="srearch">Serach Location</button>


          {!apicity ? (


            <div className="city">
              <h4>Data not found</h4>
            </div>

          ) :


            (<>
              <div className="city">
                <h1>{apicity.name}</h1>

              </div>
              <div className="city">
                <h4>{apicity.main.temp}<sup>o</sup>C</h4>
              </div>
            </>
            )}


        </div>


      </div>


    </>
  )
}




export default App