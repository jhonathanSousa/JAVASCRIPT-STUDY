function getDate(){

  const date = new Date();

  // DATE
  const day = String(date.getDate()).padStart(2 , '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const fullDate = `${day}/${month}/${year}`;

  // HOURS
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const fullHours = `${hours}:${minutes}`;

  const dayToday = String(date.getDay());

  switch(dayToday){
    case '0':
      console.log(`Today is Sunday, Day ${fullDate}, the time is ${fullHours}`);
    break;

    case '1':
      console.log(`Today is Monday, Day ${fullDate}, the time is ${fullHours}`);
    break;

    case '2':
      console.log(`Today is Tuesday, Day ${fullDate}, the time is ${fullHours}`);
    break;

    case '3':
      console.log(`Today is Wednesday, Day ${fullDate}, the time is ${fullHours}`);
    break;
    
    case '4':
      console.log(`Today is Thursday, Day ${fullDate}, the time is ${fullHours}`);
    break;

    case '5':
      console.log(`Today is Friday, Day ${fullDate}, the time is ${fullHours}`);
    break;

    case '6':
      console.log(`Today is Saturday, Day ${fullDate}, the time is ${fullHours}`);
    break;

    default:
      console.log('Day of week not found');
  }
}

getDate();

