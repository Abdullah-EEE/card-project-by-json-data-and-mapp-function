// const todoTitle='Family card';
// const todoDesc="Abdullah AL Jabed";
const date=new Date();
const day=date.getDay();
const month=date.getMonth();
const year=date.getFullYear();

function Card(props){
   const {titleText,descText}=props;
   return <div className="card">
            <div className="familly"><h2>{titleText}</h2></div>
            <div className="message"><p>{descText}</p></div>
            <div className='date'>{day+"/"+month+"/"+year}</div>
            <div className="deco"> </div>
            <div className="decor"> </div>
         </div>
}

export default Card;