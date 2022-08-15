const card='Family card';
const message="Abdullah AL shanto";
const date=new Date();
const day=date.getDay();
const month=date.getMonth();
const year=date.getFullYear();

function Card2(){
   return <div className="card">
            <div className="familly"><h2>{card}</h2></div>
            <div className="message"><p>{message}</p></div>
            <div className='date'>{day+"/"+month+"/"+year}</div>
            <div className="deco"> </div>
            <div className="decor"> </div>
         </div>
}

export default Card2;