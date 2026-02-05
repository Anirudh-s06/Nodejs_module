function getRandomNumber(): void {
  const randomInt = Math.floor(Math.random() * 1000) + 1;
  console.log(randomInt);
}

export default getRandomNumber;


getRandomNumber();