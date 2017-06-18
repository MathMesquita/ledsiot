import React from 'react'

const turnOnLight = (pin, ip) => () => {
  fetch(`http://${ip}/?pin=${pin}1`);
  location.reload();
};

const turnOffLight = (pin, ip) => () => {
  fetch(`http://${ip}/?pin=${pin}0`);
  location.reload();
};

const Switch = ({
  pin,
  name,
  ip,
}) => {
  return (
    <div className={`ledsBtn__container ${name}`}>
      <button onClick={turnOnLight(pin, ip)}>Ligar {name}</button>
      <button onClick={turnOffLight(pin, ip)}>Desligar {name}</button>
    </div>
  )
}

export default Switch