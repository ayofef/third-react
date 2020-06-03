

const DateFormatter = (date) =>{

    // const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    const receivedDate = new Date(date);

   const preProcessed = receivedDate.toDateString().split(" ");
    const day = preProcessed[2];
    const month = preProcessed[1];
    const year = preProcessed[3];
    const processedDate = `${month} ${day}, ${year}`

    // console.log( preProcessed)
    return processedDate

}

export default DateFormatter;