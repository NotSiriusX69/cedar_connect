
export const calculateAverage = (numbers) => {
    let sum = 0;
    let nb = 0;

    numbers.forEach((element) => {
      sum += element;
      nb++;
    });

    return (sum / nb).toFixed(1);
  };