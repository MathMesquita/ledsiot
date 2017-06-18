import React, { Component } from 'react';
import './App.css';

import Switch from './Switch';

/**
 * ip que o módulo do arduíno recebe ao se
 * conectar na rede, caso o ip não seja o mesmo
 * que nós conseguimos ao realizar os
 * experimentos, essa variável precisa ser
 * alterada.
 */
const ip = '192.168.43.29';

/**
 * array com as representações dos leds
 * LEMBRANDO > a variavel `pin` deve receber
 * o valor do pino no qual o led foi conectado
 * caso feito exatamente igual ao conteúdo do
 * relatório os pinos ja estão configurados
 * corretamente. a variável `name` não pode ser
 * alterada, pois é utilizada para adicionar as 
 * cores nos botões.
 */
const leds = [
  {
    pin: 13,
    name: 'vermelho'
  },
  {
    pin: 11,
    name: 'verde'
  },
  {
    pin: 12,
    name: 'amarelo'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {leds.map((l) => 
          <Switch 
            {...l}
            ip={ip}
            key={l.pin}
          />
        )}
      </div>
    );
  }
}

export default App;
