import React from "react";

export default function Main(){
    return(
        <main className="wrapper">
            <div className="color-text">
                <section>
                    <h2><strong>About</strong></h2>
                    <p>I am a frontend developer with a particular interest
                        in making things simple and automating daily tasks.
                        i try to keep up with security and best practices,
                        and am always looking for new things to learn.</p>
                </section>
                <section>
                    <h2><strong>interests</strong></h2>
                    <p> Food expert. Music Scholar. Reader.
                        Interest fanatic.Bacon buff. Entrepreneur.
                        Travel geek. this.props.culture ninja.
                        Coffee fanatic
                    </p>
                </section>
            </div>
        </main>
    )
}