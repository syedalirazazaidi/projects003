import React from "react";
import { Infom } from "./Types/type";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [job, setJob] = React.useState<Infom[]>([]);
  const [value, setValue] = React.useState(0);

  const fetchJob = async () => {
    const response = await fetch(url);
    const newJobs: Infom[] = await response.json();
    setJob(newJobs);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchJob();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }
  const handleClick = (index: number) => {
    setValue(index);
  };
  const { dates, duties, company, title }: Infom = job[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {job.map((item: Infom, index: number) => {
            return (
              <div>
                {console.log(index)}
                <button
                  key={item.id}
                  className={`job-btn ${index === value && "active-btn"}`}
                  onClick={() => handleClick(index)}
                >
                  {/* onClick={() => setValue(index)} */}
                  {item.company}
                </button>
              </div>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div>
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
