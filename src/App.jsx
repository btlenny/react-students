import { useState } from 'react'
import './App.css'
import Student from './Student.jsx';


function App() {
  const [students, setStudents] = useState([
    {
      name: 'Cait Yomorta',
      bio: 'Nascar Driver',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]
    },
    {
      name: 'Holly Baird',
      bio: 'Professional Clown.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]
    },
    {
      name: 'Wes Mungia',
      bio: 'VCR Repairman',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]
    }
  ]);

  return (
    <div>
      <h1>Student Information</h1>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  );
};

export default App;

