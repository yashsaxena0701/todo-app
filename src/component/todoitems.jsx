import Todoitem from "./Todoitem";

const Todoitems = ({ todolist }) => {

    return (
        <div>
            {todolist && todolist?.length > 0 && todolist?.map((item, index) => (
                <Todoitem todoname={item.name} tododate={item.date} />
            ))}
        </div>
    );
}
export default Todoitems;