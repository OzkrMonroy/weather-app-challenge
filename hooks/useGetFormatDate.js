const { useState, useEffect } = require("react")

const useGetFormatDate = (date) => {
  const [formatedDate, setFormatedDate] = useState("");

  useEffect(() => {
    formatDate()
  }, [date]);

  const formatDate = () => {
    const dateToFormat = date ? new Date(date) : new Date();
    const dateArray = dateToFormat.toDateString().split(" ");

    const dateFormated = `${dateArray[0].toString()}. ${dateArray[2].toString()} ${dateArray[1].toString()}`

    setFormatedDate(dateFormated);
  }

  return {
    formatedDate
  }
}

export default useGetFormatDate