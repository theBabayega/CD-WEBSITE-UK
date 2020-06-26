import React from 'react';
import Logo from '../asset/Logo_CD.png';
import './section.css';

// var Dropdown = require('react-simple-dropdown');


class menu extends React.Component {

    state = {
        menuPosition: false,
    }

    toggleMenu = () => {
        const temp = this.state.menuPosition;
        this.setState({
            menuPosition: !temp,
        });
    }
    handleCloseLocation = (event) => {
        if (event.target.value == "OS" || event.target.value == "AU") {
            window.open("https://caredose.com/about");
        } else if (event.target.value == "T") {
            window.open("https://caredose.com");
        }
    }
    componentDidMount() {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.style.height = "49px";
                c.style.display = "flex";
                c.style.justifyContent = "center";
                c.style.alignItems = "center";
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            if (h.innerHTML == "Our Story") {
                                window.location = "https://cd-website-uk.vercel.app/about";

                            } else {
                                window.location = "https://cd-website-uk.vercel.app/about#team";

                            }
                            // y = this.parentNode.getElementsByClassName("same-as-selected");
                            // yl = y.length;
                            // for (k = 0; k < yl; k++) {
                            //     y[k].removeAttribute("class");
                            // }
                            // this.setAttribute("class", "same-as-selected");
                            // break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, xl, yl, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    }

    render() {
        return (
            <div
                // onClick={this.toggleMenu}
                className={this.state.menuPosition ? 'MenuHtController' : 'MenuHtController heightLimit50'}
                style={{
                    position: 'fixed',
                    zIndex: '10',
                    top: '0',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                }}
            >
                <div
                    className="menuImgNav"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '95%',
                        padding: '0 5%',
                    }}
                >
                    <a onClick={this.toggleMenu} style={{ position: 'absolute', top: '20px', left: '10px' }}>
                        {/* <img src={Logo} alt="d" style={{ height: '10px', width: '8px' }} /> */}
                        <div
                            className="hamburger"
                            style={{
                                width: '21px', height: '3px', backgroundColor: '#000', margin: '3px',
                            }}
                        />
                        <div
                            className="hamburger"
                            style={{
                                width: '21px', height: '3px', backgroundColor: '#000', margin: '3px',
                            }}
                        />
                        <div
                            className="hamburger"
                            style={{
                                width: '21px', height: '3px', backgroundColor: '#000', margin: '3px',
                            }}
                        />
                    </a>
                    <div id="logoContainer" style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={Logo} alt="logo" style={{ height: '40px', margin: 'auto 10px auto auto' }} />
                        <h3 style={{
                            fontFamily: 'BaskervilleLOGO', fontWeight: '100', display: 'flex', alignItems: 'center',
                        }}
                        >CARE<span style={{ fontFamily: 'Baskerville_Italic' }}>DOSE</span>
                        </h3>
                    </div>

                    <div
                        style={{
                            display: this.state.menuPosition ? 'block' : window.innerWidth > 975 ? 'block' : 'none',
                        }}
                    >
                        <div
                            className="navbar"
                        >
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="https://cd-website-uk.vercel.app#homeStart">Home</a>
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="https://cd-website-uk.vercel.app#technology">Technologies</a>
                            {/* <select name="cars" id="cars" style={{
                                border: 'none',
                                backgroundColor: '#00000000',
                                fontSize: '17px',
                                fontFamily: 'Lato,sans-serif',
                                textAlign: 'center',
                                color: '#4a4a4a',
                                padding: '13px 16px'
                            }}
                                onChange={event => this.handleCloseLocation(event)} >
                                <option value="AU">About Us</option>
                                <option value="OS">Our Story</option>
                                <option value="T">Team</option>
                            </select> */}
                            <a class="custom-select" >
                                <select>
                                    <option value="0">About Us</option>
                                    <option value="1">Our Story</option>
                                    <option value="1">Team</option>
                                </select>
                            </a>
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="https://cd-website-uk.vercel.app#news">News</a>
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="https://cd-website-uk.vercel.app#cu">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default menu;
