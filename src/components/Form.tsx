import React, { useState } from 'react'
import Billing from './Billing';

export type DataState = {
   billFirstName: string;
   billLastName: string;
   billAddress1: string;
   billAddress2: string;
   billCity: string;
   billState: string;
   billZipCode: string;
};

const Form: React.FC = () => {
   const [data, setData] = useState<DataState>({
      billFirstName: '',
      billLastName: '',
      billAddress1: '',
      billAddress2: '',
      billCity: '',
      billState: '',
      billZipCode: '',
   });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      console.log(JSON.stringify(data));
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const type = e.target.type;
      const name = e.target.name;

      const value = type === 'checkbox' ? e.target.checked : e.target.value;

      setData(prevData => {
         return { ...prevData, [name]: value };
      })
   };

  return (
    <form className='fom flex-col' onSubmit={handleSubmit} >
      <h2>Billing Info</h2>

      <Billing data={data} handleChange={handleChange} />

      <button className="button">Submit</button>
    </form>
  )
}

export default Form