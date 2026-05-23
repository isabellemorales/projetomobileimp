const lista_produtos = {
	itens: {
		titulo: "Veja nossos produtos!",
		lista: [
			{
				id: 1,
				nome: "Body",
				categoria: "Biquinis",
				descricao: "Temos outros modelos e cores.",
				preco: "R$ 89,90",
				imagem: require("../../assets/body_capa.jpg"),
				imagemModal: [
					require("../../assets/body_01.jpeg"),
					require("../../assets/body_02.jpeg"),
					require("../../assets/body_03.png"),
				],
			},
			{
				id: 2,
				nome: "Saias",
				categoria: "Saidas",
				descricao: "Varios modelos e cores disponiveis.",
				preco: "R$ 79,90",
				imagem: require("../../assets/saias_capa.jpg"),
				imagemModal: [
					require("../../assets/saia_01.jpg"),
					require("../../assets/saia_02.jpg"),
				],
			},
			{
				id: 3,
				nome: "Chapéu de Palha",
				categoria: "Chapeus",
				descricao: "Leve, estiloso e protetor.",
				preco: "R$ 59,90",
				imagem: require("../../assets/chapeu_capa.jpg"),
				imagemModal: [
					require("../../assets/chapeu_01.jpeg"),
					require("../../assets/chapeu_02.png"),
					require("../../assets/chapeu_03.jpg"),
				],
			},
			{
				id: 4,
				nome: "Bolsas",
				categoria: "Acessorios",
				descricao: "Perfeitas para a praia.",
				preco: "R$ 129,90",
				imagem: require("../../assets/bolsa_capa.jpg"),
				imagemModal: [
					require("../../assets/bolsa_01.jpeg"),
					require("../../assets/bolsa_02.jpeg"),
					require("../../assets/bolsa_03.png"),
				],
			},
			{
				id: 5,
				nome: "Biquinis",
				categoria: "Biquinis",
				descricao: "Varios modelos e cores disponiveis.",
				preco: "R$ 119,90",
				imagem: require("../../assets/biquinis_capa.png"),
				imagemModal: [
					require("../../assets/biquini_01.jpg"),
					require("../../assets/biquini_02.jpg"),
					require("../../assets/biquini_03.jpg"),
				],
			},
			{
				id: 6,
				nome: "Brincos",
				categoria: "Acessorios",
				descricao: "Elegante e estiloso.",
				preco: "R$ 99,90",
				imagem: require("../../assets/brinco_capa.jpg"),
				imagemModal: [
					require("../../assets/brinco_01.png"),
					require("../../assets/brinco_02.jpeg"),
					require("../../assets/brinco_03.jpeg"),
				],
			},
		],
	},
};

export default lista_produtos;
