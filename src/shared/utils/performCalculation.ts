export const performCalculation = (
  num1: number,
  num2: number,
  operation: string
) => {
  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return null;
  }

  switch (operation) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "x":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return num1;
  }
};