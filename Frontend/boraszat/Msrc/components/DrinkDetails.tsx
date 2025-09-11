import '../Mcss/DrinkDetails.css';
import type { DrinkDetailsProps } from '../types/drink';


const DrinkDetails: React.FC<DrinkDetailsProps> = ({ drink, onBack }) => {

    return (
        <div className='mainDetail'>
            <div className="drink-details">
                <div className="left-panel">
                    <img src={drink.image} alt={drink.name} />
                </div>
                <div className="right-panel">
                    <button onClick={onBack} className='backBtn'>← Vissza</button>
                    <h2>{drink.name}</h2>
                    <p>Ár: {drink.price} Ft</p>
                    <p className={`stock ${drink.stock ? 'in-stock' : 'out-of-stock'}`}>{drink.stock ? "Raktáron van" : "Jelenleg nem elérhető"}</p>
                    <p>Ez egy finom ital, tökéletes választás nyári napokra. 🍹</p>
                </div>
            </div>
        </div>
    );
};

export default DrinkDetails;