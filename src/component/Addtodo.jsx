import Button from "./Button";

function Addtodo() {
    return <div class="container">
        <div class="row">
            <div class="col-4">
                <input className="enter w-5 h-5" type="text" placeholder="Enter Todo here"></input>
            </div>
            <div class="col-4">
                < input type="date" className="date w-4 h-4" ></input>
            </div>
            {/* <div class="col-2">
                <button type="button" class="btn btn-success $btn-font-weight: bolder px-4  button" >Add</button>
            </div> */}
            <Button btnType="success" name="Add" />

        </div>
    </div>




}
export default Addtodo;