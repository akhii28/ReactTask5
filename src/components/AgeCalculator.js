import {useState} from 'react';
import './calculator.css';
export function AgeCalculator(){
    
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState("__");

    const CalculateAge = () => {
        const today = new Date();
        const userDate = new Date(birthDate);

        let age = today.getFullYear() - userDate.getFullYear();
        const monthDiff = today.getMonth() - userDate.getMonth();
        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < userDate.getDate()))
        {
            age--;
        }
        if(age >= 0){
            setAge(age);
        }
        else{
            alert("Enter the date before today's date..")
        }
        
    }

    return(
        <div className="container text-center mt-5">
            <h1 className="title">Age Calculator</h1>
            <h6>Enter your date of birth</h6>
            <input className='input' type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
            <br/>
            <button className='btn btn-primary' onClick={CalculateAge}>Calculate Age</button>
            <br /><br />
            <h3>Your are {age} years old</h3>
        </div>
    )
}