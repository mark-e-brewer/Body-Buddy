# Body Buddy

[View App] (https://bodybuddy.netlify.app/) 
## What is Body Buddy?
Body Buddy is a React web app built for anyone who likes to weightlift for hypertrophy (Body Building) and wants to see some real results! Body Buddy is a one stop shop for intuitive goal setting and extensive progress tracking. At the core of what makes Body Buddy fun and effective to use is a mix of dynamic visuals that provide a deeper sense of achievement.

## Features
- Intuitive setting and tracking of body building goals for each muscle group.
- Personalized goal generation.
- Mobile workout logging.
- Delete and edit logged workouts.
- Visual feedback on goal progression.
- Statistical graphs on user data for insight into weightlifting habbits and progression of completed volume.
- Tracking of goal reset date.
- Visual record of weekly goal completion and all logged workouts.

## Project Screenshots
- Sign in page (users must first sign in with google authentication) 
<img width="500" alt="Sign in page" src="https://user-images.githubusercontent.com/119375745/253436277-2be06e0e-2ba1-4117-9ef2-02db641786ef.png">
-Goal Page (Set weekly goal reset day, Create Custom goals, Track goal progress, Reset goal progress, Navigate to computer workout log)
<img width="500" alt="Goal Page" src="https://user-images.githubusercontent.com/119375745/253435399-cf479b15-fe26-49b2-8a68-d9b71b70f727.png">
<img width="500" alt="Goal Form" src="https://user-images.githubusercontent.com/119375745/253435407-16d75ecb-0562-4db4-b849-72764099650e.png">
-Workout Logger / Current weeks workouts (log workouts by day and number of sets complete for each muscle group)
<img width="500" alt="Current Workouts" src="https://user-images.githubusercontent.com/119375745/253436786-5685496e-ef05-4143-bbea-d797731e80cf.png">
<img width="500" alt="Workout Logger" src="https://user-images.githubusercontent.com/119375745/253435460-dcddb900-e462-423e-a421-ee709bb874d2.png">
-Goal Generator (create personalized goals based on user weightlifting experience and intention for each muscle group)
<img width="500" alt="Goal Generator" src="https://user-images.githubusercontent.com/119375745/253435417-c4622ced-9cb8-4ea9-b6d8-69165af34114.png">
-Mobbile Logger (log sets as you go in the gym on your phone, data is saved automaticly after each iteration to allow more flexability but will not log to current week until user does so)
<img width="500" alt="Mobbile Logger" src="https://user-images.githubusercontent.com/119375745/253435429-5da0a64d-7429-4255-8669-93ff1a3a27da.png">
-User stats (Statistical graphs on user data such as completed sets vs goal or number of sets logged each day of the week. filterable by all or individual muscle groups)
<img width="500" alt="goal vs complete" src="https://user-images.githubusercontent.com/119375745/253435434-fa001839-ce5e-4701-a992-2a27ce4ce3c5.png">
<img width="500" alt="Sets each day of week" src="https://user-images.githubusercontent.com/119375745/253435437-b09f5641-10fb-4ba7-99d8-af846638628a.png">
<img width="500" alt="percent of goal" src="https://user-images.githubusercontent.com/119375745/253435534-91dd9e2c-0aae-405c-897a-6cb709ede195.png">
-Previous weeks completion (Hover over week to see your goal and completion for each muscle group or click to see log of each individual workout for that week)
<img width="500" alt="previous weeks" src="https://user-images.githubusercontent.com/119375745/253438206-984d05ba-7414-4e71-a138-e930e6e8f1c1.png">

## Code Snippet (Portion of Past Month % Completion Logic)
  if (muscleSelected === null) {
    const weekObj1 = prevMonth[0];
    const weekObj2 = prevMonth[1];
    const weekObj3 = prevMonth[2];
    const weekObj4 = prevMonth[3];

    let totalGoal1 = 0;
    let totalCompleted1 = 0;
    let totalGoal2 = 0;
    let totalCompleted2 = 0;
    let totalGoal3 = 0;
    let totalCompleted3 = 0;
    let totalGoal4 = 0;
    let totalCompleted4 = 0;

    Object?.keys(weekObj1 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj1[key];
        const total = weekObj1[totalKey];
        const completed = Math.min(total, goal);
        totalGoal1 += goal;
        totalCompleted1 += completed;
      }
    });
    Object?.keys(weekObj2 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj2[key];
        const total = weekObj2[totalKey];
        const completed = Math.min(total, goal);
        totalGoal2 += goal;
        totalCompleted2 += completed;
      }
    });
    Object?.keys(weekObj3 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj3[key];
        const total = weekObj3[totalKey];
        const completed = Math.min(total, goal);
        totalGoal3 += goal;
        totalCompleted3 += completed;
      }
    });
    Object?.keys(weekObj4 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj4[key];
        const total = weekObj4[totalKey];
        const completed = Math.min(total, goal);
        totalGoal4 += goal;
        totalCompleted4 += completed;
      }
    });

    week1percent = Math.ceil((totalCompleted1 / totalGoal1) * 100);
    week2percent = Math.ceil((totalCompleted2 / totalGoal2) * 100);
    week3percent = Math.ceil((totalCompleted3 / totalGoal3) * 100);
    week4percent = Math.ceil((totalCompleted4 / totalGoal4) * 100);
  } else if (muscleSelected !== null) {
    const percentageComplete = {};
    for (let i = 0; i < 4; i++) {
      const weekObj = prevMonth[i];
      const weekPercentsComplete = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const muscle in weekObj) {
        if (muscle.includes('Goal')) {
          const total = weekObj[muscle.replace('Goal', 'Total')];
          const goal = weekObj[muscle];
          const percent = Math.min((total / goal) * 100, 100);
          weekPercentsComplete[muscle.replace('Goal', '')] = percent;
        }
      }
      percentageComplete[`week${i + 1}PercentsComplete`] = weekPercentsComplete;
    }
    week1percent = Math.ceil(percentageComplete?.week1PercentsComplete[muscleSelected]);
    week2percent = Math.ceil(percentageComplete?.week2PercentsComplete[muscleSelected]);
    week3percent = Math.ceil(percentageComplete?.week3PercentsComplete[muscleSelected]);
    week4percent = Math.ceil(percentageComplete?.week4PercentsComplete[muscleSelected]);
    if (Number.isNaN(week4percent) === true) {
      week4percent = 100;
    }
    if (Number.isNaN(week3percent) === true) {
      week3percent = 100;
    }
    if (Number.isNaN(week2percent) === true) {
      week2percent = 100;
    }
    if (Number.isNaN(week1percent) === true) {
      week1percent = 100;
    }
  }

## Contributors
- [Mark Brewer] (https://github.com/mark-e-brewer)
