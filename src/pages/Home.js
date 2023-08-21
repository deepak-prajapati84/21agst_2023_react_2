import React from "react";
import  {Link} from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Home Pages</h1>
            <header></header>
            <main>
                <h2 className="mb-3 text-info text-center">Form validation</h2>
                <form className="offset-3">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name='name'
                        id='name'
                        className='mb-2 w-50 p-2 form-control'
                        placeholder="Name"
                    />
                    <label htmlFor="email">Email-Id</label>
                    <input 
                        type="email" 
                        name='email'
                        id='email'
                        className='w-50 mb-2 p-2 form-control'
                        placeholder="email"
                    />
                    <label htmlFor="number">Phone</label>
                    <input 
                        type="number" 
                        name='number'
                        id='number'
                        className='w-50 mb-2 p-2 form-control'
                        placeholder="number"
                    />

                    <button className="btn offset-3 mt-3 btn-primary">Save</button>
                </form>
            </main>
            <footer></footer>
        </>
    );
}

export default Home;