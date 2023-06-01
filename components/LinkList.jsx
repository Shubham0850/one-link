import ListItem from './ListItem';

const LinkList = (props) => {
    return (
        <ul className='expenses-list'>
            {
                props.items.map((expense) => (
                    <ListItem
                    key = {expense.id}
                    title = {expense.title}
                    />
                ))
            }
        </ul>
    )
}

export default LinkList