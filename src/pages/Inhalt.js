import '../inhalt.css';
import Linux from '../IMG/Linux.png';

function Inhalt (){

    return (

        <>
        <div className="content">
            <div className='allbuttons'>

                <button className='button'><img src={Linux} alt="lnx"/></button>

                <button>AWS Cloud</button>
                <button>Datenbank</button>
                <button>Dockers</button>
                <button>Scrum</button>
                <button>Azure</button>

            </div>
        </div>
        </>
    )
}

export default Inhalt;