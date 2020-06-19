import React from 'react';
import ReactSVG from 'react-svg';
import Name from './asset/Icons/np_profile.svg';
import Phone from './asset/Icons/np_mobil.svg';
import Email from './asset/Icons/np_email.svg';
import './sections/section.css';


const inputClass = (props) => {
    const {
        value, onChange, name, placeholder, fs, mrgn, type, iconValue, requiredInput,
    } = props;
    return (
        <div style={{
            width: '95%', border: '1px solid #7a7a7a', borderRadius: '20px', display: 'flex', flexDirection: 'row', margin: '5px 0',
        }}
        >
            <i style={{
                fontFamily: 'CaredoseIcons',
                fontStyle: 'normal',
                margin: `${mrgn}`,
                fontSize: `${fs}`,
                color: '#EC4D62',
            }}
            >{iconValue}
            </i>
            <input
                style={{
                    border: 'none',
                    height: '32px',
                    borderRadius: '0 20px 20px 0',
                    fontSize: '15px',
                    minWidth: 'calc(95% - 29px)',
                    fontWeight: '700',
                    placeholder: 'yolo',
                    paddingLeft: '5px',
                }}
                value={value}
                onChange={onChange}
                id={name}
                placeholder={placeholder}
                name="name"
                type={type}
                required={requiredInput}
            />
        </div>
    );
};

export default inputClass;
