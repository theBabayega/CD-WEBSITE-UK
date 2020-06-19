import React from 'react';
import './sections/section.css';
import axios from 'axios';


class inputClass extends React.Component {
    state={ selectValue: 'select', data: [] }


    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://caredose-backend.herokuapp.com/api/partners.json', // '/api/partners.json',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                const a = response.data;
                this.setState({ data: a });
            })
            .catch((error) => {
                this.setState({
                });
                alert('error', error);
            });
    }

    handleChange= (e) => {
        const { handle } = this.props;
        this.setState({ selectValue: e.target.value });
        handle(e.target.value);
    };

    render() {
        const {
            iconValue,
        } = this.props;


        return (
            <div style={{
                width: '95%', border: '1px solid #7a7a7a', borderRadius: '20px', display: 'flex', flexDirection: 'row', margin: '5px 0',
            }}
            >
                <i style={{
                    fontFamily: 'CaredoseIcons',
                    fontStyle: 'normal',
                    margin: '9px 1px 9px 5px',
                    fontSize: '15px',
                    color: '#EC4D62',
                }}
                >{iconValue}
                </i>
                <select
                    id="selectTag"
                    style={{
                        border: 0,
                        borderRadius: '20px',
                        height: '32px',
                        fontSize: '15px',
                        minWidth: 'calc(95% - 20px)',
                        fontWeight: '700',
                        backgroundColor: '#fff',
                        color: '#696969',
                    }}
                    value={this.state.selectValue}
                    onChange={this.handleChange}
                >
                    <option
                        style={{
                            fontSize: '15px', fontWeight: '700', height: '30px',
                        }}
                        selected
                        value="default"
                    >No Preferred pharmacy
                    </option>
                    {this.state.data.map(text => <option style={{ fontSize: '15px', fontWeight: '700', height: '30px' }} value={text.name}>{text.name}</option>)}
                    <option
                        style={{
                            fontSize: '15px', fontWeight: '700', height: '30px',
                        }}
                        selected
                        value="Decide Later"
                    >Decide Later
                    </option>
                </select>
            </div>
        );
    }
}

export default inputClass;
