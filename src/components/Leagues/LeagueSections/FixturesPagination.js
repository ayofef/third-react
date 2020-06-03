import React, { useState} from 'react';



function Fixtures () {

    const [fixtures, setFixtures] = useState(['a','b','c','d','e','f','g','h','i','j','k']);
    const [currentPage, setCurrentPage] = useState(1);
    const fixturesPerPage = 5;
    

    const nextPage = () =>{
        if(currentPage <= fixtures.length){
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () =>{
        if(currentPage >= 1){
            setCurrentPage(currentPage - 1)
        }
    }

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * fixturesPerPage;
    const indexOfFirstTodo = indexOfLastTodo - fixturesPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);


  

    return (
    <div>
        <ul>
        {
            currentTodos.map((el, index) => {
                return <li key={index}>{el}</li>;
                })
        
        }
        </ul>
    </div>
    );
}



export default Fixtures;