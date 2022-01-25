import "../styles/index.scss";
import React from 'react';
import Recipes from "./Recipes";

const App = () => {
    return (
    <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Here we are.</h1>
            </section>
        </main>
        <Recipes />
    </>
    );
}

export default App;
