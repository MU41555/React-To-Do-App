import MyPlan from './myPlan';
import { useState } from 'react';

function Todo() {
    const [list, setlist] = useState("");
    const [item, setitem] = useState([]);


    const addlist = () => {
        setitem((myItem) => {
            return [...myItem, list];
        })
        setlist("");
    }

    // const deleteAll = () => {
    //     setitem((myItem) => {
    //         return remove()
    //     })
    // }

    const deleteItem = (id) => {
        setitem((myItem) => {
            return myItem.filter((arr, i) => {
                return i !== id;
            })
        })
    }

    // const editItem = (id) => {
    //     this.setitem((myItem) => {
    //         return myItem.filter((arr, i) => {
    //             return i == id;
    //         })
    //     })
    //     console.log("editItem");
    // }


    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
                        <h2 className="text-center">To do App</h2>
                        <div className="row">
                            <div className="col-10">
                                <input type="text" className="form-control" placeholder="Write Plan Here" value={list} onChange={(e) => { setlist(e.target.value) }} />
                            </div>
                            <div className="col-1">
                                <button className="btn btn-warning px-" onClick={addlist}><i className="fas fa-plus bg-warning fs-5"></i></button>
                            </div>
                            {/* <div className="col-1">
                                <button className="btn btn-warning px- " ><i className="fas fa-trash-alt bg-warning fs-5"></i></button>
                            </div> */}
                            <div className="container-fluid">
                                <ul className="list-unstyled row m-5 ">
                                    {item.map((itemAdd, index) => {
                                        return <MyPlan key={index} id={index} delete={deleteItem} text={itemAdd} />
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Todo;
