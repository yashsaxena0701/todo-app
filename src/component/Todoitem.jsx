import Button from "./Button";

function Todoitem({ todoname, tododate, }) {

    return (
        <>

            <div className="container" >
                <div className="row mt-1">
                    <div class="col-4">
                        {todoname}
                    </div>
                    <div className="col-4">
                        {tododate}
                    </div>
                    <Button btnType="danger" name="Delete" />
                </div>
            </div>



        </>
    )

}
export default Todoitem;
