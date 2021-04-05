import React, { Component } from 'react';
import SearchBar from './SearchBar';
import InvTable from './InventoryTable';
// import API from '../utils/API';
// import moment from 'moment';
import '../css/Table.css';



class SearchContainer extends Component {
    state = {
        search: "",
        results: [],
        filtered: []
    };

    componentDidMount = () => {
        this.fetchInventory();
    }

    fetchInventory = () => {
        API.search()
            .then(response => {
                const filteredInventory = response.data.results.map(this.filteredInventoryResults)
                this.setState({ results: filteredInventory, filtered: filteredInventory })
            })
            .catch(err => console.log(err));
    }

    // pull out relevant data from api call
    filteredInventoryResults = inv => ({
        code: inv.code,
        name: inv.name,
        count: inv.count,
        price: inv.price,
    })

    // search function
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value

        const filteredInv = this.state.results.filter(x => x.name.toLowerCase().startsWith(value))
        
        this.setState({
            [name]: value,
            filtered: filteredInv
        });
    }

    orderAlphabetically = () => {
        const ordered = this.state.filtered.sort((a, b) => {
            let fa = a.first_name.toLowerCase(),
                fb = b.first_name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

        this.setState({
            filtered: ordered
        })
    }
    
    render() {
        const styles = {
            cell: {
                fontWeight: "bold"
            },

            hero: {
                backgroundColor: "#023047",
                borderBottom: "1rem solid #fb8500"
            }
        }
        
        return (
            <>
                <section className="hero is-link is-fullwidth" style={styles.hero}>
                    <div className="hero-body is-flex is-justify-content-center">
                        <div className="has-text-centered">
                            <p className="title">
                                Inventory Search
                            </p>
                            <p className="subtitle">
                                <em>Click on name to sort alphabetically</em>
                            </p>
                            <SearchBar
                                search={this.state.search}
                                handleInputChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </section>
                <br />
                <div className="mt-1">
                    <div className="table">
                        {/* <div className="cell">
                            <h2 style={styles.cell}>Photo</h2>
                        </div> */}
                        <div className="cell" onClick={this.orderAlphabetically}>
                            <h2 style={styles.cell}>Barcode</h2>
                        </div>
                        <div className="cell">
                            <h2 style={styles.cell}>Name</h2>
                        </div>
                        <div className="cell">
                            <h2 style={styles.cell}>Count</h2>
                        </div>
                        <div className="cell" onClick={this.orderByAge}>
                            <h2 style={styles.cell}>Price</h2>
                        </div>
                        <InvTable employees={this.state.filtered} orderAlphabetically={this.orderAlphabetically}/>
                    </div>
                </div>
            </>
        )
    }

}



export default SearchContainer;