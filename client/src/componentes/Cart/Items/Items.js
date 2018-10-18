import React, { Component } from 'react';

export class Items extends Component {

    render() {
        return (
            <div>
               <ul>
                    {this.props.items.map((item, index) => (
                        <li key={index}>
                            {item.name}
                        </li>
                    ))}
               </ul>
            </div>
        );
    }
}

export default Items;
