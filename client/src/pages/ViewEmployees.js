import React, {useState, useEffect} from 'react';
import useAuth from '../utils/useAuth';
import EmployeeApi from '../utils/EmployeeApi';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmpTable from '../components/EmployeeTable';

function SearchBar(props) {
    return (
            <form>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search"
                        onChange={props.handleInputChange}
                        value={props.search}
                        handleSubmit ={props.handleFilter}
                        name="search"
                    />
                </div>
            </form>
    )
}


function ViewEmployees() {
    const styles = {

        cell: {
            fontWeight: 'bold'
        },

        container: {
            backgroundColor: "white",
        },

        link: {
            textDecoration: 'none'
        }
    };

    const [search, setSearch] = useState();
    const [filteredEmployees, setFiltered] =useState();
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadEmployees();
  
      }, [])

    function loadEmployees() {
        EmployeeApi.getEmployees()
        .then(res => {
          setEmployees(res.data)
          setFiltered(res.data)
        })
        .catch(err => console.log(err));
    };

    const handleInputChange = event => { 
        setSearch(event.target.value);
       
        const employeeTempArray = filteredEmployees.filter(item =>{
            return item.name.toLowerCase().includes(search?.toLowerCase());
         
        })
        
        setFiltered(employeeTempArray)
        if (search === "" ){
            setFiltered (employees)
        }
        console.log(employeeTempArray);
    };

    useAuth();

    useEffect(async ()=> {
        const result = await EmployeeApi.getEmployees();

        console.log(result);
    })

    return(
        <div>
            <Navbar/>
            <Header heading={'View Employees'}/>
            <SearchBar value= {search} handleInputChange = {handleInputChange} />
            
            <div classname= 'mt-3'>
                <div className='table'>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>First Name</h2>
                    </div>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>Last Name</h2>
                    </div>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>Company</h2>
                    </div>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>Email</h2>
                    </div>
                    <div className='cell'>
                            <h2 className="table-heading" style={styles.cell}>Delete</h2>
                    </div>
                    

                </div>
            </div>
           
            <Footer />
        </div>
    )
}

export default ViewEmployees;