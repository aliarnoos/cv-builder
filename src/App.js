import './index.css';
import { useState} from "react";
import InfoForm  from './components/InputForm';
import CvForm from './components/CvOutput';

function App () {
  const [personInfo, setPersonInfo] = useState({
    fName: 'FirstName',
    lName: 'LastName',
    title:'JobTitle',
    phone:'12345678901',
    email:'user@example.com',
    adress:'someWhere',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Officia dolores numquam dignissimos animi perspiciatis, quo eligendi, fugiat impedit asperiores unde nostrum atque possimus repudiandae explicabo.'
  })

  const updateInfo = () => {
    setPersonInfo({
      fName: document.getElementById('first-name').value,
      lName: document.getElementById('last-name').value,
      title: document.getElementById('job-title').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      adress: document.getElementById('adress').value,
      desc: document.getElementById('description').value
    })
  }
    return (
        <>
        <InfoForm 
          personInfo={personInfo}
          updateInfo= {updateInfo}
        />
        <CvForm personInfo={personInfo} />
        </>
    );
  }
export default App;

