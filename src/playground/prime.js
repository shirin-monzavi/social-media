export default function Prime(maxNumber) {
    if (maxNumber < 2) {
        return 0;
    }
    const primeNumber = (number) => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }

            return true;
        }
    }

    let numbers = [];
    for (let i = 0; i < maxNumber; i++) {
        if (primeNumber(i)) {
            numbers.push(i)
        }
    }

    return numbers.length;
}