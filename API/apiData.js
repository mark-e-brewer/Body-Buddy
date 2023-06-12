import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getCurrGoal = (userUid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/goals.json?orderBy="userUid"&equalTo="${userUid}CURR"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getWorkoutsByWeekUid = (weekUid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/workouts.json?orderBy="weekUid"&equalTo="${weekUid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getWorkoutsByUserUid = (userUid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/workouts.json?orderBy="userUid"&equalTo="${userUid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getPrevWeeks = (userUid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/weeks.json?orderBy="userUid"&equalTo="${userUid}PREV"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getWeekByWeekUid = (weekUid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/weeks.json?orderBy="weekUid"&equalTo="${weekUid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getResetDay = (userUid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/resetDay.json?orderBy="userUid"&equalTo="${userUid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const postGoal = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/goals.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchGoal = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/goals/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const patchOldGoalToPrev = (payload, firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/goals/${firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const postWeek = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/weeks.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchWeek = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/weeks/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const postWorkout = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/workouts.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchWorkout = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/workouts/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteWorkout = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/workouts/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const postResetDay = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/resetDay.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchResetDay = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/resetDay/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getCurrGoal,
  getPrevWeeks,
  getWorkoutsByWeekUid,
  getWorkoutsByUserUid,
  getWeekByWeekUid,
  getResetDay,
  postGoal,
  patchGoal,
  patchOldGoalToPrev,
  postWeek,
  patchWeek,
  postWorkout,
  patchWorkout,
  deleteWorkout,
  postResetDay,
  patchResetDay,
};
