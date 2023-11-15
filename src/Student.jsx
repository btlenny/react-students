import React from 'react';
import Score from './Score.jsx';

const Student = ({ student }) => (
  <div>
    <h2>{student.name}</h2>
    <p>{student.bio}</p>
    <h3>Scores:</h3>
    {student.scores.map((score, index) => (
      <Score key={index} date={score.date} score={score.score} />
    ))}
  </div>
);

export default Student;
