import React, {Component} from 'react';
  
class Admin extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

 
    componentDidMount() {
        fetch(
"http://localhost:3000/api/url/admin")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "Admin">
            <h1> All domains: </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    Domain_Name: { item.longUrl }, 
                    
                    </ol>
                ))
            }
        </div>
    );
}
}

export default Admin;