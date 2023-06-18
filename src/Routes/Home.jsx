// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // TODO: replace this
    <div>
      <div>
        <div>
          <h2>Student Independen Kampus Merdeka</h2>
        </div>
        <div >
          <button>
            <Link
              to="/student"
              data-testid="student-btn"
              style={{ textDecoration: "none", color: "black" }}
            >
              All Student
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
