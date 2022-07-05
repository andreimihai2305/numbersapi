import React, {Component} from "react";
import './Fact.css';



class Fact extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            fact: ''
        }
    }
    componentDidMount() {
        const { number, category } = this.props;
        if (number) fetch(`http://numbersapi.com/${number}/${category}`).then(res => res.text()).then(data => (this.setState( { fact: data} ))); 
      }

    componentDidUpdate(prevProps) {
        const { number, category } = this.props;
        if (prevProps.number !== number || prevProps.category !== category)
        {
           if (number) fetch(`http://numbersapi.com/${number}/${category}`).then(res => res.text()).then(data => this.setState({ fact: data }));
        }
    }
   
    render(){
        const {category, number} = this.props;
        return (
            <div className="container">
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Fact:</h2>
                <div className="body">
                    <h3 className="number">{number}</h3>
                    <p className="fact">{this.state.fact}</p>
                </div>
            </div>
        );
    }

}

export default Fact;