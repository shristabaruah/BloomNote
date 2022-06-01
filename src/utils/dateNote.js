const Notedate = (dateNote)=>{
const arrayDate = dateNote.split(" ");
const [ day , month , date , year, time, ...metaDate] =arrayDate;
const formatDate = `${day} ${date} ${month} ${year}`;
return formatDate;
};
export { Notedate }