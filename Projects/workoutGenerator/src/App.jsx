import { useEffect, useState } from 'react'

function App() {
  const [location, setLocation] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [split, setSplit] = useState('');
  const [splitLength, setSplitLength] = useState(0);
  const [displayLocation, setDisplayLocation] = useState('');
  const [displayDifficulty, setDisplayDifficulty] = useState('');
  const [displayWorkout, setDisplayWorkout] = useState([]);
  const [displayDay, setDisplayDay] = useState([]);

  const handleSplitChange = (value, length) => {
    setSplit(value);
    setSplitLength(length);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic to update displayLocation, displayDifficulty, and displayWorkout
  
    const daysDisplayed = [];
    const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"];

    // Full Body Exercises
    const fullBody = {
      Home: {
        beginner: [
          "Bodyweight Squats (3x15)",
          "Push-Ups (3x12)",
          "Dumbbell Rows (3x12)",
          "Plank (3 sets, hold for 30 seconds)"
        ],
        intermediate: [
          "Barbell Squats (3x10)",
          "Dumbbell Bench Press (3x10)",
          "Pull-Ups (3x8)",
          "Russian Twists (3 sets, 12 reps per side)"
        ],
        advanced: [
          "Deadlifts (3x5)",
          "Weighted Dips (3x8)",
          "Barbell Rows (3x8)",
          "Hanging Leg Raises (3 sets, 10 reps)"
        ]
      },
      Gym: {
        beginner: [
          "Leg Press Machine (3x15)",
          "Machine Chest Press (3x12)",
          "Lat Pulldown Machine (3x12)",
          "Plank (3 sets, hold for 30 seconds)"
        ],
        intermediate: [
          "Barbell Squats (3x10)",
          "Barbell Bench Press (3x10)",
          "Pull-Ups (3x8)",
          "Russian Twists (3 sets, 12 reps per side)"
        ],
        advanced: [
          "Deadlifts (3x5)",
          "Weighted Dips (3x8)",
          "Barbell Rows (3x8)",
          "Hanging Leg Raises (3 sets, 10 reps)"
        ]
      }
    };

    // Bro Split Exercises
    const broSplit = {
      Home: {
        beginner: [
          "Dumbbell Lunges (3x12 per leg)",
          "Dumbbell Bicep Curls (3x12)",
          "Tricep Kickbacks (3x12)",
          "Calf Raises (3x15)"
        ],
        intermediate: [
          "Barbell Lunges (3x10 per leg)",
          "Hammer Curls (3x10)",
          "Skull Crushers (3x10)",
          "Seated Calf Raises (3x12)"
        ],
        advanced: [
          "Hack Squats (3x8)",
          "Preacher Curls (3x8)",
          "Close Grip Bench Press (3x8)",
          "Standing Calf Raises (3x12)"
        ]
      },
      Gym: {
        beginner: [
          "Leg Press Machine (3x15)",
          "Machine Bicep Curls (3x12)",
          "Tricep Pushdown Machine (3x12)",
          "Calf Raises on Leg Press Machine (3x15)"
        ],
        intermediate: [
          "Barbell Lunges (3x10 per leg)",
          "EZ Bar Curls (3x10)",
          "Skull Crushers (3x10)",
          "Seated Calf Raises (3x12)"
        ],
        advanced: [
          "Hack Squats (3x8)",
          "Preacher Curls (3x8)",
          "Close Grip Bench Press (3x8)",
          "Standing Calf Raises (3x12)"
        ]
      }
    };

    // PPL (Push, Pull, Legs) Split Exercises
    const ppl = {
      Home: {
        beginner: {
          Push: [
            "Push-Ups (3x12)",
            "Dumbbell Shoulder Press (3x12)",
            "Tricep Dips (3x12)"
          ],
          Pull: [
            "Bodyweight Rows (3x12)",
            "Dumbbell Bicep Curls (3x12)",
            "Plank (3 sets, hold for 30 seconds)"
          ],
          Legs: [
            "Bodyweight Squats (3x15)",
            "Lunges (3x12 per leg)",
            "Calf Raises (3x15)"
          ]
        },
        intermediate: {
          Push: [
            "Barbell Bench Press (3x10)",
            "Seated Dumbbell Lateral Raises (3x10)",
            "Tricep Rope Pushdowns (3x10)"
          ],
          Pull: [
            "Lat Pulldowns (3x10)",
            "Barbell Rows (3x10)",
            "Hammer Curls (3x10)"
          ],
          Legs: [
            "Barbell Squats (3x10)",
            "Romanian Deadlifts (3x10)",
            "Seated Calf Raises (3x12)"
          ]
        },
        advanced: {
          Push: [
            "Incline Bench Press (3x8)",
            "Arnold Press (3x8)",
            "Weighted Dips (3x8)"
          ],
          Pull: [
            "Weighted Pull-Ups (3x8)",
            "T-Bar Rows (3x8)",
            "Concentration Curls (3x8)"
          ],
          Legs: [
            "Hack Squats (3x8)",
            "Stiff Leg Deadlifts (3x8)",
            "Standing Calf Raises (3x12)"
          ]
        }
      },
      Gym: {
        beginner: {
          Push: [
            "Machine Chest Press (3x12)",
            "Machine Shoulder Press (3x12)",
            "Tricep Pushdown Machine (3x12)"
          ],
          Pull: [
            "Lat Pulldown Machine (3x12)",
            "Cable Rows (3x12)",
            "Bicep Curls with Cable Machine (3x12)"
          ],
          Legs: [
            "Leg Press Machine (3x15)",
            "Leg Extension Machine (3x12)",
            "Leg Curl Machine (3x12)"
          ]
        },
        intermediate: {
          Push: [
            "Barbell Bench Press (3x10)",
            "Dumbbell Shoulder Press (3x10)",
            "Skull Crushers (3x10)"
          ],
          Pull: [
            "Pull-Ups (3x10)",
            "Barbell Rows (3x10)",
            "Preacher Curls (3x10)"
          ],
          Legs: [
            "Barbell Squats (3x10)",
            "Romanian Deadlifts (3x10)",
            "Standing Calf Raises (3x12)"
          ]
        },
        advanced: {
          Push: [
            "Incline Bench Press (3x8)",
            "Military Press (3x8)",
            "Tricep Dips (3x8)"
          ],
          Pull: [
            "Weighted Pull-Ups (3x8)",
            "T-Bar Rows (3x8)",
            "Concentration Curls (3x8)"
          ],
          Legs: [
            "Deadlifts (3x5)",
            "Leg Press Machine (3x8)",
            "Standing Calf Raises (3x12)"
          ]
        }
      }
    };

    let selectedWorkoutPlan = [];

    switch (split) {
      case 'fullBody':
        selectedWorkoutPlan = fullBody[location][difficulty];
        break;
      case 'broSplit':
        selectedWorkoutPlan = broSplit[location][difficulty];
        break;
      case 'ppl':
        selectedWorkoutPlan = ppl[location][difficulty];
        break;
      default:
        break;
    }

    const locationOptions = {
      Home: 'Home workout plan',
      Gym: 'Gym workout plan'
    };
    const difficultyOptions = {
      beginner: 'Difficulty : Beginner',
      intermediate: 'Difficulty : Intermediate',
      advanced: 'Difficulty : Advanced'
    };

    for (let i = 0; i < splitLength; i++) {
      daysDisplayed = days[i];
    }

    setDisplayLocation(locationOptions[location]);
    setDisplayDifficulty(difficultyOptions[difficulty]);
    setDisplayWorkout(workoutPlan);
    setDisplayDay(daysDisplayed);
    
  };

  return (
    <>
      <div className='min-w-md min-h-screen bg-[rgb(255,242,225)]/50'>
        <h1 className='text-3xl text-center bg-[rgb(209,187,158)] py-6' >Workout Generator</h1>
        <div className='grid grid-cols-2 my-4 bg-[rgb(209,187,158)]/50 mx-5 rounded-lg'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col mx-2 py-4'>
              <h1 className='text-2xl py-3 px-3 bg-[rgb(167,146,119)]/50 rounded-lg'>Choose your preferences : </h1>
              <div className='flex flex-row py-3 mx-3'>
                <h4 className='text-lg mx-3'>Location :</h4>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='Location'
                    value='Home'
                    className='mx-3'
                    checked={location === 'Home'}
                    onChange={() => setLocation('Home')}
                  />Home</label>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='Location'
                    className='mx-3'
                    value='Gym'
                    checked={location === 'Gym'}
                    onChange={() => setLocation('Gym')}
                  />Gym</label>
              </div>
              <div className='flex flex-col py-3 px-3'>
                <h4 className='text-lg mx-3'>Difficulty : </h4>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='difficulty'
                    className='mx-3'
                    value='beginner'
                    onChange={() => setDifficulty('beginner')}
                  />
                  Beginner</label>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='difficulty'
                    className='mx-3'
                    value='intermediate'
                    onChange={() => setDifficulty('intermediate')}
                  />
                  Intermediate</label>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='difficulty'
                    className='mx-3'
                    value='advanced'
                    onChange={() => setDifficulty('advanced')}
                  />
                  Advanced</label>
              </div>
              <div className='flex flex-col py-3 px-3'>
                <h4 className='text-lg mx-3'>Split : </h4>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='split'
                    className='mx-3'
                    value="fullBody"
                    onChange={() => handleSplitChange('fullBody', 3)}
                  />
                  Full Body (3 days a week)</label>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='split'
                    className='mx-3'
                    value="broSplit"
                    onChange={() => handleSplitChange('broSplit', 5)}
                  />
                  Bro Split (5 days a week)</label>
                <label className='cursor-pointer'>
                  <input
                    type="radio"
                    name='split'
                    className='mx-3'
                    value="ppl"
                    onChange={() => handleSplitChange('ppl', 6)}
                  />
                  PPL (6 days a week)</label>
              </div>
              <div>
                <input
                  type="submit"
                  value="Generate Workout"
                  className='my-5 mx-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full cursor-pointer'
                />
              </div>
            </div>
          </form>


          <div className='flex flex-col py-4 bg-[rgb(209,187,158)]/50 '>
            <h1 className='text-2xl py-3 px-3 mx-3 rounded-lg'>Workout Routine : </h1>
            <p className='mx-3 my-3'><b>{displayLocation}</b>  <i>{displayDifficulty}</i></p>
            {displayWorkout && displayWorkout.length > 0 && (
              <div className='mx-4'>
                {displayDay.map((day, index) => (
                  <div key={index}>
                    <h2 className='text-md font-semibold my-3'>{day}</h2>
                    <ul className='list-decimal mx-7'>
                      {displayWorkout[index].map((exercises, i) => (
                        <li key={i} className='my-1 '>{exercises}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
