export const getTodaysDate = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()].toUpperCase();
  const month = months[today.getMonth()].toUpperCase();
  const dayOfMonth = today.getDate();
  const year = today.getFullYear();

  return `${dayOfWeek}, ${dayOfMonth}/${month}/${year}`;
};

export const getNameFromURL = () => {
  const currentUrl = window.location.href;
  const segments = currentUrl.split("/");
  const exerciseNameStr = segments[segments.length - 1];
  const exName = exerciseNameStr.replace(/%20/g, " ");
  return exName;
};
export const getOldRecord = () => {
  let exerciseHistory;
  let todaysDate = getTodaysDate();

  try {
    exerciseHistory = JSON.parse(localStorage.getItem("exerciseHistory"));
  } catch (error) {
    exerciseHistory = null;
  }

  if (exerciseHistory != null && exerciseHistory[todaysDate]) {
    return exerciseHistory[todaysDate];
  }
  return [];
};

export const random3DigitNumber = () => {
  return Math.floor(100 + Math.random() * 900);
};
