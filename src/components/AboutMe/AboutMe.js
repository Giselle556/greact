import React from 'react';

function About(){
    return (
        <section className="relative pt-12">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibol text-gray-700">About Me</h3>
              <p className="mt-4 text-lg leading-relaxed text-black-700">
              Hi! I am currently a student attending university of Arizona's Full Stack
        Web development Bootcamp. I do prefer the front end of web development
        but I also have experience doing the backend. I am also attending
        Arizona State University to recieve my Bachelors in Criminal Justice, I
        plan on continuing my studies and starting a master's program in the
        near future as well. Before starting the bootcamp I was an
        Automation/Hub Manager for UPS where I overviewed different operations
        and spent my time traveling within the states helping train and develop
        management. I plan to merge my new coding knowledge and previous work
        experience and go into either product management or join an I.E team for
        a large corporation.
            </p>
            </div>
          </div>
        </div>
        </section>
    )
}

export default About;