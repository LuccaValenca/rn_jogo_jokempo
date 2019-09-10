import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity } from 'react-native';
import Topo from './src/componentes/Topo';
import Icone from './src/componentes/Icone';

class app extends Component {

	constructor(props) {
		super(props);
	
		this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
		this.jokempo.bind(this);
		this.comparaResultado.bind(this);
	}

	jokempo(escolhaUsuario) {
		let escolhaComputador = Math.floor(Math.random() * 3);

		if (escolhaComputador === 0) {
			escolhaComputador = 'pedra';
		} else if (escolhaComputador === 1) {
			escolhaComputador = 'papel';
		} else if (escolhaComputador === 2) {
			escolhaComputador = 'tesoura';
		}

		this.setState({ 
			escolhaUsuario, 
			escolhaComputador,
			resultado: this.comparaResultado(escolhaUsuario, escolhaComputador) 
		});
	}

	comparaResultado(escolhaUsuario, escolhaComputador) {
		if (escolhaComputador === 'pedra') {
			switch (escolhaUsuario) {
				case 'pedra': return 'Empate';	
				case 'papel': return 'Você venceu :D';	
				case 'tesoura': return 'Você Perdeu :(';	
				default: return false;	
			}
		}

		if (escolhaComputador === 'papel') {
			switch (escolhaUsuario) {
				case 'pedra': return 'Você Perdeu :(';	
				case 'papel': return 'Empate';	
				case 'tesoura': return 'Você Venceu';	
				default: return false;	
			}
		}

		if (escolhaComputador === 'tesoura') {
			switch (escolhaUsuario) {
				case 'pedra': return 'Você Venceu :D';	
				case 'papel': return 'Você Perdeu :(';	
				case 'tesoura': return 'Empate';
				default: return false;
			}
		}
	}

	render() {
		return (
			<View style={estilos.viewGeral}>
				<Topo />
				<View style={estilos.viewBtns}> 
					<TouchableOpacity style={estilos.btn} onPress={() => { this.jokempo('pedra'); }}>
						<Text style={estilos.txt} >PEDRA</Text>
					</TouchableOpacity>

					<TouchableOpacity style={estilos.btn} onPress={() => { this.jokempo('papel'); }}>
						<Text style={estilos.txt} >PAPEL</Text>
					</TouchableOpacity>

					<TouchableOpacity style={estilos.btn} onPress={() => { this.jokempo('tesoura'); }}>
						<Text style={estilos.txt} >TESOURA</Text>
					</TouchableOpacity>
				</View>
				<View style={estilos.palco} >
					<Text style={estilos.txtResultado}> { this.state.resultado }</Text>
					<Icone escolha={this.state.escolhaComputador} jogador='Computador' />
				
					<Icone escolha={this.state.escolhaUsuario} jogador='Você' />
				</View>
			</View>
		);
	}
}

const estilos = {
	viewGeral: {
		flex: 1,
	},
	viewBtns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	palco: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		backgroundColor: '#fff',
		borderWidth: 1.5,
		borderColor: '#0085B2',
		borderRadius: 20,
		paddingVertical: 8,
		paddingHorizontal: 10,
		marginVertical: 15,
		marginHorizontal: 10,
		width: 90,
		height: 40,
	},
	txt: {
		color: '#0085B2',
		fontSize: 15,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	txtResultado: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'red',
		height: 40,
		marginBottom: 20,
	},
};

AppRegistry.registerComponent('jokempo', () => app);
