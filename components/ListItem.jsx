import Card from './Card';

function ListItem(props) {
    return (
        <li>
            <Card className='expense-item'>
                <div className="expense-item__description">
                    <h2>{props.title}
                    </h2>
                </div>
            </Card>
        </li>
    );
}

export default ListItem;