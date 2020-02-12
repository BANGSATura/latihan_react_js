import React, { Component } from 'react';
import ListImage from '../LibraryList/ListImage.js'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      namaKarakter: ""
    }
    this.handleEventShingenTakeda = this.handleEventShingenTakeda.bind(this);
    this.handleEventSanadaYukimura = this.handleEventSanadaYukimura.bind(this);
    this.handleEventUesugiKenshin = this.handleEventUesugiKenshin.bind(this);
    this.handleEventBatal = this.handleEventBatal.bind(this);
    this.handleEventPilih = this.handleEventPilih.bind(this);
  }
  handleEventShingenTakeda() {
    this.setState((props,state) => {
      return {
        namaKarakter: "Shingen Takeda",
        display: "Tampil"
      };
    });
  }
  handleEventSanadaYukimura() {
    this.setState((props,state) => {
      return {
        namaKarakter: "Sanada Yukimura",
        display: "Tampil"
      };
    });
  }
  handleEventUesugiKenshin() {
    this.setState((props,state) => {
      return {
        namaKarakter: "Uesugi Kenshin",
        display: "Tampil"
      };
    });
  }
  handleEventBatal() {
    this.setState((props,state) => {
      return {
        namaKarakter: "",
        display:""
      };
    });
  }
  handleEventPilih() {
    alert("Anda Memilih " + this.state.namaKarakter);
  }
    render() {
      return (
        <div>
          <center>
            <table>
              <thead>
                <tr>
                  <th colSpan="3">
                    <center>Random Pic</center>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    ListImage.map((value,index) => {
                      return (
                        <td key={index}>
                          <img src={value.LinkImg} alt={value.nama} title={value.nama} width="200" height="200"/>
                          <center>
                            <caption>
                              <b>{value.nama}</b>
                            </caption>
                          </center>
                        </td>
                      );
                    })
                  }
                </tr>
                <tr>
                  <td>
                    <center>
                      <button onClick={this.handleEventShingenTakeda}>Saya Pilih Ini !</button>
                    </center>
                  </td>
                  <td>
                    <center>
                      <button onClick={this.handleEventSanadaYukimura}>Saya Pilih Ini !</button>
                    </center>
                  </td>
                  <td>
                    <center>
                      <button onClick={this.handleEventUesugiKenshin}>Saya Pilih Ini !</button>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
            {
              this.state.display === "Tampil" ? (
                <div>
                  <h2>Anda Yakin Memilih {this.state.namaKarakter} ?</h2>
                  <button onClick={this.handleEventPilih}>Pilih</button>
                  <button onClick={this.handleEventBatal}>Batal</button>
                </div>
              ) : (
                <div>

                </div>
              )
            }
          </center>
        </div>
      );
    }

}

export default Main;
