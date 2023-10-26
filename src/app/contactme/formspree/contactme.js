// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xrgwrgnr");
    if (state.succeeded) {
        return <p>Thanks for submitting!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col m-auto rounded-lg '>
            <div className='flex flex-row'>
         
            <input
                id="email"
                type="email"
                name="email"
                className='my-5 bg-neutral-800 rounded-lg border border-2 border-neutral-800 p-2'
                placeholder='Email'
                required
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            </div>
            <div className='flex flex-col'>
           
            <textarea
                id="message"
                name="message"
                className='my-5 bg-neutral-800 rounded-lg border border-2 border-neutral-800 p-2'
                placeholder='Message'
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            </div>
            
            
            
            <button type="submit" disabled={state.submitting} className='my-5 bg-neutral-800 rounded-full border border-2 border-neutral-800'>
                Submit
            </button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;