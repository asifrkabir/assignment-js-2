// https://github.com/AsifRKabir/assignment-js-2

// ----------Task 1----------

function kilometerToMeter(lengthInKm) {

    if (lengthInKm < 0 || lengthInKm == null || lengthInKm == undefined || typeof lengthInKm != 'number') {
        return "Please enter a positive number";
    }
    else {
        return lengthInKm * 1000;
    }

}

// --------------------------

// ----------Task 2----------

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {

    if ((numberOfWatch && numberOfPhone && numberOfLaptop) < 0 || (numberOfWatch && numberOfPhone && numberOfLaptop) == null || (numberOfWatch && numberOfPhone && numberOfLaptop) == undefined || typeof (numberOfWatch && numberOfPhone && numberOfLaptop) != 'number') {
        return "Please enter a positive number";
    }
    else {
        return (numberOfWatch * 50 + numberOfPhone * 100 + numberOfLaptop * 500);
    }

}

// --------------------------

// ----------Task 3----------

function hotelCost(numberOfDays) {

    if (numberOfDays <= 0 || numberOfDays == null || numberOfDays == undefined || typeof numberOfDays != 'number') {
        return "Please enter a positive number greater than 0";
    }
    else {

        if (numberOfDays <= 10) {
            return numberOfDays * 100;
        }
        else if (numberOfDays <= 20) {
            return (10 * 100 + (numberOfDays - 10) * 80);
        }
        else {
            return (10 * 100 + 10 * 80 + (numberOfDays - 20) * 50);
        }

    }

}

// --------------------------

// ----------Task 4----------

function megaFriend(nameArray) {

    if (!nameArray || nameArray.length == 0) {
        return "Please enter a valid array containing strings";
    }
    else {

        if (nameArray.length == 1) {

            if (typeof nameArray[0] == 'string') {
                return nameArray[0];
            }
            else{
                return "Please enter a valid array containing strings";
            }
            
        }
        else {

            var largestName;

            if (typeof nameArray[0] == 'string') {
                largestName = nameArray[0];
            }
            else{
                return "Please enter a valid array containing strings";
            }

            for (var i = 1; i < nameArray.length; i++) {

                if (typeof nameArray[i] != 'string') {
                    return "Please enter a valid array containing strings";
                }
                else {
                    if (largestName.length < nameArray[i].length) {
                        largestName = nameArray[i];
                    }
                }

            }

            return largestName;

        }

    }

}

// --------------------------