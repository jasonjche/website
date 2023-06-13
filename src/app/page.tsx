export default function Home() {
  return (
    <body className="max-w-7xl mx-auto p-8 bg-dawn-bg">
      <h1 className="text-4xl font-bold mb-4 text-dawn-text">Jason He</h1>
      <h2 className="text-2xl font-medium mb-4 text-dawn-text">Product Management Intern at Reddit</h2>
      <h3 className="text-1xl font-light mb-4 text-dawn-text">University of Virginia | Computer Science and Commerce</h3>

      <div className="grid grid-cols-2 gap-4 text-dawn-text">
        <div>
          <h2 className="text-2xl font-medium mb-2">Experience</h2>
          <p className="mb-2">Stacker</p>
          <p className="mb-2">Viget</p>
          <p>Parenthood Ventures</p>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">Contact</h2>
          <p className="text-dawn-accent mb-2">
            <a href="mailto:jasonjche@virginia.edu" target="_blank" className="text-dawn-accent">Email</a>
          </p>
          <p className="text-dawn-accent mb-2">
            <a href="https://www.linkedin.com/in/jasonjche/" target="_blank" rel="noopener noreferrer" className="text-dawn-accent">LinkedIn</a>
          </p>
          <p className="text-dawn-accent mb-2">
            <a href="https://github.com/jasonjche/" target="_blank" rel="noopener noreferrer" className="text-dawn-accent">Github</a>
          </p>
          <p className="text-dawn-accent mb-2">
            <a href="https://twitter.com/jasonjche/" target="_blank" rel="noopener noreferrer" className="text-dawn-accent">Twitter</a>
          </p>
        </div>
      </div>

      <div className="mt-4 text-dawn-text">
        <h2 className="text-2xl font-medium mb-2">Looking for opportunities</h2>
        <p className="text-lg">Reach out to me if you are interested in chatting or have SWE/PM opportunities!</p>
      </div>

      <div className="mt-8 text-center">
        <a href="https://www.dropbox.com/s/za6ptynh53kt8bc/Jason%20He%20Resume%20-%20Product.pdf?dl=0" className="text-dawn-accent text-lg">Here is my resume</a>
      </div>
    </body>
  );
}
