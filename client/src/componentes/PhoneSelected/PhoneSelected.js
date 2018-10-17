import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPhoneById } from './../../actions/phones/phonesActions';

import './PhoneSelected.css';

class PhoneSelected extends Component {

    componentDidMount() {
        this.props.fetchPhoneById(this.props.id);
    }

    
    render() {
        
        console.log(this.props.phoneSelected[0]);
        
        /* if(this.props.phoneSelected[0]) {
            const {image, name, price, description} = this.props.phoneSelected[0];
        } */
        

        return(
            
            <div className = "info-producto" > 
            
                {/* <div className="imagen">
                    <img src={`${image}`} alt={name} />
                </div>

                <div className="info">
                    <h2>{name}</h2>
                    <p className="precio">$ {price}</p>
                    <p>{description}</p>
                </div>  */}
                
            </div>
        )
      
    }
  
}

const mapStateToProps = state => ({
    phoneSelected: state.phones.phoneSelected
})
 
export default connect(mapStateToProps, { fetchPhoneById })(PhoneSelected);
