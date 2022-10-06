import useFormContext from '../hooks/useFormContext';
import Billing from './Billing';
import FormInputs from './FormInputs';
import { FormContextObj } from '../context/FormContext';

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
   const  { page, setPage, data, title, canSubmit } = useFormContext();

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      console.log(JSON.stringify(data));
   };

   
   // const handleChangeSelect = (
   //    e: React.ChangeEvent<HTMLSelectElement>
   //    ) => {
   //       setData(prev => {
   //          return {...prev, [e.target.name]: e.target.value}
   //       })
   //    };
      
   

  return (
     <form className="form flex-col" onSubmit={handleSubmit}>
        <header>
           <h2>{title[page]}</h2>

           <div className="button-container">
               <button type="button" className="button">Prev</button>
               <button type="button" className="button">Next</button>
              <button type="submit" className="button" disabled={!canSubmit}>
                 Submit
              </button>
           </div>
        </header>

        <FormInputs />

        {/* <Billing
           data={data}
           handleChange={handleChange}
           handleChangeSelect={handleChangeSelect}
        /> */}
     </form>
  );
}

export default Form