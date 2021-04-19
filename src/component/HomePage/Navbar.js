import React from 'react';
import './Navbar.css'

const styles = {
    color: "rgb(3, 172, 14)",
    backgroundColor: "rgb(243, 243, 243)",
    borderRadius: "4px"
}

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    searchBar() {

    }

    render() {
        return(
            <div>
                <div id="header-main-wrapper" className="css-19rqlec">
                    <div className="css-1jzqg4i">
                        <div className="css-1t2cza5">
                            <i className="css-5nsulm"></i>
                            <a href="#" target="blank" rel="noopener noreferrer" className="css-7k4lit">Download TooKoo_diL App</a>
                        </div>
                    </div>
                    <div className="css-1s8dqy5">
                        <a href="#" className="css-lays7ve"><img alt="TooKoo_diL-logo" src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"></img></a>
                        <div className="css-1qr7rcv">
                            <div className="css-liy09lx">
                                <div className="css-vk082c" style={styles}>Kategori</div>
                            </div>
                        </div>
                        <div width="46%" className="css-vkrjwi">
                            <form className="css-w3ze74" method="get">
                                <div className="css-lwwmre3">
                                    <div className="css-103lvbt">
                                        <div className="css-rl8xd2 e16vycsw0" height="auto">
                                            <button aria-label="Tombol Pencarian" height="auto" type="submit" className="css-lymn4im">
                                            <i class="fas fa-search"></i>
                                            </button>
                                            <input aria-label="Bidang pencarian" type="text" className="css-4eg0ft" placeholder="Cari"></input>
                                        </div>
                                    </div>  
                                </div>
                            </form>
                        </div>
                        <div className="css-1sib086">
                            <div className="css-az4ufh">
                                <div className="css-1go1zqz">
                                    <i className="css-15kuy91"></i>
                                    <span class="css-12fn80l">22</span>
                                </div>
                            </div>
                            <div className="css-az4ufh">
                                <div className="css-1go1zqz">
                                    <i className="css-1h3ruyk"></i>
                                    <span className="css-12fn80l">2</span>
                                </div>
                            </div>
                            <div className="css-az4ufh">
                                <div className="css-1go1zqz">
                                    <i class="css-14tknib"></i>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        )
    }
}