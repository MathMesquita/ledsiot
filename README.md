# Controle de luzes (IoT)

Esse projeto foi realizado durante a disciplina de programação em Arduíno na Universidade Católica de Petrópolis.

## Para rodar o projeto

Você precisará ter instalado o [nodejs](https://nodejs.org) e o gerenciador de pacotes [npm](https://www.npmjs.com/), que **usualmente ja é instalado automaticamente ao instalar o node**

```
git clone https://github.com/MathMesquita/ledsiot.git
cd ledsiot
npm install
npm start
```

Após esses passos, seu navegador padrão será aberto automaticamente em localhost:80, para outros dispositivos acessarem o site será necessário que eles digitem o endereço ip da sua maquina em seus navegadores.

### Outras considerações

- Para funcionar corretamente, os pinos dos leds devem estar conectados nos mesmos pinos que o relatório está informando. Caso você opte por conectar em pinos diferentes, será necessário ir ao arquivo `src/App.js` e a partir da linha `25` alterar as variáveis `pin` para o valor do pino que você selecionou.
- Talvez o ip obtido pelo seu Arduíno ao conectar na rede seja diferente do obtido no momento de nossos experimentos, dessa forma será necessário que você navegue até o arquivo `src/App.js` e na linha `13` alterar para o ip apresentado no seu serial.
- Talvez a porta 80 esteja sendo utilizada no seu sistema, sendo assim será necessário ir no arquivo `package.json` na linha `13` e remover `set PORT=80 &&` da string, ou somente alterar o valor `80` para algum valor de porta que você saiba estar livre.
- O fato dos dois casos estarem na linha `13` foi pura coincidência. lol