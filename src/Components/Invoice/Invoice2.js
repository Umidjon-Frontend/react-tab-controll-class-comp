import React, { Component } from 'react';

class Invoice2 extends Component {
  
  render() {
    const {active} = this.props
    return (
      <div className={(active === 2 ? "tab-active": "")}>
        {console.log(this.props.active)}
        <h1>Invoice2</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt animi, ipsum autem adipisci nostrum eius consequatur unde accusantium repudiandae alias enim sint laudantium iusto repellat rerum. Tenetur fugit ea soluta?</p>
        <br />
        <hr />
        <br />
        <h3>Invoice2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates iusto consequatur repellendus quia nemo adipisci omnis optio accusamus quasi quis commodi, quam corporis, non qui eligendi! Molestias, praesentium tempora consectetur vitae, amet excepturi omnis incidunt, sapiente ipsam quibusdam distinctio nam vel error delectus. Cupiditate laudantium amet magnam laborum necessitatibus.</p>
        <br />
        <button className="btn-learn">Learn</button>
      </div>
    );
  }
}

export default Invoice2;