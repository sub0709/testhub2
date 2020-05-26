import React, { Component } from "react";

import numeral from 'numeral';

class TbodyComponent extends Component {
	constructor(props) {
		super(props);

		this.makeTr = this.makeTr.bind(this);
	}

	makeTr(data) {
		return (
			<tr key={data.address}>
							
				<td style={{color:'#1aaaba'}}>{data.address}</td>

				{/* /* 소수점 존재하는만큼만 출력. 뒤에 불필요한 0제외 */}
				<td>{numeral(data.balance).format('0,.0000')} ICX</td>

				<td>{numeral(data.icxUsd).format('0,.000')} USD</td>

				<td>{numeral(data.percentage).format('0.0000')}%</td>

				<td>{numeral(data.txCount).format('0,0')}</td>

				<td>{data.nodeType}</td>
			</tr>  
		);
	}
  render() {
    
    return (
      this.props.list.map((data) => {
					// eslint-disable-next-line no-lone-blocks
					{
						return this.makeTr(data)
					}
      })
    )
  }
}
export default TbodyComponent;