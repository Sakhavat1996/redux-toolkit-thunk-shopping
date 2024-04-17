export default function Notification({status , title , message}) {
  return (
    <div className={`notification ${status}`}>
        <p>{title}</p>
        <p>{message}</p>
    </div>
  );
}